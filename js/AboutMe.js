export class AboutMe extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){
        //html
        this.innerHTML=`
        <div class=" card  mb-4" style="padding:50px 30px 50px 30px;max-width: 540px;">
                    <div class="row gap-0">
                      <div class="col-md-4">
                        <img src="./img/baha5.png" class="img-fluid rounded-start " alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body ">
                          
                            
                                <h4 class="card-title Logo">I'm </h4><p class="card-text"><small class="text-body-secondary" id="Im"></small></p>  
                                <div class="d-flex align-items-center gap-1 justify-content-center">
                                    <button type="button" id="Download" class="btn btn-outline-dark fs-6 " > Download Cv</button>
                                    <a id="link" href="../assert/cv/Baha Eddine_Gassar.pdf" download hidden></a>
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
            Swal.fire();
          })

          this.querySelector("#Download").addEventListener("click",()=>{
            document.querySelector('#link').click();
          })

    }
}