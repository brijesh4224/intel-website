// (Intel Geti Platform -> (Home)) Trusted by
$(document).ready(function(){

    $('.owl-carousel.mv_first_slider').owlCarousel({
        loop:true,
        margin:10,
        // nav:true,
        // center:true,

        // autoplay:true,
        // autoplayTimeout:2000,
        // autoplayHoverPause:true,
        // animateIn:'animate__fadeIn',
        // animateOut:'animate__fadeOut',

        responsive:{
            320:{
                items:2,
                dots:false,
            },
            375:{
                items:2,
                dots:false,
            },
            425:{
                items:2,
                dots:false,
            },
            768:{
                items:3,
                dots:false
            },
            1024:{
                items:4,
                dots:false
            },
            1199:{
                items:4,
                dots:false
            },
            1440:{
                items:5,
                dots:false
            }
        }
    })

});

// (Intel Geti Platform -> (Home)) Testimonials
$(document).ready(function(){

    $('.owl-carousel.mv_spark_card_carousel').owlCarousel({
        loop:true,
        margin:10,
        // nav:true,
        // center:true,

        // autoplay:true,
        // autoplayTimeout:2000,
        // autoplayHoverPause:true,
        // animateIn:'animate__fadeIn',
        // animateOut:'animate__fadeOut',

        responsive:{
            320:{
                items:1,
                dots:false,
            },
            375:{
                items:1,
                dots:false,
            },
            425:{
                items:1,
                dots:false,
            },
            768:{
                items:2,
                dots:false
            },
            1024:{
                items:3,
                dots:false
            },
            1199:{
                items:3,
                dots:false
            },
            1440:{
                items:3,
                dots:false
            }
        }
    })

});

// (Intel Geti Platform) Technology Briefs
// (Intel Geti Platform) Case Studies
$(document).ready(function(){

    $('.owl-carousel.mv_spark_card_featuredcontent').owlCarousel({
        loop:false,
        margin:10,
        // nav:true,
        // center:true,

        // autoplay:true,
        // autoplayTimeout:2000,
        // autoplayHoverPause:true,
        // animateIn:'animate__fadeIn',
        // animateOut:'animate__fadeOut',

        responsive:{
            0:{
                items:1,
                dots:false
            }
        }
    })

});

// (Intel Geti Platform) Blog
// (Intel Geti Platform) Videos
$(document).ready(function(){

    $('.owl-carousel.mv_spark_card_featuredblog').owlCarousel({
        loop:true,
        margin:10,
        // nav:true,
        // center:true,

        // autoplay:true,
        // autoplayTimeout:2000,
        // autoplayHoverPause:true,
        // animateIn:'animate__fadeIn',
        // animateOut:'animate__fadeOut',

        responsive:{
            0:{
                items:1,
                dots:false
            }
        }
    })

});

// (Intel Data Center GPU Max Series -> (Intel Data Center GPU Max Series Overview)) Maximize Impact
$(document).ready(function(){

    $('.owl-carousel.mv_maximize_carousel').owlCarousel({
        loop:true,
        margin:10,
        // nav:true,
        // center:true,

        // autoplay:true,
        // autoplayTimeout:2000,
        // autoplayHoverPause:true,
        // animateIn:'animate__fadeIn',
        // animateOut:'animate__fadeOut',

        responsive:{
            320:{
                items:1,
                dots:false,
            },
            375:{
                items:1,
                dots:false,
            },
            425:{
                items:1,
                dots:false,
            },
            767:{
                items:1,
                dots:false
            }
        }
    })

});

// (Ai Accelerator -> (Siemens Taboola)) Media Slider
$(document).ready(function(){
    var owl = $('.mv_media_slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        smartSpeed: 500
    });

    $('.mv_media_image_button a').click(function(event) {
        event.preventDefault();
        
        $('.mv_media_image_button a').removeClass('active');
        $(this).addClass('active');
        
        var index = $(this).index();
        
        owl.trigger('to.owl.carousel', [index, 300]);
    });
});