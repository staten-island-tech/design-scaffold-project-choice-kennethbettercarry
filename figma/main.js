import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
//NavBarThings
const navSlide = () => {
  const Lined = document.querySelector(".Lined");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  Lined.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    //The line animated
    Lined.classList.toggle("toggle");
  });
};

navSlide();
const pictures = gsap.utils.toArray(".pictures");
gsap.set(pictures, { autoAlpha: 0, y: 50 });

pictures.forEach((pictures, i) => {
  const anim = gsap.to(pictures, {
    duration: 3,
    autoAlpha: 1,
    y: 0,
    paused: true,
  });
  ScrollTrigger.create({
    trigger: pictures,
    end: "bottom bottom",
    once: true,
    onEnter: (self) => {
      self.progress === 1 ? anim.progress(1) : anim.play();
    },
  });
});
const tl = gsap.timeline({ scrollTrigger: ".emptysections", delay: 1.0 });

tl.from(".header", { opacity: 0, duration: 0.2 });
tl.from(".description", { opacity: 0, duration: 0.5 });
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}
toggleSwitch.addEventListener("change", switchTheme, false);
