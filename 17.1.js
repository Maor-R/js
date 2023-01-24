//Block 1
//The result will be:

var b = 1;

function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);

//Block 2
//The result will be:
//1
//JS create local variable a for a() function so the the store of
// 10 inside a this is local
//

var a = 1;
function b2() {
  a = 10;
  return;
}

b2();
console.log(a);

//Block 3
//The result will be:
//3
//3
//3
//The function SetTimeout JS keeps 3 calls on the stack
//but now (after 100 ms, the value of i is 3, so we get 3 times 3)

let i;
for (i = 0; i < 3; i++) {
    const log = (i) => {
    console.log(i);
    }
    setTimeout(log, 100, i);
}//for