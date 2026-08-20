---
layout: post
codemirror: true
title: "PC Assembly: Create Performance Task Concepts"
description: Learn every AP CSP Create Performance Task concept through one PC assembly theme.
permalink: /pc-assembly
search_exclude: false
---

# PC Assembly: Create Performance Task Concepts

**Team:** Adhvay Iyer, Rohan Chandra, Ishan Shrivastava, Ishan Jha, Ishan Khandelwal, and Vayun Shekhar

This notebook uses one theme throughout: assembling the parts of a desktop computer in the correct order. The user chooses a component and its destination. A correct component snaps into place; an incorrect component returns to the parts tray. Every example below connects that program idea to a CPT requirement.

<!-- Runner view toggle buttons -->
<div id="runner-view-toggle" style="margin: 12px 0;">
  <button id="view-python" style="margin-right:8px;padding:6px 10px;">View Python runners</button>
  <button id="view-javascript" style="margin-right:8px;padding:6px 10px;">View JavaScript runners</button>
  <button id="view-both" style="padding:6px 10px;">View Both</button>
</div>

<script>
// Toggle and refresh runner editors so CodeRunners render correctly
(function(){
  function refreshCodeMirrors() {
    // Refresh CodeMirror instances
    document.querySelectorAll('.CodeMirror').forEach(function(cmEl){
      try { if (cmEl.CodeMirror && typeof cmEl.CodeMirror.refresh === 'function') cmEl.CodeMirror.refresh(); } catch(e){}
    });
  }

  function setLanguageForRunners(lang) {
    document.querySelectorAll('.code-runner-container').forEach(function(container){
      const sel = container.querySelector('.languageSelect');
      if (!sel) return;
      sel.value = lang;
      sel.dispatchEvent(new Event('change'));
    });
    // Show/hide UI runners: UI runners are interactive JS-only; show them when javascript selected
    document.querySelectorAll('.ui-runner-container').forEach(function(uic){
      if (lang === 'javascript') { uic.style.display = ''; } else { uic.style.display = 'none'; }
    });
    // For code-runner containers with non-js languages, ensure they are visible
    document.querySelectorAll('.code-runner-container').forEach(function(c){ c.style.display = ''; });
    // Small delay then refresh editors
    setTimeout(refreshCodeMirrors, 150);
  }

  function showBoth() {
    // Show everything and refresh
    document.querySelectorAll('.ui-runner-container, .code-runner-container').forEach(function(el){ el.style.display = ''; });
    refreshCodeMirrors();
  }

  document.addEventListener('DOMContentLoaded', function(){
    const pyBtn = document.getElementById('view-python');
    const jsBtn = document.getElementById('view-javascript');
    const bothBtn = document.getElementById('view-both');
    // JavaScript snippets for the runners (simple translations)
    const jsVersions = {
      'pc-output': `const currentPart = "CPU";
const targetSlot = "CPU socket";

console.log("Current part:", currentPart);
console.log("Install in:", targetSlot);`,
      'pc-input': `const selectedPart = prompt("Choose a PC part:");
const selectedSlot = prompt("Choose its destination:");

console.log("Selected part:", selectedPart);
console.log("Selected destination:", selectedSlot);`,
      'pc-list': `const parts = [
  "CPU",
  "RAM",
  "M.2 SSD",
  "CPU cooler",
  "Power supply",
  "Motherboard",
  "Graphics card",
  "Power cables"
];

console.log("Parts in this build:", parts.length);
for (const part of parts) {
  console.log(part);
}`,
      'pc-procedure': `function isCorrectTarget(partName, targetName) {
  return partName === 'CPU' && targetName === 'CPU socket';
}

console.log('Correct placement:', isCorrectTarget('CPU', 'CPU socket'));`,
      'pc-sequence': `let step = 1;

console.log(\`Step \${step}: Seat the CPU\`);
step++;
console.log(\`Step \${step}: Install the RAM\`);
step++;
console.log(\`Step \${step}: Install the M.2 SSD\`);
step++;
console.log(\`Step \${step}: Mount the CPU cooler\`);`,
      'pc-selection': `const expectedPart = 'CPU';
const selectedPart = prompt('Choose the first part:');

if (selectedPart === expectedPart) {
  console.log('Correct! ' + selectedPart + ' snapped into place.');
} else {
  console.log('Incorrect. ' + selectedPart + ' returned to the parts tray.');
  console.log('Install ' + expectedPart + ' first.');
}`,
      'pc-iteration': `const partsIter = [
  "CPU",
  "RAM",
  "M.2 SSD",
  "CPU cooler",
  "Power supply",
  "Motherboard",
  "Graphics card",
  "Power cables"
];

let stepIter = 1;
for (const p of partsIter) {
  console.log('Step ' + stepIter + ': Install ' + p);
  stepIter++;
}`,
      'pc-algorithm': `function assembleComputer(parts, selectedParts) {
  let installedCount = 0;
  let step = 0;

  for (const selectedPart of selectedParts) {
    const expectedPart = parts[step];
    if (selectedPart === expectedPart) {
      console.log(selectedPart + ' installed correctly.');
      installedCount++;
      step++;
    } else {
      console.log(selectedPart + ' returned. Next part is ' + expectedPart + '.');
    }
  }

  return installedCount;
}

const partsArr = ['CPU', 'RAM', 'M.2 SSD', 'CPU cooler'];
const attempts = ['Graphics card', 'CPU', 'RAM', 'M.2 SSD', 'CPU cooler'];
const installed = assembleComputer(partsArr, attempts);

console.log('Installed correctly: ' + installed + ' of ' + partsArr.length);`,
      'pc-list-operations': `let partsTray = ['CPU', 'RAM'];

console.log('Initial tray:', partsTray);
partsTray.push('M.2 SSD');
console.log('After APPEND:', partsTray);
partsTray.splice(1, 0, 'CPU cooler');
console.log('After INSERT:', partsTray);
partsTray.shift();
console.log('After installing CPU:', partsTray);
console.log('Parts remaining:', partsTray.length);`,
      'pc-search': `function findPart(partsTray, targetPart) {
  for (let i = 0; i < partsTray.length; i++) {
    if (partsTray[i] === targetPart) return i + 1;
  }
  return -1;
}

const partsTray = ['CPU', 'RAM', 'M.2 SSD', 'Graphics card'];
console.log('Graphics card position:', findPart(partsTray, 'Graphics card'));`,
      'pc-boolean': `const selectedPart = 'CPU';
const selectedSlot = 'CPU socket';
const expectedPart = 'CPU';
const expectedSlot = 'CPU socket';
let partsRemaining = 7;

const correctPart = selectedPart === expectedPart;
const correctSlot = selectedSlot === expectedSlot;

if (correctPart && correctSlot) {
  console.log('The CPU snaps into place.');
} else {
  console.log('Return the part to the tray.');
}

if (!(partsRemaining === 0)) {
  console.log('The PC build is still in progress.');
}`
    };

    function setCodeInContainer(container, code, mode) {
      let tries = 0;
      function attempt() {
        const cmEl = container.querySelector('.CodeMirror');
        const cm = cmEl && cmEl.CodeMirror ? cmEl.CodeMirror : null;
        if (cm) {
          try { cm.setValue(code); cm.setOption('mode', mode); } catch(e) {}
          return true;
        }
        const ta = container.querySelector('.editor-textarea');
        if (ta) {
          ta.value = code;
          return true;
        }
        return false;
      }
      function doAttempt() {
        if (attempt()) return;
        tries++;
        if (tries < 8) setTimeout(doAttempt, 150);
      }
      doAttempt();
    }

    function setEditorsToPython() {
      document.querySelectorAll('.code-runner-container').forEach(function(container){
        const sel = container.querySelector('.languageSelect');
        if (sel) sel.value = 'python';
        const defaultCode = container.dataset.defaultCode ? JSON.parse(container.dataset.defaultCode) : '';
        setCodeInContainer(container, defaultCode, 'python');
      });
      // hide UI-only runners when showing python
      document.querySelectorAll('.ui-runner-container').forEach(uic => uic.style.display = 'none');
    }

    function setEditorsToJavaScript() {
      document.querySelectorAll('.code-runner-container').forEach(function(container){
        const rid = container.dataset.runnerId || container.id.replace('runner-','');
        const sel = container.querySelector('.languageSelect');
        if (sel) sel.value = 'javascript';
        const js = jsVersions[rid] || '// JavaScript version not available for this runner';
        setCodeInContainer(container, js, 'javascript');
      });
      // show UI runners when JS selected
      document.querySelectorAll('.ui-runner-container').forEach(uic => uic.style.display = '');
    }

    function waitForEditors(timeoutMs = 8000) {
      const start = Date.now();
      return new Promise((resolve) => {
        (function check() {
          const any = !!document.querySelector('.code-runner-container .CodeMirror');
          if (any) return resolve(true);
          if (Date.now() - start > timeoutMs) return resolve(false);
          setTimeout(check, 150);
        })();
      });
    }

    if (pyBtn) pyBtn.addEventListener('click', async function(){
      const ready = await waitForEditors();
      setEditorsToPython();
      setLanguageForRunners('python');
      if (!ready) setTimeout(() => { setEditorsToPython(); setLanguageForRunners('python'); }, 300);
    });

    if (jsBtn) jsBtn.addEventListener('click', async function(){
      const ready = await waitForEditors();
      setEditorsToJavaScript();
      setLanguageForRunners('javascript');
      if (!ready) setTimeout(() => { setEditorsToJavaScript(); setLanguageForRunners('javascript'); }, 300);
    });

    if (bothBtn) bothBtn.addEventListener('click', async function(){
      const ready = await waitForEditors();
      showBoth();
      setEditorsToJavaScript();
      setLanguageForRunners('javascript');
      if (!ready) setTimeout(() => { setEditorsToJavaScript(); setLanguageForRunners('javascript'); showBoth(); }, 300);
    });

    // Initial refresh after small delay to allow included runner scripts to initialize
    setTimeout(function(){
      // If there are ui-runner-containers but they are hidden by CSS, show them
      document.querySelectorAll('.ui-runner-container').forEach(function(uic){ if (uic.style.display === 'none') uic.style.display = ''; });
      document.querySelectorAll('.code-runner-container .output-content').forEach(function(output){
        output.textContent = 'Run the code to see output ...';
      });
      refreshCodeMirrors();
    }, 300);
  });
})();
</script>

