const assertArrayEqual = function (arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1}===${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${arr1}!==${arr2}`);
  }

};

const eqArrays = function (arr1, arr2) {
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
assertArrayEqual([1, 2, 3], [1, 2, 3]);
assertArrayEqual(["hi","world"],["hi"]);