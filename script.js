const front = document.querySelector(".front");
const card = document.querySelector("#card");

card.addEventListener("click", function() {    
    console.log(card.style.top == "75vh");
    if(card.style.top == "10vh"){
        card.style.top = "75vh";
        card.style.transform = "rotateY(180deg)";
    }
    else{
        card.style.top = "10vh";
        card.style.transform = "rotateY(0deg)";
    }
});