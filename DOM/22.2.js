// Create a webpage that has a checkbox. If the checkbox is
// checked, make a photo appear. If it is not, make it disappear.

const submitBtn = document.getElementById("submitBtn");
const checkbox = document.getElementById("checkbox2");
let divImg = document.getElementById("divImg");

submitBtn.addEventListener("click", function (event) {
  if (checkbox.checked == true) {
    divImg.style.cssText = "display: inline";
  } else {
    divImg.style.cssText = "display: none";
  }
});
