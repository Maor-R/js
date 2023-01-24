// # Note: We ask you not to solve the bug by finding it with
// your eyes but to use the debugging tools we've learned!

// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
// const sum = 0;
// getSum([1, 2, 3][(5, 66, 23)]);


// 2. Which debug method did you use to find the bug?
// Debugging tools of Visual Studio Code

// 3. Explain the bug in your own words.
//The variable sum need to be let and not const if we want to change it
//The row getSum([1, 2, 3] [(5, 66, 23)]) is not correct because 
//we need to put comma between the two arrays

// 4. Fix the code and submit it all

function getSum(arr1, arr2) {
  let  sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
}
getSum([1, 2, 3],[(5, 66, 23)]);
