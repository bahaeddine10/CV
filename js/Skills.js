export class MySkill extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML=`
        <div class=" card  mb-4" style="max-width: 700px;">
        <div class="card-body ">
            <h4 class="Logo card-title text-center">Skills</h4>
            <ul class="list-unstyled row row-cols-2">
              <div class="col">
              <li >Programming Languages:</li>
              <ul class="list">
                <li > <i class=" fa-brands fa-python"></i> Python</li>
                <li ><i class=" fa-brands fa-java"></i> Java</li>
                <li ><i class="fa-solid fa-c"></i> Language</li>
                <li ><i class="fa-solid fa-c">#</i> Language</li>
              </ul>
            </div>
            <div class="col">
              <li>Database Management</li>
              <ul class="list">
                <li >Sql</li>
                <li>my Sql</li>
                <li>Mongo DB</li>
              </ul>
            </div>
            <div class="col">
              <li>Web Developement</li>
              <ul class="list">
                <li ><i class="fa-brands fa-html5"></i> HTML </li>
                <li><i class="fa-brands fa-css3"></i> CSS</li>
                <li><i class="fa-brands fa-js"></i> JavaScript</li>
              </ul>
            </div>
            <div class="col">
              <li>Version Control </li>
              <ul class="list">
                <li ><i class="fa-brands fa-git"></i> Git</li>
                <li><i class="fa-brands fa-github"></i> Githube</li>
                <li><i class="fa-brands fa-js"></i> JavaScript</li>
              </ul>
            </div>
              
            </ul>
            
        </div>
    </div>
        `;
    }
}