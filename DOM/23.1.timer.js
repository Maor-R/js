const timer = document.getElementById("timer");
let  d = new Date();

timer.innerText = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

const updateTime = () => { 
    d = new Date();

    timer.innerText = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  };

setInterval(updateTime, 1000);

