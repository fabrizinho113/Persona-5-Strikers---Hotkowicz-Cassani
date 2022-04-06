function Joker(){
    document.getElementById("myImg").src = "../assets/img/imgJoker.jpg"
    document.getElementById("codename").textContent = "Codename: Joker"
}

function Mona(){
    document.getElementById("myImg").src = "../assets/img/imgMona.jpg"
    document.getElementById("codename").textContent = "Codename: Mona"
}

function Skull(){
    document.getElementById("myImg").src = "../assets/img/imgSkull.jpg"
    document.getElementById("codename").textContent = "Codename: Skull"
}

function Panther(){
    document.getElementById("myImg").src = "../assets/img/imgPanther.jpg"
    document.getElementById("codename").textContent = "Codename: Panther"
}

function Fox(){
    document.getElementById("myImg").src = "../assets/img/imgFox.jpg"
    document.getElementById("codename").textContent = "Codename: Fox"
}

function Queen(){
    document.getElementById("myImg").src = "../assets/img/imgQueen.jpg"
    document.getElementById("codename").textContent = "Codename: Queen"
}

function Oracle(){
    document.getElementById("myImg").src = "../assets/img/imgOracle.jpg"
    document.getElementById("codename").textContent = "Codename: Oracle"
}

function Noir(){
    document.getElementById("myImg").src = "../assets/img/imgNoir.jpg"
    document.getElementById("codename").textContent = "Codename: Noir"
}

function Sophie(){
    document.getElementById("myImg").src = "../assets/img/imgSophia.jpg"
    document.getElementById("codename").textContent = "Codename: Sophia"
}

function Wolf(){
    document.getElementById("myImg").src = "../assets/img/imgWolf.jpg"
    document.getElementById("codename").textContent = "Codename: Wolf"
}


/* Media.html */

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

