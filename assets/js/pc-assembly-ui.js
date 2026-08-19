(function initializePCAssembly() {
  "use strict";

  const root = document.getElementById("pc-assembly-lab");
  const core = window.PCAssemblyCore;
  if (!root || !core) return;

  const partButtons = Array.from(root.querySelectorAll("[data-part-id]"));
  const targetButtons = Array.from(root.querySelectorAll("[data-target-id]"));
  const reelSteps = Array.from(root.querySelectorAll("[data-reel-step]"));
  const currentNumber = root.querySelector("[data-current-number]");
  const currentName = root.querySelector("[data-current-name]");
  const progressValue = root.querySelector("[data-progress-value]");
  const accuracyValue = root.querySelector("[data-accuracy-value]");
  const attemptValue = root.querySelector("[data-attempt-value]");
  const feedback = root.querySelector("[data-feedback]");
  const feedbackTitle = root.querySelector("[data-feedback-title]");
  const feedbackDetail = root.querySelector("[data-feedback-detail]");
  const liveRegion = root.querySelector("[data-live-region]");
  const completePanel = root.querySelector("[data-complete-panel]");
  const completeAccuracy = root.querySelector("[data-complete-accuracy]");
  const hintButton = root.querySelector("[data-hint-button]");
  const resetButtons = Array.from(root.querySelectorAll("[data-reset-button]"));

  const state = {
    completedCount: 0,
    attempts: [],
    selectedPartId: null,
    draggedPartId: null
  };

  function getPartButton(partId) {
    return partButtons.find((button) => button.dataset.partId === partId);
  }

  function getTargetButton(targetId) {
    return targetButtons.find((button) => button.dataset.targetId === targetId);
  }

  function setFeedback(kind, title, detail) {
    feedback.classList.remove("is-success", "is-error");
    if (kind) feedback.classList.add(`is-${kind}`);
    feedbackTitle.textContent = title;
    feedbackDetail.textContent = detail;
    liveRegion.textContent = `${title} ${detail}`;
  }

  function clearSelection() {
    state.selectedPartId = null;
    partButtons.forEach((button) => {
      button.classList.remove("is-selected");
      button.setAttribute("aria-pressed", "false");
    });
    targetButtons.forEach((target) => target.classList.remove("is-selected-target"));
  }

  function selectPart(partId) {
    const button = getPartButton(partId);
    if (!button || button.disabled) return;

    clearSelection();
    state.selectedPartId = partId;
    button.classList.add("is-selected");
    button.setAttribute("aria-pressed", "true");
    targetButtons.filter((target) => !target.disabled).forEach((target) => {
      target.classList.add("is-selected-target");
    });

    const part = core.PARTS.find((candidate) => candidate.id === partId);
    setFeedback(null, `${part.name} selected.`, "Choose its destination in the case.");
  }

  function animateReturn(partId) {
    const button = getPartButton(partId);
    if (!button) return;
    button.classList.remove("is-wrong");
    void button.offsetWidth;
    button.classList.add("is-wrong");
    window.setTimeout(() => button.classList.remove("is-wrong"), 480);
  }

  function fillTarget(part, target) {
    const partButton = getPartButton(part.id);
    const icon = partButton.querySelector("svg").cloneNode(true);
    const accessibleName = document.createElement("span");
    accessibleName.className = "pc-visually-hidden";
    accessibleName.textContent = `${part.name} installed`;

    target.replaceChildren(icon, accessibleName);
    target.classList.add("is-filled");
    target.classList.remove("is-dragover", "is-hint", "is-selected-target");
    target.disabled = true;
    partButton.disabled = true;
    partButton.setAttribute("aria-pressed", "false");
  }

  function updateReadouts() {
    const total = core.PARTS.length;
    const nextPart = core.getNextPart(state.completedCount);
    const accuracy = core.calculateAccuracy(state.attempts);

    progressValue.textContent = `${state.completedCount} / ${total}`;
    accuracyValue.textContent = `${accuracy}%`;
    attemptValue.textContent = String(state.attempts.length);

    reelSteps.forEach((step, index) => {
      step.classList.toggle("is-complete", index < state.completedCount);
      step.classList.toggle("is-active", index === state.completedCount);
      const dot = step.querySelector(".pc-reel-dot");
      dot.textContent = index < state.completedCount ? "✓" : String(index + 1).padStart(2, "0");
    });

    if (nextPart) {
      currentNumber.textContent = String(state.completedCount + 1).padStart(2, "0");
      currentName.textContent = nextPart.instruction;
    } else {
      currentNumber.textContent = "✓";
      currentName.textContent = "Assembly complete. Run the final check.";
    }
  }

  function finishAssembly() {
    const accuracy = core.calculateAccuracy(state.attempts);
    completeAccuracy.textContent = `${accuracy}%`;
    completePanel.classList.add("is-visible");
    setFeedback("success", "Power-on check passed.", "All eight parts are installed in the correct order.");
    window.setTimeout(() => completePanel.scrollIntoView({ behavior: "smooth", block: "nearest" }), 180);
  }

  function attemptPlacement(partId, targetId) {
    const result = core.evaluatePlacement(partId, targetId, state.completedCount);
    const part = core.PARTS.find((candidate) => candidate.id === partId);

    if (!part || !result.expectedPart) return;
    state.attempts.push(result.accepted);

    if (!result.accepted) {
      animateReturn(partId);
      if (result.reason === "wrong-target") {
        setFeedback("error", `${part.name} does not fit there.`, "It returned to the tray. Match the part to its labeled connection point.");
      } else {
        setFeedback("error", `${part.name} is needed later.`, `Install ${result.expectedPart.name} first; the part has returned to the tray.`);
      }
      clearSelection();
      updateReadouts();
      return;
    }

    const target = getTargetButton(targetId);
    fillTarget(part, target);
    state.completedCount += 1;
    clearSelection();
    setFeedback("success", `${part.name} installed.`, state.completedCount === core.PARTS.length ? "The build is ready for its power-on check." : "The assembly reel advanced to the next step.");
    updateReadouts();

    if (state.completedCount === core.PARTS.length) finishAssembly();
  }

  function resetGame() {
    state.completedCount = 0;
    state.attempts = [];
    state.draggedPartId = null;
    clearSelection();

    partButtons.forEach((button) => {
      button.disabled = false;
      button.classList.remove("is-wrong", "is-dragging");
      button.setAttribute("aria-pressed", "false");
    });

    targetButtons.forEach((target) => {
      const label = document.createElement("span");
      label.textContent = target.dataset.targetName;
      target.replaceChildren(label);
      target.disabled = false;
      target.classList.remove("is-filled", "is-hint", "is-dragover", "is-selected-target");
    });

    completePanel.classList.remove("is-visible");
    setFeedback(null, "Bench ready.", "Drag a part into the case, or select a part and then its destination.");
    updateReadouts();
  }

  partButtons.forEach((button) => {
    button.addEventListener("click", () => selectPart(button.dataset.partId));
    button.addEventListener("dragstart", (event) => {
      if (button.disabled) {
        event.preventDefault();
        return;
      }
      state.draggedPartId = button.dataset.partId;
      button.classList.add("is-dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", state.draggedPartId);
    });
    button.addEventListener("dragend", () => {
      state.draggedPartId = null;
      button.classList.remove("is-dragging");
      targetButtons.forEach((target) => target.classList.remove("is-dragover"));
    });
  });

  targetButtons.forEach((target) => {
    target.addEventListener("click", () => {
      if (state.selectedPartId && !target.disabled) {
        attemptPlacement(state.selectedPartId, target.dataset.targetId);
      }
    });
    target.addEventListener("dragover", (event) => {
      if (target.disabled) return;
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
      target.classList.add("is-dragover");
    });
    target.addEventListener("dragleave", () => target.classList.remove("is-dragover"));
    target.addEventListener("drop", (event) => {
      event.preventDefault();
      target.classList.remove("is-dragover");
      const partId = event.dataTransfer.getData("text/plain") || state.draggedPartId;
      if (partId && !target.disabled) attemptPlacement(partId, target.dataset.targetId);
    });
  });

  hintButton.addEventListener("click", () => {
    const nextPart = core.getNextPart(state.completedCount);
    if (!nextPart) return;
    const target = getTargetButton(nextPart.targetId);
    target.classList.remove("is-hint");
    void target.offsetWidth;
    target.classList.add("is-hint");
    setFeedback(null, `Find ${nextPart.name}.`, nextPart.instruction);
    window.setTimeout(() => target.classList.remove("is-hint"), 1800);
  });

  resetButtons.forEach((button) => button.addEventListener("click", resetGame));

  root.querySelectorAll("[data-copy-target]").forEach((button) => {
    button.addEventListener("click", async () => {
      const code = document.getElementById(button.dataset.copyTarget).textContent;
      try {
        await navigator.clipboard.writeText(code);
        button.textContent = "Copied";
      } catch (error) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(document.getElementById(button.dataset.copyTarget));
        selection.removeAllRanges();
        selection.addRange(range);
        button.textContent = "Selected";
      }
      window.setTimeout(() => { button.textContent = "Copy code"; }, 1600);
    });
  });

  updateReadouts();
})();
