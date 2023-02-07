// 1. Build your own filter method with the help of prototypes
// 2. Build your own find method with the help of prototypes
// Extra
// 3. Build your own reduce method with the help of prototypes


Array.prototype.Reduce = function (func) {

    let acc = 0;
    for (let i = 0; i < this.length; i++) {
        acc += func(this[i], i, this);
    }
    return acc;
}


//test
const arrReduce = [1, 12, 3];
const testReduce = arrReduce.Reduce(e => e);
console.log(testReduce);
//--------------------------------

Array.prototype.Find = function (func) {

    for (let i = 0; i < this.length; i++) {
        if (func(this[i], i, this)) {
            return this[i];
        }
    }
}


//test
const arrFind = [1, 12, 3, 8];
const testFind = arrFind.Find ((e) => e > 10);
console.log(testFind);

//----------------------------------

Array.prototype.Filter= function (func) {

    let retArr = [];
    for (let i = 0; i < this.length; i++) {
        if (func(this[i], i, this)) {
            retArr.push(this[i]);
        }
    }
    return retArr;
}


//test
const arrFilter = [1, 12, 3, 8];
const testFilter = arrFilter.Filter (e => e > 5);
console.log(testFilter);


