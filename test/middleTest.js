const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const num1 = [1];
const num2 = [1, 2];
const num0 = [];
const numOdd = [1, 2, 3];
const numEven = [1, 2, 3, 4, 5, 6];
assertArraysEqual(middle(num1), []);
assertArraysEqual(middle(num0), []);
assertArraysEqual(middle(num2), []);
assertArraysEqual(middle(numOdd), [2]);
assertArraysEqual(middle(numEven), [3,4]);

