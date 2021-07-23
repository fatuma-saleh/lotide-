const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}===${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual}!==${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  let flag = false;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        flag = true;
        break;
      } else {
        flag = false;
      }
    }
  }
  return flag;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true);
