const documents = [
    {
        id: "835573",
        title: "Intel® Wi-Fi 6 AX201 (Gig+), 2230, 2x2 AX+BT, vPro®, Intel® Wi-Fi 6 AX201 (Gig+), 2230, 2x2 AX+BT No vPro®, and Intel® Killer™ Wi-Fi 6 AX1650 i (Gig+), 2230, 2x2 AX+BT, No vPro®, Label, Regulatory label updates",
        date: "10/14/24",
        version: "00",
        file : "pdf (431 KB)",
        content_type : "Product Change Notifications (PCN)",
        discription:"Wireless Products, Networking Products, Label, see PCN detail for further information",
      
    },
    {
        id: "835554",
        title: "Intel® Wi-Fi 6E AX211 (Gig+), 2230, 2x2 AX R2 (6GHz)+BT, vPro®, Intel® Wi-Fi 6E AX211 (Gig+), 2230, 2x2 AX R2 (6GHz)+BT, No vPro®, and Intel® Killer™ Wi-Fi 6E AX1675 i (Gig+), 2230, 2x2 AX R2 (6GHz)+BT, No vPro®, Label, Regulatory label updates",
        date: "10/14/24",
        version: "00",
        file : "pdf (435 KB)",
        content_type : "Product Change Notifications (PCN)",
        discription:"Wireless Products, Networking Products, Label, see PCN detail for further information",
       
    },
    {
        id: "833704",
        title: "Intel® Wi-Fi 6 AX201 (Gig+), 1216, 2x2 AX+BT, vPro® and No vPro®, and Intel® Killer™ Wi-Fi 6 AX1650 s (Gig+), 1216, 2x2 AX+BT, No vPro®, Manufacturing Site, Label, Addition of Vietnam manufacturing site and regulatory label updates",
        date: "09/20/24",
        version: "00",
        file : "pdf (531 KB)",
        content_type : "Product Change Notifications (PCN)",
        discription:"Wireless Products, Networking Products, Manufacturing Site, Label, see PCN detail for further information",
      
    },
    {
        id: "832783",
        title: "Intel® Wi-Fi 7 BE201, 2230, 2x2 BE+BT, vPro, Intel® Wi-Fi 7 BE201, 2230, 2x2 BE+BT, No vPro, and Intel® Killer™ Wi-Fi 7 BE1750 i, 2230, 2x2 BE+BT, No vPro, Manufacturing Site, Label, Addition of China Manufacturing Site and Label Updates",
        date: "09/20/24",
        version: "00",
        file : "pdf (462 KB)",
        content_type : "Product Change Notifications (PCN)",
        discription:"Wireless Products, Networking Products, Manufacturing Site, Label, see PCN detail for further information",
      
    }
    ,
    {
        id: "714716",
        title: "Intel MAX 10 FPGA – GPIO, QSPI Flash, UART, ADC, LEDs, and Switches Design Example",
        date: "10/31/17",
        version: "24.2",
        file : "URL (47.4KB)",
        content_type : "Design Examples",
        discription:"This design example is used to check out the general-purpose interfaces on the Intel MAX 10 FPGA Development Kit, such as LEDs, dual in-line package (DIP) switches, push buttons, USB-side bus, PMOD, QSPI flash, digital-to-analog converter (DAC), UART, as well as the GPIO-attribute analog-to-digital (ADC) interface. Please download the Intel MAX 10 FPGA Development Kit installer and use the board test system (BTS) GUI to try it out.",
        isNew: true ,
        cat1:"Interface Protocols",
        cat2:"Serial",  
        cat3:"UART (RS-232 Serial Port) Intel FPGA IP"
    },
    {
        id: "768843",
        title: "Agilex™ 7 M-Series FPGA Network-on-Chip (NoC) User Guide",
        date: "08/05/24",
        version: "24.2",
        file : " xlsx (53.0 KB)",
        content_type : "Register Maps",
        discription:"This table lists the registers available in the O-RAN Intel FPGA IP. All unlisted locations are reserved.",
        isNew: false,
        cat1:"Interface Protocols",
        cat2:"Serial",  
        cat3:"UART (RS-232 Serial Port) Intel FPGA IP"
    }
    ,
    {
        id: "825853",
        title: "GTS Transceiver Dual-Simplex Interfaces User Guide",
        date: "08/19/24",
        version: "24.2",
        file : "URL (47.4KB)",
        content_type : "Development User Guides",
        discription:"The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        cat1:"Interface Protocols",
        cat2:"Serial",  
        cat3:"UART (RS-232 Serial Port) Intel FPGA IP"
    },
    {
        id: "768841",
        title: "Agilex™ 7 M-Series FPGA Network-on-Chip (NoC) User Guide",
        date: "08/05/24",
        version: "24.2",
        file : " xlsx (53.0 KB)",
        content_type : "Register Maps",
        discription:"This table lists the registers available in the O-RAN Intel FPGA IP. All unlisted locations are reserved.",
        isNew: false,
        cat1:"Interface Protocols",
        cat2:"Serial",  
        cat3:"UART (RS-232 Serial Port) Intel FPGA IP"
    }
    ,
    {
        id: "825850",
        title: "GTS Transceiver Dual-Simplex Interfaces User Guide",
        date: "08/19/24",
        version: "24.2",
        file : "URL (47.4KB)",
        content_type : "Development User Guides",
        discription:"The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        cat1:"Interface Protocols",
        cat2:"Serial",  
        cat3:"UART (RS-232 Serial Port) Intel FPGA IP"
    },
    {
        id: "768849",
        title: "Agilex™ 7 M-Series FPGA Network-on-Chip (NoC) User Guide",
        date: "08/05/24",
        version: "24.2",
        file : " xlsx (53.0 KB)",
        content_type : "Register Maps",
        discription:"This table lists the registers available in the O-RAN Intel FPGA IP. All unlisted locations are reserved.",
        isNew: false,
        cat1:"Interface Protocols",
        cat2:"Serial",  
        cat3:"UART (RS-232 Serial Port) Intel FPGA IP"
    }
    ,
    {
        id: "825858",
        title: "GTS Transceiver Dual-Simplex Interfaces User Guide",
        date: "08/19/24",
        version: "24.2",
        file : "URL (47.4KB)",
        content_type : "Development User Guides",
        discription:"The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        cat1:"Interface Protocols",
        cat2:"Serial",  
        cat3:"UART (RS-232 Serial Port) Intel FPGA IP"
    },
    {
        id: "768849",
        title: "Agilex™ 7 M-Series FPGA Network-on-Chip (NoC) User Guide",
        date: "08/05/24",
        version: "24.2",
        file : " xlsx (53.0 KB)",
        content_type : "Register Maps",
        discription:"This table lists the registers available in the O-RAN Intel FPGA IP. All unlisted locations are reserved.",
        isNew: false,
        cat1:"Interface Protocols",
        cat2:"Serial",  
        cat3:"UART (RS-232 Serial Port) Intel FPGA IP"
    }
    ,
    {
        id: "714766",
        title: "Intel® Arria® 10 FPGA – Intel FPGA Remote System Update via PCI Express* Design Example",
        date: "01/21/21",
        version: "20.4.0 Pro",
        file : "URL (9.34 MB)",
        content_type : "Development User Guides",
        discription:"This design example demonstrates remote system update functionality on an Intel® Arria® 10 FPGA Development Kit using PCI Express* as the communication protocol. The configuration image from the host system is received via PCI Express in the Intel Arria 10 device and then written into the serial flash by the Modular Scatter-Gather DMA core. The reconfiguration process of remote update is controlled by the dedicated remote system upgrade circuitry in the Intel Arria 10 device and managed via PCI Express.",
        isNew: true,
        cat1:"Interface Protocols",
        cat2:"Transceiver PHY",  
        cat3:"Transceiver Native PHY Intel Arria 10 Cyclone 10 FPGA IP"
    },
    {
        id: "714341",
        title: "Intel® Arria® 10 FPGA – 12G-SDI Audio Reference Design",
        date: "09/10/20",
        version: "20.1.0 Pro",
        file : "URL (5.37 MB)",
        content_type : "Development User Guides",
        discription:"This design example integrates the Intel® DisplayPort 1.4 video connectivity IP core with a video processing pipeline based on Intel FPGA IP cores from the Intel Video and Image Processing (VIP) Suite. The design delivers high-quality scaling, color space conversion, and frame rate conversion for video streams up to 8K at 30 frames per second, or 4K at 60 frames per second.",
        isNew: true,
        cat1:"Interface Protocols",
        cat2:"Transceiver PHY",  
        cat3:"Transceiver Native PHY Intel Arria 10 Cyclone 10 FPGA IP"
    },
    {
        id: "714342",
        title: "Intel® Arria® 10 FPGA – High-Speed Serial Interface Reference Design",
        date: "11/15/20",
        version: "20.2.0 Pro",
        file: "URL (7.25 MB)",
        content_type: "Design Examples",
        description: "This design example showcases the high-speed serial interface capabilities of the Intel® Arria® 10 FPGA Development Kit. It demonstrates the implementation of a 12G-SDI video interface with advanced error correction and high data throughput. The design integrates high-speed transceiver IP cores and utilizes the FPGA’s advanced clock management features for optimized performance.",
        isNew: true,
        cat1: "Interface Protocols",
        cat2: "Transceiver PHY",
        cat3: "Transceiver PHY Reset Controller Intel FPGA IP"
    },
    {
        id: "714343",
        title: "Intel® Arria® 10 FPGA – 10G Ethernet Reference Design",
        date: "12/01/20",
        version: "20.2.1 Pro",
        file: "URL (6.50 MB)",
        content_type: "Development User Guides",
        description: "This design example provides a comprehensive guide for implementing a 10G Ethernet interface on the Intel® Arria® 10 FPGA Development Kit. It features detailed instructions for configuring and using the Intel® 10G Ethernet IP core, including the integration with the FPGA’s internal memory and data processing pipelines to achieve high-speed network communication.",
        isNew: true,
        cat1: "Interface Protocols",
        cat2: "Transceiver PHY",
        cat3: "Transceiver PHY Reset Controller Intel FPGA IP"
    },{
        id: "714344",
        title: "Intel® Arria® 10 FPGA – Ultra-Low Latency Design Example",
        date: "01/12/21",
        version: "21.1.0 Pro",
        file: "URL (8.45 MB)",
        content_type: "Design Examples",
        description: "This design example illustrates the implementation of an ultra-low latency design on the Intel® Arria® 10 FPGA Development Kit. It focuses on optimizing data transfer and processing to achieve minimal latency in high-speed applications. The design leverages advanced transceiver PHY capabilities and includes detailed guidelines for achieving optimal performance.",
        isNew: true,
        cat1: "Interface Protocols",
        cat2: "Transceiver PHY",
        cat3: "Stratix 10 20 Transceiver PHY Reset Controller"
    },
    {
        id: "714345",
        title: "Intel® Arria® 10 FPGA – High-Performance Video Processing Design",
        date: "02/25/21",
        version: "21.1.1 Pro",
        file: "URL (7.80 MB)",
        content_type: "Development User Guides",
        description: "This design example provides a detailed guide for implementing a high-performance video processing pipeline on the Intel® Arria® 10 FPGA Development Kit. It integrates video processing IP cores with high-speed transceiver interfaces to handle 4K and 8K video streams efficiently, including support for color space conversion and frame rate adjustment.",
        isNew: true,
        cat1: "Interface Protocols",
        cat2: "Transceiver PHY",
        cat3: "Stratix 10 20 Transceiver PHY Reset Controller"
    },{
        id: "714346",
        title: "Intel® Arria® 10 FPGA – 5G Wireless Communication Reference Design",
        date: "03/18/21",
        version: "21.2.0 Pro",
        file: "URL (9.00 MB)",
        content_type: "Design Examples",
        description: "This design example showcases a 5G wireless communication system implemented on the Intel® Arria® 10 FPGA Development Kit. It demonstrates the integration of high-speed transceivers with a focus on efficient signal processing and real-time data handling. The design includes features for dynamic reconfiguration and optimization of transceiver settings.",
        isNew: true,
        cat1: "Interface Protocols",
        cat2: "Transceiver PHY",
        cat3: "Transceiver Reconfiguration Controller Intel FPGA IP"
    },
    {
        id: "714347",
        title: "Intel® Arria® 10 FPGA – High-Speed Data Acquisition System",
        date: "04/22/21",
        version: "21.2.1 Pro",
        file: "URL (8.60 MB)",
        content_type: "Development User Guides",
        description: "This design example provides a comprehensive guide for implementing a high-speed data acquisition system using the Intel® Arria® 10 FPGA. It includes the setup and configuration of high-speed transceivers and the management of data streams with dynamic reconfiguration capabilities. The guide emphasizes achieving high throughput and reliability in data acquisition applications.",
        isNew: true,
        cat1: "Interface Protocols",
        cat2: "Transceiver PHY",
        cat3: "Transceiver Reconfiguration Controller Intel FPGA IP"
    },
    {
        id: "714348",
        title: "Intel® Arria® 10 FPGA – Advanced Video Streaming Design",
        date: "05/14/21",
        version: "21.3.0 Pro",
        file: "URL (7.90 MB)",
        content_type: "Interface Protocols",
        description: "This design example demonstrates an advanced video streaming application on the Intel® Arria® 10 FPGA Development Kit. The design integrates video processing IP cores with high-speed transceiver interfaces and features dynamic reconfiguration of transceiver settings to adapt to varying video stream requirements. The example includes detailed instructions for setup and optimization.",
        isNew: true,
        cat1: "Interface Protocols",
        cat2: "Transceiver PHY",
        cat3: "Transceiver Reconfiguration Controller Intel FPGA IP"
    },
    {
        id: "714974",
        title: "Intel® Stratix® 10 FPGA – RapidIO II Reference Design for Avalon®-ST Pass-Through Interface Design Example",
        date: "01/20/21",
        version: "17.1.0 Pro",
        file: "URL (7.90 MB)",
        content_type: "Design Examples",
        description: "The RapidIO II reference design for the Avalon® streaming ( Avalon-ST) pass-through interface demonstrates the use of the Avalon-ST pass-through interface to implement NWRITE transactions using the RapidIO II IP core.",
        isNew: true,
        cat1: "Interface Protocols",
        cat2: "Transceiver PHY",
        cat3: "Stratix 10 E-Tile Transceiver Native PHY"
    },
    {
        id: "683238",
        title: "O-RAN Intel® FPGA IP User Guide",
        date: "01/20/21",
        version: "08/09/24",
        file: "URL (7.90 MB)",
        content_type: "Application Notes",
        description: "The RapidIO II reference design for the Avalon® streaming ( Avalon-ST) pass-through interface demonstrates the use of the Avalon-ST pass-through interface to implement NWRITE transactions using the RapidIO II IP core.",
        isNew: true,
        cat1: "Interface Protocols",
        cat2: "Transceiver PLL",
        cat3: "fPLL Intel Arria 10 Cyclone 10 FPGA IP"
    },
    {
        id: "683239",
        title: "O-RAN Intel® FPGA IP User Guide",
        date: "01/20/21",
        version: "08/09/24",
        file: "URL (7.90 MB)",
        content_type: "Application Notes",
        description: "The RapidIO II reference design for the Avalon® streaming ( Avalon-ST) pass-through interface demonstrates the use of the Avalon-ST pass-through interface to implement NWRITE transactions using the RapidIO II IP core.",
        isNew: true,
        cat1: "Interface Protocols",
        cat2: "Transceiver PLL",
        cat3: "fPLL Intel® Arria 10 Cyclone 10 FPGA IP"
    },
    {
        id: "683240",
        title: "O-RAN Intel® FPGA IP User Guide",
        date: "01/20/21",
        version: "08/09/24",
        file: "URL (7.90 MB)",
        content_type: "Application Notes",
        description: "The RapidIO II reference design for the Avalon® streaming ( Avalon-ST) pass-through interface demonstrates the use of the Avalon-ST pass-through interface to implement NWRITE transactions using the RapidIO II IP core.",
        isNew: true,
        cat1: "Interface Protocols",
        cat2: "Transceiver PLL",
        cat3: "Transceiver ATX PLL Intel® Arria 10 Cyclone 10 FPGA IP"
    },
    {
        id: "683241",
        title: "O-RAN Intel® FPGA IP User Guide",
        date: "01/20/21",
        version: "08/09/24",
        file: "URL (7.90 MB)",
        content_type: "Application Notes",
        description: "The RapidIO II reference design for the Avalon® streaming ( Avalon-ST) pass-through interface demonstrates the use of the Avalon-ST pass-through interface to implement NWRITE transactions using the RapidIO II IP core.",
        isNew: true,
        cat1: "Interface Protocols",
        cat2: "Transceiver PLL",
        cat3: "Transceiver ATX PLL Intel Arria 10 Cyclone 10 FPGA IP"
    },
    {
        "id": "683242",
        "title": "O-RAN Intel® FPGA IP Design Manual",
        "date": "02/15/21",
        "version": "08/09/24",
        "file": "URL (8.20 MB)",
        "content_type": "Application Notes",
        "description": "This guide covers the use of the Avalon® streaming (Avalon-ST) pass-through interface to handle NWRITE transactions with the RapidIO II IP core, focusing on implementation specifics for the Transceiver CMU PLL.",
        "isNew": false,
        "cat1": "Interface Protocols",
        "cat2": "Transceiver PLL",
        "cat3": "Transceiver CMU PLL Intel Arria 10 Cyclone 10 FPGA IP"
    },{
        "id": "683243",
        "title": "Advanced O-RAN Intel® FPGA IP Reference",
        "date": "03/10/21",
        "version": "08/09/24",
        "file": "URL (9.10 MB)",
        "content_type": "Application Notes",
        "description": "Explore the advanced use of the Avalon-ST pass-through interface with the RapidIO II IP core. This reference includes examples of configuring the Transceiver CMU PLL for optimal performance.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "Transceiver PLL",
        "cat3": "Transceiver CMU PLL Intel Arria 10 Cyclone 10 FPGA IP"
    },
   
    {
        "id": "683352",
        "title": "IRQ Bridge Intel® FPGA IP Configuration Guide",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (24.50 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring IRQ Bridge Intel® FPGA IP for various applications. Covers setup procedures, configuration details, and integration strategies.",
        "cat1": "Basic Functions",
        "cat2": "Simulation, Debug and Verification",
        "cat3": "Simulation",
        "cat4": "Avalon-MM Slave BFM Intel® FPGA IP"
    },
    {
        "id": "683353",
        "title": "IRQ Bridge Intel® FPGA IP Configuration Guide",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (24.50 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring IRQ Bridge Intel® FPGA IP for various applications. Covers setup procedures, configuration details, and integration strategies.",
        "cat1": "Basic Functions",
        "cat2": "Simulation, Debug and Verification",
        "cat3": "Simulation",
        "cat4": "Avalon-MM Slave BFM Intel® FPGA IP"
    },
    {
        "id": "683354",
        "title": "IRQ Bridge Intel® FPGA IP Configuration Guide",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (24.50 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring IRQ Bridge Intel® FPGA IP for various applications. Covers setup procedures, configuration details, and integration strategies.",
        "cat1": "Basic Functions",
        "cat2": "Simulation, Debug and Verification",
        "cat3": "Verification",
        "cat4": "Avalon Data Pattern Checker Intel® FPGA IP"
    },
    {
        "id": "683355",
        "title": "IRQ Bridge Intel® FPGA IP Configuration Guide",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (24.50 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring IRQ Bridge Intel® FPGA IP for various applications. Covers setup procedures, configuration details, and integration strategies.",
        "cat1": "Basic Functions",
        "cat2": "Simulation, Debug and Verification",
        "cat3": "Verification",
        "cat4": "Avalon Data Pattern Checker Intel® FPGA IP"
    },
    {
        "id": "683356",
        "title": "IRQ Bridge Intel® FPGA IP Configuration Guide",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (24.50 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring IRQ Bridge Intel® FPGA IP for various applications. Covers setup procedures, configuration details, and integration strategies.",
        "cat1": "Basic Functions",
        "cat2": "Simulation, Debug and Verification",
        "cat3": "Verification",
        "cat4": "Avalon Data Pattern Generator Intel® FPGA IP"
    },
    {
        "id": "683357",
        "title": "IRQ Bridge Intel® FPGA IP Configuration Guide",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (24.50 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring IRQ Bridge Intel® FPGA IP for various applications. Covers setup procedures, configuration details, and integration strategies.",
        "cat1": "Basic Functions",
        "cat2": "Simulation, Debug and Verification",
        "cat3": "Verification",
        "cat4": "Avalon Data Pattern Generator Intel® FPGA IP"
    },
    
   
];
var cat ={
    "all":['Application Notes','Architecture Briefs','Datasheets','Design Examples','Development Reference','Development User Guides','How-To Training','Instructor-Led Training','Learning Plans and Paths','On-Demand Training','Product Briefs','Register Maps','Release Notes','White Papers'],
    "Interface_Protocols":['Application Notes','Design Examples','Development Reference','Development User Guides','Register Maps','Release Notes'],
   
    "Basic_Functions":['Application Notes','Design Examples','Development User Guides','Release Notes'],
    
    "Simulation":['Design Examples','Development User Guides'],
    
    "Processors_and_Peripherals":['Application Notes','Datasheets','Design Examples','Development User Guides','How-To Training','Instructor-Led Training','Learning Plans and Paths','On-Demand Training','Register Maps','Release Notes','White Papers'],
    "Embedded_Processors":['Application Notes','Datasheets','Design Examples','Development User Guides','How-To Training','Instructor-Led Training','Learning Plans and Paths','On-Demand Training','Release Notes','White Papers'],
    "Nios_II_Processor":['Application Notes','Datasheets','Design Examples','Development User Guides','How-To Training','Learning Plans and Paths','On-Demand Training','Release Notes'],
    "Nios_V_Processors":['Application Notes','Design Examples','Development User Guides','How-To Training','Instructor-Led Training','On-Demand Training','Release Notes','White Papers'],
    // "Nios V m Processor":['Design Examples'],
    "Nios_V_g_Processor_Intel_FPGA_IP":['Design Examples','On-Demand Training'],
    "Nios_II__Classic__Processor":['Application Notes','Release Notes'],
   
    "DSP":['Application Notes','Design Examples','Development User Guides','How-To Training','On-Demand Training','Release Notes'],
    "Video_and_Image_Processing":['Design Examples','How-To Training'],

    "Video_and_Vision_Processing":['How-To Training'],
    "Tone_Mapping_Operator_(TMO)_Intel_FPGA_IP":['How-To Training'],
    "Warp_Intel_FPGA_IP":['How-To Training'],
    "Error_Detection_and_Correction":['How-To Training'],
    "Intel_FPGA_IP_Low_Density_Parity_Check__LDPC__IP_LDPC":['How-To Training'],
    "Memory_Interfaces_and_Controllers":['Design Examples','On-Demand Training','Release Notes'],

    "External_Memory_Interfaces_Intel_Arria_10_FPGA_IP":['On-Demand Training'],
    "Hybrid_Memory_Cube_Controller_Intel_FPGA_IP":['On-Demand Training'],
 
}
function createDocumentElement(doc) {

    return `
        <div class="document-item">
            <div class="row gx-0 accordion accordion-flush" id="accordionFlushExample">
                <div class="col-xxl-11 p-0 accordion-item border-0">
                    <div class="row align-items-center accordion-header gx-0" id="flush-heading-${doc.id}">
                        <div class="col-xxl-1 col-12 icon-group float-left align-items-center d-flex justify-content-end d-xl-none">
                            <a href="#"><i class="fa-solid fa-download document-title"></i></a>
                            <a href="#"><i class="fa-regular fa-bookmark document-title"></i></a>
                            <a href="#" class="accordion-button collapsed p-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-${doc.id}" aria-expanded="false" aria-controls="flush-collapse-${doc.id}"></a>
                        </div>
                        <div class="col-xxl-8 col-12">
                            <div class="ms-3">
                                <p class="mt-2">
                                    <a href="#" class="document-title">${doc.title}</a>
                                </p>
                            </div>
                        </div>
                        <div class="col-xxl-1 col-12 ms-3 ms-xl-0 d-flex">
                            <h6 class="d-block d-xl-none">ID : </h6>
                            <p class="mb-0" style="font-size: 14px;">${doc.id}</p>
                        </div>
                        <div class="col-xxl-1 col-12 ms-3 ms-xl-0 d-flex">
                            <h6 class="d-block d-xl-none">Date : </h6>
                            <p class="mb-0" style="font-size: 14px;">${doc.date}</p>
                        </div>
                        <div class="col-xl-2 col-12 ms-3 row ms-xl-0 px-0">
                            <div class="d-flex px-0">
                                <h6 class="d-flex d-xl-none">Version : </h6>
                            <p class="mb-0" style="font-size: 14px;">${doc.version}</p>

                         
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-1 icon-group d-flex align-items-center d-none d-xl-flex ps-0">
                    <a href="#" ><i class="fa-solid fa-download document-title"></i></a>
                    <a href="#" class="document-title "><i class="fa-regular fa-bookmark document-title"></i></a>
                    <a href="#" class="accordion-button collapsed p-0 document-title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-${doc.id}" aria-expanded="false" aria-controls="flush-collapse-${doc.id}"></a>
                </div>
                <div id="flush-collapse-${doc.id}" class="accordion-collapse collapse" aria-labelledby="flush-heading-${doc.id}" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body py-3 px-0">
                       <div class="d-xl-flex d-block">
                            <div class="d-flex ms-3"><h6>File:</h6><small>${doc.file}</small></div>
                            <div class="d-flex ms-3"><h6>Content Type:</h6><small>${doc.content_type}</small></div>
                       </div>
                        <div class="ms-3 col-xl-8"><p>${doc.discription}</p></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

 function content_type(value){
    console.log("cat",value);
    const category = document.getElementById('b_category');
    category.innerHTML = value.map((ele,ind)=>{
        return `
                                              <li>
                                                <span> <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault" onchange="content('${ele}')">
                                                </span>
                                                <span class="ms-2" key="ind">${ele}</span>
                                            </li>
        `   
    }).join('');
 }
function renderDocuments() {
    const container = document.getElementById('documentContainer');
    container.innerHTML = documents.map(createDocumentElement).join('');
    var total = document.getElementById('b_total');
    total.innerHTML = `64 Results`;
    var checkboxes = document.getElementsByClassName("b_check");
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
    var dropdowns = document.getElementsByClassName("dropdown-btnnn");
    // alert(dropdowns.length);
    for (var i = 0; i < dropdowns.length; i++){
        dropdowns[i].classList.remove('active');
            var dropdownContent = dropdowns[i].nextElementSibling;
                dropdownContent.style.display = "none";
    }
}
function data(x){
    console.log(x);
    var value=documents.filter((ele,ind)=>{
        return ele.cat1==x || ele.cat2==x || ele.cat3==x || ele.cat4==x
    })
    const container = document.getElementById('documentContainer');
    container.innerHTML = value.map(createDocumentElement).join('');
    var total = document.getElementById('b_total');
    total.innerHTML = `${value.length} Results`;
    var val1 = x.replace(/[\s$,®-]+/g, '_');

    var keys = Object.keys(cat);  // Get all keys from the `cat` object
    var val2 = keys.filter(key => key === val1);
    
    // Determine the value of `con` based on whether `val2` contains any matches
    var con;
    if (val2.length > 0) {
        con = cat[val2[0]];  // Get the value corresponding to the matched key
    } else {
        con = ['Design type'];  // Default value if no match is found
    }
    
    // Call the function with `con`
    content_type(con);
}
function content(x){
    console.log(x);
    var val= documents.filter((ele,ind)=>{
        return ele.content_type == x;
    })
    var total = document.getElementById('b_total');
    total.innerHTML = `${val.length} Results`
    console.log("val",val);
    const container = document.getElementById('documentContainer');
    container.innerHTML = val.map(createDocumentElement).join('');
}
function sortByNameAscending(arr) {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
}
function sortByName(x) {
        var total = document.getElementById('b_total');
        total.innerHTML = `${documents.length} Results`
        console.log(x);
    if(x==0){
        var data = documents.sort(function(a, b) {
            var dateA = new Date(a.date);
            var dateB = new Date(b.date);
            return dateB - dateA;
        })
        const container = document.getElementById('documentContainer');
        container.innerHTML = data.map(createDocumentElement).join('');
    }
    if(x==1) {

        var data = documents.sort(function(a, b) {
            var dateA = new Date(a.date);
            var dateB = new Date(b.date);
            return dateA - dateB;
        })
        const container = document.getElementById('documentContainer');
        container.innerHTML = data.map(createDocumentElement).join('');
    }
    if(x==2) {
        const container = document.getElementById('documentContainer');
        container.innerHTML = documents.map(createDocumentElement).join('');
    }
    if(x==3){
        const sortedDocuments = documents.sort((a, b) => a.title.localeCompare(b.title));
        console.log(sortedDocuments);
        const container = document.getElementById('documentContainer');
        container.innerHTML = sortedDocuments.map(createDocumentElement).join('');
    }
    if(x==4)
    {   
        const sortedDocuments = documents.sort((a, b) => b.title.localeCompare(a.title));
        console.log(sortedDocuments);
        const container = document.getElementById('documentContainer');
        container.innerHTML = sortedDocuments.map(createDocumentElement).join('');
    }
}
function sortJsonByDate(data) {
    return data.sort(function(a, b) {
      var dateA = new Date(a.date);
      var dateB = new Date(b.date);
      return dateB - dateA; // Newest first
    });
  }
renderDocuments();