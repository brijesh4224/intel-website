const cardsData = [
    {
        imgSrc: "/img/brijesh/image180.jpg",
        title: "Drift Reduces EKS Costs by 15% with Intel Granulate Capacity Optimization",
        description: "At Drift, the process of enhancing and optimizing their EKS infrastructure was heavily reliant on manual efforts and hands-on management. Upon employing Intel® Tiber™ App-Level Optimization’s Capacity Optimization solutions, one primary production cluster comprising 4,000 cores was autonomously optimized with an immediate 15% cost reduction, with full potential to save up to 48%..",
        link: "#"
    },
    {
        imgSrc: "/img/brijesh/image181.jpg",
        title: "Snap Inc Achieves 13% Average Cost Reduction on EKS Workloads With Intel® Tiber™ App-Level Optimization",
        description: "The Snap software engineering team deployed Intel® Tiber™ App-Level Optimization with no required service code changes on a small number of clusters to prove its value before expanding. Soon it was deployed on 350,000 vCores, providing an average of 13% cost reduction across 32 clusters, with more deployments in the pipeline.",
        link: "#"
    },
    {
        imgSrc: "/img/brijesh/image182.jpg",
        title: "Mobileye Reduced 30,000 kg of CO2 Annually By Optimizing AWS With Intel® Tiber™ App-Level Optimization",
        description: "Intel® Tiber™ App-Level Optimization agents were deployed on a Mobileye Elastic Compute Cloud (EC2) workload as container side-cars and began learning the workload, data flow, and resource usage patterns within minutes. In days, Mobileye saw an immediate reduction in CO2 emissions by shortening their job completion time per mapping job by 45%.",
        link: "#"
    },
    {
        imgSrc: "/img/brijesh/image183.png",
        title: "Dream11 Improves Kafka Workload Performance and Reduces AWS Costs by 40%",
        description: "By implementing Intel® Tiber™ App-Level Optimization on a few Kafka consumer instances, Dream11 dramatically improved the service’s overall performance. It leveraged a reduced CPU utilization of 50% and increased throughput of 40% to cut total infrastructure spend by nearly half, giving Dream11 a demonstration of what App-Level Optimization could do system-wide.",
        link: "#"
    },
    {
        imgSrc: "/img/brijesh/image184.png",
        title: "Insight Reduces Databricks Costs by 28% with Intel® Tiber™ App-Level Optimization",
        description: "Intel® Tiber™ App-Level Optimization’s Databricks optimizations allowed Insight to reduce the average number of Databricks cores per hour required for its workloads by 21%. The more efficient cloud distribution led to a 28% reduction in costs from cloud use and downstream costs like storage, networking, and adjacent 3rd party SaaS applications.",
        link: "#"
    },
    {
        imgSrc: "/img/brijesh/image185.jpg",
        title: "Nylas Reports 35% Cost Reduction and 58% Lower Response Time",
        description: "Nylas chose Intel® Tiber™ App-Level Optimization's autonomous, continuous optimization solution to optimize GCP workload performance and costs. Within 5 days and without any code changes or R&D efforts, Nylas achieved over 35% cost reduction, 58% faster processing time, and 35% more throughput.",
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
