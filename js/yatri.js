$(".y_box") .click (function () {
  $ (".y_box") .removeClass ("y_active");
  $ (this) .addClass ("y_active");
});


// modes change 
document.addEventListener('DOMContentLoaded', (event) => {
    const modeToggle = document.getElementById('modeToggle');
    const modeImage = modeToggle.querySelector('img');
    
    modeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            modeImage.src = '/img/yatri_img/moon.svg';
        } else {
            modeImage.src = '/img/yatri_img/sun1.svg';
        }
    });
  });

  $('.tab a').on('click', function (e) {
  
    e.preventDefault();
    
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    
    target = $(this).attr('href');
  
    $('.tab-content > div').not(target).hide();
    
    $(target).fadeIn(800);
    
  });


  
// log in page js start 

$('#form').find('input, textarea').on('keyup blur focus', function (e) {
  
    var $this = $(this),
        label = $this.prev('label');
  
        if (e.type === 'keyup') {
              if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
      } else if (e.type === 'blur') {
          if( $this.val() === '' ) {
              label.removeClass('active highlight'); 
              } else {
              label.removeClass('highlight');   
              }   
      } else if (e.type === 'focus') {
        
        if( $this.val() === '' ) {
              label.removeClass('highlight'); 
              } 
        else if( $this.val() !== '' ) {
              label.addClass('highlight');
              }
      }
  
  });

  // filter offcanvas 

document.addEventListener('DOMContentLoaded', function() {
    var offcanvasToggle = document.getElementById('offcanvasToggle');
    var offcanvasElement = document.getElementById('staticBackdrop');

    offcanvasElement.addEventListener('show.bs.offcanvas', function () {
        offcanvasToggle.innerHTML = '<i class="fas fa-times"></i>';
    });

    offcanvasElement.addEventListener('hidden.bs.offcanvas', function () {
        offcanvasToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

document.addEventListener('DOMContentLoaded', function() {
  var y_languageOffcanvas_icon = document.getElementById('y_languageOffcanvas_icon');
  var offcanvasElement = document.getElementById('y_offcanvasExample');
  var offcanvasInstance = new bootstrap.Offcanvas(offcanvasElement);

  y_languageOffcanvas_icon.addEventListener('click', function() {
    if (offcanvasElement.classList.contains('show')) {
      offcanvasInstance.hide();
    } else {
      offcanvasInstance.show();
    }
  });

  offcanvasElement.addEventListener('show.bs.offcanvas', function () {
    y_languageOffcanvas_icon.classList.remove('fa-earth-europe');
    y_languageOffcanvas_icon.classList.add('fa-globe');
  });

  offcanvasElement.addEventListener('hidden.bs.offcanvas', function () {
    y_languageOffcanvas_icon.classList.remove('fa-globe');
    y_languageOffcanvas_icon.classList.add('fa-earth-europe');
  });
});

// search offcanvas start 
document.addEventListener('DOMContentLoaded', function() {
    const openCanvas = document.getElementById('openCanvas');
    const offCanvas = document.getElementById('offCanvas');
    const closeCanvas = document.getElementById('closeCanvas');
  
    openCanvas.addEventListener('click', function(event) {
      event.preventDefault();
      offCanvas.classList.add('show');
    });
  
    closeCanvas.addEventListener('click', function() {
      offCanvas.classList.remove('show');
    });
  });
 
// search offcanvas end 

// seach input click show button start 
const searchInput = document.getElementById('searchInput');
const searchIcon = document.getElementById('searchIcon');

searchInput.addEventListener('input', function() {
  if (this.value.trim() !== '') {
    searchIcon.style.display = 'block';
  } else {
    searchIcon.style.display = 'none';
  }
});
// seach input click show button end 

document.addEventListener('DOMContentLoaded', function() {
    const menuCheckboxes = document.querySelectorAll('.menu-checkbox');

    menuCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('click', function() {
            // Uncheck other checkboxes when one is checked
            menuCheckboxes.forEach(function(cb) {
                if (cb !== checkbox) {
                    cb.checked = false;
                }
            });
        });
    });
});


// owl carousel for home 

$('.m_ai_hpCarousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  responsive: {
      0: {
          items: 1
      }
  }
});
