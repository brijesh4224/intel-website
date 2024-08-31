document.addEventListener('DOMContentLoaded', function () {
    const cardContainers = document.querySelectorAll('.v_card-container');
    const v_showMoreBtn = document.getElementById('v_showMoreBtn');
    let isExpanded = false;

    function toggleCards() {
        cardContainers.forEach((container, index) => {
            if (index >= 2) {
                container.classList.toggle('visible');
            }
        });

        isExpanded = !isExpanded;
        v_showMoreBtn.textContent = isExpanded ? 'Show more' : 'Show less';
    }

    v_showMoreBtn.addEventListener('click', toggleCards);

    // Initial setup for mobile view
    if (window.innerWidth <= 320) {
        toggleCards();
    }

    // Handle window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth <= 320) {
            if (!isExpanded) {
                toggleCards();
            }
        } else {
            cardContainers.forEach(container => container.classList.add('visible'));
        }
    });
});