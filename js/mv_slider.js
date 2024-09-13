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
                            <h3><a href="">${pdfvideo1[i].title} ${pdfvideo1[i].time ? `<small>(${pdfvideo1[i].time})</small>` : ""} </a></h3>
                            <p>${pdfvideo1[i].text}</p>
                        </div>
                    </div>`
        }
    }

    // Related Materials
    let D_pdfmaterial1 = document.getElementById('D_pdfmaterial1')

    const pdfmaterial1 = [
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

    if (D_pdfmaterial1) {
        for (let i = 0; i < pdfmaterial1.length; i++) {
            D_pdfmaterial1.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${pdfmaterial1[i].img}"  alt="">
                                </div>
                                <h4><a href="">${pdfmaterial1[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }




// (AI Accelerator -> (Intel HPC Engines)) Read the HPC Accelerated product brief

    // Related Videos
    let mv_pdf_hpc = document.getElementById('mv_pdf_hpc')

    const pdfvideo2 = [
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
        for (let i = 0; i < pdfvideo2.length; i++) {
            mv_pdf_hpc.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${pdfvideo2[i].img}" alt=""></a>
                            </div>
                            <h3><a href="">${pdfvideo2[i].title} ${pdfvideo2[i].time ? `<small>(${pdfvideo2[i].time})</small>` : ""} </a></h3>
                            <p>${pdfvideo2[i].text}</p>
                        </div>
                    </div>`
        }
    }

    // Related Materials
    let mv_pdf_hpc_material = document.getElementById('mv_pdf_hpc_material')

    const pdfmaterial2 = [
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
        for (let i = 0; i < pdfmaterial2.length; i++) {
            mv_pdf_hpc_material.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${pdfmaterial2[i].img}"  alt="">
                                </div>
                                <h4><a href="">${pdfmaterial2[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }




// (Intel Data Center GPU Max Series) Product brief: Intel Data Center GPU Max Series

        // Related Materials
        let mv_pdf_gpu_material = document.getElementById('mv_pdf_gpu_material')

        const pdfmaterial3 = [
            {
                id: 1,
                title: "Intel® Max Series Product Family for HPC",
                img: "brief.png",
                link: "",
            },
            {
                id: 2,
                title: "Tools and Software for Intel® Data Center GPU Max Series",
                img: "related-materials.png",
                link: "",
            },
            {
                id: 3,
                title: "Intel® Data Center GPU Flex Series Solution Brief",
                img: "brief.png",
                link: "",
            },
            {
                id: 4,
                title: "Performance Data for Intel® Data Center GPU Flex Series 140",
                img: "tools.png",
                link: "",
            },
            {
                id: 5,
                title: "AI Accelerated Intel® Xeon® Scalable Processors Product Brief",
                img: "brief.png",
                link: "",
            },
            {
                id: 6,
                title: "Intel Gaudi 2 Remains Only Benchmarked Alternative to NV H100 for...",
                img: "related-materials.png",
                link: "",
            },
            {
                id: 7,
                title: "High Performance Computing (HPC) Solutions - Intel",
                img: "article.png",
                link: "",
            },
            {
                id: 8,
                title: "Numenta and Intel Accelerate Inference",
                img: "article.png",
                link: "",
            },
            {
                id: 9,
                title: "AI Software – Intel",
                img: "article.png",
                link: "",
            },
            {
                id: 10,
                title: "Edge Computing Solutions and Technologies - Intel",
                img: "tools.png",
                link: "",
            },
            {
                id: 11,
                title: "Leading Bottling Company Automates Worker Safety",
                img: "best-practices.png",
                link: "",
            },
            {
                id: 12,
                title: "Gunpowder Cuts Digital Rendering Time and Cost",
                img: "best-practices.png",
                link: "",
            },

        ]

        if (mv_pdf_gpu_material) {
            for (let i = 0; i < pdfmaterial3.length; i++) {
                mv_pdf_gpu_material.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                            <div class="d_box">
                                <div class="d-flex">
                                    <div class="d_img me-1">
                                        <img src="/img/mv_image/${pdfmaterial3[i].img}"  alt="">
                                    </div>
                                    <h4><a href="">${pdfmaterial3[i].title}</a></h4>
                                </div>
                            </div>
                        </div>`
            }
        }


// (Intel® Data Center GPU Flex Series) Download the VDI solution brief

    // Related Videos
    let mv_video_VDI = document.getElementById('mv_video_VDI')

    const pdfvideo3 = [
        {
            id: 1,
            title: "Intel and Tile* Bluetooth® Technology Help Find Your Lost Things",
            time: "",
            text: "Find your lost things, including your next Intel®-based laptop, with the Tile* app or one of the Tile* Bluetooth® technology-enabled devices. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "",
        },
        {
            id: 2,
            title: "Intel's Next Generation FPGAs 224 Gbps-PAM4-LR Transceiver Video",
            time: "13:44",
            text: "The 224 Gbps-PAM4-LR transceiver meets high-speed transceiver requirements in cloud, network, data center, AI, and more.",
            img: "fpg_img.jpg",
            link: "",
        },
        {
            id: 3,
            title: "Getting the Most out of the Intel® HD Graphics Control Panel Demo",
            time: "3:00",
            text: "Demos Intel® HD Graphics Control Panel uses that you may not know about, including multiple monitors, display profiles, screen colors, and more.",
            img: "graphics.jpg",
            link: "",
        },
        {
            id: 4,
            title: "Chips and Salsa Episode 35: Intel Hardware Security Academic Award",
            time: "26:55",
            text: "CRob and Jerry interview the winners of Intel's 2022 Hardware Security Academic Award.",
            img: "getting.jpg",
            link: "",
        },
        {
            id: 5,
            title: "Maximize Value with Better Performance and Efficiency",
            time: "2:32",
            text: "Modernize your tech to take advantage of AI, improve cybersecurity, and improve competitiveness. Enter new markets and surpass the competition.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "",
        },
        {
            id: 6,
            title: "Intel Creates World's First Conflict-Free Microprocessor",
            time: "1:00",
            text: "Intel introduces the world's first commercial conflict-free microprocessor and reconnects the dots across the globe for a responsible supply chain.",
            img: "creates.jpg",
            link: "",
        },
    ]

    if (mv_video_VDI) {
        for (let i = 0; i < pdfvideo3.length; i++) {
            mv_video_VDI.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${pdfvideo3[i].img}" alt=""></a>
                            </div>
                            <h3><a href="">${pdfvideo3[i].title} ${pdfvideo3[i].time ? `<small>(${pdfvideo3[i].time})</small>` : ""} </a></h3>
                            <p>${pdfvideo3[i].text}</p>
                        </div>
                    </div>`
        }
    }

    // Related Materials
    let mv_pdf_vdi_material = document.getElementById('mv_pdf_vdi_material')

    const mv_vdi_material = [
        {
            id: 1,
            title: "VDI Performance on Intel® Data Center GPU Flex Series White Paper",
            img: "brief.png",
            link: "",
        },
        {
            id: 2,
            title: "Intel® Data Center GPU Ready Systems",
            img: "related-materials.png",
            link: "",
        },
        {
            id: 3,
            title: "Intel® Data Center GPU Flex Series Windows Cloud Gaming Brief",
            img: "brief.png",
            link: "",
        },
        {
            id: 4,
            title: "Reduce Memory Costs of Microsoft SQL Running on vSphere",
            img: "brief.png",
            link: "",
        },
        {
            id: 5,
            title: "Intel® Optane™ Persistent Memory Workload Partner Solutions",
            img: "brief.png",
            link: "",
        },
        {
            id: 6,
            title: "Tiered Memory in VMware’s Production Tanzu Environment",
            img: "whitepaper.png",
            link: "",
        },
        {
            id: 7,
            title: "Intel Flex Series GPU Updated Software Packages",
            img: "related-materials.png",
            link: "",
        },
        {
            id: 8,
            title: "Intel® Partner Alliance Sales Enablement Resources",
            img: "article.png",
            link: "",
        },
        {
            id: 9,
            title: "Intel® Arc™ GPU for the Edge",
            img: "related-materials.png",
            link: "",
        },
        {
            id: 10,
            title: "Intel Xeon Processors Accelerate GenAI Workloads with Aible",
            img: "related-materials.png",
            link: "",
        },
        {
            id: 11,
            title: "Intel Xeon Processors Accelerate GenAI Workloads with Aible",
            img: "related-materials.png",
            link: "",
        },
        {
            id: 12,
            title: "Intel® Xeon® 6 Processor with Performance and Efficiency Use Cases",
            img: "related-materials.png",
            link: "",
        },

    ]

    if (mv_pdf_vdi_material) {
        for (let i = 0; i < mv_vdi_material.length; i++) {
            mv_pdf_vdi_material.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${mv_vdi_material[i].img}"  alt="">
                                </div>
                                <h4><a href="">${mv_vdi_material[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }

}