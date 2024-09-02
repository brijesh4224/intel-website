//intel foundry vedio play 
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


  //intel foundry vedio play 
document.addEventListener('DOMContentLoaded', function() {
    const playIcon = document.getElementById('playIcona');
    const video = document.getElementById('myVideoa');
    const thumbnailImg = document.querySelector('.video-container img');
  
    playIcon.addEventListener('click', function() {
      video.style.display = 'block';
      thumbnailImg.style.display = 'none';
      playIcon.style.display = 'none';
      video.play();
    });
  });

// intel foundary slider(items)
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


$(document).ready(function () {
    $('#one').owlCarousel({
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
                items:4
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


// form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    var form = event.target;
    var isValid = form.checkValidity();
    if (!isValid) {
      event.preventDefault();
      var errorMessages = form.querySelectorAll('.error-message');
      errorMessages.forEach(function(message) {
        var input = message.previousElementSibling;
        if (!input.checkValidity()) {
          message.style.display = 'block';
        } else {
          message.style.display = 'none';
        }
      });
    }
  });


//coflunt studio change content 
  function showContent(contentId, element) {
    // Hide all content sections
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    // Show the selected content section
    document.getElementById(contentId).classList.add('active');

    // Remove active class from all nav links
    var links = document.querySelectorAll('.nav-link');
    links.forEach(function(link) {
        link.classList.remove('active');
    });

    // Add active class to the clicked nav link
    element.classList.add('active');
}


//drop down show
function toggleDropdown() {
    var ul = document.getElementById("hostRequirements");
    if (ul.style.display === "none") {
        ul.style.display = "block";
    } else {
        ul.style.display = "none";
    }
}



        