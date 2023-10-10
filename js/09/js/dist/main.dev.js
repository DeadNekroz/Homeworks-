"use strict";

nextArrow: document.querySelector('#my-arrow-next');

prevArrow: document.querySelector('#my-arrow-prev');

$('.hero_slider').slick({
  dots: true,
  height: 700,
  width: 1400,
  infinite: false,
  speed: 500,
  fade: true,
  slide: "div",
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slide: "div",
      cssEase: "linear",
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  } // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
});
$('.product_list').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: true,
  prevArrow: "<img src='../assets/images/products_next_arrow.svg' class='prev' alt='prevArrow'>",
  nextArrow: "<img src='../assets/images/products_next_arrow.svg' class='nexta' alt='nextArrow'>",
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 3
    }
  }, {
    breakpoint: 480,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1
    }
  }]
});
$('.partners_slider').slick({
  rtl: true,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 9,
  slidesToScroll: 1,
  slide: 'div',
  arrows: true,
  prevArrow: "<img src='../assets/images/products_next_arrow.svg' class='prev' alt='prevArrow'>",
  nextArrow: "<img src='../assets/images/products_next_arrow.svg' class='nexta' alt='nextArrow'>",
  responsive: [{
    breakpoint: 1280,
    settings: {
      arrows: true,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 9,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 3
    }
  }, {
    breakpoint: 480,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1
    }
  }]
});