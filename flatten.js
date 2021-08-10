const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const flatten = function (nesArr) {
  let flaArr = [];  
  for(let item of nesArr){
    if(!Array.isArray(item)){
      flaArr.push(item)
    }else{
      for(let nesItem of item){
        flaArr.push(nesItem);
      }
    }
  }

  return flaArr;
};

assertArraysEqual(flatten([1, 2, [8], [3, 4], 5]), [1, 2, 8, 3,4, 5]);
assertArraysEqual(flatten([[1, 6], 4, []]), [1, 6, 4]);
assertArraysEqual(flatten([[1], [4,0], [],9]), [1, 4,0,9]);
module.exports = flatten;
