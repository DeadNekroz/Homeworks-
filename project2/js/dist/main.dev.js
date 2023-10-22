"use strict";

var _ref, _ref2, _$$slick;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region Menu
function toggleMenu(e) {
  // e.preventDefault();
  // e.target.classList.toggle('active');
  document.querySelector('.header').classList.toggle('active');
  document.querySelector('.burger').classList.toggle('active');
  document.querySelector('.page_wrapper').classList.toggle('menu_open'); // document.querySelector('.burger').classList.toggle('mobile');
} // #endregion
// #region Sliders


var swiper = new Swiper('.swiper', (_ref = {
  setWrapperSize: true,
  Height: 1000,
  autoWidth: true,
  autoplay: true,
  pagination: true,
  autoplaySpeed: 6000,
  centeredSlides: true,
  loop: true,
  resizeObserver: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false
  },
  // Optional parameters
  direction: 'vertical'
}, _defineProperty(_ref, "loop", true), _defineProperty(_ref, "pagination", {
  el: '.swiper-pagination',
  clickable: true,
  type: 'bullets',
  dynamicMainBullets: 5,
  dynamicBullets: true
}), _ref)); // $('.motto_wrapp').slick({
//   dotsClass: 'slick-dots hero__dots',
//   vertical:true,
//   infinite:false,
//   verticalSwiping:true,
//   dots: true,
//   width:912,
//   height:250,
//   autoplay:true,
//   waitForAnimate:true,
//   cssEase: 'ease',
//   autoplaySpeed:4000,
//   speed: 800,
//   slide: "div",
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows:false,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         width: 768,
//         height: 380,
//         slide: "div",
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 320,
//       settings: {
//         width: 320,
//         height: 384,
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
//   ]
// });

$(".news_slick_slider").slick((_$$slick = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true
}, _defineProperty(_$$slick, "dots", true), _defineProperty(_$$slick, "prevArrow", $('.prev_arrow_button')), _defineProperty(_$$slick, "nextArrow", $('.next_arrow_button')), _defineProperty(_$$slick, "responsive", [(_ref2 = {
  breakpoint: 980,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 1
  }
}, _defineProperty(_ref2, "breakpoint", 700), _defineProperty(_ref2, "settings", {
  slidesToShow: 1,
  slidesToScroll: 1
}), _ref2)]), _$$slick)); // #endregion
// #region MAP

var map = L.map('map_wrapper').setView([40.683471, -73.903071], 13);
var customMarker = L.icon({
  iconUrl: './assets/images/marker.png',
  //shadowUrl: 'leaf-shadow.png',
  iconSize: [80, 80],
  // size of the icon
  //shadowSize:   [50, 64], // size of the shadow
  iconAnchor: [40, -73],
  // point of the icon which will correspond to marker's location
  //shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor

});
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
}).addTo(map);
L.marker([40.683471, -73.903071], {
  icon: customMarker
}).addTo(map).openPopup();
var markHK = L.marker([22.313208922495647, 114.17263361075162], {
  icon: customMarker
}).addTo(map).bindPopup("Hong Kong").openPopup([22.313208922495647, 114.17263361075162]);
var markNY = L.marker([40.78159296396248, -73.96915881456673], {
  icon: customMarker
}).addTo(map).bindPopup("New-York").openPopup([40.78159296396248, -73.96915881456673]); // #endregion
// #region Gallery

$jQuerry(document).ready(function ($) {
  Fancybox.bind(document.getElementById("gallery-wrap"), "[data-fancybox]", {// Your custom options
  });
}); // #endregion
// #region valide form

var EMAIL_MIN_LENGTH = 5;

function checkEmailLenght() {
  var valueLenght = window.inputEmail.value.length;
  var diff = valueLenght < EMAIL_MIN_LENGTH ? EMAIL_MIN_LENGTH - valueLenght : 0;

  if (diff) {
    window.emailDiffCount.textContent = diff;
    window.emailLenghtHelp.classList.remove('d-none');
  } else {
    window.emailLenghtHelp.classList.add('d-none');
  }
}

;
window.inputEmail.addEventListener('input', checkEmailLenght);
document.addEventListener('DOMContentLoaded', checkEmailLenght); // #endregion