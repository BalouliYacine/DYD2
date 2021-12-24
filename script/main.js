let nameinput = document.querySelector(".nameinput");
let namecheck = document.querySelector(".namecheck");
let emailcheck = document.querySelector(".emailcheck");
let emailinout = document.querySelector(".emailinout");
let textinput = document.querySelector(".textinput");
let txtcheck = document.querySelector(".txtcheck");
let submitbtn = document.querySelector(".submitbtn");
let submittxt = document.querySelector(".submittxt");
let copieEmail = document.querySelector(".copieEmail");

setInterval(function () {
  copieEmail.innerHTML = "Email";
}, 5000);
copieEmail.onclick = function () {
  copieEmail.innerHTML = "Copied !";
  navigator.clipboard.writeText("cjvfyv@gmail.com");
};
nameinput.onblur = function () {
  if (nameinput.value.length < 4) {
    namecheck.innerHTML = "Pleas insert you full name.";
  } else namecheck.innerHTML = "";
};
textinput.onblur = function () {
  if (textinput.value.length < 4) {
    txtcheck.innerHTML = "Pleas insert you concern.";
  } else txtcheck.innerHTML = "";
};
emailinout.onblur = function () {
  if (emailinout.value.length < 10 || !emailinout.value.includes("@")) {
    emailcheck.innerHTML = "Pleas insert your email.";
  } else emailcheck.innerHTML = "";
};
submitbtn.onclick = function () {
  event.preventDefault();
  if (
    nameinput.value.length < 4 ||
    emailinout.value.length < 10 ||
    textinput.value.length < 4
  ) {
    submittxt.classList.add("txtcheck");
    submittxt.innerHTML = "Can't submit an empty form.";
  } else {
    nameinput.value = "";
    emailinout.value = "";
    textinput.value = "";
    submittxt.classList.add("submittxtRth");
    submittxt.innerHTML = "Thanks for submitting.";
  }
};
