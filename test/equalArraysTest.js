// const assertEqual = require('../assertEqual');
// const eqArrays = require('../eqArrays');
// assertEqual(eqArrays([1, 2,3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1]), false);
// assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false);
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;
describe("#equalArrays", () => {
  it("returns true for [1,2,3],[1,2,3,]", () => {
    assert.deepEqual(eqArrays([1 ,2 ,3], [1 ,2 ,3]), true);
  });
  it("returns true for [],[]", () => {
    assert.deepEqual(eqArrays([], []), true);
  });
  it("returns true for ['hello'],['hello]'", () => {
    assert.deepEqual(eqArrays(["hello"], ["hello"]), true);
  });
});