function scrollToElement(event){
event.preventDefault();
const target = event.target.dataset.href;
const targetElement = document.querySelector(target);
const viewportOffset = targetElement.getBoundingClientRect().top;



if(targetElement){
  window.scrollTo({
    top:viewportOffset,
    behavior:'smooth'
  })
}

}
 