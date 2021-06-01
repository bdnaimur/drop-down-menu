$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        stagePadding: 50,
        loop:true,
        margin:15,
        // nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1400:{
                items:3
            }
        }
    })
  });
