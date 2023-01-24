const numbers = [1, -5, 666, 2, 400, 11];

// 1. Sort the array of numbers from descending to ascending
// order.
// 2. Sort the array of numbers from ascending to descending
// order.

const sortArrAsc =(arr)=>{
    return arr.slice().sort((a,b)=>a-b)
}

const sortArrDes =(arr)=>{
    return arr.sort((a,b)=>b-a)
}

console.log(sortArrAsc(numbers));
console.log(sortArrDes(numbers));