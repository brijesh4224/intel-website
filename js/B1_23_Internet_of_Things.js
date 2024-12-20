const cardsData = [
    {
        imgSrc: "/img/brijesh/image579.jpg",
        title: "Intel® Xeon® 6 Processors with E-cores for Networking and Edge",
        description: "Enable edge offerings for an AI-driven world with better performance-per-watt, higher memory bandwidth, and built-in Intel® accelerators.",
        link: "#"
    },
    {
        imgSrc: "/img/brijesh/image580.avif",
        title: "Intel® Core™ Ultra Processors (PS Series)",
        description: "Incredible AI-ready CPU, built-in GPU and NPU enhancements and power efficiency in an LGA package, with the PS Series of Intel Core Ultra processors.",
        link: "#"
    },
    {
        imgSrc: "/img/brijesh/image581.jpg",
        title: "Intel® Core™ Processors (PS Series)",
        description: "Get more graphics and AI performance at the edge in LGA packaging, with the PS Series of Intel Core processors.",
        link: "#"
    },
    {
        imgSrc: "/img/brijesh/image582.avif",
        title: "Intel Atom® Processors x7000RE Series",
        description: "Easily deploy ruggedized deep learning inference and compute for Industry 4.0 capabilities.",
        link: "#"
    },
    {
        imgSrc: "/img/brijesh/image583.jpg",
        title: "Intel® Core™ Ultra Processors",
        description: "Accelerate performance for AI and graphics at the edge with multiple compute engines, built-in Intel® Arc™ graphics, and additional low-power E-cores in a power-efficient BGA package.",
        link: "#"
    },
    {
        imgSrc: "/img/brijesh/image584.avif",
        title: "5th Gen Intel® Xeon® Scalable Processors",
        description: "Unlock new edge opportunities with built-in accelerators, better efficiency, and lower TCO.",
        link: "#"
    },
    {
        imgSrc: "/img/brijesh/image585.jpg",
        title: "Intel® Core™ Ultra Processors",
        description: "Accelerate performance for AI and graphics at the edge with multiple compute engines, built-in Intel® Arc™ graphics, and additional low-power E-cores in a power-efficient BGA package.",
        link: "#"
    },
    {
        imgSrc: "/img/brijesh/image586.avif",
        title: "5th Gen Intel® Xeon® Scalable Processors",
        description: "Unlock new edge opportunities with built-in accelerators, better efficiency, and lower TCO.",
        link: "#"
    }
];

const cardContainer = document.querySelector('.row.b_section_heigh');

const cardHTML = cardsData.map((card, index) => `
<div class="col-md-4 col-12 text-white b_card " style="${index < 3 ? 'display: block;' : 'display: none;'}">
    <img src="${card.imgSrc}" class="card-img-top" alt="...">
    <div class="card-body ps-0">
        <h4 class="">
            <a href="${card.link}" class='b_special_a'>${card.title}</a>
        </h4>
        <p class="card-text b_text_justify">${card.description}</p>
    </div>
</div>
`).join('');

cardContainer.innerHTML = cardHTML;

document.getElementById('show-more-button').addEventListener('click', function (event) {
    event.preventDefault();

    const hiddenCards = document.querySelectorAll('.b_card[style="display: none;"]');
    const allCards = document.querySelectorAll('.b_card');

    // Toggle visibility
    if (hiddenCards.length > 0) {
        hiddenCards.forEach(card => {
            card.style.display = 'block';
        });
        this.innerText = 'Show less';
    } else {
        allCards.forEach((card, index) => {
            if (index >= 3) {
                card.style.display = 'none';
            }
        });
        this.innerText = 'Show more';
    }
});
//  for include file ........................................................................







document.addEventListener('DOMContentLoaded', function() {
    // Function to include HTML content
    function includeHTML() {
        const includeElements = document.querySelectorAll('.include');
        includeElements.forEach(el => {
            const file = el.getAttribute('data-include');
            if (file) {
                fetch(file)
                    .then(response => {
                        if (response.ok) {
                            return response.text();
                        }
                        throw new Error('Failed to load component');
                    })
                    .then(data => {
                        el.innerHTML = data;
                    })
                    .catch(error => {
                        console.error('Error including HTML:', error);
                    });
            }
        });
    }

    // Call the function to include HTML content
    includeHTML();
});
