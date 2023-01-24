//Block 1
// The result will be:
//undefined
//2
//because the variable a not decelerate before call to CLG with a
function funcA() {
  var a = 1;

  console.log(a); //
  console.log(foo()); //
  function foo() {
    return 2;
  }
}
funcA();

//Block 2
//The result will be:
//Aurelio De Rosa
//undefined
//because the function getFullName() return the variable with 'this'
//so the intention is to inner variable of this object
//but the second call is not correct the brackets are missing
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName();
console.log(test);

//Block 3
////The result will be:
//undefined
//number
//because the variable b is global but the variable a is local (of funcB only)
function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
const retVal = funcB();
console.log(typeof retVal);
console.log(typeof b);

//Block 4
////The result will be:
//2
//2
// Whichever function is defined last takes precedence.
function funcC() {
  console.log("1");
}
funcC();
function funcB() {
  console.log("2");
}
funcB();

//Block 5
//The result will be:
//1
//e is not defined
//d is global variable and the e variable recognized only in the function body
function funcD1() {
  d = 1;
}

funcD1();
console.log(d);

function funcD2() {
  e = 1;
}

funcD2();
console.log(e);

//Block 6
//The result will be:
//Value of f in global scope:  undefined
//Value of f in local scope:  1
//In the CLG call f is not declaration before and in the funcE() call
//the variable f recognized in all code
function funcE() {
  console.log("Value of f in local scope: ", f);
}
var f = 1;

console.log("Value of f in global scope: ", f);
funcE();
