const middle = function (arr) {
  let midArr = [];
  let arrLength = arr.length;
  if (arrLength === 0 || arrLength === 1 || arrLength === 2) {
    midArr = [];
  } else if (arrLength % 2 !== 0) {//odd Length
    let pos = (arrLength - 1) / 2;
    midArr.push(arr[pos]);

  } else if (arrLength % 2 === 0) {//even length
    let pos = arrLength / 2;
    midArr.push(arr[pos - 1], arr[pos]);
  }
  return midArr;
};

module.exports = middle;
