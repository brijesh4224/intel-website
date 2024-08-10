const documents = [
    {
        id: "825857",
        title: "GTS Transceiver Dual-Simplex Interfaces User Guide",
        date: "08/19/24",
        version: "24.2",
        file : "URL (47.4KB)",
        content_type : "Development User Guides",
        discription:"The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        cat1:"Interface Protocols",
        cat2:"Serial",
    },
    {
        id: "777142",
        title: "Agilex™ 7 FPGA – Nios V/m Processor OCM to OCM Design Example",
        date: "04/20/23",
        version: "23.1.0 Pro",
        file : "URL (3.54 MB)",
        content_type : "Design Examples",
        discription:"This design example shows on-chip memory (OCM) access using the Nios V/m processor.",
        isNew: false,
        cat1:"Interface Protocols",
        cat2:"Serial",
        cat3:"JTAG UART Intel FPGA IP"
    },
    {
        id: "714478",
        title: "Agilex™ 7 M-Series FPGA Network-on-Chip (NoC) User Guide",
        date: "12/12/22",
        version: "22.3.0 Pro",
        file : "URL (5.48 MB)",
        content_type : "Design Examples",
        discription:"This application note provides guidelines to scale up the single link in the JESD204C Intel FPGA IP core design example generated from the Intel Quartus Prime software to handle a multipoint link system. A single link in JESD204C has one or more high-speed transceiver lanes or channels.",
        isNew: true,
        cat1:"Interface Protocols",
        cat2:"Serial",  
        cat3:"SPI (3 Wire Serial) Intel FPGA IP"
    },
    {
        id: "768844",
        title: "Agilex™ 7 M-Series FPGA Network-on-Chip (NoC) User Guide",
        date: "08/05/24",
        version: "24.2",
        file : " xlsx (53.0 KB)",
        content_type : "Register Maps",
        discription:"This table lists the registers available in the O-RAN Intel FPGA IP. All unlisted locations are reserved.",
        isNew: false,
        cat1:"Interface Protocols",
        cat2:"Serial",  
        cat3:"SPI (3 Wire Serial) Intel FPGA IP"
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
        content_type: "Design Examples",
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
        content_type: "Design Examples",
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
        content_type: "Design Examples",
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
        content_type: "Design Examples",
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
        "content_type": "Design Examples",
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
        "content_type": "Design Examples",
        "description": "Explore the advanced use of the Avalon-ST pass-through interface with the RapidIO II IP core. This reference includes examples of configuring the Transceiver CMU PLL for optimal performance.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "Transceiver PLL",
        "cat3": "Transceiver CMU PLL Intel Arria 10 Cyclone 10 FPGA IP"
    },
    {
        "id": "683244",
        "title": "Ethernet Intel® FPGA IP Integration Guide",
        "date": "04/05/21",
        "version": "08/09/24",
        "file": "URL (10.50 MB)",
        "content_type": "Design Examples",
        "description": "This guide provides comprehensive information on integrating the 1G Multi-rate Ethernet IP core with your FPGA design, focusing on Ethernet protocol implementation and performance optimization.",
        "isNew": false,
        "cat1": "Interface Protocols",
        "cat2": "Ethernet",
        "cat3": "1G Multi-rate Ethernet"
    },{
        "id": "683245",
        "title": "1G Multi-rate Ethernet IP Core Reference Manual",
        "date": "05/20/21",
        "version": "08/09/24",
        "file": "URL (11.30 MB)",
        "content_type": "Design Examples",
        "description": "Detailed reference manual for the 1G Multi-rate Ethernet IP core, covering setup, configuration, and optimization techniques for achieving high performance in Ethernet applications.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "Ethernet",
        "cat3": "1G Multi-rate Ethernet"
    },
    {
        "id": "683246",
        "title": "Triple-Speed Ethernet Integration Guide",
        "date": "06/15/21",
        "version": "08/09/24",
        "file": "URL (12.40 MB)",
        "content_type": "Design Examples",
        "description": "This guide offers a detailed approach to integrating the 1G Multi-rate Ethernet IP core with the Triple-Speed Ethernet Intel FPGA IP. It includes configuration, best practices, and performance tuning.",
        "isNew": false,
        "cat1": "Interface Protocols",
        "cat2": "Ethernet",
        "cat3": "1G Multi-rate Ethernet",
        "cat4": "Triple-Speed Ethernet Intel FPGA IP"
    },
    {
        "id": "683247",
        "title": "1G Multi-rate and Triple-Speed Ethernet IP Core Manual",
        "date": "07/25/21",
        "version": "08/09/24",
        "file": "URL (13.10 MB)",
        "content_type": "Design Examples",
        "description": "A comprehensive manual covering both the 1G Multi-rate Ethernet IP core and the Triple-Speed Ethernet Intel FPGA IP. Includes detailed implementation strategies, configurations, and optimization tips for Ethernet designs.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "Ethernet",
        "cat3": "1G Multi-rate Ethernet",
        "cat4": "Triple-Speed Ethernet Intel FPGA IP"
    },
    {
        "id": "683249",
        "title": "10G to 1G Multi-rate Ethernet IP Core Manual",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (15.25 MB)",
        "content_type": "Design Examples",
        "description": "This manual provides comprehensive details on the 10G to 1G Multi-rate Ethernet IP core and the Low Latency Ethernet 10G MAC Intel FPGA IP. It includes detailed implementation strategies, configuration guidelines, and optimization techniques for high-performance Ethernet designs.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "Ethernet",
        "cat3": "10G to 1G Multi-rate Ethernet",
        "cat4": "Low Latency Ethernet 10G MAC Intel FPGA IP"
    },
    {
        "id": "683251",
        "title": "10G to 1G Multi-rate Ethernet IP Core Manual",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (15.25 MB)",
        "content_type": "Design Examples",
        "description": "This manual provides comprehensive details on the 10G to 1G Multi-rate Ethernet IP core and the 1G 10GbE and 10GBASE-KR PHY Intel Arria 10 FPGA IP. It includes detailed implementation strategies, configuration guidelines, and optimization techniques for high-performance Ethernet designs.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "Ethernet",
        "cat3": "10G to 1G Multi-rate Ethernet",
        "cat4": "1G 10GbE and 10GBASE-KR PHY Intel Arria 10 FPGA IP"
    },
    {
        "id": "683252",
        "title": "Advanced 10G to 1G Multi-rate Ethernet Solutions",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (16.50 MB)",
        "content_type": "Design Examples",
        "description": "This manual focuses on advanced solutions for 10G to 1G Multi-rate Ethernet IP cores and features the 1G 10GbE and 10GBASE-KR PHY Intel Arria 10 FPGA IP. It covers in-depth implementation techniques, configuration settings, and performance optimization for high-speed Ethernet applications.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "Ethernet",
        "cat3": "10G to 1G Multi-rate Ethernet",
        "cat4": "1G 10GbE and 10GBASE-KR PHY Intel Arria 10 FPGA IP"
    },
    {
        "id": "683252",
        "title": "Advanced 10G to 1G Multi-rate Ethernet Solutions",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (16.50 MB)",
        "content_type": "Design Examples",
        "description": "This manual focuses on advanced solutions for 10G to 1G Multi-rate Ethernet IP cores and features the XAUI PHY Intel FPGA IP. It covers in-depth implementation techniques, configuration settings, and performance optimization for high-speed Ethernet applications.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "Ethernet",
        "cat3": "10G to 1G Multi-rate Ethernet",
        "cat4": "XAUI PHY Intel FPGA IP"
    },
    {
        "id": "683253",
        "title": "High-Speed 1G to 10G Ethernet PHY Solutions",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (18.75 MB)",
        "content_type": "Design Examples",
        "description": "This guide provides solutions for implementing 1G to 10G Ethernet PHYs using Intel® FPGA IP. It includes details on configuration, optimization, and best practices for achieving high-speed performance.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "Ethernet",
        "cat3": "1G to 10G Ethernet",
        "cat4": "1G 2.5G 5G 10G Multi-rate Ethernet PHY Intel FPGA IP"
    },
    {
        "id": "683254",
        "title": "Comprehensive 10G to 1G Ethernet PHY Implementation",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (14.20 MB)",
        "content_type": "Design Examples",
        "description": "This manual explores advanced implementation strategies for 10G to 1G Ethernet PHYs using Intel® FPGA IP. It covers detailed implementation techniques, performance tuning, and practical application tips.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "Ethernet",
        "cat3": "10G to 1G Ethernet",
        "cat4": "1G 2.5G 5G 10G Multi-rate Ethernet PHY Intel FPGA IP"
    },
    {
        "id": "683253",
        "title": "High-Speed 1G to 10G Ethernet PHY Solutions",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (18.75 MB)",
        "content_type": "Design Examples",
        "description": "This guide provides solutions for implementing 1G to 10G Ethernet PHYs using Intel® FPGA IP. It includes details on configuration, optimization, and best practices for achieving high-speed performance.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "Ethernet",
        "cat3": "Reference Design Components",
        "cat4": "Ethernet MDIO Intel FPGA IP"
    },{
        "id": "683254",
        "title": "Comprehensive 10G to 1G Ethernet PHY Implementation",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (14.20 MB)",
        "content_type": "Design Examples",
        "description": "This manual explores advanced implementation strategies for 10G to 1G Ethernet PHYs using Intel® FPGA IP. It covers detailed implementation techniques, performance tuning, and practical application tips.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "Ethernet",
        "cat3": "Reference Design Components",
        "cat4": "Ethernet MDIO Intel FPGA IP"
    },
    {
        "id": "683253",
        "title": "High-Speed 1G to 10G Ethernet PHY Solutions",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (18.75 MB)",
        "content_type": "Design Examples",
        "description": "This guide provides solutions for implementing 1G to 10G Ethernet PHYs using Intel® FPGA IP. It includes details on configuration, optimization, and best practices for achieving high-speed performance.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "Ethernet",
        "cat3": "Reference Design Components",
        "cat4": "Ethernet IEEE 1588 TOD Synchronizer Intel FPGA IP"
    }, 
    {
        "id": "683254",
        "title": "Comprehensive 10G to 1G Ethernet PHY Implementation",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (14.20 MB)",
        "content_type": "Design Examples",
        "description": "This manual explores advanced implementation strategies for 10G to 1G Ethernet PHYs using Intel® FPGA IP. It covers detailed implementation techniques, performance tuning, and practical application tips.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "Ethernet",
        "cat3": "Reference Design Components",
        "cat4": "Ethernet IEEE 1588 TOD Synchronizer Intel FPGA IP"
    },
    {
        "id": "683253",
        "title": "High-Speed 1G to 10G Ethernet PHY Solutions",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (18.75 MB)",
        "content_type": "Design Examples",
        "description": "This guide provides solutions for implementing 1G to 10G Ethernet PHYs using Intel® FPGA IP. It includes details on configuration, optimization, and best practices for achieving high-speed performance.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "PCI Express",
        "cat3": "Intel Arria 10 Cyclone 10 Hard IP for PCI Express"
    },{
        "id": "683254",
        "title": "Comprehensive 10G to 1G Ethernet PHY Implementation",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (14.20 MB)",
        "content_type": "Design Examples",
        "description": "This manual explores advanced implementation strategies for 10G to 1G Ethernet PHYs using Intel® FPGA IP. It covers detailed implementation techniques, performance tuning, and practical application tips.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "PCI Express",
        "cat3": "Intel Arria 10 Cyclone 10 Hard IP for PCI Express"
    },
    {
        "id": "683253",
        "title": "High-Speed 1G to 10G Ethernet PHY Solutions",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (18.75 MB)",
        "content_type": "Design Examples",
        "description": "This guide provides solutions for implementing 1G to 10G Ethernet PHYs using Intel® FPGA IP. It includes details on configuration, optimization, and best practices for achieving high-speed performance.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "PCI Express",
        "cat3": "Intel P-Tile Avalon-ST for PCI Express"
    },
    {
        "id": "683254",
        "title": "Comprehensive 10G to 1G Ethernet PHY Implementation",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (14.20 MB)",
        "content_type": "Design Examples",
        "description": "This manual explores advanced implementation strategies for 10G to 1G Ethernet PHYs using Intel® FPGA IP. It covers detailed implementation techniques, performance tuning, and practical application tips.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "PCI Express",
        "cat3": "Intel P-Tile Avalon-ST for PCI Express"
    },
    {
        "id": "683255",
        "title": "Optimizing PCI Express Designs with Intel FPGA IP",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (20.50 MB)",
        "content_type": "Design Examples",
        "description": "This document offers advanced techniques and optimization strategies for PCI Express designs using Intel® FPGA IP. It covers various implementation approaches, configuration settings, and performance improvements.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "PCI Express",
        "cat3": "Intel P-Tile Avalon-ST for PCI Express"
    },
    {
        "id": "683253",
        "title": "High-Speed 1G to 10G Ethernet PHY Solutions",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (18.75 MB)",
        "content_type": "Design Examples",
        "description": "This guide provides solutions for implementing 1G to 10G Ethernet PHYs using Intel® FPGA IP. It includes details on configuration, optimization, and best practices for achieving high-speed performance.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "PCI Express",
        "cat3": "V-Series Avalon-MM DMA for PCI Express"
    },
    {
        "id": "683253",
        "title": "High-Speed 1G to 10G Ethernet PHY Solutions",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (18.75 MB)",
        "content_type": "Design Examples",
        "description": "This guide provides solutions for implementing 1G to 10G Ethernet PHYs using Intel® FPGA IP. It includes details on configuration, optimization, and best practices for achieving high-speed performance.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "PCI Express",
        "cat3": "V-Series Avalon-MM DMA for PCI Express"
    },
    {
        "id": "683254",
        "title": "Comprehensive 10G to 1G Ethernet PHY Implementation",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (14.20 MB)",
        "content_type": "Design Examples",
        "description": "This manual explores advanced implementation strategies for 10G to 1G Ethernet PHYs using Intel® FPGA IP. It covers detailed implementation techniques, performance tuning, and practical application tips.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "PCI Express",
        "cat3": "V-Series Avalon-MM DMA for PCI Express"
    },{
        "id": "683255",
        "title": "Optimizing PCI Express Designs with Intel FPGA IP",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (20.50 MB)",
        "content_type": "Design Examples",
        "description": "This document offers advanced techniques and optimization strategies for PCI Express designs using Intel® FPGA IP. It covers various implementation approaches, configuration settings, and performance improvements.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "PCI Express",
        "cat3": "Avalon-MM Intel® Stratix® 10 Hard IP for PCI Express"
    },
    {
        "id": "683256",
        "title": "Advanced JESD204B Interface Solutions",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (22.30 MB)",
        "content_type": "Design Examples",
        "description": "This manual covers advanced solutions for implementing JESD204B interfaces using Intel® FPGA IP. It includes detailed implementation strategies, configuration settings, and performance optimization techniques.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "JESD",
        "cat3": "JESD204B Intel® FPGA IP"
    },
    {
        "id": "683257",
        "title": "JESD204B IP Core Implementation Guide",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (19.60 MB)",
        "content_type": "Design Examples",
        "description": "This guide provides comprehensive instructions for implementing JESD204B IP cores using Intel® FPGA technology. It includes practical examples, configuration tips, and performance tuning techniques.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "JESD",
        "cat3": "JESD204B Intel® FPGA IP"
    },{
        "id": "683258",
        "title": "Implementing JESD204B with Intel FPGAs",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (17.85 MB)",
        "content_type": "Design Examples",
        "description": "Explore implementation strategies for JESD204B interfaces using Intel® FPGA IP. This document details the configuration, optimization, and integration of JESD204B IP cores into high-speed systems.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "JESD",
        "cat3": "JESD204B Intel® FPGA IP"
    },
    {
        "id": "683259",
        "title": "Optimizing JESD204B Designs on Intel FPGAs",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (21.40 MB)",
        "content_type": "Design Examples",
        "description": "This document provides insights and techniques for optimizing JESD204B designs using Intel® FPGA IP. It covers various aspects of performance enhancement, configuration, and best practices for efficient design.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "JESD",
        "cat3": "JESD204B Intel® FPGA IP"
    },{
        "id": "683260",
        "title": "High-Performance JESD204B Interface Design",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (25.00 MB)",
        "content_type": "Design Examples",
        "description": "A detailed guide on designing high-performance JESD204B interfaces with Intel® FPGA IP. This document covers implementation methodologies, configuration options, and performance optimization for advanced applications.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "JESD",
        "cat3": "JESD204B Intel® FPGA IP"
    },
    {
        "id": "683261",
        "title": "High-Speed Interface Design Techniques",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (23.10 MB)",
        "content_type": "Design Examples",
        "description": "This document explores advanced techniques for designing high-speed interfaces using Intel® FPGA IP. It includes implementation strategies, configuration details, and performance optimization tips.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "High-Speed",
        "cat3": "RapidIO",
        "cat4": "RapidIO II (IDLE2 up to 6.25 Gbaud) Intel® FPGA IP"
    },{
        "id": "683262",
        "title": "Implementing High-Speed Interfaces with RapidIO II",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (20.45 MB)",
        "content_type": "Design Examples",
        "description": "A guide to implementing high-speed interfaces using RapidIO II IP cores with Intel® FPGAs. This document includes detailed implementation instructions, configuration settings, and optimization strategies.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "High-Speed",
        "cat3": "RapidIO",
        "cat4": "RapidIO II (IDLE2 up to 6.25 Gbaud) Intel® FPGA IP"
    },
    {
        "id": "683263",
        "title": "Optimizing High-Speed RapidIO II Interfaces",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (22.85 MB)",
        "content_type": "Design Examples",
        "description": "This document provides optimization techniques for high-speed RapidIO II interfaces using Intel® FPGA IP. It covers performance tuning, advanced configuration options, and best practices for achieving optimal results.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "High-Speed",
        "cat3": "RapidIO",
        "cat4": "RapidIO II (IDLE2 up to 6.25 Gbaud) Intel® FPGA IP"
    },
    {
        "id": "683264",
        "title": "Advanced Design for High-Speed RapidIO II Interfaces",
        "date": "08/10/24",
        "version": "2.04.11",
        "file": "URL (24.60 MB)",
        "content_type": "Design Examples",
        "description": "An advanced guide to designing high-speed RapidIO II interfaces with Intel® FPGA IP. This document includes in-depth design techniques, configuration guidance, and performance optimization strategies for high-speed applications.",
        "isNew": true,
        "cat1": "Interface Protocols",
        "cat2": "High-Speed",
        "cat3": "RapidIO",
        "cat4": "RapidIO II (IDLE2 up to 6.25 Gbaud) Intel® FPGA IP"
    },
    {
        "id": "683265",
        "title": "Implementing Reset Controller with Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (21.00 MB)",
        "content_type": "Design Examples",
        "description": "This document covers the implementation of the Reset Controller Intel® FPGA IP. It includes configuration details, application examples, and performance optimization strategies.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "Clocks, PLLs and Resets",
        "cat3": "Reset Controller Intel® FPGA IP"
    },
    {
        "id": "683269",
        "title": "Advanced Reset Controller Configuration for Intel® FPGAs",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (22.10 MB)",
        "content_type": "Design Examples",
        "description": "Detailed guide on configuring the Reset Controller Intel® FPGA IP for advanced applications. Includes examples, best practices, and performance tips.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "Clocks, PLLs and Resets",
        "cat3": "Reset Controller Intel® FPGA IP"
    },
    {
        "id": "683266",
        "title": "Using Avalon ALTPLL for Clock Management",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (18.75 MB)",
        "content_type": "Design Examples",
        "description": "This guide provides implementation techniques for the Avalon ALTPLL IP. It includes details on configuration, integration, and optimization for effective clock management.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "Clocks, PLLs and Resets",
        "cat3": "Avalon ALTPLL"
    },
    {
        "id": "683270",
        "title": "Optimizing Avalon ALTPLL Performance",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (20.30 MB)",
        "content_type": "Design Examples",
        "description": "Comprehensive guide on optimizing Avalon ALTPLL performance. Covers configuration tips, common issues, and best practices for achieving optimal clock performance.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "Clocks, PLLs and Resets",
        "cat3": "Avalon ALTPLL"
    },
    {
        "id": "683267",
        "title": "Configuring IOPLL Intel® FPGA IP for Optimal Performance",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (22.10 MB)",
        "content_type": "Design Examples",
        "description": "Explore the configuration of IOPLL Intel® FPGA IP to achieve optimal performance. This document covers setup procedures, application examples, and best practices for efficient clock management.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "Clocks, PLLs and Resets",
        "cat3": "IOPLL Intel® FPGA IP"
    },
    {
        "id": "683271",
        "title": "IOPLL Intel® FPGA IP: Advanced Configuration and Troubleshooting",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (23.00 MB)",
        "content_type": "Design Examples",
        "description": "Detailed guide on advanced configuration and troubleshooting of IOPLL Intel® FPGA IP. Includes practical examples and solutions for common issues.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "Clocks, PLLs and Resets",
        "cat3": "IOPLL Intel® FPGA IP"
    },
    {
        "id": "683272",
        "title": "Understanding PLL for FPGA Designs",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (15.50 MB)",
        "content_type": "Design Examples",
        "description": "An introduction to the PLL IP for FPGA designs, including basic setup, configuration, and performance optimization strategies.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "Clocks, PLLs and Resets",
        "cat3": "PLL"
    },
    {
        "id": "683273",
        "title": "Configuring PLLs in FPGA Applications",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (17.00 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring PLLs in FPGA applications. Covers setup, common configuration options, and techniques for achieving desired clock performance.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "Clocks, PLLs and Resets",
        "cat3": "PLL"
    },
    {
        "id": "683274",
        "title": "Implementing ALTCLKCTRL Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (16.25 MB)",
        "content_type": "Design Examples",
        "description": "This document provides implementation strategies for the ALTCLKCTRL Intel® FPGA IP. It includes configuration details, usage examples, and best practices for effective clock control.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "Clocks, PLLs and Resets",
        "cat3": "ALTCLKCTRL Intel® FPGA IP"
    },
    {
        "id": "683275",
        "title": "Optimizing ALTCLKCTRL Intel® FPGA IP Performance",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (19.00 MB)",
        "content_type": "Design Examples",
        "description": "Guide to optimizing the performance of ALTCLKCTRL Intel® FPGA IP. Covers configuration tips, performance tuning, and troubleshooting techniques.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "Clocks, PLLs and Resets",
        "cat3": "ALTCLKCTRL Intel® FPGA IP"
    },
    {
        "id": "683276",
        "title": "Configuring PLL Reconfig Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (14.75 MB)",
        "content_type": "Design Examples",
        "description": "Detailed guide on configuring PLL Reconfig Intel® FPGA IP. Includes practical examples, setup instructions, and optimization techniques.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "Clocks, PLLs and Resets",
        "cat3": "PLL Reconfig Intel® FPGA IP"
    },
    {
        "id": "683277",
        "title": "Advanced Techniques for PLL Reconfig Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (15.20 MB)",
        "content_type": "Design Examples",
        "description": "Explore advanced techniques for using PLL Reconfig Intel® FPGA IP. Covers configuration, reconfiguration strategies, and performance optimization.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "Clocks, PLLs and Resets",
        "cat3": "PLL Reconfig Intel® FPGA IP"
    },
    {
        "id": "683278",
        "title": "Implementing Reset Sequencer Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (16.75 MB)",
        "content_type": "Design Examples",
        "description": "Guide to implementing the Reset Sequencer Intel® FPGA IP. Includes setup instructions, configuration details, and performance tuning tips.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "Clocks, PLLs and Resets",
        "cat3": "Reset Sequencer Intel® FPGA IP"
    },
    {
        "id": "683279",
        "title": "Optimizing Reset Sequencer Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (18.00 MB)",
        "content_type": "Design Examples",
        "description": "This document provides techniques for optimizing the Reset Sequencer Intel® FPGA IP. Covers advanced configuration, performance optimization, and troubleshooting tips.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "Clocks, PLLs and Resets",
        "cat3": "Reset Sequencer Intel® FPGA IP"
    },
    {
        "id": "683280",
        "title": "Configuring IOPLL Reconfig Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (15.60 MB)",
        "content_type": "Design Examples",
        "description": "Comprehensive guide on configuring IOPLL Reconfig Intel® FPGA IP. Includes setup procedures, configuration options, and performance optimization techniques.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "Clocks, PLLs and Resets",
        "cat3": "IOPLL Reconfig Intel® FPGA IP"
    },
    {
        "id": "683281",
        "title": "Advanced Use of IOPLL Reconfig Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (16.90 MB)",
        "content_type": "Design Examples",
        "description": "Detailed guide on advanced use and optimization of IOPLL Reconfig Intel® FPGA IP. Covers configuration, reconfiguration techniques, and performance tuning.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "Clocks, PLLs and Resets",
        "cat3": "IOPLL Reconfig Intel® FPGA IP"
    },
    {
        "id": "683282",
        "title": "Understanding Clock Source IP for FPGA",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (13.90 MB)",
        "content_type": "Design Examples",
        "description": "Introduction to the Clock Source IP for FPGA. Includes basic setup instructions, configuration details, and use cases.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "Clocks, PLLs and Resets",
        "cat3": "Clock Source"
    },
    {
        "id": "683283",
        "title": "Configuring and Using Clock Source IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (14.20 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring and using Clock Source IP in FPGA designs. Includes practical examples and best practices for effective clock management.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "Clocks, PLLs and Resets",
        "cat3": "Clock Source"
    },
    {
        "id": "683288",
        "title": "Implementing Avalon-ST Single Clock FIFO Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (22.30 MB)",
        "content_type": "Design Examples",
        "description": "Detailed guide on implementing Avalon-ST Single Clock FIFO Intel® FPGA IP. Includes configuration details, usage examples, and performance optimization tips.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "On-Chip Memory",
        "cat3": "Avalon-ST Single Clock FIFO Intel® FPGA IP"
    },
    {
        "id": "683289",
        "title": "Configuring Avalon-ST Single Clock FIFO Intel® FPGA IP for High Performance",
        "date": "08/10/24",
        "version": "07/30/24",
        "file": "URL (20.45 MB)",
        "content_type": "Design Examples",
        "description": "Explore configuration strategies for Avalon-ST Single Clock FIFO Intel® FPGA IP to achieve high performance. Covers advanced configuration and optimization techniques.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "On-Chip Memory",
        "cat3": "Avalon-ST Single Clock FIFO Intel® FPGA IP"
    },
    {
        "id": "683290",
        "title": "Using On-Chip Memory (RAM or ROM) Intel® FPGA IP",
        "date": "08/10/24",
        "version": "08/15/24",
        "file": "URL (21.50 MB)",
        "content_type": "Design Examples",
        "description": "Guide to implementing On-Chip Memory (RAM or ROM) Intel® FPGA IP, including setup, configuration, and performance optimization.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "On-Chip Memory",
        "cat3": "On-Chip Memory (RAM or ROM) Intel® FPGA IP"
    },
    {
        "id": "683291",
        "title": "Optimizing On-Chip Memory (RAM or ROM) Intel® FPGA IP",
        "date": "08/10/24",
        "version": "07/20/24",
        "file": "URL (19.75 MB)",
        "content_type": "Design Examples",
        "description": "Comprehensive guide on optimizing On-Chip Memory (RAM or ROM) Intel® FPGA IP. Includes practical examples and tips for enhancing performance.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "On-Chip Memory",
        "cat3": "On-Chip Memory (RAM or ROM) Intel® FPGA IP"
    },
    {
        "id": "683292",
        "title": "Configuring Avalon-ST Dual Clock FIFO",
        "date": "08/10/24",
        "version": "08/05/24",
        "file": "URL (18.20 MB)",
        "content_type": "Design Examples",
        "description": "Detailed guide on configuring Avalon-ST Dual Clock FIFO. Includes design examples, configuration tips, and performance optimization strategies.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "On-Chip Memory",
        "cat3": "Avalon-ST Dual Clock FIFO"
    },
    {
        "id": "683293",
        "title": "Implementing Avalon-ST Dual Clock FIFO in FPGA Designs",
        "date": "08/10/24",
        "version": "08/01/24",
        "file": "URL (17.80 MB)",
        "content_type": "Design Examples",
        "description": "Guide on implementing Avalon-ST Dual Clock FIFO in FPGA designs. Includes configuration instructions and performance enhancement techniques.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "On-Chip Memory",
        "cat3": "Avalon-ST Dual Clock FIFO"
    },
    {
        "id": "683294",
        "title": "Implementing On-Chip Flash Intel® FPGA IP",
        "date": "08/10/24",
        "version": "07/25/24",
        "file": "URL (16.95 MB)",
        "content_type": "Design Examples",
        "description": "Guide to implementing On-Chip Flash Intel® FPGA IP. Covers setup, configuration, and best practices for achieving optimal performance.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "On-Chip Memory",
        "cat3": "On-Chip Flash Intel® FPGA IP"
    },
    {
        "id": "683295",
        "title": "Optimizing On-Chip Flash Intel® FPGA IP",
        "date": "08/10/24",
        "version": "07/10/24",
        "file": "URL (15.40 MB)",
        "content_type": "Design Examples",
        "description": "This document provides techniques for optimizing the performance of On-Chip Flash Intel® FPGA IP. Includes configuration tips and performance tuning strategies.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "On-Chip Memory",
        "cat3": "On-Chip Flash Intel® FPGA IP"
    },
    {
        "id": "683296",
        "title": "Configuring Avalon FIFO Memory Intel® FPGA IP",
        "date": "08/10/24",
        "version": "08/01/24",
        "file": "URL (16.50 MB)",
        "content_type": "Design Examples",
        "description": "Comprehensive guide to configuring Avalon FIFO Memory Intel® FPGA IP. Includes setup instructions, application examples, and performance optimization.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "On-Chip Memory",
        "cat3": "Avalon FIFO Memory Intel® FPGA IP"
    },
    {
        "id": "683297",
        "title": "Optimizing Avalon FIFO Memory Intel® FPGA IP",
        "date": "08/10/24",
        "version": "07/18/24",
        "file": "URL (15.75 MB)",
        "content_type": "Design Examples",
        "description": "Detailed guide on optimizing Avalon FIFO Memory Intel® FPGA IP. Includes practical examples and techniques for performance enhancement.",
        "isNew": true,
        "cat1": "Basic Functions",
        "cat2": "On-Chip Memory",
        "cat3": "Avalon FIFO Memory Intel® FPGA IP"
    },
    {
        "id": "683313",
        "title": "Avalon-ST Adapter Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (21.30 MB)",
        "content_type": "Design Examples",
        "description": "Comprehensive guide on configuring Avalon-ST Adapter Intel® FPGA IP. Includes setup instructions, configuration options, and performance optimization tips.",
        "cat1": "Basic Functions",
        "cat2": "Bridges and Adaptors",
        "cat3": "Streaming",
        "cat4": "Avalon-ST Adapter Intel® FPGA IP"
    },
    {
        "id": "683314",
        "title": "Avalon-ST Error Adapter Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (19.45 MB)",
        "content_type": "Design Examples",
        "description": "Detailed guide on implementing Avalon-ST Error Adapter Intel® FPGA IP. Covers configuration, integration, and error handling techniques.",
        "cat1": "Basic Functions",
        "cat2": "Bridges and Adaptors",
        "cat3": "Streaming",
        "cat4": "Avalon-ST Error Adapter Intel® FPGA IP"
    },
    {
        "id": "683315",
        "title": "Avalon-ST Timing Adapter Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (18.20 MB)",
        "content_type": "Design Examples",
        "description": "Guide to using Avalon-ST Timing Adapter Intel® FPGA IP. Includes setup, configuration, and performance optimization techniques.",
        "cat1": "Basic Functions",
        "cat2": "Bridges and Adaptors",
        "cat3": "Streaming",
        "cat4": "Avalon-ST Timing Adapter Intel® FPGA IP"
    },
    {
        "id": "683316",
        "title": "Avalon-ST Bytes to Packets Converter Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (17.30 MB)",
        "content_type": "Design Examples",
        "description": "Guide to implementing Avalon-ST Bytes to Packets Converter Intel® FPGA IP. Includes setup procedures, configuration details, and optimization techniques.",
        "cat1": "Basic Functions",
        "cat2": "Bridges and Adaptors",
        "cat3": "Streaming",
        "cat4": "Avalon-ST Bytes to Packets Converter Intel® FPGA IP"
    },
    {
        "id": "683317",
        "title": "Avalon-ST Channel Adapter Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (16.80 MB)",
        "content_type": "Design Examples",
        "description": "Detailed guide on configuring Avalon-ST Channel Adapter Intel® FPGA IP. Includes setup instructions, application examples, and optimization techniques.",
        "cat1": "Basic Functions",
        "cat2": "Bridges and Adaptors",
        "cat3": "Streaming",
        "cat4": "Avalon-ST Channel Adapter Intel® FPGA IP"
    },
    {
        "id": "683318",
        "title": "Avalon-ST Packets to Bytes Converter Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (15.70 MB)",
        "content_type": "Design Examples",
        "description": "Guide to Avalon-ST Packets to Bytes Converter Intel® FPGA IP. Covers detailed configuration and performance optimization.",
        "cat1": "Basic Functions",
        "cat2": "Bridges and Adaptors",
        "cat3": "Streaming",
        "cat4": "Avalon-ST Packets to Bytes Converter Intel® FPGA IP"
    },
    {
        "id": "683319",
        "title": "Avalon-MM Pipeline Bridge Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (22.10 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring Avalon-MM Pipeline Bridge Intel® FPGA IP. Includes detailed setup instructions, integration steps, and performance optimization techniques.",
        "cat1": "Basic Functions",
        "cat2": "Bridges and Adaptors",
        "cat3": "Memory Mapped",
        "cat4": "Avalon-MM Pipeline Bridge Intel® FPGA IP"
    },
    {
        "id": "683320",
        "title": "JTAG to Avalon Master Bridge Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (20.40 MB)",
        "content_type": "Design Examples",
        "description": "Detailed guide on implementing JTAG to Avalon Master Bridge Intel® FPGA IP. Covers configuration, integration, and troubleshooting.",
        "cat1": "Basic Functions",
        "cat2": "Bridges and Adaptors",
        "cat3": "Memory Mapped",
        "cat4": "JTAG to Avalon Master Bridge Intel® FPGA IP"
    },
    {
        "id": "683321",
        "title": "Avalon-MM Clock Crossing Bridge Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (18.90 MB)",
        "content_type": "Design Examples",
        "description": "Implementation guide for Avalon-MM Clock Crossing Bridge Intel® FPGA IP. Includes setup procedures, configuration options, and best practices.",
        "cat1": "Basic Functions",
        "cat2": "Bridges and Adaptors",
        "cat3": "Memory Mapped",
        "cat4": "Avalon-MM Clock Crossing Bridge Intel® FPGA IP"
    },
    {
        "id": "683322",
        "title": "SPI Slave to Avalon Master Bridge",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (17.60 MB)",
        "content_type": "Design Examples",
        "description": "Guide on configuring SPI Slave to Avalon Master Bridge. Includes detailed integration steps, configuration options, and troubleshooting tips.",
        "cat1": "Basic Functions",
        "cat2": "Bridges and Adaptors",
        "cat3": "Memory Mapped",
        "cat4": "SPI Slave to Avalon Master Bridge"
    },
    {
        "id": "683323",
        "title": "AXI Bridge Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (16.50 MB)",
        "content_type": "Design Examples",
        "description": "Implementation guide for AXI Bridge Intel® FPGA IP. Covers configuration, integration, and performance optimization.",
        "cat1": "Basic Functions",
        "cat2": "Bridges and Adaptors",
        "cat3": "Memory Mapped",
        "cat4": "AXI Bridge Intel® FPGA IP"
    },
    {
        "id": "683324",
        "title": "Address Span Extender Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (15.80 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring Address Span Extender Intel® FPGA IP. Includes setup procedures, configuration details, and usage examples.",
        "cat1": "Basic Functions",
        "cat2": "Bridges and Adaptors",
        "cat3": "Memory Mapped",
        "cat4": "Address Span Extender Intel® FPGA IP"
    },
    {
        "id": "683325",
        "title": "Avalon-MM Pipeline Bridge Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (22.10 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring Avalon-MM Pipeline Bridge Intel® FPGA IP. Includes detailed setup instructions, integration steps, and performance optimization techniques.",
        "cat1": "Basic Functions",
        "cat2": "Bridges and Adaptors",
        "cat3": "Memory Mapped",
        "cat4": "Avalon-MM Pipeline Bridge Intel® FPGA IP"
    },
    {
        "id": "683326",
        "title": "JTAG to Avalon Master Bridge Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (20.40 MB)",
        "content_type": "Design Examples",
        "description": "Detailed guide on implementing JTAG to Avalon Master Bridge Intel® FPGA IP. Covers configuration, integration, and troubleshooting.",
        "cat1": "Basic Functions",
        "cat2": "Bridges and Adaptors",
        "cat3": "Memory Mapped",
        "cat4": "JTAG to Avalon Master Bridge Intel® FPGA IP"
    },
    {
        "id": "683327",
        "title": "Avalon-MM Clock Crossing Bridge Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (18.90 MB)",
        "content_type": "Design Examples",
        "description": "Implementation guide for Avalon-MM Clock Crossing Bridge Intel® FPGA IP. Includes setup procedures, configuration options, and best practices.",
        "cat1": "Basic Functions",
        "cat2": "Bridges and Adaptors",
        "cat3": "Memory Mapped",
        "cat4": "Avalon-MM Clock Crossing Bridge Intel® FPGA IP"
    },
    {
        "id": "683328",
        "title": "SPI Slave to Avalon Master Bridge",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (17.60 MB)",
        "content_type": "Design Examples",
        "description": "Guide on configuring SPI Slave to Avalon Master Bridge. Includes detailed integration steps, configuration options, and troubleshooting tips.",
        "cat1": "Basic Functions",
        "cat2": "Bridges and Adaptors",
        "cat3": "Memory Mapped",
        "cat4": "SPI Slave to Avalon Master Bridge"
    },
    {
        "id": "683329",
        "title": "AXI Bridge Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (16.50 MB)",
        "content_type": "Design Examples",
        "description": "Implementation guide for AXI Bridge Intel® FPGA IP. Covers configuration, integration, and performance optimization.",
        "cat1": "Basic Functions",
        "cat2": "Bridges and Adaptors",
        "cat3": "Memory Mapped",
        "cat4": "AXI Bridge Intel® FPGA IP"
    },
    {
        "id": "683330",
        "title": "Address Span Extender Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (15.80 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring Address Span Extender Intel® FPGA IP. Includes setup procedures, configuration details, and usage examples.",
        "cat1": "Basic Functions",
        "cat2": "Bridges and Adaptors",
        "cat3": "Memory Mapped",
        "cat4": "Address Span Extender Intel® FPGA IP"
    },
    {
        "id": "683331",
        "title": "IRQ Bridge Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (25.00 MB)",
        "content_type": "Design Examples",
        "description": "Comprehensive guide for implementing IRQ Bridge Intel® FPGA IP. Covers configuration, integration, and performance optimization techniques for interrupt management.",
        "cat1": "Basic Functions",
        "cat2": "Bridges and Adaptors",
        "cat3": "Interrupt",
        "cat4": "IRQ Bridge Intel® FPGA IP"
    },
    {
        "id": "683332",
        "title": "Advanced IRQ Bridge Intel® FPGA IP",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (26.00 MB)",
        "content_type": "Design Examples",
        "description": "Detailed guide for advanced configurations of IRQ Bridge Intel® FPGA IP. Includes integration steps, performance tuning, and advanced features.",
        "cat1": "Basic Functions",
        "cat2": "Bridges and Adaptors",
        "cat3": "Interrupt",
        "cat4": "IRQ Bridge Intel® FPGA IP"
    },
    {
        "id": "683333",
        "title": "IRQ Bridge Intel® FPGA IP Configuration Guide",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (24.50 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring IRQ Bridge Intel® FPGA IP for various applications. Covers setup procedures, configuration details, and integration strategies.",
        "cat1": "Basic Functions",
        "cat2": "Bridges and Adaptors",
        "cat3": "Interrupt",
        "cat4": "IRQ Bridge Intel® FPGA IP"
    },
    {
        "id": "683334",
        "title": "IRQ Bridge Intel® FPGA IP Configuration Guide",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (24.50 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring IRQ Bridge Intel® FPGA IP for various applications. Covers setup procedures, configuration details, and integration strategies.",
        "cat1": "Basic Functions",
        "cat2": "Simulation, Debug and Verification",
        "cat3": "Debug and Performance",
        "cat4": "System ID Peripheral Intel® FPGA IP"
    },
    {
        "id": "683335",
        "title": "IRQ Bridge Intel® FPGA IP Configuration Guide",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (24.50 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring IRQ Bridge Intel® FPGA IP for various applications. Covers setup procedures, configuration details, and integration strategies.",
        "cat1": "Basic Functions",
        "cat2": "Simulation, Debug and Verification",
        "cat3": "Debug and Performance",
        "cat4": "Virtual JTAG Intel® FPGA IP"
    }
    ,
    {
        "id": "683336",
        "title": "IRQ Bridge Intel® FPGA IP Configuration Guide",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (24.50 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring IRQ Bridge Intel® FPGA IP for various applications. Covers setup procedures, configuration details, and integration strategies.",
        "cat1": "Basic Functions",
        "cat2": "Simulation, Debug and Verification",
        "cat3": "Debug and Performance",
        "cat4": "In-System Sources & Probes Intel® FPGA IP"
    },
    {
        "id": "683337",
        "title": "IRQ Bridge Intel® FPGA IP Configuration Guide",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (24.50 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring IRQ Bridge Intel® FPGA IP for various applications. Covers setup procedures, configuration details, and integration strategies.",
        "cat1": "Basic Functions",
        "cat2": "Simulation, Debug and Verification",
        "cat3": "Debug and Performance",
        "cat4": "Trace System Intel® FPGA IP"
    },
    {
        "id": "683338",
        "title": "IRQ Bridge Intel® FPGA IP Configuration Guide",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (24.50 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring IRQ Bridge Intel® FPGA IP for various applications. Covers setup procedures, configuration details, and integration strategies.",
        "cat1": "Basic Functions",
        "cat2": "Simulation, Debug and Verification",
        "cat3": "Debug and Performance",
        "cat4": "Performance Counter Unit Intel® FPGA IP"
    },
    {
        "id": "683339",
        "title": "IRQ Bridge Intel® FPGA IP Configuration Guide",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (24.50 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring IRQ Bridge Intel® FPGA IP for various applications. Covers setup procedures, configuration details, and integration strategies.",
        "cat1": "Basic Functions",
        "cat2": "Simulation, Debug and Verification",
        "cat3": "Debug and Performance",
        "cat4": "USB Debug Master Intel® FPGA IP"
    },
    {
        "id": "683340",
        "title": "IRQ Bridge Intel® FPGA IP Configuration Guide",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (24.50 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring IRQ Bridge Intel® FPGA IP for various applications. Covers setup procedures, configuration details, and integration strategies.",
        "cat1": "Basic Functions",
        "cat2": "Simulation, Debug and Verification",
        "cat3": "Debug and Performance",
        "cat4": "System ID Peripheral Intel® FPGA IP"
    },
    {
        "id": "683341",
        "title": "IRQ Bridge Intel® FPGA IP Configuration Guide",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (24.50 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring IRQ Bridge Intel® FPGA IP for various applications. Covers setup procedures, configuration details, and integration strategies.",
        "cat1": "Basic Functions",
        "cat2": "Simulation, Debug and Verification",
        "cat3": "Debug and Performance",
        "cat4": "Virtual JTAG Intel® FPGA IP"
    }
    ,
    {
        "id": "683342",
        "title": "IRQ Bridge Intel® FPGA IP Configuration Guide",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (24.50 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring IRQ Bridge Intel® FPGA IP for various applications. Covers setup procedures, configuration details, and integration strategies.",
        "cat1": "Basic Functions",
        "cat2": "Simulation, Debug and Verification",
        "cat3": "Debug and Performance",
        "cat4": "In-System Sources & Probes Intel® FPGA IP"
    },
    {
        "id": "683342",
        "title": "IRQ Bridge Intel® FPGA IP Configuration Guide",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (24.50 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring IRQ Bridge Intel® FPGA IP for various applications. Covers setup procedures, configuration details, and integration strategies.",
        "cat1": "Basic Functions",
        "cat2": "Simulation, Debug and Verification",
        "cat3": "Debug and Performance",
        "cat4": "Trace System Intel® FPGA IP"
    },
    {
        "id": "683343",
        "title": "IRQ Bridge Intel® FPGA IP Configuration Guide",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (24.50 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring IRQ Bridge Intel® FPGA IP for various applications. Covers setup procedures, configuration details, and integration strategies.",
        "cat1": "Basic Functions",
        "cat2": "Simulation, Debug and Verification",
        "cat3": "Debug and Performance",
        "cat4": "Performance Counter Unit Intel® FPGA IP"
    },
    {
        "id": "683344",
        "title": "IRQ Bridge Intel® FPGA IP Configuration Guide",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (24.50 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring IRQ Bridge Intel® FPGA IP for various applications. Covers setup procedures, configuration details, and integration strategies.",
        "cat1": "Basic Functions",
        "cat2": "Simulation, Debug and Verification",
        "cat3": "Debug and Performance",
        "cat4": "USB Debug Master Intel® FPGA IP"
    },
    {
        "id": "683345",
        "title": "IRQ Bridge Intel® FPGA IP Configuration Guide",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (24.50 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring IRQ Bridge Intel® FPGA IP for various applications. Covers setup procedures, configuration details, and integration strategies.",
        "cat1": "Basic Functions",
        "cat2": "Simulation, Debug and Verification",
        "cat3": "Debug and Performance",
        "cat4": "System IDPeripheral Intel® FPGA IP"
    },
    {
        "id": "683346",
        "title": "IRQ Bridge Intel® FPGA IP Configuration Guide",
        "date": "08/10/24",
        "version": "2.024",
        "file": "URL (24.50 MB)",
        "content_type": "Design Examples",
        "description": "Guide to configuring IRQ Bridge Intel® FPGA IP for various applications. Covers setup procedures, configuration details, and integration strategies.",
        "cat1": "Basic Functions",
        "cat2": "Simulation, Debug and Verification",
        "cat3": "Debug and Performance",
        "cat4": "System IDPeripheral Intel® FPGA IP"
    },
];
var cat ={
    "all":['Application Notes','Architecture Briefs','Datasheets','Design Examples','Development Reference','Development User Guides','How-To Training','Instructor-Led Training'],
    "Interface_Protocols":['Application Notes','Design Examples','Development Reference','Development User Guides','Register Maps','Release Notes'],
    // "Serial":['Design Examples'],
    // "JTAG_UART_Intel_FPGA_IP" : ['Design Examples'],
    // "SPI_(3 Wire Serial)_Intel_FPGA_IP":['Design Examples'] ,
    // "UART_(RS-232 Serial Port)_Intel_FPGA_IP":['Design Examples'],
    // "Transceiver_PHY":['Design Examples'],
    // "Transceiver_Native_PHY_Intel_Arria_10_Cyclone_10_FPGA_IP":['Design Examples'],  
    // "Transceiver_PHY_Reset_Controller_Intel_FPGA_IP":['Design Examples'],
    // "Stratix_10_20_Transceiver_PHY_Reset_Controller":['Design Examples'],
    // "Stratix_10_E_Tile_Transceiver_Native_PHY":['Design Examples'],
    // "Transceiver_PLL":['Design Examples'],
    // "fPLL_Intel_Arria_10_Cyclone_10_FPGA_IP":['Design Examples'],
    // "Transceiver_ATX_PLL_Intel_Arria_10_Cyclone_10_FPGA_IP":['Design Examples'],
    // "Transceiver_CMU_PLL_Intel_Arria_10_Cyclone_10_FPGA_IP":['Design Examples'],
    // "Ethernet":['Design Examples','Register Maps'],
    // "1G_Multi_rate_Ethernet":['Design Examples'],
    // "Triple_Speed_Ethernet_Intel_FPGA_IP":['Design Examples'],
    // "10G_to_1G_Multi_rate_Ethernet":['Design Examples'],
    // "1G 10GbE and 10GBASE-KR PHY Intel Arria 10 FPGA IP":['Design Examples'],
    // "Low Latency Ethernet 10G MAC Intel FPGA IP":['Design Examples'],
    // "1G 10GbE and 10GBASE-KR PHY Intel Arria 10 FPGA IP":['Design Examples'],
    // "XAUI PHY Intel FPGA IP":['Design Examples'],
    // "1G 2.5G 5G 10G Multi-rate Ethernet PHY Intel FPGA IP":['Design Examples'],
    // "Reference Design Components":['Design Examples'],
    // "Ethernet MDIO Intel FPGA IP":['Design Examples'],
    // "PCI Express":['Design Examples'],
    // "Intel Arria 10 Cyclone 10 Hard IP for PCI Express":['Design Examples'],
    // "Intel P-Tile Avalon-ST for PCI Express":['Design Examples'],
    // "V-Series Avalon-MM DMA for PCI Express":['Design Examples'],
    // "Avalon-MM Intel Stratix 10 Hard IP for PCI Express":['Design Examples'],
    // "JESD":['Design Examples'],
    // "JESD204B Intel FPGA IP":['Design Examples'],
    // "High-Speed":['Design Examples'],
    // "RapidIO":['Design Examples'],
    // "RapidIO II (IDLE2 up to 6.25 Gbaud) Intel FPGA IP":['Design Examples'],
    "Basic_Functions":['Application Notes','Design Examples','Development User Guides','Release Notes'],
    // "Clocks, PLLs and Resets":['Design Examples'],
    // "Reset Controller Intel FPGA IP":['Design Examples'],
    // "Avalon ALTPLL":['Design Examples'],
    // "IOPLL Intel FPGA IP":['Design Examples'],
    // "PLL":['Design Examples'],
    // "ALTCLKCTRL Intel FPGA IP":['Design Examples'],
    // "PLL Reconfig Intel FPGA IP":['Design Examples'],
    // "Reset Sequencer Intel FPGA IP":['Design Examples'],
    // "IOPLL Reconfig Intel FPGA IP":['Design Examples'],
    // "Clock Source":['Design Examples'],
    // "On-Chip Memory":['Design Examples'],
    // "Avalon-ST Single Clock FIFO Intel FPGA IP":['Design Examples'],
    // "On-Chip Memory (RAM or ROM) Intel FPGA IP":['Design Examples'],
    // "Avalon-ST Dual Clock FIFO":['Design Examples'],
    // "On-Chip Flash Intel FPGA IP":['Design Examples'],
    // "Avalon FIFO Memory Intel FPGA IP":['Design Examples'],
    // "Bridges and Adaptors":['Design Examples'],
    // "Streaming":['Design Examples'],
    // "Avalon-ST Adapter Intel FPGA IP":['Design Examples'],
    // "Avalon-ST Error Adapter Intel FPGA IP":['Design Examples'],
    // "Avalon-ST Timing Adapter Intel FPGA IP": ['Design Examples'],
    // "Avalon-ST Bytes to Packets Converter Intel FPGA IP":['Design Examples'],
    // "Avalon-ST Channel Adapter Intel FPGA IP":['Design Examples'],
    // 'Avalon-ST Packets to Bytes Converter Intel FPGA IP':['Design Examples'],
    // "Avalon-ST Pipeline Stage Intel FPGA IP":['Design Examples'],
    // "Avalon Packets to Transaction Converter Intel FPGA IP":['Design Examples'],
    // "Avalon-ST Multiplexer Intel FPGA IP":['Design Examples'],
    // "Avalon-ST Demultiplexer Intel FPGA IP":['Design Examples'],
    // "Avalon-ST Data Format Adapter Intel FPGA IP":['Design Examples'],
    // "Avalon-ST Splitter Intel FPGA IP":['Design Examples'],
    // "Memory Mapped":['Design Examples'],
    // "Avalon-MM Pipeline Bridge Intel FPGA IP":['Design Examples'],
    // "JTAG to Avalon Master Bridge Intel FPGA IP":['Design Examples'],
    // "Avalon-MM Clock Crossing Bridge Intel FPGA IP":['Design Examples'],
    // "SPI Slave to Avalon Master Bridge":['Design Examples'],
    // "AXI Bridge Intel FPGA IP":['Design Examples'],
    // "Address Span Extender Intel FPGA IP":['Design Examples'],
    // "Interrupt":['Design Examples'],
    // "IRQ Bridge Intel FPGA IP":['Design Examples'],
    // "Debug and Performance":['Design Examples'],
    // "System ID Peripheral Intel FPGA IP":['Design Examples'],
    // "Virtual JTAG Intel FPGA IP":['Design Examples'],
    // "In-System Sources & Probes Intel FPGA IP":['Design Examples'],
    // "Trace System Intel FPGA IP":['Design Examples'],
    // "Performance Counter Unit Intel FPGA IP":['Design Examples'],
    // "USB Debug Master Intel FPGA IP":['Design Examples'],
    "Simulation":['Design Examples','Development User Guides'],
    // "Development User Guides":['Design Examples'],
    // "Avalon-ST Monitor Intel FPGA IP":['Design Examples'],
    // "Avalon-MM Master BFM Intel FPGA IP":['Design Examples'],
    // "Avalon-MM Slave BFM Intel FPGA IP":['Design Examples'],
    // "Verification":['Design Examples'],
    // "Avalon Data Pattern Checker Intel FPGA IP":['Design Examples'],
    // "Avalon Data Pattern Generator Intel FPGA IP":['Design Examples'],
    // "Avalon-MM Traffic Generator and BIST Engine Intel FPGA IP":['Design Examples'],
    // "Configuration and Programming":['Design Examples'],
    // "Internal Oscillator Intel FPGA IP":['Design Examples'],
    // "ASMI Parallel Intel FPGA IP":['Design Examples'],
    // "Legacy EPCS EPCQx1 Flash Controller Intel FPGA IP":['Design Examples'],
    // "Remote Update Intel FPGA IP":['Design Examples'],
    // "Altera SDM Mbox Bridge":['Design Examples'],
    // "Generic Serial Flash Interface Intel FPGA IP":['Design Examples'],
    // "Serial Flash Controller Intel FPGA IP":['Design Examples'],
    // "Mailbox Client Intel Stratix 10 FPGA IP":['Design Examples'],
    // "Temperature Sensor Intel FPGA IP":['Design Examples'],
    // "Configuration Clock Intel Stratix 10 FPGA IP":['Design Examples'],
    // "Mailbox Client with Avalon Streaming Interface Intel FPGA IP":['Design Examples'],
    // "Reset Release Intel FPGA IP":['Design Examples'],
    // "I O":['Design Examples'],
    // "GPIO Intel FPGA IP":['Design Examples'],
    // "ALTDLL":['Design Examples'],
    // "ALTOCT":['Design Examples'],
    // "GPIO Lite Intel FPGA IP":['Design Examples'],
    // "LVDS SERDES Intel FPGA IP":['Design Examples'],
    // "Soft LVDS Intel FPGA IP":['Design Examples'],
    // "DMA":['Design Examples'],
    // "Scatter-Gather DMA Controller Intel FPGA IP":['Design Examples'],
    // "MSGDMA Sub Core":['Design Examples'],
    // "Read Master Intel FPGA IP":['Design Examples'],
    // "Write Master Intel FPGA IP":['Design Examples'],
    // "Modular SGDMA Dispatcher Intel FPGA IP":['Design Examples'],
    // "Modular SGDMA Prefetcher Intel FPGA IP":['Design Examples'],
    // "Modular Scatter-Gather DMA Intel FPGA IP":['Design Examples'],
    // "Arithmetic":['Design Examples'],
    // "LPM_COUNTER Intel FPGA IP":['Design Examples'],
    // "LPM_MULT Intel FPGA IP":['Design Examples'],
    "Processors_and_Peripherals":['Application Notes','Datasheets','Design Examples','Development User Guides','How-To Training','Instructor-Led Training','Learning Plans and Paths','On-Demand Training','Register Maps','Release Notes','White Papers'],
    "Embedded_Processors":['Application Notes','Datasheets','Design Examples','Development User Guides','How-To Training','Instructor-Led Training','Learning Plans and Paths','On-Demand Training','Release Notes','White Papers'],
    "Nios_II_Processor":['Application Notes','Datasheets','Design Examples','Development User Guides','How-To Training','Learning Plans and Paths','On-Demand Training','Release Notes'],
    "Nios_V_Processors":['Application Notes','Design Examples','Development User Guides','How-To Training','Instructor-Led Training','On-Demand Training','Release Notes','White Papers'],
    // "Nios V m Processor":['Design Examples'],
    "Nios_V_g_Processor_Intel_FPGA_IP":['Design Examples','On-Demand Training'],
    "Nios_II__Classic__Processor":['Application Notes','Release Notes'],
    // "Peripherals":['Design Examples'],
    // "PIO (Parallel I O) Intel FPGA IP":['Design Examples'],
    // "Interval Timer Intel FPGA IP":['Design Examples'],
    // "Modular ADC core Intel FPGA IP":['Design Examples'],
    // "Avalon LCD 16207 Intel FPGA IP":['Design Examples'],
    // "Vectored Interrupt Controller Intel FPGA IP":['Design Examples'],
    // "Pixel Converter (BGR0 --> BGR) Intel FPGA IP":['Design Examples'],
    // "I2C Slave To Avalon-MM Master Bridge Intel FPGA IP":['Design Examples'],
    // "Co-Processors":['Design Examples'],
    // "Custom Instruction Interconnect Intel FPGA IP":['Design Examples'],
    // "Custom Instruction Master Translator Intel FPGA IP":['Design Examples'],
    // "Custom Instruction Slave Translator Intel FPGA IP":['Design Examples'],
    // "Inter-Process Communication":['Design Examples'],
    // "Avalon Mutex Intel FPGA IP":['Design Examples'],
    // "Avalon Mailbox Intel FPGA IP":['Design Examples'],
    // "Intel FPGA Interconnect":['Design Examples'],
    // "Memory Mapped":['Design Examples'],
    // "Avalon-MM Slave Translator Intel FPGA IP":['Design Examples'],
    // "Avalon-MM Master Translator Intel FPGA IP":['Design Examples'],
    // "Memory-Mapped Multiplexer Intel FPGA IP":['Design Examples'],
    // "Avalon-MM Master Agent Intel FPGA IP":['Design Examples'],
    // "Avalon-MM Slave Agent Intel FPGA IP":['Design Examples'],
    // "Memory-Mapped Traffic Limiter Intel FPGA IP":['Design Examples'],
    // "Memory-Mapped Burst Adapter Intel FPGA IP":['Design Examples'],
    // "Memory-Mapped Width Adapter Intel FPGA IP":['Design Examples'],
    // "AXI Slave Agent Intel FPGA IP":['Design Examples'],
    // "Error Response Slave Intel FPGA IP":['Design Examples'],
    // "Memory Mapped Alpha":['Design Examples'],
    // "Memory Mapped Demultiplexer":['Design Examples'],
    // "Memory Mapped Router":['Design Examples'],
    // "IRQ Mapper Intel FPGA IP":['Design Examples'],
    // "IRQ Clock Crosser Intel FPGA IP":['Design Examples'],
    // "Tri-State Components":['Design Examples'],
    // "Generic Tri-State Controller Intel FPGA IP":['Design Examples'],
    // "Tri-State Conduit Bridge Intel FPGA IP":['Design Examples'],
    // "Tri-State Conduit Bridge Translator Intel FPGA IP":['Design Examples'],
    // "Tri-State Conduit Pin Sharer Intel FPGA IP":['Design Examples'],
    "DSP":['Application Notes','Design Examples','Development User Guides','How-To Training','On-Demand Training','Release Notes'],
    "Video_and_Image_Processing":['Design Examples','How-To Training'],
    // "Clocked Video Output II (4K Ready) Intel FPGA IP":['Design Examples'],
    // "Frame Buffer II (4K Ready) Intel FPGA IP":['Design Examples'],
    // "Clocked Video Input II (4K Ready) Intel FPGA IP":['Design Examples'],
    // "Mixer II (4K Ready) Intel FPGA IP":['Design Examples'],
    // "Scaler II (4K Ready) Intel FPGA IP":['Design Examples'],
    // "Clipper II (4K Ready) Intel FPGA IP":['Design Examples'],
    // "Color Space Converter II (4K Ready) Intel FPGA IP":['Design Examples'],
    // "Frame Reader":['Design Examples'],
    // "Avalon-ST Video Stream Cleaner Intel FPGA IP":['Design Examples'],
    // "Deinterlacer II (4K HDR passthrough) Intel FPGA IP":['Design Examples'],
    // "Avalon-ST Video Monitor Intel FPGA IP":['Design Examples'],
    // "CSC":['Design Examples'],
    // "Test Pattern Generator II (4K Ready) Intel FPGA IP":['Design Examples'],
    // "2D-FIR II (4K ready) Intel FPGA IP":['Design Examples'],
    // "Clocked Video Output Intel FPGA IP":['Design Examples'],
    // "3D LUT Intel FPGA IP":['Design Examples'],
    // "Switch":['Design Examples'],
    // "Switch II (4K Ready) Intel FPGA IP":['Design Examples'],
    // "Intel FPGA IP Video & Imaging Processing Suite IPS-VIDEO":['Design Examples'],
    "Video_and_Vision_Processing":['How-To Training'],
    "Tone_Mapping_Operator_(TMO)_Intel_FPGA_IP":['How-To Training'],
    "Warp_Intel_FPGA_IP":['How-To Training'],
    "Error_Detection_and_Correction":['How-To Training'],
    "Intel_FPGA_IP_Low_Density_Parity_Check__LDPC__IP_LDPC":['How-To Training'],
    "Memory_Interfaces_and_Controllers":['Design Examples','On-Demand Training','Release Notes'],
    // "Memory Interfaces with UniPHY":['Design Examples'],
    // "DDR3 SDRAM Controller with UniPHY Intel FPGA IP":['Design Examples'],
    // "LPDDR2 SDRAM Controller with UniPHY Intel FPGA IP":['Design Examples'],
    // "Memory Interfaces with ALTMEMPHY":['Design Examples'],
    // "DDR3 SDRAM Controller with ALTMEMPHY Intel FPGA IP":['Design Examples'],
    // "External Memory Interfaces Debug Component Intel FPGA IP":['Design Examples'],
    // "Flash":['Design Examples'],
    // "Generic QUAD SPI Controller Intel FPGA IP":['Design Examples'],
    // "External Memory Interfaces Intel Stratix 10 FPGA IP":['Design Examples'],
    // "Hard Processor Components":['Design Examples'],
    // "HPS External Trace":['Design Examples'],
    // "SDRAM":['Design Examples'],
    // "SDRAM Controller Intel FPGA IP":['Design Examples'],
    "External_Memory_Interfaces_Intel_Arria_10_FPGA_IP":['On-Demand Training'],
    "Hybrid_Memory_Cube_Controller_Intel_FPGA_IP":['On-Demand Training'],
    // "Hard Processor Systems":['Design Examples'],
    // "Hard Processor System Intel Agilex FPGA IP":['Design Examples'],
    // "University Program":['Design Examples'],
    // "Audio and Video":['Design Examples'],
    // "SDI II Intel FPGA IP":['Design Examples'],
    // "DisplayPort Intel FPGA IP":['Design Examples'],
    // "HDMI Intel FPGA IP":['Design Examples'],
    // "Audio Embed Intel FPGA IP":['Design Examples'],
    // "Audio Extract Intel FPGA IP":['Design Examples'],
    // "University Program":['Design Examples'],
    // "FIFO":['Design Examples'],
    // "JTAG Interface":['Design Examples'],
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
                                ${doc.isNew ? '<span class="new-tag">New</span>' : '<span class="new-tag">Update</span>'}
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
                                <select class="py-2 px-2 mx-2  border-secondary" aria-label="Version select">
                                    <option selected value="1">${doc.version}</option>
                                </select>
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

 function content_type(x){
    console.log("cat",x);
    const category = document.getElementById('b_category');
    category.innerHTML = x.map((ele,ind)=>{
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
    // var total = document.getElementById('b_total');
    // total.innerHTML = `${documents.length}`
    const container = document.getElementById('documentContainer');
    container.innerHTML = documents.map(createDocumentElement).join('');
    var total = document.getElementById('b_total');
    total.innerHTML = `${documents.length} Results`
    content_type(cat.all);
}
function data(x){
    const res = x.replace(/[®]/g, '');
    console.log("reeees",res);
    var data= documents.filter((ele,ind)=>{
        return ele.cat1==x || ele.cat2==x || ele.cat3==x || ele.cat4==x
    })
        var total = document.getElementById('b_total');
    total.innerHTML = `${data.length} Results`
    console.log(data);
    const container = document.getElementById('documentContainer');
    container.innerHTML = data.map(createDocumentElement).join('');
    con(x);
}
function con(x){
    console.log("x",x);
    const res = x.replace(/[-\s()®]/g, '_');
    console.log('res',res);
    if(cat.res == undefined){
        var data1=['Design Examples'];
    }
    else {
        var data1=cat.res;
    }
    content_type(data1);
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
    if(x==4)
    {   
        const sortedDocuments = documents.sort((a, b) => b.title.localeCompare(a.title));
        console.log(sortedDocuments);
        const container = document.getElementById('documentContainer');
        container.innerHTML = sortedDocuments.map(createDocumentElement).join('');
    }
    if(x==3){
        const sortedDocuments = documents.sort((a, b) => a.title.localeCompare(b.title));
        console.log(sortedDocuments);
        const container = document.getElementById('documentContainer');
        container.innerHTML = sortedDocuments.map(createDocumentElement).join('');
    }

}
renderDocuments();