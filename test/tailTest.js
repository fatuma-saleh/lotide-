// const assertEqual = require('../assertEqual');
// const tail = require('../tail');
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements
const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 'Labs' for ['Lighthouse','Labs']", () => {
    assert.deepEqual(tail(['Lighthouse', 'Labs']),  ['Labs']);
  });
  it("returns 'Lighthouse','Labs' for ['Hello','Lighthouse','Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns the same number of elements as the original array for example in 'words' 3", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
  it("returns two elements when passed three elements", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result.length, 2);
  });
  it("returns '5' for [2,5]", () => {
    assert.deepEqual(tail([2, 5]),  [5])
    
  });
});