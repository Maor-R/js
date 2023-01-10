// 1. Create an array containing 4 population values of 4
// countries of your choice. Store this array into a variable
// called 'populations'
// 2. Create a function called ‘populationPercentages’ that
// takes the population array as an argument.
// 3. Inside the function, create an empty array called
// ‘percentages’.
// 4. Use a for loop to iterate over the population array you
// received as an argument..
// 5. On each iteration use the function we created earlier
// (module 3, ex.3.3-declarations vs expressions) for each
// element of the array.
// 6. Push the result to the ‘percentages’ array.
// 7. Return from the function the ‘percentages’ array.

const populationPercentages =(arr) =>{

    let percentages = [];

    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
        percentages.push(percentageOfWorld(arr[i]));
    }

    return percentages;
};

function percentageOfWorld(population) { return population/(7990*1000000)*100 };


const populations = [9300000, 67000000, 1400000000, 24000000 ];

//test
let res = populationPercentages(populations)

console.log(res);