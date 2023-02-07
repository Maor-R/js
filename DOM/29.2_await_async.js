// Let's do a simple ajax call with fetch using this URL
// “https://api.jokes.one/jod”.
// Create a button that will fetch the joke of the day.
// Display to the screen the joke title and the joke itself.

const btn = document.getElementById("btn");
const pTag = document.getElementsByTagName("p");
const title = document.getElementsByTagName("h2");

const url = "https://api.jokes.one/jod";
// const url = "./joke.xml";


async function fetchJokeOfDay(){

    await fetch(url).then(res=>res.json()).then((data)=> {
        pTag[0].innerText = data.contents.jokes[0].joke.text;
        title[0].innerText = data.contents.jokes[0].joke.title;
    }).catch(err=> console.log(err));
}

btn.addEventListener("click", fetchJokeOfDay);
