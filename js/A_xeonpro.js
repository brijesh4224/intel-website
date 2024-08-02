
document.addEventListener('DOMContentLoaded', function () {
    // Data to populate
    const data = [
        { text: 'Read the Intel Xeon 6 Processors Product Brief', link: '#' },
        { text: 'Read the Intel Xeon 6 Processors Product Brief', link: '#' },
        { text: 'Read the Intel Xeon 6 Processors Product Brief', link: '#' }
    ];

    // Function to create HTML string dynamically
    function createDynamicContentHTML(data) {
        let html = '<div class="row justify-content-evenly g-2 v_read_sec_marbot">';
        data.forEach(item => {
            html += `
                        <div class="v_read_section col-md-3 col-sm-12">
                            <a href="${item.link}">${item.text}</a>
                        </div>
                    `;
        });
        html += '</div>';
        return html;
    }

    // Set the innerHTML of the container
    document.getElementById('brifread').innerHTML = createDynamicContentHTML(data);
});
document.addEventListener('DOMContentLoaded', function() {
    // Data to populate
    const data = [
        { text: 'Read the Intel Xeon 6 Processors Product Brief', link: '#' },
        { text: 'Read the Article: Intel Xeon 6 Processors With E-Cores', link: '#' },
        { text: 'Read the Article: Intel Xeon 6 Processors With P-Cores', link: '#' }
    ];

    // Function to create HTML string dynamically
    function createDynamicContentHTML(data) {
        let html = '<div class="row justify-content-evenly g-2">';
        data.forEach((item, index) => {
            let additionalClass = '';
            if (index === 2) additionalClass = 'hidden';
            html += `
                <div class="v_read_section col-md-3 col-sm-12 ${additionalClass}">
                    <a href="${item.link}">${item.text}</a>
                </div>
            `;
        });
        html += '</div>';
        return html;
    }

    // Function to toggle the visibility of the third item
    function toggleVisibility() {
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach(element => {
            if (element.style.display === 'none') {
                element.style.display = 'block';
                toggleButton.textContent = 'Show Less';
            } else {
                element.style.display = 'none';
                toggleButton.textContent = 'Show More';
            }
        });
    }

    // Set the innerHTML of the container
    const container = document.getElementById('container');
    container.innerHTML = createDynamicContentHTML(data);

    // Show the button on small screens
    const toggleButton = document.getElementById('toggleButton');
    if (window.innerWidth <= 425) {
        toggleButton.style.display = 'block';
        toggleButton.addEventListener('click', toggleVisibility);
    }
});
const products = [
    { name: 'Intel® Xeon® 6740E Processor (96M Cache, 2.40 GHz)', cores: 96, turbo: '3.2 GHz', base: '2.4 GHz', cache: '96 MB' },
    { name: 'Intel® Xeon® 6756E Processor (96M Cache, 1.80 GHz)', cores: 128, turbo: '2.6 GHz', base: '1.8 GHz', cache: '96 MB' },
    { name: 'Intel® Xeon® 6780E Processor (108M Cache, 2.20 GHz)', cores: 144, turbo: '3 GHz', base: '2.2 GHz', cache: '108 MB' },
    { name: 'Intel® Xeon® 6710E Processor (96M Cache, 2.40 GHz)', cores: 64, turbo: '3.2 GHz', base: '2.4 GHz', cache: '96 MB' },
    { name: 'Intel® Xeon® 6766E Processor (108M Cache, 1.90 GHz)', cores: 144, turbo: '2.7 GHz', base: '1.9 GHz', cache: '108 MB' },
    { name: 'Intel® Xeon® 6731E Processor (96M Cache, 2.20 GHz)', cores: 96, turbo: '3.1 GHz', base: '2.2 GHz', cache: '96 MB' },
    { name: 'Intel® Xeon® 6746E Processor (96M Cache, 2.00 GHz)', cores: 112, turbo: '2.7 GHz', base: '2 GHz', cache: '96 MB' }
];

let currentSort = {
    column: '',
    ascending: true
};

