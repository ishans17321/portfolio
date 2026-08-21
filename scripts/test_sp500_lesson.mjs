import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, '..');
const lessonPath = path.join(repositoryRoot, '_posts/2026-08-20-sp500-index-lab-cpt-2.md');
const homepagePath = path.join(repositoryRoot, 'index.md');
const executorPath = path.join(repositoryRoot, 'assets/js/pages/runners/executors/PseudocodeExecutor.js');
const lesson = readFileSync(lessonPath, 'utf8');
const homepage = readFileSync(homepagePath, 'utf8');

function extractCapture(name) {
  const pattern = new RegExp('{% capture ' + name + ' %}\\n([\\s\\S]*?)\\n{% endcapture %}');
  const match = lesson.match(pattern);
  assert.ok(match, 'Missing Liquid capture: ' + name);
  return match[1];
}

const executorSource = readFileSync(executorPath, 'utf8');
const executorModule = await import('data:text/javascript;base64,' + Buffer.from(executorSource).toString('base64'));

function runPseudocode(name, inputs = []) {
  const pendingInputs = [...inputs];
  globalThis.window = {
    prompt() {
      assert.ok(pendingInputs.length > 0, name + ' requested unexpected input');
      return pendingInputs.shift();
    },
  };
  const outputElement = { textContent: '' };
  const executor = new executorModule.PseudocodeExecutor({ outputElement, execTimeElement: { textContent: '' } });
  executor.run(extractCapture(name));
  assert.equal(pendingInputs.length, 0, name + ' did not consume every test input');
  assert.doesNotMatch(outputElement.textContent, /^AP CSP (Runtime )?Error:/);
  return outputElement.textContent;
}

const expectedOutputs = {
  sp_output_code: 'Current company: AAPL\nGICS sector: Information Technology',
  sp_input_code: 'Selected ticker: AAPL\nSelected sector: Information Technology',
  sp_list_code: 'Snapshot companies: 8\nAAPL\nJPM\nXOM\nJNJ\nPG\nCAT\nNEE\nAMZN',
  sp_procedure_code: 'Correct sector: true',
  sp_sequence_code: 'Step 1: Request constituent table\nStep 2: Parse company sectors\nStep 3: Sample eight sectors\nStep 4: Start the challenge',
  sp_selection_code: 'Correct! AAPL matched Information Technology.',
  sp_iteration_code: 'Card 1: AAPL\nCard 2: JPM\nCard 3: XOM\nCard 4: JNJ\nCard 5: PG\nCard 6: CAT\nCard 7: NEE\nCard 8: AMZN',
  sp_algorithm_code: 'Company 1 returned. Expected Information Technology.\nCompany 2 matched Financials.\nCompany 3 matched Energy.\nCompany 4 matched Health Care.\nMatched correctly: 3 of 4',
  sp_list_operations_code: 'Initial watchlist: AAPL,JPM\nAfter APPEND: AAPL,JPM,XOM\nAfter INSERT: AAPL,JNJ,JPM,XOM\nAfter matching AAPL: JNJ,JPM,XOM\nCompanies remaining: 3',
  sp_search_code: 'NEE position: 4',
  sp_boolean_code: 'AAPL enters Information Technology.\nThe sector challenge is still in progress.',
};

const pseudocodeInputs = {
  sp_input_code: ['AAPL', 'Information Technology'],
  sp_selection_code: ['Information Technology'],
};

for (const [name, expected] of Object.entries(expectedOutputs)) {
  assert.equal(runPseudocode(name, pseudocodeInputs[name]), expected, name + ' output changed');
}

assert.match(lesson, /permalink:\s*\/sp500-index-lab/);
assert.match(lesson, /search_exclude:\s*false/);
assert.match(lesson, /w\/api\.php\?action=parse/);
assert.match(lesson, /Live constituents/);
assert.match(lesson, /Verified snapshot/);
assert.match(lesson, /FALLBACK_REVISION = '1370105675'/);
assert.match(lesson, /not investment advice/i);
assert.doesNotMatch(lesson, /APX|NVA|UFN|CRST|FRGE|ORBT|HBR|SOLR|fictional classroom data/);
assert.equal((lesson.match(/language="pseudocode"/g) || []).length, 11);
assert.equal((lesson.match(/local_python=true/g) || []).length, 12);
assert.equal((lesson.match(/variants_key="sp_[a-z_]+"/g) || []).length, 12);
assert.equal((lesson.match(/python_code=sp_[a-z_]+/g) || []).length, 12);
assert.equal((lesson.match(/java_code=sp_[a-z_]+/g) || []).length, 12);
assert.doesNotMatch(lesson, /PC assembly|CPU|RAM|Motherboard|Graphics card|Power supply/);
assert.match(homepage, /Featured Project/);
assert.match(homepage, /S&amp;P 500 Sector Challenge/);
assert.match(homepage, /\{\{site\.baseurl\}\}\/sp500-index-lab/);

