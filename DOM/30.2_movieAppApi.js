const inputElem = document.getElementById("input");
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", getMovieData);
const profileMovie = document.getElementById("profileMovie");
const imgMovie = document.getElementById("imgMovie");

function getMovieData() {

  
  fetch(`http://www.omdbapi.com/?t=${inputElem.value}&apikey=825e4c9f`)
    .then((res) => res.json())
    .then((data) => {

      let Ratings = "<li>Rating: </li><ul> ";

      if( data.Ratings[0].Value !==undefined)
      {
        Ratings += `<li>Rotten: ${data.Ratings[0].Value}</li>`;
      }
      if( data.Ratings[1].Value !==undefined)
      {
        Ratings += `<li>Tomatoes: ${data.Ratings[1].Value}</li>`;
      }
      if( data.Ratings[2].Value !==undefined)
      {
        Ratings += `<li> Metacritic: ${data.Ratings[2].Value}</li>`;
      }

      Ratings += "</ul></ul>";

      imgMovie.style.backgroundImage = `url(${data.Poster})`;

      const outPut = `<ul> <li> Title: ${data.Title} </li>
        <li>  Genre: ${data.Genre} </li>
        <li> Year: ${data.Year}:</li>
        <li> Plot: ${data.Plot}</li>
        <li> Director: ${data.Director}</li>
        <li> Actors: ${data.Actors}</li>
        <li>Year: ${data.Year}</li>` + Ratings;
        const newDiv = document.createElement('div');
        newDiv.innerHTML = outPut;
        profileMovie.appendChild(newDiv);
        profileMovie.style.display = "block";
    })
    .catch((err) => console.log(err));
}
