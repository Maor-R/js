// # Note: We ask you not to solve the bug by finding it with
// your eyes but to use the debugging tools we've learned!

// What is wrong with this code?

// 1. First find the line that contains the problem. Write it down.
//var sum ;
// 2. Which debug method did you use to find the bug?
//debugging tools of VSC

// 3. Explain the bug in your own words.
//First we need to initialize the variable before we change it and
//addition is not good idea to use in var type

// 4. Fix the code and submit it all.

function calcAverage (arr){
let  sum = 0 ;
for ( var i = 0 ; i < arr .length; i ++ ){
sum += arr [ i ];
} return sum ;
}
calcAverage ([ 85 , 90 , 92 ]);