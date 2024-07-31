// <!-- ***********  Mini Navbar   *********     -->

document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector('.VK_ai_navigation')) {
        var nav = document.querySelector('.VK_ai_navigation');
        var navOffset = nav.offsetTop;

        window.addEventListener('scroll', function () {
            if (window.pageYOffset >= navOffset) {
                nav.classList.add('VK_sticky_nav_bar');
            } else {
                nav.classList.remove('VK_sticky_nav_bar');
            }
        });

        var navLinks = document.querySelectorAll('.VK_ai_nav_bar li a');

        // Set the default active link
        var defaultActiveLink = document.querySelector('.VK_ai_nav_bar li a[href="#VK_cloud_product"]');
        if (defaultActiveLink) {
            defaultActiveLink.classList.add('VK_active_link');
        }

        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.forEach(function (navLink) {
                    navLink.classList.remove('VK_active_link');
                });
                this.classList.add('VK_active_link');
            });
        });

        var sections = document.querySelectorAll('section');
        var observerOptions = {
            root: null,
            rootMargin: '0px 0px -80% 0px', // Adjust this margin to control when the link becomes active
            threshold: 0
        };

        var observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    navLinks.forEach(function (navLink) {
                        navLink.classList.remove('VK_active_link');
                        if (navLink.getAttribute('href').substring(1) === entry.target.id) {
                            navLink.classList.add('VK_active_link');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(function (section) {
            observer.observe(section);
        });
    }
});





// <!-- ***********  Popup   *********     -->
var modal = document.getElementById("myModal");

var img = document.getElementById("mainImg");
var icon = document.getElementById("myIcon");

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

icon.onclick = function() {
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}


 document.getElementById('show-more-btn').addEventListener('click', function() {
    var thirdCard = document.getElementById('third-card');
    if (thirdCard.style.display === 'none' || thirdCard.style.display === '') {
        thirdCard.style.display = 'block';
        this.textContent = 'Show Less';
    } else {
        thirdCard.style.display = 'none';
        this.textContent = 'Show More';
    }
});