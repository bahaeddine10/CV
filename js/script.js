import { AboutMe } from "./AboutMe.js";
import { MySkill } from "./Skills.js";
import { Certificate } from "./Certificates.js";
import { PA } from "./ProjectAcademic.js";
customElements.define("about-me",AboutMe);
customElements.define("my-certificate",Certificate);
customElements.define("projet-accademic",PA);

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
  
 for(let i=1;i<17;i++){
  let el = document.createElement("my-certificate");
  el.setAttribute("img",`../Certificate/Certificate${i}.png`)
  row.appendChild(el);  
 }

 
let contact=document.querySelector("#Contact");


contact.addEventListener("click",()=>{
    list.forEach((el)=>{el.classList.remove("active")})
    list[list.length-1].classList.add("active");
    list[list.length-1].click();
    
    const btn = document.getElementById('button');

    document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_yckzbbg';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});



})



