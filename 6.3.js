const calcStringsLen = (arrStrings) => {
  const arrStringsLength = [];

  for (let i = 0; i < arrStrings.length; i++) {
    arrStringsLength.push(arrStrings[i].length);
  }

  return arrStringsLength;
};

let arrTest = ["add", "remove", "replace", "cont"];
let res = calcStringsLen(arrTest);
console.log(res);
