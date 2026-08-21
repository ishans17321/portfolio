import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, '..');
const lessonPath = path.join(repositoryRoot, '_posts/2026-08-20-sp500-index-lab-cpt-2.md');
const executorPath = path.join(repositoryRoot, 'assets/js/pages/runners/executors/PseudocodeExecutor.js');
const lesson = readFileSync(lessonPath, 'utf8');

function extractCapture(name) {
  const pattern = new RegExp('{% capture ' + name + ' %}\\n([\\s\\S]*?)\\n{% endcapture %}');
  const match = lesson.match(pattern);
  assert.ok(match, 'Missing Liquid capture: ' + name);
  return match[1];
}

const executorSource = readFileSync(executorPath, 'utf8');
const executorModule = await import(
  'data:text/javascript;base64,' + Buffer.from(executorSource).toString('base64')
);

function runPseudocode(name, inputs = []) {
  const pendingInputs = [...inputs];
  globalThis.window = {
    prompt() {
      assert.ok(pendingInputs.length > 0, name + ' requested unexpected input');
      return pendingInputs.shift();
    },
  };
  const outputElement = { textContent: '' };
  const execTimeElement = { textContent: '' };
  const executor = new executorModule.PseudocodeExecutor({ outputElement, execTimeElement });
  executor.run(extractCapture(name));
  assert.equal(pendingInputs.length, 0, name + ' did not consume every test input');
  assert.doesNotMatch(outputElement.textContent, /^AP CSP (Runtime )?Error:/);
  return outputElement.textContent;
}

const expectedOutputs = {
  sp_output_code: 'Current company: APX\nIllustrative market cap: $420B',
  sp_input_code: 'Selected ticker: APX\nSelected rank: 1',
  sp_list_code: 'Companies in the mini-index: 8\nAPX\nNVA\nUFN\nCRST\nFRGE\nORBT\nHBR\nSOLR',
  sp_procedure_code: 'Correct rank: true',
  sp_sequence_code: 'Step 1: Load candidate data\nStep 2: Sort by market cap\nStep 3: Calculate index weights\nStep 4: Publish the rebalance',
  sp_selection_code: 'Correct! APX entered the index.',
  sp_iteration_code: 'Rank 1: APX\nRank 2: NVA\nRank 3: UFN\nRank 4: CRST\nRank 5: FRGE\nRank 6: ORBT\nRank 7: HBR\nRank 8: SOLR',
  sp_algorithm_code: 'HBR returned. Next company is APX.\nAPX ranked correctly.\nNVA ranked correctly.\nUFN ranked correctly.\nCRST ranked correctly.\nRanked correctly: 4 of 4',
  sp_list_operations_code: 'Initial watchlist: APX,NVA\nAfter APPEND: APX,NVA,UFN\nAfter INSERT: APX,CRST,NVA,UFN\nAfter ranking APX: CRST,NVA,UFN\nCompanies remaining: 3',
  sp_search_code: 'HBR position: 4',
  sp_boolean_code: 'APX enters the index at rank 1.\nThe rebalance is still in progress.',
};

const pseudocodeInputs = {
  sp_input_code: ['APX', '1'],
  sp_selection_code: ['APX'],
};

for (const [name, expected] of Object.entries(expectedOutputs)) {
  assert.equal(runPseudocode(name, pseudocodeInputs[name]), expected, name + ' output changed');
}

assert.match(lesson, /permalink:\s*\/sp500-index-lab/);
assert.match(lesson, /search_exclude:\s*false/);
assert.match(lesson, /fictional classroom data, not investment information/);
assert.equal((lesson.match(/language="pseudocode"/g) || []).length, 11);
assert.equal((lesson.match(/local_python=true/g) || []).length, 12);
assert.equal((lesson.match(/variants_key="sp_[a-z_]+"/g) || []).length, 12);
assert.equal((lesson.match(/python_code=sp_[a-z_]+/g) || []).length, 12);
assert.equal((lesson.match(/java_code=sp_[a-z_]+/g) || []).length, 12);
assert.doesNotMatch(lesson, /PC assembly|CPU|RAM|Motherboard|Graphics card|Power supply/);

const conceptSlugs = [
  'output', 'input', 'list', 'procedure', 'sequence', 'selection', 'iteration',
  'algorithm', 'list_operations', 'search', 'boolean',
];

for (const slug of conceptSlugs) {
  const pythonSource = extractCapture('sp_' + slug + '_python');
  const pythonRun = spawnSync('python3', ['-c', pythonSource], { cwd: repositoryRoot, encoding: 'utf8' });
  assert.equal(pythonRun.status, 0, slug + ' Python failed:\n' + pythonRun.stderr);
}

