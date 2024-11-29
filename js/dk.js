// (Intel® Data Center GPU Flex Series) VDI performance white paper -> Related Materials 1    
    // Related Videos
    let dk_video_1 = document.getElementById('dk_video_1')

    const dk_pdfvideo_1 = [
        {
            id: 1,
            title: "Intel® Advanced Vector Extensions 512 (Intel® AVX-512)",
            time: "3:51",
            text: "Intel® Advanced Vector Extensions 512, the latest x86 vector instruction set to accelerate performance for your most demanding computational tasks.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 2,
            title: "Optimizing Microsoft Data Center Networking with Intel® FPGAs",
            time: "2:38",
            text: "Learn how Microsoft deployed millions of Intel® FPGAs to improve efficiency and decrease latency to support disaggregation in cloud and telco markets. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 3,
            title: "Chips and Salsa Episode 35: Intel Hardware Security Academic Award",
            time: "26:55",
            text: "CRob and Jerry interview the winners of Intel's 2022 Hardware Security Academic Award.",
            img: "demo-video.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 4,
            title: "Trusted Media:  Real-time FakeCatcher for Deepfake Detection",
            time: "2:18",
            text: "The dramatic rise of deepfakes is diminishing trust in online resources. Intel is working to counteract this trend with FakeCatcher, an AI-based tool for detecting fake media. In this demons... ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 5,
            title: "Intel Creates World's First Conflict-Free Microprocessor",
            time: "1:00",
            text: "Intel introduces the world's first commercial conflict-free microprocessor and reconnects the dots across the globe for a responsible supply chain.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 6,
            title: "NodeWeaver Partner Chat Video",
            time: "12:34",
            text: "NodeWeaver bridges the world of private cloud platforms and hyperconverged infrastructure with a unified cloud fabric that brings all pieces together in building-block style. ",
            img: "Processing-Multiple.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
    ]

    if (dk_video_1) {
        for (let i = 0; i < dk_pdfvideo_1.length; i++) {
            dk_video_1.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${dk_pdfvideo_1[i].img}" alt=""></a>
                            </div>
                            <h3><a href="/darshit/${dk_pdfvideo_1[i].link}">${dk_pdfvideo_1[i].title} ${dk_pdfvideo_1[i].time ? `<small>(${dk_pdfvideo_1[i].time})</small>` : ""} </a></h3>
                            <p>${dk_pdfvideo_1[i].text}</p>
                        </div>
                    </div>`
        }
    }

    // Related Materials
    let dk_materials_1 = document.getElementById('dk_materials_1')

    const dk_pdfmaterial_1 = [
        {
            id: 1,
            title: "VDI Performance on Intel® Data Center GPU Flex Series White Paper",
            img: "brief.png",
            link: "",
        },
        {
            id: 2,
            title: "Intel® Data Center GPU Ready Systems",
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
            title: "Lenovo Solutions with Intel Technologies Hit the Sweet Spot",
            img: "brief.png",
            link: "",
        },
        {
            id: 5,
            title: "Introducing Intel Data Center GPU Flex Series for the Intelligent...",
            img: "brief.png",
            link: "",
        },
        {
            id: 6,
            title: "Intel® Arc™ Graphics for the Edge Product Availability",
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
            title: "Improving Splunk & Kafka Platforms with Cloud-Native Technologies",
            img: "brief.png",
            link: "",
        },
        {
            id: 9,
            title: "ADLINK AOI with Intel® Arc™ Graphics for the Edge Solution Brief",
            img: "tools.png",
            link: "",
        },
        {
            id: 10,
            title: "Silicon Photonics 100G DR, FR and LR Optical Transceiver",
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
            title: "Granite Rapids",
            img: "brief.png",
            link: "",
        },

    ]

    if (dk_materials_1) {
        for (let i = 0; i < dk_pdfmaterial_1.length; i++) {
            dk_materials_1.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${dk_pdfmaterial_1[i].img}"  alt="">
                                </div>
                                <h4><a href="/darshit/${dk_pdfmaterial_1[i].link}">${dk_pdfmaterial_1[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }

// (Intel® Data Center GPU Flex Series) VDI performance white paper -> Related Materials 2    
    // Related Videos
    let dk_video_2 = document.getElementById('dk_video_2')

    const dk_pdfvideo_2 = [
        {
            id: 1,
            title: "5 Operational Benefits of Cloud Computing",
            time: "",
            text: "Cloud computing is radically changing the way businesses compete for customers. See advantages of key operational benefits it delivers. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 2,
            title: "Intel Creates World's First Conflict-Free Microprocessor",
            time: "1:00",
            text: "Intel introduces the world's first commercial conflict-free microprocessor and reconnects the dots across the globe for a responsible supply chain.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 3,
            title: "Chips and Salsa Episode 36: HW Sec Test of Time Award",
            time: "25:16",
            text: "Professor Srinivas Devadas and Professor Ed Suh discuss the paper they wrote over 20 years ago that won the Intel Test of Time Award in 2022. ",
            img: "demo-video.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 4,
            title: "Intel and Tile* Bluetooth® Technology Help Find Your Lost Things",
            time: "",
            text: "Find your lost things, including your next Intel®-based laptop, with the Tile* app or one of the Tile* Bluetooth® technology-enabled devices. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 5,
            title: "Introducing Intel® Future Skills",
            time: "1:50",
            text: "Intel® Future Skills transforms workforce development and youth empowerment programs to help youth develop the skills and mindset for tomorrow's jobs. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 6,
            title: "Getting the Most out of the Intel® HD Graphics Control Panel Demo",
            time: "3:00",
            text: "Demos Intel® HD Graphics Control Panel uses that you may not know about, including multiple monitors, display profiles, screen colors, and more.",
            img: "Processing-Multiple.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
    ]

    if (dk_video_2) {
        for (let i = 0; i < dk_pdfvideo_2.length; i++) {
            dk_video_2.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${dk_pdfvideo_2[i].img}" alt=""></a>
                            </div>
                            <h3><a href="/darshit/${dk_pdfvideo_2[i].link}">${dk_pdfvideo_2[i].title} ${dk_pdfvideo_2[i].time ? `<small>(${dk_pdfvideo_2[i].time})</small>` : ""} </a></h3>
                            <p>${dk_pdfvideo_2[i].text}</p>
                        </div>
                    </div>`
        }
    }

    // Related Materials
    let dk_materials_2 = document.getElementById('dk_materials_2')

    const dk_pdfmaterial_2 = [
        {
            id: 1,
            title: "VDI Performance on Intel® Data Center GPU Flex Series White Paper",
            img: "brief.png",
            link: "",
        },
        {
            id: 2,
            title: "Lenovo Solutions with Intel Technologies Hit the Sweet Spot",
            img: "brief.png",
            link: "",
        },
        {
            id: 3,
            title: "Improving Splunk & Kafka Platforms with Cloud-Native Technologies",
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
            title: "Silicon Photonics 100G DR, FR and LR Optical Transceiver",
            img: "brief.png",
            link: "",
        },
        {
            id: 6,
            title: "Intel® Data Center GPU Ready Systems",
            img: "brief.png",
            link: "",
        },
        {
            id: 7,
            title: "Intel® Arc™ Graphics for the Edge Product Availability",
            img: "brief.png",
            link: "",
        },
        {
            id: 8,
            title: "Dell EMC PowerMax Speeds Data Access with Intel® Optane™ SSDs",
            img: "brief.png",
            link: "",
        },
        {
            id: 9,
            title: "ADLINK AOI with Intel® Arc™ Graphics for the Edge Solution Brief",
            img: "tools.png",
            link: "",
        },
        {
            id: 10,
            title: "Intel® Optane™ Persistent Memory Workload Partner Solutions",
            img: "brief.png",
            link: "",
        },
        {
            id: 11,
            title: "Introducing Intel Data Center GPU Flex Series for the Intelligent...",
            img: "brief.png",
            link: "",
        },
        {
            id: 12,
            title: "Intel® Arc™ GPU for the Edge",
            img: "brief.png",
            link: "",
        },

    ]

    if (dk_materials_2) {
        for (let i = 0; i < dk_pdfmaterial_2.length; i++) {
            dk_materials_2.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${dk_pdfmaterial_2[i].img}"  alt="">
                                </div>
                                <h4><a href="/darshit/${dk_pdfmaterial_2[i].link}">${dk_pdfmaterial_2[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }

    // (Intel® Data Center GPU Flex Series) VDI performance white paper -> Related Materials 3    
    // Related Videos
    let dk_video_3 = document.getElementById('dk_video_3')

    const dk_pdfvideo_3 = [
        {
            id: 1,
            title: "Intel® Advanced Vector Extensions 512 (Intel® AVX-512)",
            time: "3:51",
            text: "Intel® Advanced Vector Extensions 512, the latest x86 vector instruction set to accelerate performance for your most demanding computational tasks. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 2,
            title: "Optimizing Microsoft Data Center Networking with Intel® FPGAs",
            time: "2:38",
            text: "Learn how Microsoft deployed millions of Intel® FPGAs to improve efficiency and decrease latency to support disaggregation in cloud and telco markets. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 3,
            title: "Getting the Most out of the Intel® HD Graphics Control Panel Demo",
            time: "3:00",
            text: "Demos Intel® HD Graphics Control Panel uses that you may not know about, including multiple monitors, display profiles, screen colors, and more. ",
            img: "demo-video.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 4,
            title: "Intel and Tile* Bluetooth® Technology Help Find Your Lost Things",
            time: "",
            text: "Find your lost things, including your next Intel®-based laptop, with the Tile* app or one of the Tile* Bluetooth® technology-enabled devices. ",
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
            text: "When you're looking to buy a new PC, choose the right Intel® Wireless-AC Wi-Fi solution to maximize streaming, gaming, and sharing experiences. ",
            img: "Processing-Multiple.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
    ]

    if (dk_video_3) {
        for (let i = 0; i < dk_pdfvideo_3.length; i++) {
            dk_video_3.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${dk_pdfvideo_3[i].img}" alt=""></a>
                            </div>
                            <h3><a href="/darshit/${dk_pdfvideo_3[i].link}">${dk_pdfvideo_3[i].title} ${dk_pdfvideo_3[i].time ? `<small>(${dk_pdfvideo_3[i].time})</small>` : ""} </a></h3>
                            <p>${dk_pdfvideo_3[i].text}</p>
                        </div>
                    </div>`
        }
    }

    // Related Materials
    let dk_materials_3 = document.getElementById('dk_materials_3')

    const dk_pdfmaterial_3 = [
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
            title: "Silicon Photonics 100G DR, FR and LR Optical Transceiver",
            img: "brief.png",
            link: "",
        },
        {
            id: 5,
            title: "Intel® Data Center GPU Ready Systems",
            img: "brief.png",
            link: "",
        },
        {
            id: 6,
            title: "Intel GPU Flex Series for Virtual Desktop Infrastructure",
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
            title: "ADLINK AOI with Intel® Arc™ Graphics for the Edge Solution Brief",
            img: "brief.png",
            link: "",
        },
        {
            id: 9,
            title: "Intel® Optane™ Persistent Memory Workload Partner Solutions",
            img: "tools.png",
            link: "",
        },
        {
            id: 10,
            title: "Introducing Intel Data Center GPU Flex Series for the Intelligent...",
            img: "brief.png",
            link: "",
        },
        {
            id: 11,
            title: "Intel® Arc™ Graphics for the Edge Product Availability",
            img: "brief.png",
            link: "",
        },
        {
            id: 12,
            title: "Reduce Memory Costs of Microsoft SQL Running on vSphere",
            img: "brief.png",
            link: "",
        },

    ]

    if (dk_materials_3) {
        for (let i = 0; i < dk_pdfmaterial_3.length; i++) {
            dk_materials_3.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${dk_pdfmaterial_3[i].img}"  alt="">
                                </div>
                                <h4><a href="/darshit/${dk_pdfmaterial_3[i].link}">${dk_pdfmaterial_3[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }

     // (Intel® Data Center GPU Flex Series) VDI performance white paper -> Related Materials 4    
    // Related Videos
    let dk_video_4 = document.getElementById('dk_video_4')

    const dk_pdfvideo_4 = [
        {
            id: 1,
            title: "Intel® Advanced Vector Extensions 512 (Intel® AVX-512)",
            time: "3:51",
            text: "Intel® Advanced Vector Extensions 512, the latest x86 vector instruction set to accelerate performance for your most demanding computational tasks. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 2,
            title: "Optimizing Microsoft Data Center Networking with Intel® FPGAs",
            time: "2:38",
            text: "Learn how Microsoft deployed millions of Intel® FPGAs to improve efficiency and decrease latency to support disaggregation in cloud and telco markets. ",
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
            title: "Chips and Salsa Episode 29: STORM with Thais Moreira",
            time: "14:05",
            text: "Intel STORM Team: Thais Moreira.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 5,
            title: "Intel and Tile* Bluetooth® Technology Help Find Your Lost Things",
            time: "",
            text: "Find your lost things, including your next Intel®-based laptop, with the Tile* app or one of the Tile* Bluetooth® technology-enabled devices. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 6,
            title: "Intel Employee Service Corps in Puerto Rico",
            time: "3:25",
            text: "To help rebuild Puerto Rico’s schools after a category 5 hurricane, Intel Employee Service Corps reached 15,000 students in multiple schools.",
            img: "Processing-Multiple.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
    ]

    if (dk_video_4) {
        for (let i = 0; i < dk_pdfvideo_4.length; i++) {
            dk_video_4.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${dk_pdfvideo_4[i].img}" alt=""></a>
                            </div>
                            <h3><a href="/darshit/${dk_pdfvideo_4[i].link}">${dk_pdfvideo_4[i].title} ${dk_pdfvideo_4[i].time ? `<small>(${dk_pdfvideo_4[i].time})</small>` : ""} </a></h3>
                            <p>${dk_pdfvideo_4[i].text}</p>
                        </div>
                    </div>`
        }
    }

    // Related Materials
    let dk_materials_4 = document.getElementById('dk_materials_4')

    const dk_pdfmaterial_4 = [
        {
            id: 1,
            title: "Intel GPU Flex Series for Virtual Desktop Infrastructure",
            img: "brief.png",
            link: "",
        },
        {
            id: 2,
            title: "Intel® Arc™ Graphics for the Edge Product Availability",
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
            title: "Intel® Optane™ Persistent Memory Workload Partner Solutions",
            img: "brief.png",
            link: "",
        },
        {
            id: 5,
            title: "Dell EMC PowerMax Speeds Data Access with Intel® Optane™ SSDs",
            img: "brief.png",
            link: "",
        },
        {
            id: 6,
            title: "Introducing Intel Data Center GPU Flex Series for the Intelligent...",
            img: "brief.png",
            link: "",
        },
        {
            id: 7,
            title: "Lenovo Solutions with Intel Technologies Hit the Sweet Spot",
            img: "brief.png",
            link: "",
        },
        {
            id: 8,
            title: "Improving Splunk & Kafka Platforms with Cloud-Native Technologies",
            img: "brief.png",
            link: "",
        },
        {
            id: 9,
            title: "ADLINK AOI with Intel® Arc™ Graphics for the Edge Solution Brief",
            img: "tools.png",
            link: "",
        },
        {
            id: 10,
            title: "Intel® Data Center GPU Flex Series Windows Cloud Gaming Brief",
            img: "brief.png",
            link: "",
        },
        {
            id: 11,
            title: "Silicon Photonics 100G DR, FR and LR Optical Transceiver",
            img: "brief.png",
            link: "",
        },
        {
            id: 12,
            title: "Intel® Arc™ GPU for the Edge",
            img: "brief.png",
            link: "",
        },

    ]

    if (dk_materials_4) {
        for (let i = 0; i < dk_pdfmaterial_4.length; i++) {
            dk_materials_4.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${dk_pdfmaterial_4[i].img}"  alt="">
                                </div>
                                <h4><a href="/darshit/${dk_pdfmaterial_4[i].link}">${dk_pdfmaterial_4[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }

    // (Intel® Data Center GPU Flex Series) VDI performance white paper -> Related Materials 5    
    // Related Videos
    let dk_video_5 = document.getElementById('dk_video_5')

    const dk_pdfvideo_5 = [
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
            title: "Investing in Water Restoration",
            time: "2:49",
            text: "At Intel, we’ve been committed to environmental sustainability for decades, and now we’re diving deep into water restoration.",
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
            title: "Chips and Salsa Episode 29: STORM with Thais Moreira",
            time: "14:05",
            text: "Intel STORM Team: Thais Moreira.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 5,
            title: "Intel® 5G Solution 5000 Consumer",
            time: "",
            text: "Introducing the 5G Solution 5000, delivering game-changing wireless performance to PCs. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 6,
            title: "Introducing Intel® Future Skills",
            time: "1:50",
            text: "Intel® Future Skills transforms workforce development and youth empowerment programs to help youth develop the skills and mindset for tomorrow's jobs. ",
            img: "Processing-Multiple.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
    ]

    if (dk_video_5) {
        for (let i = 0; i < dk_pdfvideo_5.length; i++) {
            dk_video_5.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${dk_pdfvideo_5[i].img}" alt=""></a>
                            </div>
                            <h3><a href="/darshit/${dk_pdfvideo_5[i].link}">${dk_pdfvideo_5[i].title} ${dk_pdfvideo_5[i].time ? `<small>(${dk_pdfvideo_5[i].time})</small>` : ""} </a></h3>
                            <p>${dk_pdfvideo_5[i].text}</p>
                        </div>
                    </div>`
        }
    }

    // Related Materials
    let dk_materials_5 = document.getElementById('dk_materials_5')

    const dk_pdfmaterial_5 = [
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
            title: "Silicon Photonics 100G DR, FR and LR Optical Transceiver",
            img: "brief.png",
            link: "",
        },
        {
            id: 5,
            title: "Intel® Data Center GPU Ready Systems",
            img: "brief.png",
            link: "",
        },
        {
            id: 6,
            title: "Dell EMC PowerMax Speeds Data Access with Intel® Optane™ SSDs",
            img: "brief.png",
            link: "",
        },
        {
            id: 7,
            title: "ADLINK AOI with Intel® Arc™ Graphics for the Edge Solution Brief",
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
            title: "Intel® Optane™ Persistent Memory Workload Partner Solutions",
            img: "tools.png",
            link: "",
        },
        {
            id: 10,
            title: "Introducing Intel Data Center GPU Flex Series for the Intelligent...",
            img: "brief.png",
            link: "",
        },
        {
            id: 11,
            title: "Intel® Arc™ Graphics for the Edge Product Availability",
            img: "brief.png",
            link: "",
        },
        {
            id: 12,
            title: "Intel GPU Flex Series for Virtual Desktop Infrastructure",
            img: "brief.png",
            link: "",
        },

    ]

    if (dk_materials_5) {
        for (let i = 0; i < dk_pdfmaterial_5.length; i++) {
            dk_materials_5.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${dk_pdfmaterial_5[i].img}"  alt="">
                                </div>
                                <h4><a href="/darshit/${dk_pdfmaterial_5[i].link}">${dk_pdfmaterial_5[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }


        // (Intel® Data Center GPU Flex Series) VDI performance white paper -> Related Materials 6   
    // Related Videos
    let dk_video_6 = document.getElementById('dk_video_6')

    const dk_pdfvideo_6 = [
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
            time: "",
            text: "Intel® Xeon® D processors are ideal for live video analytics at the edge, efficiently scaling from a few video streams to many. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 3,
            title: "Congatec COM-HPC Ecosystem Partner Video",
            time: "17:48",
            text: "COM-HPC Modules Leverage Intel® Xeon® D Processor for Server-Level Performance at the Edge ",
            img: "demo-video.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 4,
            title: "Getting the Most out of the Intel® HD Graphics Control Panel Demo",
            time: "3:00",
            text: "Demos Intel® HD Graphics Control Panel uses that you may not know about, including multiple monitors, display profiles, screen colors, and more. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 5,
            title: "Chips and Salsa Episode 35: Intel Hardware Security Academic Award",
            time: "26:55",
            text: "CRob and Jerry interview the winners of Intel's 2022 Hardware Security Academic Award.  ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 6,
            title: "Ethernet Port Configuration Tool",
            time: "3:13",
            text: "This video provides an overview of the Ethernet Port Configuration Tool, which helps IT Managers bring versatility and flexibility into the data center, and at the same time reduces complexity. ",
            img: "Processing-Multiple.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
    ]

    if (dk_video_6) {
        for (let i = 0; i < dk_pdfvideo_6.length; i++) {
            dk_video_6.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${dk_pdfvideo_6[i].img}" alt=""></a>
                            </div>
                            <h3><a href="/darshit/${dk_pdfvideo_6[i].link}">${dk_pdfvideo_6[i].title} ${dk_pdfvideo_6[i].time ? `<small>(${dk_pdfvideo_6[i].time})</small>` : ""} </a></h3>
                            <p>${dk_pdfvideo_6[i].text}</p>
                        </div>
                    </div>`
        }
    }

    // Related Materials
    let dk_materials_6 = document.getElementById('dk_materials_6')

    const dk_pdfmaterial_6 = [
        {
            id: 1,
            title: "Intel® Arc™ Graphics for the Edge Product Availability",
            img: "brief.png",
            link: "",
        },
        {
            id: 2,
            title: "Intel® Data Center GPU Flex Series - Media Processing & Delivery...",
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
            title: "Dell EMC PowerMax Speeds Data Access with Intel® Optane™ SSDs",
            img: "brief.png",
            link: "",
        },
        {
            id: 5,
            title: "Silicon Photonics 100G DR, FR and LR Optical Transceiver",
            img: "brief.png",
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
            title: "Intel® Data Center GPU Ready Systems",
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
            title: "Lenovo Solutions with Intel Technologies Hit the Sweet Spot",
            img: "brief.png",
            link: "",
        },
        {
            id: 11,
            title: "Improving Splunk & Kafka Platforms with Cloud-Native Technologies",
            img: "brief.png",
            link: "",
        },
        {
            id: 12,
            title: "Intel® Data Center GPU Flex Series Windows Cloud Gaming Brief",
            img: "brief.png",
            link: "",
        },

    ]

    if (dk_materials_6) {
        for (let i = 0; i < dk_pdfmaterial_6.length; i++) {
            dk_materials_6.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${dk_pdfmaterial_6[i].img}"  alt="">
                                </div>
                                <h4><a href="/darshit/${dk_pdfmaterial_6[i].link}">${dk_pdfmaterial_6[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }


// (Intel® Data Center GPU Flex Series) VDI performance white paper -> Related Materials 7   
    // Related Videos
    let dk_video_7 = document.getElementById('dk_video_7')

    const dk_pdfvideo_7 = [
        {
            id: 1,
            title: "Intel® Advanced Vector Extensions 512 (Intel® AVX-512)",
            time: "3:51",
            text: "Intel® Advanced Vector Extensions 512, the latest x86 vector instruction set to accelerate performance for your most demanding computational tasks. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 2,
            title: "NodeWeaver Partner Chat Video",
            time: "12:34",
            text: "NodeWeaver bridges the world of private cloud platforms and hyperconverged infrastructure with a unified cloud fabric that brings all pieces together in building-block style. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 3,
            title: "QCT Partner Chat Video",
            time: "23:11",
            text: "Enterprise 5G ready for smart factory application to accelerate digital transformation. ",
            img: "demo-video.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 4,
            title: "NEXCOM Scaling at the Edge Video",
            time: "4:49",
            text: "NEXCOM 5G uCPE for Virtual edge services management. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 5,
            title: "Overview Video | Agilex™ 7 FPGA Family",
            time: "3:56",
            text: "This video provides an overview of the Agilex™ 7 FPGA family with its key features and capabilities.  ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 6,
            title: "Pegatron Scaling at the Edge Video",
            time: "6:50",
            text: "Pegatron 5G private network solution, digital resilience.",
            img: "Processing-Multiple.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
    ]

    if (dk_video_7) {
        for (let i = 0; i < dk_pdfvideo_7.length; i++) {
            dk_video_7.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${dk_pdfvideo_7[i].img}" alt=""></a>
                            </div>
                            <h3><a href="/darshit/${dk_pdfvideo_7[i].link}">${dk_pdfvideo_7[i].title} ${dk_pdfvideo_7[i].time ? `<small>(${dk_pdfvideo_7[i].time})</small>` : ""} </a></h3>
                            <p>${dk_pdfvideo_7[i].text}</p>
                        </div>
                    </div>`
        }
    }

    // Related Materials
    let dk_materials_7= document.getElementById('dk_materials_7')

    const dk_pdfmaterial_7 = [
        {
            id: 1,
            title: "VDI Performance on Intel® Data Center GPU Flex Series White Paper",
            img: "brief.png",
            link: "",
        },
        {
            id: 2,
            title: "Dell EMC PowerMax Speeds Data Access with Intel® Optane™ SSDs",
            img: "brief.png",
            link: "",
        },
        {
            id: 3,
            title: "Lenovo Solutions with Intel Technologies Hit the Sweet Spot",
            img: "brief.png",
            link: "",
        },
        {
            id: 4,
            title: "Improving Splunk & Kafka Platforms with Cloud-Native Technologies",
            img: "brief.png",
            link: "",
        },
        {
            id: 5,
            title: "ADLINK AOI with Intel® Arc™ Graphics for the Edge Solution Brief",
            img: "brief.png",
            link: "",
        },
        {
            id: 6,
            title: "Intel® Data Center GPU Flex Series Windows Cloud Gaming Brief",
            img: "brief.png",
            link: "",
        },
        {
            id: 7,
            title: "Intel® Optane™ Persistent Memory Workload Partner Solutions",
            img: "brief.png",
            link: "",
        },
        {
            id: 8,
            title: "Intel® Data Center GPU Ready Systems",
            img: "brief.png",
            link: "",
        },
        {
            id: 9,
            title: "KPWHRI Accelerates Advanced Research and Analytics",
            img: "tools.png",
            link: "",
        },
        {
            id: 10,
            title: "SoftBank Improves VM Capacity and Reduces Costs",
            img: "brief.png",
            link: "",
        },
        {
            id: 11,
            title: "GetCard: Achieves Rapid Payment Solutions Growth",
            img: "brief.png",
            link: "",
        },
        {
            id: 12,
            title: "Intel® Arc™ Graphics for the Edge Product Availability",
            img: "brief.png",
            link: "",
        },

    ]

    if (dk_materials_7) {
        for (let i = 0; i < dk_pdfmaterial_7.length; i++) {
            dk_materials_7.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${dk_pdfmaterial_7[i].img}"  alt="">
                                </div>
                                <h4><a href="/darshit/${dk_pdfmaterial_7[i].link}">${dk_pdfmaterial_7[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }

    
// (Intel® Data Center GPU Flex Series) VDI performance white paper -> Related Materials 8
    // Related Videos
    let dk_video_8 = document.getElementById('dk_video_8')

    const dk_pdfvideo_8 = [
        {
            id: 1,
            title: "What Is Intel® Optane™ Technology and Why it Matters",
            time: "2:59",
            text: "CPUs used to have a single core. Today they have tens of cores that constantly need to be fed data. It's like having a race car with bicycle wheels. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 2,
            title: "Text to Speech Synthesis Demo Using Intel® Stratix® 10 NX FPGA",
            time: "3:23",
            text: "Watch this demo for text to speech application implemented on an Intel® Stratix® 10 NX FPGA using WaveNet running on 256 real-time streams.",
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
            title: "NodeWeaver Partner Chat Video",
            time: "12:34",
            text: "NodeWeaver bridges the world of private cloud platforms and hyperconverged infrastructure with a unified cloud fabric that brings all pieces together in building-block style. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 6,
            title: "Getting the Most out of the Intel® HD Graphics Control Panel Demo",
            time: "3:00",
            text: "Demos Intel® HD Graphics Control Panel uses that you may not know about, including multiple monitors, display profiles, screen colors, and more. ",
            img: "Processing-Multiple.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
    ]

    if (dk_video_8) {
        for (let i = 0; i < dk_pdfvideo_8.length; i++) {
            dk_video_8.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${dk_pdfvideo_8[i].img}" alt=""></a>
                            </div>
                            <h3><a href="/darshit/${dk_pdfvideo_8[i].link}">${dk_pdfvideo_8[i].title} ${dk_pdfvideo_8[i].time ? `<small>(${dk_pdfvideo_8[i].time})</small>` : ""} </a></h3>
                            <p>${dk_pdfvideo_8[i].text}</p>
                        </div>
                    </div>`
        }
    }

    // Related Materials
    let dk_materials_8= document.getElementById('dk_materials_8')

    const dk_pdfmaterial_8 = [
        {
            id: 1,
            title: "ADLINK AOI with Intel® Arc™ Graphics for the Edge Solution Brief",
            img: "brief.png",
            link: "",
        },
        {
            id: 2,
            title: "Silicon Photonics 100G DR, FR and LR Optical Transceiver",
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
            title: "Intel® Optane™ Persistent Memory Workload Partner Solutions",
            img: "brief.png",
            link: "",
        },
        {
            id: 5,
            title: "Intel® Data Center GPU Ready Systems",
            img: "brief.png",
            link: "",
        },
        {
            id: 6,
            title: "Intel® Arc™ Graphics for the Edge Product Availability",
            img: "brief.png",
            link: "",
        },
        {
            id: 7,
            title: "Lenovo Solutions with Intel Technologies Hit the Sweet Spot",
            img: "brief.png",
            link: "",
        },
        {
            id: 8,
            title: "Improving Splunk & Kafka Platforms with Cloud-Native Technologies",
            img: "brief.png",
            link: "",
        },
        {
            id: 9,
            title: "Intel® Data Center GPU Flex Series Windows Cloud Gaming Brief",
            img: "tools.png",
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
            title: "Intel GPU Flex Series for Virtual Desktop Infrastructure",
            img: "brief.png",
            link: "",
        },
        {
            id: 12,
            title: "Implementing High-Performance Software-Defined Storage",
            img: "brief.png",
            link: "",
        },

    ]

    if (dk_materials_8) {
        for (let i = 0; i < dk_pdfmaterial_8.length; i++) {
            dk_materials_8.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${dk_pdfmaterial_8[i].img}"  alt="">
                                </div>
                                <h4><a href="/darshit/${dk_pdfmaterial_8[i].link}">${dk_pdfmaterial_8[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }


    // (Intel® Data Center GPU Flex Series) VDI performance white paper -> Related Materials 9
    // Related Videos
    let dk_video_9 = document.getElementById('dk_video_9')

    const dk_pdfvideo_9 = [
        {
            id: 1,
            title: "Intel® Advanced Vector Extensions 512 (Intel® AVX-512)",
            time: "3:51",
            text: "Intel® Advanced Vector Extensions 512, the latest x86 vector instruction set to accelerate performance for your most demanding computational tasks.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 2,
            title: "Optimizing Microsoft Data Center Networking with Intel® FPGAs",
            time: "2:38",
            text: "Learn how Microsoft deployed millions of Intel® FPGAs to improve efficiency and decrease latency to support disaggregation in cloud and telco markets. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 3,
            title: "Intel® 5G Solution 5000 Consumer",
            time: "",
            text: "Introducing the 5G Solution 5000, delivering game-changing wireless performance to PCs. ",
            img: "demo-video.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 4,
            title: "3D XPoint™: A Breakthrough in Non-Volatile Memory Technology",
            time: "44:28",
            text: "Intel's Rob Crooke and Micron CEO Mark Durcan announce 3D XPoint™ non-volatile memory technology, a faster, denser, and revolutionary breakthrough.",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 5,
            title: "Ethernet Port Configuration Tool",
            time: "3:13",
            text: "This video provides an overview of the Ethernet Port Configuration Tool, which helps IT Managers bring versatility and flexibility into the data center, and at the same time reduces complexity. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 6,
            title: "Chips and Salsa Episode 36: HW Sec Test of Time Award",
            time: "25:18",
            text: "Professor Srinivas Devadas and Professor Ed Suh discuss the paper they wrote over 20 years ago that won the Intel Test of Time Award in 2022. ",
            img: "Processing-Multiple.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
    ]

    if (dk_video_9) {
        for (let i = 0; i < dk_pdfvideo_9.length; i++) {
            dk_video_9.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${dk_pdfvideo_9[i].img}" alt=""></a>
                            </div>
                            <h3><a href="/darshit/${dk_pdfvideo_9[i].link}">${dk_pdfvideo_9[i].title} ${dk_pdfvideo_9[i].time ? `<small>(${dk_pdfvideo_9[i].time})</small>` : ""} </a></h3>
                            <p>${dk_pdfvideo_9[i].text}</p>
                        </div>
                    </div>`
        }
    }

    // Related Materials
    let dk_materials_9= document.getElementById('dk_materials_9')

    const dk_pdfmaterial_9 = [
        {
            id: 1,
            title: "ADLINK AOI with Intel® Arc™ Graphics for the Edge Solution Brief",
            img: "brief.png",
            link: "",
        },
        {
            id: 2,
            title: "Intel® Arc™ 3 Graphics for Desktops",
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
            title: "Intel® Data Center GPU Flex Series - Media Processing & Delivery...",
            img: "brief.png",
            link: "",
        },
        {
            id: 5,
            title: "Intel Arc Graphics Explained in 60 Seconds",
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
            title: "VDI Performance on Intel® Data Center GPU Flex Series White Paper",
            img: "brief.png",
            link: "",
        },
        {
            id: 12,
            title: "Dell EMC PowerMax Speeds Data Access with Intel® Optane™ SSDs",
            img: "brief.png",
            link: "",
        },

    ]

    if (dk_materials_9) {
        for (let i = 0; i < dk_pdfmaterial_8.length; i++) {
            dk_materials_9.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${dk_pdfmaterial_9[i].img}"  alt="">
                                </div>
                                <h4><a href="/darshit/${dk_pdfmaterial_9[i].link}">${dk_pdfmaterial_9[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }

    // (Intel® Data Center GPU Flex Series) VDI performance white paper -> Related Materials 10
    // Related Videos
    let dk_video_10 = document.getElementById('dk_video_10')

    const dk_pdfvideo_10 = [
        {
            id: 1,
            title: "Intel® Wireless-AC 2x2 Provides Fast Wi-Fi Speed",
            time: "3:33",
            text: "When you're looking to buy a new PC, choose the right Intel® Wireless-AC Wi-Fi solution to maximize streaming, gaming, and sharing experiences. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 2,
            title: "Chips and Salsa Episode 29: STORM with Thais Moreira",
            time: "14:05",
            text: "Intel STORM Team: Thais Moreira. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 3,
            title: "3D XPoint™: A Breakthrough in Non-Volatile Memory Technology",
            time: "44:28",
            text: "Intel's Rob Crooke and Micron CEO Mark Durcan announce 3D XPoint™ non-volatile memory technology, a faster, denser, and revolutionary breakthrough.  ",
            img: "demo-video.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 4,
            title: "Introducing Intel® Future Skills",
            time: "1:50",
            text: "Intel® Future Skills transforms workforce development and youth empowerment programs to help youth develop the skills and mindset for tomorrow's jobs. ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 5,
            title: "Trusted Media:  Real-time FakeCatcher for Deepfake Detection",
            time: "2:18",
            text: "The dramatic rise of deepfakes is diminishing trust in online resources. Intel is working to counteract this trend with FakeCatcher, an AI-based tool for detecting fake media. In this demons...  ",
            img: "related-video.png.rendition.cq5dam.thumbnail.319.319.png",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
        {
            id: 6,
            title: "Intel Employee Service Corps in Puerto Rico",
            time: "3:25",
            text: "To help rebuild Puerto Rico’s schools after a category 5 hurricane, Intel Employee Service Corps reached 15,000 students in multiple schools. ",
            img: "Processing-Multiple.jpg",
            link: "intel_data_center_GPU_flex_seriesFind_systems_with_intel_GPUs_related_vidoes.html",
        },
    ]

    if (dk_video_10) {
        for (let i = 0; i < dk_pdfvideo_10.length; i++) {
            dk_video_10.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_item">
                            <div class="d_img mv_img_icon">
                                <a href=""><img src="/img/mv_image/${dk_pdfvideo_10[i].img}" alt=""></a>
                            </div>
                            <h3><a href="/darshit/${dk_pdfvideo_10[i].link}">${dk_pdfvideo_10[i].title} ${dk_pdfvideo_10[i].time ? `<small>(${dk_pdfvideo_10[i].time})</small>` : ""} </a></h3>
                            <p>${dk_pdfvideo_10[i].text}</p>
                        </div>
                    </div>`
        }
    }

    // Related Materials
    let dk_materials_10= document.getElementById('dk_materials_10')

    const dk_pdfmaterial_10 = [
        {
            id: 1,
            title: "VDI Performance on Intel® Data Center GPU Flex Series White Paper",
            img: "brief.png",
            link: "",
        },
        {
            id: 2,
            title: "Silicon Photonics 100G DR, FR and LR Optical Transceiver",
            img: "brief.png",
            link: "",
        },
        {
            id: 3,
            title: "Intel® Software Guard Extensions Solution Brief",
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
            img: "brief.png",
            link: "",
        },
        {
            id: 6,
            title: "Dell EMC PowerMax Speeds Data Access with Intel® Optane™ SSDs",
            img: "brief.png",
            link: "",
        },
        {
            id: 7,
            title: "Lenovo Solutions with Intel Technologies Hit the Sweet Spot",
            img: "brief.png",
            link: "",
        },
        {
            id: 8,
            title: "Improving Splunk & Kafka Platforms with Cloud-Native Technologies",
            img: "brief.png",
            link: "",
        },
        {
            id: 9,
            title: "GE Healthcare: AI Helps Improve Patient Experience",
            img: "tools.png",
            link: "",
        },
        {
            id: 10,
            title: "ADLINK AOI with Intel® Arc™ Graphics for the Edge Solution Brief",
            img: "brief.png",
            link: "",
        },
        {
            id: 11,
            title: "Intel® Data Center GPU Flex Series Windows Cloud Gaming Brief",
            img: "brief.png",
            link: "",
        },
        {
            id: 12,
            title: "VMware Solutions with Intel® Optane™ Technology",
            img: "brief.png",
            link: "",
        },

    ]

    if (dk_materials_10) {
        for (let i = 0; i < dk_pdfmaterial_10.length; i++) {
            dk_materials_10.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                        <div class="d_box">
                            <div class="d-flex">
                                <div class="d_img me-1">
                                    <img src="/img/mv_image/${dk_pdfmaterial_10[i].img}"  alt="">
                                </div>
                                <h4><a href="/darshit/${dk_pdfmaterial_10[i].link}">${dk_pdfmaterial_10[i].title}</a></h4>
                            </div>
                        </div>
                    </div>`
        }
    }