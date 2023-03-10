// 1. Fill an array with 100 of the same object using the array fill
// method.
// 2. Create an array with numbers ranging from 1-100 using
// the Array.from method.
// 3. Convert only values of an object into one array.
// 4. Convert an array into one object.
// 5. Find out if an array is an array.
// 6. Copy an array.
// ● Create a copy of an array that won’t affect the
// original array if modified.
// ● Create a copy of an array that will affect the original
// array if modified

const { object } = require("prop-types");


let arrA = new Array(100);
let arrB  = Array.from({length: 5}, (_, i) =>  i + 1);

 arrA = Array(100).fill(1);


 const name = {firstName: 'John',lastName: 'Smith'};
 const arr = Object.entries(name);
 const obj2 = Object.fromEntries(arr);

 console.log(Array.isArray(arrB));

 let arrCopyA = arrA.slice();
 arrCopyA.shift();

 console.log(arrCopyA);


 let arrCopyB = arrA;
 arrCopyB [1] = 2;

 console.log(arrA);