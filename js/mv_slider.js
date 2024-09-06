// (AI Accelerator -> (Read the AI Accelerated product brief))
window.onload = function () {

    // Related Videos
    let D_pdfvideo1 = document.getElementById('D_pdfvideo1')

    const pdfvideo1 = [
        {
            id: 1,
            title: "3rd Gen Intel® Xeon® Scalable processors Video for IoT",
            time: "",
            text: "Learn how 3rd Gen Intel® Xeon® Scalable processors enable flexible performance for IoT workloads.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "",
        },
        {
            id: 2,
            title: "Getting the Most out of the Intel® HD Graphics Control Panel Demo",
            time: "3:00",
            text: "Demos Intel® HD Graphics Control Panel uses that you may not know about, including multiple monitors, display profiles, screen colors, and more.",
            img: "getting.jpg",
            link: "",
        },
        {
            id: 3,
            title: "Chips and Salsa Episode 29: STORM with Thais Moreira",
            time: "14:05",
            text: "Intel STORM Team: Thais Moreira.",
            img: "chips.jpg",
            link: "",
        },
        {
            id: 4,
            title: "Intel Creates World's First Conflict-Free Microprocessor",
            time: "1:00",
            text: "Intel introduces the world's first commercial conflict-free microprocessor and reconnects the dots across the globe for a responsible supply chain.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "",
        },
        {
            id: 5,
            title: "Chips and Salsa Episode 36: HW Sec Test of Time Award",
            time: "25:18",
            text: "Professor Srinivas Devadas and Professor Ed Suh discuss the paper they wrote over 20 years ago that won the Intel Test of Time Award in 2022.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "",
        },
        {
            id: 6,
            title: "Intel and Tile* Bluetooth® Technology Help Find Your Lost Things",
            time: "",
            text: "Find your lost things, including your next Intel®-based laptop, with the Tile* app or one of the Tile* Bluetooth® technology-enabled devices.",
            img: "tile.jpg",
            link: "",
        },
    ]

    if (D_pdfvideo1) {
        for (let i = 0; i < pdfvideo1.length; i++) {
            D_pdfvideo1.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${pdfvideo1[i].img}" alt=""></a>
                            </div>
                            <h3><a href="">${pdfvideo1[i].title} <small>(${pdfvideo1[i].time})</small> </a></h3>
                            <p>${pdfvideo1[i].text}</p>
                        </div>
                    </div>`
        }
    }

    // Related Materials
    let D_pdfmaterial4 = document.getElementById('D_pdfmaterial4')

    const pdfmaterial4 = [
        {
            id: 1,
            title: "Elevate Performance with Intel® Accelerator Engines",
            img: "guide.png",
            link: "",
        },
        {
            id: 2,
            title: "High-Performance Computing with Intel HPC Engines",
            img: "brief.png",
            link: "",
        },
        {
            id: 3,
            title: "Built-In Accelerators Encrypt, Compress and Move Data",
            img: "brief.png",
            link: "",
        },
        {
            id: 4,
            title: "Improved Machine Learning with Intel AMX",
            img: "brief.png",
            link: "",
        },
        {
            id: 5,
            title: "Accelerate AI Workloads - Intel® AMX Solution Brief",
            img: "brief.png",
            link: "",
        },
        {
            id: 6,
            title: "Faster, More Flexible Networks with Built-in Accelerators",
            img: "brief.png",
            link: "",
        },
        {
            id: 7,
            title: "Maximizing Growth, Return on Investment, and Data Security with AI",
            img: "brief.png",
            link: "",
        },
        {
            id: 8,
            title: "System Offerings",
            img: "related-materials.png",
            link: "",
        },
        {
            id: 9,
            title: "Offerings by Category",
            img: "related-materials.png",
            link: "",
        },
        {
            id: 10,
            title: "Drive Business Value with Analytics Acceleration",
            img: "brief.png",
            link: "",
        },
        {
            id: 11,
            title: "Independent Hardware Vendors Acceleration Program",
            img: "article.png",
            link: "",
        },
        {
            id: 12,
            title: "Bringing AI Everywhere",
            img: "related-materials.png",
            link: "",
        },

    ]

    if (D_pdfmaterial4) {
        for (let i = 0; i < pdfmaterial4.length; i++) {
            D_pdfmaterial4.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${pdfmaterial4[i].img}"  alt="">
                                </div>
                                <h4><a href="">${pdfmaterial4[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }

}