// Create a webpage that has an image of a lightbulb.
// When the user clicks the lightbulb, it should be turned
// on, clicking it again will turn it off.

const img = document.getElementById('img');


img.addEventListener('click', function (event) {

    let imgSrc = img.getAttribute("src");

    if (imgSrc == './img/bulb-on.jpg') {
        img.setAttribute('src', './img/bulb-off.jpg');
    } else {
        img.setAttribute('src', './img/bulb-on.jpg');

    }


});

