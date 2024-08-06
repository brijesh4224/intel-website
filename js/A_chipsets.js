
const processorData = [
    
    {
        imgSrc: '../img/Akshay image/chipset-framed-badge-rwd_480-270.webp',
        title: 'Desktop Chipsets',
        description: 'Intel offers a range of chipset options, from every day consumers to enthusiasts, providing you the performance needed for gaming, creation, and daily productivity.'
    },
    {
        imgSrc: '../img/Akshay image/chipset-framed-badge-rwd_480-270.webp',
        title: 'Mobile Chipsets',
        description: 'Intel mobile and laptop chipsets enable users to watch UHD videos with crisp imagery, view and edit photos in detail, and play the latest games.'
    },
    {
        imgSrc: '../img/Akshay image/chipset-framed-badge-rwd_480-270.webp',
        title: 'Server Chipsets',
        description: 'Intel® Server Chipsets products provide data protection, performance, security, virtualization, and power management. Shop the latest Intel chipsets powered by Intel® Xeon® processors.'
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