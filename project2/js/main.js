// #region Sliders
$('.motto_wrapp').slick({
  
  dotsClass: 'slick-dots hero__dots',
  vertical:true,
  infinite:false,
  verticalSwiping:true,
  dots: true,
  width:912,
  height:250,
  autoplay:true,
  waitForAnimate:true,
  cssEase: 'ease',
  autoplaySpeed:4000,
  speed: 800,
  slide: "div",
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  responsive: [
    {
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
    },
    
    {
      breakpoint: 320,
      settings: {
        width: 320,
        height: 384,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.news_slider_wrapp').slick({
  prevArrow: document.querySelector('.prev_arrow_button'),
  nextArrow: document.querySelector('.next_arrow_button'),
  dotsClass: 'slick-dots news__dots',
  infinite:true,
  verticalSwiping:true,
  dots: true,
  width:1170,
  height:514,
  centerPadding: '30px',
  autoplay:true,
  waitForAnimate:true,
  cssEase: 'ease',
  autoplaySpeed:4000,
  speed: 900,
  slide: "div",
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:true,
  responsive: [
    {
      breakpoint: 1015,
      settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
      }
  },
  
  {
      breakpoint: 668,
      settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
      }            
    },
    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// #endregion
// #region MAP
 


var map = L.map('map_wrapper').setView([40.683471, -73.903071], 13);
var customMarker = L.icon({
  iconUrl: '/marker.png',
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
L.marker([[40.683471, -73.903071] ]).addTo(map).bindPopup('customMarker').openPopup();
// L.marker([22.313208922495647, 114.17263361075162], {icon:customMarker}).addTo(map).bindPopup("Hong Kong").openPopup();
// L.marker([40.78159296396248, -73.96915881456673], {icon:customMarker}).addTo(map).bindPopup("New-York").openPopup();
// #endregion

// #region Gallery
$jQuerry(document).ready(($)=>{

  Fancybox.bind(document.getElementById("gallery-wrap"), "[data-fancybox]", {
    // Your custom options
  });
})
// #endregion