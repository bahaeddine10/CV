export class Certificate extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML=`
        <div class="col">
                    <div class="card">
                      <img src="./Certificate/${this.getAttribute("img")}" class="card-img-top" alt="...">
                    </div>
                  </div>
                  `;
    }
}