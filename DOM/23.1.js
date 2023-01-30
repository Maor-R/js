let c=2;
function test(){}
// Question 1:
// In your own words what will this point to and why ?
//     (Note this is the global scope)
//The output: {}
//because this is global 'this'
console.log(this);

// Question 2:
// a.In your own words what will this point to and why ? -->undefined :this is global 'this' 
//because this is  arrow function
//     b.How can you fix this code ? --> greet() {
const myObj = {
    name: "Timmy",
    greet(){
        console.log(`Hello ${this.name}`);
    },
};
myObj.greet();


// Question 3:
// In your own words what will this point to and why ? global. because in the
//function 'this' is global
const myFuncDec = function () {
    console.log(this);
};
myFuncDec()

// Question 4:
// In your own words what will this point to and why ? {} :because in the
//arrow function 'this' is equal to outer context
const myFuncArrow = () => {
    console.log(this);
};
myFuncArrow();
// Question 5:
// a.In your own words, what will this point to and why ? this is global 'this'
    // b.How can you fix this code ? remove arrow function
        document.querySelector(".element").addEventListener(function(){
            console.log(this);
        });