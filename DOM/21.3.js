// Create a webpage that has part of the application
// process for a job. This page should have a text area
// field and a button. Your user must enter at least 100
// characters before clicking the button. If he didn’t, please
// give him the appropriate message. (using alert is
// forbidden)

const btn = document.getElementById('btn');
const text = document.getElementById('text');
const p = document.getElementById('alert');

btn.addEventListener('click', function (event) {
    
    if (text.value.length < 100) {
        p.textContent = "You must enter at least 100 characters";
    }
    else {
        p.innerHTML = "The information has been sent <br> Thank you!";
    }
});