---

## Output

**CPT Requirement:** Your program must produce output visible to the user. College Board pseudocode uses `DISPLAY()` to show results. In the PC assembly program, output tells the builder which part is next and whether a placement was correct.

{% capture pc_output_challenge %}
Display the current PC part and where it should be installed.
{% endcapture %}

{% capture pc_output_code %}
currentPart = "CPU"
targetSlot = "CPU socket"

print("Current part:", currentPart)
print("Install in:", targetSlot)
{% endcapture %}

{% include runners/code.html
  runner_id="pc-output"
  language="python"
  challenge=pc_output_challenge
  code=pc_output_code
  height="220px"
%}

**Expected output**

```text
Current part: CPU
Install in: CPU socket
```

---

## Input

**CPT Requirement:** Your program must get input from the user. College Board pseudocode uses `INPUT()` to collect data. In this project, the builder supplies a part and a destination.

{% capture pc_input_challenge %}
Ask the builder to choose a PC part and its destination, then display both choices.
{% endcapture %}

{% capture pc_input_code %}
selectedPart = input("Choose a PC part: ")
selectedSlot = input("Choose its destination: ")

print("Selected part:", selectedPart)
print("Selected destination:", selectedSlot)
{% endcapture %}

{% include runners/code.html
  runner_id="pc-input"
  language="python"
  challenge=pc_input_challenge
  code=pc_input_code
  height="230px"
%}

