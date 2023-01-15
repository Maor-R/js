// Write a function that has one argument, a positive integer.
// Let's call it N.
// The function should console log a step shape.
// With N levels using the # character. Make sure the step has
// spaces on the right-hand side if empty!

const steps =(n)=>
{
    let printStr = "'";
    for(let i=1; i<=n ; i++)
    {
        for(let j = 0 ; j <n ; j++ )
        {
            j<i? printStr+='#' :  printStr+=' ';

        }
        printStr+="'";
        console.log(printStr);
        printStr = "'";
    }
}

//test
steps(10)