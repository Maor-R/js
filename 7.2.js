// you have this string:
// const string = "The more you know, the more you
// know that you don't know";
// We want to get the index of the last occurrence of the word
// “you”. It should give you 42.
// You can solve this problem without the method indexOf. But
// if you can manage to do it also with indexOf you will get a
// cookie

const string = "The more you know, the more you know that you don'\t know";

let searchStr = "you".split("").reverse().join("");
let cnt;
let subLoop;
let mainLoop = true;

for (let i = string.length - 1; i >= 0 && mainLoop; i--) {
  cnt = 0;
  subLoop = true;
  for (let j = 0; j < searchStr.length && subLoop; j++) {
    if (string[i] == searchStr[j]) {
      i--;
      cnt++;
    } else {
      subLoop = false;
    }
  }
  if (cnt == searchStr.length) {
    console.log(i + 1);
    mainLoop = false;
  }
}
