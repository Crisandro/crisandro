const front = document.querySelector(".front");
const card = document.querySelector("#card");
const pic = document.querySelector("#photos");
var starting = 0;
//card.vanillaTilt.destroy();

front.addEventListener("click", cardmove);

function cardmove(){
    if(starting == 0){
        card.style.zIndex = "5";
        card.style.top = "10vh";
        card.style.transform = "rotateY(0deg)";
        starting = 1;
    }
    else{  
        card.style.zIndex = "-5";
        card.style.top = "75vh";
        card.style.transform = "rotateY(180deg)";
        starting = 0;
    }
}

pic.addEventListener('click', function(){
    console.log("clicked");
})

var item = document.getElementById("photos");

window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) pic.scrollLeft += 100;
    else pic.scrollLeft -= 100;
});