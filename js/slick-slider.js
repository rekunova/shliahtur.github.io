$(document).ready(function(){
    $('.slick_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        draggable: false,
        swipe:false,
        responsive: [
            {
              breakpoint: 976,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
               
              }
            } 
          ]
    });
  });