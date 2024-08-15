const cardsData = [
    {
        imgSrc: '/img/Monika_img/rcs_5.avif',
        date: 'August 2nd, 2024',
        title: 'ENGIE Digital Optimizes Cloud Cost Spend',
        description: 'ENGIE Digital uses Intel® Cloud Optimizer to manage cloud cost, enabling it to maintain and operate its renewable assets.',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_5.avif',
        date: 'August 2nd, 2024',
        title: 'ENGIE Digital Optimizes Cloud Cost Spend',
        description: 'ENGIE Digital uses Intel® Cloud Optimizer to manage cloud cost, enabling it to maintain and operate its renewable assets.',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_5.avif',
        date: 'August 2nd, 2024',
        title: 'ENGIE Digital Optimizes Cloud Cost Spend',
        description: 'ENGIE Digital uses Intel® Cloud Optimizer to manage cloud cost, enabling it to maintain and operate its renewable assets.',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_5.avif',
        date: 'August 2nd, 2024',
        title: 'ENGIE Digital Optimizes Cloud Cost Spend',
        description: 'ENGIE Digital uses Intel® Cloud Optimizer to manage cloud cost, enabling it to maintain and operate its renewable assets.',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_5.avif',
        date: 'August 2nd, 2024',
        title: 'ENGIE Digital Optimizes Cloud Cost Spend',
        description: 'ENGIE Digital uses Intel® Cloud Optimizer to manage cloud cost, enabling it to maintain and operate its renewable assets.',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_5.avif',
        date: 'August 2nd, 2024',
        title: 'ENGIE Digital Optimizes Cloud Cost Spend',
        description: 'ENGIE Digital uses Intel® Cloud Optimizer to manage cloud cost, enabling it to maintain and operate its renewable assets.',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_5.avif',
        date: 'August 2nd, 2024',
        title: 'ENGIE Digital Optimizes Cloud Cost Spend',
        description: 'ENGIE Digital uses Intel® Cloud Optimizer to manage cloud cost, enabling it to maintain and operate its renewable assets.',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_5.avif',
        date: 'August 2nd, 2024',
        title: 'ENGIE Digital Optimizes Cloud Cost Spend',
        description: 'ENGIE Digital uses Intel® Cloud Optimizer to manage cloud cost, enabling it to maintain and operate its renewable assets.',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_5.avif',
        date: 'August 2nd, 2024',
        title: 'ENGIE Digital Optimizes Cloud Cost Spend',
        description: 'ENGIE Digital uses Intel® Cloud Optimizer to manage cloud cost, enabling it to maintain and operate its renewable assets.',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_5.avif',
        date: 'August 2nd, 2024',
        title: 'ENGIE Digital Optimizes Cloud Cost Spend',
        description: 'ENGIE Digital uses Intel® Cloud Optimizer to manage cloud cost, enabling it to maintain and operate its renewable assets.',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_5.avif',
        date: 'August 2nd, 2024',
        title: 'ENGIE Digital Optimizes Cloud Cost Spend',
        description: 'ENGIE Digital uses Intel® Cloud Optimizer to manage cloud cost, enabling it to maintain and operate its renewable assets.',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_5.avif',
        date: 'August 2nd, 2024',
        title: 'ENGIE Digital Optimizes Cloud Cost Spend',
        description: 'ENGIE Digital uses Intel® Cloud Optimizer to manage cloud cost, enabling it to maintain and operate its renewable assets.',
        link: '#'
    }
];  

const itemsPerPage = 8;
let currentPage = 1;
let isViewAll = false;
const totalPages = Math.ceil(cardsData.length / itemsPerPage);

const container = document.querySelector('.m_re_con');
const pageInput = document.getElementById('page-input');
const totalPagesElement = document.getElementById('total-pages');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageInputBottom = document.getElementById('page-input-bottom');
const totalPagesBottomElement = document.getElementById('total-pages-bottom');
const prevBtnBottom = document.getElementById('prev-btn-bottom');
const nextBtnBottom = document.getElementById('next-btn-bottom');
const totalCardsElement = document.getElementById('total-cards');
const totalCardsElement2 = document.getElementById('total-cards2');
const viewAllBtn = document.getElementById('m_re_viewAll');
const viewAllBtn2 = document.getElementById('m_re_viewAll2');
const viewLessBtn = document.getElementById('m_re_viewLess');
const paginationControls = document.querySelectorAll('.m_re_pgcon');
const topPaginationControl = document.querySelector('.m_re_pgcon.top-pagination'); 

totalPagesElement.textContent = totalPages;
totalPagesBottomElement.textContent = totalPages;
totalCardsElement.textContent = cardsData.length;
totalCardsElement2.textContent = cardsData.length;

function renderCards() {
    let start = (currentPage - 1) * itemsPerPage;
    let end = start + itemsPerPage;

    let paginatedCards;
    if (isViewAll) {
        paginatedCards = cardsData; 
    } else {
        paginatedCards = cardsData.slice(start, end); 
    }

    const cardsHTML = paginatedCards.map(card => `
        <div class="m_re_card-item">
            <img class="m_re_im" src="${card.imgSrc}" alt="">
            <div>
            <div class="m_re_card-date">${card.date}</div>
            <h3 class="m_re_card-title m_subHeading m_color m_underline ">${card.title}</h3>
            </div>
            <p class="m_re_card-description">${card.description}</p>
            <a class="m_re_card-link " href="${card.link}">Learn More</a>
        </div>
    `).join('');

    container.innerHTML = cardsHTML;
    pageInput.value = currentPage;
    pageInputBottom.value = currentPage;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    prevBtnBottom.disabled = currentPage === 1;
    nextBtnBottom.disabled = currentPage === totalPages;
}

