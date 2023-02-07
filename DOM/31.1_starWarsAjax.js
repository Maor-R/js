const starWarsContent = document.getElementById("starWarsContent");
let arr = [];

function getStarWarsData(i) {
  let obj = {};

  fetch(`https://swapi.dev/api/people/${i}/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      obj.name = data.name;
      obj.hair = data.hair_color;
      obj.height = data.height;
      fetch(data.homeworld)
        .then((res) => res.json())
        .then((dataPlanets) => {
          obj.planetName = dataPlanets.name;
          obj.population = dataPlanets.population;
          arr.push(obj);

          let colNum = 1;
          for (let o of Object.values(obj)) {
            let newP = document.createElement("p");
            newP.innerText = o;
            newP.style.gridRow = i;
            newP.style.gridColumn = colNum++;
            starWarsContent.appendChild(newP);
          }
        });
    })
    .catch((err) => console.log(err));
}

for (let i = 3; i < 13; i++) {
  getStarWarsData(i);
}
console.log(arr);
