// Answer the following questions:
// a. Array of words

const foods = ["falafel", "sabich", "hummus",
"pizza with extra pineapple"];

// a.1. Sort the array of strings from descending to ascending
// order.

const sortFoodsDes =(arr)=>{
    return arr.sort((a,b)=>a < b ? 1 : a > b ? -1 : 0)
}

console.log("q-a: Sorting Des(up to down): ",sortFoodsDes(foods));
// a.2. Sort the array of strings from ascending to descending
// order.

const sortFoodsAsc =(arr)=>{
    return arr.slice().sort((a,b)=>  a < b ? -1 : a > b ? 1 : 0)
}

console.log("q-b: Sorting Asc(down to up): ",sortFoodsAsc(foods));
// b. Let's sort an array of words that includes a word with an
// uppercase:
const foodsWithUpperCase = [
"falafel",
"Sabich",
"hummus",
"pizza with extra pineapple",
];
// b.1. Sort the array of strings from descending to ascending
// order.
const sortFoodsUpperDes =(arr)=>{
    return arr.sort((a,b)=>a.toLowerCase() < b.toLowerCase() ? 1 : a.toLowerCase()> b.toLowerCase() ? -1 : 0)
}

console.log("q-b: Sorting Des(up to down): ",sortFoodsUpperDes(foodsWithUpperCase));

// b.2. Sort the array of strings from ascending to descending
// order.

const sortFoodsUpperAsc =(arr)=>{
    return arr.sort((a,b)=>a.toLowerCase() < b.toLowerCase() ? -1 : a.toLowerCase()> b.toLowerCase() ? 1 : 0)
}

console.log("q-b: Sorting Asc(down to up): ",sortFoodsUpperAsc(foodsWithUpperCase));


// c. Longest word
const words = ["apple",
"supercalifragilisticexpialidocious",
"hi", "zoo"];
// c.1. Sort the array of strings from the longest word to the
// shortest word only using the sort function

const sortWord =(arr)=>{
    return arr.sort((a,b)=>a.length < b.length ? 1 : a.length > b.length ? -1 : 0)
}

console.log("q-c: ",sortWord(words));
