let footerSlider = document.querySelector('.footerSlider');

const allSlides = document.querySelectorAll('.footerSlide');
 
const slideWidth = parseInt(getComputedStyle(allSlides[0]).width);
 let bgnow=0;
 let lastBg=allSlides.length;
function nextBg(){
 
  bgnow < allSlides.length-1 ? bgnow++ : bgnow;
  footerSlider.style.transform = `translateX(-${bgnow * slideWidth}px)`;
  bgnow === 4? bgnow=0:bgnow;
}
 
document.querySelector('.footerSlider').addEventListener('click', nextBg);
// function mouseFind(targetFooter){
//   var X = document.getElementById('targetFooter');
//   var Y = document.getElementById('targetFooter');
  
 
//     X.value = targetFooter.pageX;
//     Y.value = targetFooter.pageY;
 
  
//   addEventListener('mousemove', mouseFind, false);
// }