export class AboutMe extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){
        //html
        this.innerHTML=`
        <div class=" card  mb-4" style="max-width: 700px;">
                    <div class="row gap-0">
                      <div class="col-md-4">
                        <img src="./img/baha5.png" class="img-fluid rounded-start " alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body ">
                          
                                <h4 class="card-title Logo">I'm <span class="card-text" id="Im"></span>  </h4>
                                <ul class="list">
                                <li class="list-item">
                                <p class="card-text " style="font-size:15px">Étudiant en deuxième année licence sciences informatiques 
                                spécialité de génie logiciel et Systèmes Informations en<br> 
                                <a class="link  text-decoration-none " href="http://www.istic.rnu.tn/fr/" > ISTIC Borj Cedria </a></p> </li>
                                <li><p class="card-text" style="font-size:15px"> je recherche d'un stage d'été en 
                                Développement Logiciel<br> pour <mark >PFA</mark></p></li>
                                <div class="d-flex pt-2 pb-2 align-items-center gap-1 justify-content-center">
                                    <button type="button" id="Download" class="btn  btn-outline-dark  " ><i class="fa-solid fa-download"></i> Download Cv</button>
                                 
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
            typeSpeed: 50,
            backSpeed : 150,
            loop:true,
            cursorChar: '_'
          
          })
          this.querySelector("#Contact").addEventListener("click",()=>{
            Swal.fire( {title:"<h4 style=\"color:#547612\">Contact Me</h4> ",html: `
            <ul class="list-unstyled d-flex align-items-center justify-content-around gap-2">
            <li><a class="link text-decoration-none" href="mailto:bahagassar@gmail.com"><i class="fa-regular fa-envelope"></i>bahagassar@gmail.com</a></li>
            <li><a class="link text-decoration-none " href="https://wa.me/21627820194"><i class="fa-brands fa-whatsapp"></i>+216 27 820 194</a></li>
            
            
            
            </ul>
          `,
          confirmButtonText:"close"
        });
          })
         
          this.querySelector("#Download").addEventListener("click",()=>{
           window.open("./cv/Baha Eddine_Gassar.pdf")
          })

    }
}