// #region Menu


function toggleMenu(e){
 
  document.querySelector('.head_nav').classList.toggle('menu_open');
  document.querySelector('.hamburger').classList.toggle('active'); 
  document.querySelector('.header').classList.toggle('open_menu');
 
}
var e = document.querySelector('.hamburger');
e.addEventListener('click',toggleMenu,false)

// #endregion

// #region Sliders
const swiper = new Swiper('.swiper', {
  setWrapperSize:true,
   autoHeight:true,
   autoWidth:true,
  autoplay:true,
  pagination:true,
  autoplaySpeed:6000,
  centeredSlides:true,
  loop:true,
  resizeObserver:true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  
  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  pagination:{
    el: '.swiper-pagination',
    clickable:true,
    type:'bullets',
    dynamicMainBullets:5,
    dynamicBullets:true,
 
  
  },
 
});
 
 
$(".news_slick_slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  dots:true,
  prevArrow:$('.prev_arrow_button'),
  
  nextArrow:$('.next_arrow_button'),
    
    responsive: [
      {
        breakpoint: 989, 
        settings: {
          centerPadding:50,
          autoplay:false,
          arrows:false,
          slidesToShow: 2,
          slidesToScroll: 1,
      
        },
        breakpoint: 700, 
        settings: {
          arrows:false,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
                  
        }
      }
    ]
});

// #endregion
// #region MAP
 


var map = L.map('map_wrapper').setView([22.313208922495647, 114.17263361075162], 13);

var customMarker = L.icon({
  iconUrl:'./assets/images/marker.png',
  //shadowUrl: 'leaf-shadow.png',

  iconSize:     [80, 80], // size of the icon
  //shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [40, -73], // point of the icon which will correspond to marker's location
  //shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

 
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
}).addTo(map);
const mark = L.marker([22.313208922495647, 114.17263361075162], {icon: customMarker}).addTo(map).bindPopup("residence in Kowloon").openPopup([22.313208922495647, 114.17263361075162]);
 
// #endregion

// #region Gallery
 
  Fancybox.bind(document.getElementById("gallery-wrap"), "[data-fancybox]", {
    // Your custom options
  });
 
// #endregion

// #region valide form
const EMAIL_MIN_LENGTH = 6;

function checkEmailLenght() {
    const valueLenght = window.inpEmail.value.length;
    const diff = valueLenght < EMAIL_MIN_LENGTH ? EMAIL_MIN_LENGTH - valueLenght : 0;

    if(diff) {
        window.emailDiffCount.textContent = diff;
        window.emailLenghtHelp.classList.remove('d-none');
    } else {
        window.emailLenghtHelp.classList.add('d-none');
    }
};

  window.inpEmail.addEventListener('input', checkEmailLenght)
  document.addEventListener('DOMContentLoaded', checkEmailLenght)
  // #endregion
  async function formSubmit(event) {
    const email = window.inpEmail.value;
    const name = window.inpName.value;

    event.preventDefault();

 
    if(!email || !name) {
        return false;
    }

    let apiToken = "6685344433:AAFe9Yea_lcKqx1dzqTdsWtfcIJus5QMg2U";
    let chatId = "-4066219312";

    let text = `
    Email: ${email}    
    Name: ${name}
    `;
 
  }