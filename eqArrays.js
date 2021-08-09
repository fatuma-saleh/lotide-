const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

//recursive 
// if (arr1.length === arr2.length) {


//   array1.forEach((item) => {
//     if (Array.isArray(item)) {
//       // Print out all it's items individually
//       printItems(item);
//     } else {
//       console.log(item);
//     }
//   });
// }
module.exports = eqArrays;

