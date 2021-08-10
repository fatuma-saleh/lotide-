const assertEqual = require('./assertEqual')
const findKeyByValue = function (objVal, keyVal) {
  for (let item in objVal) {
    if (objVal[item] === keyVal) {
      return item;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
module.exports = findKeyByValue;
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);