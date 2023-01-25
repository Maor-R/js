    // Create a webpage that has an input field for the user’s age and
    // a button.
    // If the user enters a number above 18, make the text
    // “you can drink appear”. If the user enters a number below 18,
    // make the text “you’re too young” appear.

    const btn = document.getElementById('btn');
    btn.addEventListener('click', function (event) {
        const age = document.getElementById('age');
        const ageNum = Number(age.value)
        if(ageNum>18)
        {
            alert("you can drink appear");
            
        }
        else if(ageNum>0 && ageNum<18)
        {
            alert("you’re too young");

        }        
    });