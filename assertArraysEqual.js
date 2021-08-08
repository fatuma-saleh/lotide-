const eqArrays = require('./eqArrays');
const assertArrayEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1}===${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${arr1}!==${arr2}`);
  }

};

module.exports = assertArrayEqual;
