// 1. What is wrong with the code? explain in your own words
// 2. Fix the code so that invoking the whoIsStronger function
// will print "I am stronger".
// note: you cannot change the 'hero' or the whoIsStronger
// function.

const hero = {
  health: 5,
  power: 68,
  getStrength() {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};


function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}
const ret = whoIsStronger(hero.getStrength.bind(hero));

// function test(){
//     console.log([].slice.call(arguments))

// }
// let a = [1,2]
// console.log(a.slice())

let mammal = function(legs){
    this.legs = legs;

}

let cat = function(legs, dim){
    console.log(this)
    mammal.call( legs);
    this.dim=dim;
}

let lion = new cat(4, false)
console.log(lion)