// (AI Accelerator) Read the AI Accelerated product brief
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




// (AI Accelerator -> (Intel HPC Engines)) Read the HPC Accelerated product brief
window.onload = function () {

    // Related Videos
    let mv_pdf_hpc = document.getElementById('mv_pdf_hpc')

    const pdfvideo1 = [
        {
            id: 1,
            title: "Netflix Optimizes Amazon Instance Performance and Reduces Costs,...",
            time: "1:02",
            text: "The latest Intel tools help identify bottlenecks down to the micro-architecture level. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "",
        },
        {
            id: 2,
            title: "Intel® Partner Lead Portal: Intro and Demo",
            time: "14:12",
            text: "This demo for the Intel® Partner Lead Portal shows how to get started with the tool and process individual leads.",
            img: "partner.jpg",
            link: "",
        },
        {
            id: 3,
            title: "Proof Trading's Cloud Migration Enables Real-Time Transactions,...",
            time: "1:02",
            text: "Amazon EC2 instances with Intel® Xeon® Processors and SingleStoreDB provide extensive benefits over Proof Trading’s  solution.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "",
        },
        {
            id: 4,
            title: "Speed AI Development and Deployment Using 4th Gen Intel® Xeon®...",
            time: "1:12",
            text: "Amazon instances featuring Intel® AI acceleration technologies, with Optimum Intel and Optimum Habana libraries, give companies powerful tools for generative AI implementation.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "",
        },
        {
            id: 5,
            title: "Ashling RiscFree IDE for Intel® FPGAs",
            time: "6:08",
            text: "Watch the video to learn how to debug the Nios® V processor using the Ashling RiscFree IDE for Intel FPGAs.",
            img: "nois.jpg",
            link: "",
        },
        {
            id: 6,
            title: "Intel Security Accelerators Video",
            time: "1:58",
            text: "4th Gen Intel Xeon Scalable processors provide the most built-in accelerators ensuring a zero trust security strategy with continuous data protection.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "",
        },
    ]

    if (mv_pdf_hpc) {
        for (let i = 0; i < pdfvideo1.length; i++) {
            mv_pdf_hpc.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
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
    let mv_pdf_hpc_material = document.getElementById('mv_pdf_hpc_material')

    const pdfmaterial4 = [
        {
            id: 1,
            title: "Elevate Performance with Intel® Accelerator Engines",
            img: "guide.png",
            link: "",
        },
        {
            id: 2,
            title: "Boost Entire AI Pipeline Performance",
            img: "brief.png",
            link: "",
        },
        {
            id: 3,
            title: "Drive Business Value with Analytics Acceleration",
            img: "brief.png",
            link: "",
        },
        {
            id: 4,
            title: "Built-In Accelerators Encrypt, Compress and Move Data",
            img: "brief.png",
            link: "",
        },
        {
            id: 5,
            title: "Faster, More Flexible Networks with Built-in Accelerators",
            img: "brief.png",
            link: "",
        },
        {
            id: 6,
            title: "Improved Machine Learning with Intel AMX",
            img: "brief.png",
            link: "",
        },
        {
            id: 7,
            title: "Built-in Intel Security Engines Enhance Data Protection",
            img: "brief.png",
            link: "",
        },
        {
            id: 8,
            title: "Accelerate AI Workloads - Intel® AMX Solution Brief",
            img: "brief.png",
            link: "",
        },
        {
            id: 9,
            title: "Partner Directory",
            img: "related-materials.png",
            link: "",
        },
        {
            id: 10,
            title: "The Intel Xeon 6 Processor Family",
            img: "brief.png",
            link: "",
        },
        {
            id: 11,
            title: "FPGA Featured Partners and Offerings",
            img: "related-materials.png",
            link: "",
        },
        {
            id: 12,
            title: "Accelerators Test",
            img: "related-materials.png",
            link: "",
        },

    ]

    if (mv_pdf_hpc_material) {
        for (let i = 0; i < pdfmaterial4.length; i++) {
            mv_pdf_hpc_material.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
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