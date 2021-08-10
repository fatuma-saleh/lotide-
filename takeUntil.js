
const assertArrayEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  const subarr = [];
  if (Array.isArray(array)) {
    for (const element of array) {
      if ((callback(element))) {
        return subarr;
      } else {
        subarr.push(element);
      }
    }
    return subarr;

  }
};
module.exports = takeUntil;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArrayEqual(results1, [1, 2, 5,  7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArrayEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);



