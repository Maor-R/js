const inputElements = document.getElementsByTagName("input");

const arr = [...inputElements];
let i = 0;
for (const a of arr) {
  a.addEventListener("input", function () 

{    const inputElements = document.getElementsByTagName("input");

    if (this != inputElements[inputElements.length - 1])
    {
        this.nextElementSibling.focus(); //q1

    }
    if (this.value.length > 1) {
      //q2
      const str = this.value.split("");
      this.value = str[0];

      let next = this.nextElementSibling;
      for (let i = 1; next != undefined; i++, next = next.nextElementSibling) {
        next.value = str[i];
        next.focus();
      }//for

    }
    let i;
    const code = document.getElementsByName("code");
    const textCode = code[0].innerText;

    for (i = 0; i < textCode.length; i++) {
      if (textCode[i] != inputElements[i].value) break;
    }
    if (i == 6) {
      alert("The verification was successful");
      document.forms["form"].submit();
    }
});

}//for
