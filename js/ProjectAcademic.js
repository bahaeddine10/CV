export class PA extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML=`
        <div class="card">
                      <div class="card-body">
                        <h4 class="card-title text-center Logo">Project Academic</h4>
                        <p class="card-text text-secondary">Mini Projet (Evently) :</p>
                        <ul class="list">
                          <li style="font-size: 15px;">Development d'un application web de publier post et organiser un
                            événement</li>
                            <li style="font-size: 15px;">Utilisation du framework angular 16 pour le frontend et php pour le backend</li>
                              <li style="font-size: 15px;">Conception et developement d'un reseaux social</li>
                        </ul>

                        <button type="button" class="btn btn-info"><i class="fa-brands fa-github"></i> Lien de projet</button>
                        

                      </div>
                    </div>
        `;
        this.querySelector(".btn").addEventListener("click",()=>{
            window.open("https://github.com/bahaeddine10/Evently.git");

        })
    }
}