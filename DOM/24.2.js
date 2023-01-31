// You are given a function, Pokeman, that takes three
// parameters, pokemonName, pokemonType, an array of
// different pokemon attack methods, pokemonAttackList.
// 1. Create three instances of the Pokemon and save them in
// a variable.

// 2. Using prototype properties, add the following methods:
// ● A method called callPokemon will print the following:
// “I choose you, <pokemon name>

// ● • A method called attack that takes one parameter,
// an attack number, that will print the specific attack
// method from the pokemonAttackList array as the
// following: “<pokemon name> used <attack method>”
// Call each pokemon with the 2 methods you created.



function Pokemon(pokemonName, pokemonType,
    pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
    }


    Pokemon.prototype.callPokemon = function(){
        return `I choose you, ${this.name}`;
    }

    Pokemon.prototype.attack = function(i){
        return `${this.name} used ${this,this.attackList[i]}`;
    }

 
    const p1 = new Pokemon("p1", "type1", ["a1p1", "a2p1" ]);
    console.log(p1.callPokemon());;
    console.log(p1.attack(1));

    const p2 = new Pokemon("p2", "type2", ["a1p2", "a2p2" ]);
    console.log(p2.callPokemon());;
    console.log(p2.attack(0));;

    const p3 = new Pokemon("p3", "type3", ["a1p3", "a2p3" ]);
    console.log(p3.callPokemon());;
    console.log(p3.attack(0));