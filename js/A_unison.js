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


document.getElementById('show-more-btn').addEventListener('click', function() {
    var myCard = document.getElementById('Accor');
    var icon = document.getElementById('toggle-icon');
    if (myCard.classList.contains('ds_use-hidden')) {
        myCard.classList.remove('ds_use-hidden');
        myCard.classList.add('ds_use-show');
        this.textContent = 'Show Less ';
        icon.className = 'fa-solid fa-angle-up ';
        this.prepend(icon)
    } else {
        myCard.classList.remove('ds_use-show');
        myCard.classList.add('ds_use-hidden');
        this.textContent = 'Show More ';
        icon.className = 'fa-solid fa-angle-down ';
        this.prepend(icon)

    }
});