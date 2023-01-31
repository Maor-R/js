const timer = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

let m = 0;
let s = 0;
let ms = 0;
const updateTime = () => {
  if (ms < 899) {
    ms += 100;
  } else if (s < 60) {
    s++;
    ms = 0;
  } else if (m < 60) {
    m++;
    s = 0;
    ms = 0;
  } else if (m == 60) {
    clearInterval(stopInterval);
  }

  timer.innerText = `${m}:${s}:${ms}`;
};

startBtn.addEventListener("click", function () {
  stopInterval = setInterval(updateTime, 100);
});

stopBtn.addEventListener("click", function () {
  clearInterval(stopInterval);
});
