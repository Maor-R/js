// Create a webpage that has a form (asks the user for its name,
//     age, and email address) and when the user clicks submit, open
//     a text window that writes all the information and asks for his
//     confirmation.
//    If he clicks on the confirm button, tell him
//     “congratulations you successfully sent this form” if he clicks on
//     change information, give him the possibility to change the
//     information, and ask again for his confirmation.

const submitBtn = document.getElementById("submitBtn");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const emailInput = document.getElementById("email");
const textInfo = document.getElementById("textInfo");
const msg = document.getElementById("msg");
const confirmBox = document.getElementById("confirmBox");
const changeInformationBtn = document.getElementById("changeInformation");
const confirmBtn = document.getElementById("confirm");

changeInformationBtn.addEventListener("click", function (event) {
  confirmBox.style.display = "none";
});

confirmBtn.addEventListener("click", function (event) {
  msg.innerText = "congratulations you successfully sent this form";
  confirmBox.style.display = "none";

});
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  confirmBox.style.display = "flex";
  textInfo.innerHTML = `name: ${nameInput.value} <br>  age: ${ageInput.value} <br>  email: ${emailInput.value}`;
});
