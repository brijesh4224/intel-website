
document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.V_sticky_bar')) {
        const nav = document.querySelector('.V_ptag');
        const navLinks = document.querySelectorAll('.V_sticky_bar a');
        const sections = document.querySelectorAll('section[id]');
        console.log(nav)
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

            // Section highlighting
            sections.forEach(section => {
                const sectionTop = section.offsetTop - nav.clientHeight;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop && window.pageYOffset <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('V_ptag_active');
                        if (link.getAttribute('href') === `#${section.id}`) {
                            link.classList.add('V_ptag_active');

                            // Ensure the active link is visible in the nav bar
                            const navBar = document.querySelector('.V_sticky_bar');
                            const activeLink = document.querySelector('.V_sticky_bar a.V_ptag_active');
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
    }
});








