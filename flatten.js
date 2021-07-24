const assertArraysEqual = function(arr1, arr2) {
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
  // return flag;
  if (flag === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1}===${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${arr1}!==${arr2}`);
  }

};

const flatten = function(nesArr) {
  let flaArr = [];
  //let flag
  for (let i = 0; i < nesArr.length; i++) {
    let check = Array.isArray(nesArr[i]);
    if (check === false) {
      //flag=false
      flaArr.push(nesArr[i]);
      //console.log(flaArr[i]);
    } else {
      for (let j = 0; j < nesArr[i].length; j++) {
        flaArr.push(nesArr[i][j]);
        //   flaArr = flaArr.concat(nesArr[i]);
      }
    }
  }
  
  return flaArr;
};

assertArraysEqual(flatten([1, 2,[8], [3, 4], 5]),[1, 2,3,4,5]);
assertArraysEqual(flatten([[1,6],4,[]]),[1,6,4]);
