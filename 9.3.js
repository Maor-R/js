// Create a function that takes these two arrays as
// arguments.
// Compare these two arrays using 2 for loops and return the
// items that are the same. If none are the same return false.

const isEqual = (arr1, arr2) => {
  let res = {};

  for (let i = 0; i < arr1.length; i++) {

    let isEqual = false;
    for (let j = 0; j < arr2.length && !isEqual; j++) {
      if (arr1[i] == arr2[j]) {
        res[arr1[i]] = 1;
        isEqual = true;
      }
    }
  }

  if(res.length == arr1.length == arr2.length){
    return true;
  }
  else{
    return false;
  }

};

const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

console.log(isEqual(food, food1));
