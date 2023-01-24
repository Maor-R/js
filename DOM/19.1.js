
const startHere = document.getElementsByClassName('start-here');
startHere[0].innerHTML = 'main title';

const newLi = document.createElement('li');
newLi.innerHTML = 'subtitle 4';
const ul = document.getElementsByTagName('ul');

ul[1].appendChild(newLi)
// document.body.appendChild(newLi);
const liItems = document.getElementsByTagName('li');
ul[1].removeChild(liItems[5]);

const title = document.getElementsByTagName('title');
title[0].innerHTML = 'Master Of The Dom';
// alert(title)


const plements = document.getElementsByTagName('p');
plements[0].innerHTML = "HELLO WORLD"




