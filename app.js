// Responsive navigation Menu
let menu = document.getElementById('menu-button');
let closeBtn = document.getElementById('close-button');
let navigation = document.getElementById("nav-links");
let listMenu = document.getElementById('menu');
//------------
let hamburger_menu = document.querySelector('.hamburger-menu-container');
let close_btn = document.querySelector('.close-button');


window.addEventListener("resize", () => {
  // if (hamburger_menu.clicked === true) {
      if (window.matchMedia("@media only screen and (min-width: 1020px)").matches) {
          // navigation.style.top = "0";
          document.querySelector('.hamburger-menu').style.display="none";
          document.querySelector('.hamburger-menu').style.display="none";
          close_btn.style.display="none";
          document.querySelector('.close-button').style.display="none";
      }
  // }
});


document.querySelector('.hamburger-menu').addEventListener('click', () => {
  navigation.style.top = "0";
});

document.querySelector('.close-button').addEventListener('click', () => {
  navigation.style.top = "-100vh";
});

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
