var x = window.matchMedia("(max-width: 900px)");
x.addListener(showSlides);
var slides = document.getElementsByClassName("project-content");
var dots = document.getElementsByClassName("dot");
var slideIndex = 1;
var i;



// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  if(x.matches){
    slides[slideIndex-1].style.display = "block";
  }else {
    slides[slideIndex-1].style.display = "none";
    window.location.href = window.location.href.split( '#' )[0];
  }
  dots[slideIndex-1].className += " active";
}


console.log(window.)