(function exposePCAssemblyCore(globalScope) {
  "use strict";

  const PARTS = Object.freeze([
    Object.freeze({ id: "cpu", name: "CPU", targetId: "cpu-socket", instruction: "Seat the CPU in the motherboard socket." }),
    Object.freeze({ id: "ram", name: "Memory (RAM)", targetId: "ram-slots", instruction: "Press the RAM into the DIMM slots." }),
    Object.freeze({ id: "ssd", name: "M.2 SSD", targetId: "ssd-slot", instruction: "Slide the SSD into the M.2 slot." }),
    Object.freeze({ id: "cooler", name: "CPU cooler", targetId: "cooler-mount", instruction: "Mount the cooler over the CPU." }),
    Object.freeze({ id: "psu", name: "Power supply", targetId: "psu-bay", instruction: "Fit the power supply into the lower bay." }),
    Object.freeze({ id: "motherboard", name: "Motherboard", targetId: "motherboard-tray", instruction: "Lower the prepared motherboard onto its standoffs." }),
    Object.freeze({ id: "gpu", name: "Graphics card", targetId: "pcie-slot", instruction: "Seat the graphics card in the PCIe slot." }),
    Object.freeze({ id: "cables", name: "Power cables", targetId: "power-headers", instruction: "Connect the final power cables." })
  ]);

  function getNextPart(completedCount) {
    return PARTS[completedCount] || null;
  }

  function evaluatePlacement(partId, targetId, completedCount) {
    const part = PARTS.find((candidate) => candidate.id === partId);
    const nextPart = getNextPart(completedCount);

    if (!part || !nextPart) {
      return Object.freeze({ accepted: false, reason: "invalid", expectedPart: nextPart });
    }

    const correctTarget = part.targetId === targetId;
    const correctOrder = part.id === nextPart.id;
    const accepted = correctTarget && correctOrder;

    let reason = "accepted";
    if (!correctTarget) reason = "wrong-target";
    else if (!correctOrder) reason = "wrong-order";

    return Object.freeze({ accepted, reason, expectedPart: nextPart });
  }

  function calculateAccuracy(attempts) {
    if (!Array.isArray(attempts) || attempts.length === 0) return 100;
    const correctAttempts = attempts.filter(Boolean).length;
    return Math.round((correctAttempts / attempts.length) * 100);
  }

  const api = Object.freeze({ PARTS, getNextPart, evaluatePlacement, calculateAccuracy });
  globalScope.PCAssemblyCore = api;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
})(typeof window !== "undefined" ? window : globalThis);
