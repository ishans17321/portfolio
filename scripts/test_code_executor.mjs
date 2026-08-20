import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, '..');
const executorPath = path.join(repositoryRoot, 'assets/js/pages/runners/executors/CodeExecutor.js');
const executorSource = readFileSync(executorPath, 'utf8');
const executorModule = await import(
  'data:text/javascript;base64,' + Buffer.from(executorSource).toString('base64')
);

const originalBlob = globalThis.Blob;
const originalWorker = globalThis.Worker;
const originalCreateObjectURL = globalThis.URL.createObjectURL;
const originalRevokeObjectURL = globalThis.URL.revokeObjectURL;
const originalFetch = globalThis.fetch;

let fetchCalls = 0;
let terminatedWorkers = 0;
let revokedURLs = 0;

class FakeBlob {
  constructor(parts, options) {
    this.parts = parts;
    this.options = options;
  }
}

class FakeWorker {
  constructor(url) {
    this.url = url;
    this.onmessage = null;
    this.onerror = null;
  }

  postMessage({ code }) {
    queueMicrotask(() => {
      const logs = [];
      const capture = (...values) => logs.push(values.map(String).join(' '));
      const localConsole = { log: capture, info: capture, warn: capture, error: capture };

      try {
        Function('console', code)(localConsole);
        this.onmessage({ data: { ok: true, output: logs.join('\n') } });
      } catch (error) {
        this.onmessage({ data: { ok: false, error: error.message } });
      }
    });
  }

  terminate() {
    terminatedWorkers += 1;
  }
}

globalThis.Blob = FakeBlob;
globalThis.Worker = FakeWorker;
globalThis.URL.createObjectURL = (blob) => {
  assert.match(blob.parts.join(''), /self\.onmessage/);
  return 'blob:code-runner-test';
};
globalThis.URL.revokeObjectURL = (url) => {
  assert.equal(url, 'blob:code-runner-test');
  revokedURLs += 1;
};
globalThis.fetch = async () => {
  fetchCalls += 1;
  return { json: async () => ({ output: 'remote output' }) };
};

function createExecutor(code, language = 'javascript') {
  const outputElement = { textContent: '' };
  const execTimeElement = { textContent: '' };
  const executor = new executorModule.CodeExecutor({
    editor: { getValue: () => code },
    outputElement,
    execTimeElement,
    languageSelect: { value: language },
    pythonURI: 'https://python.example.test',
    javaURI: 'https://java.example.test',
  });
  return { executor, outputElement, execTimeElement };
}

try {
  const success = createExecutor('console.log("CPU", 1); console.warn("installed");');
  await success.executor.run();
  assert.equal(success.outputElement.textContent, 'CPU 1\ninstalled');
  assert.match(success.execTimeElement.textContent, /\(browser\)$/);
  assert.equal(fetchCalls, 0, 'JavaScript must not call the remote execution server');

  const failure = createExecutor('throw new Error("bad placement");');
  await failure.executor.run();
  assert.equal(failure.outputElement.textContent, 'Error: bad placement');
  assert.equal(failure.execTimeElement.textContent, '');

  const empty = createExecutor('const part = "CPU";');
  await empty.executor.run();
  assert.equal(empty.outputElement.textContent, '[no output]');

  const python = createExecutor('print("CPU")', 'python');
  await python.executor.run();
  assert.equal(fetchCalls, 1, 'Python remote execution behavior must remain unchanged');
  assert.equal(python.outputElement.textContent, 'remote output');

  assert.equal(terminatedWorkers, 3);
  assert.equal(revokedURLs, 3);
  console.log('Code executor checks passed: JavaScript runs locally without fetch.');
} finally {
  globalThis.Blob = originalBlob;
  globalThis.Worker = originalWorker;
  globalThis.URL.createObjectURL = originalCreateObjectURL;
  globalThis.URL.revokeObjectURL = originalRevokeObjectURL;
  globalThis.fetch = originalFetch;
}