**Example output (if the user chose "CPU" and "CPU socket")**

```text
Selected part: CPU
Selected destination: CPU socket
```

---

## List

**CPT Requirement:** Your program must use a list to manage multiple related values. The ordered `parts` list stores every component without requiring a separate variable for each one. College Board pseudocode lists begin at index 1.

{% capture pc_list_challenge %}
Store the PC components in assembly order and display each component with a loop.
{% endcapture %}

{% capture pc_list_code %}
parts = ["CPU", "RAM", "M.2 SSD", "CPU cooler", "Power supply", "Motherboard", "Graphics card", "Power cables"]

print("Parts in this build:", len(parts))

for part in parts:
   print(part)
{% endcapture %}

{% include runners/code.html
  runner_id="pc-list"
  language="python"
  challenge=pc_list_challenge
  code=pc_list_code
  height="300px"
%}

**Expected output**

```text
Parts in this build: 8
CPU
RAM
M.2 SSD
CPU cooler
Power supply
Motherboard
Graphics card
Power cables
```

---

## Procedure

**CPT Requirement:** You must create at least one student-developed procedure with parameters. The procedure must be called and contribute to the program. This procedure accepts a part and a target, then returns whether they match.

{% capture pc_procedure_challenge %}
Create and call a procedure that checks whether the CPU was placed in the CPU socket.
{% endcapture %}

