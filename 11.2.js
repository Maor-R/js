// Answer the questions below and use the map or the
// forEach method :
// 1. Write a function called doubleValues which accepts an
// array of integers and returns a new array with all the
// values in the array passed to the function doubled.

const doubleValues =(arr)=>{
    let retArr = arr.map (x => {return 2*x;});
    return retArr;
}
let arr = [1, 4, 8, 9];
console.log('q1: ',doubleValues(arr));


// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.

const onlyEvenValues = (arr)=>{

    let retArr = arr.filter (x => { if (x%2===0)return x});
    return retArr;
}

console.log('q2: ',onlyEvenValues(arr));



// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements
// that are strings.

const showFirstAndLast =(arr)=>{

    let retArr = arr.filter((x, i )=> { if(i==0 || i== arr.length-1) return x})
    return retArr;
}

const arrString = ['hello', 'my', 'name', 'is', 'maor'];
console.log('q3: ',showFirstAndLast(arrString));

// 4. Write a function called vowelCount which accepts a string
// as an argument. The function should return an object
// which has the count of the number of vowels that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}. Should not be
// case-sensitive.

const vowelCount = (str)=> {
    let retObj ={};
    str.toLowerCase().split(" ").join("").split("").forEach(e => {
         retObj[e] == undefined? retObj[e] = 1:retObj[e]++; 

    });
    return retObj;

}

const str = "hello my name is maor";
console.log('q4:', vowelCount(str))
// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.

const capitalize =(str)=> {
  const retStr = str
    .split("")
    .map((x) => {
      return x.toUpperCase();
    }).join('');
    
  return retStr;
}


  

console.log('q5: ',capitalize(str));

// 6. Write a function called shiftLetters that takes a string as an
// argument and return’s an encoded string with each letter
// shifted down the alphabet by one.

const shiftLetters = (str) => {

    let retStr = str.split('').map(x => {return String.fromCharCode((x.charCodeAt()) - 1)}).join('');
    return retStr
}

console.log('q6:',shiftLetters(str));
// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)

const swapCase =(str)=> {

    let retStr;
    retStr = str.split(' ').map ((x, i) => {return i%2==0? capitalize(x):x;})
    return retStr;
}


console.log('q7: ',swapCase(str));