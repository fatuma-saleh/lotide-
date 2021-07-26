const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1}===${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${arr1}!==${arr2}`);
  }

};


const eqArrays = function (arr1, arr2) {
  let flag = false;
  if (arr1.length === 0 && arr2.length === 0) {
    flag = true;
  }

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


const middle = function (arr) {
  let midArr = [];
  let arrLength = arr.length;
  if (arrLength === 0 || arrLength === 1 || arrLength === 2) {
    midArr = [];
  } else if (arrLength % 2 !== 0) {//odd Length
    let pos = (arrLength - 1) / 2;
    midArr.push(arr[pos]);

  } else if (arrLength % 2 === 0) {//even length
    let pos = arrLength / 2;
    midArr.push(arr[pos - 1], arr[pos]);
  }
  return midArr;
};

const num1 = [1];
const num2 = [1, 2];
const num0 = [];
const numOdd = [1, 2, 3];
const numEven = [1, 2, 3, 4, 5, 6];
assertArraysEqual(middle(num1), []);
assertArraysEqual(middle(num0), []);
assertArraysEqual(middle(numOdd), [2]);
assertArraysEqual(middle(num2), []);
assertArraysEqual(middle(numEven), [3, 4]);