{% capture pc_procedure_code %}
def is_correct_target(part_name, target_name):
    return part_name == "CPU" and target_name == "CPU socket"

correct_placement = is_correct_target("CPU", "CPU socket")
print("Correct placement:", correct_placement)
{% endcapture %}

{% include runners/code.html
   runner_id="pc-procedure"
   language="python"
   challenge=pc_procedure_challenge
   code=pc_procedure_code
   height="390px"
%}

**Expected output**

```text
Correct placement: true
```

---

## Sequence

**CPT Concept:** Sequencing means statements execute in order. A PC must also be assembled in a sensible order: prepare the motherboard, mount it, and then connect the remaining components.

{% capture pc_sequence_challenge %}
Display four motherboard-preparation steps in the order they occur.
{% endcapture %}

{% capture pc_sequence_code %}
step = 1
print(f"Step {step}: Seat the CPU")

step += 1
print(f"Step {step}: Install the RAM")

step += 1
print(f"Step {step}: Install the M.2 SSD")

step += 1
print(f"Step {step}: Mount the CPU cooler")
{% endcapture %}

{% include runners/code.html
  runner_id="pc-sequence"
  language="python"
  challenge=pc_sequence_challenge
  code=pc_sequence_code
  height="330px"
%}

**Expected output**

```text
Step 1: Seat the CPU
Step 2: Install the RAM
Step 3: Install the M.2 SSD
Step 4: Mount the CPU cooler
```

---

## Selection

**CPT Requirement:** Your algorithm must include selection with `IF` or `IF/ELSE`. Selection lets the program keep a correct part in place or return an incorrect part to the tray.

{% capture pc_selection_challenge %}
Check a selected component. If it is the expected part, snap it in; otherwise return it to the tray.
{% endcapture %}

{% capture pc_selection_code %}
expected_part = "CPU"
selected_part = input("Choose the first part: ")

if selected_part == expected_part:
    print(f"Correct! {selected_part} snapped into place.")
else:
    print(f"Incorrect. {selected_part} returned to the parts tray.")
    print(f"Install {expected_part} first.")
{% endcapture %}

{% include runners/code.html
   runner_id="pc-selection"
   language="python"
   challenge=pc_selection_challenge
   code=pc_selection_code
   height="360px"
%}

**Example output (if the user selected "CPU")**

```text
Correct! CPU snapped into place.
```

---

## Iteration

**CPT Requirement:** Your algorithm must include iteration using a loop. Iteration lets one block of code process every PC component instead of repeating similar statements eight times.

{% capture pc_iteration_challenge %}
Loop through the ordered parts list and display one installation instruction for each component.
{% endcapture %}

{% capture pc_iteration_code %}
parts = ["CPU", "RAM", "M.2 SSD", "CPU cooler", "Power supply", "Motherboard", "Graphics card", "Power cables"]
step = 1

for part in parts:
   print(f"Step {step}: Install {part}")
   step += 1
{% endcapture %}

{% include runners/code.html
  runner_id="pc-iteration"
  language="python"
  challenge=pc_iteration_challenge
  code=pc_iteration_code
  height="320px"
%}

**Expected output**

```text
Step 1: Install CPU
Step 2: Install RAM
Step 3: Install M.2 SSD
Step 4: Install CPU cooler
Step 5: Install Power supply
Step 6: Install Motherboard
Step 7: Install Graphics card
Step 8: Install Power cables
```

---

## Complete Algorithm

**CPT Requirement:** Your main algorithm must integrate sequencing, selection, and iteration to solve a meaningful problem. This procedure processes a list in order, checks each simulated placement, records the result, and returns the number of successful installations.

{% capture pc_algorithm_challenge %}
Run a complete PC assembly algorithm that combines a list, procedure, sequence, selection, iteration, and a return value.
{% endcapture %}

