
const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1}===${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${arr1}!==${arr2}`);
  }

};

const eqArrays = function(arr1, arr2) {
  let flag = false;
  if (arr1.length === arr2.length) {

    for (let i = 0; i < arr1.length; i++) {

      if (arr1[i] !== arr2[i]) {
        flag = false;
        break;
      } else {
        flag = true;
      }
    }
  }
  return flag;
};

const map = function(array, callback) {
  if (Array.isArray(array)) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));

    }
    return results;
  }

};


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
//console.log(results1);
assertArrayEqual(results1, ["g", "c", "t", "m", "t"]);

const numbers = [1, 2, 3, 4, 5];
const results2 = map(numbers, function(num) {
  return num * num;
});
assertArrayEqual(results2, [1, 4, 9, 16, 25]);


const days = ["Monday", "Tuesday", "Wednesday"];
const results3 = map(days, day => day.length);
assertArrayEqual(results3, [6, 7, 9]);

