"use strict";

var footerSlider = document.querySelector('.footerSlider');
var allSlides = document.querySelectorAll('.footerSlide');
var slideWidth = parseInt(getComputedStyle(allSlides[0]).width);
var bgnow = 0;
var lastBg = allSlides.length;

function nextBg() {
  bgnow < allSlides.length - 1 ? bgnow++ : bgnow;
  footerSlider.style.transform = "translateX(-".concat(bgnow * slideWidth, "px)");
  bgnow === 4 ? bgnow = 0 : bgnow;
}

document.querySelector('.footerSlider').addEventListener('click', nextBg); // let mouseHere = footerSlider.pageX 
// function cursorLocation(event){
//  mouseX = event.clientX;
//  let mouseX=0;
// }
// document.querySelector('.footerSlider').addEventListener('mousemove', cursorLocation);

var bgToChange = document.querySelector('.latestNews').style.background;
var gradient1 = 126;
var gradient2 = 85;

function changeGradient() {
  gradient1 + 15;
  gradient2 += 15;
  gradient1 > 250 ? gradient1 = 26 : gradient1;
  gradient1 > 150 ? gradient2 = 86 : gradient2;
  document.querySelector('.latestNews').style.background = "linear-gradient(251deg, rgb(".concat(gradient1, ", 90, 255) -2.19%, rgb(").concat(gradient2, ", 183, 255) 103.21%)");
}

document.querySelector('.latestNews').addEventListener('click', changeGradient);