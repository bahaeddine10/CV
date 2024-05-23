import { AboutMe } from "./AboutMe.js";
import { MySkill } from "./Skills.js";
import { NavBar } from "./NavBar.js";
customElements.define("about-me",AboutMe);
customElements.define("nav-bar",NavBar);
customElements.define("my-skills",MySkill);

let   typed1 = new Typed('#myname', {
    strings: ['Baha Eddine Gassar', 'BEG'],
    typeSpeed: 200,
    backSpeed : 20,
    loop:true,
    cursorChar: ''
  });



