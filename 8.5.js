// Create a function that receives 1 argument, an object, and
// returns a new object with the properties and values
// swapped.


swapObject =(obj)=>{
    const newObj = {};

  Object.entries(obj).forEach(([key, value]) => {
    newObj[value] = key;
  });

  return newObj;
}

const book = {
    name: "The duty of the hearts",
    author: "Baḥya ben Joseph ibn Paḳuda",
    year: "1190",
  };

//test
console.log(swapObject (book))