{% capture pc_algorithm_code %}
def assemble_computer(parts, selected_parts):
    installed_count = 0
    step = 0

    for selected_part in selected_parts:
        expected_part = parts[step]

        if selected_part == expected_part:
            print(f"{selected_part} installed correctly.")
            installed_count += 1
            step += 1
        else:
            print(f"{selected_part} returned. Next part is {expected_part}.")

    return installed_count

parts = ["CPU", "RAM", "M.2 SSD", "CPU cooler"]
attempts = ["Graphics card", "CPU", "RAM", "M.2 SSD", "CPU cooler"]

installed = assemble_computer(parts, attempts)
print(f"Installed correctly: {installed} of {len(parts)}")
{% endcapture %}

{% include runners/code.html
   runner_id="pc-algorithm"
   language="python"
   challenge=pc_algorithm_challenge
   code=pc_algorithm_code
   height="600px"
%}

**Expected output**

```text
Graphics card returned. Next part is CPU.
CPU installed correctly.
RAM installed correctly.
M.2 SSD installed correctly.
CPU cooler installed correctly.
Installed correctly: 4 of 4
```

---

## List Operations

**AP CSP Concept:** `APPEND`, `INSERT`, `REMOVE`, and `LENGTH` modify and measure lists. These operations can update the parts tray as components are added or installed.

{% capture pc_list_operations_challenge %}
Modify a PC parts tray with all four College Board list operations.
{% endcapture %}

{% capture pc_list_operations_code %}
parts_tray = ["CPU", "RAM"]
print("Initial tray:", parts_tray)

parts_tray.append("M.2 SSD")
print("After APPEND:", parts_tray)

parts_tray.insert(1, "CPU cooler")
print("After INSERT:", parts_tray)

parts_tray.pop(0)
print("After installing CPU:", parts_tray)

print("Parts remaining:", len(parts_tray))
{% endcapture %}

{% include runners/code.html
  runner_id="pc-list-operations"
  language="python"
  challenge=pc_list_operations_challenge
  code=pc_list_operations_code
  height="380px"
%}

**Expected output**

```text
Initial tray: ["CPU", "RAM"]
After APPEND: ["CPU", "RAM", "M.2 SSD"]
After INSERT: ["CPU", "CPU cooler", "RAM", "M.2 SSD"]
After installing CPU: ["CPU cooler", "RAM", "M.2 SSD"]
Parts remaining: 3
```

---

## Search Algorithm

**AP CSP Concept:** A linear search checks every list item until it finds a target. This algorithm searches the parts tray and returns its 1-based position, or `-1` when the part is absent.

{% capture pc_search_challenge %}
Search the parts tray for the graphics card and display its position.
{% endcapture %}

{% capture pc_search_code %}
def find_part(parts_tray, target_part):
    position = 1
    for part in parts_tray:
        if part == target_part:
            return position
        position += 1
    return -1

parts_tray = ["CPU", "RAM", "M.2 SSD", "Graphics card"]
result = find_part(parts_tray, "Graphics card")
print("Graphics card position:", result)
{% endcapture %}

{% include runners/code.html
   runner_id="pc-search"
   language="python"
   challenge=pc_search_challenge
   code=pc_search_code
   height="480px"
%}

**Expected output**

```text
Graphics card position: 4
```

---

## Boolean Logic

**AP CSP Concept:** `AND`, `OR`, and `NOT` combine Boolean conditions. A part should snap in only when both the component and its destination are correct. The build is not finished while required parts remain.

{% capture pc_boolean_challenge %}
Use AND and NOT to decide whether a CPU should snap into place and whether the build is still in progress.
{% endcapture %}

{% capture pc_boolean_code %}
selected_part = "CPU"
selected_slot = "CPU socket"
expected_part = "CPU"
expected_slot = "CPU socket"
parts_remaining = 7

correct_part = (selected_part == expected_part)
correct_slot = (selected_slot == expected_slot)

if correct_part and correct_slot:
    print("The CPU snaps into place.")
else:
    print("Return the part to the tray.")

if not (parts_remaining == 0):
    print("The PC build is still in progress.")
{% endcapture %}

