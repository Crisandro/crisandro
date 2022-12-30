const element = document.getElementById("cardOpener");
const cardfront = document.querySelector("#card");
cardfront.vanillaTilt.destroy();
console.log(cardfront.style.visibility == "hidden");

element.addEventListener("click", function() {
    console.log("clicked!");
    element.style.top = "5vh";
    cardfront.style.top = "5vh";
    cardfront.style.visibility= "visible";
    if(cardfront.style.visibility == "hidden")
        setTimeout(onthetilt(), 1500);
});

function onthetilt(){
    element.style.transform = "rotateY(180deg)";
    cardfront.style.transform = "rotateY(180deg)";
    cardfront.style.zIndex = "1";
    VanillaTilt.init(cardfront);
    element.style.visibility = "hidden";
}