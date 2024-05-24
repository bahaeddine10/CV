export class NavBar extends HTMLElement{
    constructor(){
        super();
    }
connectedCallback(){
    this.innerHTML=`
    <nav class="navbar nav-underline  navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid" >
        <a class="navbar-brand Logo"  id="myname" href="#"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto" >
                <li class="nav-item">
                    <a class="nav-link active "   aria-current="page" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"  aria-current="true" aria-label="Slide 1" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" href="#">About me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" href="#">Skills</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" href="#">Certificates</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"  href="#">Certificates</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
    
    
    `;
    
    let list =this.querySelectorAll(".navbar-nav .nav-item .nav-link");
    this.querySelector(".navbar-nav").addEventListener("click",(event)=>{
        console.log(event.target);
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


}
}