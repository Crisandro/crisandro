const back = document.querySelector("#back");
const card = document.querySelector(".card");
const shadow = document.getElementById("shadowbox");
const pic = document.querySelector("#photos");
let darkBoxVisible = false, starting = true;


card.addEventListener("click", cardIn);

shadow.addEventListener("click", cardOut);

function cardOut(){
    if(starting==false){
        shadow.style.opacity = "0";
        shadow.style.visibility = "hidden";
        card.vanillaTilt.destroy();
        card.style.top = "10vh";
        card.style.left = "-30vw";
        card.style.transform = "rotateY(180deg) rotateZ(-35deg)";
        starting = true;
    }
}

function cardIn(){
    if(starting){
        shadow.style.opacity = "1";
        shadow.style.visibility = "visible";
        card.style.top = "10vh";
        card.style.left = "30vw";
        card.style.transform = "rotateY(0deg)";
        starting = false;
        VanillaTilt.init(document.querySelector("#card"), {
            max: 10,
            speed: 1000,
            glare: true,
            startX: 0,
            startY: 0,
            "max-glare": 0.5,
            scale: 1.1,
            perspective: 1500
        });
    }
}

var item = document.getElementById("photos");

window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) pic.scrollLeft += 100;
    else pic.scrollLeft -= 100;
});

/*function showDarkbox(url) {
    if(!darkBoxVisible) {
     let x = (window.innerWidth - 1280) / 2;
     let y = window.scrollY + 50;
     // Create the darkBox
     var div = document.createElement("div");
     div.id = "darkbox";
     div.innerHTML = '<img class="darkboximg" src="'+url+'" />';
     document.body.appendChild(div);
     let box = document.getElementById("darkbox");
     box.style.left = x.toString()+"px";
     box.style.top = y.toString()+"px";
     box.style.height = 'auto';
     box.addEventListener('click', (event) => {
      // Remove it
      let element = document.getElementById("darkbox");
      element.parentNode.removeChild(element);
      darkBoxVisible = false;
     })
     darkBoxVisible = true;
   } else {
     // Remove it
     let element = document.getElementById("darkbox");
     element.parentNode.removeChild(element);
     darkBoxVisible = false;
  }
 }

 window.addEventListener('load', (event) => {
    let images = document.querySelectorAll("images");
    if(images !== null && images !== undefined && images.length > 0) {
     images.forEach(function(img) {
      img.addEventListener('click', (evt) => {
       showDarkbox(img.src);
      });
     });
    }
});*/