// Create a webpage with one field and one button.
// The user can choose the number of smileys, and you have
// to make them appear on the screen. If the user enters an input
// that is not a number show him an error message.

const divContainer = document.getElementById('container');
let divImg = document.getElementById('divImg');
const input = document.getElementById('input');
// const divImg = document.getElementById('divImg');


btn.addEventListener('click', function (event) {

    let  num = Number(input.value);
    if (num > 0 && num < 10) {
        divContainer.removeChild(divImg);
         divImg = document.createElement('div');
        divImg.id = 'divImg';
        divContainer.appendChild(divImg);

        while(num-->0)
        {
            let newImg = document.createElement('img');
            newImg.setAttribute('src', './img/Smiley.svg.png');
            divImg.appendChild(newImg);
        }
    }
    // let imgSrc = img.getAttribute("src");

    // if (imgSrc == './img/bulb-on.jpg') {
    //     img.setAttribute('src', './img/bulb-off.jpg');
    // } else {
    //     img.setAttribute('src', './img/bulb-on.jpg');

    // }


});

