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


  let list =document.querySelectorAll(".navbar-nav .nav-item .nav-link");
  let list3 = Array.from(list);
    document.querySelector(".navbar-nav").addEventListener("click",(event)=>{

        if (list.entries(event.target)){
            list.forEach((el)=>{
                console.log(el);
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
        list3.unshift(list3.pop());
        list3[1].classList.remove("active");
        list3[0].classList.add("active");
        }
          
  })
  
  document.querySelector(".carousel-control-next").addEventListener("click",(event)=>{
    if (event.detail === 1){
      list3.push(list3.shift());
      list3[0].classList.add("active");
      list3[list3.length-1].classList.remove("active");
      console.log(list3[0])
  }
})


 

 for(let i=1;i<15;i++){
  let el = document.createElement("my-certificate");
  el.setAttribute("img",`../Certificate/Certificate${i}.png`)
  row.appendChild(el);  
 }

