const documents = [
    {
        id: "825853",
        title: "GTS Transceiver Dual-Simplex Interfaces User Guide",
        date: "08/19/24",
        version: "24.2",
        isNew: true
    },
    {
        id: "768844",
        title: "Agilex™ 7 M-Series FPGA Network-on-Chip (NoC) User Guide",
        date: "08/05/24",
        version: "24.2",
        isNew: true
    }
];

function createDocumentElement(doc) {
    return `
        <div class="document-item">
            <div class="row">
                <div class="col-xxl-11">
                    <div class="row align-items-center">
                        <div class="col-xxl-8 col-12 ">
                            <div class="ms-3">
                                ${doc.isNew ? '<span class="new-tag">New</span>' : ''}
                                <p class="mt-2">
                                    <a href="#" class="document-title">${doc.title}</a>
                                </p>
                            </div>
                        </div>
                        <div class="col-xxl-1 col-12 ">
                            <p class="mb-0" style="font-size: 14px;">${doc.id}</p>
                        </div>
                        <div class="col-xxl-1 col-12 ">
                            <p class="mb-0" style="font-size: 14px;">${doc.date}</p>
                        </div>
                        <div class="col-2 ">
                            <select class="form-select" aria-label="Version select">
                                <option selected value="1">${doc.version}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-1 icon-group d-flex align-items-center">
                    <a href="#"><i class="fa-solid fa-download"></i></a>
                    <a href="#"><i class="fa-regular fa-bookmark"></i></a>
                    <a href="#"><i class="fa-solid fa-angle-down"></i></a>
                </div>
            </div>
        </div>
    `;
}

function renderDocuments() {
    const container = document.getElementById('documentContainer');
    container.innerHTML = documents.map(createDocumentElement).join('');
}

renderDocuments();