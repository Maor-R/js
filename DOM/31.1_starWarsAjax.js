const starWarsContent = document.getElementById("starWarsContent");
let arr = [];

async function getStarWarsData(i) {
  let obj = {};

  try {
  const retFetch1 = await fetch(`https://swapi.dev/api/people/${i}/`);
  const data = await retFetch1.json();

      console.log(data);
      obj.name = data.name;
      obj.hair = data.hair_color;
      obj.height = data.height;

      const retFetch2 = await fetch(data.homeworld);
      const dataPlanets = await retFetch2.json();

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
      
        }
    catch(e) {
      console.log("Error",e);
    } 
}

for (let i = 3; i < 13; i++) {
  getStarWarsData(i);
}
console.log(arr);
