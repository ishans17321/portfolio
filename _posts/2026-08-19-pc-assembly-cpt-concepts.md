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

> **Team-size check:** The assignment says teams of three, but six contributors were provided. Confirm whether this should be one six-person team or two three-person teams before submitting.

---

## Output

**CPT Requirement:** Your program must produce output visible to the user. College Board pseudocode uses `DISPLAY()` to show results. In the PC assembly program, output tells the builder which part is next and whether a placement was correct.

{% capture pc_output_challenge %}
Display the current PC part and where it should be installed.
{% endcapture %}

{% capture pc_output_code %}
currentPart ← "CPU"
targetSlot ← "CPU socket"

DISPLAY("Current part: " + currentPart)
DISPLAY("Install in: " + targetSlot)
{% endcapture %}

{% include runners/code.html
   runner_id="pc-output"
   language="pseudocode"
   challenge=pc_output_challenge
   code=pc_output_code
   height="220px"
%}

---

## Input

**CPT Requirement:** Your program must get input from the user. College Board pseudocode uses `INPUT()` to collect data. In this project, the builder supplies a part and a destination.

{% capture pc_input_challenge %}
Ask the builder to choose a PC part and its destination, then display both choices.
{% endcapture %}

{% capture pc_input_code %}
selectedPart ← INPUT("Choose a PC part:")
selectedSlot ← INPUT("Choose its destination:")

DISPLAY("Selected part: " + selectedPart)
DISPLAY("Selected destination: " + selectedSlot)
{% endcapture %}

{% include runners/code.html
   runner_id="pc-input"
   language="pseudocode"
   challenge=pc_input_challenge
   code=pc_input_code
   height="230px"
%}

---

## List

**CPT Requirement:** Your program must use a list to manage multiple related values. The ordered `parts` list stores every component without requiring a separate variable for each one. College Board pseudocode lists begin at index 1.

{% capture pc_list_challenge %}
Store the PC components in assembly order and display each component with a loop.
{% endcapture %}

{% capture pc_list_code %}
parts ← ["CPU", "RAM", "M.2 SSD", "CPU cooler", "Power supply", "Motherboard", "Graphics card", "Power cables"]

DISPLAY("Parts in this build: " + LENGTH(parts))

FOR EACH part IN parts
{
  DISPLAY(part)
}
{% endcapture %}

{% include runners/code.html
   runner_id="pc-list"
   language="pseudocode"
   challenge=pc_list_challenge
   code=pc_list_code
   height="300px"
%}

---

## Procedure

**CPT Requirement:** You must create at least one student-developed procedure with parameters. The procedure must be called and contribute to the program. This procedure accepts a part and a target, then returns whether they match.

{% capture pc_procedure_challenge %}
Create and call a procedure that checks whether the CPU was placed in the CPU socket.
{% endcapture %}

{% capture pc_procedure_code %}
PROCEDURE isCorrectTarget(partName, targetName)
{
  IF (partName = "CPU" AND targetName = "CPU socket")
  {
    RETURN(true)
  }
  ELSE
  {
    RETURN(false)
  }
}

correctPlacement ← isCorrectTarget("CPU", "CPU socket")
DISPLAY("Correct placement: " + correctPlacement)
{% endcapture %}

{% include runners/code.html
   runner_id="pc-procedure"
   language="pseudocode"
   challenge=pc_procedure_challenge
   code=pc_procedure_code
   height="390px"
%}

---

## Sequence

**CPT Concept:** Sequencing means statements execute in order. A PC must also be assembled in a sensible order: prepare the motherboard, mount it, and then connect the remaining components.

{% capture pc_sequence_challenge %}
Display four motherboard-preparation steps in the order they occur.
{% endcapture %}

{% capture pc_sequence_code %}
step ← 1
DISPLAY("Step " + step + ": Seat the CPU")

step ← step + 1
DISPLAY("Step " + step + ": Install the RAM")

step ← step + 1
DISPLAY("Step " + step + ": Install the M.2 SSD")

step ← step + 1
DISPLAY("Step " + step + ": Mount the CPU cooler")
{% endcapture %}

{% include runners/code.html
   runner_id="pc-sequence"
   language="pseudocode"
   challenge=pc_sequence_challenge
   code=pc_sequence_code
   height="330px"
%}

---

## Selection

**CPT Requirement:** Your algorithm must include selection with `IF` or `IF/ELSE`. Selection lets the program keep a correct part in place or return an incorrect part to the tray.

