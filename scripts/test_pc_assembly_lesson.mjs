import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, '..');
const lessonPath = path.join(repositoryRoot, '_posts/2026-08-19-pc-assembly-cpt-concepts.md');
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

function runPseudocode(name, inputValues = []) {
  const pendingInputs = [...inputValues];
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

const expectedPseudocodeOutputs = {
  pc_output_code: 'Current part: CPU\nInstall in: CPU socket',
  pc_input_code: 'Selected part: CPU\nSelected destination: CPU socket',
  pc_list_code: [
    'Parts in this build: 8',
    'CPU',
    'RAM',
    'M.2 SSD',
    'CPU cooler',
    'Power supply',
    'Motherboard',
    'Graphics card',
    'Power cables',
  ].join('\n'),
  pc_procedure_code: 'Correct placement: true',
  pc_sequence_code: [
    'Step 1: Seat the CPU',
    'Step 2: Install the RAM',
    'Step 3: Install the M.2 SSD',
    'Step 4: Mount the CPU cooler',
  ].join('\n'),
  pc_selection_code: 'Correct! CPU snapped into place.',
  pc_iteration_code: [
    'Step 1: Install CPU',
    'Step 2: Install RAM',
    'Step 3: Install M.2 SSD',
    'Step 4: Install CPU cooler',
    'Step 5: Install Power supply',
    'Step 6: Install Motherboard',
    'Step 7: Install Graphics card',
    'Step 8: Install Power cables',
  ].join('\n'),
  pc_algorithm_code: [
    'Graphics card returned. Next part is CPU.',
    'CPU installed correctly.',
    'RAM installed correctly.',
    'M.2 SSD installed correctly.',
    'CPU cooler installed correctly.',
    'Installed correctly: 4 of 4',
  ].join('\n'),
  pc_list_operations_code: [
    'Initial tray: CPU,RAM',
    'After APPEND: CPU,RAM,M.2 SSD',
    'After INSERT: CPU,CPU cooler,RAM,M.2 SSD',
    'After installing CPU: CPU cooler,RAM,M.2 SSD',
    'Parts remaining: 3',
  ].join('\n'),
  pc_search_code: 'Graphics card position: 4',
  pc_boolean_code: 'The CPU snaps into place.\nThe PC build is still in progress.',
};

const pseudocodeInputs = {
  pc_input_code: ['CPU', 'CPU socket'],
  pc_selection_code: ['CPU'],
};

for (const [name, expectedOutput] of Object.entries(expectedPseudocodeOutputs)) {
  assert.equal(runPseudocode(name, pseudocodeInputs[name]), expectedOutput, name + ' output changed');
}

assert.match(lesson, /^---[\s\S]*?search_exclude:\s*false[\s\S]*?---/);
assert.doesNotMatch(lesson, /id="view-(python|javascript|both)"/);
assert.equal((lesson.match(/language="pseudocode"/g) || []).length, 11);
assert.equal(
  (lesson.match(/{% include runners\/code\.html[\s\S]*?language="pseudocode"[\s\S]*?lock_language=true[\s\S]*?%}/g) || []).length,
  11,
  'Every pseudocode runner must keep its language locked',
);

const javascriptPrototype = extractCapture('pc_javascript_code');
const runJavascriptPrototype = new Function('outputElement', 'document', javascriptPrototype);
for (const requiredBehavior of [
  "partCard.draggable = true",
  "addEventListener('drop'",
  'function checkPlacement(partIndex, slotIndex)',
  'attempts.push(isCorrect)',
  'returned to the tray',
  'snapped into place',
  "setAttribute('aria-live', 'polite')",
  "document.getElementById('pc-builder-name')",
]) {
  assert.ok(javascriptPrototype.includes(requiredBehavior), 'Missing JavaScript behavior: ' + requiredBehavior);
}

class FakeElement {
  constructor(tagName) {
    this.tagName = tagName;
    this.children = [];
    this.style = {};
    this.listeners = new Map();
    this.attributes = new Map();
    this.textContent = '';
    this.value = '';
    this.disabled = false;
    this.draggable = false;
    this.firstChild = null;
  }

  appendChild(child) {
    this.children.push(child);
    this.firstChild = this.children[0] || null;
    return child;
  }

  insertBefore(child, before) {
    const index = this.children.indexOf(before);
    if (index === -1) {
      return this.appendChild(child);
    }
    this.children.splice(index, 0, child);
    this.firstChild = this.children[0] || null;
    return child;
  }

  setAttribute(name, value) {
    this.attributes.set(name, value);
  }

  addEventListener(type, listener) {
    if (!this.listeners.has(type)) {
      this.listeners.set(type, []);
    }
    this.listeners.get(type).push(listener);
  }

  dispatch(type, event = {}) {
    for (const listener of this.listeners.get(type) || []) {
      listener(event);
    }
  }
}

const createdElements = [];
const fakeDocument = {
  createElement(tagName) {
    const element = new FakeElement(tagName);
    createdElements.push(element);
    return element;
  },
  getElementById(id) {
    return createdElements.find((element) => element.id === id) || null;
  },
};

const uiOutput = new FakeElement('div');
runJavascriptPrototype(uiOutput, fakeDocument);
const app = uiOutput.children[0];
const header = app.children[2];
const status = app.children[3];
const progress = app.children[4];
const layout = app.children[5];
const partCards = layout.children[0].children.slice(1);
const slotButtons = layout.children[1].children.slice(1);
const resetButton = header.children[1];

assert.equal(status.textContent, 'Next part: CPU');
assert.equal(progress.textContent, 'Installed: 0/8 | Accuracy: 100%');

partCards[6].dispatch('click');
slotButtons[6].dispatch('click');
assert.match(status.textContent, /Graphics card returned to the tray/);
assert.equal(partCards[6].disabled, false);
assert.equal(progress.textContent, 'Installed: 0/8 | Accuracy: 0%');

partCards[0].dispatch('click');
slotButtons[0].dispatch('click');
assert.equal(partCards[0].disabled, true);
assert.equal(slotButtons[0].disabled, true);
assert.match(slotButtons[0].textContent, /^✓ CPU → CPU socket$/);
assert.equal(progress.textContent, 'Installed: 1/8 | Accuracy: 50%');

resetButton.dispatch('click');
assert.equal(partCards[0].disabled, false);
assert.equal(slotButtons[0].disabled, false);
assert.equal(progress.textContent, 'Installed: 0/8 | Accuracy: 100%');

const dragData = new Map();
const dataTransfer = {
  setData(type, value) {
    dragData.set(type, value);
  },
  getData(type) {
    return dragData.get(type) || '';
  },
};
partCards[0].dispatch('dragstart', { dataTransfer });
slotButtons[0].dispatch('drop', { dataTransfer, preventDefault() {} });
assert.equal(partCards[0].disabled, true);
assert.equal(progress.textContent, 'Installed: 1/8 | Accuracy: 100%');

for (let index = 1; index < partCards.length; index += 1) {
  partCards[index].dispatch('click');
  slotButtons[index].dispatch('click');
}
assert.equal(status.textContent, 'PC assembly complete!');
assert.equal(progress.textContent, 'Installed: 8/8 | Accuracy: 100%');

resetButton.dispatch('click');
const unrelatedDragData = { getData() { return ''; } };
slotButtons[0].dispatch('drop', { dataTransfer: unrelatedDragData, preventDefault() {} });
assert.equal(status.textContent, 'Choose a part from the tray first.');
assert.equal(progress.textContent, 'Installed: 0/8 | Accuracy: 100%');

const pythonPrototype = extractCapture('pc_python_code');
const pythonRun = spawnSync('python3', ['-c', pythonPrototype], {
  cwd: repositoryRoot,
  encoding: 'utf8',
});
assert.equal(pythonRun.status, 0, pythonRun.stderr);
assert.match(pythonRun.stdout, /PC assembly complete!\nAccuracy: 89%\s*$/);
assert.match(pythonRun.stdout, /Incorrect placement\. The part returned to the tray\./);

console.log('PC assembly lesson checks passed: 11 pseudocode runners, JavaScript prototype, and Python prototype.');
