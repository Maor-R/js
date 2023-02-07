// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words
// and capitalize them, and then the second function, sortWords(),
// will sort the words in alphabetical order. If the array contains
// anything but strings, it should throw an error.
// Call the functions once with an array of words and call it once
// with an array that includes at least one item that is not a word.
// Print the resolve and reject in a .then, .catch


const makeAllCaps = (arr)=> {
    return new Promise((resolve, reject)=>
    {
        
        let stopLoop = false;
        for (let i = 0; i < arr.length && !stopLoop; i++) {
          if (typeof arr[i] !== "string") {
            stopLoop = true;
          }
        }
        stopLoop? reject("Error"):resolve(arr.map(e => {return e.toUpperCase()}));
        

    })
}

const sortWords = (arr)=> {
    return new Promise((resolve, reject)=>
    {

        let stopLoop = false;
        for (let i = 0; i < arr.length && !stopLoop; i++) {
          if (typeof arr[i] !== "string") { console.log(arr[i])
            stopLoop = true;
          }
        }         
        stopLoop? reject("Error"):resolve(arr.sort((a,b)=> a>b? 1:a<b? -1:0));

    })
}
//success case
arr = ["a", "ca", "bf","fb"];

makeAllCaps(arr).then
((res)=> sortWords(res)).then((res)=> console.log(res))
.catch((res=> console.log(res)));

//failure case
arr = ["a", 1, "bf","fb"];

makeAllCaps(arr).then
((res)=> sortWords(res)).then((res)=> console.log(res))
.catch((res=> console.log(res)));