{% capture pc_selection_challenge %}
Check a selected component. If it is the expected part, snap it in; otherwise return it to the tray.
{% endcapture %}

{% capture pc_selection_code %}
expectedPart ← "CPU"
selectedPart ← INPUT("Choose the first part:")

IF (selectedPart = expectedPart)
{
  DISPLAY("Correct! " + selectedPart + " snapped into place.")
}
ELSE
{
  DISPLAY("Incorrect. " + selectedPart + " returned to the parts tray.")
  DISPLAY("Install " + expectedPart + " first.")
}
{% endcapture %}

{% include runners/code.html
   runner_id="pc-selection"
   language="pseudocode"
   challenge=pc_selection_challenge
   code=pc_selection_code
   height="360px"
%}

---

## Iteration

**CPT Requirement:** Your algorithm must include iteration using a loop. Iteration lets one block of code process every PC component instead of repeating similar statements eight times.

{% capture pc_iteration_challenge %}
Loop through the ordered parts list and display one installation instruction for each component.
{% endcapture %}

{% capture pc_iteration_code %}
parts ← ["CPU", "RAM", "M.2 SSD", "CPU cooler", "Power supply", "Motherboard", "Graphics card", "Power cables"]
step ← 1

FOR EACH part IN parts
{
  DISPLAY("Step " + step + ": Install " + part)
  step ← step + 1
}
{% endcapture %}

{% include runners/code.html
   runner_id="pc-iteration"
   language="pseudocode"
   challenge=pc_iteration_challenge
   code=pc_iteration_code
   height="320px"
%}

---

## Complete Algorithm

**CPT Requirement:** Your main algorithm must integrate sequencing, selection, and iteration to solve a meaningful problem. This procedure processes a list in order, checks each simulated placement, records the result, and returns the number of successful installations.

{% capture pc_algorithm_challenge %}
Run a complete PC assembly algorithm that combines a list, procedure, sequence, selection, iteration, and a return value.
{% endcapture %}

{% capture pc_algorithm_code %}
PROCEDURE assembleComputer(parts, selectedParts)
{
  installedCount ← 0
  step ← 1

  FOR EACH selectedPart IN selectedParts
  {
    expectedPart ← parts[step]

    IF (selectedPart = expectedPart)
    {
      DISPLAY(selectedPart + " installed correctly.")
      installedCount ← installedCount + 1
      step ← step + 1
    }
    ELSE
    {
      DISPLAY(selectedPart + " returned. Next part is " + expectedPart + ".")
    }
  }

  RETURN(installedCount)
}

parts ← ["CPU", "RAM", "M.2 SSD", "CPU cooler"]
attempts ← ["Graphics card", "CPU", "RAM", "M.2 SSD", "CPU cooler"]

installed ← assembleComputer(parts, attempts)
DISPLAY("Installed correctly: " + installed + " of " + LENGTH(parts))
{% endcapture %}

{% include runners/code.html
   runner_id="pc-algorithm"
   language="pseudocode"
   challenge=pc_algorithm_challenge
   code=pc_algorithm_code
   height="600px"
%}

---

## List Operations

**AP CSP Concept:** `APPEND`, `INSERT`, `REMOVE`, and `LENGTH` modify and measure lists. These operations can update the parts tray as components are added or installed.

{% capture pc_list_operations_challenge %}
Modify a PC parts tray with all four College Board list operations.
{% endcapture %}

{% capture pc_list_operations_code %}
partsTray ← ["CPU", "RAM"]
DISPLAY("Initial tray: " + partsTray)

APPEND(partsTray, "M.2 SSD")
DISPLAY("After APPEND: " + partsTray)

INSERT(partsTray, 2, "CPU cooler")
DISPLAY("After INSERT: " + partsTray)

REMOVE(partsTray, 1)
DISPLAY("After installing CPU: " + partsTray)

DISPLAY("Parts remaining: " + LENGTH(partsTray))
{% endcapture %}

{% include runners/code.html
   runner_id="pc-list-operations"
   language="pseudocode"
   challenge=pc_list_operations_challenge
   code=pc_list_operations_code
   height="380px"
%}

---

## Search Algorithm

**AP CSP Concept:** A linear search checks every list item until it finds a target. This algorithm searches the parts tray and returns its 1-based position, or `-1` when the part is absent.

{% capture pc_search_challenge %}
Search the parts tray for the graphics card and display its position.
{% endcapture %}

