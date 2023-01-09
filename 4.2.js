// Create a function that takes 1 argument, a number score.
// Returns either “A”, ”B”, “C”, “D”, “F”.
// score of:
// 0-64 is a “F”
// 65-69 is a “D”
// 70-79 is a “C”
// 80-89 is a “B”
// 90-100 is an “A

function calScore(score) {
  if (score >= 0 && score <= 64) {
    return "F";
  } else if (score >= 65 && score < 69) {
    return "D";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 90 && score <= 100) {
    return "A";
  } else {
    return -1;
  }
}

//test
console.log(calScore(-1));
console.log(calScore(0));
console.log(calScore(1));
console.log(calScore(50));
console.log(calScore(65));
console.log(calScore(75));
console.log(calScore(85));
console.log(calScore(90));
console.log(calScore(100));
console.log(calScore(101));
