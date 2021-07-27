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

const letterPositions = function (sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    let item = sentence[i];
    //console.log(item);
    if (!results[item]) {
      results[item] = [];
    }
    results[item].push(i);
  }
  //console.log(results);
  return results;
};


assertArraysEqual(letterPositions("hello").e, [1]);
//letterPositions("hello hi");