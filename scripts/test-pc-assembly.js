"use strict";

const assert = require("node:assert/strict");
const {
  PARTS,
  getNextPart,
  evaluatePlacement,
  calculateAccuracy
} = require("../assets/js/pc-assembly-core.js");

assert.equal(PARTS.length, 8, "the lesson should include all eight assembly steps");
assert.equal(getNextPart(0).id, "cpu");
assert.equal(getNextPart(PARTS.length), null);

assert.deepEqual(
  evaluatePlacement("cpu", "cpu-socket", 0),
  { accepted: true, reason: "accepted", expectedPart: PARTS[0] }
);

assert.equal(evaluatePlacement("cpu", "ram-slots", 0).reason, "wrong-target");
assert.equal(evaluatePlacement("gpu", "pcie-slot", 0).reason, "wrong-order");
assert.equal(evaluatePlacement("unknown", "cpu-socket", 0).reason, "invalid");

assert.equal(calculateAccuracy([]), 100);
assert.equal(calculateAccuracy([true, false, true]), 67);
assert.equal(calculateAccuracy([false, false]), 0);

console.log("PC assembly core tests passed (12 assertions).");
