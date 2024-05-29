export class AboutMe extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){
        //html
        this.innerHTML=`
        <div class=" card  mb-4 " style="max-width: 700px;margin-top:-20px;">
                    <div class="row gap-0">
                      <div class="col-md-4">
                        <img src="./img/baha5.png" class="img-fluid rounded-start " alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body ">
                          
                                <h4 class="card-title Logo">I'm <span class="card-text" id="Im"></span>  </h4>
                                
                                <p class="card-text " style="font-size:15px">Étudiant en deuxième année licence sciences informatiques 
                                spécialité de génie logiciel et Systèmes Informations en<br> 
                                <a class="link  text-decoration-none " href="http://www.istic.rnu.tn/fr/" > ISTIC Borj Cedria </a></p> 
                                <p class="card-text" style="font-size:15px"> je recherche d'un stage d'été en 
                                Développement Logiciel<br> pour <mark >PFA</mark></p>
                               <dl class="row ">
                                <dt class="col-sm-3 "><small style="font-size: 13px;"  class="text-dark fw-bold">Organizations Clubs :</small></dt>
                                <dd class="col-sm-9"> 
                                      <ul>
                                        <li><p><small style="font-size: 10px;">IEEE Cs chapter ISTIC SB : Member</small></p></li>
                                        <li><p><small style="font-size: 10px;">IEEE Group sight ISTIC SB : Member</small></p></li>
                                        </ul>
                                </dd>

                                <dt class="col-sm-3"><small style="font-size: 13px;" class="text-dark fw-bold">Languages:</small></dt>
                                <dd class="col-sm-9">
                                    <ul>
                                        <li><p><small style="font-size: 11px;">Arabic : Native</small></p></li>
                                        <li><p><small style="font-size: 11px;">English : B2</small></p></li>
                                        <li><p><small style="font-size: 11px;">French : B1</small></p></li>
                                        </ul>
                                </dd>

                                
                                </dl>


                                <div id="fixMob" class="d-flex p-2 align-items-center gap-1 justify-content-center">
                                    <button type="button" id="Download" class="btn btn-2 btn-outline-dark d-flex gap-1  justify-content-between  " ><i  class="fa-solid fa-download"></i> Download Cv</button>
                                    <button type="button" id="Contact" class="btn btn-dark " > Contact me</button>

                                </div> 
                        <div class="p-1 d-flex gap-2 align-items-center justify-content-sm-around ">
                                    <a href="https://github.com/bahaeddine10" class="text-dark col-2"><i class="fa-brands fa-github-square"></i></a>
                                    <a href="https://www.linkedin.com/in/bahaeddinegassar" class="text-dark col-2"><i class="fa-brands fa-linkedin-in"></i></a>
                                    <a href="https://www.facebook.com/bahagassar" class="text-dark col-2"><i class="fa-brands fa-facebook-square"></i></a>
                                </div>
                        </div>
                      </div>
                    </div>
                </div>
        
        `;
        
        //js
        let typed2 = new Typed("#Im",{
            strings: ['Baha Eddine Gassar', 'Software Engineering and Information System Student'],
            typeSpeed: 150,
            backSpeed : 150,
            loop:true,
            cursorChar: '_'
            ,backDelay: 1000,
            
          
          })
          this.querySelector("#Contact").addEventListener("click",async()=>{
            Swal.fire({title:"Contact me",
            html:`
            <ul class="list-unstyled">
            
              <li > <a href="mailto:bahagassar@gmail.com" style="font-size:15px;" class="text-decoration-none text-warning"><i class="fa-solid fa-envelope"></i>  bahagassar@gmail.com</a></li><br>
              <li ><a href="tel:27820194" style="font-size:15px;" class="text-decoration-none text-warning"><i class="fa-solid fa-square-phone"></i> 27820194</a></li>


            
            
            </ul>
            
            `
            })
          })
         
          this.querySelector("#Download").addEventListener("click",()=>{
           window.open("./cv/Baha Eddine_Gassar.pdf"); 
          })

    }
}