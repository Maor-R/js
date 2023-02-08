const wonderWoman = {
  name: "Diana Prince",
};
const batman = {
  name: "Bruce Wayne",
};
const superHeroes = [wonderWoman, batman];

function printName() {
  console.log(`my name is ${this.name}`);
}

// We want to print the all heroes names. Implement the
// printHeroes function:
// Note: you cannot change the super heroes objects
function printHeroes(heroes, printFunc) {
  for (h of heroes) {
    printFunc.call(h);
  }

  //solution 2:
  // for (h of heroes) {
  //   let retFunc = printFunc.bind(h);
  //   retFunc();
  // }
}

printHeroes(superHeroes, printName);
