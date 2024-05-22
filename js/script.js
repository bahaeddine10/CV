import { AboutMe } from "./AboutMe.js";

customElements.define("about-me",AboutMe);


let   typed1 = new Typed('#myname', {
    strings: ['Baha Eddine Gassar', 'BEG'],
    typeSpeed: 200,
    backSpeed : 20,
    loop:true,
    cursorChar: ''
  });



  //Software Engineering and Information System Student
let words =["Hello... :)","click navItems for moving carousel ↑" ]

let playground=document.querySelector("#H3");

const sleep = (ms)=> new Promise(resolve=> setTimeout(resolve,ms) ) ;




const loopMots= async ()=>{
  let sleepTime = 6050;
  while(true){
    
    for (let index of words){
    
      playground.dataset.text=index;
      
      playground.innerText=index;
      
      await sleep(sleepTime);

    
    } 
    
  }
};

window.addEventListener("load",loopMots);

