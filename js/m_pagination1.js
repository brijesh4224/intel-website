const cardsData = [
    {
        imgSrc: '/img/Monika_img/rcs_9.png',
        date: 'August 8th, 2024',
        title: 'Hope for Justice Fights Modern Slavery',
        description: 'Confidential Computing aids in the fight to end modern slavery by protecting victim data.',
        cls: 'rcs_cl1',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_10.webp',
        date: 'August 2nd, 2024',
        title: 'ENGIE Digital Optimizes Cloud Cost Spend',
        description: 'ENGIE Digital uses Intel® Cloud Optimizer to manage cloud cost, enabling it to maintain and operate its renewable assets.',
        cls: 'rcs_cl2',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_5.avif',
        date: 'August 1st, 2024',
        title: 'Global Retailer Improves IT Operations',
        description: 'The retailer used remote management capabilities of Intel vPro® platform to maintain POS devices and back-office computers.',
        cls: 'rcs_cl3',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_11.avif',
        date: 'July 31st, 2024',
        title: 'Project Indus Benchmarks LLM Performance in Hindi',
        description: 'EThe Indus LLM underwent benchmarking on the Intel® platform; results showed it is a robust, versatile, and efficient model.',
        cls: 'rcs_cl1',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_12.webp',
        date: 'July 25th, 2024',
        title: 'Winning Health Optimizes LLMs in Healthcare',
        description: 'Winning Health LLM, WiNGPT, leveraging Intel® technology, meets performance demands for healthcare institutions.',
        cls: 'rcs_cl2',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_13.webp',
        date: 'July 23rd, 2024',
        title: 'CUSD Gains Insight into Device Investment',
        description: 'Telemetry data provides visibility into CUSD’s device performance, resulting in more informed technology decisions.',
        cls: 'rcs_cl3',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_14.webp',
        date: 'July 18th, 2024',
        title: 'CMCC Speeds Climate Change Modeling',
        description: 'CMCC improves its supercomputer architecture with Intel® Xeon® CPU Max series with HBM on existing clusters.',
        cls: 'rcs_cl1',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_15.webp',
        date: 'July 4th, 2024',
        title: 'HCLTech Optimizes Cloud Resource Utilization',
        description: 'HCLTech implements Intel® Cloud Optimizer to better utilize cloud resources while also identifying cost-saving opportunities.',
        cls: 'rcs_cl2',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_16.webp',
        date: 'July 4th, 2024',
        title: 'Penang Science Cluster Advances Digital Education',
        description: 'A 5G Digital School Library made digital learning resources accessible to thousands of K-12 students across the state.',
        cls: 'rcs_cl3',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_17.webp',
        date: 'July 2nd, 2024',
        title: 'Digital Twins Platform Simplifies Venue Planning',
        description: 'A digital twinning platform creates detailed digital models for venue planning.',
        cls: 'rcs_cl1',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_18.avif',
        date: 'July 2nd, 2024',
        title: 'AT&T Uses Open Network Equipment Model for EMUX',
        description: 'AT&T incorporates Intel® Virtual RAID on CPU for its 100/400 Gb large Ethernet multiplexer (EMUX) and core router.',
        cls: 'rcs_cl2',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_19.avif',
        date: 'July 1st, 2024',
        title: 'Team USA’s Universally Accessible Training Site',
        description: 'Team USA’s universal accessibility platform provides easy navigation for people of any ability attending the Training Site.',
        cls: 'rcs_cl3',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_20.webp',
        date: 'June 14th, 2024',
        title: 'IBM watsonx.data Accelerates GenAI Data Analysis',
        description: 'IBM watsonx.data integrates multiple, optimized query engines for more AI workloads in the enterprise.',
        cls: 'rcs_cl1',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_21.webp',
        date: 'June 5th, 2024',
        title: 'DBS Bank Speeds Financial Service Software',
        description: 'DBS Bank improves derivative pricing engines’ accuracy and accelerates time to insights, resulting in lower operating costs.',
        cls: 'rcs_cl2',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_22.png',
        date: 'May 29th, 2024',
        title: 'Nice Apparel Drives Operational Efficiency',
        description: 'Nice Apparel reacts to rapidly changing market demands with real-time data analytics and insights powered by SAP S/4HANA.',
        cls: 'rcs_cl3',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_23.png',
        date: 'May 21st, 2024',
        title: 'Mu Sigma Develops HMT System',
        description: 'The Mu Sigma HMT system’s high accuracy, driven by Intel® technology, provides real-time tracking and actionable insights.',
        cls: 'rcs_cl1',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_24.png',
        date: 'May 16th, 2024',
        title: 'Storm Reply Taps EC2 C7i Instances on CPUs for LLM',
        description: 'Storm Reply chose EC2 C7i instances on Intel® CPUs for LLM modeling and matched price-performance ratio of GPU-based options.',
        cls: 'rcs_cl2',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_25.png',
        date: 'May 14th, 2024',
        title: 'ENEA Upgrades HPC Architecture',
        description: 'ENEA speeds research and bandwidth-constrained workloads with upgraded architecture, allowing a single code base to be used.',
        cls: 'rcs_cl3',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_26.png',
        date: 'May 1st, 2024',
        title: 'Stony Brook Upgrades Seawulf Supercomputer',
        description: 'Stony Brook Universitys Seawulf is First U.S. Academic Supercomputer with Intel® Xeon® CPU Max Series.',
        cls: 'rcs_cl1',
        link: '#'
    },
    {
        imgSrc: '/img/Monika_img/rcs_27.png',
        date: 'April 13th, 2024',
        title: 'Kyoto University Enhances HPC Performance',
        description: 'ACCMS at KyotoU maximizes the Intel® Xeon® CPU Max Series to enhance the speed and eﬃciency of its scientiﬁc investigations.',
        cls: 'rcs_cl2',
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
        <div class="m_re_card-item ${card.cls}">
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

$(document).ready(function () {
    $(".m_re_pgcon2").css("display", "flex");
    $("#m_re_viewAll, #m_re_viewAll2").click(function () {
        $(".m_re_pgcon2").css("display", "none");
    })
    $("#m_re_viewLess").click(function () {
        $(".m_re_pgcon2").css("display", "flex");
    })

    $("#m_re_list").css("display", "block");
    $("#m_re_card").css("display", "none");

    $(document).on('click', '#m_re_list', function () {
        $(this).css("display", "none");
        $("#m_re_card").css("display", "block");

        $(".m_re_card-item").addClass("m_cardTran1");
        $(".m_re_im").addClass("m_cardTran2");
        $(".m_re_card-link").addClass("m_cardTran3");
    });

    $(document).on('click', '#m_re_card', function () {
        $(this).css("display", "none");
        $("#m_re_list").css("display", "block");

        $(".m_re_card-item").removeClass("m_cardTran1");
        $(".m_re_im").removeClass("m_cardTran2");
        $(".m_re_card-link").removeClass("m_cardTran3");
    });

    $(".m_re_filswitch, .m_re_cro").click(function () {
        $(".m_re_fil").slideToggle("slow");
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