const documents = [
    {
        id: 1, // Added unique id for each document
        title: "Unlocking the AI Power of Intel® Arc™ GPU for the Edge: A Deep Dive into Hardware and Software Enablement",
        file: "pdf (796 KB)",
        content_type: "White Papers",
        description: "Unlocking the AI Power of Intel® Arc™ GPU for the Edge: A Deep Dive into Hardware and Software Enablement",
    },
    {
        id: 2,
        title: "Intel® Arc™ Graphics for the Edge Partner GPUS",
        file: "URL",
        content_type: "Product Briefs",
        description: "List of products from our providers with Intel® Arc™ Graphics for the edge.",
    },
    {
        id: 3,
        title: "OpenVINO Get Started Guide",
        file: "pdf (3.04 MB)",
        content_type: "Marketing Tools",
        description: "OpenVINO is an open-source AI toolkit for optimizing and deploying deep learning models. Learn more and quickly get started with this guide.",
    },
    {
        id: 4,
        title: "Intel® Arc™ GPU for the Edge Infographic",
        file: "pdf (1.99 MB)",
        content_type: "Infographics",
        description: "Visual overview of Intel Arc GPU key features for edge use-cases and primary target use-cases",
    }
];

const cat = {
    "all": ['Application Notes','Architecture Briefs','Datasheets','Design Examples','Development Reference','Development User Guides','How-To Training','Instructor-Led Training','Learning Plans and Paths','On-Demand Training','Product Briefs','Register Maps','Release Notes','White Papers'],
    // ... rest of the categories remain the same
};

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
                    <a href="#"><i class="fa-solid fa-download document-title"></i></a>
                    <a href="#" class="document-title"><i class="fa-regular fa-bookmark document-title"></i></a>
                    <a href="#" class="accordion-button collapsed p-0 document-title" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-${doc.id}" aria-expanded="false" aria-controls="flush-collapse-${doc.id}"></a>
                </div>
                <div id="flush-collapse-${doc.id}" class="accordion-collapse collapse" aria-labelledby="flush-heading-${doc.id}" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body py-3 px-0">
                        <div class="d-xl-flex d-block">
                            <div class="d-flex ms-3"><h6>File:</h6><small>${doc.file}</small></div>
                            <div class="d-flex ms-3"><h6>Content Type:</h6><small>${doc.content_type}</small></div>
                        </div>
                        <div class="ms-3 col-xl-8"><p>${doc.description}</p></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function content_type(value) {
    const category = document.getElementById('b_category');
    category.innerHTML = value.map((ele, ind) => `
        <li>
            <span>
                <input class="form-check-input" type="checkbox" value="${ele}" 
                       id="flexCheckDefault-${ind}" 
                       onchange="content('${ele}')">
            </span>
            <span class="ms-2" key="${ind}">${ele}</span>
        </li>
    `).join('');
}

function renderDocuments() {
    const container = document.getElementById('documentContainer');
    container.innerHTML = documents.map(createDocumentElement).join('');
    
    const total = document.getElementById('b_total');
    total.innerHTML = `${documents.length} Results`;
}

function data(x) {
    const value = documents.filter(ele => 
        ele.cat1 === x || ele.cat2 === x || ele.cat3 === x || ele.cat4 === x
    );
    
    const container = document.getElementById('documentContainer');
    container.innerHTML = value.map(createDocumentElement).join('');
    
    const total = document.getElementById('b_total');
    total.innerHTML = `${value.length} Results`;
    
    const val1 = x.replace(/[\s$,®-]+/g, '_');
    const keys = Object.keys(cat);
    const val2 = keys.filter(key => key === val1);
    
    const con = val2.length > 0 ? cat[val2[0]] : ['Design type'];
    content_type(con);
}

function content(x) {
    const val = documents.filter(ele => ele.content_type === x);
    
    const total = document.getElementById('b_total');
    total.innerHTML = `${val.length} Results`;
    
    const container = document.getElementById('documentContainer');
    container.innerHTML = val.map(createDocumentElement).join('');
}

function sortByName(x) {
    const total = document.getElementById('b_total');
    total.innerHTML = `${documents.length} Results`;
    
    const container = document.getElementById('documentContainer');
    
    switch(x) {
        case 0: // Sort by newest date
            container.innerHTML = documents
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map(createDocumentElement)
                .join('');
            break;
        case 1: // Sort by oldest date
            container.innerHTML = documents
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .map(createDocumentElement)
                .join('');
            break;
        case 2: // Default order
            container.innerHTML = documents
                .map(createDocumentElement)
                .join('');
            break;
        case 3: // Sort A-Z by title
            container.innerHTML = documents
                .sort((a, b) => a.title.localeCompare(b.title))
                .map(createDocumentElement)
                .join('');
            break;
        case 4: // Sort Z-A by title
            container.innerHTML = documents
                .sort((a, b) => b.title.localeCompare(a.title))
                .map(createDocumentElement)
                .join('');
            break;
    }
}


renderDocuments();