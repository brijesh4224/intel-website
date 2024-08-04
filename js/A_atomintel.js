
const processorData = [
    
    {
        imgSrc: '../img/Akshay image/badge-atom-marcom-rwd.png.rendition.intel.web.64.64.png',
        title: 'Intel Atom® Processors C Series',
        description: 'Intel Atom® C processor family for microservers is designed for configuration to server specs, with built-in security, while reducing energy demands.'
    },
    {
        imgSrc: '../img/Akshay image/badge-atom-marcom-rwd.png.rendition.intel.web.64.64.png',
        title: 'Intel Atom® Processor P Series',
        description: 'Intel Atom® P processors are designed to meet the demanding throughput, power, environmental, and latency requirements of 5G.'
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