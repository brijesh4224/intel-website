const cardsData = [
    {
        imgSrc: "/img/brijesh/image149.avif",
        title: "Seamless Attestation of Intel® TDX and NVIDIA H100 TEEs with Intel® Tiber™ Trust Services",
        description: "Together, Intel and NVIDIA are providing a unified attestation solution for customers to verify the trustworthiness of the CPU and GPU TEEs for confidential computing based on Intel Xeon processors with Intel Trust Domain Extensions (Intel TDX) and NVIDIA Tensor Core H100 GPUs.",
        link: "#"
    },
    {
        imgSrc: "/img/brijesh/image150.jpg",
        title: "Thales and Intel Collaborate to Enhance Trust in Confidential Computing",
        description: "Using the new trusted attestation service from Intel, Thales’ CipherTrust Data Security Platform can ensure sensitive workloads are never decrypted outside of an Intel® TEE, Intel® TDX or Intel® SGX.",
        link: "#"
    },
    {
        imgSrc: "/img/brijesh/image151.jpg",
        title: "With Intel® Tiber™ Trust Services, Accenture Reaps the Benefits of Collaboration Without Sharing Data",
        description: "When Accenture introduced Intel® Tiber™ Trust Services for the independent attestation of its sensitive workloads, it opened the door to confidential computing and the ability to collaborate with confidence across a multi-cloud environment.",
        link: "#"
    },
    {
        imgSrc: "/img/brijesh/image152.jpg",
        title: "Zscaler Deploys Confidential Computing with Intel® Tiber™ Trust Services to Scale Zero Trust Across the Cloud",
        description: "Zscaler partners with Intel to scale zero trust across multiple clouds by isolating its Zero Trust Exchange and App Connectors in silicon-based Intel® Trust Domain Extensions confidential computing environments and using Intel® Tiber™ Trust Services to verify their authenticity and integrity.",
        link: "#"
    },
    {
        imgSrc: "/img/brijesh/image153.jpg",
        title: "Swiss Re Explores Heightened Data Protection with Intel Confidential Computing",
        description: "As a data-driven risk knowledge company with a major focus on machine learning, Swiss Re turns to Intel and confidential computing to securely access and analyze data, and to unlock new forms of risk protection and value creation.",
        link: "#"
    },
    {
        imgSrc: "/img/brijesh/image154.png",
        title: "Leidos Advances Innovation in Healthcare Initiatives with Intel® Tiber™ Trust Services  ",
        description: "Healthcare today relies on medical professionals having cross-platform access to real-time data. Intel® Tiber™ Trust Services frees Leidos from the need to build and maintain a complex and expensive attestation system, so it can focus on innovation in areas like intelligent automation and AI/ML-driven analytics.",
        link: "#"
    }
];

const cardContainer = document.querySelector('.row.b_section_heigh');

const cardHTML = cardsData.map((card, index) => `
<div class="col-md-4 col-12 card b_card b_soft_card" style="${index < 3 ? 'display: block;' : 'display: none;'}">
    <img src="${card.imgSrc}" class="card-img-top" alt="...">
    <div class="card-body ps-0">
        <h4 class="b_atxt">
            <a href="${card.link}">${card.title}</a>
        </h4>
        <p class="card-text b_text_justify">${card.description}</p>
    </div>
</div>
`).join('');

cardContainer.innerHTML = cardHTML;

document.getElementById('show-more-button').addEventListener('click', function (event) {
    event.preventDefault();

    const hiddenCards = document.querySelectorAll('.b_card[style="display: none;"]');
    const allCards = document.querySelectorAll('.b_card');

    // Toggle visibility
    if (hiddenCards.length > 0) {
        hiddenCards.forEach(card => {
            card.style.display = 'block';
        });
        this.innerText = 'Show less';
    } else {
        allCards.forEach((card, index) => {
            if (index >= 3) {
                card.style.display = 'none';
            }
        });
        this.innerText = 'Show more';
    }
});
//  for include file ........................................................................







document.addEventListener('DOMContentLoaded', function() {
    // Function to include HTML content
    function includeHTML() {
        const includeElements = document.querySelectorAll('.include');
        includeElements.forEach(el => {
            const file = el.getAttribute('data-include');
            if (file) {
                fetch(file)
                    .then(response => {
                        if (response.ok) {
                            return response.text();
                        }
                        throw new Error('Failed to load component');
                    })
                    .then(data => {
                        el.innerHTML = data;
                    })
                    .catch(error => {
                        console.error('Error including HTML:', error);
                    });
            }
        });
    }

    // Call the function to include HTML content
    includeHTML();
});
