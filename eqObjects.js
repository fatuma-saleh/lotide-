// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const eqObjects = function(object1, object2) {
  let obj1Key = Object.keys(object1);
  let obj2Key = Object.keys(object2);
  if (obj1Key.length !== obj2Key.length) {
    return false;
  }
  for (const obj of obj1Key) {

    if (Array.isArray(object1[obj]) && (Array.isArray(object2[obj]))) {
      if (!eqArrays(object1[obj], object2[obj])) {
        return false;
      }
    } else if (object1[obj] !== object2[obj]) {
      return false;
    }

  }
  return true;


};
module.exports = eqObjects;




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);// => false