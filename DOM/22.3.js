// Let's create a small game that the user needs to guess a
// random letter. Do not spend too much time styling the page.
// Here is a small demo of what you need to accomplish.
// Instructions:
// Generate a random letter and create the following logic
// depending if the user guessed the right letter or not:
// The user guessed it right
// ● Display a message that the user was right.
// ● The message should be in the color green.
// ● Show the right letter to the user.
// ● Display a message if he wants to play again with a confirm
// button.
// ● If the user wants to play again reset the DOM as it was in
// the beginning.
// User guessed wrong
// ● Display a message that the user got wrong.
// ● The message should be in the color red.
// ● Display all the letters the user has guessed
// ● Users cannot type the same letter twice. If the user did so,
// display a message that he already guessed the letter.
// Constraints
// ● A user can only guess a valid alphabetical letter. If the
// user types a non-alphabetical letter, display a message
// that this is not allowed.
// ● When the game is finished, a user cannot guess a letter
// until he presses the confirm button to start a new game.
// ● show guesses
// ● If the letter already guessed message to them
// ● If a letter is not the guess then display a message wrong
// guess
// ● If a letter is you are correct message and display the right
// key then show an option to start the game again.
// ● When asking for a new game, the user is not able to enter
// any more keys until he confirms.

const inputGuess = document.getElementById("inputGuess");

const letter = document.getElementById("letter");
const guessKeyText = document.getElementById("guessKeyText");

const playAgain = document.getElementById("playAgain");
const yesBtn = document.getElementById("yesBtn");

const characters = "abcdefghijklmnopqrstuvwxyz";
let guessChar;
let gameOver = false;
const generateRandomChar = () => {
    const rand = Math.floor(Math.random() * 22) + 1;
    return characters[rand];
};

const newGame = () => {
    guessChar = generateRandomChar();


    letter.innerText = '?';
    guessKeyText.innerText = "Guess a key";
    playAgain.style.display = "none";
    yesBtn.style.display = "none";
    inputGuess.value = '';
    guessKeyText.style.color = "black";
    //   alert(guessChar);


};
inputGuess.addEventListener("input", function (event) {
    if (inputGuess.value[inputGuess.value.length - 1] == guessChar) {
        letter.innerText = guessChar;
        guessKeyText.innerText = "Right letter!";
        guessKeyText.style.color = "green";
        playAgain.style.display = "inline";
        yesBtn.style.display = "inline";
        gameOver = true;
    } else if(!gameOver) {
        guessKeyText.innerText = "Nope, wrong letter";
        guessKeyText.style.color = "red";
    }
    inputGuess.value += ",";
});

yesBtn.addEventListener("click", function (event) {
    newGame();
});



const initGame = () => {
    guessChar = generateRandomChar();
    //   alert(guessChar);
};
initGame();
