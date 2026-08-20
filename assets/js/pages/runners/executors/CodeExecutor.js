const JAVASCRIPT_TIMEOUT_MS = 5000;

const JAVASCRIPT_WORKER_SOURCE = `
function formatValue(value) {
  if (typeof value === 'string') return value;
  try {
    const serialized = JSON.stringify(value);
    return serialized === undefined ? String(value) : serialized;
  } catch (_error) {
    return String(value);
  }
}

self.onmessage = function(event) {
  const logs = [];
  const capture = function(...values) {
    logs.push(values.map(formatValue).join(' '));
  };

  console.log = capture;
  console.info = capture;
  console.warn = capture;
  console.error = capture;

  try {
    (0, eval)(event.data.code);
    self.postMessage({ ok: true, output: logs.join('\\n') });
  } catch (error) {
    self.postMessage({ ok: false, error: error && error.message ? error.message : String(error) });
  }
};
`;

export class CodeExecutor {
  constructor({ editor, outputElement, execTimeElement, languageSelect, pythonURI, javaURI, fetchOptions = {} } = {}) {
    this.editor = editor;
    this.outputElement = outputElement;
    this.execTimeElement = execTimeElement;
    this.languageSelect = languageSelect;
    this.pythonURI = pythonURI;
    this.javaURI = javaURI;
    this.fetchOptions = fetchOptions;
  }

  async run() {
    const code = this.editor?.getValue?.() || '';
    const lang = this.languageSelect?.value || 'python';
    const outputDiv = this.outputElement;
    const execTimeSpan = this.execTimeElement;

    if (!outputDiv) {
      throw new Error('CodeExecutor requires an output element');
    }

    outputDiv.textContent = '⏳ Running...';
    if (execTimeSpan) execTimeSpan.textContent = '';

    const startTime = Date.now();

    if (lang === 'javascript') {
      return this.runJavaScriptLocally(code, startTime);
    }

    let runURL;
    if (lang === 'python') runURL = `${this.pythonURI}/run/python`;
    else if (lang === 'java') runURL = `${this.javaURI}/run/java`;
    else throw new Error(`Unsupported language: ${lang}`);

    const body = JSON.stringify({ code });
    const options = { ...this.fetchOptions, method: 'POST', body };

    try {
      const res = await fetch(runURL, options);
      const result = await res.json();
      const output = result.output || '[no output]';

      outputDiv.textContent = output;
      if (execTimeSpan) {
        execTimeSpan.textContent = `⏱Execution time: ${Date.now() - startTime}ms`;
      }
    } catch (err) {
      outputDiv.textContent = 'Error: ' + err.message;
      if (execTimeSpan) execTimeSpan.textContent = '';
    }
  }

  runJavaScriptLocally(code, startTime) {
    const outputDiv = this.outputElement;
    const execTimeSpan = this.execTimeElement;

    return new Promise((resolve) => {
      let worker;
      let workerURL;
      let timeoutId;
      let settled = false;

      const finish = (message, showExecutionTime = false) => {
        if (settled) return;
        settled = true;
        if (timeoutId) clearTimeout(timeoutId);
        if (worker) worker.terminate();
        if (workerURL) URL.revokeObjectURL(workerURL);
        outputDiv.textContent = message;
        if (execTimeSpan) {
          execTimeSpan.textContent = showExecutionTime
            ? `⏱Execution time: ${Date.now() - startTime}ms (browser)`
            : '';
        }
        resolve();
      };

      try {
        const workerBlob = new Blob([JAVASCRIPT_WORKER_SOURCE], { type: 'text/javascript' });
        workerURL = URL.createObjectURL(workerBlob);
        worker = new Worker(workerURL);

        worker.onmessage = (event) => {
          if (event.data?.ok) {
            finish(event.data.output || '[no output]', true);
          } else {
            finish('Error: ' + (event.data?.error || 'JavaScript execution failed'));
          }
        };

        worker.onerror = (event) => {
          finish('Error: ' + (event.message || 'JavaScript execution failed'));
        };

        timeoutId = setTimeout(() => {
          finish(`Error: JavaScript execution exceeded ${JAVASCRIPT_TIMEOUT_MS / 1000} seconds`);
        }, JAVASCRIPT_TIMEOUT_MS);

        worker.postMessage({ code });
      } catch (error) {
        finish('Error: ' + (error.message || String(error)));
      }
    });
  }

  bindCopyOutput(button) {
    if (!button || !this.outputElement) return;

    button.addEventListener('click', () => {
      const output = this.outputElement.textContent;
      const original = button.textContent;
      navigator.clipboard.writeText(output).then(() => {
        button.textContent = '✔';
        setTimeout(() => {
          button.textContent = original;
        }, 1200);
      });
    });
  }
}

export default CodeExecutor;
