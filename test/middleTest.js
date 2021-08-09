const middle = require('../middle');
const assert = require('chai').assert;
describe("#middle", () => {
  it("returs  [2]  for [1,2,3]",() => {
    assert.deepEqual(middle([1,2,3]), [2])
  });
  it("returs  [] for []",() => {
    assert.deepEqual(middle([]), [])
  });
  it("returs  []  for [1]",() => {
    assert.deepEqual(middle([1]), [])
  });
  it("returs  [] for [1,2]",() => {
    assert.deepEqual(middle([1,2]), [])
  });
  it("returs  [3,4]  for [1,2,3,4,5,6]",() => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4])
  });
});

