// Create a function that received an array of integers as a
// parameter.
// Return a new array without any duplicates inside. You
// indexOf as part of your solution.
// Example:
// [3,4,4,3,6,3] --→ [3,4,6]

const removeDuplicatesElement = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          arr.splice(j, 1 );
        }
      }
    }
  }

  return arr;
};

//test
const arr = [3,4,4,3,6,3];
const res = removeDuplicatesElement(arr);
console.log(res);