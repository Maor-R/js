const inputElem = document.getElementById("input");
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", getUserData);
const profileUser = document.getElementById("profileUser");
const imgUser = document.getElementById("imgUser");

function getUserData() {

  fetch(`https://api.github.com/users/${inputElem.value}`)
    .then((res) => res.json())
    .then((data) => {
      imgUser.style.backgroundImage = `url(${data.avatar_url})`;

      const outPut = `<ul> <li> Name: ${data.name} </li>
        <li>  Number of public repos: ${data.public_repos} </li>
        <a href="${data.html_url}">Github profile</a>
        </ul>`;
        const newDiv = document.createElement('div');
        newDiv.innerHTML = outPut;
        profileUser.appendChild(newDiv)
        profileUser.style.display = "block";
    })
    .catch((err) => console.log(err));
}
