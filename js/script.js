let   typed = new Typed('#myname', {
    strings: ['Baha Eddine Gassar', 'BEG'],
    typeSpeed: 200,
    backSpeed : 20,
    loop:true,
 
  cursorChar: ''
  });
let words =["Hello... :)","Bonjour .. :)" ]

let playground=document.querySelector("#H3");

const sleep = (ms)=> new Promise(resolve=> setTimeout(resolve,ms) ) ;

let sleepTime = 6000;
const loopMots= async ()=>{
  while(true){
    
    for (let index of words){
    
      playground.dataset.text=index;
      playground.innerText=index;
      
    await sleep(sleepTime);
    
    } 
    
  }
};

loopMots();