{% capture pc_search_code %}
PROCEDURE findPart(partsTray, targetPart)
{
  position ← 1

  FOR EACH part IN partsTray
  {
    IF (part = targetPart)
    {
      RETURN(position)
    }
    position ← position + 1
  }

  RETURN(-1)
}

partsTray ← ["CPU", "RAM", "M.2 SSD", "Graphics card"]
result ← findPart(partsTray, "Graphics card")
DISPLAY("Graphics card position: " + result)
{% endcapture %}

{% include runners/code.html
   runner_id="pc-search"
   language="pseudocode"
   challenge=pc_search_challenge
   code=pc_search_code
   height="480px"
%}

---

## Boolean Logic

**AP CSP Concept:** `AND`, `OR`, and `NOT` combine Boolean conditions. A part should snap in only when both the component and its destination are correct. The build is not finished while required parts remain.

{% capture pc_boolean_challenge %}
Use AND and NOT to decide whether a CPU should snap into place and whether the build is still in progress.
{% endcapture %}

{% capture pc_boolean_code %}
selectedPart ← "CPU"
selectedSlot ← "CPU socket"
expectedPart ← "CPU"
expectedSlot ← "CPU socket"
partsRemaining ← 7

correctPart ← (selectedPart = expectedPart)
correctSlot ← (selectedSlot = expectedSlot)

IF (correctPart AND correctSlot)
{
  DISPLAY("The CPU snaps into place.")
}
ELSE
{
  DISPLAY("Return the part to the tray.")
}

IF (NOT (partsRemaining = 0))
{
  DISPLAY("The PC build is still in progress.")
}
{% endcapture %}

{% include runners/code.html
   runner_id="pc-boolean"
   language="pseudocode"
   challenge=pc_boolean_challenge
   code=pc_boolean_code
   height="500px"
%}

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

---

# Python Prototype

The Python version uses the same lists, procedure, selection, iteration, Boolean logic, and accuracy calculation. `use_sample_input` is set to `True` so the web code runner can demonstrate the program automatically. Change it to `False` when running in a terminal to type your own choices with `input()`.

{% capture pc_python_challenge %}
Run the automatic sample build. Then copy the code to a terminal, change use_sample_input to False, and assemble the PC with your own typed choices.
{% endcapture %}

{% capture pc_python_code %}
parts = ["CPU", "RAM", "M.2 SSD", "CPU cooler", "Power supply", "Motherboard", "Graphics card", "Power cables"]
slots = ["CPU socket", "RAM slots", "M.2 slot", "Cooler mount", "PSU bay", "Board tray", "PCIe slot", "Power headers"]
attempts = []
current_step = 0

# True keeps this example runnable in the web code runner.
# Change to False in a terminal to use input().
use_sample_input = True
sample_parts = ["Graphics card"] + parts
sample_slots = ["PCIe slot"] + slots
sample_index = 0

def get_choice(prompt, sample_values):
    global sample_index
    if use_sample_input:
        choice = sample_values[sample_index]
        print(prompt + choice)
        return choice
    return input(prompt).strip()

def check_placement(part_name, slot_name):
    correct_part = part_name.lower() == parts[current_step].lower()
    correct_slot = slot_name.lower() == slots[current_step].lower()
    return correct_part and correct_slot

while current_step < len(parts):
    print("\nNext part:", parts[current_step])
    selected_part = get_choice("Choose a PC part: ", sample_parts)
    selected_slot = get_choice("Choose its destination: ", sample_slots)
    is_correct = check_placement(selected_part, selected_slot)
    attempts.append(is_correct)

    if is_correct:
        print(selected_part, "snapped into place!")
        current_step += 1
    else:
        print("Incorrect placement. The part returned to the tray.")
        print("Hint:", parts[current_step], "goes in", slots[current_step])

    if use_sample_input:
        sample_index += 1

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

---

# Reflection

JavaScript felt most natural for this project because it connects directly to browser buttons, visible output, and the snap-in interaction. Python made the algorithm shorter and easier to read, but its normal `input()` and `print()` interface is text-based. Pseudocode was the clearest planning language because it showed the lists, procedure, selection, iteration, and Boolean logic without extra browser or terminal syntax.

The main difference is how each language handles interaction. JavaScript creates and updates HTML elements with event listeners. Python normally pauses for terminal input and prints a response. Both languages still use the same underlying algorithm and data.