const conceptSlugs = [
  'output', 'input', 'list', 'procedure', 'sequence', 'selection', 'iteration',
  'algorithm', 'list_operations', 'search', 'boolean',
];

for (const slug of conceptSlugs) {
  const pythonRun = spawnSync('python3', ['-c', extractCapture('sp_' + slug + '_python')], {
    cwd: repositoryRoot,
    encoding: 'utf8',
  });
  assert.equal(pythonRun.status, 0, slug + ' Python failed:\n' + pythonRun.stderr);
}

const javaSources = conceptSlugs.map((slug) => [slug, extractCapture('sp_' + slug + '_java')]);
javaSources.push(['prototype', extractCapture('sp_prototype_java')]);
if (spawnSync('javac', ['-version'], { encoding: 'utf8' }).status === 0) {
  for (const [slug, source] of javaSources) {
    const tempDirectory = mkdtempSync(path.join(os.tmpdir(), 'sp500-java-'));
    try {
      writeFileSync(path.join(tempDirectory, 'Main.java'), source);
      const compile = spawnSync('javac', ['Main.java'], { cwd: tempDirectory, encoding: 'utf8' });
      assert.equal(compile.status, 0, slug + ' Java failed to compile:\n' + compile.stderr);
    } finally {
      rmSync(tempDirectory, { recursive: true, force: true });
    }
  }
}

class FakeElement {
  constructor(tagName) {
    this.tagName = tagName;
    this.children = [];
    this.parentNode = null;
    this.style = {};
    this.listeners = new Map();
    this.attributes = new Map();
    this.textContent = '';
    this.value = '';
    this.disabled = false;
    this.draggable = false;
    this.className = '';
  }

  get firstChild() {
    return this.children[0] || null;
  }

  set innerHTML(value) {
    if (value === '') this.children = [];
  }

  get innerHTML() {
    return '';
  }

  appendChild(child) {
    child.parentNode = this;
    this.children.push(child);
    return child;
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    if (index >= 0) this.children.splice(index, 1);
    child.parentNode = null;
    return child;
  }

  setAttribute(name, value) {
    this.attributes.set(name, String(value));
  }

  getAttribute(name) {
    return this.attributes.get(name) ?? null;
  }

  addEventListener(type, listener) {
    if (!this.listeners.has(type)) this.listeners.set(type, []);
    this.listeners.get(type).push(listener);
  }

  dispatch(type, event = {}) {
    for (const listener of this.listeners.get(type) || []) listener(event);
  }

  querySelector(selector) {
    if (selector.startsWith('.') && this.className.split(/\s+/).includes(selector.slice(1))) return this;
    for (const child of this.children) {
      const result = child.querySelector(selector);
      if (result) return result;
    }
    return null;
  }
}

class FakeDocument {
  createElement(tagName) {
    return new FakeElement(tagName);
  }
}

function walk(root) {
  return [root, ...root.children.flatMap(walk)];
}

const fixtureSectors = [
  'Communication Services', 'Consumer Discretionary', 'Consumer Staples', 'Energy',
  'Financials', 'Health Care', 'Industrials', 'Information Technology',
  'Materials', 'Real Estate', 'Utilities',
];

class FixtureDOMParser {
  parseFromString() {
    const rows = Array.from({ length: 440 }, (_, index) => ({
      querySelectorAll() {
        const sector = fixtureSectors[index % fixtureSectors.length];
        return [
          { textContent: 'T' + String(index).padStart(3, '0') },
          { textContent: 'Company ' + index },
          { textContent: sector },
          { textContent: sector + ' Services' },
          { textContent: 'City ' + index + ', USA' },
          { textContent: '2020-01-01' },
        ];
      },
    }));
    const table = { querySelectorAll() { return rows; } };
    return { querySelector(selector) { return selector === 'table.wikitable' ? table : null; } };
  }
}

const javascriptPrototype = extractCapture('sp_javascript_code');
for (const requiredBehavior of [
  'fetch(DATA_URL', 'new DOMParser()', 'new AbortController()',
  'function parseCompanies(tableHtml)', 'companies.length < 400',
  'attempts.push(correct)', 'returned to the watchlist', 'Sector challenge complete!',
  "addEventListener('drop'", "setAttribute('aria-live', 'polite')",
]) {
  assert.ok(javascriptPrototype.includes(requiredBehavior), 'Missing JavaScript behavior: ' + requiredBehavior);
}

