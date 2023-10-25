 

let footerSlider = document.querySelector('.footerSlider');
let x = 0;
const allSlides = document.querySelectorAll('.footerSlide');

const slideWidth = parseInt(getComputedStyle(allSlides[0]).width);
 let bgnow=0;
 let lastBg=allSlides.length;
 let currentWidth=0;
 let minusWidth=0;
 
function nextBg(){
  bgnow < allSlides.length-1 ? bgnow++ : bgnow;
  minusWidth=((bgnow)-(bgnow-1))*slideWidth;

  
  footerSlider.style.transform = `translateX(-${bgnow * slideWidth}px)`;
  currentWidth=bgnow*slideWidth;
  // bgnow === 4? bgnow=-1:bgnow;
  
}
function prevBg(){
  bgnow>0?bgnow--: bgnow;
  footerSlider.style.transform=`translateX(-${currentWidth-minusWidth}px`;
}
document.querySelector('.footerSlider').onmousemove = function(event) {
 
  console.log(event);  
  x = event.offsetX;
 
}
 
function slideBg(){
  x<window.innerWidth/2?prevBg() :nextBg();
 }
document.querySelector('.footerSlider').addEventListener('click', slideBg);
// let mouseHere = footerSlider.pageX 
// function cursorLocation(event){
//  mouseX = event.clientX;
//  let mouseX=0;
// }

// document.querySelector('.footerSlider').addEventListener('mousemove', cursorLocation);

let bgToChange = document.querySelector('.latestNews').style.background;
let gradient1 = 126;
let gradient2 =85;
function changeGradient(){
  gradient1 +15;
  gradient2+=15;
  gradient1>250? gradient1=26:gradient1;
  gradient1>150? gradient2=86:gradient2;
  document.querySelector('.latestNews').style.background=`linear-gradient(251deg, rgb(${gradient1}, 90, 255) -2.19%, rgb(${gradient2}, 183, 255) 103.21%)`;

  
}
document.querySelector('.latestNews').addEventListener('click', changeGradient);