const javaSources = conceptSlugs.map((slug) => [slug, extractCapture('sp_' + slug + '_java')]);
javaSources.push(['prototype', extractCapture('sp_prototype_java')]);
const javacCheck = spawnSync('javac', ['-version'], { encoding: 'utf8' });
if (javacCheck.status === 0) {
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
    this.style = {};
    this.listeners = new Map();
    this.attributes = new Map();
    this.textContent = '';
    this.innerHTML = '';
    this.value = '';
    this.disabled = false;
    this.draggable = false;
  }

  appendChild(child) {
    this.children.push(child);
    return child;
  }

  setAttribute(name, value) {
    this.attributes.set(name, value);
  }

  addEventListener(type, listener) {
    if (!this.listeners.has(type)) this.listeners.set(type, []);
    this.listeners.get(type).push(listener);
  }

  dispatch(type, event = {}) {
    for (const listener of this.listeners.get(type) || []) listener(event);
  }
}

const createdElements = [];
const fakeDocument = {
  createElement(tagName) {
    const element = new FakeElement(tagName);
    createdElements.push(element);
    return element;
  },
};

const javascriptPrototype = extractCapture('sp_javascript_code');
for (const requiredBehavior of [
  "card.draggable = true",
  "addEventListener('drop'",
  'function isCorrectRank(companyIndex, rankIndex)',
  'attempts.push(correct)',
  'returned to the watchlist',
  'entered the index',
  "setAttribute('aria-live', 'polite')",
  'fictional classroom data',
]) {
  assert.ok(javascriptPrototype.includes(requiredBehavior), 'Missing JavaScript behavior: ' + requiredBehavior);
}

const runJavascriptPrototype = new Function('outputElement', 'document', javascriptPrototype);
const uiOutput = new FakeElement('div');
runJavascriptPrototype(uiOutput, fakeDocument);

const app = createdElements.find((element) => element.className === 'market-lab');
const status = createdElements.find((element) => element.className === 'market-status');
const progress = createdElements.find((element) => element.className === 'market-progress');
const companyCards = createdElements.filter((element) => element.attributes.has('data-company-index'));
const rankButtons = createdElements.filter((element) => element.attributes.has('data-rank-index'));
const resetButton = createdElements.find((element) => element.className === 'market-reset');

assert.ok(app, 'Market lab was not created');
assert.equal(companyCards.length, 8);
assert.equal(rankButtons.length, 8);
assert.equal(status.textContent, 'Next company: APX');
assert.equal(progress.textContent, 'Ranked 0 of 8 • Accuracy 100%');

companyCards[6].dispatch('click');
rankButtons[6].dispatch('click');
assert.match(status.textContent, /HBR returned to the watchlist/);
assert.equal(companyCards[6].disabled, false);
assert.equal(progress.textContent, 'Ranked 0 of 8 • Accuracy 0%');

companyCards[0].dispatch('click');
rankButtons[0].dispatch('click');
assert.equal(companyCards[0].disabled, true);
assert.equal(rankButtons[0].disabled, true);
assert.equal(progress.textContent, 'Ranked 1 of 8 • Accuracy 50%');

resetButton.dispatch('click');
assert.equal(progress.textContent, 'Ranked 0 of 8 • Accuracy 100%');
assert.equal(companyCards[0].disabled, false);

const dragData = new Map();
const dataTransfer = {
  setData(type, value) { dragData.set(type, value); },
  getData(type) { return dragData.get(type) || ''; },
};
companyCards[0].dispatch('dragstart', { dataTransfer });
rankButtons[0].dispatch('drop', { dataTransfer, preventDefault() {} });
assert.equal(progress.textContent, 'Ranked 1 of 8 • Accuracy 100%');

for (let index = 1; index < companyCards.length; index += 1) {
  companyCards[index].dispatch('click');
  rankButtons[index].dispatch('click');
}
assert.equal(status.textContent, 'Index rebalance complete!');
assert.equal(progress.textContent, 'Ranked 8 of 8 • Accuracy 100%');

const pythonPrototype = extractCapture('sp_python_code');
const pythonPrototypeRun = spawnSync('python3', ['-c', pythonPrototype], {
  cwd: repositoryRoot,
  encoding: 'utf8',
});
assert.equal(pythonPrototypeRun.status, 0, pythonPrototypeRun.stderr);
assert.match(pythonPrototypeRun.stdout, /Index rebalance complete!\nAccuracy: 89%\s*$/);
assert.match(pythonPrototypeRun.stdout, /Incorrect ranking\. The company returned to the watchlist\./);

const prototypeOutput = (() => {
  const outputElement = { textContent: '' };
  const executor = new executorModule.PseudocodeExecutor({ outputElement, execTimeElement: { textContent: '' } });
  executor.run(extractCapture('sp_prototype_pseudocode'));
  return outputElement.textContent;
})();
assert.match(prototypeOutput, /Index rebalance complete!/);
assert.match(prototypeOutput, /Accuracy: 8 of 9$/);

delete globalThis.window;
console.log('S&P 500 lesson checks passed: 12 three-language runners and interactive rebalance prototype.');
