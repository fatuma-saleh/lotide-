const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}===${expected}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual}!==${expected}`);
  }
};


// TEST CODE
assertEqual("Labs", "Labs");
assertEqual(1, 5);