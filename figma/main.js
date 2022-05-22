import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const navWorking = () => {
  const Three = document.querySelector(".ESC");
  const Nav = document.querySelector(".navlisted");
};
Three.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});
navWorking();
