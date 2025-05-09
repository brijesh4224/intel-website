document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.VK_ai_navigation')) {
        const nav = document.querySelector('.VK_ai_navigation');
        const navLinks = document.querySelectorAll('.VK_ai_navigation a');
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
                        link.classList.remove('VK_active_link');
                        if (link.getAttribute('href') === `#${section.id}`) {
                            link.classList.add('VK_active_link');

                            // Ensure the active link is visible in the nav bar
                            const navBar = document.querySelector('.VK_ai_nav_bar');
                            const activeLink = document.querySelector('.VK_ai_nav_bar a.VK_active_link');
                            const linkRect = activeLink.getBoundingClientRect();
                            const navBarRect = navBar.getBoundingClientRect();

                            if (linkRect.left < navBarRect.left || linkRect.right > navBarRect.right) {
                                activeLink.scrollIntoView({
                                    inline: 'center',
                                    behavior: 'smooth'
                                });
                            }
                        }
                    });
                }
            });
        });
    }
});




function showchoose(x) {
    var value = document.getElementsByClassName('hide');
  if (x == 1) {
    for (var j = 0; j < value.length; j++) {
        value[j].classList.remove('d-none');
    }
    var data = document.getElementById('showmore');
    data.classList.add('d-none');
    var data1 = document.getElementById('showless');
    data1.classList.remove('d-none')
  }
  if (x == 2) {
    for (var j = 0; j < value.length; j++) {
        value[j].classList.add('d-none');
    }
    var data = document.getElementById('showmore');
    data.classList.remove('d-none');
    var data1 = document.getElementById('showless');
    data1.classList.add('d-none')
  }
  if (x == 3) {
    for (var j = 0; j < value.length; j++) {
        value[j].classList.remove('d-none');
    }
    var data = document.getElementById('showmore');
    data.classList.add('d-none');
    var data1 = document.getElementById('showless');
    data1.classList.remove('d-none')
  }
  if (x == 4) {
    for (var j = 0; j < value.length; j++) {
        value[j].classList.add('d-none');
    }
    var data = document.getElementById('showmore');
    data.classList.remove('d-none');
    var data1 = document.getElementById('showless');
    data1.classList.add('d-none')
  }
}
