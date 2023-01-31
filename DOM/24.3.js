// 1. Build your own filter method with the help of prototypes
// 2. Build your own find method with the help of prototypes
// Extra
// 3. Build your own reduce method with the help of prototypes

function reduce(arr, func) {
    this.arr = arr;
    this.func = func;


};
reduce.prototype.f = function () {

    let acc = 0;
    for (let i = 0; i < this.arr.length; i++) {
        acc += this.func(this.arr[i], i, this.arr);
    }
    return acc;
}

const reduceFunc = (num, i, arr) => {
    return arr[i];
}
//test
const testReduce = new reduce([1, 12, 3], reduceFunc);
testReduce.f();
console.log(testReduce.f());
//--------------------------------
function find(arr, func) {
    this.arr = arr;
    this.func = func;


};
find.prototype.g = function () {

    for (let i = 0; i < this.arr.length; i++) {
        if (this.func(this.arr[i], i, this.arr)) {
            return this.arr[i];
        }
    }
}

const findFunc = (num, i, arr) => {
    return arr[i] > 10;
}
//test
const testFind = new find([1, 12, 3], findFunc);
testFind.g();
console.log(testFind.g());

//----------------------------------
function filter(arr, func) {
    this.arr = arr;
    this.func = func;


};
filter.prototype.h = function () {

    let retArr = [];
    for (let i = 0; i < this.arr.length; i++) {
        if (this.func(this.arr[i], i, this.arr)) {
            retArr.push(this.arr[i]);
        }
    }
    return retArr;
}

const filterFunc = (num, i, arr) => {
    return arr[i] > 10;
}
//test
const testFilter = new filter([1, 12, 3, 8, 15], filterFunc);
testFilter.h();
console.log(testFilter.h());
