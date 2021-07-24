const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}===${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual}!==${expected}`);
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

assertEqual(eqArrays([1, 2,3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true);
