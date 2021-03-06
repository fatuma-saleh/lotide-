const assertArraysEqual = require('./assertArraysEqual')

const without = function (arr1, arr2) {

  let finalArr = [];
  if (arr2.length === 0) {
    finalArr = arr1;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      let flag = 0;
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          flag = 1;
          break;

        }

      }
      if (flag === 0) {
        finalArr.push(arr1[i]);

      }
    }
  }
  //console.log("check",arr1);
  return finalArr;

  return finalArr
};
module.exports = without
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse", "world"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(without(words, ["world"]), ["hello", "lighthouse"]);
assertArraysEqual(without(words, []), ["hello", "world", "lighthouse"]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["1", "2", "3", 4], ["3"]), ["1", "2",4]);

