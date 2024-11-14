document.addEventListener('DOMContentLoaded', function () {
    var db_supportDropdowns = document.querySelectorAll('.db_support_nav_dropdown');

    db_supportDropdowns.forEach(function (db_supportDropdown, index) {
        // Skip the first two dropdown items (index 0 and 1)
        if (index < 2) {
            return;
        }

        var db_supportDropdownLink = db_supportDropdown.querySelector('.db_support_nav_link');
        var db_supportDropdownContent = db_supportDropdown.querySelector('.db_support_nav_dropdown-content');

        db_supportDropdownLink.addEventListener('click', function (event) {
            event.preventDefault();
            if (db_supportDropdownContent.style.display === 'block') {
                db_supportDropdownContent.style.display = 'none';
                db_supportDropdownLink.classList.remove('active');
            } else {
                db_supportDropdowns.forEach(function (otherDropdown) {
                    if (otherDropdown !== db_supportDropdown) {
                        otherDropdown.querySelector('.db_support_nav_dropdown-content').style.display = 'none';
                        otherDropdown.querySelector('.db_support_nav_link').classList.remove('active');
                    }
                });
                db_supportDropdownContent.style.display = 'block';
                db_supportDropdownLink.classList.add('active');
            }
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.db_support_nav_dropdown')) {
            db_supportDropdowns.forEach(function (db_supportDropdown) {
                db_supportDropdown.querySelector('.db_support_nav_dropdown-content').style.display = 'none';
                db_supportDropdown.querySelector('.db_support_nav_link').classList.remove('active');
            });
        }
    });
});


const db_openAccordion = (index) => {
    const accordion = document.getElementsByClassName("db_accordion_item");

    for (let i = 0; i < accordion.length; i++) {
        const content = accordion[i].querySelector(".db_accordion_content");
        const heading = accordion[i].querySelector("div");

        if (index === i) {
            const isOpen = accordion[index].classList.toggle("open");
            accordion[index].classList.toggle("rotate");
            heading.setAttribute("aria-expanded", isOpen);
            if (isOpen) {
                content.style.height = content.scrollHeight + "px";
            } else {
                content.style.height = "0px";
            }
        } else {
            accordion[i].classList.remove("open");
            accordion[i].classList.remove("rotate");
            heading.setAttribute("aria-expanded", "false");
            content.style.height = "0px";
        }
    }
};

document.querySelectorAll('.db_accordion_item div').forEach((heading, index) => {
    heading.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            db_openAccordion(index);
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown-toggle');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function (e) {
            e.stopPropagation();
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.toggle('show');

            // Close other open dropdowns
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== this) {
                    otherDropdown.nextElementSibling.classList.remove('show');
                }
            });
        });
    });

    // Close dropdowns when clicking outside
    window.addEventListener('click', function () {
        dropdowns.forEach(dropdown => {
            dropdown.nextElementSibling.classList.remove('show');
        });
    });
});