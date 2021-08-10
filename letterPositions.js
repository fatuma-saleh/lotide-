const assertArraysEqual = require('./assertArraysEqual');
//const eqArrays = require('./eqArrays');

const letterPositions = function(sentence) {
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
module.exports = letterPositions;

assertArraysEqual(letterPositions("hello").e, [1]);
//letterPositions("hello hi");