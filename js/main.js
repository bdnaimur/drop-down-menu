$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        // stagePadding: 80,
        loop:true,
        margin:15,
        nav:true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
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