const runJavascriptPrototype = new Function('outputElement', 'document', javascriptPrototype);
const originalFetch = globalThis.fetch;
const originalDOMParser = globalThis.DOMParser;
globalThis.DOMParser = FixtureDOMParser;
globalThis.fetch = async () => ({
  ok: true,
  status: 200,
  async json() {
    return { parse: { revid: 1370105675, text: { '*': '<table></table>' } } };
  },
});

const uiOutput = new FakeElement('div');
const controller = runJavascriptPrototype(uiOutput, new FakeDocument());
await new Promise((resolve) => setTimeout(resolve, 0));
const liveElements = walk(uiOutput);
const app = liveElements.find((element) => element.className === 'market-lab');
const status = liveElements.find((element) => element.className === 'market-status');
const progress = liveElements.find((element) => element.className === 'market-progress');
const sourceBadge = liveElements.find((element) => element.className === 'market-source-badge');
const companyCards = liveElements.filter((element) => element.attributes.has('data-company-index'));
const sectorButtons = liveElements.filter((element) => element.attributes.has('data-sector-index'));
const newButton = liveElements.find((element) => element.textContent === 'New challenge');

assert.ok(app, 'Market lab was not created');
assert.equal(sourceBadge.textContent, 'Live constituents');
assert.equal(sourceBadge.getAttribute('data-state'), 'live');
assert.equal(companyCards.length, 8);
assert.equal(sectorButtons.length, 8);
assert.equal(progress.textContent, 'Matched 0 of 8 • Accuracy 100%');

const wrongSector = sectorButtons.find((button) => button.getAttribute('data-sector') !== companyCards[0].getAttribute('data-sector'));
companyCards[0].dispatch('click');
wrongSector.dispatch('click');
assert.match(status.textContent, /returned to the watchlist/);
assert.equal(companyCards[0].disabled, false);
assert.equal(progress.textContent, 'Matched 0 of 8 • Accuracy 0%');

for (const card of companyCards) {
  const sector = sectorButtons.find((button) => button.getAttribute('data-sector') === card.getAttribute('data-sector'));
  card.dispatch('click');
  sector.dispatch('click');
}
assert.equal(status.textContent, 'Sector challenge complete!');
assert.equal(progress.textContent, 'Matched 8 of 8 • Accuracy 89%');

newButton.dispatch('click');
assert.equal(walk(uiOutput).filter((element) => element.attributes.has('data-company-index')).length, 8);
assert.equal(walk(uiOutput).find((element) => element.className === 'market-progress').textContent, 'Matched 0 of 8 • Accuracy 100%');
controller.stop();

globalThis.fetch = async () => { throw new Error('offline'); };
const fallbackOutput = new FakeElement('div');
const fallbackController = runJavascriptPrototype(fallbackOutput, new FakeDocument());
await new Promise((resolve) => setTimeout(resolve, 0));
const fallbackElements = walk(fallbackOutput);
const fallbackBadge = fallbackElements.find((element) => element.className === 'market-source-badge');
assert.equal(fallbackBadge.textContent, 'Verified snapshot');
assert.equal(fallbackBadge.getAttribute('data-state'), 'fallback');
assert.equal(fallbackElements.filter((element) => element.attributes.has('data-company-index')).length, 8);
fallbackController.stop();

const pythonPrototypeRun = spawnSync('python3', ['-c', extractCapture('sp_python_code')], {
  cwd: repositoryRoot,
  encoding: 'utf8',
});
assert.equal(pythonPrototypeRun.status, 0, pythonPrototypeRun.stderr);
assert.match(pythonPrototypeRun.stdout, /Sector challenge complete!\nAccuracy: 89%\s*$/);
assert.match(pythonPrototypeRun.stdout, /Incorrect sector\. The company returned to the watchlist\./);

const prototypeOutput = (() => {
  const outputElement = { textContent: '' };
  const executor = new executorModule.PseudocodeExecutor({ outputElement, execTimeElement: { textContent: '' } });
  executor.run(extractCapture('sp_prototype_pseudocode'));
  return outputElement.textContent;
})();
assert.match(prototypeOutput, /Sector challenge complete!/);
assert.match(prototypeOutput, /Accuracy: 8 of 9$/);

globalThis.fetch = originalFetch;
globalThis.DOMParser = originalDOMParser;
delete globalThis.window;
console.log('S&P 500 lesson checks passed: live/fallback data, 12 three-language runners, sector interaction, and homepage entry.');