{% include runners/code.html
   runner_id="pc-boolean"
   language="python"
   challenge=pc_boolean_challenge
   code=pc_boolean_code
   height="500px"
%}

**Expected output**

```text
The CPU snaps into place.
The PC build is still in progress.
```

---

# JavaScript Prototype

The JavaScript version turns the algorithm into a small browser interaction. Select a part, then select its destination. Correct placements stay installed. Incorrect placements return to the tray. The program records every attempt and displays the current accuracy.

{% capture pc_javascript_challenge %}
Run the PC assembly prototype. Try a wrong part first, then install all eight components in order. Identify the input, output, lists, procedure, selection, iteration, and Boolean expression in the code.
{% endcapture %}

{% capture pc_javascript_code %}
outputElement.innerHTML = '';

const parts = [
  { name: 'CPU', slot: 'CPU socket' },
  { name: 'RAM', slot: 'RAM slots' },
  { name: 'M.2 SSD', slot: 'M.2 slot' },
  { name: 'CPU cooler', slot: 'Cooler mount' },
  { name: 'Power supply', slot: 'PSU bay' },
  { name: 'Motherboard', slot: 'Board tray' },
  { name: 'Graphics card', slot: 'PCIe slot' },
  { name: 'Power cables', slot: 'Power headers' }
];

const attempts = [];
let currentStep = 0;
let selectedPart = -1;

const heading = document.createElement('h3');
heading.textContent = 'PC Assembly Bench';

const directions = document.createElement('p');
directions.textContent = 'Choose a part, then choose its destination.';

const status = document.createElement('p');
status.style.fontWeight = '700';

const progress = document.createElement('p');

const layout = document.createElement('div');
layout.style.display = 'grid';
layout.style.gridTemplateColumns = 'repeat(auto-fit, minmax(240px, 1fr))';
layout.style.gap = '20px';

const tray = document.createElement('div');
const trayTitle = document.createElement('h4');
trayTitle.textContent = 'Parts tray';
tray.appendChild(trayTitle);

const caseArea = document.createElement('div');
const caseTitle = document.createElement('h4');
caseTitle.textContent = 'Connection points';
caseArea.appendChild(caseTitle);

const partButtons = [];
const slotButtons = [];

function buttonStyle(button) {
  button.style.display = 'block';
  button.style.width = '100%';
  button.style.margin = '8px 0';
  button.style.padding = '12px';
  button.style.border = '1px solid #3b82f6';
  button.style.borderRadius = '8px';
  button.style.cursor = 'pointer';
}

function calculateAccuracy(results) {
  let correctAttempts = 0;
  for (const result of results) {
    if (result === true) {
      correctAttempts += 1;
    }
  }
  return Math.round((correctAttempts / results.length) * 100);
}

function checkPlacement(partIndex, slotIndex) {
  const correctPart = partIndex === currentStep;
  const correctSlot = slotIndex === currentStep;
  return correctPart && correctSlot;
}

function updateProgress() {
  const accuracy = attempts.length === 0 ? 100 : calculateAccuracy(attempts);
  progress.textContent = 'Installed: ' + currentStep + '/' + parts.length + ' | Accuracy: ' + accuracy + '%';
}

parts.forEach(function(part, index) {
  const partButton = document.createElement('button');
  partButton.textContent = part.name;
  buttonStyle(partButton);
  partButton.addEventListener('click', function() {
    selectedPart = index;
    status.textContent = part.name + ' selected. Now choose a destination.';
  });
  partButtons.push(partButton);
  tray.appendChild(partButton);

  const slotButton = document.createElement('button');
  slotButton.textContent = part.slot;
  buttonStyle(slotButton);
  slotButton.addEventListener('click', function() {
    if (selectedPart === -1) {
      status.textContent = 'Choose a part from the tray first.';
      return;
    }

    const isCorrect = checkPlacement(selectedPart, index);
    attempts.push(isCorrect);

    if (isCorrect) {
      partButtons[selectedPart].disabled = true;
      slotButton.disabled = true;
      slotButton.textContent = parts[selectedPart].name + ' installed';
      status.textContent = 'Correct! The part snapped into place.';
      currentStep += 1;
    } else {
      status.textContent = 'Incorrect. The part returned to the tray. Install ' + parts[currentStep].name + ' next.';
    }

    selectedPart = -1;
    updateProgress();

    if (currentStep === parts.length) {
      status.textContent = 'PC assembly complete!';
    }
  });
  slotButtons.push(slotButton);
  caseArea.appendChild(slotButton);
});

