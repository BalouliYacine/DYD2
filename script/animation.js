// Header
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

let links = document.querySelector(".links");
document.querySelector(".burgerMenu").addEventListener("click", function () {
  links.classList.add("showLinks");
  gsap.to(".header", { y: 200, duration: 0.5 });
});
document.querySelector(".cbg").addEventListener("click", function () {
  links.classList.remove("showLinks");
  gsap.to(".header", { y: 0 });
});

// Section
document.querySelector(".SI").addEventListener("click", function () {
  console.log("13");
});
gsap.fromTo(
  ".SectionTXT",
  { opacity: 0 },
  {
    scrollTrigger: { trigger: ".SectionTXT", scrub: 1 },
    opacity: 1.2,
  }
);
gsap.fromTo(
  ".SI",
  { opacity: 0, y: "30%" },
  {
    scrollTrigger: {
      trigger: ".SI",
      scrub: true,
    },
    opacity: 1.3,
    y: "-10%",
  }
);
gsap.fromTo(
  ".SI2",
  { opacity: 0, y: "30%" },
  {
    scrollTrigger: {
      trigger: ".SI2",
      scrub: true,
    },
    opacity: 1.3,
    y: "-10%",
  }
);
gsap.fromTo(
  ".SI3",
  { opacity: 0, y: "30%" },
  {
    scrollTrigger: {
      trigger: ".SI3",
      scrub: true,
      // start: "top bottom",
    },
    opacity: 1.3,
    y: "-10%",
  }
);
