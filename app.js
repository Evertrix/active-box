// Responsive navigation Menu
let menu = document.getElementById('menu-button');
let closeBtn = document.getElementById('close-button');
let navigation = document.getElementById("nav-links");
let listMenu = document.getElementById('menu');

function showMenu() {
  navigation.style.top = "0";
}

function hideMenu() {
  navigation.style.top = "-100vh";
}
// Responsive navigation Menu

// Slider For Testimonials
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  };
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}
// Slider For Testimonials
