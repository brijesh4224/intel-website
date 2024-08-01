// <!-- ***********  Mini Navbar   *********     -->

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector('.VK_ai_navigation');
    if (!nav) return;

    const navOffset = nav.offsetTop;
    const navLinks = document.querySelectorAll('.VK_ai_nav_bar li a');
    const sections = document.querySelectorAll('section');

    // Function to scroll the nav menu to keep active link visible
    const scrollToActiveNavLink = (activeLink) => {
        const navBar = document.querySelector('.VK_ai_nav_bar');
        const linkOffset = activeLink.offsetLeft;
        const linkWidth = activeLink.offsetWidth;
        const navBarScrollLeft = navBar.scrollLeft;
        const navBarWidth = navBar.offsetWidth;

        if (linkOffset < navBarScrollLeft) {
            navBar.scrollTo({ left: linkOffset, behavior: 'smooth' });
        } else if (linkOffset + linkWidth > navBarScrollLeft + navBarWidth) {
            navBar.scrollTo({ left: linkOffset - navBarWidth + linkWidth, behavior: 'smooth' });
        }
    };

    // Add event listener to window scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= navOffset) {
            nav.classList.add('VK_sticky_nav_bar');
        } else {
            nav.classList.remove('VK_sticky_nav_bar');
        }
    });

    // Set default active link
    const defaultActiveLink = document.querySelector('.VK_ai_nav_bar li a[href="#ds_cloud_product"]');
    if (defaultActiveLink) {
        defaultActiveLink.classList.add('VK_active_link');
        scrollToActiveNavLink(defaultActiveLink);
    }

    // Add event listener to nav links
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.forEach((navLink) => {
                navLink.classList.remove('VK_active_link');
            });
            link.classList.add('VK_active_link');
            scrollToActiveNavLink(link);
            const sectionId = link.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Create IntersectionObserver
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove('VK_active_link');
                    if (navLink.getAttribute('href').substring(1) === entry.target.id) {
                        navLink.classList.add('VK_active_link');
                        scrollToActiveNavLink(navLink);
                    }
                });
            }
        });
    }, observerOptions);

    // Observe sections
    sections.forEach((section) => {
        observer.observe(section);
    });
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