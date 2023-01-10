// Create a function that receives one argument, a string color.
// Create a switch statement that:
// 1. If the color is yellow, pink, or orange return from the
// function “light color”.
// 2. If the color is a blue, purple, or brown return from the
// function “dark color”.
// 3. If the color is none of the above return “Unknown color”.
// Note:
// It shouldn’t be case sensitive

const checkColor = (color) => {
  switch (color) {
    case "yellow": case "pink": case "orange":
      console.log("light color");
      break;
    case "blue": case "purple": case "brown":
      console.log("dark color");
      break;
    default:
      console.log("Unknown color");
      break;
  }
};

//test
checkColor('blue');
checkColor('Blue');
checkColor('pink');
checkColor('black');
checkColor('color123');


