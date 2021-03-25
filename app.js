const theBar = document.querySelector(".loading-bar__item")

const btnThirty = document.querySelector(".thirty")
const btnSixty = document.querySelector(".sixty")
const btnFull = document.querySelector(".full")



btnFull.addEventListener("click", fullCent);

function fullCent(){
    
    let width =1;
    let fullCounter = setInterval(function(){

        if(width >= 100 ){
            clearInterval(fullCounter);
            btnThirty.classList.remove("disable")
            btnSixty.classList.remove("disable")
    
        }
        else{
            
            btnThirty.classList.add("disable")
            btnSixty.classList.add("disable")
           width++;
            
            theBar.style.width = width + "%";
            
        }
    },60)
}


 btnThirty.addEventListener("click", thirtyCent);

function thirtyCent(){
    let width =1;
    let thirtyCounter = setInterval(function(){

        if(width >= 30 ){
            clearInterval(thirtyCounter);
            btnFull.classList.remove("disable")
            btnSixty.classList.remove("disable")
        }
        else{
            
            btnFull.classList.add("disable")
            btnSixty.classList.add("disable")
           width++;
    
            theBar.style.width = width + "%";
            
        }
    },60)
}
     


btnSixty.addEventListener("click", sixtyCent);

function sixtyCent(){
    let width =1;
    let sixtyCounter = setInterval(function(){

        if(width >= 60 ){
            clearInterval(sixtyCounter);
            btnThirty.classList.remove("disable")
            btnFull.classList.remove("disable")
        }
        else{
            
            btnThirty.classList.add("disable")
            btnFull.classList.add("disable")
           width++;
    
            theBar.style.width = width + "%";
            
        }
    },60)
}
 






 