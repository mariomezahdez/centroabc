document.addEventListener("DOMContentLoaded", ready);

function ready(){
    var getMenu = document.querySelector("ul");

    if(screen.width < 1279){
        getMenu.style.display = ""; 

        if (getMenu.style.display == "none") {
            getMenu.style.display = "";   
        } else {
            getMenu.style.display = "none";
        }

    }   
}

function pushMenu(){
    var getMenu = document.querySelector("ul");

       
    if (getMenu.style.display == "none") {
            getMenu.style.display = "";   
    } else {
            getMenu.style.display = "none";
    }
}

function pushForm(){
    var getMail = document.querySelector("#mail");

    if (getMail.value) {
        alert("Gracias por contactarnos, en breve recibiras un correo");        
    }

}