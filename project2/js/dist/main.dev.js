"use strict";

var _ref, _ref2, _$$slick;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region Menu
function toggleMenu(e) {
  document.querySelector('.head_nav').classList.toggle('menu_open');
  document.querySelector('.hamburger').classList.toggle('active');
  document.querySelector('.header').classList.toggle('open_menu');
}

var e = document.querySelector('.hamburger');
e.addEventListener('click', toggleMenu, false); // #endregion
// #region Sliders

var swiper = new Swiper('.swiper', (_ref = {
  setWrapperSize: true,
  autoHeight: true,
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
}), _ref));
$(".news_slick_slider").slick((_$$slick = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true
}, _defineProperty(_$$slick, "dots", true), _defineProperty(_$$slick, "prevArrow", $('.prev_arrow_button')), _defineProperty(_$$slick, "nextArrow", $('.next_arrow_button')), _defineProperty(_$$slick, "responsive", [(_ref2 = {
  breakpoint: 989,
  settings: {
    centerPadding: 50,
    autoplay: false,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1
  }
}, _defineProperty(_ref2, "breakpoint", 700), _defineProperty(_ref2, "settings", {
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false
}), _ref2)]), _$$slick)); // #endregion
// #region MAP

var map = L.map('map_wrapper').setView([22.313208922495647, 114.17263361075162], 13);
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
var mark = L.marker([22.313208922495647, 114.17263361075162], {
  icon: customMarker
}).addTo(map).bindPopup("residence in Kowloon").openPopup([22.313208922495647, 114.17263361075162]); // #endregion
// #region Gallery

Fancybox.bind(document.getElementById("gallery-wrap"), "[data-fancybox]", {// Your custom options
}); // #endregion
// #region valide form

var EMAIL_MIN_LENGTH = 6;

function checkEmailLenght() {
  var valueLenght = window.inpEmail.value.length;
  var diff = valueLenght < EMAIL_MIN_LENGTH ? EMAIL_MIN_LENGTH - valueLenght : 0;

  if (diff) {
    window.emailDiffCount.textContent = diff;
    window.emailLenghtHelp.classList.remove('d-none');
  } else {
    window.emailLenghtHelp.classList.add('d-none');
  }
}

;
window.inpEmail.addEventListener('input', checkEmailLenght);
document.addEventListener('DOMContentLoaded', checkEmailLenght); // #endregion

function formSubmit(event) {
  var email, name, apiToken, chatId, text;
  return regeneratorRuntime.async(function formSubmit$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          email = window.inpEmail.value;
          name = window.inpName.value;
          event.preventDefault();

          if (!(!email || !name)) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", false);

        case 5:
          apiToken = "6685344433:AAFe9Yea_lcKqx1dzqTdsWtfcIJus5QMg2U";
          chatId = "-4066219312";
          text = "\n    Email: ".concat(email, "    \n    Name: ").concat(name, "\n    ");

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}