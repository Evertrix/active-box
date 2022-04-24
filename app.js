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
    document.querySelector('.hamburger-menu').style.display = "none";
    document.querySelector('.hamburger-menu').style.display = "none";
    close_btn.style.display = "none";
    document.querySelector('.close-button').style.display = "none";
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



// Rendeing throught Dom the Features section
const features_section = document.querySelector('.row');

const fetures_object = [{
    src: 'images/icon1.png',
    title: 'Easily Customised'
  },
  {
    src: 'images/icon2.png',
    title: 'Responsive Design'
  },
  {
    src: 'images/icon3.png',
    title: 'Modern Design'
  },
  {
    src: 'images/icon4.png',
    title: 'Clean Code'
  },
  {
    src: 'images/icon5.png',
    title: 'Ready To Ship'
  },
  {
    src: 'images/icon6.png',
    title: 'Download From Here'
  },
];

function featuresContent(src, title) {
  return features_section.innerHTML += `
  <div class="features-col">
                <img src="${src}" alt="">
                <h3>${title}</h3>
                <p>Cras justo odio, dapibus ac facilisis in, egestas
                    eget quam. Nullam quis risus eget urna mollis
                    ornare vel eu leo. Donec ullamcorper nulla</p>
            </div>
`;
}

for (const key in Object.entries(fetures_object)) {
  featuresContent(fetures_object[key].src, fetures_object[key].title);
}