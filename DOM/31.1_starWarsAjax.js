
const starWarsContent = document.getElementById("starWarsContent");
let arr = [];

function getStarWarsData(i) {

let obj = {};


  fetch(`https://swapi.dev/api/people/${i}/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      obj.name = data.name;
      obj.hair = data.hair_color;
      obj.height = data.height;
      obj.homeWorld = data.homeworld;   
      fetch(data.homeworld).then((res) =>res.json()).then((dataPlanets) => {

      obj.planetName = dataPlanets.name;
      obj.population = dataPlanets.population;
      arr.push(obj);

      let  newP = document.createElement('p');
      newP.innerText = obj.name;
      newP.style.gridRow = i;
      newP.style.gridColumn = 1;
      starWarsContent.appendChild(newP);

       newP = document.createElement('p');
      newP.innerText = obj.hair;
      newP.style.gridRow = i;
      newP.style.gridColumn = 2;
      starWarsContent.appendChild(newP);


       newP = document.createElement('p');
      newP.innerText = obj.height;
      newP.style.gridRow = i;
      newP.style.gridColumn = 3;
      starWarsContent.appendChild(newP);


       newP = document.createElement('p');
      newP.innerText = obj.planetName;
      newP.style.gridRow = i;
      newP.style.gridColumn = 4;
      starWarsContent.appendChild(newP);

       newP = document.createElement('p');
      newP.innerText = obj.population;
      newP.style.gridRow = i;
      newP.style.gridColumn = 5;
      starWarsContent.appendChild(newP);

     })}).catch((err) => console.log(err));


   
}

for (let i=3 ; i<13;i++){
getStarWarsData(i);
}
console.log(arr);