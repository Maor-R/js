// Write the following functions using the reduce built-in function.
// 1. max
// 2. the sum of even numbers
// 3. average  --- reduce use

const max = (arr)=>{

    let max;
    max = arr.reduce((sum, curr) => sum + curr, 0);
    return max;
}


arr = [1, 5, 10, 11, 6, 20, 1];
console.log(max(arr));

const sumEven = (arr)=>{

    let max;
    max = arr.reduce((a, b) => { if(b%2 == 0) a+=b; return a;}, 0);
    return max;
}

console.log(sumEven(arr));


const calcAvg = (arr)=>{

    let max;
    let sum = 0;
    max = arr.reduce((a, b) => {  sum+=b;  return sum/arr.length}, 0);
    return max;
}

console.log(calcAvg(arr));

