const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}===${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual}!==${expected}`);
  }
};
const countLetters = function (string) {
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

const string = "lighthouse in the house";
const result = countLetters(string);
assertEqual(result["h"], 4);