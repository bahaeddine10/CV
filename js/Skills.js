export class MySkill extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML=`
        <div class=" card  mb-4" style="max-width: 700px;">
        <div class="card-body ">
            <h4 class="Logo card-title text-center">Skills</h4>
            <ul class="list-unstyled row card-text row-cols-2">
              <div class="col">
              <li ><p class="card-text text-black-50">Programming Languages:</p></li>
              <ul class="list">
                <li ><p class="card-text text-black-25"><i class=" fa-brands fa-python"></i> Python</p></li>
                <li ><p class="card-text text-black-25"><i class=" fa-brands fa-java"></i> Java</p></li>
                <li ><p class="card-text text-black-25"><i class="fa-solid fa-c"></i> Language</p></li>
                <li ><p class="card-text text-black-25"><i class="fa-solid fa-c">#</i> Language</p></li>
              </ul>
            </div>
            <div class="col">
              <li><p class="card-text text-black-50">Database Management</p></li>
              <ul class="list">
                <li ><p class="card-text text-black-25">Sql</p></li>
                <li><p class="card-text text-black-25">my Sql</p></li>
                <li><p class="card-text text-black-25">Mongo DB</p></li>
              </ul>
            </div>
            <div class="col">
              <li><p class="card-text text-black-50">Web Developement</p></li>
              <ul class="list">
                <li ><p class="card-text "><i class="fa-brands fa-html5"></i>HTML </p></li>
                <li><i class="fa-brands fa-css3"></i> CSS</p></li>
                <li><p class="card-text "><i class="fa-brands fa-js"></i> JavaScript</p></li>
              </ul>
            </div>
            <div class="col">
              <li><p class="card-text text-black-50">Version Control</p> </li>
              <ul class="list">
                <li ><p class="card-text "><i class="fa-brands fa-git"></i> Git</p></li>
                <li><p class="card-text "><i class="fa-brands fa-github"></i>Githube</p></li>
                
              </ul>
            </div>
              
            </ul>
            
        </div>
    </div>
        `;
       
    }
}