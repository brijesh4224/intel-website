// <!-- ***********  Mini Navbar   *********     -->

document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.VK_client_app_navigation');
    const navLinks = document.querySelectorAll('.VK_ai_nav_bar a');
    const sections = document.querySelectorAll('section[id]');
    let navOffset = nav.offsetTop;

    // Add smooth scrolling to all links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Sticky Navigation
    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= navOffset) {
            nav.classList.add('VK_sticky_nav_bar');
        } else {
            nav.classList.remove('VK_sticky_nav_bar');
        }

        // Section highlighting
        sections.forEach(section => {
            const sectionTop = section.offsetTop - nav.clientHeight;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${section.id}`) {
                        link.classList.add('active');
                        
                        // Ensure the active link is visible in the nav bar
                        const navBar = document.querySelector('.VK_ai_nav_bar');
                        const activeLink = document.querySelector('.VK_ai_nav_bar a.active');
                        const linkRect = activeLink.getBoundingClientRect();
                        const navBarRect = navBar.getBoundingClientRect();

                        if (linkRect.left < navBarRect.left || linkRect.right > navBarRect.right) {
                            activeLink.scrollIntoView({ inline: 'center', behavior: 'smooth' });
                        }
                    }
                });
            }
        });
    });
});





// <!-- *********** HPC Use Cases *********     -->
document.getElementById('show-more-btn').addEventListener('click', function() {
    var myCard = document.getElementById('my-card');
    var icon = document.getElementById('toggle-icon');
    if (myCard.classList.contains('ds_use-hidden')) {
        myCard.classList.remove('ds_use-hidden');
        myCard.classList.add('ds_use-show');
        this.textContent = 'Show Less ';
        icon.className = 'fa-solid fa-angle-up';
        this.appendChild(icon);
    } else {
        myCard.classList.remove('ds_use-show');
        myCard.classList.add('ds_use-hidden');
        this.textContent = 'Show More ';
        icon.className = 'fa-solid fa-angle-down';
        this.appendChild(icon);
    }
});


// <!-- *********** More Resources *********     -->
document.getElementById('reso-more-btn').addEventListener('click', function() {
    var myCard = document.getElementById('ds_reso-show-hide');
    var icon = document.getElementById('toggle-icon');
    if (myCard.classList.contains('ds_use-hidden')) {
        myCard.classList.remove('ds_use-hidden');
        myCard.classList.add('ds_use-show');
        this.textContent = 'Show Less ';
        icon.className = 'fa-solid fa-angle-up';
        this.appendChild(icon);
    } else {
        myCard.classList.remove('ds_use-show');
        myCard.classList.add('ds_use-hidden');
        this.textContent = 'Show More ';
        icon.className = 'fa-solid fa-angle-down';
        this.appendChild(icon);
    }
});