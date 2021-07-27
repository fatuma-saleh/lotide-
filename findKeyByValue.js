const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}===${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual}!==${expected}`);
  }
};

const findKeyByValue = function (objVal, keyVal) {
  let objArr = Object.keys(objVal);
  for (let i = 0; i < objArr.length; i++) {
    let key = objArr[i];
    let val = objVal[key];
    if (val === keyVal) {
      return key;
    }
  }
}


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);