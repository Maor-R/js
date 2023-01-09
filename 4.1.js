// 1. Declare a variable 'numSiblings' based on a prompt input
// like this:
// prompt('How many siblings do you have?');
// 2. If you have one sibling, log to the console '1 sibling!' (use
// loose equality == for now)
// 3. Use an else-if block to log 'More than 1 sibling' in case
// 'numSiblings' is greater than 1
// 4. Use an else block to log 'No siblings' (this block will be
// executed when 'numSiblings' is 0 or any other value)
// 5. Test the code with different values of 'numSiblings',
// including 1 and 0.
// 6. Change == to ===, and test the code again, with the same
// values of 'numSiblings'. Notice what happens when there
// is exactly 1 sibling! Why is this happening?
// 7. Finally, convert 'numSibling' to a number, and watch what
// happens now when you input 1.
// 8. Reflect on why we should use the === operator and type
// conversion in this situation.


//q1
numSiblings = prompt('How many siblings do you have?');

if (numSiblings == 1)
{
    console.log("1 sibling!")
}
else if (numSiblings >1)
{
    console.log(`${numSiblings} sibling`)
}
else  //if numSiblings < 1
{
    console.log("No siblings");
}

//q2

numSiblings = prompt('How many siblings do you have?');

if (numSiblings === 1)
{
    console.log("1 sibling!")
}
else if (numSiblings >1)
{
    console.log(`${numSiblings} sibling`)
}
else  //if numSiblings < 1
{
    console.log("No siblings");
}

//There is 2 types of siblings, the first type is string (numSiblings) and
//the second  type is number (1) and the operator === check if the value and the
//type is same 


//q3

numSiblings = prompt('How many siblings do you have?');

if (parseInt(numSiblings)  === 1)
{
    console.log("1 sibling!")
}
else if (numSiblings >1)
{
    console.log(`${numSiblings} sibling`)
}
else  //if numSiblings < 1
{
    console.log("No siblings");
}


