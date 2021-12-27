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
    namecheck.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Please insert your full name.`;
  } else namecheck.innerHTML = "";
};
textinput.onblur = function () {
  if (textinput.value.length < 4) {
    txtcheck.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Please fill this part. `;
  } else txtcheck.innerHTML = "";
};
emailinout.onblur = function () {
  if (emailinout.value.length < 10) {
    emailcheck.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Please insert your email.`;
  } else emailcheck.innerHTML = "";
};
// submitbtn.onclick = function () {
//   event.preventDefault();
//   if (
//     nameinput.value.length < 4 ||
//     emailinout.value.length < 10 ||
//     textinput.value.length < 4
//   ) {
//     submittxt.classList.add("txtcheck");
//     submittxt.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Can't submit an empty form.`;
//   } else {
//     nameinput.value = "";
//     emailinout.value = "";
//     textinput.value = "";
//     submittxt.classList.add("submittxtRth");
//     submittxt.innerHTML = `<i class="fas fa-check-square"></i> Thanks for submitting.`;
//   }
// };
