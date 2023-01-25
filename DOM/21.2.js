// Create a webpage that has some text and two buttons with ‘+’
// and ‘-‘ Clicking the ‘+’ button should increase the text’s font-size
// and clicking the ‘-‘ should decrease it.
// Limit the font size to be between 6px and 100px



let fontSize = 16;
const maxFont = 50;
const minFont = 6;
const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function (event) {
    const p1 = document.getElementById('p1');
    if (fontSize < 100) {
        fontSize += 2;
    }
    p1.style.cssText = `font-size :${fontSize}px`;

});


btn2.addEventListener('click', function (event) {
    const p1 = document.getElementById('p1');
    if (fontSize > 6) {
        fontSize -= 2;
    }
    p1.style.cssText = `font-size :${fontSize}px`;

});