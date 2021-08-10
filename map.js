
const assertArrayEqual = require('./assertArraysEqual');
//const eqArrays = require('./eqArrays')

const map = function(array, callback) {
  if (Array.isArray(array)) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));

    }
    return results;
  }

};
module.exports = map;


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

