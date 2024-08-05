


$(document).ready(function(){
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
    

    
    // Call the function on load and resize
    toggleCarousel();
    $(window).resize(toggleCarousel);
});
document.addEventListener('DOMContentLoaded', function() {
    var productInfoLink = document.getElementById('productInfoLink');
    var productInfoSection = document.getElementById('productInfoSection');
  
    productInfoLink.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default link behavior
      
      // Toggle the visibility of the section
      if (document.getElementById('productInfoSection').style.display !== 'none') {
        console.log('Product Information section is open');
      } else {
        console.log('Product Information section is closed');
      }
    });
  });