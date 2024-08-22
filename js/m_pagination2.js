const cardsData = [
    {
        title: "New PC? Learn How-to Transfer Files from PC to PC - Transferring Data...",
        description: "Transferring files from PC to PC can be done quickly and securely without losing data. You can manually perform the transfer yourself, or use a variety of systems to help you with the task.",
        image: "/img/Monika_img/rtt_6.jpeg",
        category: "Before you buy",
        date: "2024-08-13"
    },
    {
        title: "How to Send and Receive Text Messages from Your PC – Intel",
        description: "Learn different methods for sending and receiving text messages from your computer to manage daily conversations within a single device.",
        image: "/img/Monika_img/rtt_7.jpg",
        category: "Creating",
        date: "2024-08-13"
    },
    {
        title: "How to Switch from Mac to Windows PC – Intel",
        description: "Making the switch from Mac to PC? Here is guidance on how to convert and transfer your files as well as set up your new experience.",
        image: "/img/Monika_img/rtt_8.jpeg",
        category: "Tips & Tricks",
        date: "2024-08-13"
    },
    {
        title: "How to Transfer Photos from an iPhone to a PC – Intel",
        description: "Learn how to wirelessly transfer photos from an iPhone to a PC.",
        image: "/img/Monika_img/rtt_9.jpg",
        category: "Gaming",
        date: "2024-08-13"
    },
    {
        title: "How to Connect Laptop to TV: HDMI Port Tips and Tricks | Intel",
        description: "Whether you want to cut the cable or just stream your vacation videos, it’s easy to connect your laptop to your TV in one of these four ways. Learn more about your Laptop's HDMI Port and its uses.",
        image: "/img/Monika_img/rtt_10.jpeg",
        category: "Gaming",
        date: "2024-08-13"
    },
    {
        title: "How to Download Music Files",
        description: "Intel explains how to download new music directly onto your computer or other device and how to use a cloud-based or streaming service.",
        image: "/img/Monika_img/rtt_11.jpeg",
        category: "Entertainment",
        date: "2024-08-13"
    },
    {
        title: "Best Laptop for College- How to Choose",
        description: "Get advice on how to choose the best laptop for college and all the programs and applications you'll use while helping you relax with games and more.",
        image: "/img/Monika_img/rtt_12.jpeg",
        category: "Mobility",
        date: "2024-08-13"
    },
    {
        title: "Best Laptop for Video Editing",
        description: "Choosing the best laptop for video editing starts with understanding your current and future needs.",
        image: "/img/Monika_img/rtt_13.jpeg",
        category: "PC Performance",
        date: "2024-08-13"
    },
    {
        title: "Choose the Best Laptop for Music Production - Intel",
        description: "How to choose the best laptop for music production, with the performance and capabilities you need to make your music dreams come true.",
        image: "/img/Monika_img/rtt_14.jpeg",
        category: "PC Security",
        date: "2024-08-13"
    },
    {
        title: "PC for Graphic Design—Intel",
        description: "Discover how to select a PC for graphic designers with Intel’s expert advice to help you get the best experiences for creative software.",
        image: "/img/Monika_img/rtt_15.jpeg",
        category: "Desktop",
        date: "2024-08-13"
    },
    {
        title: "2.4 GHz vs. 5 GHz vs. 6 GHz: What's the Difference? - Intel",
        description: "We examine the differences between 2.4 GHz, 5 GHz, and 6 GHz frequencies and which is best suited to different scenarios.",
        image: "/img/Monika_img/rtt_16.jpg",
        category: "Laptop",
        date: "2024-08-13"
    },
    {
        title: "How Does Bluetooth® Technology Work? - Intel",
        description: "Find out how Bluetooth® devices communicate with each other and how Bluetooth technology differs from Wi-Fi.",
        image: "/img/Monika_img/rtt_17.jpg",
        category: "Laptop",
        date: "2024-08-13"
    },
    
];
const cardsPerPage = 6; // Number of cards to display per page
let currentPage = 1; // Starting page
const totalPages = Math.ceil(cardsData.length / cardsPerPage); // Total number of pages

function updateResultsCount(data) {
    const countElement = document.querySelector('.m_rtt_results-count');
    countElement.textContent = `${data.length} result${data.length !== 1 ? 's' : ''}`;
    const countElement2 = document.querySelector('.m_rtt_results-count2');
    countElement2.textContent = `${data.length} result${data.length !== 1 ? 's' : ''}`;
}

