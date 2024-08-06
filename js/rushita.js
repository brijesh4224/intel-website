document.addEventListener('DOMContentLoaded', function() {
    const scrollMenu = document.getElementById('scrollMenu');
    const scrollMenuOffset = scrollMenu.offsetTop;
    const menuItems = document.querySelectorAll('.k_item a');

    function setActiveTab() {
        const fromTop = window.scrollY;

        menuItems.forEach(link => {
            const section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > scrollMenuOffset) {
            scrollMenu.classList.add('fixed');
        } else {
            scrollMenu.classList.remove('fixed');
        }

        setActiveTab();
    });
    setActiveTab();
});

function playVideo() {
    var video = document.getElementById('myVideo');
    var playIcon = document.querySelector('.play-icon');

    video.play();
    playIcon.style.display = 'none';

    video.addEventListener('pause', function () {
        playIcon.style.display = 'block';
    });

    video.addEventListener('play', function () {
        playIcon.style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', function() {
const scrollMenu = document.getElementById('scrollMenu');
const scrollMenuOffset = scrollMenu.offsetTop;

window.addEventListener('scroll', function() {
if (window.pageYOffset > scrollMenuOffset) {
    scrollMenu.classList.add('fixed');
} else {
    scrollMenu.classList.remove('fixed');
}
});


document.addEventListener('DOMContentLoaded', function() {
const tabItems = document.querySelectorAll('.k_item a');

tabItems.forEach(item => {
item.addEventListener('click', function(e) {
e.preventDefault();

tabItems.forEach(tab => tab.classList.remove('active'));

this.classList.add('active');

const targetId = this.getAttribute('href');
document.querySelector(targetId).scrollIntoView({behavior: 'smooth'});
});
});


tabItems[0].classList.add('active');
});
});

document.addEventListener('DOMContentLoaded', function () {
    const submenuToggles = document.querySelectorAll('.k_plink');

    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            const submenuId = this.id.replace('-link', '-submenu');
            const submenu = document.getElementById(submenuId);
            const isActive = submenu.classList.contains('active');

            document.querySelectorAll('.k_submenu1').forEach(menu => {
                menu.classList.remove('active');
            });

            document.querySelectorAll('.fa-angle-down').forEach(icon => {
                icon.classList.remove('rotated');
            });

            if (!isActive) {
                submenu.classList.add('active');
                this.querySelector('.fa-angle-up').classList.add('rotated');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const scrollMenu = document.getElementById('scrollMenu');
    const scrollMenuOffset = scrollMenu.offsetTop;
    const menuItems = document.querySelectorAll('.k_item a');

    function setActiveTab() {
        const fromTop = window.scrollY;

        menuItems.forEach(link => {
            const section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > scrollMenuOffset) {
            scrollMenu.classList.add('fixed');
        } else {
            scrollMenu.classList.remove('fixed');
        }

        setActiveTab();
    });
    setActiveTab();
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

  document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.k_menu li a, .k_submenu li a, .k_petamenu li a');

    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            menuItems.forEach(i => i.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');
            if (this.classList.contains('k_submenu-toggle') || this.classList.contains('k_petamenu-toggle')) {
                e.preventDefault();
                this.classList.toggle('active');
                this.nextElementSibling.classList.toggle('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
const stickySection = document.getElementById('k_sticky-section');
const stickyOffset = stickySection.offsetTop;

window.addEventListener('scroll', function() {
if (window.pageYOffset >= stickyOffset) {
    stickySection.classList.add('sticky');
} else {
    stickySection.classList.remove('sticky');
}
});

document.addEventListener('DOMContentLoaded', function() {
const tabButtons = document.querySelectorAll('.k_btn');

tabButtons.forEach(button => {
button.addEventListener('click', function(e) {
    e.preventDefault();
    
    tabButtons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    const tabId = this.getAttribute('data-tab');
    console.log(`Tab ${tabId} clicked`);
});
});
});
});
