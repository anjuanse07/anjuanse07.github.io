/* animasi tulisan backspace */
var typed = new Typed(".typing",{
    strings:["", "an Undergraduate Electrical Engineer" ,"a ML and AI Enthusiast", "a Web Designer","a Multidisciplinary Engineer"],
    typeSpeed:70,
    BackSpeed:50,
    loop:true
})

/* aside */
const navi = document.querySelector(".nav"),
    navilist = navi.querySelectorAll("li"),
    totalnavilist = navilist.length;
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for(let i = 0; i<totalnavilist; i++){

    const a = navilist[i].querySelector("a");
    a.addEventListener("click",function()
    {
        removeBackSection();
        for(let j=0; j<totalnavilist; j++){

            if(navilist[j].querySelector("a").classList.contains("active")){
                addbackSection(j);
                // allSection[j].classList.add("back-section");
            }

            navilist[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        
        if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
        }
    })
}

function removeBackSection(){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("back-section");
    }
}

function addbackSection(num){
    allSection[num].classList.add("back-section");
}

function showSection(element){

    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

function updateNav(element){
    for(let i=0; i<totalnavilist; i++){
        navilist[i].querySelector("a").classList.remove("actie");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navilist[i].querySelector("a").getAttribute("href").split("#")[1]){
            navilist[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click",function(){
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addbackSection(sectionIndex);
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () =>{
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){    
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.toggle("open");
    }
}