layout.appendChild(tray);
layout.appendChild(caseArea);
outputElement.appendChild(heading);
outputElement.appendChild(directions);
outputElement.appendChild(status);
outputElement.appendChild(progress);
outputElement.appendChild(layout);

status.textContent = 'Next part: ' + parts[currentStep].name;
updateProgress();
{% endcapture %}

{% include runners/ui.html
   runner_id="pc-javascript"
   challenge=pc_javascript_challenge
   code=pc_javascript_code
   height="680px"
   output_height="600px"
%}

**Example output (initial UI state)**

```text
Next part: CPU
Installed: 0/8 | Accuracy: 100%
```

---

# Python Prototype

The Python version uses the same lists, procedure, selection, iteration, Boolean logic, and accuracy calculation. `use_sample_input` is set to `True` so the web code runner can demonstrate the program automatically. Change it to `False` when running in a terminal to type your own choices with `input()`.

{% capture pc_python_challenge %}
Run the automatic sample build. Then change the sample values to try a different assembly order.
{% endcapture %}

{% capture pc_python_code %}
parts = ["CPU", "RAM", "M.2 SSD", "CPU cooler", "Power supply", "Motherboard", "Graphics card", "Power cables"]
slots = ["CPU socket", "RAM slots", "M.2 slot", "Cooler mount", "PSU bay", "Board tray", "PCIe slot", "Power headers"]
attempts = []
current_step = 0

# Sample choices keep this example runnable in the web code runner.
# Change these lists to test a different build order.
sample_attempts = [
    ("Graphics card", "PCIe slot"),
    ("CPU", "CPU socket"),
    ("RAM", "RAM slots"),
    ("M.2 SSD", "M.2 slot"),
    ("CPU cooler", "Cooler mount"),
    ("Power supply", "PSU bay"),
    ("Motherboard", "Board tray"),
    ("Graphics card", "PCIe slot"),
    ("Power cables", "Power headers"),
]
sample_index = 0

def check_placement(part_name, slot_name):
    correct_part = part_name.lower() == parts[current_step].lower()
    correct_slot = slot_name.lower() == slots[current_step].lower()
    return correct_part and correct_slot

while current_step < len(parts):
    print("\nNext part:", parts[current_step])
    selected_part, selected_slot = sample_attempts[sample_index]
    print("Choose a PC part:", selected_part)
    print("Choose its destination:", selected_slot)
    is_correct = check_placement(selected_part, selected_slot)
    attempts.append(is_correct)
    sample_index += 1

    if is_correct:
        print(selected_part, "snapped into place!")
        current_step += 1
    else:
        print("Incorrect placement. The part returned to the tray.")
        print("Hint:", parts[current_step], "goes in", slots[current_step])

correct_attempts = 0
for result in attempts:
    if result:
        correct_attempts += 1

accuracy = round((correct_attempts / len(attempts)) * 100)
print("\nPC assembly complete!")
print("Accuracy:", str(accuracy) + "%")
{% endcapture %}

{% include runners/code.html
   runner_id="pc-python"
   language="python"
   challenge=pc_python_challenge
   code=pc_python_code
   height="760px"
%}

**Sample output**

```text
\nNext part: CPU
Choose a PC part: Graphics card
Choose its destination: PCIe slot
Incorrect placement. The part returned to the tray.
Hint: CPU goes in CPU socket

Next part: CPU
Choose a PC part: CPU
Choose its destination: CPU socket
CPU snapped into place!
... (remaining steps omitted) ...
\nPC assembly complete!
Accuracy: 100%
```

---

# Reflection

JavaScript felt most natural for this project because it connects directly to browser buttons, visible output, and the snap-in interaction. Python made the algorithm shorter and easier to read, but its normal `input()` and `print()` interface is text-based. Pseudocode was the clearest planning language because it showed the lists, procedure, selection, iteration, and Boolean logic without extra browser or terminal syntax.

The main difference is how each language handles interaction. JavaScript creates and updates HTML elements with event listeners. Python normally pauses for terminal input and prints a response. Both languages still use the same underlying algorithm and data.
