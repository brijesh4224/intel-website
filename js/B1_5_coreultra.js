const documents = [
    {
        id: "825857",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file: "URL (47.4KB)",
        content_type: "Infographics",
        discription: "The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Meteor Lake",
    },
    {
        id: "777142",
        title: "Intel® Core™ Ultra Processors PS Series for the Edge",
        date: "04/20/23",
        version: "23.1.0 Pro",
        file: "URL (3.54 MB)",
        content_type: "Product Briefs",
        discription: "This design example shows on-chip memory (OCM) access using the Nios V/m processor.",
        isNew: false,
        codename: "Meteor Lake",
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
                                <p class="mt-2">
                                    <a href="#" class="document-title">${doc.title}</a>
                                </p>
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

function content_type(x) {
    console.log("cat", x);
    const category = document.getElementById('b_category');
    category.innerHTML = x.map((ele, ind) => {
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
function content(x) {
    console.log(x);
    var val = documents.filter((ele, ind) => {
        return ele.content_type == x;
    })
    var total = document.getElementById('b_total');
    total.innerHTML = `${val.length} Results`
    console.log("val", val);
    const container = document.getElementById('documentContainer');
    container.innerHTML = val.map(createDocumentElement).join('');
}
function codename(x) {
    console.log(x);
    var val = documents.filter((ele, ind) => {
        return ele.codename == x;
    })
    var total = document.getElementById('b_total');
    total.innerHTML = `${val.length} Results`
    console.log("val", val);
    const container = document.getElementById('documentContainer');
    container.innerHTML = val.map(createDocumentElement).join('');
}
function sortByNameAscending(arr) {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
}
function clearall() {
    // Optional: Display an alert if needed
    // alert('Clearing all checkboxes');

    // Select all checkboxes with the class 'checkbox-item'
    const checkboxes = document.querySelectorAll('.checkbox-item');

    // Iterate over each checkbox and uncheck it
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    renderDocuments();
}
function sortByName(x) {
    var total = document.getElementById('b_total');
    total.innerHTML = `${documents.length} Results`
    console.log(x);
    if (x == 0) {
        var data = documents.sort(function (a, b) {
            var dateA = new Date(a.date);
            var dateB = new Date(b.date);
            return dateB - dateA;
        })
        const container = document.getElementById('documentContainer');
        container.innerHTML = data.map(createDocumentElement).join('');
    }
    if (x == 1) {

        var data = documents.sort(function (a, b) {
            var dateA = new Date(a.date);
            var dateB = new Date(b.date);
            return dateA - dateB;
        })
        const container = document.getElementById('documentContainer');
        container.innerHTML = data.map(createDocumentElement).join('');
    }
    if (x == 2) {
        const container = document.getElementById('documentContainer');
        container.innerHTML = documents.map(createDocumentElement).join('');
    }
    if (x == 3) {
        const sortedDocuments = documents.sort((a, b) => a.title.localeCompare(b.title));
        console.log(sortedDocuments);
        const container = document.getElementById('documentContainer');
        container.innerHTML = sortedDocuments.map(createDocumentElement).join('');
    }
    if (x == 4) {
        const sortedDocuments = documents.sort((a, b) => b.title.localeCompare(a.title));
        console.log(sortedDocuments);
        const container = document.getElementById('documentContainer');
        container.innerHTML = sortedDocuments.map(createDocumentElement).join('');
    }
}
function sortJsonByDate(data) {
    return data.sort(function (a, b) {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return dateB - dateA; // Newest first
    });
}
renderDocuments();

var gen = ['4th Generation Intel® Core™ i7 Processors', '4th Generation Intel® Core™ i5 Processors', '4th Generation Intel® Core™ i3 Processors', 'Legacy Intel® Core™ Processors', '5th Generation Intel® Core™ i7 Processors', '5th Generation Intel® Core™ i5 Processors', '5th Generation Intel® Core™ i3 Processors', '6th Generation Intel® Core™ i7 Processors', '6th Generation Intel® Core™ i5 Processors', '6th Generation Intel® Core™ i3 Processors'];
var available = ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (22H2)', 'Windows 10* (22H2)'];
var b_data = [
    { id: "1212", name: 'Intel® Arc™ & Iris® Xe Graphics - Windows*', date: '10/29/2024', os: ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (21H2)', 'Windows 10* (22H2)', 'Windows 11* (21H2)'], download: true, des: 'This download installs Intel® Graphics Driver 32.0.101.6130/32.0.101.6048 for Intel® Arc™ A-Series Graphics, Intel® Iris® Xe Graphics, and Intel® Core™ Ultra Processors with Intel® Arc™ Graphics', version: '32.0.101.6130_101.6048', type: 'driver' },
    { id: "1232", name: 'Intel® NPU Driver - Windows*', date: '10/29/2024', os: ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (21H2)', 'Windows 10* (22H2)', 'Windows 11* (21H2)'], download: false, des: 'This download installs Intel® Graphics Driver 32.0.101.6130/32.0.101.6048 for Intel® Arc™ A-Series Graphics, Intel® Iris® Xe Graphics, and Intel® Core™ Ultra Processors with Intel® Arc™ Graphics', version: '32.0.101.6130_101.6048', type: 'driver' },
    { id: "1213", name: 'Intel® Arc™ Pro Graphics - Windows*', date: '10/29/2024', os: ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (21H2)', 'Windows 10* (22H2)', 'Windows 11* (21H2)'], download: true, des: 'This download installs Intel® Graphics Driver 32.0.101.6130/32.0.101.6048 for Intel® Arc™ A-Series Graphics, Intel® Iris® Xe Graphics, and Intel® Core™ Ultra Processors with Intel® Arc™ Graphics', version: '32.0.101.6130_101.6048', type: 'driver' },
    { id: "1262", name: 'Intel® Processor Identification Utility - Windows* Version', date: '10/29/2024', os: ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (21H2)', 'Windows 10* (22H2)', 'Windows 11* (21H2)'], download: true, des: 'This download installs Intel® Graphics Driver 32.0.101.6130/32.0.101.6048 for Intel® Arc™ A-Series Graphics, Intel® Iris® Xe Graphics, and Intel® Core™ Ultra Processors with Intel® Arc™ Graphics', version: '32.0.101.6130_101.6048', type: 'driver' },
    { id: "1242", name: 'Intel® Processor Diagnostic Tool', date: '10/29/2024', os: ['Windows 11* (23H2)', 'Windows 11* (24H2)', 'Windows 11* (21H2)', 'Windows 10* (22H2)', 'Windows 11* (21H2)'], download: false, des: 'This download installs Intel® Graphics Driver 32.0.101.6130/32.0.101.6048 for Intel® Arc™ A-Series Graphics, Intel® Iris® Xe Graphics, and Intel® Core™ Ultra Processors with Intel® Arc™ Graphics', version: '32.0.101.6130_101.6048', type: 'driver' },
]
function loadata() {
    var data = document.getElementById('b_result');
    data.innerHTML = b_data.length == 0 ? `<h4 class="text-center">No results found for this product.<h4>` : b_data.length;
    var b_gen = document.getElementById('b_gen');
    b_gen.innerHTML = ` <select class="p-2 my-3 w-100"> <option>All generation </option> ${gen.map(el => `<option value="${el}">${el}</option>`).join('')} </select>`;
    var b_available = document.getElementById('b_available');
    b_available.innerHTML = ` <select class="p-2  w-100"> <option>All </option> ${available.map(el => `<option value="${el}">${el}</option>`).join('')} </select>`;
    var b_gen1 = document.getElementById('b_gen_data');
    b_gen1.innerHTML = ' ';
    b_data.forEach(element => {
        var innerdata = `<div class="document-item">
            <div class="row gx-0 accordion accordion-flush" id="accordionFlushExample">
                <div class="col-xxl-12 p-0 accordion-item border-0">
                    <div class="row align-items-center accordion-header gx-0" id="flush-heading-${element.id}">
                        <div class="col-md-9 col-lg-6 col-12">
                            <div class="ms-3 d-flex">
                                <a href="#" class="accordion-button collapsed p-0 document-title d-none d-sm-flex" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-${element.id}" aria-expanded="false" aria-controls="flush-collapse-${element.id}"></a>
                                <p class="mt-2 ms-sm-5 text-center w-75">
                                    <a href="#" class="document-title">${element.name}</a>
                                </p>
                                <a href="#" class="accordion-button collapsed p-0 document-title d-flex d-sm-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-${element.id}" aria-expanded="false" aria-controls="flush-collapse-${element.id}"></a>
                            </div>
                        </div>
                        <div class="col-lg-2 col-12  ms-xl-0 d-flex d-none d-lg-block">
                            <p class="mb-0" style="font-size: 14px;">${element.date}</p>
                        </div>
                        <div class="col-lg-2 col-12  ms-xl-0 d-none d-lg-block">
                            <h6 class="d-block d-xl-none">Date : </h6>
                            ${element.os.slice(0, 3).map((el, id) => {
            return `<p class="mb-0" style="font-size: 14px;">${el}</p>`;
        }).join('')}
                        </div>
                        <div class="col-xl-1 col-md-2 ms-3 ms-lg-0 ">
                            ${element.download ? '<div class="b_special_btn1 w-100"><p class="mb-0">download</p><div>' : '<div class="b_special_btn2 w-100"><p class="mb-0">View Details</p><div>'}
                        </div>
                    </div>
                </div>
                <div id="flush-collapse-${element.id}" class="accordion-collapse collapse" aria-labelledby="flush-heading-${element.id}" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body py-3 px-0">
                        <div class="ms-3 col-xl-8"><p>${element.des}<a href="#" class="b_special_a3">View download options.</a></p></div>
                        <div class="d-flex ms-3"><h6>Version:</h6><small>${element.version}</small></div>
                        <div class="col-lg-2 col-12 ms-3 d-flex d-block d-lg-none">
                            <h6 class="">Date : </h6>
                            <p class="mb-0" style="font-size: 14px;">${element.date}</p>
                        </div>
                        <div class="d-flex ms-sm-3 "><h6>OS:</h6><small class="d-flex flex-wrap">
                         ${element.os.map((el, id) => {
            return `<p class="mb-0   m-2 px-2 b_text_bold" style="font-size: 14px;background:#e3e3e3">${el}</p>`;
        }).join('')}</small></div>
                        <div class="d-flex ms-3"><h6>Type:</h6><small>${element.type}</small></div>
                    </div>
                </div>
            </div>
        </div>`;
        b_gen1.innerHTML += innerdata;
    });
}
window.onload = function () {
    loadata();
}