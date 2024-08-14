const documents = [
    {
        id: "825857",
        title: "GTS Transceiver Dual-Simplex Interfaces User Guide",
        date: "08/19/24",
        version: "24.2",
        file : "URL (47.4KB)",
        content_type : "Brochures",
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
        content_type : "Development User Guides",
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
        content_type : "Product Briefs",
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
        content_type : "Product Catalog",
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
        content_type : "Product Catalog",
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
        cat1:"White Papers",
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
        cat1:"White Papers",
        cat2:"Serial",  
        cat3:"UART (RS-232 Serial Port) Intel FPGA IP"
    },
];
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
    const container = document.getElementById('documentContainer');
    container.innerHTML = documents.map(createDocumentElement).join('');
    var total = document.getElementById('b_total');
    total.innerHTML = `${documents.length} Results`;
    var subs = document.getElementsByClassName('hide');
    var subs1 = document.getElementsByClassName('hide_1');
    for (var i = 0; i < subs.length; i++) {
        subs[i].classList.remove('active');
    }
    
    for (var j = 0; j < subs1.length; j++) {
        subs1[j].style.display = "none";
    }
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