// Function to render cards based on the current page
function renderPaginatedCards(page) {
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const paginatedData = cardsData.slice(startIndex, endIndex);

    updateResultsCount(cardsData); // Update the results count based on the filtered data
    renderCards(paginatedData);

    // Update pagination input and total pages display
    document.querySelector('.m_rtt_page-input').value = page;
    document.querySelector('.m_rtt_total-pages').textContent = `of ${totalPages}`;
}

// Event listeners for pagination controls
document.querySelector('.m_rtt_prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderPaginatedCards(currentPage);
    }
});

document.querySelector('.m_rtt_next-page').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        renderPaginatedCards(currentPage);
    }
});

document.querySelector('.m_rtt_page-input').addEventListener('input', (event) => {
    let page = parseInt(event.target.value);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderPaginatedCards(currentPage);
    } else {
        event.target.value = currentPage; // Revert to current page if out of range
    }
});

// Initial render
renderPaginatedCards(currentPage);

let viewAllMode = false; // Flag to determine if "View All" mode is active

function renderCards(data) {
    const container = document.querySelector('.m_rtt_card-container');
    container.innerHTML = '';
    data.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'm_rtt_card';
        cardElement.innerHTML = `
        <img src="${card.image}" alt="${card.title}" />
        <h3 class="m_rtt_caHe m_underline m_color">${card.title}</h3>
        <p>${card.description}</p>
    `;
        container.appendChild(cardElement);
    });
}

function showAllCards() {
    viewAllMode = true;
    renderCards(cardsData); // Render all cards
    document.querySelector('.m_rtt_pagination').style.display = 'none'; // Hide pagination
    document.querySelector('.m_rtt_viewAll').style.display = 'none'; // Hide "View All"
    document.querySelector('.m_rtt_viewless').style.display = 'block'; // Show "View Less"
}

function showPaginatedCards() {
    viewAllMode = false;
    renderPaginatedCards(currentPage); // Render cards based on current page
    document.querySelector('.m_rtt_pagination').style.display = 'flex'; // Show pagination
    document.querySelector('.m_rtt_viewAll').style.display = 'block'; // Show "View All"
    document.querySelector('.m_rtt_viewless').style.display = 'none'; // Hide "View Less"
}

document.querySelector('.m_rtt_viewAll').addEventListener('click', showAllCards);
document.querySelector('.m_rtt_viewless').addEventListener('click', showPaginatedCards);

document.querySelectorAll('.m_rtt_accordion-button').forEach(button => {
    button.addEventListener('click', function () {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});

document.querySelector('.m_rtt_sort').addEventListener('change', function () {
    sortCards(this.value);
});

document.querySelector('.m_rtt_search').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const filteredCards = cardsData.filter(card => card.title.toLowerCase().includes(searchTerm));
    renderCards(filteredCards);
});

document.querySelectorAll('.m_rtt_filter input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', filterCards);
});

// Initial render based on the default mode
if (viewAllMode) {
    showAllCards();
} else {
    renderPaginatedCards(currentPage);
}

// Filtering and sorting functions (unchanged)
function filterCards() {
    const selectedFilters = Array.from(document.querySelectorAll('.m_rtt_filter input[type="checkbox"]:checked')).map(input => input.value);
    const filteredCards = cardsData.filter(card => selectedFilters.includes(card.category) || selectedFilters.length === 0);
    renderCards(filteredCards);
}

function sortCards(order) {
    const sortedCards = [...cardsData].sort((a, b) => {
        if (order === 'az') return a.title.localeCompare(b.title);
        if (order === 'za') return b.title.localeCompare(a.title);
        if (order === 'newest') return new Date(b.date) - new Date(a.date);
        if (order === 'oldest') return new Date(a.date) - new Date(b.date);
    });
    renderCards(sortedCards);
}

// Show the off-canvas filter when the button is clicked
document.querySelector('.m_rtt_resFil').addEventListener('click', () => {
    document.querySelector('.m_rtt_filter').classList.add('show');
});

// Hide the off-canvas filter and apply filters when the close button is clicked
document.querySelector('.m_rtt_filter .m_rtt_close-btn').addEventListener('click', () => {
    const selectedFilters = Array.from(document.querySelectorAll('.m_rtt_filter input[type="checkbox"]:checked')).map(input => input.value);
    const filteredCards = cardsData.filter(card => selectedFilters.includes(card.category) || selectedFilters.length === 0);
    renderCards(filteredCards);
    document.querySelector('.m_rtt_filter').classList.remove('show');
});