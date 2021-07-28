
const eqArrays = function(arr1, arr2) {
  let flag = false;
  if (arr1.length === arr2.length) {

    for (let i = 0; i < arr1.length; i++) {

      if (arr1[i] !== arr2[i]) {
        flag = false;
        break;
      } else {
        flag = true;
      }
    }
  }
  return flag;
};

const eqObjects = function(object1, object2) {
  let flag = false;
  let obj1Key = Object.keys(object1);
  let obj2Key = Object.keys(object2);
  if (obj1Key.length === obj2Key.length) {

    for (const obj of obj1Key) {
      if (Array.isArray(object1[obj]) && (Array.isArray(object2[obj]))) {
        flag = eqArrays(object1[obj], object2[obj]);
      } else if (object1[obj] === object2[obj]) {
        flag = true;
      }

    }
  } else {
    flag = false;

  }

  return flag;

};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅ Assertion Passed: ${inspect(object1)} ===  ${inspect(object2)}`);
  } else {
    console.log(`❌❌ Assertion Passed: ${inspect(object1)} !==  ${inspect(object2)}`);
  }

};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true