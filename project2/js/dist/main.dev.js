"use strict";

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
  infinite: false,
  verticalSwiping: true,
  dots: true,
  width: 1600,
  height: 514,
  centerPadding: '30px',
  autoplay: true,
  waitForAnimate: true,
  cssEase: 'ease',
  autoplaySpeed: 4000,
  speed: 800,
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
});