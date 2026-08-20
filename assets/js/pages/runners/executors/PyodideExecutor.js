const DEFAULT_INDEX_URL = 'https://cdn.jsdelivr.net/pyodide/v0.23.4/full/';

let runtimePromise = null;

function loadRuntime(indexURL) {
  if (typeof globalThis.loadPyodide !== 'function') {
    throw new Error('The browser Python engine did not load. Refresh the page and try again.');
  }

  if (!runtimePromise) {
    runtimePromise = globalThis.loadPyodide({ indexURL }).catch((error) => {
      runtimePromise = null;
      throw error;
    });
  }

  return runtimePromise;
}

export class PyodideExecutor {
  constructor({ outputElement, execTimeElement, indexURL = DEFAULT_INDEX_URL } = {}) {
    this.outputElement = outputElement;
    this.execTimeElement = execTimeElement;
    this.indexURL = indexURL;
  }

  async run(code = '') {
    if (!this.outputElement) {
      throw new Error('PyodideExecutor requires an output element');
    }

    const startTime = Date.now();
    this.outputElement.textContent = '⏳ Loading Python in your browser...';
    if (this.execTimeElement) this.execTimeElement.textContent = '';

    let runtime;
    let executionError = null;
    let output = '';

    try {
      runtime = await loadRuntime(this.indexURL);
      this.outputElement.textContent = '⏳ Running...';

      runtime.runPython([
        'import sys',
        'from io import StringIO',
        '__runner_output = StringIO()',
        'sys.stdout = __runner_output',
        'sys.stderr = __runner_output',
      ].join('\n'));

      try {
        runtime.runPython(code);
      } catch (error) {
        executionError = error;
      }

      output = runtime.runPython('__runner_output.getvalue()');
    } catch (error) {
      executionError = error;
    } finally {
      if (runtime) {
        try {
          runtime.runPython('sys.stdout = sys.__stdout__\nsys.stderr = sys.__stderr__');
        } catch (restoreError) {
          if (!executionError) executionError = restoreError;
        }
      }
    }

    if (executionError) {
      const message = executionError.message || String(executionError);
      this.outputElement.textContent = output ? output + '\nError: ' + message : 'Error: ' + message;
      return;
    }

    this.outputElement.textContent = output || '[no output]';
    if (this.execTimeElement) {
      this.execTimeElement.textContent = `⏱ Execution time: ${Date.now() - startTime}ms (browser)`;
    }
  }
}

export default PyodideExecutor;
