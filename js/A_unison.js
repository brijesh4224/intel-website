document.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('.v_navlink');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active class from all links
            navLinks.forEach(nav => nav.classList.remove('active'));
            // Add active class to the clicked link
            link.classList.add('active');
        });
    });
});