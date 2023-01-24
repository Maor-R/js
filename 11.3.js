const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

// We are not getting the data as we want it. We are going to need
// to massage the data.
// Create separate functions for each question below:
// 1. Create a function that returns all the names from the array.
// 2. Create a function that returns all the objects that are born
// before 1990.
// 3. Create a function that returns an object of all the different
// foods from all the objects as the key and the number of
// times that food is present in all the objects as the value.




const getName =(data)=> {
    let retArr = [];
    data.forEach(x =>{ retArr.push(x.name)});
    return retArr;
}

console.log(getName(data));


const getObjDate =(data)=> {
    let retArr = [];
    data.forEach(x =>{ if(x.birthday.split('-')[2]<1990) return retArr.push(x)});
    return retArr;
}

console.log(getObjDate(data));


//getAmountOfFood
const  getAmountOfFood =(data)=> {
    let retObj = {};

    data.forEach(e => {
        arrNames = e.favoriteFoods.meats.concat(e.favoriteFoods.fish);
        arrNames.forEach(x => {retObj[x] == undefined? retObj[x] = 1:retObj[x]++;})   
   });
       return retObj;
}

console.log(getAmountOfFood(data));