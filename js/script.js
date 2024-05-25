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

        if (list.entries(event.target)){
            list.forEach((el)=>{
                
                if(event.target==el){
                    el.classList.add("active");
                }else{
                    el.classList.remove("active");
                }
            })

        }
    })
    
    document.querySelector(".carousel-control-prev").addEventListener("click",(event)=>{
        if(event.detail==1){
        list.unshift(list.pop());
        list[1].classList.remove("active");
        list[0].classList.add("active");
        console.log(list);
        }
          
  })
  
  document.querySelector(".carousel-control-next").addEventListener("click",(event)=>{
    if (event.detail === 1){
      list.push(list.shift());
      list[0].classList.add("active");
      list[list.length-1].classList.remove("active");
      
  }
})


 

 for(let i=1;i<15;i++){
  let el = document.createElement("my-certificate");
  el.setAttribute("img",`../Certificate/Certificate${i}.png`)
  row.appendChild(el);  
 }

