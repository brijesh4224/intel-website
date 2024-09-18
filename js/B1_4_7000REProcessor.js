const documents = [
    {
        id: "825857",
        title: "Intel® Core™ Ultra Processors PS Series Infographic",
        date: "08/19/24",
        version: "24.2",
        file : "URL (47.4KB)",
        content_type : "Infographics",
        discription:"The GTS Transceiver Dual-Simplex Interfaces User Guide describes the method to implement the dual-simplex mode in Agilex™ 5 GTS transceivers.",
        isNew: true,
        codename: "Raptor Lake",
    },
    {
        id: "777142",
        title: "Intel® Core™ Ultra Processors PS Series for the Edge",
        date: "04/20/23",
        version: "23.1.0 Pro",
        file : "URL (3.54 MB)",
        content_type : "Product Briefs",
        discription:"This design example shows on-chip memory (OCM) access using the Nios V/m processor.",
        isNew: false,
        codename: "Raptor Lake",
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
                    <div class="accordion-body py-3 px-0 w-100">
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
function codename(x){
    console.log(x);
    var val= documents.filter((ele,ind)=>{
        return ele.codename == x;
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