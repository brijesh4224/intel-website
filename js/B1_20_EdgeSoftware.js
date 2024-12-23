const documents = [
    {
        id: "749865",
        img: '/img/brijesh/image521.png',
        title: "Social Distancing for Retail Settings",
        link: '#',
        date: "09/26/24",
        content_type: "Infographics",  
        system: 'Linux',
        sub_system: 'Ubuntu Family',
        discription: "Use video analytics solutions based on Intel® Distribution of OpenVINO™ toolkit models to support retail settings for pandemic scenarios.",
        category: 'Manufacturing',
        sub_category: 'IndustrialAutomation',
    },
    {
        id: "659212",
        img: '/img/brijesh/image522.svg',
        title: "Connect Edge Devices to Microsoft Azure* IoT",
        link: '#',
        date: "08/09/22",
        content_type: "Infographics",
        system: 'Linux',
        sub_system: 'Ubuntu Family',
        discription: "Helps securely connect devices to Azure IoT*. You are responsible for payment of all third-party charges, including payment for use of Microsoft Azure*",
        category: 'Manufacturing',
        sub_category: 'IndustrialAutomation',
    },
    {
        id: "736328",
        img: '/img/brijesh/image523.png',
        title: "Reference Architecture for Edge Connectivity",
        link: '#',
        date: "06/29/22",
        content_type: "Infographics",
        system: 'Linux',
        sub_system: 'Ubuntu Family',
        discription: "Create an edge solution for retail use cases with EdgeX*, Portainer*, the Intel® Distribution of OpenVINO™ toolkit, Celadon in Virtual Machine and DPDK*.",
        category: 'Manufacturing',
        sub_category: 'Automotive',
    },
    {
        id: "736459",
        img: '/img/brijesh/image524.png',
        title: "Wireless Network-Ready Intelligent Traffic Management",
        link: '#',
        date: "06/28/22",
        content_type: "Infographics",
        system: 'Linux',
        sub_system: 'CentOS Linux Family',
        discription: "Consolidate visual intelligence and wireless workloads at traffic intersections.",
        category: 'Manufacturing',
        sub_category: 'Transportation Equipment',
    },
    {
        id: "734302",
        img: '/img/brijesh/image525.png',
        title: "Use TDengine* Database with Intel® Edge Insights for Industrial",
        link: '#',
        date: "05/05/22",
        content_type: "Infographics",
        system: 'Linux',
        sub_system: 'CentOS Linux Family',
        discription: "Run time-series data collection, storage, and visualization pipeline with Intel® Edge Insights for Industrial, Telegraf*, TDengine*, and Grafana*.",
        category: 'Manufacturing',
        sub_category: 'Transportation Equipment',
    },
    {
        id: "658731",
        img: '/img/brijesh/image526.png',
        title: "Smart VR – Live Streaming of Immersive Media",
        link: '#',
        date: "03/21/22",
        content_type: "Infographics",
        system: 'Microsoft Windows',
        sub_system: '',
        discription: "Develop a video streaming service based on WebRTC, while enabling media analytics capabilities for end-to-end live media streaming using Intel®",
        category: 'Retail',
        sub_category: '',
    },
    {
        id: "723458",
        img: '/img/brijesh/image527.png',
        title: "Open AMT Cloud Toolkit",
        link: '#',
        date: "03/17/22",
        content_type: "Infographics",
        system: 'Microsoft Windows',
        sub_system: '',
        discription: "Integrate microservices and APIs for remote management of Intel vPro® platforms featuring Intel® Active Management Technology (Intel® AMT).",
        category: 'Retail',
        sub_category: '',
    },
    {
        id: "724408",
        img: '/img/brijesh/image528.png',
        title: "Intel® Optimized Data Discretization",
        link: '#',
        date: "03/11/22",
        content_type: "Infographics",
        system: 'Microsoft Windows',
        sub_system: '',
        discription: "Automate data pre-processing to facilitate large scale deployment of analytic applications.",
        category: 'Transportation, Travel and Warehousing',
        sub_category: '',
    },
    {
        id: "690644",
        img: '/img/brijesh/image529.png',
        title: "Video Curation Sample",
        link: '#',
        date: "01/13/22",
        content_type: "Infographics",
        system: 'Microsoft Windows',
        sub_system: '',
        discription: "Powered by Open Visual Cloud. Implements a reference pipeline using libraries for content analysis of video files.",
        category: 'Transportation, Travel and Warehousing',
        sub_category: '',
    },
    {
        id: "749865",
        img: '/img/brijesh/image521.png',
        title: "Social Distancing for Retail Settings",
        link: '#',
        date: "09/26/24",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Use video analytics solutions based on Intel® Distribution of OpenVINO™ toolkit models to support retail settings for pandemic scenarios.",
        category: 'Health and Life Sciences',
        sub_category: '',
    },
    {
        id: "659212",
        img: '/img/brijesh/image522.svg',
        title: "Connect Edge Devices to Microsoft Azure* IoT",
        link: '#',
        date: "08/09/22",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Helps securely connect devices to Azure IoT*. You are responsible for payment of all third-party charges, including payment for use of Microsoft Azure*",
        category: 'Education',
        sub_category: '',
    },
    {
        id: "736328",
        img: '/img/brijesh/image523.png',
        title: "Reference Architecture for Edge Connectivity",
        link: '#',
        date: "06/29/22",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Create an edge solution for retail use cases with EdgeX*, Portainer*, the Intel® Distribution of OpenVINO™ toolkit, Celadon in Virtual Machine and DPDK*.",
        category: 'Education',
        sub_category: '',
    },
    {
        id: "736459",
        img: '/img/brijesh/image524.png',
        title: "Wireless Network-Ready Intelligent Traffic Management",
        link: '#',
        date: "06/28/22",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Consolidate visual intelligence and wireless workloads at traffic intersections.",
        category: 'Education',
        sub_category: '',
    },
    {
        id: "734302",
        img: '/img/brijesh/image525.png',
        title: "Use TDengine* Database with Intel® Edge Insights for Industrial",
        link: '#',
        date: "05/05/22",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Run time-series data collection, storage, and visualization pipeline with Intel® Edge Insights for Industrial, Telegraf*, TDengine*, and Grafana*.",
        category: 'Automotive',
        sub_category: '',
    },
    {
        id: "658731",
        img: '/img/brijesh/image526.png',
        title: "Smart VR – Live Streaming of Immersive Media",
        link: '#',
        date: "03/21/22",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Develop a video streaming service based on WebRTC, while enabling media analytics capabilities for end-to-end live media streaming using Intel®",
        category: 'Media',
        sub_category: '',
    },
    {
        id: "723458",
        img: '/img/brijesh/image527.png',
        title: "Open AMT Cloud Toolkit",
        link: '#',
        date: "03/17/22",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Integrate microservices and APIs for remote management of Intel vPro® platforms featuring Intel® Active Management Technology (Intel® AMT).",
        category: 'Media',
        sub_category: '',
    },
    {
        id: "724408",
        img: '/img/brijesh/image528.png',
        title: "Intel® Optimized Data Discretization",
        link: '#',
        date: "03/11/22",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Automate data pre-processing to facilitate large scale deployment of analytic applications.",
        category: 'Software and Services',
        sub_category: '',
    },
    {
        id: "690644",
        img: '/img/brijesh/image529.png',
        title: "Video Curation Sample",
        link: '#',
        date: "01/13/22",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Powered by Open Visual Cloud. Implements a reference pipeline using libraries for content analysis of video files.",
        category: 'Software and Services',
        sub_category: 'Internet Software and Services',
    },
    {
        id: "749865",
        img: '/img/brijesh/image521.png',
        title: "Social Distancing for Retail Settings",
        link: '#',
        date: "09/26/24",
        content_type: "Infographics",
        system: 'Linux',
        sub_system: 'Ubuntu Family',
        discription: "Use video analytics solutions based on Intel® Distribution of OpenVINO™ toolkit models to support retail settings for pandemic scenarios.",
        category: 'Manufacturing',
        sub_category: 'IndustrialAutomation',
    },
    {
        id: "659212",
        img: '/img/brijesh/image522.svg',
        title: "Connect Edge Devices to Microsoft Azure* IoT",
        link: '#',
        date: "08/09/22",
        content_type: "Infographics",
        system: 'Linux',
        sub_system: 'Ubuntu Family',
        discription: "Helps securely connect devices to Azure IoT*. You are responsible for payment of all third-party charges, including payment for use of Microsoft Azure*",
        category: 'Manufacturing',
        sub_category: 'IndustrialAutomation',
    },
    {
        id: "736328",
        img: '/img/brijesh/image523.png',
        title: "Reference Architecture for Edge Connectivity",
        link: '#',
        date: "06/29/22",
        content_type: "Infographics",
        system: 'Linux',
        sub_system: 'Ubuntu Family',
        discription: "Create an edge solution for retail use cases with EdgeX*, Portainer*, the Intel® Distribution of OpenVINO™ toolkit, Celadon in Virtual Machine and DPDK*.",
        category: 'Manufacturing',
        sub_category: 'Automotive',
    },
    {
        id: "736459",
        img: '/img/brijesh/image524.png',
        title: "Wireless Network-Ready Intelligent Traffic Management",
        link: '#',
        date: "06/28/22",
        content_type: "Infographics",
        system: 'Linux',
        sub_system: 'CentOS Linux Family',
        discription: "Consolidate visual intelligence and wireless workloads at traffic intersections.",
        category: 'Manufacturing',
        sub_category: 'Transportation Equipment',
    },
    {
        id: "734302",
        img: '/img/brijesh/image525.png',
        title: "Use TDengine* Database with Intel® Edge Insights for Industrial",
        link: '#',
        date: "05/05/22",
        content_type: "Infographics",
        system: 'Linux',
        sub_system: 'CentOS Linux Family',
        discription: "Run time-series data collection, storage, and visualization pipeline with Intel® Edge Insights for Industrial, Telegraf*, TDengine*, and Grafana*.",
        category: 'Manufacturing',
        sub_category: 'Transportation Equipment',
    },
    {
        id: "658731",
        img: '/img/brijesh/image526.png',
        title: "Smart VR – Live Streaming of Immersive Media",
        link: '#',
        date: "03/21/22",
        content_type: "Infographics",
        system: 'Microsoft Windows',
        sub_system: '',
        discription: "Develop a video streaming service based on WebRTC, while enabling media analytics capabilities for end-to-end live media streaming using Intel®",
        category: 'Retail',
        sub_category: '',
    },
    {
        id: "723458",
        img: '/img/brijesh/image527.png',
        title: "Open AMT Cloud Toolkit",
        link: '#',
        date: "03/17/22",
        content_type: "Infographics",
        system: 'Microsoft Windows',
        sub_system: '',
        discription: "Integrate microservices and APIs for remote management of Intel vPro® platforms featuring Intel® Active Management Technology (Intel® AMT).",
        category: 'Retail',
        sub_category: '',
    },
    {
        id: "724408",
        img: '/img/brijesh/image528.png',
        title: "Intel® Optimized Data Discretization",
        link: '#',
        date: "03/11/22",
        content_type: "Infographics",
        system: 'Microsoft Windows',
        sub_system: '',
        discription: "Automate data pre-processing to facilitate large scale deployment of analytic applications.",
        category: 'Transportation, Travel and Warehousing',
        sub_category: '',
    },
    {
        id: "690644",
        img: '/img/brijesh/image529.png',
        title: "Video Curation Sample",
        link: '#',
        date: "01/13/22",
        content_type: "Infographics",
        system: 'Microsoft Windows',
        sub_system: '',
        discription: "Powered by Open Visual Cloud. Implements a reference pipeline using libraries for content analysis of video files.",
        category: 'Transportation, Travel and Warehousing',
        sub_category: '',
    },
    {
        id: "749865",
        img: '/img/brijesh/image521.png',
        title: "Social Distancing for Retail Settings",
        link: '#',
        date: "09/26/24",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Use video analytics solutions based on Intel® Distribution of OpenVINO™ toolkit models to support retail settings for pandemic scenarios.",
        category: 'Health and Life Sciences',
        sub_category: '',
    },
    {
        id: "659212",
        img: '/img/brijesh/image522.svg',
        title: "Connect Edge Devices to Microsoft Azure* IoT",
        link: '#',
        date: "08/09/22",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Helps securely connect devices to Azure IoT*. You are responsible for payment of all third-party charges, including payment for use of Microsoft Azure*",
        category: 'Education',
        sub_category: '',
    },
    {
        id: "736328",
        img: '/img/brijesh/image523.png',
        title: "Reference Architecture for Edge Connectivity",
        link: '#',
        date: "06/29/22",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Create an edge solution for retail use cases with EdgeX*, Portainer*, the Intel® Distribution of OpenVINO™ toolkit, Celadon in Virtual Machine and DPDK*.",
        category: 'Education',
        sub_category: '',
    },
    {
        id: "736459",
        img: '/img/brijesh/image524.png',
        title: "Wireless Network-Ready Intelligent Traffic Management",
        link: '#',
        date: "06/28/22",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Consolidate visual intelligence and wireless workloads at traffic intersections.",
        category: 'Education',
        sub_category: '',
    },
    {
        id: "734302",
        img: '/img/brijesh/image525.png',
        title: "Use TDengine* Database with Intel® Edge Insights for Industrial",
        link: '#',
        date: "05/05/22",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Run time-series data collection, storage, and visualization pipeline with Intel® Edge Insights for Industrial, Telegraf*, TDengine*, and Grafana*.",
        category: 'Automotive',
        sub_category: '',
    },
    {
        id: "658731",
        img: '/img/brijesh/image526.png',
        title: "Smart VR – Live Streaming of Immersive Media",
        link: '#',
        date: "03/21/22",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Develop a video streaming service based on WebRTC, while enabling media analytics capabilities for end-to-end live media streaming using Intel®",
        category: 'Media',
        sub_category: '',
    },
    {
        id: "723458",
        img: '/img/brijesh/image527.png',
        title: "Open AMT Cloud Toolkit",
        link: '#',
        date: "03/17/22",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Integrate microservices and APIs for remote management of Intel vPro® platforms featuring Intel® Active Management Technology (Intel® AMT).",
        category: 'Media',
        sub_category: '',
    },
    {
        id: "724408",
        img: '/img/brijesh/image528.png',
        title: "Intel® Optimized Data Discretization",
        link: '#',
        date: "03/11/22",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Automate data pre-processing to facilitate large scale deployment of analytic applications.",
        category: 'Software and Services',
        sub_category: '',
    },
    {
        id: "690644",
        img: '/img/brijesh/image529.png',
        title: "Video Curation Sample",
        link: '#',
        date: "01/13/22",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Powered by Open Visual Cloud. Implements a reference pipeline using libraries for content analysis of video files.",
        category: 'Software and Services',
        sub_category: 'Internet Software and Services',
    },
    {
        id: "749865",
        img: '/img/brijesh/image521.png',
        title: "Social Distancing for Retail Settings",
        link: '#',
        date: "09/26/24",
        content_type: "Infographics",
        system: 'Linux',
        sub_system: 'Ubuntu Family',
        discription: "Use video analytics solutions based on Intel® Distribution of OpenVINO™ toolkit models to support retail settings for pandemic scenarios.",
        category: 'Manufacturing',
        sub_category: 'IndustrialAutomation',
    },
    {
        id: "659212",
        img: '/img/brijesh/image522.svg',
        title: "Connect Edge Devices to Microsoft Azure* IoT",
        link: '#',
        date: "08/09/22",
        content_type: "Infographics",
        system: 'Linux',
        sub_system: 'Ubuntu Family',
        discription: "Helps securely connect devices to Azure IoT*. You are responsible for payment of all third-party charges, including payment for use of Microsoft Azure*",
        category: 'Manufacturing',
        sub_category: 'IndustrialAutomation',
    },
    {
        id: "736328",
        img: '/img/brijesh/image523.png',
        title: "Reference Architecture for Edge Connectivity",
        link: '#',
        date: "06/29/22",
        content_type: "Infographics",
        system: 'Linux',
        sub_system: 'Ubuntu Family',
        discription: "Create an edge solution for retail use cases with EdgeX*, Portainer*, the Intel® Distribution of OpenVINO™ toolkit, Celadon in Virtual Machine and DPDK*.",
        category: 'Manufacturing',
        sub_category: 'Automotive',
    },
    {
        id: "736459",
        img: '/img/brijesh/image524.png',
        title: "Wireless Network-Ready Intelligent Traffic Management",
        link: '#',
        date: "06/28/22",
        content_type: "Infographics",
        system: 'Linux',
        sub_system: 'CentOS Linux Family',
        discription: "Consolidate visual intelligence and wireless workloads at traffic intersections.",
        category: 'Manufacturing',
        sub_category: 'Transportation Equipment',
    },
    {
        id: "734302",
        img: '/img/brijesh/image525.png',
        title: "Use TDengine* Database with Intel® Edge Insights for Industrial",
        link: '#',
        date: "05/05/22",
        content_type: "Infographics",
        system: 'Linux',
        sub_system: 'CentOS Linux Family',
        discription: "Run time-series data collection, storage, and visualization pipeline with Intel® Edge Insights for Industrial, Telegraf*, TDengine*, and Grafana*.",
        category: 'Manufacturing',
        sub_category: 'Transportation Equipment',
    },
    {
        id: "658731",
        img: '/img/brijesh/image526.png',
        title: "Smart VR – Live Streaming of Immersive Media",
        link: '#',
        date: "03/21/22",
        content_type: "Infographics",
        system: 'Microsoft Windows',
        sub_system: '',
        discription: "Develop a video streaming service based on WebRTC, while enabling media analytics capabilities for end-to-end live media streaming using Intel®",
        category: 'Retail',
        sub_category: '',
    },
    {
        id: "723458",
        img: '/img/brijesh/image527.png',
        title: "Open AMT Cloud Toolkit",
        link: '#',
        date: "03/17/22",
        content_type: "Infographics",
        system: 'Microsoft Windows',
        sub_system: '',
        discription: "Integrate microservices and APIs for remote management of Intel vPro® platforms featuring Intel® Active Management Technology (Intel® AMT).",
        category: 'Retail',
        sub_category: '',
    },
    {
        id: "724408",
        img: '/img/brijesh/image528.png',
        title: "Intel® Optimized Data Discretization",
        link: '#',
        date: "03/11/22",
        content_type: "Infographics",
        system: 'Microsoft Windows',
        sub_system: '',
        discription: "Automate data pre-processing to facilitate large scale deployment of analytic applications.",
        category: 'Transportation, Travel and Warehousing',
        sub_category: '',
    },
    {
        id: "690644",
        img: '/img/brijesh/image529.png',
        title: "Video Curation Sample",
        link: '#',
        date: "01/13/22",
        content_type: "Infographics",
        system: 'Microsoft Windows',
        sub_system: '',
        discription: "Powered by Open Visual Cloud. Implements a reference pipeline using libraries for content analysis of video files.",
        category: 'Transportation, Travel and Warehousing',
        sub_category: '',
    },
    {
        id: "749865",
        img: '/img/brijesh/image521.png',
        title: "Social Distancing for Retail Settings",
        link: '#',
        date: "09/26/24",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Use video analytics solutions based on Intel® Distribution of OpenVINO™ toolkit models to support retail settings for pandemic scenarios.",
        category: 'Health and Life Sciences',
        sub_category: '',
    },
    {
        id: "659212",
        img: '/img/brijesh/image522.svg',
        title: "Connect Edge Devices to Microsoft Azure* IoT",
        link: '#',
        date: "08/09/22",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Helps securely connect devices to Azure IoT*. You are responsible for payment of all third-party charges, including payment for use of Microsoft Azure*",
        category: 'Education',
        sub_category: '',
    },
    {
        id: "736328",
        img: '/img/brijesh/image523.png',
        title: "Reference Architecture for Edge Connectivity",
        link: '#',
        date: "06/29/22",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Create an edge solution for retail use cases with EdgeX*, Portainer*, the Intel® Distribution of OpenVINO™ toolkit, Celadon in Virtual Machine and DPDK*.",
        category: 'Education',
        sub_category: '',
    },
    {
        id: "736459",
        img: '/img/brijesh/image524.png',
        title: "Wireless Network-Ready Intelligent Traffic Management",
        link: '#',
        date: "06/28/22",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Consolidate visual intelligence and wireless workloads at traffic intersections.",
        category: 'Education',
        sub_category: '',
    },
    {
        id: "734302",
        img: '/img/brijesh/image525.png',
        title: "Use TDengine* Database with Intel® Edge Insights for Industrial",
        link: '#',
        date: "05/05/22",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Run time-series data collection, storage, and visualization pipeline with Intel® Edge Insights for Industrial, Telegraf*, TDengine*, and Grafana*.",
        category: 'Automotive',
        sub_category: '',
    },
    {
        id: "658731",
        img: '/img/brijesh/image526.png',
        title: "Smart VR – Live Streaming of Immersive Media",
        link: '#',
        date: "03/21/22",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Develop a video streaming service based on WebRTC, while enabling media analytics capabilities for end-to-end live media streaming using Intel®",
        category: 'Media',
        sub_category: '',
    },
    {
        id: "723458",
        img: '/img/brijesh/image527.png',
        title: "Open AMT Cloud Toolkit",
        link: '#',
        date: "03/17/22",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Integrate microservices and APIs for remote management of Intel vPro® platforms featuring Intel® Active Management Technology (Intel® AMT).",
        category: 'Media',
        sub_category: '',
    },
    {
        id: "724408",
        img: '/img/brijesh/image528.png',
        title: "Intel® Optimized Data Discretization",
        link: '#',
        date: "03/11/22",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Automate data pre-processing to facilitate large scale deployment of analytic applications.",
        category: 'Software and Services',
        sub_category: '',
    },
    {
        id: "690644",
        img: '/img/brijesh/image529.png',
        title: "Video Curation Sample",
        link: '#',
        date: "01/13/22",
        content_type: "Infographics",
        system: 'OS Independent',
        sub_system: '',
        discription: "Powered by Open Visual Cloud. Implements a reference pipeline using libraries for content analysis of video files.",
        category: 'Software and Services',
        sub_category: 'Internet Software and Services',
    },
];
function createDocumentElement(doc) {
    return `
        <div class="col-xl-3 col-md-4 py-3">
            <div class='bg-white '>
                <div class='d-flex justify-content-center border-bottom px-3'>
                    <img src='${doc.img}' alt='img' class='w-100' style='height:150px;'>
                </div>
                <div class='p-3'>
                    <a href="${doc.link}" class="b_special_a3">${doc.title}</a>
                    <p class='mb-0'><b>ID</b>: ${doc.id}</p>
                    <p class='mb-0'><b>Date</b>: ${doc.date}</p>
                    <p class='me-3'>${doc.discription}</p>
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
let currentPage = 1;
const itemsPerPage = 20;
function renderDocuments(page = 1) {
    currentPage = page;
    const container = document.getElementById('documentContainer');
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedDocuments = documents.slice(startIndex, endIndex);
    container.innerHTML = paginatedDocuments.map(createDocumentElement).join('');
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
    renderPaginationControls();
}
function renderPaginationControls() {
    const paginationContainer = document.getElementById('pagination');
    const totalPages = Math.ceil(documents.length / itemsPerPage);

    // Clear existing pagination
    paginationContainer.innerHTML = '';

    // Create Previous button
    if (currentPage > 1) {
        paginationContainer.innerHTML += `<i class="fa-solid fa-angles-left " onclick="renderDocuments(${1})" style="color: #0071c5;"></i><i class="fa-solid fa-angle-left mx-2" onclick="renderDocuments(${currentPage - 1})" style="color: #0071c5;"></i>`;
    }
    // Show page number
    paginationContainer.innerHTML += `<span class="border px-2" style=" width:30px; height: 40px !important;">${currentPage}</span>/<span id="total_page" class=""> ${totalPages}</span>`;
    if (currentPage < totalPages) {
        paginationContainer.innerHTML += `<i class="fa-solid fa-chevron-right mx-2" onclick="renderDocuments(${currentPage + 1})" style="color: #0071c5;"></i><i class="fa-solid fa-angles-right mx-1" onclick="renderDocuments(${totalPages})" style="color: #0071c5;"></i> `;
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
function data(x) {
    var data1 = documents.filter((items) => items.category.includes(x) || items.sub_category.includes(x));
    console.log(data1);
    const container = document.getElementById('documentContainer');
    container.innerHTML = data1.map(createDocumentElement).join('');
    var total = document.getElementById('b_total');
    total.innerHTML = `${data1.length} Results`;
}
function os_data (x) {
    var data1 = documents.filter((items) => items.system.includes(x) || items.sub_system.includes(x));
    const container = document.getElementById('documentContainer');
    container.innerHTML = data1.map(createDocumentElement).join('');
    var total = document.getElementById('b_total');
    total.innerHTML = `${data1.length} Results`;
}
function sortJsonByDate(data) {
    return data.sort(function (a, b) {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return dateB - dateA; // Newest first
    });
}
renderDocuments();