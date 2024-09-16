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

}