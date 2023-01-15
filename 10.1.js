// . Write a function called ‘isString’ that receives 2 arguments,
// a string and a callback function. The function checks that
// the string is indeed a string. If the string is a string, pass
// the string to a callback function that logs that string to the
// console.
// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.
// 3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice.
// 4. Create your own function that will receive from one of its
// arguments a callback function


const isString =(str, func)=>
{
    return func(str);

}

const firstWordUpperCase = (str, func) =>
{
    str = str.split(' ');
    str[0] = str[0].toUpperCase();
    return func(str);
}
const isStr =(str)=>{
    return typeof(str) == 'string'? true: false;
}

const addDashesToStr =(str) =>
{
    let retStr = "";
    for(let i = 0 ;i < str.length ; i++)
    {
        i < str.length -1  ? retStr += str[i] + '-':retStr += str[i];
    }
    return retStr;
}


//test
const str = "test string";
console.log(isString(str, isStr))

console.log(firstWordUpperCase("hi my name is maor", addDashesToStr));