// . Create an object called ‘mycountry’ for a country of your
// choice, containing properties ‘country’, ‘capital’,
// ‘language’, ‘population’ and ‘neighbours’ (an array)

// 2. Add a method to the object called 'describe' to the
// 'myCountry' object. With the help of the ‘this’ keyword, this
// method will log a string like this to the console: ‘Finland
// has 6 million people, their mother tongue is Finnish, they
// have 3 neighbouring countries and a capital called
// Helsinki’.
// 3. Call the ‘descrbie method’.
// 4. Add a method called 'checkIsland' to the 'myCountry'
// object. This method will set a new property on the object,
// called 'isIsland'. 'isIsland' will be true if there are no
// neighbouring countries, and false if there are. Use the
// ternary operator to set the property



// const checkIsland = () = >
// {

// };
const myCountry = {
    country:'Israel', capital:'Jerusalem',
language:'Hebrew', population:'9.3', neighbors:['Jordan', 'Egypt','Lebanon'],

 describe (country) {
    return `${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbors.length} neighboring countries and a capital called ${this.capital}`
    },

    checkIsland()
    {
        isIsland = this.neighbors.length == 0? true:false;
        return isIsland;
    },
}

let res = Object.create(myCountry);
console.log(res.describe());
console.log(res.checkIsland());
