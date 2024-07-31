document.addEventListener('DOMContentLoaded', function() {
    const playIcon = document.getElementById('playIcon');
    const video = document.getElementById('myVideo');
    const thumbnailImg = document.querySelector('.video-container img');
  
    playIcon.addEventListener('click', function() {
      video.style.display = 'block';
      thumbnailImg.style.display = 'none';
      playIcon.style.display = 'none';
      video.play();
    });
  });

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        mouseDrag:false,
        responsive: {
            0: {
                items: 1
            },
            425:{
                items:2
            },
            768: {
                items: 3
            },
           
            1024: {
                items: 4
            },
           1440:{
                items:6
            },
        }
    })
});

// Optional JavaScript to enable smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//java script to owl caroual-two
$(document).ready(function(){
    $('.carousel-thumbnails img').click(function(){
        $('.carousel-thumbnails img').removeClass('active');
        $(this).addClass('active');
    });

    $('#carouselExampleIndicators').on('slid.bs.carousel', function () {
        var index = $('.carousel-item.active').index();
        $('.carousel-thumbnails img').removeClass('active');
        $('.carousel-thumbnails img').eq(index).addClass('active');
    });
});