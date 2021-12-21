let tl = gsap.timeline();
tl.fromTo(
  ".navbar",
  { y: "-30%", opacity: 0 },
  { y: "0%", opacity: 1, duration: 0.5 }
);
tl.fromTo(
  ".headertxt",
  { y: "-30%", opacity: 0 },
  { y: "0%", opacity: 1, duration: 0.3 }
);
tl.fromTo(
  ".headerP",
  { y: "-30%", opacity: 0 },
  { y: "0%", opacity: 1, duration: 0.3 }
);
tl.fromTo(
  ".Hbtn",
  { y: "-30%", opacity: 0 },
  { y: "0%", opacity: 1, duration: 0.3 }
);

gsap.fromTo(
  ".SectionTXT",
  { opacity: 0 },
  {
    opacity: 1,
    scrollTrigger: { trigger: ".SectionTXT", scrub: 1 },
    opacity: 1,

    duration: 2,
  }
);

let btn = document.querySelector(".burgerMenu");
btn.addEventListener("click", function () {
  let links = document.querySelector(".links");
  links.classList.add("showLinks");
  gsap.to(".header", { y: 200, duration: 0.5 });
});
let btn2 = document.querySelector(".cbg");
btn2.addEventListener("click", function () {
  let links = document.querySelector(".links");
  links.classList.remove("showLinks");
  gsap.to(".header", { y: 0 });
});
