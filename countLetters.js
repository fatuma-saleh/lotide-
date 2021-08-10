const assertEqual = require('./assertEqual');
const countLetters = function(string) {
  let objLetters = {};
  for (let str of string) {
    if (str !== " ") {
      if (objLetters[str]) {
        objLetters[str] += 1;

      } else {
        objLetters[str] = 1;
      }
    }
  }
  //console.log(objLetters);
  return objLetters;
};

module.exports = countLetters;


const string = "lighthouse in the house";
const result = countLetters(string);
assertEqual(result["h"], 4);
