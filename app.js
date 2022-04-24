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
const features_section = document.querySelector('.features');
const row_child = document.createElement('div');
row_child.classList.add('row');
features_section.appendChild(row_child);

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
  return row_child.innerHTML += `
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


// Rendeing throught Dom the Work section
const work_section = document.querySelector('.works-section');

const works_object = [{
    src: 'images/work1.jpg',
  },
  {
    src: 'images/work2.jpg',
  },
  {
    src: 'images/work3.jpg',
  },
  {
    src: 'images/work4.jpg',
  },
  {
    src: 'images/work5.jpg',
  },
  {
    src: 'images/work6.jpg',
  },
  {
    src: 'images/work7.jpg',
  },
  {
    src: 'images/work8.jpg',
  },
];

function workContent(src) {
  return work_section.innerHTML += `
  <div class="works-unit">
            <div class="works-image-container">
                <img src="${src}" class="works-image">
                <div class="overlay">
                    <div class="works-info">
                        <h3 class="works-title">Project Name</h3>
                        <p class="works-desctiption">User Interface Design</p>
                    </div>
                </div>
            </div>
        </div>`;
}

for (const key in Object.entries(works_object)) {
  workContent(works_object[key].src);
}


// Rendeing throught Dom the Teams section

const team_section = document.querySelector('.team');

const teams_object = [{
    src: 'images/person1.jpg',
    name: 'Ruth Woods',
    position: 'Founder, CEO'
  },
  {
    src: 'images/person2.jpg',
    name: 'Timothy Reed',
    position: 'Co-Founder, Developer'
  },
  {
    src: 'images/person3.jpg',
    name: 'Victoria Valdez',
    position: 'UI Designer'
  },
  {
    src: 'images/person4.jpg',
    name: 'Beverly Little',
    position: 'Data Scientist'
  },
];

function teamContent(src, name, position) {
  return team_section.innerHTML += `
  <div class="team-col">
            <img src="${src}" alt="">
            <div class="text-team-decor">
                <h2>${name}</h2>
                <span>${position}</span>
            </div>
            <p class="team-col-text">Fusce dapibus, tellus ac cursus
                commodo, tortor mauris condimentum
                nibh, ut fermentum massa justo sit amet
                risus. Maecenas sed diam eget risus
                varius blandit sit amet non magna.
                Nullam quis risus eget urna mollis ornare
                vel eu leo.</p>
            <div class="social">
                <i class="fab fa-facebook-f"
                    style="color: gray; width: 15px; padding: 8px; border: 0.5px solid gray;"></i>
                <i class="fab fa-twitter" style="color: gray; width: 15px; padding: 8px; border: 0.5px solid gray;"></i>
                <i class="fab fa-linkedin"
                    style="color: gray; width: 15px; padding: 8px; border: 0.5px solid gray;"></i>
            </div>
        </div>`;
}

for (const key in Object.entries(teams_object)) {
  teamContent(teams_object[key].src, teams_object[key].name, teams_object[key].position);
}