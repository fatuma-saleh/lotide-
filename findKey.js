const assertEqual = require('./assertEqual');
const findKey = function(object, callback) {
  const key = Object.keys(object);
  for (const element of key) {
    if (callback(object[element])) {
      return element;
    }
  }

};
const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2);

assertEqual(result, "noma");

module.exports = findKey
