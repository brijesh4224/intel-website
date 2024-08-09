const documents = [
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
        id: "768844",
        title: "Agilex™ 7 M-Series FPGA Network-on-Chip (NoC) User Guide",
        date: "08/05/24",
        version: "24.2",
        file : " xlsx (53.0 KB)",
        content_type : "Application Notes",
        discription:"This table lists the registers available in the O-RAN Intel FPGA IP. All unlisted locations are reserved.",
        isNew: false,
    }
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
    total.innerHTML = `${documents.length}`
    content_type(cat.all);
}
function data(x){
    const res = x.replace(/[®]/g, '');
    console.log("reeees",res);
    var data= documents.filter((ele,ind)=>{
        return ele.cat1==x || ele.cat2==x || ele.cat3==x
    })
        var total = document.getElementById('b_total');
    total.innerHTML = `${data.length}`
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
    total.innerHTML = `${val.length}`
    console.log("val",val);
    const container = document.getElementById('documentContainer');
    container.innerHTML = val.map(createDocumentElement).join('');
}
function sortByNameAscending(arr) {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
}
function sortByName(x) {
            var total = document.getElementById('b_total');
    total.innerHTML = `${documents.length}`
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