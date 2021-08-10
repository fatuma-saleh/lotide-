
const eqArrays = require('./eqArrays')
const eqObjects = require('./eqObjects')

const assertObjectsEqual = function(object1, object2) {
 const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅ Assertion Passed: ${inspect(object1)} ===  ${inspect(object2)}`);
  } else {
    console.log(`❌❌ Assertion Passed: ${inspect(object1)} !==  ${inspect(object2)}`);
  }

};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true