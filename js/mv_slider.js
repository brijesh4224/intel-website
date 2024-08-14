// (Home)Trusted by
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

// (Home)Testimonials
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

// Technology Briefs
// Case Studies
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

// Blog
// Videos
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