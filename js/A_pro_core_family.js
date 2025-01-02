const processorData = [
    {   
        href: '../Aksh_product/A_Intel_Core_i9_Processors.html',
        imgSrc: '../img/Akshay image/intel-core-i9-badge-1920x1080.png.rendition.intel.web.64.64.png',
        title: 'Intel® Core™ i9 Processors',
        description: 'Delivering up to 24 cores for seamless 4K Ultra HD and 360-degree video, robust gameplay, and multitasking performance.'
    },
    {
        href: '../Aksh_product/A_Intel_Core_i7_Processors.html',
        imgSrc: '../img/Akshay image/intel-core-i9-badge-1920x1080.png.rendition.intel.web.64.64.png',
        title: 'Intel® Core™ i7 Processor',
        description: 'This CPU packs the power of up to 20 cores for accelerated computing supporting high-end gaming, connectivity, and security.'
    },
    {
        imgSrc: '../img/Akshay image/intel-core-i9-badge-1920x1080.png.rendition.intel.web.64.64.png',
        title: 'Intel® Core™ i5 Processors',
        description: 'Experience exceptional performance for home and business PCs with up to 14 cores for gaming, creativity, and multitasking.'
    },
    {
        imgSrc: '../img/Akshay image/intel-core-i9-badge-1920x1080.png.rendition.intel.web.64.64.png',
        title: 'Intel® Core™ i3 Processors',
        description: 'These value-packed processors deliver outstanding performance for everyday tasks.'
    },
    {
        imgSrc: '../img/Akshay image/intel-core-i9-badge-1920x1080.png.rendition.intel.web.64.64.png',
        title: 'Intel® Core™ processors',
        description: 'For casual gaming, multitasking, and reliable connectivity, this processor family provides solid, real-world-performance laptop users can rely on.'
    },
];

function generateProcessorHTML(data) {
    const link = data.href ? data.href : '#';   
    return `
    
        <div class="v_Proc_bg1 w-100">
            <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                    <div class="v_i9_img w-auto">
                        <a href="${link}" class="px-sm-4 d-inline-block py-2">
                            <img class="w-100" src="${data.imgSrc}" class="px-1" alt="">
                        </a>
                    </div>
                    <div>
                        <a href="${link}" class="v_text_1">
                            <div >${data.title}</div>
                        </a>  
                    </div>
                </div>
                <div class="col-md-7 d-md-block d-none pe-5">
                  <a href="${link}" class="v_text_2">
                    <div class="">${data.description}</div>
                    </a>
                </div>
            </div>
        </div>
    
        `;
} 

const container = document.getElementById('container');

// Generate HTML for each data item and append to container
processorData.forEach(data => {
    const html = generateProcessorHTML(data);
    container.insertAdjacentHTML('beforeend', html);
});


// Handle click events only when necessary
container.addEventListener('click', (event) => {
    const target = event.target.closest('a'); // Check if a link was clicked
    if (target && target.getAttribute('href') === '#') {
        event.preventDefault(); // Prevent navigation only for '#' links
        console.log('This link has no valid destination:', target);
    }
});