function goToPage(page) {
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    renderCards();
}

function toggleViewAll() {
    isViewAll = !isViewAll;

    if (isViewAll) {
        paginationControls.forEach(control => control.style.display = 'none');
        viewAllBtn.style.display = 'none';
        viewLessBtn.style.display = 'inline';
        if (topPaginationControl) {
            topPaginationControl.classList.remove('m_re_pgcon'); 
        }
    } else {
        paginationControls.forEach(control => control.style.display = 'flex');
        viewAllBtn.style.display = 'inline';
        viewLessBtn.style.display = 'none';
        if (topPaginationControl) {
            topPaginationControl.classList.add('m_re_pgcon'); 
        }
        goToPage(1); 
    }

    renderCards();
}

prevBtn.addEventListener('click', () => goToPage(currentPage - 1));
nextBtn.addEventListener('click', () => goToPage(currentPage + 1));
prevBtnBottom.addEventListener('click', () => goToPage(currentPage - 1));
nextBtnBottom.addEventListener('click', () => goToPage(currentPage + 1));

pageInput.addEventListener('change', () => goToPage(Number(pageInput.value)));
pageInputBottom.addEventListener('change', () => goToPage(Number(pageInputBottom.value)));

viewAllBtn.addEventListener('click', toggleViewAll);
viewAllBtn2.addEventListener('click', toggleViewAll);
viewLessBtn.addEventListener('click', toggleViewAll);

viewLessBtn.style.display = 'none'; 
renderCards();

$(document).ready(function(){
    $(".m_re_pgcon2").css("display","flex");
    $("#m_re_viewAll, #m_re_viewAll2").click(function(){
        $(".m_re_pgcon2").css("display","none");
    })
    $("#m_re_viewLess").click(function(){
        $(".m_re_pgcon2").css("display","flex");
    })

    $("#m_re_list").css("display", "block");
    $("#m_re_card").css("display", "none");

    $(document).on('click', '#m_re_list', function() {
        $(this).css("display", "none");
        $("#m_re_card").css("display", "block");

        $(".m_re_card-item").addClass("m_cardTran1");
        $(".m_re_im").addClass("m_cardTran2");
        $(".m_re_card-link").addClass("m_cardTran3");
    });
    
    $(document).on('click', '#m_re_card', function() {
        $(this).css("display", "none");
        $("#m_re_list").css("display", "block");

        $(".m_re_card-item").removeClass("m_cardTran1");
        $(".m_re_im").removeClass("m_cardTran2");
        $(".m_re_card-link").removeClass("m_cardTran3");
    });
})


// Refine Filter
document.querySelectorAll('.m_re_dropdownBtn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); 
        const dropdownContent = button.nextElementSibling;
        const isVisible = dropdownContent.style.display === 'block';

        document.querySelectorAll('.m_re_dropdownContent').forEach(dropdown => {
            dropdown.style.display = 'none';
            dropdown.previousElementSibling.classList.remove('active'); 
        });

        if (!isVisible) {
            dropdownContent.style.display = 'block';
            button.classList.add('active'); 
        } else {
            dropdownContent.style.display = 'none';
            button.classList.remove('active'); 
        }
    });
});

window.addEventListener('click', function (e) {
    if (!e.target.closest('.m_re_dropdown')) {
        document.querySelectorAll('.m_re_dropdownContent').forEach(dropdown => {
            dropdown.style.display = 'none';
            dropdown.previousElementSibling.classList.remove('active'); 
        });
    }
});

const selectedValuesContainer = document.querySelector('.selectedValues');
const filterContainer = document.querySelector('.m_re_fcon');

document.querySelectorAll('.m_re_customCheckbox').forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        updateSelectedValues();
        toggleFilterContainer();
    });
});

function updateSelectedValues() {
    selectedValuesContainer.innerHTML = ''; 

    document.querySelectorAll('.m_re_customCheckbox:checked').forEach(checkedBox => {
        const valueSpan = document.createElement('div');
        valueSpan.textContent = checkedBox.value;

        const removeBtn = document.createElement('span');
        removeBtn.innerHTML = '&times;';
        removeBtn.classList.add('remove-btn');

        valueSpan.appendChild(removeBtn);

        selectedValuesContainer.appendChild(valueSpan);

        removeBtn.addEventListener('click', function () {
            document.querySelector(`.m_re_customCheckbox[value="${checkedBox.value}"]`).checked = false;
            valueSpan.remove();
            toggleFilterContainer();
        });
    });
}

function toggleFilterContainer() {
    const hasSelectedValues = document.querySelectorAll('.m_re_customCheckbox:checked').length > 0;
    filterContainer.style.display = hasSelectedValues ? 'block' : 'none';
}

document.querySelector('.m_re_fval p').addEventListener('click', function () {
    document.querySelectorAll('.m_re_customCheckbox').forEach(checkbox => {
        checkbox.checked = false;
    });
    selectedValuesContainer.innerHTML = ''; 
    toggleFilterContainer(); 
});

toggleFilterContainer();