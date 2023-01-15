// 1. Recreate the challenge from exercise 6.3-
// looping_with_arrays, but this time using a while loop.
// 2. Reflect on what solution you like better for this task: the for
// loop or the while loop?

const calcStringsLen = (arrStrings) => {
    const arrStringsLength = [];
  
    let i = 0;
    while ( i < arrStrings.length) {
      arrStringsLength.push(arrStrings[i++].length);
    }
  
    return arrStringsLength;
  };
  
  let arrTest = ["add", "remove", "replace", "cont"];
  let res = calcStringsLen(arrTest);
  console.log(res);
  
  //The fot loop is more appropriate