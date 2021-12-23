let nameinput = document.querySelector(".nameinput");
let namecheck = document.querySelector(".namecheck");
let copieEmail = document.querySelector(".copieEmail");

copieEmail.onclick = function () {
  copieEmail.innerHTML = "copied !";
  navigator.clipboard.writeText("cjvfyv@gmail.com");
};
nameinput.onblur = function () {
  console.log(nameinput.value);
  if (nameinput.value.length < 1) {
    console.log("err");
    namecheck.innerHTML = "error";
  } else namecheck.innerHTML = "";
};
