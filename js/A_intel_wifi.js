const processorData = [
    
    {
        imgSrc: '../img/Akshay image/idl-a1160579-white-blue-background.png.rendition.intel.web.64.64.png',
        title: 'Intel® Killer™ Wi-Fi Products',
        description: 'Find out how Intel® Killer™ Wi-Fi products deliver next-level online gaming experiences.'
    },
    {
        imgSrc: '../img/Akshay image/wifi-7-badge.png.rendition.intel.web.64.64.png',
        title: 'Intel® Wi-Fi 7 Products',
        description: 'Building on Wi-Fi 6E, get ready for wired-like experiences with the extreme levels of speed, low latency, and reliability enabled by Intel® Wi-Fi 7.'
    },
    {
        imgSrc: '../img/Akshay image/wifi-6e-gig-badge.png.rendition.intel.web.64.64.png',
        title: 'Intel® Wi-Fi 6E Products',
        description: 'Use Intel® Wi-Fi 6E to maximize the benefits of Intel® Wi-Fi 6 free from the interference of legacy Wi-Fi devices.'
    },
    {
        imgSrc: '../img/Akshay image/wifi-6-gig-badge.png.rendition.intel.web.64.64.png',
        title: 'Intel® Wi-Fi 6 Products',
        description: 'Intel® Wi-Fi 6 offers fast speeds, responsiveness, security, and reliability that is ideal for dense environments.'
    },
    {   
        title: 'Intel® Wireless-AC Products',
        description: 'Wi-Fi 5 enables customers to keep pace with their entertainment, business, and super-connected lifestyle.'
    },
];

function generateProcessorHTML(data) {
    const imageHtml = data.imgSrc ? `
        <div class="v_i9_img">
            <a href="#">
                <img src="${data.imgSrc}" alt="">
            </a>
        </div>
    ` : '';

    return `
        <div class="v_Proc_bg1">
            <div class="row d-flex align-items-center">
                <div class="col-md-4 d-flex align-items-center">
                    ${imageHtml}
                    <div>
                        <a href="#" class="v_text_1 v_text_11">
                            <div>${data.title}</div>
                        </a>
                    </div>
                </div>
                <div class="col-md-8">
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