function renderTable(data) {
    const tbody = document.querySelector('#productTable tbody');
    tbody.innerHTML = '';

    data.forEach(product => {
        const row = `<tr>
            <td class="w-50" style="min-width: 18.75rem;"><input type="checkbox"><a href="#" class="v_item_product">${product.name}</a></td>
            <td>${product.cores}</td>
            <td>${product.turbo}</td>
            <td>${product.base}</td>
            <td>${product.cache}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

function sortTable(column) {
    let sortedData;
    if (currentSort.column === column) {
        currentSort.ascending = !currentSort.ascending;
    } else {
        currentSort.column = column;
        currentSort.ascending = true;
    }

    switch (column) {
        case 'Product Name':
            sortedData = products.sort((a, b) => currentSort.ascending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
            break;
        case 'Total Cores':
            sortedData = products.sort((a, b) => currentSort.ascending ? a.cores - b.cores : b.cores - a.cores);
            break;
        case 'Max Turbo Frequency':
            sortedData = products.sort((a, b) => currentSort.ascending ? parseFloat(a.turbo) - parseFloat(b.turbo) : parseFloat(b.turbo) - parseFloat(a.turbo));
            break;
        case 'Processor Base Frequency':
            sortedData = products.sort((a, b) => currentSort.ascending ? parseFloat(a.base) - parseFloat(b.base) : parseFloat(b.base) - parseFloat(a.base));
            break;
        case 'Cache':
            sortedData = products.sort((a, b) => currentSort.ascending ? parseFloat(a.cache) - parseFloat(b.cache) : parseFloat(b.cache) - parseFloat(a.cache));
            break;
    }

    renderTable(sortedData);
}

document.addEventListener('DOMContentLoaded', () => renderTable(products));


const processorData = [
    {
        imgSrc: '../img/Akshay image/xeon-processor-badge.png.rendition.intel.web.64.64.png',
        title: 'Intel® Xeon® Scalable Processors',
        description: 'Intel® Xeon® Scalable processors are designed to improve performance in AI-enhanced, analytics, networking, storage, and HPC workloads with built-in accelerators and features that maximize energy efficiency and security. '
    },
    {
        imgSrc: '../img/Akshay image/xeon-max-badge.png.rendition.intel.web.64.64.png',
        title: 'Intel® Xeon® Max Series',
        description: ' Maximize bandwidth with the Intel® Xeon® CPU Max Series, the first and only x86-based processor with high-bandwidth memory (HBM).'
    },
    {
        imgSrc: '../img/Akshay image/xeon-processor-badge.png.rendition.intel.web.64.64.png',
        title: 'Intel® Xeon® W Processor',
        description: 'Designed for creative professionals, delivering the performance you need for VFX, 3D rendering, and 3D CAD on a workstation.'
    },
    {
        imgSrc: '../img/Akshay image/badge-xeon-d-processor-badge.png.rendition.intel.web.64.64.png',
        title: 'Intel® Xeon® D Processor',
        description: 'When space and power are at a premium, these innovative system-on-a-chip processors bring workload optimized performance.'
    },
    {
        imgSrc: '../img/Akshay image/xeon-processor-badge.png.rendition.intel.web.64.64.png',
        title: 'Intel® Xeon® E Processor',
        description: ' Essential, business-ready performance, expandability and reliability for entry server solutions.'
    },
];

function generateProcessorHTML(data) {
    return `
    
        <div class="v_Proc_bg1">
            <div class="row d-flex align-items-center">
                <div class="col-md-4 d-flex align-items-center">
                    <div class="v_i9_img">
                    <a href="#">
                        <img src="${data.imgSrc}" alt="">
                        </a>
                    </div>
                    <div>
                     <a href="#" class="v_text_1">
                    <div >${data.title}</div>
                      </a>  
                    </div>
                </div>
                
                <div class="col-md-8  ">
                  <a href="#" class="v_text_2">
                    <div>${data.description}</div>
                    </a>
                </div>
            </div>
        </div>
    
        `;
}

const container = document.getElementById('Picprocesser'); // Replace 'container' with the actual ID of your container element

// Generate HTML for each data item and append to container
processorData.forEach(data => {
    const html = generateProcessorHTML(data);
    container.insertAdjacentHTML('beforeend', html);
});