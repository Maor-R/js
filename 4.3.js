const calcAvg = (a, b, c) => (a + b + c) / 3;

//test
let johnTeam, mikeTeam;

console.log(
  `The average score of John's team is:${(johnTeam = calcAvg(89, 120, 103))}`
);
console.log(
  `The average score of Mike's team is:${(mikeTeam = calcAvg(116, 94, 123))}`
);

console.log(
  `The team win is: ${
    johnTeam > mikeTeam
      ? " John's team with " + johnTeam + " points is average"
      : "Mike's team  with " + mikeTeam + " points is average"
  }`
);

//part b
// Returns a random integer from 0 to 9:
console.log(
  `The average score of John's team is:${(johnTeam = calcAvg(Math.floor(Math.random() * 130), Math.floor(Math.random() * 130), Math.floor(Math.random() * 130)))}`
);
console.log(
  `The average score of Mike's team is:${(mikeTeam = calcAvg(Math.floor(Math.random() * 130), Math.floor(Math.random() * 130), Math.floor(Math.random() * 130)))}`
);

if (johnTeam > mikeTeam) {
  console.log("The John's team is win with " + johnTeam + " points is average");
} else if (johnTeam < mikeTeam) {
  console.log("The Mike's team is win with " + mikeTeam + " points is average");
} //draw case
else {
  let draw = mikeTeam;
  console.log(
    `There is equality in the average points (${draw}) between the teams`
  );
}

//part c

let maryTeam;

console.log(
  `The average score of Mary's team is:${(maryTeam = calcAvg(97, 134, 105))}`
);

if (johnTeam > mikeTeam && johnTeam > maryTeam) {
  console.log("The John's team is win with " + johnTeam + " points is average");
} else if (johnTeam < mikeTeam && mikeTeam > maryTeam) {
  console.log("The Mike's team is win with " + mikeTeam + " points is average");
} else if (maryTeam > mikeTeam && maryTeam > johnTeam) {
  console.log("The Mary's team is win with " + maryTeam + " points is average");
} else if ((maryTeam == mikeTeam) == johnTeam) {
  let draw = mikeTeam;
  console.log(
    `There is equality in the average points (${draw}) between the teams`
  );
}
