
// For each of the questions below, answer the questions with this
// array:
// const people = ["Greg", "Mary", "Devon", "James"];
// 1. Using a loop, iterate through this array and console.log all
// of the people.
// 2. Write the command to remove "Greg" from the array.
// 3. Write the command to remove "James" from the array.
// 4. Write the command to add "Matt" to the front of the array.
// 5. Write the command to add your name to the end of the
// array.

// 6. Using a loop, iterate through this array, and after
// console.log "Mary", exit from the loop.
// 7. Write the command to make a copy of the array using a
// slice. The copy should NOT include "Mary" or "Matt".
// 8. Write the command that gives the indexOf where "Mary"
// is located.
// 9. Write the command that gives the indexOf where "Foo" is
// located (this should return -1).
// 10. Redefine the people variable with the value you started
// with. Using the splice command, remove "Devon" from
// the array and add "Elizabeth"
// and "Artie". Your array should look like this when you are
// done ["Greg", "Mary", "Elizabeth", "Artie",
// "James"].
// 11. Create a new variable called withBob and set it equal
// to the people array concatenated with the string of "Bob".

const people = ["Greg", "Mary", "Devon", "James"];

const   peopleArray = () => {
    for (let i = 0; i < people.length; i++) {
        console.log(people[i]);
    }

    people.splice(people.indexOf("Greg"),1)
    people.splice(people.indexOf("James"),1)
    people.unshift("Matt");
    people.push("Maor");

    let loop = true;
    for (let i = 0 ; i<people.length && loop ;i++)
    {
        console.log(people[i]);

        if(people[i] == "Mary")
        {
            loop = false;
        }

    }

    let copyPeople = people.slice(0, people.length);
    copyPeople.splice(people.indexOf("Mary"),1);
    copyPeople.splice(people.indexOf("Matt"),1);

    let indexOfMary = people.indexOf("Mary");
    let indexOfFoo = people.indexOf("Foo");
    // console.log(indexOfFoo);

    const copyArrPeople = ["Greg", "Mary", "Devon", "James"];
    copyArrPeople.splice(copyArrPeople.indexOf("Devon"),1);
    copyArrPeople.splice(2, 0, "Elizabeth", "Artie");
    let withBob = copyArrPeople.slice(0, people.length);
    withBob.push("Bob");

    // console.log(withBob);
}


//test
peopleArray();