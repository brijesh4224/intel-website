window.onload = function () {

    mv_intel_blog_geti(1);
    mv_video_intel_geti();
    mv_intel_case_study_geti(1);
    // loaddatatable1();
    // loaddatatable2();
    mv_table_5gen();
    mv_table_4gen();
    mv_table_3gen();
    mv_table_2gen();
    mv_table_1gen();    

    // Intel® Data Center GPU Flex Series -> Find Systems with Intel® GPUs -> Related Materials
    let D_pdfmaterial0 = document.getElementById('D_pdfmaterial0')

    const pdfmaterial0 = [
        {
            id: 1,
            title: "Accelerate with Xeon",
            img: "guide.png",
            link: "",
        },
        {
            id: 2,
            title: "Homomorphic Encryption on 3rd Gen Intel® Xeon® Scalable Processors",
            img: "brief.png",
            link: "",
        },
        {
            id: 3,
            title: "12th Gen Intel® Core™ Mobile Processors for Edge AI and Media",
            img: "brief.png",
            link: "",
        },
        {
            id: 4,
            title: "Stream and Share Your Game With Intel® Arc™ Graphics - Intel",
            img: "brief.png",
            link: "",
        },
        {
            id: 5,
            title: "Teaching Strategy: Resources and Guides for Teachers",
            img: "brief.png",
            link: "",
        },
        {
            id: 6,
            title: "Jolera Drives Double-Digit Business GrowthJolera Drives Double-Digit Business Growth",
            img: "brief.png",
            link: "",
        },
        {
            id: 7,
            title: "Prog-It: Agile, All-in-One Private Cloud System",
            img: "brief.png",
            link: "",
        },
        {
            id: 8,
            title: "Alibaba Cloud Accelerates Scientific Computing",
            img: "brief.png",
            link: "",
        },
        {
            id: 9,
            title: "SoftBank Improves VM Capacity and Reduces Costs",
            img: "brief.png",
            link: "",
        },
        {
            id: 10,
            title: "GetCard: Achieves Rapid Payment Solutions Growth",
            img: "brief.png",
            link: "",
        },
        {
            id: 11,
            title: "CDS Delivers High Performance with Low TCO",
            img: "article.png",
            link: "",
        },
        {
            id: 12,
            title: "Arihant Capital Markets Offers Mobile Trading",
            img: "brief.png",
            link: "",
        },

    ]

    if (D_pdfmaterial0) {
        for (let i = 0; i < pdfmaterial0.length; i++) {
            D_pdfmaterial0.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${pdfmaterial0[i].img}"  alt="">
                                </div>
                                <h4><a href="">${pdfmaterial0[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }

    
    if (document.getElementById('show-more-btn')) {
        document.getElementById('show-more-btn').addEventListener('click', function () {
            if (document.getElementById('my-card')) {
                var myCard = document.getElementById('my-card');
                var icon = document.getElementById('toggle-icon');
                var isHidden = myCard.classList.contains('ds_use-hidden');

                if (isHidden) {
                    myCard.classList.remove('ds_use-hidden');
                    myCard.classList.add('ds_use-show');
                    this.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-up me-1"></i> Show Less';
                } else {
                    myCard.classList.remove('ds_use-show');
                    myCard.classList.add('ds_use-hidden');
                    this.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-down me-1"></i> Show More';
                }
            }
            else {
                var myCard1 = document.getElementById('my-card1');
                var icon = document.getElementById('toggle-icon');
                var isHidden = myCard1.classList.contains('ds_use-hidden');

                if (isHidden) {
                    myCard1.classList.remove('ds_use-hidden');
                    myCard1.classList.add('ds_use-show');
                    this.innerHTML = '<span class="d_circle"><i class="fa-solid fa-minus"></i></span>';
                } else {
                    myCard1.classList.remove('ds_use-show');
                    myCard1.classList.add('ds_use-hidden');
                    this.innerHTML = '<span class="d_circle"><i class="fa-solid fa-plus"></i></span>';
                }
            }
        });
    }

    // (AI Accelerator) Read the AI Accelerated product brief

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
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 2,
            title: "Fireside Chat with Telefonica",
            time: "8:15",
            text: "Intel and Telefonica discuss collaborations in driving sustainability and performance in 5G networks.",
            img: "fireside-chat.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 3,
            title: "Advantech Ecosystem Partner Video",
            time: "11:05",
            text: "Next generation AI applications powered by 11th Gen Intel® Core™ and Intel® Celeron® processors, and Intel® Xe™ Graphics.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 4,
            title: "Intel® Tech Bytes - Overclocking",
            time: "4:13",
            text: "Watch this video and learn how 12th Gen Intel® Core™ processors allow for fine-tuning and per-core overclocking.  ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 5,
            title: "Intel® Tech Bytes - New Technologies",
            time: "7:38",
            text: "Learn about the 12th Gen Intel® Core™ processors, DDR5, and PCIe 5.0. Discover how Intel is leading the industry.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 6,
            title: "Advantech 12th Gen Ecosystem Partner Video",
            time: "10:07",
            text: "Intel 12th Gen Core processors embedded platforms.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
    ]

    if (mv_find_system) {
        for (let i = 0; i < pdfvideo6.length; i++) {
            mv_find_system.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${pdfvideo6[i].img}" alt=""></a>
                            </div>
                            <h3><a href="/vaidikhtml/${pdfvideo6[i].link}">${pdfvideo6[i].title} ${pdfvideo6[i].time ? `<small>(${pdfvideo6[i].time})</small>` : ""} </a></h3>
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
            title: "Accelerate with Xeon",
            img: "article.png",
            link: "",
        },
        {
            id: 2,
            title: "Homomorphic Encryption on 3rd Gen Intel® Xeon® Scalable Processors",
            img: "article.png",
            link: "intel_data_center_GPU_flex_series_find_systems_with_intel_GPUs_related_materials_2.html",
        },
        {
            id: 3,
            title: "12th Gen Intel® Core™ Mobile Processors for Edge AI and Media",
            img: "brief.png",
            link: "intel_data_center_GPU_flex_series_find_systems_with_intel_GPUs_related_materials_3.html",
        },
        {
            id: 4,
            title: "Stream and Share Your Game With Intel® Arc™ Graphics - Intel",
            img: "article.png",
            link: "intel_data_center_GPU_flex_series_find_systems_with_intel_GPUs_related_materials_4.html",
        },
        {
            id: 5,
            title: "Teaching Strategy: Resources and Guides for Teachers",
            img: "article.png",
            link: "intel_data_center_GPU_flex_series_find_systems_with_intel_GPUs_related_materials_5.html",
        },
        {
            id: 6,
            title: "Jolera Drives Double-Digit Business Growth",
            img: "article.png",
            link: "",
        },
        {
            id: 7,
            title: "Prog-It: Agile, All-in-One Private Cloud System",
            img: "brief.png",
            link: "",
        },
        {
            id: 8,
            title: "Alibaba Cloud Accelerates Scientific Computing",
            img: "article.png",
            link: "intel_data_center_GPU_flex_series_find_systems_with_intel_GPUs_related_materials_8.html",
        },
        {
            id: 9,
            title: "SoftBank Improves VM Capacity and Reduces Costs",
            img: "tools.png",
            link: "",
        },
        {
            id: 10,
            title: "GetCard: Achieves Rapid Payment Solutions Growth",
            img: "tools.png",
            link: "",
        },
        {
            id: 11,
            title: "CDS Delivers High Performance with Low TCO",
            img: "best-practices.png",
            link: "intel_data_center_GPU_flex_series_find_systems_with_intel_GPUs_related_materials_11",
        },
        {
            id: 12,
            title: "Arihant Capital Markets Offers Mobile Trading",
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
                                <h4><a href="/vaidikhtml/${pdfmaterial6[i].link}">${pdfmaterial6[i].title}</a></h4>
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
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 2,
            title: "Chips and Salsa Episode 36: HW Sec Test of Time Award",
            time: "25:18",
            text: "Professor Srinivas Devadas and Professor Ed Suh discuss the paper they wrote over 20 years ago that won the Intel Test of Time Award in 2022.",
            img: "chips-and-salsa-ep-39.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 3,
            title: "Hypertec Immersion Cooling for FSI and M&E",
            time: "3:42",
            text: "Hypertec selected 4th Gen Intel® Xeon® processor as the basis for their immersion born server because of its unrivaled performance in HPC applications. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 4,
            title: "Saving Power in the 5G Core",
            time: "4:35",
            text: "Saving power in the 5G core with Intel Infrastructure Power Manager.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 5,
            title: "Introducing Intel® Future Skills",
            time: "1:50",
            text: "Intel® Future Skills transforms workforce development and youth empowerment programs to help youth develop the skills and mindset for tomorrow's jobs. ",
            img: "introducing-intel.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 6,
            title: "Netflix Optimizes Amazon Instance Performance and Reduces Costs,...",
            time: "1:02",
            text: "The latest Intel tools help identify bottlenecks down to the micro-architecture level.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
    ]

    if (mv_video_GPU_ready) {
        for (let i = 0; i < pdfvideo7.length; i++) {
            mv_video_GPU_ready.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                            <div class="d_item">
                                <div class="d_img mv_img_icon">
                                    <a href=""><img src="/img/mv_image/${pdfvideo7[i].img}" alt=""></a>
                                </div>
                                <h3><a href="/vaidikhtml/${pdfvideo7[i].link}">${pdfvideo7[i].title} ${pdfvideo7[i].time ? `<small>(${pdfvideo7[i].time})</small>` : ""} </a></h3>
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
            link: "intel_data_center_GPU_flex_series_download_the_VDI_solution_brief.HTML",
        },
        {
            id: 2,
            title: "VDI Performance on Intel® Data Center GPU Flex Series White Paper",
            img: "brief.png",
            link: "intel_data_center_GPU_flex_series_VDI_performance_white_paper.HTML",
        },
        {
            id: 3,
            title: "Intel® Data Center GPU Flex Series Windows Cloud Gaming Brief",
            img: "brief.png",
            link: "intel_data_center_GPU_flex_series_explore_GPU_ready_systems_related_materials_3.html",
        },
        {
            id: 4,
            title: "Reduce Memory Costs of Microsoft SQL Running on vSphere",
            img: "brief.png",
            link: "intel_data_center_GPU_flex_series_explore_GPU_ready_systems_related_materials_4.html",
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
            link: "intel_data_center_GPU_flex_series_explore_GPU_ready_systems_related_materials_6.html",
        },
        {
            id: 7,
            title: "Intel Flex Series GPU Updated Software Packages",
            img: "brief.png",
            link: "intel_gaudi_3_ai_accelerator.html",
        },
        {
            id: 8,
            title: "Intel® Max Series Product Family for HPC",
            img: "brief.png",
            link: "intel_data_center_GPU_flex_series_explore_GPU_ready_systems_related_materials_8.html",
        },
        {
            id: 9,
            title: "Silicon Photonics 100G Active Optical Cable",
            img: "brief.png",
            link: "intel_data_center_GPU_flex_series_explore_GPU_ready_systems_related_materials_9.html",
        },
        {
            id: 10,
            title: "Silicon Photonics 100G SR4 Optical Transceiver",
            img: "brief.png",
            link: "intel_data_center_GPU_flex_series_explore_GPU_ready_systems_related_materials_10.html",
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
                                    <h4><a href="/vaidikhtml/${pdfmaterial7[i].link}">${pdfmaterial7[i].title}</a></h4>
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


    // (AI Accelerator) -> Intel® Advanced Matrix Extensions (Intel® AMX) -> Accelerate AI Workloads with Intel® AMX

    // Related Videos
    let mv_accelerate_ai_video = document.getElementById('mv_accelerate_ai_video')

    const pdfvideo11 = [
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

    if (mv_accelerate_ai_video) {
        for (let i = 0; i < pdfvideo11.length; i++) {
            mv_accelerate_ai_video.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${pdfvideo11[i].img}" alt=""></a>
                            </div>
                            <h3><a href="">${pdfvideo11[i].title} ${pdfvideo11[i].time ? `<small>(${pdfvideo11[i].time})</small>` : ""} </a></h3>
                            <p>${pdfvideo11[i].text}</p>
                        </div>
                    </div>`
        }
    }

    // Related Materials
    let mv_accelerate_ai_material = document.getElementById('mv_accelerate_ai_material')

    const pdfmaterial11 = [
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

    if (mv_accelerate_ai_material) {
        for (let i = 0; i < pdfmaterial11.length; i++) {
            mv_accelerate_ai_material.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${pdfmaterial11[i].img}"  alt="">
                                </div>
                                <h4><a href="">${pdfmaterial11[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }


}




// (Intel® Data Center GPU Flex Series) Explore GPU-Ready Systems -> Related Materials 4
    // Related Videos
    let mv_video_2 = document.getElementById('mv_video_2')

    const pdfvideo14 = [
        {
            id: 1,
            title: "Investing in Water Restoration",
            time: "2:49",
            text: "At Intel, we’ve been committed to environmental sustainability for decades, and now we’re diving deep into water restoration.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 2,
            title: "Chips and Salsa Episode 29: STORM with Thais Moreira",
            time: "14:05",
            text: "Intel STORM Team: Thais Moreira.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 3,
            title: "Intel® Advanced Vector Extensions 512 (Intel® AVX-512)",
            time: "3:51",
            text: "Intel® Advanced Vector Extensions 512, the latest x86 vector instruction set to accelerate performance for your most demanding computational tasks.",
            img: "demo-video.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 4,
            title: "Neuromorphic Computing: Kapoho Point Development Board and Lava...",
            time: "1:18",
            text: "This demo introduces Intel’s latest neuromorphic innovation, Kapoho Point.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 5,
            title: "Intel's Next Generation FPGAs 224 Gbps-PAM4-LR Transceiver Video",
            time: "13:44",
            text: "The 224 Gbps-PAM4-LR transceiver meets high-speed transceiver requirements in cloud, network, data center, AI, and more.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 6,
            title: "Trusted Media:  Real-time FakeCatcher for Deepfake Detection",
            time: "2:18",
            text: "The dramatic rise of deepfakes is diminishing trust in online resources. Intel is working to counteract this trend with FakeCatcher, an AI-based tool for detecting fake media. In this demons... ",
            img: "Processing-Multiple.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
    ]

    if (mv_video_2) {
        for (let i = 0; i < pdfvideo14.length; i++) {
            mv_video_2.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${pdfvideo14[i].img}" alt=""></a>
                            </div>
                            <h3><a href="/vaidikhtml/${pdfvideo14[i].link}">${pdfvideo14[i].title} ${pdfvideo14[i].time ? `<small>(${pdfvideo14[i].time})</small>` : ""} </a></h3>
                            <p>${pdfvideo14[i].text}</p>
                        </div>
                    </div>`
        }
    }

    // Related Materials
    let mv_materials_2 = document.getElementById('mv_materials_2')

    const pdfmaterial14 = [
        {
            id: 1,
            title: "Intel® Arc™ 3 Graphics for Desktops",
            img: "brief.png",
            link: "",
        },
        {
            id: 2,
            title: "ADLINK AOI with Intel® Arc™ Graphics for the Edge Solution Brief",
            img: "brief.png",
            link: "",
        },
        {
            id: 3,
            title: "Intel Arc A380 Graphics Available in China",
            img: "brief.png",
            link: "",
        },
        {
            id: 4,
            title: "Intel Arc Graphics Explained in 60 Seconds",
            img: "brief.png",
            link: "",
        },
        {
            id: 5,
            title: "Intel® Iris® Xe Graphics",
            img: "brief.png",
            link: "",
        },
        {
            id: 6,
            title: "Intel® Arc™ GPU for the Edge",
            img: "brief.png",
            link: "",
        },
        {
            id: 7,
            title: "Intel® Arc™ GPU for the Edge",
            img: "brief.png",
            link: "",
        },
        {
            id: 8,
            title: "Intel® Arc™ GPU for the Edge",
            img: "brief.png",
            link: "",
        },
        {
            id: 9,
            title: "Intel® Arc™ GPU for the Edge",
            img: "tools.png",
            link: "",
        },
        {
            id: 10,
            title: "Intel® Data Center GPU Ready Systems",
            img: "brief.png",
            link: "",
        },
        {
            id: 11,
            title: "Fast RNG with Sub-Stream Parallelization",
            img: "brief.png",
            link: "",
        },
        {
            id: 12,
            title: "VDI Performance on Intel® Data Center GPU Flex Series White Paper",
            img: "brief.png",
            link: "",
        },

    ]

    if (mv_materials_2) {
        for (let i = 0; i < pdfmaterial14.length; i++) {
            mv_materials_2.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${pdfmaterial14[i].img}"  alt="">
                                </div>
                                <h4><a href="/vaidikhtml/${pdfmaterial14[i].link}">${pdfmaterial14[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }




// (Intel® Data Center GPU Flex Series) Explore GPU-Ready Systems -> Related Materials 6
    // Related Videos
    let mv_video_3 = document.getElementById('mv_video_3')

    const pdfvideo15 = [
        {
            id: 1,
            title: "What Is Intel® Optane™ Technology and Why it Matters",
            time: "2:59",
            text: "CPUs used to have a single core. Today they have tens of cores that constantly need to be fed data. It's like having a race car with bicycle wheels.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 2,
            title: "Text to Speech Synthesis Demo Using Intel® Stratix® 10 NX FPGA",
            time: "3:23",
            text: "Watch this demo for text to speech application implemented on an Intel® Stratix® 10 NX FPGA using WaveNet running on 256 real-time streams. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 3,
            title: "Predictive Maintenance by Flex with Intel® FPGA",
            time: "2:07",
            text: "Predictive maintenance and intelligent automation by Flex using Intel® FPGA.",
            img: "demo-video.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 4,
            title: "Intel Edge AI for Vision: Healthcare",
            time: "",
            text: "The Intel® Edge AI for vision portfolio is transforming the healthcare space by bringing cutting-edge capabilities to hospitals, medical labs, and more.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 5,
            title: "Intel® 5G Solution 5000 Consumer",
            time: "13:44",
            text: "Introducing the 5G Solution 5000, delivering game-changing wireless performance to PCs.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 6,
            title: "Chips and Salsa Episode 35: Intel Hardware Security Academic Award",
            time: "26:55",
            text: "CRob and Jerry interview the winners of Intel's 2022 Hardware Security Academic Award. ",
            img: "Processing-Multiple.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
    ]

    if (mv_video_3) {
        for (let i = 0; i < pdfvideo15.length; i++) {
            mv_video_3.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${pdfvideo15[i].img}" alt=""></a>
                            </div>
                            <h3><a href="/vaidikhtml/${pdfvideo15[i].link}">${pdfvideo15[i].title} ${pdfvideo15[i].time ? `<small>(${pdfvideo15[i].time})</small>` : ""} </a></h3>
                            <p>${pdfvideo15[i].text}</p>
                        </div>
                    </div>`
        }
    }

    // Related Materials
    let mv_materials_3 = document.getElementById('mv_materials_3')

    const pdfmaterial15 = [
        {
            id: 1,
            title: "Implementing High-Performance Software-Defined Storage",
            img: "brief.png",
            link: "",
        },
        {
            id: 2,
            title: "The Four Superpowers of Digital Transformation | Episode 93",
            img: "brief.png",
            link: "",
        },
        {
            id: 3,
            title: "An Argument for a Holistic Approach to Critical Infrastructure...",
            img: "brief.png",
            link: "",
        },
        {
            id: 4,
            title: "ADLINK AOI with Intel® Arc™ Graphics for the Edge Solution Brief",
            img: "brief.png",
            link: "",
        },
        {
            id: 5,
            title: "Business-class 11th Gen Intel® Core™ vPro® Processors Brief",
            img: "brief.png",
            link: "",
        },
        {
            id: 6,
            title: "Silicon Photonics 100G DR, FR and LR Optical Transceiver",
            img: "brief.png",
            link: "",
        },
        {
            id: 7,
            title: "VMware Solutions with Intel® Optane™ Technology",
            img: "brief.png",
            link: "",
        },
        {
            id: 8,
            title: "Homomorphic Encryption on 3rd Gen Intel® Xeon® Scalable Processors",
            img: "brief.png",
            link: "",
        },
        {
            id: 9,
            title: "Introducing the Intel® Optane™ SSD P1600X for Boot Drives",
            img: "tools.png",
            link: "",
        },
        {
            id: 10,
            title: "VDI Performance on Intel® Data Center GPU Flex Series White Paper",
            img: "brief.png",
            link: "",
        },
        {
            id: 11,
            title: "Intel® Optane™ Persistent Memory Workload Partner Solutions",
            img: "brief.png",
            link: "",
        },
        {
            id: 12,
            title: "Intel® Software Guard Extensions Solution Brief",
            img: "brief.png",
            link: "",
        },

    ]

    if (mv_materials_3) {
        for (let i = 0; i < pdfmaterial15.length; i++) {
            mv_materials_3.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${pdfmaterial15[i].img}"  alt="">
                                </div>
                                <h4><a href="/vaidikhtml/${pdfmaterial15[i].link}">${pdfmaterial15[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }




// (Intel® Data Center GPU Flex Series) Explore GPU-Ready Systems -> Related Materials 8
    // Related Videos
    let mv_video_4 = document.getElementById('mv_video_4')

    const pdfvideo16 = [
        {
            id: 1,
            title: "Optimizing Microsoft Data Center Networking with Intel® FPGAs",
            time: "2:38",
            text: "Learn how Microsoft deployed millions of Intel® FPGAs to improve efficiency and decrease latency to support disaggregation in cloud and telco markets.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 2,
            title: "Intel® 5G Solution 5000 Consumer",
            time: "3:23",
            text: "Introducing the 5G Solution 5000, delivering game-changing wireless performance to PCs.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 3,
            title: "Introducing Intel® Future Skills",
            time: "1:50",
            text: "Intel® Future Skills transforms workforce development and youth empowerment programs to help youth develop the skills and mindset for tomorrow's jobs. ",
            img: "demo-video.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 4,
            title: "Chips and Salsa Episode 35: Intel Hardware Security Academic Award",
            time: "26:55",
            text: "CRob and Jerry interview the winners of Intel's 2022 Hardware Security Academic Award. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 5,
            title: "Chips and Salsa Episode 29: STORM with Thais Moreira",
            time: "14:05",
            text: "Intel STORM Team: Thais Moreira.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 6,
            title: "Intel® Wireless-AC 2x2 Provides Fast Wi-Fi Speed",
            time: "3:33",
            text: "When you're looking to buy a new PC, choose the right Intel® Wireless-AC Wi-Fi solution to maximize streaming, gaming, and sharing experiences.",
            img: "Processing-Multiple.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
    ]

    if (mv_video_4) {
        for (let i = 0; i < pdfvideo16.length; i++) {
            mv_video_4.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${pdfvideo16[i].img}" alt=""></a>
                            </div>
                            <h3><a href="/vaidikhtml/${pdfvideo16[i].link}">${pdfvideo16[i].title} ${pdfvideo16[i].time ? `<small>(${pdfvideo16[i].time})</small>` : ""} </a></h3>
                            <p>${pdfvideo16[i].text}</p>
                        </div>
                    </div>`
        }
    }

    // Related Materials
    let mv_materials_4 = document.getElementById('mv_materials_4')

    const pdfmaterial16 = [
        {
            id: 1,
            title: "Improving Splunk & Kafka Platforms with Cloud-Native Technologies",
            img: "brief.png",
            link: "",
        },
        {
            id: 2,
            title: "Intel® Data Center GPU Flex Series Windows Cloud Gaming Brief",
            img: "brief.png",
            link: "",
        },
        {
            id: 3,
            title: "VDI Performance on Intel® Data Center GPU Flex Series White Paper",
            img: "brief.png",
            link: "",
        },
        {
            id: 4,
            title: "Intel GPU Flex Series for Virtual Desktop Infrastructure",
            img: "brief.png",
            link: "",
        },
        {
            id: 5,
            title: "Reduce Memory Costs of Microsoft SQL Running on vSphere",
            img: "brief.png",
            link: "",
        },
        {
            id: 6,
            title: "Tiered Memory in VMware’s Production Tanzu Environment",
            img: "brief.png",
            link: "",
        },
        {
            id: 7,
            title: "GE Healthcare: AI Helps Improve Patient Experience",
            img: "brief.png",
            link: "",
        },
        {
            id: 8,
            title: "Silicon Photonics 100G DR, FR and LR Optical Transceiver",
            img: "brief.png",
            link: "",
        },
        {
            id: 9,
            title: "Introducing the Intel® Optane™ SSD P1600X for Boot Drives",
            img: "tools.png",
            link: "",
        },
        {
            id: 10,
            title: "Intel® Software Guard Extensions Solution Brief",
            img: "brief.png",
            link: "",
        },
        {
            id: 11,
            title: "Intel® Memory Resilience Technology",
            img: "brief.png",
            link: "",
        },
        {
            id: 12,
            title: "Silicon Photonics 400G DR4 QSFP-DD Optical Transceiver",
            img: "brief.png",
            link: "",
        },

    ]

    if (mv_materials_4) {
        for (let i = 0; i < pdfmaterial16.length; i++) {
            mv_materials_4.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${pdfmaterial16[i].img}"  alt="">
                                </div>
                                <h4><a href="/vaidikhtml/${pdfmaterial16[i].link}">${pdfmaterial16[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }





// (Intel® Data Center GPU Flex Series) Explore GPU-Ready Systems -> Related Materials 9
    // Related Videos
    let mv_video_5 = document.getElementById('mv_video_5')

    const pdfvideo17 = [
        {
            id: 1,
            title: "What Is Intel® Optane™ Technology and Why it Matters",
            time: "2:59",
            text: "CPUs used to have a single core. Today they have tens of cores that constantly need to be fed data. It's like having a race car with bicycle wheels.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 2,
            title: "Intel® 5G Solution 5000 Consumer",
            time: "3:23",
            text: "Introducing the 5G Solution 5000, delivering game-changing wireless performance to PCs.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 3,
            title: "Neuromorphic Computing: Kapoho Point Development Board and Lava...",
            time: "1:18",
            text: "This demo introduces Intel’s latest neuromorphic innovation, Kapoho Point.",
            img: "demo-video.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 4,
            title: "Trusted Media:  Real-time FakeCatcher for Deepfake Detection",
            time: "2:18",
            text: "The dramatic rise of deepfakes is diminishing trust in online resources. Intel is working to counteract this trend with FakeCatcher, an AI-based tool for detecting fake media. In this demons...",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 5,
            title: "Chips and Salsa Episode 36: HW Sec Test of Time Award",
            time: "25:18",
            text: "Professor Srinivas Devadas and Professor Ed Suh discuss the paper they wrote over 20 years ago that won the Intel Test of Time Award in 2022.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 6,
            title: "Chips and Salsa Episode 35: Intel Hardware Security Academic Award",
            time: "26:55",
            text: "CRob and Jerry interview the winners of Intel's 2022 Hardware Security Academic Award.",
            img: "Processing-Multiple.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
    ]

    if (mv_video_5) {
        for (let i = 0; i < pdfvideo17.length; i++) {
            mv_video_5.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${pdfvideo17[i].img}" alt=""></a>
                            </div>
                            <h3><a href="/vaidikhtml/${pdfvideo17[i].link}">${pdfvideo17[i].title} ${pdfvideo17[i].time ? `<small>(${pdfvideo17[i].time})</small>` : ""} </a></h3>
                            <p>${pdfvideo17[i].text}</p>
                        </div>
                    </div>`
        }
    }

    // Related Materials
    let mv_materials_5 = document.getElementById('mv_materials_5')

    const pdfmaterial17 = [
        {
            id: 1,
            title: "Lenovo Solutions with Intel Technologies Hit the Sweet Spot",
            img: "brief.png",
            link: "",
        },
        {
            id: 2,
            title: "Intel® Data Center GPU Flex Series Windows Cloud Gaming Brief",
            img: "brief.png",
            link: "",
        },
        {
            id: 3,
            title: "VDI Performance on Intel® Data Center GPU Flex Series White Paper",
            img: "brief.png",
            link: "",
        },
        {
            id: 4,
            title: "IT Best Practices Hot Topics from IT Industry Experts",
            img: "brief.png",
            link: "",
        },
        {
            id: 5,
            title: "Reduce Memory Costs of Microsoft SQL Running on vSphere",
            img: "brief.png",
            link: "",
        },
        {
            id: 6,
            title: "Tiered Memory in VMware’s Production Tanzu Environment",
            img: "brief.png",
            link: "",
        },
        {
            id: 7,
            title: "Modern, Scalable Cyber Intelligence Platform with Apache Kafka",
            img: "brief.png",
            link: "",
        },
        {
            id: 8,
            title: "GE Healthcare: AI Helps Improve Patient Experience",
            img: "brief.png",
            link: "",
        },
        {
            id: 9,
            title: "Silicon Photonics 100G DR, FR and LR Optical Transceiver",
            img: "tools.png",
            link: "",
        },
        {
            id: 10,
            title: "Proportunity: AI Helps First-Time Buyers",
            img: "brief.png",
            link: "",
        },
        {
            id: 11,
            title: "Homomorphic Encryption on 3rd Gen Intel® Xeon® Scalable Processors",
            img: "brief.png",
            link: "",
        },
        {
            id: 12,
            title: "Introducing the Intel® Optane™ SSD P1600X for Boot Drives",
            img: "brief.png",
            link: "",
        },

    ]

    if (mv_materials_5) {
        for (let i = 0; i < pdfmaterial17.length; i++) {
            mv_materials_5.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${pdfmaterial17[i].img}"  alt="">
                                </div>
                                <h4><a href="/vaidikhtml/${pdfmaterial17[i].link}">${pdfmaterial17[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }





// (Intel® Data Center GPU Flex Series) Explore GPU-Ready Systems -> Related Materials 10
    // Related Videos
    let mv_video_6 = document.getElementById('mv_video_6')

    const pdfvideo18 = [
        {
            id: 1,
            title: "Intel® Xeon® D Processors Overview Video",
            time: "",
            text: "Put Intel® Xeon® platform performance to work in rugged edge and IoT applications with Intel® Xeon® D-1700 and D-2700 processors. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 2,
            title: "IoT Video Analytics with Intel® Xeon® D Processor Demo",
            time: "3:23",
            text: "Intel® Xeon® D processors are ideal for live video analytics at the edge, efficiently scaling from a few video streams to many.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 3,
            title: "Congatec COM-HPC Ecosystem Partner Video",
            time: "17:48",
            text: "COM-HPC Modules Leverage Intel® Xeon® D Processor for Server-Level Performance at the Edge",
            img: "demo-video.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 4,
            title: "Intel® 5G Solution 5000 Consumer",
            time: "",
            text: "Introducing the 5G Solution 5000, delivering game-changing wireless performance to PCs.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 5,
            title: "Intel Employee Service Corps in Puerto Rico",
            time: "3:25",
            text: "To help rebuild Puerto Rico’s schools after a category 5 hurricane, Intel Employee Service Corps reached 15,000 students in multiple schools.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 6,
            title: "3D XPoint™: A Breakthrough in Non-Volatile Memory Technology",
            time: "44:28",
            text: "Intel's Rob Crooke and Micron CEO Mark Durcan announce 3D XPoint™ non-volatile memory technology, a faster, denser, and revolutionary breakthrough.",
            img: "Processing-Multiple.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
    ]

    if (mv_video_6) {
        for (let i = 0; i < pdfvideo18.length; i++) {
            mv_video_6.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${pdfvideo18[i].img}" alt=""></a>
                            </div>
                            <h3><a href="/vaidikhtml/${pdfvideo18[i].link}">${pdfvideo18[i].title} ${pdfvideo18[i].time ? `<small>(${pdfvideo18[i].time})</small>` : ""} </a></h3>
                            <p>${pdfvideo18[i].text}</p>
                        </div>
                    </div>`
        }
    }

    // Related Materials
    let mv_materials_6 = document.getElementById('mv_materials_6')

    const pdfmaterial18 = [
        {
            id: 1,
            title: "Intel® Arc™ Graphics for the Edge Product Availability",
            img: "brief.png",
            link: "",
        },
        {
            id: 2,
            title: "Intel® Arc™ GPU for the Edge",
            img: "brief.png",
            link: "",
        },
        {
            id: 3,
            title: "VDI Performance on Intel® Data Center GPU Flex Series White Paper",
            img: "brief.png",
            link: "",
        },
        {
            id: 4,
            title: "Intel® Arc™ GPU for the Edge",
            img: "brief.png",
            link: "",
        },
        {
            id: 5,
            title: "Intel® Arc™ GPU for the Edge",
            img: "brief.png",
            link: "",
        },
        {
            id: 6,
            title: "Intel® Arc™ GPU for the Edge",
            img: "brief.png",
            link: "",
        },
        {
            id: 7,
            title: "Dell EMC PowerMax Speeds Data Access with Intel® Optane™ SSDs",
            img: "brief.png",
            link: "",
        },
        {
            id: 8,
            title: "Silicon Photonics 100G DR, FR and LR Optical Transceiver",
            img: "brief.png",
            link: "",
        },
        {
            id: 9,
            title: "VMware Solutions with Intel® Optane™ Technology",
            img: "tools.png",
            link: "",
        },
        {
            id: 10,
            title: "Introducing the Intel® Optane™ SSD P1600X for Boot Drives",
            img: "brief.png",
            link: "",
        },
        {
            id: 11,
            title: "Intel® Optane™ Persistent Memory Workload Partner Solutions",
            img: "brief.png",
            link: "",
        },
        {
            id: 12,
            title: "Intel® Software Guard Extensions Solution Brief",
            img: "brief.png",
            link: "",
        },

    ]

    if (mv_materials_6) {
        for (let i = 0; i < pdfmaterial18.length; i++) {
            mv_materials_6.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${pdfmaterial18[i].img}"  alt="">
                                </div>
                                <h4><a href="/vaidikhtml/${pdfmaterial18[i].link}">${pdfmaterial18[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }





// (Intel® Data Center GPU Flex Series) Find Systems with Intel® GPUs -> Related Materials 3
    // Related Videos
    let mv_video_1 = document.getElementById('mv_video_1')

    const pdfvideo13 = [
        {
            id: 1,
            title: "Hellometer with 13th Gen Intel Core Mobile Processor Demo Video",
            time: "3:48",
            text: "Video demonstrating how 13th Gen Intel Core mobile processors enables Hellometer to deliver more intelligence and performance for restaurants.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 2,
            title: "4th Gen Intel Xeon Scalable processors Siemens Healthineers video",
            time: "4:31",
            text: "4th Gen Intel Xeon Scalable processor AI acceleration, helps Siemens Healthineers to improve performance and sustainability.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 3,
            title: "Intel Atom® Processors x7000E Series Overview Video",
            time: "2:53",
            text: "Intel Atom® processors x7000E series and Intel® Core™ i3 processors break new ground for x86 processors in the 6W to 15W base processor power range.",
            img: "demo-video.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 4,
            title: "13th Gen Intel® Core™ Processors for IoT Edge Overview Video",
            time: "2:41",
            text: "Accelerate time to value for IoT with more options, performance and features for AI, analytics, computer vision, and industrial solutions at the edge.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 5,
            title: "13th Gen Intel Core Mobile Processors with BiriminD Demo Video",
            time: "3:41",
            text: "Learn how 13th Gen Intel Core processors improve BirminD manufacturing efficiency and performance for industrial wastewater treatment.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 6,
            title: "4th Gen Intel® Xeon® Scalable Processors for IoT Edge Video",
            time: "3:34",
            text: "4th Gen Intel® Xeon® Scalable processors deliver increased performance to accelerate IoT and edge deployments and drive faster time to results.",
            img: "Processing-Multiple.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
    ]

    if (mv_video_1) {
        for (let i = 0; i < pdfvideo13.length; i++) {
            mv_video_1.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${pdfvideo13[i].img}" alt=""></a>
                            </div>
                            <h3><a href="/vaidikhtml/${pdfvideo13[i].link}">${pdfvideo13[i].title} ${pdfvideo13[i].time ? `<small>(${pdfvideo13[i].time})</small>` : ""} </a></h3>
                            <p>${pdfvideo13[i].text}</p>
                        </div>
                    </div>`
        }
    }

    // Related Materials
    let mv_materials_1 = document.getElementById('mv_materials_1')

    const pdfmaterial13 = [
        {
            id: 1,
            title: "12th Gen Intel® Core™ Processors Infographic",
            img: "brief.png",
            link: "",
        },
        {
            id: 2,
            title: "12th Gen Intel® Core™ Desktop Processors for Edge Performance",
            img: "brief.png",
            link: "",
        },
        {
            id: 3,
            title: "12th Gen Intel® Core™ Processor for IoT Edge – Infographic",
            img: "brief.png",
            link: "",
        },
        {
            id: 4,
            title: "12th Gen Intel® Core™ Processors for IoT Edge Product Brief",
            img: "brief.png",
            link: "",
        },
        {
            id: 5,
            title: "Enhanced Speed and Capability with 13th Gen Intel® Core™ Processors",
            img: "brief.png",
            link: "",
        },
        {
            id: 6,
            title: "Intel Atom® x7000E Series, Intel® Core™ i3 Processors Brief",
            img: "brief.png",
            link: "",
        },
        {
            id: 7,
            title: "IoT and Embedded Processors",
            img: "brief.png",
            link: "",
        },
        {
            id: 8,
            title: "Baüne Ecosystems Inc.",
            img: "brief.png",
            link: "",
        },
        {
            id: 9,
            title: "Guangdong Rosmart Technology Co., Ltd.",
            img: "tools.png",
            link: "",
        },
        {
            id: 10,
            title: "12th Gen Intel Core Processor for IoT Announced",
            img: "brief.png",
            link: "",
        },
        {
            id: 11,
            title: "Jian 24 Smart Retail",
            img: "brief.png",
            link: "",
        },
        {
            id: 12,
            title: "WEIBU Information Inc.",
            img: "brief.png",
            link: "",
        },

    ]

    if (mv_materials_1) {
        for (let i = 0; i < pdfmaterial13.length; i++) {
            mv_materials_1.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${pdfmaterial13[i].img}"  alt="">
                                </div>
                                <h4><a href="/vaidikhtml/${pdfmaterial13[i].link}">${pdfmaterial13[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }




// Intel® Geti™ Platform -> (Blog) Blog Card
var mv_intel_geti_blog_data = [
    // page 1
    {
        image: "software-recognized-may-2024.jpg",
        category: "Blog",
        title: "Intel® Geti™ 2.0.0 Release: Advancing AI Model Development",
        date: "Jun. 5, 2024",
        description: "Intel® Geti™ 2.0.0 is here. A new release of Intel’s Vision AI software for building computer vision models faster and with less. This release includes several additions for data labeling, model training, and inferencing.The release is part of Intel’s ongoing commitment to deliver high-quality software. All existing customers are invited to upgrade to Intel Geti 2.0.0 and take advantage of the latest functionality!",
        link: "blog_read_more_card_one.html",
        model_link: "https://geti.intel.com/blog/intel-geti-2-0-0-release-advancing-ai-model-development",
    },
    {
        image: "dashboard-456x300.png",
        category: "Blog",
        title: "Data and AI Metrics with Intel® Geti™",
        date: "May. 24, 2024",
        description: "Learn how to define and leverage metrics to identify improvements and repetitively refine your AI project with Intel® Geti™ software.",
        link: "blog_read_more_card_two.html",
        model_link: "https://geti.intel.com/blog/data-and-ai-metrics-with-intel-geti",
    },
    {
        image: "blog_intel_Geti_ai_Platform-466x300.webp",
        category: "Blog",
        title: "Intel® Geti™ AI Software Overview: Learn What Is Under the Hood",
        date: "May. 14, 2024",
        description: "Intel® Geti™ software enables anyone to build models rapidly and accelerate innovation across their businesses with AI. Learn about its features that can help you speed up your computer vision model development workflow and create new computer vision solutions for your organization.",
        link: "blog_read_more_card_three.html",
        model_link: "https://geti.intel.com/blog/intel-geti-ai-platform-overview-learn-what-is-under-the-hood",
    },
    {
        image: "ISC-West-Award-thumbnail.jpg",
        category: "Blog",
        title: "Intel® Geti™ Software Recognized by SIA as Winner of the Best New Products & Solutions Award for Video Analytics  at ISC West, 2024",
        date: "May. 7, 2024",
        description: "Intel® Geti™ software was selected as the 2024 Winner of the Video Analytics for its Intel® Geti™ software and honored April 10 during an award ceremony on the Bridge Stage on the ISC West Show Floor. The product name was also displayed on the ISC West show floor throughout the event from April 9-12.",
        link: "blog_read_more_main_card_one.html",
        model_link: "https://geti.intel.com/blog/intel-geti-software-recognized-by-sia-as-winner-of-the-best-new-products-solutions-award-for-video-analytics-at-isc-west-2024",
    },
    {
        image: "MicrosoftTeams-image-1-500x253-1.png",
        category: "Blog",
        title: "Mastering the Intel® Geti™ SDK in 9 Steps: A Beginner’s Guide",
        date: "Nov. 23, 2023",
        description: "When you have your production system working 24/7, it will be difficult or sometimes impossible to stop your production in order to update your models, add new objects to detect, replace a camera and recalibrate, or change elements in your workload.",
        link: "blog_read_more_card_five.html",
        model_link: "https://geti.intel.com/blog/mastering-the-intel-geti-sdk-in-9-steps-a-beginners-guide",
    },
    {
        image: "intel-500x281-1.webp",
        category: "Blog",
        title: "The Next Evolution: Intel® Geti™ 1.8.0 is here",
        date: "Oct. 25, 2023",
        description: "Intel’s software platform for building custom computer vision models more efficiently just launched a new version: Intel® Geti™ 1.8.0. This release includes additions for an enhanced data labeling experience with the Segment Anything Model (SAM), new storage management resources, and ready-to-use datasets.",
        link: "blog_read_more_card_six.html",
        model_link: "https://geti.intel.com/blog/the-next-evolution-intel-getitm-1-8-0-is-here",
    },
    {
        image: "getty-1082066722-fill-500x281-1.png",
        category: "Blog",
        title: "Interactive Annotation with SAM – speeding up the time to model",
        date: "Oct. 25, 2023",
        description: "Interactive Annotation with SAM – speeding up the time to model Request Trial In this post, we will discuss how we are utilizing the power of Segment Anything Model (SAM) in an interactive annotation process and speeding up the time to model for users of Intel® Geti™ software. Data preparation and the quality of data...",
        link: "blog_read_more_card_seven.html",
        model_link: "https://geti.intel.com/blog/interactive-annotation-with-sam-speeding-up-the-time-to-mode",
    },
    {
        image: "Computer-vision-1.jpg",
        category: "Blog",
        title: "Computer Vision Task Overview and Applications",
        date: "Oct. 13, 2023",
        description: "Learn what computer vision tasks are supported in Intel® Geti™ software and how it can help you solve your business automation challenges with computer vision.",
        link: "blog_read_more_card_eight.html",
        model_link: "https://geti.intel.com/blog/computer-vision-task-overview-and-applications",
    },
    {
        image: "blog_img1.jpg",
        category: "Blog",
        title: "The Intel® Geti™ SDK: A Game-Changer for Rapid AI Model Development and Deployment in your production system",
        date: "Sep. 5, 2023",
        description: "In today's fast-paced world, businesses require quick and accurate decision-making abilities. This is where Artificial Intelligence (AI) models come into play. AI models can analyze vast amounts of data, extract insights, and provide businesses with the intelligence required to make quick, data-driven decisions.",
        link: "blog_read_more_card_nine.html",
        model_link: "https://geti.intel.com/blog/the-intel-geti-sdk-a-game-changer-for-rapid-ai-model-development-and-deployment-in-your-production-system",
    },
    // page 2
    {
        image: "brand-photography-library-71-fill-500x281-1.png",
        category: "Blog",
        title: "Enhance your experience: Introducing Intel® Geti™ 1.5.0",
        date: "Jun. 7, 2023",
        description: "We are excited to announce the launch of Intel Geti 1.5.0, a new platform version! Intel Geti software enables teams to build computer vision models for their AI applications. This release includes new features and expands functionality for a more effective and agile model development and deployment path. The release is part of our ongoing commitment to deliver high-quality software.",
        link: "blog_read_more_card_ten.html",
        model_link: "https://geti.intel.com/blog/enhance-your-experience-introducing-intel-geti-1-5-0",
    },
    {
        image: "faq-mobile-1.webp",
        category: "Blog",
        title: "Efficient, custom object detection training template made easy",
        date: "Feb. 1, 2023",
        description: "Deep Learning algorithms are widely used in the industry today – from detecting defects in parts on the factory production line to recommending products to shoppers on e-commerce websites. These algorithms proved their high accuracy and efficiency and have driven significant innovations in businesses utilizing them.",
        link: "blog_read_more_card_eleven.html",
        model_link: "https://geti.intel.com/blog/efficient-custom-object-detection-training-template-made-easy"
    },
    {
        image: "Streamlining-AIs-Path-to-Production-with-the-Intel®-Geti™-Platform-500x261-1.png",
        category: "Blog",
        title: "Streamlining AI’s Path to Production with Intel® Geti™ Software",
        date: "Dec. 13, 2022",
        description: "We are thrilled to announce Intel Geti software is now commercially available for select customers. The software unites the right people and the right data for an efficient path to building high-quality solutions, overcoming obstacles to bring AI pilots to production.",
        link: "blog_read_more_card_twelve.html",
        model_link: "https://geti.intel.com/blog/streamlining-ais-path-to-production-with-the-intel-geti-platform",
    },
    {
        image: "blog_does_active_learning--466x300.webp",
        category: "Blog",
        title: "Does Active Learning Help Speed Up AI Model Development?",
        date: "Sept. 27, 2022",
        description: "The key to improving the productivity of computer vision AI model development is to involve human experts in the model-building loop for a continuous feedback process. Learn how active learning in the Intel® Geti™ computer vision AI platform enables just that",
        link: "blog_read_more_card_thirteen.html",
        model_link: "https://geti.intel.com/blog/does-active-learning-help-speed-up-ai-model-development"
    },
    {
        image: "challenge-1-500x295.webp",
        category: "Blog",
        title: "Challenges for Organizations Building Computer Vision AI Models",
        date: "Sept. 27, 2022",
        description: "Computer vision is one of the most exciting subsets of artificial intelligence and machine learning. We’re already seeing a wealth of real-world use cases in industries from manufacturing to agriculture to retail. The possibilities that computer vision offers span essentially every single industry and field and are growing rapidly.",
        link: "blog_read_more_card_fourteen.html",
        model_link: "https://geti.intel.com/blog/challenges-for-organizations-building-computer-vision-ai-models"
    },
    {
        image: "computer-vision-1-500x295.webp",
        category: "Blog",
        title: "Computer Vision Applications that Span Industries and Sectors",
        date: "Sept. 27, 2022",
        description: "How many security camera feeds can a single person monitor effectively? Even assuming one person can handle all camera feeds for an entire facility, how many people are needed for 24/7 monitoring of twenty different sites, each in a different state or country? Now let’s give this task to a computer that can simultaneously monitor every single camera feed for all facilities without needing to take a break or even blink.",
        link: "blog_read_more_card_fifteen.html",
        model_link: "https://geti.intel.com/blog/computer-vision-applications-that-span-industries-and-sectors"
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
        const html = arr.map((ele, ind) => {
            return `<div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                            <div class="mv_spark_card_featured">
                                <div class="mv_imgboxhiden">
                                    <div class="mv_spark_card_featured_img mv_spark_card_featured_img1" style="background-image: url('/img/mv_image/${ele.image}');"></div>
                                </div>
                                <div class="mv_industrie_overlay">
                                    <div class="mv_spark_card_titles">
                                        <p style="color: #fff;" class="mv_subtitle">${ele.category}</p>
                                        <div class="mv_spark_card_metrics text-white">
                                            <span><a href="${ele.link}">${ele.title}</a></span>
                                        </div>
                                    </div>
                                    <div class="mv_spark_card_description">
                                        <p class="mv_dated">${ele.date}</p>
                                        <p class="mv_textellipsis">${ele.description}</p>
                                    </div>
                                </div>
                                <div class="mv_spark_card_vertical_buttons">
                                    <div>
                                        <span class="mv_spark_button_content"><a href="${ele.link}">Read More</a></span>
                                        <span><i style="font-size: 15px !important;" class="fa-solid fa-arrow-right-long"></i></span>
                                    </div>
                                    <!-- Card One Model -->
                                    <span class="mv_socialIcon" onclick="handle_model_open(event, ${ind})">
                                        <div>
                                            <i class="fa-solid fa-share-nodes"></i>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>`;
        }).join('');
        div.innerHTML = html;
    }
    else {
        return;
    }
}

function handle_model_open(event, id) {
    event.preventDefault();

    let modal = new bootstrap.Modal(document.getElementById('mv_blog_card_share_model'));
    modal.show();

    document.getElementById('mv_model_title').innerText = mv_intel_geti_blog_data[id].title;
    document.getElementById('mv_model_link').innerText = mv_intel_geti_blog_data[id].model_link;

}





// Intel® Geti™ Platform -> (Video) video Card
var mv_intel_geti_video_data = [
    // page 1
    {
        image: "software-recognized-may-2024.jpg",
        category: "Video",
        title: "Intel® Geti™ 2.0.0 Release: Advancing AI Model Development",
        date: "Jun. 5, 2024",
        description: "Intel® Geti™ 2.0.0 is here. A new release of Intel’s Vision AI software for building computer vision models faster and with less. This release includes several additions for data labeling, model training, and inferencing.The release is part of Intel’s ongoing commitment to deliver high-quality software. All existing customers are invited to upgrade to Intel Geti 2.0.0 and take advantage of the latest functionality!",
        link: "video_read_more_card_one.html",
        model_link: "https://geti.intel.com/video/transforming-olympic-games-viewing-with-the-intel-geti-platform"
    },
    {
        image: "software-recognized-may-2024.jpg",
        category: "Video",
        title: "Building end-to-end pipelines with the Intel® Geti™ SDK",
        date: "Apr. 15, 2024",
        description: "The demo showcases key features and functionalities of the Intel Geti SDK to help developers build end-to-end AI application pipelines, utilizing the computer vision models built using Intel Geti software.",
        link: "video_read_more_card_two.html",
        model_link: "https://geti.intel.com/video/building-end-to-end-pipelines-with-the-the-intel-getitm-sdk"
    },
    {
        image: "software-recognized-may-2024.jpg",
        category: "Video",
        title: "Revolutionizing Sports Broadcasting with AI",
        date: "Feb. 8, 2024",
        description: "Dive into the future of sports broadcasting as WSC showcases its AI platform, which automatically and in real-time understands sports broadcasts and creates short-form content at scale.",
        link: "video_read_more_card_three.html",
        model_link: "https://geti.intel.com/video/revolutionizing-sports-broadcasting-with-ai"
    },
    {
        image: "software-recognized-may-2024.jpg",
        category: "Video",
        title: "Product Demo: Core Capabilities Overview",
        date: "Jun. 15, 2023",
        description: "The Intel Geti Platform's core capabilities empower business and data science users to work together within a single platform. This demo video showcases the capabilities enabling these users with varied expertise utilize the platform to accelerate computer vision workflows.",
        link: "video_read_more_card_four.html",
        model_link: "https://geti.intel.com/video/product-demo-core-capabilities-overview"
    },
    {
        image: "software-recognized-may-2024.jpg",
        category: "Video",
        title: "Introduction to Intel’s Next Generation Computer Vision AI Platform",
        date: "Sept. 27, 2022",
        description: "Get a look into Intel Geti computer vision platform. We will show you how you can build and deploy AI models faster.",
        link: "video_read_more_card_five.html",
        model_link: "https://geti.intel.com/video/introduction-to-intels-next-generation-computer-vision-ai-platform"
    },
    {
        image: "software-recognized-may-2024.jpg",
        category: "Video",
        title: "Product Demo: Build AI Models with Intel Geti Software",
        date: "Sept. 27, 2022",
        description: "Intel Geti software offers a powerful yet intuitive interface to develop computer vision models for various applications from manufacturing to healthcare and smart cities. This demo video features an agricultural use case example.",
        link: "video_read_more_card_six.html",
        model_link: "https://geti.intel.com/video/product-demo-build-ai-models-with-intel-geti-platform"
    },
    {
        image: "software-recognized-may-2024.jpg",
        category: "Video",
        title: "Bravent Creates Industrial Vision Solutions with Intel® Geti™ Software",
        date: "Sept. 27, 2022",
        description: "Experts from IT consultancy Bravent discuss how Intel® Geti™ software enables them to collaborate with their enterprise customers to develop computer vision solutions more quickly than ever before.",
        language: "Spanish Subtitles",
        link: "video_read_more_card_seven.html",
        model_link: "https://geti.intel.com/video/bravent-creates-industrial-vision-solutions-with-intel-geti-platform"
    },
    {
        image: "software-recognized-may-2024.jpg",
        category: "Video",
        title: "Using Intel® Geti™ Software to Transform Medical Research",
        date: "Sept. 27, 2022",
        description: "London-based hospital Royal Brompton leverages Intel® Geti™ software to train AI models that are used to diagnose rare diseases.",
        link: "video_read_more_card_eight.html",
        model_link: "https://geti.intel.com/video/bravent-creates-industrial-vision-solutions-with-intel-geti-platform"
    },
    {
        image: "software-recognized-may-2024.jpg",
        category: "Video",
        title: "Getting Started with Computer Vision AI Models",
        date: "Sept. 27, 2022",
        description: "Get an introduction into computer vision and artificial intelligence and learn how Intel® Geti™ software brings them all together.",
        link: "video_read_more_card_nine.html",
        model_link: "https://geti.intel.com/video/getting-started-with-computer-vision-ai-models"
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
                                        <span><a href="">${ele.title}</a></span>
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
                                        <div>
                                            <span class="mv_spark_button_content"><a href="">Watch Video</a></span>
                                            <span><i style="font-size: 15px !important;" class="fa-solid fa-arrow-right-long"></i></span>
                                        </div>
                                    </li>
                                    ${ele.language ? `<li>
                                        <div>
                                            <span class="mv_spark_button_content"><a href="">${ele.language}</a></span>
                                            <span><i style="font-size: 15px !important;" class="fa-solid fa-arrow-right-long"></i></span>
                                        </div>
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
    else {
        return;
    }
}




// Intel® Geti™ Platform -> (Case Study) Case Study Card
var mv_intel_geti_case_data = [
    // page 1
    {
        image: "Streamlining-AI-Model-Development-in-Biotech-for-Cancer-Diagnosis.png",
        category: "Case Study",
        title: "Streamlining AI Model Development in Biotech for Cancer Diagnosis",
        date: "Dec. 15, 2023",
        description: "The JelloX Federated Learning Platform allows clinical data from multiple healthcare organizations to be used for collaborative AI model development while meeting regulatory requirements and maintaining patient privacy. The solution utilizes Intel® Geti™ software to overcome intense resource requirements for clinical workers to label the data and train vision models.",
        link: "casestudy_read_more_card_one.html",
        model_link: "https://geti.intel.com/case-study/streamlining-ai-model-development-in-biotech-for-cancer-diagnosis"
    },
    {
        image: "download.png",
        category: "Case Study",
        title: "Optimizing AI Model Training and Refinement for Automated Optical Inspection (AOI)",
        date: "Dec. 18, 2023",
        description: "Fatigue and other human limitations are a familiar impediment to the accuracy and efficiency of visual inspection on manufacturing lines. ASRock Industrial set out to overcome those challenges with an implementation of state-of-the-art AI Automated Optical Inspection (AOI) in production of printed circuit boards at its OEM factory...",
        link: "casestudy_read_more_card_two.html",
        model_link: "https://geti.intel.com/case-study/optimizing-ai-model-training-and-refinement-for-automated-optical-inspection-aoi"
    },
    {
        image: "Computer-Vision-AI-Education-and-Deployment-Leaps-for-featured.webp",
        category: "Case Study",
        title: "Computer Vision AI Education and Deployment Leaps Forward with a New Approach from ITis and Intel",
        date: "Feb. 2, 2023",
        description: "While computer vision and other forms of AI have the potential to transform a wide range of processes across many industries, it can be incredibly challenging to integrate these technologies into real-world applications. One of the more formidable roadblocks is developing internal expertise and equipping people with the hands-on skills to tackle complex data science tasks.",
        link: "casestudy_read_more_card_three.html",
        model_link: "https://geti.intel.com/case-study/computer-vision-ai-education-and-deployment-leaps-forward-with-a-new-approach-from-itis-and-intel"
    },
    {
        image: "Naturalis-and-DIOPSIS-Harness-the-Power-of-the-Intel®-Geti™-Platform-to-Overcome-Data-Challenges-in-Biodiversity-Research-1.webp",
        category: "Case Study",
        title: "Naturalis and DIOPSIS Harness the Power of Intel® Geti™ Software to Overcome Data Challenges in Biodiversity Research",
        date: "Nov. 28, 2022",
        description: "With Intel Geti software, the DIOPSIS Consortium created an innovative AI-based insect monitoring method to better understand insect population declines and to help protect biodiversity.",
        link: "casestudy_read_more_card_four.html",
        model_link: "https://geti.intel.com/case-study/naturalis-and-diopsis-harness-the-power-of-the-intel-geti-platform-to-overcome-data-challenges-in-biodiversity-research"
    },
    {
        image: "getiimages-1180547365-16x9-1-500x281.jpg",
        category: "Case Study",
        title: "Intel Geti Software Accelerates AI Model Training for Real-Time Nerve Detection in Samsung Ultrasound Systems",
        date: "May. 27, 2024",
        description: "Samsung Medison’s NerveTrack™ is an innovative ultrasound feature used to identify nerve structures in real time during the application of anesthesia. Training of NerveTrack™’s deep learning inference models requires thousands of annotated ultrasound reference images. The image annotation process is best performed by doctors with years of medical training and experience in identifying the small, elusive nerve structures.",
        link: "casestudy_read_more_card_five.html",
        model_link: "https://geti.intel.com/case-study/intel-geti-platform-accelerates-ai-model-training-for-real-time-nerve-detection-in-samsung-ultrasound-systems"
    },
    {
        image: "1-500x261.webp",
        category: "Case Study",
        title: "Small Robot Co uses Intel® Geti™ Software for efficient modelling to create more sustainable crops",
        date: "Oct. 24, 2022",
        description: "Helping farmers feed the world while regenerating the planet is the driving force behind Small Robot Co. Their vision is “per plant farming”: rather than treating a field of crops together as one entity, they treat each plant individually to reduce external inputs such as fertilizers, pesticides and herbicides. Machine learning and AI are a crucial part of the per plant farming process...",
        link: "casestudy_read_more_card_six.html",
        model_link: "https://geti.intel.com/case-study/monitoring-pedestrian-rail-crossings-with-computer-vision-ai"
    },
    {
        image: "adobestock-191187347-450x300-1.webp",
        category: "Case Study",
        title: "Monitoring Pedestrian Rail Crossings with Computer Vision AI",
        date: "Dec. 20, 2022",
        description: "Sensing Feeling uses Intel Geti software to accelerate training of AI models for automated pedestrian sensing solutions at railway crossings.Pedestrian incursions into railway crossings are a dramatic safety issue and point of liability for rail infrastructure operators. Automated sensing solutions that use computer vision (CV) to address these issues have been hampered by the low-quality images from decades-old...",
        link: "casestudy_read_more_card_seve.html",
        model_link: "https://geti.intel.com/case-study/monitoring-pedestrian-rail-crossings-with-computer-vision-ai"
    },
    {
        image: "monitoring-500x281.webp",
        category: "Case Study",
        title: "Monitoring Construction Worker Safety with Custom Computer Vision AI Models",
        date: "Dec. 1, 2022",
        description: "Sensing Feeling, a solution provider based in the UK, is working on developing custom AI models of heavy equipment with Intel Geti software to increase workers' safety. The Sensing Feeling smart visual sensing platform provides edge-based analytics using the machine vision AI models built with Intel Geti software. The occupational-safety solution monitors the safety zones surrounding heavy equipment to identify unsafe proximity by personnel.",
        link: "casestudy_read_more_card_eight.html",
        model_link: "https://geti.intel.com/case-study/monitoring-construction-worker-safety-with-custom-computer-vision-ai-models"
    },
    {
        image: "cities-meets-500x281.webp",
        category: "Case Study",
        title: "Building Custom AI Models to Help Cities Meet Their Net-Zero Goals",
        date: "May. 27, 2024",
        description: "To mitigate climate change, local authorities can optimize their planning and operations with smart cities technology. In the UK, SSE Energy Solutions is developing AI-powered optical sensors based on Intel® architecture, Intel Geti AI software, and the Sensing Feeling software to transform video feeds into insights at the network edge that help cities meet environmental imperatives.",
        link: "casestudy_read_more_card_nine.html",
        model_link: "https://geti.intel.com/case-study/building-custom-ai-models-to-help-cities-meet-their-net-zero-goals"
    },
    // page 2
    {
        image: "img_building_custom_AI_models-1-448x300.webp",
        category: "Case Study",
        title: "New Computer Vision Platform Helps Clinicians Train AI to Recognize a Rare Disease",
        date: "May. 27, 2024",
        description: "London-based hospital Royal Brompton used the Intel® Geti™ software to translate their expertise into a machine learning inference algorithm that transforms their research.",
        link: "casestudy_read_more_card_ten.html",
        model_link: "https://geti.intel.com/case-study/new-computer-vision-platform-helps-clinicians-train-ai-to-recognize-a-rare-disease"
    },
    {
        image: "bravent-creates-agile-500x295.webp",
        category: "Case Study",
        title: "Bravent Creates Agile, Scalable Industrial Vision Solutions with Intel® Geti™ Software and OpenVINO™ Toolkit",
        date: "Sep. 19, 2022",
        description: "IT consultancy Bravent developed an efficient, flexible AI-based computer vision solution to reduce human error in complex machinery assemblies, which can be scaled and adapted across a range of industries.",
        languageenglish: " (English)",
        languagespanish: "Download (Spanish)",
        link: "casestudy_read_more_card_eleven.html",
        model_link: "https://geti.intel.com/case-study/bravent-creates-agile-scalable-industrial-vision-solutions-with-intel-geti-platform-and-openvino-toolkit"
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
                                            <span><a href="">${ele.title}</a></span>
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
                                            <div>
                                                <span class="mv_spark_button_content"><a href="#">Download${ele.languageenglish}</a></span>
                                            </div>
                                        </li>` :
                    `<li>
                                            <div>
                                                <span class="mv_spark_button_content"><a href="">Download</a></span>
                                            </div>
                                        </li>`}
                                        ${ele.languagespanish ? `<li>
                                            <div>
                                                <span class="mv_spark_button_content"><a href="">${ele.languagespanish}</a></span>
                                            </div>
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
    else {
        return;
    }
}




// Intel® Data Center GPU Flex Series -> (See AI performance data 140) Table Data
// var table1_data =[
//     {FrameworkVersion:'OpenVINO 2023.2',Model:'ResNet50 v1.5',Dataset:'ImageNet2012',Usage:'Image Recognition',Mode:'Inference',Precision:'int8',Throughput:'3,125 img/s',BatchSize:'256'},
//     {FrameworkVersion:'OpenVINO 2023.2',Model:'ResNet50 v1.5',Dataset:'ImageNet2013',Usage:'Image Recognition',Mode:'Inference',Precision:'int8',Throughput:'1,573 img/s',BatchSize:'1'},
//     {FrameworkVersion:'OpenVINO 2023.2',Model:'Yolov 4',Dataset:'COCO2017_detection',Usage:'Object Detection',Mode:'Inference',Precision:'int8',Throughput:'402 img/s',BatchSize:'64'},
//     {FrameworkVersion:'OpenVINO 2023.2',Model:'Yolov 4',Dataset:'COCO2017_detection',Usage:'Object Detection',Mode:'Inference',Precision:'int8',Throughput:'259 img/s',BatchSize:'1'},
//     {FrameworkVersion:'Intel® Pytorch 1.13',Model:'ResNet50 v1.5',Dataset:'ImageNet2012',Usage:'Image Recognition',Mode:'Inference',Precision:'int8',Throughput:'3,001 img/s',BatchSize:'256'},
//     {FrameworkVersion:'Intel® Pytorch 1.13',Model:'Yolov 4',Dataset:'COCO2017_detection',Usage:'Object Detection',Mode:'Inference',Precision:'int8',Throughput:'365 img/s',BatchSize:'64'},
//     {FrameworkVersion:'Intel TensorFlow 2.13',Model:'ResNet50 v1.5',Dataset:'ImageNet2012',Usage:'Image Recognition',Mode:'Inference',Precision:'int8',Throughput:'3,203 img/s',BatchSize:'	256'},
// ]
// function loaddatatable1(x,y){
//     console.log(x,y);
//     if(y=='table1'){
//     var val=table1_data.filter((ele,ind)=>{
//             return ele.PlatformName.includes(x);
//     });
//     console.log(val);
//     table1(val);
//     }
//     if(x==undefined){
//     table1(table1_data);    
//     }
// }
// function table1(table){
//     console.log('table',table)
//     var table1=document.getElementById('table1');
//     table1.innerHTML=table.map((ele,ind)=>{
//         return `
//             <tr>
//                 <td class="PlatformName px-2">${ele.FrameworkVersion}</td>
//                 <td class="px-2 CPU">${ele.Model}</td>
//                 <td class="px-2 DiscreteAccelerator">${ele.Dataset}</td>
//                 <td class="px-2 Device">${ele.Usage}</td>
//                 <td class="px-2 Frameworks">${ele.Mode}</td>
//                 <td class="px-2 Model">${ele.Precision}</td>
//                 <td class="px-2 VideoTypeResolution">${ele.Throughput}</td>
//                 <td class="px-2 Presicion">${ele.BatchSize}</td>
//             </tr>
//         `;
//     }).join('');
// }
// function fliterdata(x){
//     var checkbox = document.getElementById(x);
//     var isChecked = checkbox.checked;
//     console.log(isChecked);
//     if (!isChecked) {
//         var elements = document.getElementsByClassName(x);
//         for (var i = 0; i < elements.length; i++) {
//             elements[i].classList.add('d-none');
//         }
//     }
//     else{
//                 var elements = document.getElementsByClassName(x);
//                 for (var i = 0; i < elements.length; i++) {
//                     elements[i].classList.remove('d-none');
//                 }
//     }
// }




// Intel® Data Center GPU Flex Series -> (See AI performance data 170) Table Data
// var table1_data =[
//     {FrameworkVersion:'Intel TensorFlow 2.13',Model:'Stable Diffusion',Dataset:'Text Prompts',Usage:'Generative AI',Precision:'fp16',Throughput:'6.45 its/s',BatchSize:'1'},
//     {FrameworkVersion:'OpenVINO 2023.2',Model:'	ResNet50 v1.5',Dataset:'ImageNet2012',Usage:'Image Recognition',Precision:'	int8',Throughput:'9,499 img/s',BatchSize:'256'},
//     {FrameworkVersion:'OpenVINO 2023.2',Model:'	ResNet50 v1.5',Dataset:'ImageNet2013',Usage:'Image Recognition',Precision:'	int8',Throughput:'3,297 img/s',BatchSize:'1'},
//     {FrameworkVersion:'OpenVINO 2023.2',Model:'Yolov 4',Dataset:'COCO2017_detection',Usage:'Object Detection',Precision:'	int8',Throughput:'1,209 img/s',BatchSize:'256'},
//     {FrameworkVersion:'OpenVINO 2023.2',Model:'Yolov 4',Dataset:'COCO2017_detection',Usage:'Object Detection',Precision:'	int8',Throughput:'595 img/s',BatchSize:'1'},
//     {FrameworkVersion:'Intel® Pytorch 1.13',Model:'	ResNet50 v1.5',Dataset:'ImageNet2012',Usage:'Image Recognition',Precision:'int8',Throughput:'9,673 img/s',BatchSize:'1024'},
//     {FrameworkVersion:'Intel® Pytorch 1.13',Model:'Yolov4',Dataset:'COCO2017_detection',Usage:'Object Detection',Precision:'int8',Throughput:'1,139 img/s',BatchSize:'256'},
//     {FrameworkVersion:'Intel TensorFlow 2.13',Model:'ResNet50 v1.5',Dataset:'ImageNet2012',Usage:'Image Recognition',Precision:'int8',Throughput:'9,801 img/s',BatchSize:'1024'},
//     {FrameworkVersion:'Intel TensorFlow 2.13',Model:'EfficientNet-B0',Dataset:'ImageNet2012',Usage:'Image Recognition',Precision:'fp16',Throughput:'1,890 img/s',BatchSize:'128'},
//     {FrameworkVersion:'Intel TensorFlow 2.13',Model:'EfficientNet-B3',Dataset:'ImageNet2012',Usage:'Image Recognition',Precision:'fp16',Throughput:'527 img/s',BatchSize:'128'},
//     {FrameworkVersion:'Intel TensorFlow 2.13',Model:'MaskRCNN',Dataset:'COCO2017_detection',Usage:'image Segmentation',Precision:'fp16',Throughput:'30 img/s',BatchSize:'16'}
// ]
// function loaddatatable2(x,y){
//     console.log(x,y);
//     if(y=='table1'){
//     var val=table1_data.filter((ele,ind)=>{
//             return ele.PlatformName.includes(x);
//     });
//     console.log(val);
//     table1(val);
//     }
//     if(x==undefined){
//     table1(table1_data);    
//     }
// }
// function table1(table){
//     console.log('table',table)
//     var table1=document.getElementById('table1');
//     table1.innerHTML=table.map((ele,ind)=>{
//         return `
//             <tr>
//                 <td class="PlatformName px-2">${ele.FrameworkVersion}</td>
//                 <td class="px-2 CPU">${ele.Model}</td>
//                 <td class="px-2 DiscreteAccelerator">${ele.Dataset}</td>
//                 <td class="px-2 Device">${ele.Usage}</td>
//                 <td class="px-2 Model">${ele.Precision}</td>
//                 <td class="px-2 VideoTypeResolution">${ele.Throughput}</td>
//                 <td class="px-2 Presicion">${ele.BatchSize}</td>
//             </tr>
//         `;
//     }).join('');
// }
// function fliterdata(x){
//     var checkbox = document.getElementById(x);
//     var isChecked = checkbox.checked;
//     console.log(isChecked);
//     if (!isChecked) {
//         var elements = document.getElementsByClassName(x);
//         for (var i = 0; i < elements.length; i++) {
//             elements[i].classList.add('d-none');
//         }
//     }
//     else{
//                 var elements = document.getElementsByClassName(x);
//                 for (var i = 0; i < elements.length; i++) {
//                     elements[i].classList.remove('d-none');
//                 }
//     }
// }




// ( AI Accelerators) -> Intel® Advanced Matrix Extensions (Intel® AMX) -> See the list
// Partners 5th Gen
var mv_partner_5gen = [
    {
        name: "Accenture",
        visit: "Accenture"
    },
    {
        name: "Accton",
        visit: "Accton"
    },
    {
        name: "Aewin",
        visit: "Aewin"
    },
    {
        name: "AIC",
        visit: "AIC"
    },
    {
        name: "Alibaba Cloud",
        visit: "Alibaba Cloud"
    },
    {
        name: "Altos Computing Inc.",
        visit: "Altos Computing Inc."
    },
    {
        name: "ASROCK Rack",
        visit: "ASROCK Rack"
    },
    {
        name: "Astera Labs",
        visit: "Astera Labs"
    },
    {
        name: "ASUS",
        visit: "ASUS"
    },
    {
        name: "AWS",
        visit: "AWS"
    },
    {
        name: "Axiomtek",
        visit: "Axiomtek"
    },
    {
        name: "Baidu",
        visit: "Baidu"
    },
    {
        name: "BCM Advanced Research",
        visit: "BCM Advanced Research"
    },
    {
        name: "Bytedance",
        visit: "Bytedance"
    },
    {
        name: "Canonical Group Limited",
        visit: "Canonical Group Limited"
    },
    {
        name: "Cisco",
        visit: "Cisco"
    },
    {
        name: "Cloudera",
        visit: "Cloudera"
    },
    {
        name: "Compal",
        visit: "Compal"
    },
    {
        name: "Databricks",
        visit: "Databricks"
    },
    {
        name: "Dell",
        visit: "Dell"
    },
    {
        name: "DerQ, USA",
        visit: "DerQ, USA"
    },
    {
        name: "Foxconn/FII",
        visit: "Foxconn/FII"
    },
    {
        name: "Fujitsu",
        visit: "Fujitsu"
    },
    {
        name: "Gigabyte",
        visit: "Gigabyte"
    },
    {
        name: "Google Cloud",
        visit: "Google Cloud"
    },
    {
        name: "Hitachi",
        visit: "Hitachi"
    },
    {
        name: "HPE",
        visit: "HPE"
    },
    {
        name: "Hypertec",
        visit: "Hypertec"
    },
    {
        name: "iBase Technology, Inc",
        visit: "iBase Technology, Inc"
    },
    {
        name: "IBM",
        visit: "IBM"
    },
    {
        name: "Infrasky",
        visit: "Infrasky"
    },
    {
        name: "Ingrasys",
        visit: "Ingrasys"
    },
    {
        name: "Insight",
        visit: "Insight"
    },
    {
        name: "Inventec",
        visit: "Inventec"
    },
    {
        name: "Lanner",
        visit: "Lanner"
    },
    {
        name: "Lekha Wireless",
        visit: "Lekha Wireless"
    },
    {
        name: "Lenovo",
        visit: "Lenovo"
    },
    {
        name: "Mettle Networks",
        visit: "Mettle Networks"
    },
    {
        name: "Microsoft",
        visit: "Microsoft"
    },
    {
        name: "Microsoft Azure",
        visit: "Microsoft Azure"
    },
    {
        name: "MiTAC Computing Technology Corp",
        visit: "MiTAC Computing Technology Corp"
    },
    {
        name: "MSi",
        visit: "MSi"
    },
    {
        name: "NEC Corporation",
        visit: "NEC Corporation"
    },
    {
        name: "NetElastic",
        visit: "NetElastic"
    },
    {
        name: "Nexcom",
        visit: "Nexcom"
    },
    {
        name: "Niral Networks",
        visit: "Niral Networks"
    },
    {
        name: "Nor-Tech",
        visit: "Nor-Tech"
    },
    {
        name: "NoviFlow, Inc",
        visit: "NoviFlow, Inc"
    },
    {
        name: "OVH",
        visit: "OVH"
    },
    {
        name: "Presidio",
        visit: "Presidio"
    },
    {
        name: "Prodrive",
        visit: "Prodrive"
    },
    {
        name: "QCT (Quanta)",
        visit: "QCT (Quanta)"
    },
    {
        name: "Red Hat",
        visit: "Red Hat"
    },
    {
        name: "Samsung",
        visit: "Samsung"
    },
    {
        name: "SAP",
        visit: "SAP"
    },
    {
        name: "SK Hynix",
        visit: "SK Hynix"
    },
    {
        name: "Supermicro",
        visit: "Supermicro"
    },
    {
        name: "Tech Mahindra",
        visit: "Tech Mahindra"
    },
    {
        name: "Tencent",
        visit: "Tencent"
    },
    {
        name: "TietoEvry",
        visit: "TietoEvry"
    },
    {
        name: "TQ",
        visit: "TQ"
    },
    {
        name: "Tyan Corp (sub of MiTAC)",
        visit: "Tyan Corp (sub of MiTAC)"
    },
    {
        name: "Varnish SW",
        visit: "Varnish SW"
    },
    {
        name: "VizuaMatix",
        visit: "VizuaMatix"
    },
    {
        name: "VMware",
        visit: "VMware"
    },
    {
        name: "VoerEir",
        visit: "VoerEir"
    },
    {
        name: "Wiwynn",
        visit: "Wiwynn"
    },
    {
        name: "WWT",
        visit: "WWT"
    },
    {
        name: "xfusion",
        visit: "xfusion"
    }
]
function mv_table_5gen() {
    if (document.querySelector('.mv_partner_data_5gen')) {
        let div = document.querySelector('.mv_partner_data_5gen')

        let html = mv_partner_5gen.map((ele) => {
            return `<tr>
                <td>${ele.name}</td>
                <td><b>Visit:</b> <a href="">${ele.visit}</a></td>
                </tr>`
        }).join('')
        div.innerHTML = html
    } else {
        return;
    }
}

// Partners 4th Gen
var mv_partner_4gen = [
    {
        name: "Adlink",
        visit: "Adlink"
    },
    {
        name: "Advantech Co., Ltd.",
        visit: "Advantech Co., Ltd."
    },
    {
        name: "AIC",
        visit: "AIC"
    },
    {
        name: "Alibaba Cloud",
        visit: "Alibaba Cloud"
    },
    {
        name: "Altos Computing Inc.",
        visit: "Altos Computing Inc."
    },
    {
        name: "AMAX",
        visit: "AMAX"
    },
    {
        name: "Arrow",
        visit: "Arrow"
    },
    {
        name: "ASI",
        visit: "ASI"
    },
    {
        name: "ASROCK Rack",
        visit: "ASROCK Rack"
    },
    {
        name: "ASUS",
        visit: "ASUS"
    },
    {
        name: "Atos",
        visit: "Atos"
    },
    {
        name: "Avnet",
        visit: "Avnet"
    },
    {
        name: "BCM Advanced Research",
        visit: "BCM Advanced Research"
    },
    {
        name: "Capgemini",
        visit: "Capgemini"
    },
    {
        name: "CBTS",
        visit: "CBTS"
    },
    {
        name: "CDW",
        visit: "CDW"
    },
    {
        name: "China Telecom",
        visit: "China Telecom"
    },
    {
        name: "Cisco",
        visit: "Cisco"
    },
    {
        name: "Clavister",
        visit: "Clavister"
    },
    {
        name: "ClusterVision",
        visit: "ClusterVision"
    },
    {
        name: "CommScope",
        visit: "CommScope"
    },
    {
        name: "Compal",
        visit: "Compal"
    },
    {
        name: "Compucom",
        visit: "Compucom"
    },
    {
        name: "Comset S.A",
        visit: "Comset S.A"
    },
    {
        name: "CoreWeave",
        visit: "CoreWeave"
    },
    {
        name: "D&H",
        visit: "D&H"
    },
    {
        name: "DataOn",
        visit: "DataOn"
    },
    {
        name: "Decentriq",
        visit: "Decentriq"
    },
    {
        name: "Dell",
        visit: "Dell"
    },
    {
        name: "E4 Computer Engineering",
        visit: "E4 Computer Engineering"
    },
    {
        name: "ePlus",
        visit: "ePlus"
    },
    {
        name: "Ericsson",
        visit: "Ericsson"
    },
    {
        name: "Eterio",
        visit: "Eterio"
    },
    {
        name: "Exoscale",
        visit: "Exoscale"
    },
    {
        name: "Flytech",
        visit: "Flytech"
    },
    {
        name: "FORMAT",
        visit: "FORMAT"
    },
    {
        name: "Gcore",
        visit: "Gcore"
    },
    {
        name: "Gigabyte",
        visit: "Gigabyte"
    },
    {
        name: "GleSYS",
        visit: "GleSYS"
    },
    {
        name: "Google Cloud",
        visit: "Google Cloud"
    },
    {
        name: "Hitachi",
        visit: "Hitachi"
    },
    {
        name: "HPE",
        visit: "HPE"
    },
    {
        name: "Hypertec",
        visit: "Hypertec"
    },
    {
        name: "Hyve Solutions",
        visit: "Hyve Solutions"
    },
    {
        name: "IBM Cloud",
        visit: "IBM Cloud"
    },
    {
        name: "IEI Integration Corp",
        visit: "IEI Integration Corp"
    },
    {
        name: "Ingram Micro",
        visit: "Ingram Micro"
    },
    {
        name: "Ingrasys",
        visit: "Ingrasys"
    },
    {
        name: "Insight Direct (UK) Ltd",
        visit: "Insight Direct (UK) Ltd"
    },
    {
        name: "Inspur",
        visit: "Inspur"
    },
    {
        name: "Inventec",
        visit: "Inventec"
    },
    {
        name: "Jabil Cloud & Enterprise Infrastructure",
        visit: "Jabil Cloud & Enterprise Infrastructure"
    },
    {
        name: "Kontron",
        visit: "Kontron"
    },
    {
        name: "Lanner",
        visit: "Lanner"
    },
    {
        name: "Lenovo",
        visit: "Lenovo"
    },
    {
        name: "Logicalis",
        visit: "Logicalis"
    },
    {
        name: "MAGUAY COMPUTERS",
        visit: "MAGUAY COMPUTERS"
    },
    {
        name: "Microsoft",
        visit: "Microsoft"
    },
    {
        name: "Mouser",
        visit: "Mouser"
    },
    {
        name: "Myungin Electronics",
        visit: "Myungin Electronics"
    },
    {
        name: "Nexcom",
        visit: "Nexcom"
    },
    {
        name: "Nokia",
        visit: "Nokia"
    },
    {
        name: "Oracle",
        visit: "Oracle"
    },
    {
        name: "OVH Cloud",
        visit: "OVH Cloud"
    },
    {
        name: "Presidio",
        visit: "Presidio"
    },
    {
        name: "Prodrive Technologies",
        visit: "Prodrive Technologies"
    },
    {
        name: "Quanta",
        visit: "Quanta"
    },
    {
        name: "SAS",
        visit: "SAS"
    },
    {
        name: "Scan",
        visit: "Scan"
    },
    {
        name: "SHI",
        visit: "SHI"
    },
    {
        name: "SI COMPUTER",
        visit: "SI COMPUTER"
    },
    {
        name: "Silicom",
        visit: "Silicom"
    },
    {
        name: "Silicon Mechanics",
        visit: "Silicon Mechanics"
    },
    {
        name: "Softcat",
        visit: "Softcat"
    },
    {
        name: "Supermicro",
        visit: "Supermicro"
    },
    {
        name: "SysAlign",
        visit: "SysAlign"
    },
    {
        name: "TD SYNNEX",
        visit: "TD SYNNEX"
    },
    {
        name: "Tencent",
        visit: "Tencent"
    },
    {
        name: "Thinkmate",
        visit: "Thinkmate"
    },
    {
        name: "Unicom",
        visit: "Unicom"
    },
    {
        name: "Varnish Software",
        visit: "Varnish Software"
    },
    {
        name: "Wind River",
        visit: "Wind River"
    },
    {
        name: "Wistron",
        visit: "Wistron"
    },
    {
        name: "Wiwynn",
        visit: "Wiwynn"
    },
    {
        name: "WWT",
        visit: "WWT"
    }
]
function mv_table_4gen() {
    if (document.querySelector('.mv_partner_data_4gen')) {
        let div = document.querySelector('.mv_partner_data_4gen')

        let html = mv_partner_4gen.map((ele) => {
            return `<tr>
                <td>${ele.name}</td>
                <td><b>Visit:</b> <a href="">${ele.visit}</a></td>
                </tr>`
        }).join('')
        div.innerHTML = html
    } else {
        return;
    }
}

// Partners 3th Gen
var mv_partner_3gen = [
    {
        name: "Advantech",
        visit: "Advantech"
    },
    {
        name: "AIC Inc.",
        visit: "AIC Inc."
    },
    {
        name: "Alibaba",
        visit: "Alibaba"
    },
    {
        name: "AMAX Engineering",
        visit: "AMAX Engineering"
    },
    {
        name: "ASRock Rack",
        visit: "ASRock Rack"
    },
    {
        name: "AWS",
        visit: "AWS"
    },
    {
        name: "Baidu",
        visit: "Baidu"
    },
    {
        name: "Boston Limited",
        visit: "Boston Limited"
    },
    {
        name: "CASwell Inc.",
        visit: "CASwell Inc."
    },
    {
        name: "CDW",
        visit: "CDW"
    },
    {
        name: "Cisco",
        visit: "Cisco"
    },
    {
        name: "Colfax",
        visit: "Colfax"
    },
    {
        name: "Dalco AG",
        visit: "Dalco AG"
    },
    {
        name: "Decentriq",
        visit: "Decentriq"
    },
    {
        name: "Dell",
        visit: "Dell"
    },
    {
        name: "E4 COMPUTER ENGINEERING SPA",
        visit: "E4 COMPUTER ENGINEERING SPA"
    },
    {
        name: "Edgeless Systems",
        visit: "Edgeless Systems"
    },
    {
        name: "Exertis Enterprise",
        visit: "Exertis Enterprise"
    },
    {
        name: "Flytech S.A.",
        visit: "Flytech S.A."
    },
    {
        name: "FORMAT Sp. z o. o",
        visit: "FORMAT Sp. z o. o"
    },
    {
        name: "Fujitsu",
        visit: "Fujitsu"
    },
    {
        name: "GIGABYTE Technology",
        visit: "GIGABYTE Technology"
    },
    {
        name: "Google",
        visit: "Google"
    },
    {
        name: "HPE",
        visit: "HPE"
    },
    {
        name: "Huawei Technologies Co. Ltd",
        visit: "Huawei Technologies Co. Ltd"
    },
    {
        name: "Inspur",
        visit: "Inspur"
    },
    {
        name: "Inventec",
        visit: "Inventec"
    },
    {
        name: "JITStack",
        visit: "JITStack"
    },
    {
        name: "Koi Computers, Inc.",
        visit: "Koi Computers, Inc."
    },
    {
        name: "Lanner Electronics",
        visit: "Lanner Electronics"
    },
    {
        name: "Lenovo",
        visit: "Lenovo"
    },
    {
        name: "Lockheed Martin",
        visit: "Lockheed Martin"
    },
    {
        name: "MEGWARE",
        visit: "MEGWARE"
    },
    {
        name: "MSFT",
        visit: "MSFT"
    },
    {
        name: "NEXCOM",
        visit: "NEXCOM"
    },
    {
        name: "Nokia",
        visit: "Nokia"
    },
    {
        name: "Nutanix",
        visit: "Nutanix"
    },
    {
        name: "OmniSci",
        visit: "OmniSci"
    },
    {
        name: "Oracle HPC",
        visit: "Oracle HPC"
    },
    {
        name: "Oracle Compute",
        visit: "Oracle Compute"
    },
    {
        name: "ORock Technologies",
        visit: "ORock Technologies"
    },
    {
        name: "Phonenix NAP",
        visit: "Phonenix NAP"
    },
    {
        name: "Presidio",
        visit: "Presidio"
    },
    {
        name: "QCT",
        visit: "QCT"
    },
    {
        name: "QNAP Systems, Inc.",
        visit: "QNAP Systems, Inc."
    },
    {
        name: "Redhat",
        visit: "Redhat"
    },
    {
        name: "RSC Group",
        visit: "RSC Group"
    },
    {
        name: "SAP",
        visit: "SAP"
    },
    {
        name: "Scontain",
        visit: "Scontain"
    },
    {
        name: "Sirius Computer Solutions.",
        visit: "Sirius Computer Solutions."
    },
    {
        name: "Supermicro",
        visit: "Supermicro"
    },
    {
        name: "Tarox",
        visit: "Tarox"
    },
    {
        name: "Tencent",
        visit: "Tencent"
    },
    {
        name: "Tyan Computers",
        visit: "Tyan Computers"
    },
    {
        name: "UNICOM Engineering",
        visit: "UNICOM Engineering"
    },
    {
        name: "Visual Technology Inc.",
        visit: "Visual Technology Inc."
    },
    {
        name: "Wiwynn Corporation",
        visit: "Wiwynn Corporation"
    },
    {
        name: "WORTMANN AG",
        visit: "WORTMANN AG"
    },
    {
        name: "World Wide Technology",
        visit: "World Wide Technology"
    },
    {
        name: "Yandex Cloud",
        visit: "Yandex Cloud"
    },
]
function mv_table_3gen() {
    if (document.querySelector('.mv_partner_data_3gen')) {
        let div = document.querySelector('.mv_partner_data_3gen')

        let html = mv_partner_3gen.map((ele) => {
            return `<tr>
                <td>${ele.name}</td>
                <td><b>Visit:</b> <a href="">${ele.visit}</a></td>
                </tr>`
        }).join('')
        div.innerHTML = html
    } else {
        return;
    }
}

// Partners 2th Gen
var mv_partner_2gen = [
    {
        name: "Adlink Technology",
        visit: "Adlink Technology"
    },
    {
        name: "Advantech",
        visit: "Advantech"
    },
    {
        name: "Aerospike",
        visit: "Aerospike"
    },
    {
        name: "Aeon",
        visit: "Aeon"
    },
    {
        name: "Aewin",
        visit: "Aewin"
    },
    {
        name: "AgentVI",
        visit: "AgentVI"
    },
    {
        name: "AIC Inc.",
        visit: "AIC Inc."
    },
    {
        name: "Atipa",
        visit: "Atipa"
    },
    {
        name: "Atos",
        visit: "Atos"
    },
    {
        name: "Axiomtek'",
        visit: "Axiomtek'"
    },
    {
        name: "Boston Limited",
        visit: "Boston Limited"
    },
    {
        name: "CDW",
        visit: "CDW"
    },
    {
        name: "Cisco",
        visit: "Cisco"
    },
    {
        name: "Dalco",
        visit: "Dalco"
    },
    {
        name: "DataON",
        visit: "DataON"
    },
    {
        name: "Dell EMC",
        visit: "Dell EMC"
    },
    {
        name: "DFI",
        visit: "DFI"
    },
    {
        name: "EasyStack",
        visit: "EasyStack"
    },
    {
        name: "EISOO",
        visit: "EISOO"
    },
    {
        name: "ENGINETECH",
        visit: "ENGINETECH"
    },
    {
        name: "Equus Compute Solutions",
        visit: "Equus Compute Solutions"
    },
    {
        name: "Ericsson",
        visit: "Ericsson"
    },
    {
        name: "FiberHome",
        visit: "FiberHome"
    },
    {
        name: "Fujitsu",
        visit: "Fujitsu"
    },
    {
        name: "GigaSpaces",
        visit: "GigaSpaces"
    },
    {
        name: "H20",
        visit: "H20"
    },
    {
        name: "H3C",
        visit: "H3C"
    },
    {
        name: "Hitachi",
        visit: "Hitachi"
    },
    {
        name: "HPE",
        visit: "HPE"
    },
    {
        name: "IEI",
        visit: "IEI"
    },
    {
        name: "Insight",
        visit: "Insight"
    },
    {
        name: "Inspur",
        visit: "Inspur"
    },
    {
        name: "International Computer Concepts",
        visit: "International Computer Concepts"
    },
    {
        name: "Inventec",
        visit: "Inventec"
    },
    {
        name: "Kontron",
        visit: "Kontron"
    },
    {
        name: "Lanner Electronics",
        visit: "Lanner Electronics"
    },
    {
        name: "Lenovo",
        visit: "Lenovo"
    },
    {
        name: "Logicsupply",
        visit: "Logicsupply"
    },
    {
        name: "LON Microsystems",
        visit: "LON Microsystems"
    },
    {
        name: "MacroSAN",
        visit: "MacroSAN"
    },
    {
        name: "MBX Systems",
        visit: "MBX Systems"
    },
    {
        name: "Megware",
        visit: "Megware"
    },
    {
        name: "Mercury",
        visit: "Mercury"
    },
    {
        name: "Mercury Systems",
        visit: "Mercury Systems"
    },
    {
        name: "Microsoft",
        visit: "Microsoft"
    },
    {
        name: "Nanjing Cloud Innovative",
        visit: "Nanjing Cloud Innovative"
    },
    {
        name: "NCS Tech",
        visit: "NCS Tech"
    },
    {
        name: "NCS Technologies INC",
        visit: "NCS Technologies INC"
    },
    {
        name: "NEXCOM",
        visit: "NEXCOM"
    },
    {
        name: "Nokia",
        visit: "Nokia"
    },
    {
        name: "Nor-Tech",
        visit: "Nor-Tech"
    },
    {
        name: "Padova Technologies",
        visit: "Padova Technologies"
    },
    {
        name: "Patriot Technologies, Inc.",
        visit: "Patriot Technologies, Inc."
    },
    {
        name: "PingCAP",
        visit: "PingCAP"
    },
    {
        name: "PowerLeader Technology",
        visit: "PowerLeader Technology"
    },
    {
        name: "Presidio",
        visit: "Presidio"
    },
    {
        name: "QCT (Quanta)",
        visit: "QCT (Quanta)"
    },
    {
        name: "QNAP",
        visit: "QNAP"
    },
    {
        name: "Redis Labs",
        visit: "Redis Labs"
    },
    {
        name: "RSC",
        visit: "RSC"
    },
    {
        name: "SAS",
        visit: "SAS"
    },
    {
        name: "Shanghai DragonNet Technology – Change to Phegda",
        visit: "Shanghai DragonNet Technology – Change to Phegda"
    },
    {
        name: "Shanghai Link Computer Technology",
        visit: "Shanghai Link Computer Technology"
    },
    {
        name: "SHI",
        visit: "SHI"
    },
    {
        name: "Sugon",
        visit: "Sugon"
    },
    {
        name: "Supermicro",
        visit: "Supermicro"
    },
    {
        name: "Suzhou Supercluster – Change to AMAX",
        visit: "Suzhou Supercluster – Change to AMAX"
    },
    {
        name: "Trenton",
        visit: "Trenton"
    },
    {
        name: "Wiwynn Corporation",
        visit: "Wiwynn Corporation"
    },
    {
        name: "WWT",
        visit: "WWT"
    },
    {
        name: "Xi Computer",
        visit: "Xi Computer"
    },
    {
        name: "XSKy",
        visit: "XSKy"
    },
    {
        name: "ZTE",
        visit: "ZTE"
    }
]
function mv_table_2gen() {
    if (document.querySelector('.mv_partner_data_2gen')) {
        let div = document.querySelector('.mv_partner_data_2gen')

        let html = mv_partner_2gen.map((ele) => {
            return `<tr>
                <td>${ele.name}</td>
                <td><b>Visit:</b> <a href="">${ele.visit}</a></td>
                </tr>`
        }).join('')
        div.innerHTML = html
    } else {
        return;
    }
}

// Partners 1th Gen
var mv_partner_1gen = [
    {
        name: "Actina",
        contact: "Dorota Gusiew",
        email: "Dorota.Gusiew@action.pl",
        visit: "Actina"
    },
    {
        name: "Advanced Clustering",
        contact: "Advanced Clustering Technologies",
        phone: "+1 866 802 8222",
        email: "sales@advancedclustering.com",
        visit: "Advanced Clustering"
    },
    {
        name: "Advantech",
        contact: "Advantech Networks and Communications Group",
        email: "ncg@advantech.com",
        visit: "Advantech"
    },
    {
        name: "AIC Inc.",
        contact: "Mr. David Huang",
        phone: "+886 3 433 9188 ext. 8100",
        email: "sales@aicipc.com.tw, david.huang@aicipc.com.tw",
        visit: "AIC Inc."
    },
    {
        name: "Amax",
        contact: "James Huang",
        email: "james_huang@amax.com",
        visit: "Amax"
    },
    {
        name: "ASRock Rack",
        contact: "Jessie Chang",
        phone: "+886 25538790",
        email: "jessie6_chang@asrockrack.com",
        visit: "ASRock Rack"
    },
    {
        name: "ASA Computers/Racklive",
        contact: "Roger Kute",
        email: "roger@asacomputers.com",
        visit: "ASA Computers/Racklive"
    },
    {
        name: "Atipa",
        contact: "Dana Chang",
        phone: "+1 785 841 9559",
        email: "sales@atipa.com",
        visit: "Atipa"
    },
    {
        name: "Azken Muga",
        contact: "Rafael Lainez",
        phone: "+34 91 146 17 60",
        email: "RLainez@azken.com",
        visit: "Azken Muga"
    },
    {
        name: "CDW",
        visit: "CDW"
    },
    {
        name: "Cisco",
        visit: "Cisco"
    },
    {
        name: "Colfax",
        contact: "Jimmy Tran",
        email: "jimmy@colfax-intl.com",
        visit: "Colfax"
    },
    {
        name: "Cray",
        email: "c17733@cray.com",
        visit: "Cray"
    },
    {
        name: "Dalco",
        contact: "Sales",
        phone: "+41 44 908 38 38",
        email: "sales@dalco.ch",
        visit: "DALCO"
    },
    {
        name: "DataON Storage",
        phone: "+1 714 441 8820",
        email: "dataon_sales@dataonstorage.com",
        visit: "DataON Storage"
    },
    {
        name: "Dell EMC",
        visit: "Dell EMC"
    },
    {
        name: "Exxact",
        contact: "Mke Chen",
        phone: "+1 510 226 7366",
        email: "mchen@exxactcorp.com",
        visit: "Exxact"
    },
    {
        name: "Flytech",
        contact: "Javier Fernandez",
        phone: "+34 93 265 54 62",
        email: "jfd@flytech.es",
        visit: "Flytech"
    },
    {
        name: "Format",
        contact: "Piotr Sukiennik",
        email: "piotr.sukiennik@format.com.pl",
        visit: "Format"
    },
    {
        name: "Huawei",
        visit: "Huawei"
    },
    {
        name: "HP Enterprise",
        visit: "HP Enterprise"
    },
    {
        name: "Inspur",
        visit: "Inspur"
    },
    {
        name: "International Computer Concepts",
        contact: "Alex Leites",
        email: "marketing@icc-usa.com",
        visit: "International Computer Concepts"
    },
    {
        name: "Inventec Corporation",
        contact: "Steven Lin",
        phone: "+886 3 3900000",
        email: "lin.steven@inventec.com",
        visit: "Inventec Corporation"
    },
    {
        name: "iXsystems",
        contact: "Denise Ebery",
        email: "denise@ixsystems.com",
        visit: "iXsystems"
    },
    {
        name: "Koi Computer",
        contact: "Catherine Ho",
        phone: "+1 630 627 8811",
        email: "catherineho1@koicomputer.com",
        visit: "Koi Computer"
    },
    {
        name: "Komputronik",
        contact: "Adam Olszewski",
        email: "adam.olszewski@komputronik.pl",
        visit: "Komputronik"
    },
    {
        name: "Kontron",
        visit: "Kontron"
    },
    {
        name: "Lanner Electronics",
        contact: "Brian Chen",
        phone: "+886 2 86926060 ext. 1195",
        email: "brian_chen@lannerinc.com",
        visit: "Lanner Electronics"
    },
    {
        name: "Lenovo",
        visit: "Lenovo"
    },
    {
        name: "M Computers",
        contact: "Brian Chen",
        phone: "+420 515 538 120",
        email: "brian_chen@lannerinc.com",
        visit: "M Computers"
    },
    {
        name: "Maguay",
        email: "sales@maguay.ro",
        visit: "Maguay"
    },
    {
        name: "Maxta Inc.",
        contact: "Sales",
        phone: "+1 844 44 MAXTA",
        email: "sales@maxta.com",
        visit: "Maxta Inc."
    },
    {
        name: "Mercury Systems",
        visit: "Mercury Systems"
    },
    {
        name: "NCS Technologies INC",
        visit: "NCS Technologies INC"
    },
    {
        name: "Nexcom",
        contact: "Liyin Lin",
        phone: "+886 2 8226 7786 ext. 2110",
        email: "liyinlin@nexcom.com.tw",
        visit: "Nexcom"
    },
    {
        name: "Nokia",
        phone: "+1 866 231 0264",
        visit: "Nokia"
    },
    {
        name: "NTT",
        contact: "Tomasz Rajca",
        email: "tomasz.rajca@ntt.pl",
        visit: "NTT"
    },
    {
        name: "Padova Technologies",
        visit: "Padova Technologies"
    },
    {
        name: "Patriot Technologies, Inc",
        visit: "Patriot Technologies, Inc"
    },
    {
        name: "Penguin Computing",
        visit: "Penguin Computing"
    },
    {
        name: "Persy",
        phone: "+359 24225319",
        email: "sales@persy.com",
        visit: "Persy"
    },
    {
        name: "Premio",
        contact: "John Lam",
        phone: "+1 888 713 4540",
        email: "sales@premioinc.com; john.lam@premioinc.com",
        visit: "Premio"
    },
    {
        name: "Quanta",
        visit: "Quanta"
    },
    {
        name: "Radisys",
        contact: "Lisa Marone",
        phone: "+1 503 615 1545",
        email: "lisa.marone@radisys.com",
        visit: "Radisys"
    },
    {
        name: "Silicon Mechanics",
        contact: "Dustin Shatto",
        email: "dustin.shatto@siliconmechanics.com",
        visit: "Silicon Mechanics"
    },
    {
        name: "Source Code",
        contact: "Brian Corn",
        phone: "+1 877 722 3478 ext. 4266",
        email: "BrianC@sourcecode.com",
        visit: "Source Code"
    },
    {
        name: "Supermicro",
        visit: "Supermicro"
    },
    {
        name: "TYAN Computer",
        contact: "Fenny Chen",
        phone: "+886 3 3275988 ext. 2849",
        email: "fenny.chen@mic.com.tw",
        visit: "TYAN Computer"
    },
    {
        name: "Unicom Engineering",
        visit: "Unicom Engineering"
    },
    {
        name: "Wiwynn Corporation",
        contact: "Ethan Yang",
        phone: "+886 2 66125209",
        email: "Ethan_SL_Yang@wiwynn.com",
        visit: "Wiwynn Corporation"
    },
    {
        name: "Wortmann",
        contact: "Terra Server",
        phone: "+49 5744 944 189",
        email: "server@wortmann.de",
        visit: "Wortmann"
    },
]
function mv_table_1gen() {
    if (document.querySelector('.mv_partner_data_1gen')) {
        let div = document.querySelector('.mv_partner_data_1gen')

        let html = mv_partner_1gen.map((ele) => {
            return `<tr>
                <td>${ele.name}</td>
                <td>
                    ${ele.contact ? `<div><b>Contact:</b> ${ele.contact}</div>` : ""}
                    ${ele.phone ? `<div><b>Phone:</b> ${ele.phone}</div>` : ""}
                    ${ele.email ? `<div><b>E-mail:</b> <a href="">${ele.email}</a></div>` : ""}
                    <div><b>Visit:</b> <a href="">${ele.visit}</a></div>
                </td>
                </tr>`
        }).join('')
        div.innerHTML = html
    } else {
        return;
    }
}