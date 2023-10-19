"use strict";

// #region Sliders
$('.motto_wrapp').slick({
  dotsClass: 'slick-dots hero__dots',
  vertical: true,
  infinite: false,
  verticalSwiping: true,
  dots: true,
  width: 912,
  height: 250,
  autoplay: true,
  waitForAnimate: true,
  cssEase: 'ease',
  autoplaySpeed: 4000,
  speed: 800,
  slide: "div",
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  responsive: [{
    breakpoint: 768,
    settings: {
      width: 768,
      height: 380,
      slide: "div",
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 320,
    settings: {
      width: 320,
      height: 384,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  } // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
});
$('.news_slider_wrapp').slick({
  prevArrow: document.querySelector('.prev_arrow_button'),
  nextArrow: document.querySelector('.next_arrow_button'),
  dotsClass: 'slick-dots news__dots',
  infinite: true,
  verticalSwiping: true,
  dots: true,
  width: 1600,
  height: 514,
  centerPadding: '30px',
  autoplay: true,
  waitForAnimate: false,
  cssEase: 'ease',
  autoplaySpeed: 4000,
  speed: 900,
  slide: "div",
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      width: 768,
      height: 380,
      slide: "div",
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 320,
    settings: {
      width: 320,
      height: 384,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  } // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
}); // #endregion
// #region MAP

var marker = L.icon({
  iconUrl: './assets/icons/marker-icon.png',
  iconSize: [106, 106],
  shadowSize: [106, 106],
  iconAnchor: [22, 94],
  shadowAnchor: [22, 94],
  popupAnchor: [-3, -76]
});
var map = L.map('map_wrapper').setView([40.683471, -73.903071], 13);
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
}).addTo(map);
L.marker([[40.683471, -73.903071]]).addTo(map).bindPopup('marker').openPopup(); // #endregion