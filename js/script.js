import { AboutMe } from "./AboutMe.js";
import { MySkill } from "./Skills.js";
import { Certificate } from "./Certificates.js";
customElements.define("about-me",AboutMe);
customElements.define("my-certificate",Certificate);

customElements.define("my-skills",MySkill);
let row=document.querySelector("#row");

let   typed1 = new Typed('#myname', {
    strings: ['Baha Eddine Gassar', 'BEG'],
    typeSpeed: 200,
    backSpeed : 20,
    loop:true,
    cursorChar: ''
  });


  
  let list =Array.from(document.querySelectorAll(".navbar-nav .nav-item .nav-link"));
    document.querySelector(".navbar-nav").addEventListener("click",(event)=>{
      
        
            list.map((el)=>{
                
                
                if(event.target==el){
                    
                    el.classList.add("active");

                    
                }else{
                    el.classList.remove("active");
                }
            })

        
    })

   

 

 for(let i=1;i<16;i++){
  let el = document.createElement("my-certificate");
  el.setAttribute("img",`../Certificate/Certificate${i}.png`)
  row.appendChild(el);  
 }

