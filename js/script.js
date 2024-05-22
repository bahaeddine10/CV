import { AboutMe } from "./AboutMe.js";

import { NavBar } from "./NavBar.js";
customElements.define("about-me",AboutMe);
customElements.define("nav-bar",NavBar);

let   typed1 = new Typed('#myname', {
    strings: ['Baha Eddine Gassar', 'BEG'],
    typeSpeed: 200,
    backSpeed : 20,
    loop:true,
    cursorChar: ''
  });



