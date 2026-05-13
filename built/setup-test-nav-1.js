
const btnNormal = document.getElementById("btn-open");
const remove = document.getElementById("container-li");


btnNormal.addEventListener("click", ()=>{  
    
        if(remove.style.opacity ==="1"){
            remove.style.opacity = "0";
        }
        else{
            remove.style.opacity = "1";

        }
        
});