// Header
let tl = gsap.timeline();
tl.to(".tofade", {
  duration: 0.8,
});
tl.to(".tofade", {
  duration: 0.3,
  fontSize: 0,
  opacity: 0,
})
  .to(".leftD", { display: "inline-block", rotateY: 180 })
  .to(".animatedLOGOtxt", { opacity: 0, duration: 0.5 })
  //
  .to(".logoa", { opacity: 1, duration: 0 })
  .fromTo(
    ".navbar",
    { y: "-30%", opacity: 0 },
    { y: "0%", opacity: 1, duration: 0.5 }
  );
tl.fromTo(
  ".headertxt",
  { y: "-30%", opacity: 0 },
  { y: "0%", opacity: 1, duration: 0.3 }
);
// 
tl.fromTo(
  '.notme', { opacity: 1 },
  {
    opacity: 0.3,
    duration: 1,
    delay: .7,
    color: "red"
  }
)
ScrollTrigger.matchMedia({
  "(max-width: 700px)": () => {
    tl.fromTo(
      '.job', {
      y: "0%"
    }, {
      delay: 0.5,
      duration: 0.5,
      y: "200%"
    }
    );
  },
  "(min-width: 700px)": () => {
    tl.fromTo(
      '.job', {
      y: "0%"
    }, {
      delay: 0.5,
      duration: 0.5,
      y: "100%"
    }
    )
  }
})

tl.fromTo(".isme",
  { opacity: 0 },
  {
    duration: 1,
    opacity: 1
  })
//
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
//
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
gsap.fromTo(
  ".SectionTXT",
  { opacity: 0 },
  {
    scrollTrigger: { trigger: ".SectionTXT", scrub: 1 },
    opacity: 1.2,
  }
);
gsap.fromTo(
  ".sectionItem",
  { opacity: 0, y: "30%" },
  {
    scrollTrigger: {
      trigger: ".sectionItem",
      scrub: true,
      end: "center center",
    },
    opacity: 1.3,
    y: "0%",
  }
);

//About Me
gsap.fromTo(
  ".aboutMe",
  { opacity: 0, y: "10%" },
  {
    scrollTrigger: {
      trigger: ".aboutMe",
      scrub: 1,
      end: "top center",
    },
    opacity: 1.5,
    y: "0%",
  }
);
//servtitle
gsap.fromTo(
  ".servtitle",
  { opacity: 0 },
  {
    scrollTrigger: {
      trigger: ".servtitle",
      scrub: 0.5,
    },
    opacity: 1.5,
  }
);
gsap.fromTo(
  ".allservices",
  { opacity: 0.3 },
  {
    scrollTrigger: {
      trigger: ".allservices",
      scrub: 0.5,
    },
    opacity: 1.5,
  }
);

//

ScrollTrigger.matchMedia({
  "(max-width: 650px)": () => {
    gsap.fromTo(
      ".leftContact",
      { opacity: 0, x: "-0%" },
      {
        scrollTrigger: {
          trigger: ".leftContact",
          scrub: 1.2,
          end: "center center",
        },
        opacity: 1,
        x: "0%",
      }
    );
    gsap.fromTo(
      ".rightContact",
      { opacity: 0, x: "0%" },
      {
        scrollTrigger: {
          trigger: ".rightContact",
          scrub: 1.2,
          end: "center center",
        },
        opacity: 1,
        x: "0%",
      }
    );
  },
  "(min-width: 651px)": () => {
    gsap.fromTo(
      ".leftContact",
      { opacity: 0, x: "-50%" },
      {
        scrollTrigger: {
          trigger: ".leftContact",
          scrub: 1.2,
          end: "center center",
        },

        opacity: 1.5,
        x: "0%",
      }
    );
    gsap.fromTo(
      ".rightContact",
      { opacity: 0, x: "50%" },
      {
        scrollTrigger: {
          trigger: ".rightContact",
          scrub: 1.2,
          end: "center center",
        },
        opacity: 1.5,
        x: "0%",
      }
    );
  },
  // "(max-width: 700px)": () => {
  //   tl.fromTo(
  //     '.job', {
  //     y: "0%"
  //   }, {
  //     delay: 0.5,
  //     duration: 0.5,
  //     y: "200%"
  //   }
  //   );
  // gsap.fromTo(
  //   ".rightContact",
  //   { opacity: 0, x: "0%" },
  //   {
  //     scrollTrigger: {
  //       trigger: ".rightContact",
  //       scrub: 1.2,
  //       end: "center center",
  //     },
  //     opacity: 1,
  //     x: "0%",
  //   }
  // );
  // }
});
