
// With the use of two for loops, console log all the countries
// one by one and in your terminal. You should see something
// like this in your terminal:
// Neighbour: Canada
// Neighbour: Mexico
// Neighbour: Spain
// Neighbour: Norway
// Neighbour: Sweden
// Neighbour: Russia

const listOfNeighbours = [
["Canada", "Mexico"],
["Spain"],
["Norway", "Sweden", "Russia"],
]

for ( let x of  listOfNeighbours)
{
    for(let j = 0 ;j < x.length ; j++)
    {
            console.log("Neighbour:",x[j])

    }
}