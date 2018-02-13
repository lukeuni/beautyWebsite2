

// scroll function for drop shadow on sticky navbar // 

$(window).scroll(function() {     
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $("#nav").addClass("active");
  }
  else {
    $("#nav").removeClass("active");
  }
});


 $(document).ready(function(){
      $('.slider').bxSlider();
   

    $('.bxslider').bxSlider({
  auto: true,
  autoControls: false,
  stopAutoOnClick: false,
  pager: false,
  responsive: true,
  easing: 'easeInOutQuint',  
  speed: 800,
  startSlide: 0,
  randomStart: false,
  preloadImages: 'visible',
 
        


        
        // TOUCH
    touchEnabled: true,
    oneToOneTouch: true,
    preventDefaultSwipeX: true,
    preventDefaultSwipeY: true,
}); });