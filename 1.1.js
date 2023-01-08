const { object } = require("prop-types");

let str = 'hello';
let num = 1;
let obj = new object;
let flag = true;
let nul = null;
let un = undefined;
const sym = Symbol("sym");

console.log(typeof(str));
console.log(typeof(num));
console.log(typeof(obj));
console.log(typeof(flag));
console.log(typeof(nul));
console.log(typeof(un));
console.log(typeof(sym));