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

    const pdfvideo4 = [
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
        for (let i = 0; i < pdfvideo4.length; i++) {
            mv_video_VDI.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${pdfvideo4[i].img}" alt=""></a>
                            </div>
                            <h3><a href="">${pdfvideo4[i].title} ${pdfvideo4[i].time ? `<small>(${pdfvideo4[i].time})</small>` : ""} </a></h3>
                            <p>${pdfvideo4[i].text}</p>
                        </div>
                    </div>`
        }
    }

    // Related Materials
    let mv_pdf_vdi_material = document.getElementById('mv_pdf_vdi_material')

    const pdfmaterial4 = [
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
        for (let i = 0; i < pdfmaterial4.length; i++) {
            mv_pdf_vdi_material.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
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




// (Intel® Data Center GPU Flex Series) Download the media delivery solution brief
    // Related Videos
    let mv_video_media = document.getElementById('mv_video_media')

    const pdfvideo5 = [
        {
            id: 1,
            title: "Customers Get Real-Time Insights to Optimize Ad Spend",
            time: "1:04",
            text: "Cometly’s Amazon instance migration provides customer solutions powered by Intel® Xeon® processors and SingleStoreDB, delivering the performance, scale, and AI-readiness for enterprise-scale analyt... ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "",
        },
        {
            id: 2,
            title: "Amazon EC2 Instances, Supported by Intel® Xeon® Processors, Saved...",
            time: "1:14",
            text: "CloudSaver and Intel helped the organization identify optimal Amazon instances to accelerate its workloads while dramatically cutting costs. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "",
        },
        {
            id: 3,
            title: "Proof Trading's Cloud Migration Enables Real-Time Transactions,...",
            time: "01:02",
            text: "Amazon EC2 instances with Intel® Xeon® Processors and SingleStoreDB provide extensive benefits over Proof Trading’s  solution. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "",
        },
        {
            id: 4,
            title: "Demo Video: WNC Intel® FPGA-based E2E O-RAN Solution",
            time: "5:56",
            text: "This demonstration showcases WNC's latest generation end-to-end O-RAN solution based on Intel® Agilex™ FPGA. ",
            img: "demo-video.jpg",
            link: "",
        },
        {
            id: 5,
            title: "Speed AI Development and Deployment Using 4th Gen Intel® Xeon®...",
            time: "1:12",
            text: "Amazon instances featuring Intel® AI acceleration technologies, with Optimum Intel and Optimum Habana libraries, give companies powerful tools for generative AI implementation. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "",
        },
        {
            id: 6,
            title: "Processing Multiple Leads with Intel® Partner Lead Portal",
            time: "5:06",
            text: "Learn how to process multiple leads with the Intel® Partner Lead Portal, which can help you easily tell the status of the leads you are working with. ",
            img: "Processing-Multiple.jpg",
            link: "",
        },
    ]

    if (mv_video_media) {
        for (let i = 0; i < pdfvideo5.length; i++) {
            mv_video_media.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${pdfvideo5[i].img}" alt=""></a>
                            </div>
                            <h3><a href="">${pdfvideo5[i].title} ${pdfvideo5[i].time ? `<small>(${pdfvideo5[i].time})</small>` : ""} </a></h3>
                            <p>${pdfvideo5[i].text}</p>
                        </div>
                    </div>`
        }
    }

    // Related Materials
    let mv_media_material = document.getElementById('mv_media_material')

    const pdfmaterial5 = [
        {
            id: 1,
            title: "Intel® Data Center GPU Flex Series - Product Brief",
            img: "related-materials.png",
            link: "",
        },
        {
            id: 2,
            title: "Intel® Data Center GPU Flex Series Solution Brief",
            img: "brief.png",
            link: "",
        },
        {
            id: 3,
            title: "Intel Arc Graphics Explained in 60 Seconds",
            img: "related-materials.png",
            link: "",
        },
        {
            id: 4,
            title: "Intel® Arc™ 3 Graphics for Desktops",
            img: "related-materials.png",
            link: "",
        },
        {
            id: 5,
            title: "Solution Offerings",
            img: "related-materials.png",
            link: "",
        },
        {
            id: 6,
            title: "Accelerate AI Workloads - Intel® AMX Solution Brief",
            img: "brief.png",
            link: "",
        },
        {
            id: 7,
            title: "Share Data While Helping to Protect User Privacy",
            img: "brief.png",
            link: "",
        },
        {
            id: 8,
            title: "Boost Entire AI Pipeline Performance",
            img: "brief.png",
            link: "",
        },
        {
            id: 9,
            title: "Build More Flexible Networks with Accelerators",
            img: "brief.png",
            link: "",
        },
        {
            id: 10,
            title: "Small Business PCs",
            img: "related-materials.png",
            link: "",
        },
        {
            id: 11,
            title: "Transforming Retail Banks in the Digital Era",
            img: "whitepaper.png",
            link: "",
        },
        {
            id: 12,
            title: "Intel® Data Center GPU Flex Series Briefcase",
            img: "tools.png",
            link: "",
        },

    ]

    if (mv_media_material) {
        for (let i = 0; i < pdfmaterial5.length; i++) {
            mv_media_material.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${pdfmaterial5[i].img}"  alt="">
                                </div>
                                <h4><a href="">${pdfmaterial5[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }



    
// (Intel® Data Center GPU Flex Series) Find Systems with Intel® GPUs
     // Related Videos
    let mv_find_system = document.getElementById('mv_find_system')

    const pdfvideo6 = [
        {
            id: 1,
            title: "Hellometer with 13th Gen Intel Core Mobile Processor Demo Video",
            time: "3:48",
            text: "Video demonstrating how 13th Gen Intel Core mobile processors enables Hellometer to deliver more intelligence and performance for restaurants.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "",
        },
        {
            id: 2,
            title: "Fireside Chat with Telefonica",
            time: "8:15",
            text: "Intel and Telefonica discuss collaborations in driving sustainability and performance in 5G networks.",
            img: "fireside-chat.jpg",
            link: "",
        },
        {
            id: 3,
            title: "Advantech Ecosystem Partner Video",
            time: "11:05",
            text: "Next generation AI applications powered by 11th Gen Intel® Core™ and Intel® Celeron® processors, and Intel® Xe™ Graphics.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "",
        },
        {
            id: 4,
            title: "Intel® Tech Bytes - Overclocking",
            time: "4:13",
            text: "Watch this video and learn how 12th Gen Intel® Core™ processors allow for fine-tuning and per-core overclocking.  ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "",
        },
        {
            id: 5,
            title: "Intel® Tech Bytes - New Technologies",
            time: "7:38",
            text: "Learn about the 12th Gen Intel® Core™ processors, DDR5, and PCIe 5.0. Discover how Intel is leading the industry.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "",
        },
        {
            id: 6,
            title: "Advantech 12th Gen Ecosystem Partner Video",
            time: "10:07",
            text: "Intel 12th Gen Core processors embedded platforms.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "",
        },
    ]
 
    if (mv_find_system) {
        for (let i = 0; i < pdfvideo6.length; i++) {
            mv_find_system.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${pdfvideo6[i].img}" alt=""></a>
                            </div>
                            <h3><a href="">${pdfvideo6[i].title} ${pdfvideo6[i].time ? `<small>(${pdfvideo6[i].time})</small>` : ""} </a></h3>
                            <p>${pdfvideo6[i].text}</p>
                        </div>
                    </div>`
        }
    }
 
    // Related Materials
    let mv_system_materials = document.getElementById('mv_system_materials')
 
    const pdfmaterial6 = [
        {
            id: 1,
            title: "Advantech",
            img: "article.png",
            link: "",
        },
        {
            id: 2,
            title: "Advantech",
            img: "article.png",
            link: "",
        },
        {
            id: 3,
            title: "Modernizing the Power Grid with Software Defined Infrastructure",
            img: "brief.png",
            link: "",
        },
        {
            id: 4,
            title: "Arrow Electronics, Inc.",
            img: "article.png",
            link: "",
        },
        {
            id: 5,
            title: "High Performance Computing Needs High Performing Technology",
            img: "related-materials.png",
            link: "",
        },
        {
            id: 6,
            title: "Accelerate AI and Security Workloads",
            img: "related-materials.png",
            link: "",
        },
        {
            id: 7,
            title: "5th Gen Intel® Xeon® Processors for HPC",
            img: "brief.png",
            link: "",
        },
        {
            id: 8,
            title: "Intel® Advanced Matrix Extensions Overview",
            img: "related-materials.png",
            link: "",
        },
        {
            id: 9,
            title: "The AI PC Opportunity",
            img: "tools.png",
            link: "",
        },
        {
            id: 10,
            title: "What Is High Performance Computing (HPC)? - Intel",
            img: "tools.png",
            link: "",
        },
        {
            id: 11,
            title: "T-Systems NA Helps Customers on the Road to Cloud",
            img: "best-practices.png",
            link: "",
        },
        {
            id: 12,
            title: "Hardware Accelerators in the Cloud",
            img: "tools.png",
            link: "",
        },
 
    ]
 
    if (mv_system_materials) {
        for (let i = 0; i < pdfmaterial6.length; i++) {
            mv_system_materials.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${pdfmaterial6[i].img}"  alt="">
                                </div>
                                <h4><a href="">${pdfmaterial6[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }




// (Intel® Data Center GPU Flex Series) Explore GPU-Ready Systems
        // Related Videos
        let mv_video_GPU_ready = document.getElementById('mv_video_GPU_ready')

        const pdfvideo7 = [
            {
                id: 1,
                title: "Optimizing Microsoft Data Center Networking with Intel® FPGAs",
                time: "2:38",
                text: "Learn how Microsoft deployed millions of Intel® FPGAs to improve efficiency and decrease latency to support disaggregation in cloud and telco markets. ",
                img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
                link: "",
            },
            {
                id: 2,
                title: "Chips and Salsa Episode 36: HW Sec Test of Time Award",
                time: "25:18",
                text: "Professor Srinivas Devadas and Professor Ed Suh discuss the paper they wrote over 20 years ago that won the Intel Test of Time Award in 2022.",
                img: "chips-and-salsa-ep-39.jpg",
                link: "",
            },
            {
                id: 3,
                title: "Hypertec Immersion Cooling for FSI and M&E",
                time: "3:42",
                text: "Hypertec selected 4th Gen Intel® Xeon® processor as the basis for their immersion born server because of its unrivaled performance in HPC applications. ",
                img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
                link: "",
            },
            {
                id: 4,
                title: "Saving Power in the 5G Core",
                time: "4:35",
                text: "Saving power in the 5G core with Intel Infrastructure Power Manager.",
                img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
                link: "",
            },
            {
                id: 5,
                title: "Introducing Intel® Future Skills",
                time: "1:50",
                text: "Intel® Future Skills transforms workforce development and youth empowerment programs to help youth develop the skills and mindset for tomorrow's jobs. ",
                img: "introducing-intel.jpg",
                link: "",
            },
            {
                id: 6,
                title: "Netflix Optimizes Amazon Instance Performance and Reduces Costs,...",
                time: "1:02",
                text: "The latest Intel tools help identify bottlenecks down to the micro-architecture level.",
                img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
                link: "",
            },
        ]
    
        if (mv_video_GPU_ready) {
            for (let i = 0; i < pdfvideo7.length; i++) {
                mv_video_GPU_ready.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                            <div class="d_item">
                                <div class="d_img mv_img_icon">
                                    <a href=""><img src="/img/mv_image/${pdfvideo7[i].img}" alt=""></a>
                                </div>
                                <h3><a href="">${pdfvideo7[i].title} ${pdfvideo7[i].time ? `<small>(${pdfvideo7[i].time})</small>` : ""} </a></h3>
                                <p>${pdfvideo7[i].text}</p>
                            </div>
                        </div>`
            }
        }
    
        // Related Materials
        let mv_GPU_ready_material = document.getElementById('mv_GPU_ready_material')
    
        const pdfmaterial7 = [
            {
                id: 1,
                title: "Intel GPU Flex Series for Virtual Desktop Infrastructure",
                img: "brief.png",
                link: "",
            },
            {
                id: 2,
                title: "VDI Performance on Intel® Data Center GPU Flex Series White Paper",
                img: "brief.png",
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
                title: "Tiered Memory in VMware’s Production Tanzu Environment",
                img: "whitepaper.png",
                link: "",
            },
            {
                id: 6,
                title: "Intel® Optane™ Persistent Memory Workload Partner Solutions",
                img: "brief.png",
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
                title: "Intel® Max Series Product Family for HPC",
                img: "brief.png",
                link: "",
            },
            {
                id: 9,
                title: "Silicon Photonics 100G Active Optical Cable",
                img: "brief.png",
                link: "",
            },
            {
                id: 10,
                title: "Silicon Photonics 100G SR4 Optical Transceiver",
                img: "brief.png",
                link: "",
            },
            {
                id: 11,
                title: "ADLINK AOI with Intel® Arc™ Graphics for the Edge Solution Brief",
                img: "brief.png",
                link: "",
            },
            {
                id: 12,
                title: "Silicon Photonics 100G DR, FR and LR Optical Transceiver",
                img: "brief.png",
                link: "",
            },
    
        ]
    
        if (mv_GPU_ready_material) {
            for (let i = 0; i < pdfmaterial7.length; i++) {
                mv_GPU_ready_material.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                            <div class="d_box">
                                <div class="d-flex">
                                    <div class="d_img me-1">
                                        <img src="/img/mv_image/${pdfmaterial7[i].img}"  alt="">
                                    </div>
                                    <h4><a href="">${pdfmaterial7[i].title}</a></h4>
                                </div>
                            </div>
                        </div>`
            }
        }




// (Intel® Data Center GPU Flex Series) Find Systems with Intel® GPUs
    // Related Videos
    let mv_white_paper = document.getElementById('mv_white_paper')

    const pdfvideo8 = [
        {
            id: 1,
            title: "Getting the Most out of the Intel® HD Graphics Control Panel Demo",
            time: "3:00",
            text: "Demos Intel® HD Graphics Control Panel uses that you may not know about, including multiple monitors, display profiles, screen colors, and more.",
            img: "panel.jpg",
            link: "",
        },
        {
            id: 2,
            title: "Chips and Salsa Episode 14: Intel SPEAR",
            time: "22:47",
            text: "Jerry and CRob chat about Intel SPEAR.",
            img: "joao.jpg",
            link: "",
        },
        {
            id: 3,
            title: "Netflix Optimizes Amazon Instance Performance and Reduces Costs,...",
            time: "1:02",
            text: "The latest Intel tools help identify bottlenecks down to the micro-architecture level.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "",
        },
        {
            id: 4,
            title: "Intel® 5G Solution 5000 Consumer",
            time: "",
            text: "Introducing the 5G Solution 5000, delivering game-changing wireless performance to PCs.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
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
            title: "Chips and Salsa Episode 29: STORM with Thais Moreira",
            time: "14:05",
            text: "Intel STORM Team: Thais Moreira.",
            img: "moreira.jpg",
            link: "",
        },
    ]
  
    if (mv_white_paper) {
        for (let i = 0; i < pdfvideo8.length; i++) {
            mv_white_paper.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${pdfvideo8[i].img}" alt=""></a>
                            </div>
                            <h3><a href="">${pdfvideo8[i].title} ${pdfvideo8[i].time ? `<small>(${pdfvideo8[i].time})</small>` : ""} </a></h3>
                            <p>${pdfvideo8[i].text}</p>
                        </div>
                    </div>`
        }
    }
  
    // Related Materials
    let mv_paper_materials = document.getElementById('mv_paper_materials')
  
    const pdfmaterial8 = [
        {
            id: 1,
            title: "Intel GPU Flex Series for Virtual Desktop Infrastructure",
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
            title: "Tiered Memory in VMware’s Production Tanzu Environment",
            img: "whitepaper.png",
            link: "",
        },
        {
            id: 6,
            title: "Introducing the Intel® Optane™ SSD P1600X for Boot Drives",
            img: "whitepaper.png",
            link: "",
        },
        {
            id: 7,
            title: "Lenovo Solutions with Intel Technologies Hit the Sweet Spot",
            img: "gallry.png",
            link: "",
        },
        {
            id: 8,
            title: "Improving Splunk & Kafka Platforms with Cloud-Native Technologies",
            img: "guide.png",
            link: "",
        },
        {
            id: 9,
            title: "Intel® Memory Resilience Technology",
            img: "best-practices.png",
            link: "",
        },
        {
            id: 10,
            title: "Intel® Advanced Vector Extensions 512 (AVX-512) Solution Brief",
            img: "brief.png",
            link: "",
        },
        {
            id: 11,
            title: "2023-2024 Intel IT Annual Performance Report",
            img: "best-practices.png",
            link: "",
        },
        {
            id: 12,
            title: "Silicon Photonics 100G Active Optical Cable",
            img: "brief.png",
            link: "",
        },
  
    ]
  
    if (mv_paper_materials) {
        for (let i = 0; i < pdfmaterial8.length; i++) {
            mv_paper_materials.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${pdfmaterial8[i].img}"  alt="">
                                </div>
                                <h4><a href="">${pdfmaterial8[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }




// (Intel® Data Center GPU Flex Series) Download the media delivery solution brief
    // Related Videos
    let mv_video_product = document.getElementById('mv_video_product')

    const pdfvideo9 = [
        {
            id: 1,
            title: "Customers Get Real-Time Insights to Optimize Ad Spend",
            time: "1:04",
            text: "Cometly’s Amazon instance migration provides customer solutions powered by Intel® Xeon® processors and SingleStoreDB, delivering the performance, scale, and AI-readiness for enterprise-scale analyt... ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "",
        },
        {
            id: 2,
            title: "Amazon EC2 Instances, Supported by Intel® Xeon® Processors, Saved...",
            time: "1:14",
            text: "CloudSaver and Intel helped the organization identify optimal Amazon instances to accelerate its workloads while dramatically cutting costs. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "",
        },
        {
            id: 3,
            title: "Demo Video: WNC Intel® FPGA-based E2E O-RAN Solution",
            time: "5:56",
            text: "This demonstration showcases WNC's latest generation end-to-end O-RAN solution based on Intel® Agilex™ FPGA.",
            img: "demo-video.jpg",
            link: "",
        },
        {
            id: 4,
            title: "Proof Trading's Cloud Migration Enables Real-Time Transactions,...",
            time: "01:02",
            text: "Amazon EC2 instances with Intel® Xeon® Processors and SingleStoreDB provide extensive benefits over Proof Trading’s  solution. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "",
        },
        {
            id: 5,
            title: "Speed AI Development and Deployment Using 4th Gen Intel® Xeon®...",
            time: "1:12",
            text: "Amazon instances featuring Intel® AI acceleration technologies, with Optimum Intel and Optimum Habana libraries, give companies powerful tools for generative AI implementation. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "",
        },
        {
            id: 6,
            title: "Processing Multiple Leads with Intel® Partner Lead Portal",
            time: "5:06",
            text: "Learn how to process multiple leads with the Intel® Partner Lead Portal, which can help you easily tell the status of the leads you are working with. ",
            img: "Processing-Multiple.jpg",
            link: "",
        },
    ]

    if (mv_video_product) {
        for (let i = 0; i < pdfvideo9.length; i++) {
            mv_video_product.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${pdfvideo9[i].img}" alt=""></a>
                            </div>
                            <h3><a href="">${pdfvideo9[i].title} ${pdfvideo9[i].time ? `<small>(${pdfvideo9[i].time})</small>` : ""} </a></h3>
                            <p>${pdfvideo9[i].text}</p>
                        </div>
                    </div>`
        }
    }

    // Related Materials
    let mv_product_material = document.getElementById('mv_product_material')

    const pdfmaterial9 = [
        {
            id: 1,
            title: "Intel® Data Center GPU Flex Series Solution Brief",
            img: "brief.png",
            link: "",
        },
        {
            id: 2,
            title: "Intel® Data Center GPU Flex Series - Media Processing & Delivery...",
            img: "related-materials.png",
            link: "",
        },
        {
            id: 3,
            title: "Intel® Data Center GPU Flex Series - Cloud Gaming Solution Brief",
            img: "related-materials.png",
            link: "",
        },
        {
            id: 4,
            title: "Intel Arc Graphics Explained in 60 Seconds",
            img: "related-materials.png",
            link: "",
        },
        {
            id: 5,
            title: "Intel® Arc™ 3 Graphics for Desktops",
            img: "related-materials.png",
            link: "",
        },
        {
            id: 6,
            title: "Intel® Data Center GPU",
            img: "related-materials.png",
            link: "",
        },
        {
            id: 7,
            title: "4th Gen Intel® Xeon® Scalable Processors",
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
            title: "Intel® Data Center GPU Flex Series Briefcase",
            img: "tools.png",
            link: "",
        },
        {
            id: 10,
            title: "Boost Entire AI Pipeline Performance",
            img: "brief.png",
            link: "",
        },
        {
            id: 11,
            title: "Accelerate Network and Edge Transformation with E-cores",
            img: "brief.png",
            link: "",
        },
        {
            id: 12,
            title: "High Performance Computing Needs High Performing Technology",
            img: "related-materials.png",
            link: "",
        },

    ]

    if (mv_product_material) {
        for (let i = 0; i < pdfmaterial9.length; i++) {
            mv_product_material.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${pdfmaterial9[i].img}"  alt="">
                                </div>
                                <h4><a href="">${pdfmaterial9[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }




// (Intel® Data Center GPU Flex Series) nav&tabs Download the AI solution brief
    // Related Videos
    let mv_video_Download_AI_solution = document.getElementById('mv_video_Download_AI_solution')

    const pdfvideo10 = [
        {
            id: 1,
            title: "Intel's Next Generation FPGAs 224 Gbps-PAM4-LR Transceiver Video",
            time: "13:44",
            text: "The 224 Gbps-PAM4-LR transceiver meets high-speed transceiver requirements in cloud, network, data center, AI, and more. ",
            img: "Intel-next.jpg",
            link: "",
        },
        {
            id: 2,
            title: "Chips and Salsa Episode 29: STORM with Thais Moreira",
            time: "14:05",
            text: "Intel STORM Team: Thais Moreira.",
            img: "chips-and-salsa-ep-29.jpg",
            link: "",
        },
        {
            id: 3,
            title: "Hypertec Immersion Cooling for FSI and M&E",
            time: "3:42",
            text: "Hypertec selected 4th Gen Intel® Xeon® processor as the basis for their immersion born server because of its unrivaled performance in HPC applications. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "",
        },
        {
            id: 4,
            title: "Investing in Water Restoration",
            time: "2:49",
            text: "At Intel, we’ve been committed to environmental sustainability for decades, and now we’re diving deep into water restoration. ",
            img: "Investing.jpg",
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
            title: "Chips and Salsa Episode 14: Intel SPEAR",
            time: "22:47",
            text: "Jerry and CRob chat about Intel SPEAR. ",
            img: "chips_and_salsa_episode_14.jpg",
            link: "",
        },
    ]

    if (mv_video_Download_AI_solution) {
        for (let i = 0; i < pdfvideo7.length; i++) {
            mv_video_Download_AI_solution.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${pdfvideo10[i].img}" alt=""></a>
                            </div>
                            <h3><a href="">${pdfvideo10[i].title} ${pdfvideo10[i].time ? `<small>(${pdfvideo10[i].time})</small>` : ""} </a></h3>
                            <p>${pdfvideo10[i].text}</p>
                        </div>
                    </div>`
        }
    }

    // Related Materials
    let mv_video_Download_AI_solution_material = document.getElementById('mv_video_Download_AI_solution_material')

    const pdfmaterial10 = [
        {
            id: 1,
            title: "Performance Data for Intel® Data Center GPU Flex Series 140",
            img: "tools.png",
            link: "",
        },
        {
            id: 2,
            title: "Performance Data for Intel® Data Center GPU Flex Series 170",
            img: "tools.png",
            link: "",
        },
        {
            id: 3,
            title: "AI Accelerated Intel® Xeon® Scalable Processors Product Brief",
            img: "brief.png",
            link: "",
        },
        {
            id: 4,
            title: "Intel® Max Series Product Family for HPC",
            img: "brief.png",
            link: "",
        },
        {
            id: 5,
            title: "TIntel® Data Center GPU Max Series Product Brief",
            img: "brief.png",
            link: "",
        },
        {
            id: 6,
            title: "Numenta and Intel Accelerate Inference",
            img: "article.png",
            link: "",
        },
        {
            id: 7,
            title: "AI Partners and Solutions: Intel® Partner Alliance - Intel",
            img: "article.png",
            link: "",
        },
        {
            id: 8,
            title: "Introducing Intel Data Center GPU Flex Series for the Intelligent...",
            img: "related-materials.png",
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
            title: "Homomorphic Encryption on 3rd Gen Intel® Xeon® Scalable Processors",
            img: "brief.png",
            link: "",
        },
        {
            id: 11,
            title: "Numenta Delivers Powerful Inference Performance",
            img: "best-practices.png",
            link: "",
        },
        {
            id: 12,
            title: "Accelerate TensorFlow Machine Learning Performance with Intel® AMX",
            img: "article.png",
            link: "",
        },

    ]

    if (mv_video_Download_AI_solution_material) {
        for (let i = 0; i < pdfmaterial10.length; i++) {
            mv_video_Download_AI_solution_material.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${pdfmaterial10[i].img}"  alt="">
                                </div>
                                <h4><a href="">${pdfmaterial10[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }

    mv_intel_blog_geti(1);
    mv_video_intel_geti();
    mv_intel_case_study_geti(1);
    loaddatatable1();
    loaddatatable2();
}




// Intel® Geti™ Platform -> (Blog) Blog Card
var mv_intel_geti_blog_data = [
    // page 1
    {
        image:"software-recognized-may-2024.jpg",
        category:"Blog",
        title:"Intel® Geti™ 2.0.0 Release: Advancing AI Model Development",
        date: "Jun. 5, 2024",
        description: "Intel® Geti™ 2.0.0 is here. A new release of Intel’s Vision AI software for building computer vision models faster and with less. This release includes several additions for data labeling, model training, and inferencing.The release is part of Intel’s ongoing commitment to deliver high-quality software. All existing customers are invited to upgrade to Intel Geti 2.0.0 and take advantage of the latest functionality!",
    },
    {
        image:"dashboard-456x300.png",
        category:"Blog",
        title:"Data and AI Metrics with Intel® Geti™",
        date: "May. 24, 2024",
        description: "Learn how to define and leverage metrics to identify improvements and repetitively refine your AI project with Intel® Geti™ software.",
    },
    {
        image:"blog_intel_Geti_ai_Platform-466x300.webp",
        category:"Blog",
        title:"Intel® Geti™ AI Software Overview: Learn What Is Under the Hood",
        date: "May. 14, 2024",
        description: "Intel® Geti™ software enables anyone to build models rapidly and accelerate innovation across their businesses with AI. Learn about its features that can help you speed up your computer vision model development workflow and create new computer vision solutions for your organization.",
    },
    {
        image:"ISC-West-Award-thumbnail.jpg",
        category:"Blog",
        title:"Intel® Geti™ Software Recognized by SIA as Winner of the Best New Products & Solutions Award for Video Analytics  at ISC West, 2024",
        date: "May. 7, 2024",
        description: "Intel® Geti™ software was selected as the 2024 Winner of the Video Analytics for its Intel® Geti™ software and honored April 10 during an award ceremony on the Bridge Stage on the ISC West Show Floor. The product name was also displayed on the ISC West show floor throughout the event from April 9-12.",
    },
    {
        image:"MicrosoftTeams-image-1-500x253-1.png",
        category:"Blog",
        title:"Mastering the Intel® Geti™ SDK in 9 Steps: A Beginner’s Guide",
        date: "Nov. 23, 2023",
        description: "When you have your production system working 24/7, it will be difficult or sometimes impossible to stop your production in order to update your models, add new objects to detect, replace a camera and recalibrate, or change elements in your workload.",
    },
    {
        image:"intel-500x281-1.webp",
        category:"Blog",
        title:"The Next Evolution: Intel® Geti™ 1.8.0 is here",
        date: "Oct. 25, 2023",
        description: "Intel’s software platform for building custom computer vision models more efficiently just launched a new version: Intel® Geti™ 1.8.0. This release includes additions for an enhanced data labeling experience with the Segment Anything Model (SAM), new storage management resources, and ready-to-use datasets.",
    },
    {
        image:"getty-1082066722-fill-500x281-1.png",
        category:"Blog",
        title:"Interactive Annotation with SAM – speeding up the time to model",
        date: "Oct. 25, 2023",
        description: "Interactive Annotation with SAM – speeding up the time to model Request Trial In this post, we will discuss how we are utilizing the power of Segment Anything Model (SAM) in an interactive annotation process and speeding up the time to model for users of Intel® Geti™ software. Data preparation and the quality of data...",
    },
    {
        image:"Computer-vision-1.jpg",
        category:"Blog",
        title:"Computer Vision Task Overview and Applications",
        date: "Oct. 13, 2023",
        description: "Learn what computer vision tasks are supported in Intel® Geti™ software and how it can help you solve your business automation challenges with computer vision.",
    },
    {
        image:"blog_img1.jpg",
        category:"Blog",
        title:"The Intel® Geti™ SDK: A Game-Changer for Rapid AI Model Development and Deployment in your production system",
        date: "Sep. 5, 2023",
        description: "In today's fast-paced world, businesses require quick and accurate decision-making abilities. This is where Artificial Intelligence (AI) models come into play. AI models can analyze vast amounts of data, extract insights, and provide businesses with the intelligence required to make quick, data-driven decisions.",
    },
    // page 2
    {
        image:"brand-photography-library-71-fill-500x281-1.png",
        category:"Blog",
        title:"Enhance your experience: Introducing Intel® Geti™ 1.5.0",
        date: "Jun. 7, 2023",
        description: "We are excited to announce the launch of Intel Geti 1.5.0, a new platform version! Intel Geti software enables teams to build computer vision models for their AI applications. This release includes new features and expands functionality for a more effective and agile model development and deployment path. The release is part of our ongoing commitment to deliver high-quality software.",
    },
    {
        image:"faq-mobile-1.webp",
        category:"Blog",
        title:"Efficient, custom object detection training template made easy",
        date: "Feb. 1, 2023",
        description: "Deep Learning algorithms are widely used in the industry today – from detecting defects in parts on the factory production line to recommending products to shoppers on e-commerce websites. These algorithms proved their high accuracy and efficiency and have driven significant innovations in businesses utilizing them.",
    },
    {
        image:"Streamlining-AIs-Path-to-Production-with-the-Intel®-Geti™-Platform-500x261-1.png",
        category:"Blog",
        title:"Streamlining AI’s Path to Production with Intel® Geti™ Software",
        date: "Dec. 13, 2022",
        description: "We are thrilled to announce Intel Geti software is now commercially available for select customers. The software unites the right people and the right data for an efficient path to building high-quality solutions, overcoming obstacles to bring AI pilots to production.",
    },
    {
        image:"blog_does_active_learning--466x300.webp",
        category:"Blog",
        title:"Does Active Learning Help Speed Up AI Model Development?",
        date: "Sept. 27, 2022",
        description: "The key to improving the productivity of computer vision AI model development is to involve human experts in the model-building loop for a continuous feedback process. Learn how active learning in the Intel® Geti™ computer vision AI platform enables just that",
    },
    {
        image:"challenge-1-500x295.webp",
        category:"Blog",
        title:"Challenges for Organizations Building Computer Vision AI Models",
        date: "Sept. 27, 2022",
        description: "Computer vision is one of the most exciting subsets of artificial intelligence and machine learning. We’re already seeing a wealth of real-world use cases in industries from manufacturing to agriculture to retail. The possibilities that computer vision offers span essentially every single industry and field and are growing rapidly.",
    },
    {
        image:"computer-vision-1-500x295.webp",
        category:"Blog",
        title:"Computer Vision Applications that Span Industries and Sectors",
        date: "Sept. 27, 2022",
        description: "How many security camera feeds can a single person monitor effectively? Even assuming one person can handle all camera feeds for an entire facility, how many people are needed for 24/7 monitoring of twenty different sites, each in a different state or country? Now let’s give this task to a computer that can simultaneously monitor every single camera feed for all facilities without needing to take a break or even blink.",
    }
]

function mv_intel_blog_geti(page) {
    const div = document.getElementById('mv_blog_parent');
    if (div) {

        const limit = 9;
        const last = limit * page;
        const first = last - limit;
        const total_page = Math.ceil(mv_intel_geti_blog_data.length / limit);

        // Update pagination links
        const pagination = document.getElementById('mv_intel_geti_pagination');
        const pagi = Array.from({ length: total_page }, (el, ind) => {
            const pageNumber = ind + 1;
            return `<a class=" ${page === pageNumber ? 'mv_blog_page_number' : ''}" onclick="mv_intel_blog_geti(${pageNumber})">${pageNumber}</a>`;
        }).join('');
        pagination.innerHTML = `<div class="text-center mt-5">
                                    <div class="mv_blog_pagination">
                                        <a class="${page === 1 ? 'd-none' : ''}" id="mv_prevoius" onclick="mv_intel_blog_geti(${page - 1})">Previous</a>
                                        ${pagi}
                                        <a class="${page === total_page ? 'd-none' : ''}" id="mv_next" onclick="mv_intel_blog_geti(${page + 1})">Next</a>
                                    </div>
                                </div>`;

        // Fetch and display the current page data
        const arr = mv_intel_geti_blog_data.slice(first, last);
            const html = arr.map(ele => {
                return `<div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                            <div class="mv_spark_card_featured">
                                <div class="mv_imgboxhiden">
                                    <div class="mv_spark_card_featured_img mv_spark_card_featured_img1" style="background-image: url('/img/mv_image/${ele.image}');"></div>
                                </div>
                                <div class="mv_industrie_overlay">
                                    <div class="mv_spark_card_titles">
                                        <p style="color: #fff;" class="mv_subtitle">${ele.category}</p>
                                        <div class="mv_spark_card_metrics text-white">
                                            <span>${ele.title}</span>
                                        </div>
                                    </div>
                                    <div class="mv_spark_card_description">
                                        <p class="mv_dated">${ele.date}</p>
                                        <p class="mv_textellipsis">${ele.description}</p>
                                    </div>
                                </div>
                                <div class="mv_spark_card_vertical_buttons">
                                    <a href="#">
                                        <span class="mv_spark_button_content">Read More</span>
                                        <span><i style="font-size: 15px !important;" class="fa-solid fa-arrow-right-long"></i></span>
                                    </a>
                                    <span class="mv_socialIcon">
                                        <a href="#"><i class="fa-solid fa-share-nodes"></i></a>
                                    </span>
                                </div>
                            </div>
                        </div>`;
            }).join('');
            div.innerHTML = html;
    }
    else{
        return;
    }
}




// Intel® Geti™ Platform -> (Video) video Card
var mv_intel_geti_video_data = [
    // page 1
    {
        image:"software-recognized-may-2024.jpg",
        category:"Video",
        title:"Intel® Geti™ 2.0.0 Release: Advancing AI Model Development",
        date: "Jun. 5, 2024",
        description: "Intel® Geti™ 2.0.0 is here. A new release of Intel’s Vision AI software for building computer vision models faster and with less. This release includes several additions for data labeling, model training, and inferencing.The release is part of Intel’s ongoing commitment to deliver high-quality software. All existing customers are invited to upgrade to Intel Geti 2.0.0 and take advantage of the latest functionality!",
    },
    {
        image:"software-recognized-may-2024.jpg",
        category:"Video",
        title:"Building end-to-end pipelines with the Intel® Geti™ SDK",
        date: "Apr. 15, 2024",
        description: "The demo showcases key features and functionalities of the Intel Geti SDK to help developers build end-to-end AI application pipelines, utilizing the computer vision models built using Intel Geti software.",
    },
    {
        image:"software-recognized-may-2024.jpg",
        category:"Video",
        title:"Revolutionizing Sports Broadcasting with AI",
        date: "Feb. 8, 2024",
        description: "Dive into the future of sports broadcasting as WSC showcases its AI platform, which automatically and in real-time understands sports broadcasts and creates short-form content at scale.",
    },
    {
        image:"software-recognized-may-2024.jpg",
        category:"Video",
        title:"Product Demo: Core Capabilities Overview",
        date: "Jun. 15, 2023",
        description: "The Intel Geti Platform's core capabilities empower business and data science users to work together within a single platform. This demo video showcases the capabilities enabling these users with varied expertise utilize the platform to accelerate computer vision workflows.",
    },
    {
        image:"software-recognized-may-2024.jpg",
        category:"Video",
        title:"Introduction to Intel’s Next Generation Computer Vision AI Platform",
        date: "Sept. 27, 2022",
        description: "Get a look into Intel Geti computer vision platform. We will show you how you can build and deploy AI models faster.",
    },
    {
        image:"software-recognized-may-2024.jpg",
        category:"Video",
        title:"Product Demo: Build AI Models with Intel Geti Software",
        date: "Sept. 27, 2022",
        description: "Intel Geti software offers a powerful yet intuitive interface to develop computer vision models for various applications from manufacturing to healthcare and smart cities. This demo video features an agricultural use case example.",
    },
    {
        image:"software-recognized-may-2024.jpg",
        category:"Video",
        title:"Bravent Creates Industrial Vision Solutions with Intel® Geti™ Software",
        date: "Sept. 27, 2022",
        description: "Experts from IT consultancy Bravent discuss how Intel® Geti™ software enables them to collaborate with their enterprise customers to develop computer vision solutions more quickly than ever before.",
        language:"Spanish Subtitles",
    },
    {
        image:"software-recognized-may-2024.jpg",
        category:"Video",
        title:"Using Intel® Geti™ Software to Transform Medical Research",
        date: "Sept. 27, 2022",
        description: "London-based hospital Royal Brompton leverages Intel® Geti™ software to train AI models that are used to diagnose rare diseases.",
    },
    {
        image:"software-recognized-may-2024.jpg",
        category:"Video",
        title:"Getting Started with Computer Vision AI Models",
        date: "Sept. 27, 2022",
        description: "Get an introduction into computer vision and artificial intelligence and learn how Intel® Geti™ software brings them all together.",
    },
]

function mv_video_intel_geti() {
    const div = document.getElementById('mv_video_parent');
    // Fetch and display the current page data
    if (div) {
        const html = mv_intel_geti_video_data.map(ele => {
            return `<div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div class="mv_spark_card_featured">
                            <div class="mv_imgboxhiden">
                                 <video controls loop class="w-100">
                                    <source src="/img/mv_video/video.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="mv_industrie_overlay">
                                <div class="mv_spark_card_titles">
                                    <p style="color: #fff;" class="mv_subtitle">${ele.category}</p>
                                    <div class="mv_spark_card_metrics text-white">
                                        <span>${ele.title}</span>
                                    </div>
                                </div>
                                <div class="mv_spark_card_description">
                                    <p class="mv_dated">${ele.date}</p>
                                    <p class="mv_textellipsis">${ele.description}</p>
                                </div>
                            </div>
                            <div class="mv_spark_card_vertical_buttons">
                                <ul class="mb-0 ps-0">
                                    <li>
                                        <a href="#">
                                            <span class="mv_spark_button_content">Watch Video</span>
                                            <span><i style="font-size: 15px !important;" class="fa-solid fa-arrow-right-long"></i></span>
                                        </a>
                                    </li>
                                    ${ele.language ? `<li>
                                        <a href="#">
                                            <span class="mv_spark_button_content">${ele.language}</span>
                                            <span><i style="font-size: 15px !important;" class="fa-solid fa-arrow-right-long"></i></span>
                                        </a>
                                    </li>` : ""}
                                </ul>
                                <span class="mv_socialIcon">
                                    <img src="/img/mv_image/Vector.svg" alt="">
                                    <a href="#"><i class="fa-solid fa-share-nodes"></i></a>
                                </span>
                            </div>
                        </div>
                    </div>`;
        }).join('');
        div.innerHTML = html;
    }
    else{
        return;
    }
}




// Intel® Geti™ Platform -> (Case Study) Case Study Card
var mv_intel_geti_case_data = [
    // page 1
    {
        image:"Streamlining-AI-Model-Development-in-Biotech-for-Cancer-Diagnosis.png",
        category:"Case Study",
        title:"Streamlining AI Model Development in Biotech for Cancer Diagnosis",
        date: "Dec. 15, 2023",
        description: "The JelloX Federated Learning Platform allows clinical data from multiple healthcare organizations to be used for collaborative AI model development while meeting regulatory requirements and maintaining patient privacy. The solution utilizes Intel® Geti™ software to overcome intense resource requirements for clinical workers to label the data and train vision models.",
    },
    {
        image:"download.png",
        category:"Case Study",
        title:"Optimizing AI Model Training and Refinement for Automated Optical Inspection (AOI)",
        date: "Dec. 18, 2023",
        description: "Fatigue and other human limitations are a familiar impediment to the accuracy and efficiency of visual inspection on manufacturing lines. ASRock Industrial set out to overcome those challenges with an implementation of state-of-the-art AI Automated Optical Inspection (AOI) in production of printed circuit boards at its OEM factory...",
    },
    {
        image:"Computer-Vision-AI-Education-and-Deployment-Leaps-for-featured.webp",
        category:"Case Study",
        title:"Computer Vision AI Education and Deployment Leaps Forward with a New Approach from ITis and Intel",
        date: "Feb. 2, 2023",
        description: "While computer vision and other forms of AI have the potential to transform a wide range of processes across many industries, it can be incredibly challenging to integrate these technologies into real-world applications. One of the more formidable roadblocks is developing internal expertise and equipping people with the hands-on skills to tackle complex data science tasks.",
    },
    {
        image:"Naturalis-and-DIOPSIS-Harness-the-Power-of-the-Intel®-Geti™-Platform-to-Overcome-Data-Challenges-in-Biodiversity-Research-1.webp",
        category:"Case Study",
        title:"Naturalis and DIOPSIS Harness the Power of Intel® Geti™ Software to Overcome Data Challenges in Biodiversity Research",
        date: "Nov. 28, 2022",
        description: "With Intel Geti software, the DIOPSIS Consortium created an innovative AI-based insect monitoring method to better understand insect population declines and to help protect biodiversity.",
    },
    {
        image:"getiimages-1180547365-16x9-1-500x281.jpg",
        category:"Case Study",
        title:"Intel Geti Software Accelerates AI Model Training for Real-Time Nerve Detection in Samsung Ultrasound Systems",
        date: "May. 27, 2024",
        description: "Samsung Medison’s NerveTrack™ is an innovative ultrasound feature used to identify nerve structures in real time during the application of anesthesia. Training of NerveTrack™’s deep learning inference models requires thousands of annotated ultrasound reference images. The image annotation process is best performed by doctors with years of medical training and experience in identifying the small, elusive nerve structures.",
    },
    {
        image:"1-500x261.webp",
        category:"Case Study",
        title:"Small Robot Co uses Intel® Geti™ Software for efficient modelling to create more sustainable crops",
        date: "Oct. 24, 2022",
        description: "Helping farmers feed the world while regenerating the planet is the driving force behind Small Robot Co. Their vision is “per plant farming”: rather than treating a field of crops together as one entity, they treat each plant individually to reduce external inputs such as fertilizers, pesticides and herbicides. Machine learning and AI are a crucial part of the per plant farming process...",
    },
    {
        image:"adobestock-191187347-450x300-1.webp",
        category:"Case Study",
        title:"Monitoring Pedestrian Rail Crossings with Computer Vision AI",
        date: "Dec. 20, 2022",
        description: "Sensing Feeling uses Intel Geti software to accelerate training of AI models for automated pedestrian sensing solutions at railway crossings.Pedestrian incursions into railway crossings are a dramatic safety issue and point of liability for rail infrastructure operators. Automated sensing solutions that use computer vision (CV) to address these issues have been hampered by the low-quality images from decades-old...",
    },
    {
        image:"monitoring-500x281.webp",
        category:"Case Study",
        title:"Monitoring Construction Worker Safety with Custom Computer Vision AI Models",
        date: "Dec. 1, 2022",
        description: "Sensing Feeling, a solution provider based in the UK, is working on developing custom AI models of heavy equipment with Intel Geti software to increase workers' safety. The Sensing Feeling smart visual sensing platform provides edge-based analytics using the machine vision AI models built with Intel Geti software. The occupational-safety solution monitors the safety zones surrounding heavy equipment to identify unsafe proximity by personnel.",
    },
    {
        image:"cities-meets-500x281.webp",
        category:"Case Study",
        title:"Building Custom AI Models to Help Cities Meet Their Net-Zero Goals",
        date: "May. 27, 2024",
        description: "To mitigate climate change, local authorities can optimize their planning and operations with smart cities technology. In the UK, SSE Energy Solutions is developing AI-powered optical sensors based on Intel® architecture, Intel Geti AI software, and the Sensing Feeling software to transform video feeds into insights at the network edge that help cities meet environmental imperatives.",
    },
    // page 2
    {
        image:"img_building_custom_AI_models-1-448x300.webp",
        category:"Case Study",
        title:"New Computer Vision Platform Helps Clinicians Train AI to Recognize a Rare Disease",
        date: "May. 27, 2024",
        description: "London-based hospital Royal Brompton used the Intel® Geti™ software to translate their expertise into a machine learning inference algorithm that transforms their research.",
    },
    {
        image:"bravent-creates-agile-500x295.webp",
        category:"Case Study",
        title:"Bravent Creates Agile, Scalable Industrial Vision Solutions with Intel® Geti™ Software and OpenVINO™ Toolkit",
        date: "Sep. 19, 2022",
        description: "IT consultancy Bravent developed an efficient, flexible AI-based computer vision solution to reduce human error in complex machinery assemblies, which can be scaled and adapted across a range of industries.",
        languageenglish:" (English)",
        languagespanish:"Download (Spanish)",
    },
]

function mv_intel_case_study_geti(page) {
    const div = document.getElementById('mv_case_study_parent');
    if (div) {

        const limit = 9;
        const last = limit * page;
        const first = last - limit;
        const total_page = Math.ceil(mv_intel_geti_case_data.length / limit);

        // Update pagination links
        const pagination = document.getElementById('mv_intel_geti_pagination');
        const pagi = Array.from({ length: total_page }, (el, ind) => {
            const pageNumber = ind + 1;
            return `<a class=" ${page === pageNumber ? 'mv_blog_page_number' : ''}" onclick="mv_intel_case_study_geti(${pageNumber})">${pageNumber}</a>`;
        }).join('');
        pagination.innerHTML = `<div class="text-center mt-5">
                                    <div class="mv_blog_pagination">
                                        <a class="${page === 1 ? 'd-none' : ''}" id="mv_prevoius" onclick="mv_intel_case_study_geti(${page - 1})">Previous</a>
                                        ${pagi}
                                        <a class="${page === total_page ? 'd-none' : ''}" id="mv_next" onclick="mv_intel_case_study_geti(${page + 1})">Next</a>
                                    </div>
                                </div>`;

        // Fetch and display the current page data
        const arr = mv_intel_geti_case_data.slice(first, last);
            const html = arr.map(ele => {
                return `<div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                            <div class="mv_spark_card_featured">
                                <div class="mv_imgboxhiden">
                                    <div class="mv_spark_card_featured_img mv_spark_card_featured_img1" style="background-image: url('/img/mv_image/${ele.image}');"></div>
                                </div>
                                <div class="mv_industrie_overlay">
                                    <div class="mv_spark_card_titles">
                                        <p style="color: #fff;" class="mv_subtitle">${ele.category}</p>
                                        <div class="mv_spark_card_metrics text-white">
                                            <span>${ele.title}</span>
                                        </div>
                                    </div>
                                    <div class="mv_spark_card_description">
                                        <p class="mv_dated">${ele.date}</p>
                                        <p class="mv_textellipsis">${ele.description}</p>
                                    </div>
                                </div>
                                <div class="mv_spark_card_vertical_buttons">
                                    <ul class="mb-0 ps-0">
                                        ${ele.languageenglish ? 
                                        `<li>
                                            <a href="#">
                                                <span class="mv_spark_button_content">Download${ele.languageenglish}</span>
                                            </a>
                                        </li>` : 
                                        `<li>
                                            <a href="#">
                                                <span class="mv_spark_button_content">Download</span>
                                            </a>
                                        </li>`}
                                        ${ele.languagespanish ? `<li>
                                            <a href="#">
                                                <span class="mv_spark_button_content">${ele.languagespanish}</span>
                                            </a>
                                        </li>` : ""}
                                    </ul>
                                    <span class="mv_socialIcon">
                                        <a href="#"><i class="fa-solid fa-share-nodes"></i></a>
                                    </span>
                                </div>
                            </div>
                        </div>`;
            }).join('');
            div.innerHTML = html;
    }
    else{
        return;
    }
}




// Intel® Data Center GPU Flex Series -> (See AI performance data 140) Table Data
var table1_data =[
    {FrameworkVersion:'OpenVINO 2023.2',Model:'ResNet50 v1.5',Dataset:'ImageNet2012',Usage:'Image Recognition',Mode:'Inference',Precision:'int8',Throughput:'3,125 img/s',BatchSize:'256'},
    {FrameworkVersion:'OpenVINO 2023.2',Model:'ResNet50 v1.5',Dataset:'ImageNet2013',Usage:'Image Recognition',Mode:'Inference',Precision:'int8',Throughput:'1,573 img/s',BatchSize:'1'},
    {FrameworkVersion:'OpenVINO 2023.2',Model:'Yolov 4',Dataset:'COCO2017_detection',Usage:'Object Detection',Mode:'Inference',Precision:'int8',Throughput:'402 img/s',BatchSize:'64'},
    {FrameworkVersion:'OpenVINO 2023.2',Model:'Yolov 4',Dataset:'COCO2017_detection',Usage:'Object Detection',Mode:'Inference',Precision:'int8',Throughput:'259 img/s',BatchSize:'1'},
    {FrameworkVersion:'Intel® Pytorch 1.13',Model:'ResNet50 v1.5',Dataset:'ImageNet2012',Usage:'Image Recognition',Mode:'Inference',Precision:'int8',Throughput:'3,001 img/s',BatchSize:'256'},
    {FrameworkVersion:'Intel® Pytorch 1.13',Model:'Yolov 4',Dataset:'COCO2017_detection',Usage:'Object Detection',Mode:'Inference',Precision:'int8',Throughput:'365 img/s',BatchSize:'64'},
    {FrameworkVersion:'Intel TensorFlow 2.13',Model:'ResNet50 v1.5',Dataset:'ImageNet2012',Usage:'Image Recognition',Mode:'Inference',Precision:'int8',Throughput:'3,203 img/s',BatchSize:'	256'},
]
function loaddatatable1(x,y){
    console.log(x,y);
    if(y=='table1'){
    var val=table1_data.filter((ele,ind)=>{
            return ele.PlatformName.includes(x);
    });
    console.log(val);
    table1(val);
    }
    if(x==undefined){
    table1(table1_data);    
    }
}
function table1(table){
    console.log('table',table)
    var table1=document.getElementById('table1');
    table1.innerHTML=table.map((ele,ind)=>{
        return `
            <tr>
                <td class="PlatformName px-2">${ele.FrameworkVersion}</td>
                <td class="px-2 CPU">${ele.Model}</td>
                <td class="px-2 DiscreteAccelerator">${ele.Dataset}</td>
                <td class="px-2 Device">${ele.Usage}</td>
                <td class="px-2 Frameworks">${ele.Mode}</td>
                <td class="px-2 Model">${ele.Precision}</td>
                <td class="px-2 VideoTypeResolution">${ele.Throughput}</td>
                <td class="px-2 Presicion">${ele.BatchSize}</td>
            </tr>
        `;
    }).join('');
}
function fliterdata(x){
    var checkbox = document.getElementById(x);
    var isChecked = checkbox.checked;
    console.log(isChecked);
    if (!isChecked) {
        var elements = document.getElementsByClassName(x);
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add('d-none');
        }
    }
    else{
                var elements = document.getElementsByClassName(x);
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.remove('d-none');
                }
    }
}




// Intel® Data Center GPU Flex Series -> (See AI performance data 170) Table Data
var table1_data =[
    {FrameworkVersion:'Intel TensorFlow 2.13',Model:'Stable Diffusion',Dataset:'Text Prompts',Usage:'Generative AI',Precision:'fp16',Throughput:'6.45 its/s',BatchSize:'1'},
    {FrameworkVersion:'OpenVINO 2023.2',Model:'	ResNet50 v1.5',Dataset:'ImageNet2012',Usage:'Image Recognition',Precision:'	int8',Throughput:'9,499 img/s',BatchSize:'256'},
    {FrameworkVersion:'OpenVINO 2023.2',Model:'	ResNet50 v1.5',Dataset:'ImageNet2013',Usage:'Image Recognition',Precision:'	int8',Throughput:'3,297 img/s',BatchSize:'1'},
    {FrameworkVersion:'OpenVINO 2023.2',Model:'Yolov 4',Dataset:'COCO2017_detection',Usage:'Object Detection',Precision:'	int8',Throughput:'1,209 img/s',BatchSize:'256'},
    {FrameworkVersion:'OpenVINO 2023.2',Model:'Yolov 4',Dataset:'COCO2017_detection',Usage:'Object Detection',Precision:'	int8',Throughput:'595 img/s',BatchSize:'1'},
    {FrameworkVersion:'Intel® Pytorch 1.13',Model:'	ResNet50 v1.5',Dataset:'ImageNet2012',Usage:'Image Recognition',Precision:'int8',Throughput:'9,673 img/s',BatchSize:'1024'},
    {FrameworkVersion:'Intel® Pytorch 1.13',Model:'Yolov4',Dataset:'COCO2017_detection',Usage:'Object Detection',Precision:'int8',Throughput:'1,139 img/s',BatchSize:'256'},
    {FrameworkVersion:'Intel TensorFlow 2.13',Model:'ResNet50 v1.5',Dataset:'ImageNet2012',Usage:'Image Recognition',Precision:'int8',Throughput:'9,801 img/s',BatchSize:'1024'},
    {FrameworkVersion:'Intel TensorFlow 2.13',Model:'EfficientNet-B0',Dataset:'ImageNet2012',Usage:'Image Recognition',Precision:'fp16',Throughput:'1,890 img/s',BatchSize:'128'},
    {FrameworkVersion:'Intel TensorFlow 2.13',Model:'EfficientNet-B3',Dataset:'ImageNet2012',Usage:'Image Recognition',Precision:'fp16',Throughput:'527 img/s',BatchSize:'128'},
    {FrameworkVersion:'Intel TensorFlow 2.13',Model:'MaskRCNN',Dataset:'COCO2017_detection',Usage:'image Segmentation',Precision:'fp16',Throughput:'30 img/s',BatchSize:'16'}
]
function loaddatatable2(x,y){
    console.log(x,y);
    if(y=='table1'){
    var val=table1_data.filter((ele,ind)=>{
            return ele.PlatformName.includes(x);
    });
    console.log(val);
    table1(val);
    }
    if(x==undefined){
    table1(table1_data);    
    }
}
function table1(table){
    console.log('table',table)
    var table1=document.getElementById('table1');
    table1.innerHTML=table.map((ele,ind)=>{
        return `
            <tr>
                <td class="PlatformName px-2">${ele.FrameworkVersion}</td>
                <td class="px-2 CPU">${ele.Model}</td>
                <td class="px-2 DiscreteAccelerator">${ele.Dataset}</td>
                <td class="px-2 Device">${ele.Usage}</td>
                <td class="px-2 Model">${ele.Precision}</td>
                <td class="px-2 VideoTypeResolution">${ele.Throughput}</td>
                <td class="px-2 Presicion">${ele.BatchSize}</td>
            </tr>
        `;
    }).join('');
}
function fliterdata(x){
    var checkbox = document.getElementById(x);
    var isChecked = checkbox.checked;
    console.log(isChecked);
    if (!isChecked) {
        var elements = document.getElementsByClassName(x);
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add('d-none');
        }
    }
    else{
                var elements = document.getElementsByClassName(x);
                for (var i = 0; i < elements.length; i++) {
                    elements[i].classList.remove('d-none');
                }
    }
}