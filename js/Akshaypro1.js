

const products = [
    { name: 'Intel® Core™ Ultra 7 Processor 155UL (12M Cache, up to 4.80 GHz)', launchdate: "Q2'24", cores: 12, turbo: '4.80 GHz', cache: '12 MB', Graphics: 'Intel® Graphics' },
    { name: 'Intel® Core™ Ultra 7 Processor 155UL (12M Cache, up to 4.67 GHz)', launchdate: "Q2'24", cores: 87, turbo: '4.47 GHz', cache: '12 MB', Graphics: 'Intel® Graphics' },
    { name: 'Intel® Core™ Ultra 7 Processor 155UL (12M Cache, up to 4.88 GHz)', launchdate: "Q2'24", cores: 45, turbo: '4.87 GHz', cache: '12 MB', Graphics: 'Intel® Graphics' },
    { name: 'Intel® Core™ Ultra 7 Processor 155UL (12M Cache, up to 4.99 GHz)', launchdate: "Q2'24", cores: 89, turbo: '4.32 GHz', cache: '12 MB', Graphics: 'Intel® Graphics' },
];

let currentSort = {
    column: '',
    ascending: true
};

function renderTable(data) {
    const tbody = document.querySelector('#productTable tbody');
    tbody.innerHTML = '';

    data.forEach(product => {
        const row = `<tr>
            <td class="w-50" style="min-width: 18.75rem;"><input type="checkbox"><a href="#" class="v_item_product">${product.name}</a></td>
            <td>${product.launchdate}</td>
            <td>${product.cores}</td>
            <td>${product.turbo}</td>
            <td>${product.cache}</td>
            <td>${product.Graphics}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

function sortTable(column) {
    let sortedData;
    if (currentSort.column === column) {
        currentSort.ascending = !currentSort.ascending;
    } else {
        currentSort.column = column;
        currentSort.ascending = true;
    }

    switch (column) {
        case 'Product Name':
            sortedData = products.sort((a, b) => currentSort.ascending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
            break;
        case 'Launch Date':
            sortedData = products.sort((a, b) => currentSort.ascending ? new Date(a.launchdate) - new Date(b.launchdate) : new Date(b.launchdate) - new Date(a.launchdate));
            break;
        case 'Total Cores':
            sortedData = products.sort((a, b) => currentSort.ascending ? a.cores - b.cores : b.cores - a.cores);
            break;
        case 'Max Turbo Frequency':
            sortedData = products.sort((a, b) => currentSort.ascending ? parseFloat(a.turbo) - parseFloat(b.turbo) : parseFloat(b.turbo) - parseFloat(a.turbo));
            break;
        case 'Cache':
            sortedData = products.sort((a, b) => currentSort.ascending ? parseFloat(a.cache) - parseFloat(b.cache) : parseFloat(b.cache) - parseFloat(a.cache));
            break;
        case 'Graphics':
            sortedData = products.sort((a, b) => currentSort.ascending ? a.Graphics.localeCompare(b.Graphics) : b.Graphics.localeCompare(a.Graphics));
            break;
    }

    renderTable(sortedData);
}

renderTable(products);


document.getElementById('toggleButton').addEventListener('click', function() {
    const optionsContainer = document.getElementById('v_optionsContainer');
    const icon = this.querySelector('.v_adjust_icon');
    if (optionsContainer.classList.contains('v_hidden')) {
        optionsContainer.classList.remove('v_hidden');
    } else {
        optionsContainer.classList.add('v_hidden');
    }
});
// //////////////////////////////////////////////////////////////////////////////////////
document.getElementById('toggleText').addEventListener('click', function(event) {
    event.preventDefault();
    
    var hiddenElements = document.querySelectorAll('.hide-on-small');
    hiddenElements.forEach(function(element) {
        if (element.style.display === 'none' || element.style.display === '') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });

    // Toggle the text between "Show more" and "Show less"
    if (this.innerText === 'Show more') {
        this.innerText = 'Show less';
    } else {
        this.innerText = 'Show more';
    }

    // Toggle the arrow direction
    this.classList.toggle('collapsed');
});
// //////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    const data = {
        home: {
            popular: [
                { icon: 'fa-magnifying-glass', title: 'Identify My Product', description: 'How to Check If My Intel® Processor Has an Integrated Neural Processing Unit (NPU)', date: '08/07/2024' },
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'Engineered For Intel® Evo™ Laptops: Verified Accessories', date: '08/27/2024' }
            ],
            all: [
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'How to Find China RoHS Documentation for Intel® Processors', date: '08/30/2024' },
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'Engineered For Intel® Evo™ Laptops: Verified Accessories', date: '08/27/2024' },
                { icon: 'fa-puzzle-piece', title: 'Compatibility', description: 'Unable To Increase the Native Resolution of My Laptop to More Than 1360x768', date: '08/08/2024' },
                { icon: 'fa-wrench', title: 'Troubleshooting', description: 'How to Check if Intel® Quick Sync Video Feature is Enabled or Not in Intel® Processors?', date: '08/08/2024' },
                { icon: 'fa-magnifying-glass', title: 'Identify My Product', description: 'How to Check If My Intel® Processor Has an Integrated Neural Processing Unit (NPU)', date: '08/07/2024' },
                { icon: 'fa-award', title: 'Warranty & RMA', description: 'How to Identify the Warranty Status of an Intel® Product', date: '07/09/2024' },
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'Right to Repair', date: '07/02/2024' },
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'How to Find if Intel® Deep Learning Boost (Intel® DL Boost) Is Supported on My Intel® Processor', date: '06/21/2024' },
                { icon: 'fa-magnifying-glass', title: 'Identify My Product', description: 'How to Identify Your Intel® Desktop Processor Socket', date: '06/11/2024' },
                { icon: 'fa-award', title: 'Warranty & RMA', description: 'Warranty Terms and Conditions for Intel® Products', date: '06/11/2024' },
                { icon: 'fa-award', title: 'Warranty & RMA', description: 'Unable to Submit an Intel Warranty Request', date: '06/06/2024' },
                { icon: 'fa-puzzle-piece', title: 'Compatibility', description: 'Frequently Asked Questions for Intel® Graphics Memory on Windows® 10 and Windows 11*', date: '06/05/2024' },
                { icon: 'fa-magnifying-glass', title: 'Identify My Product', description: 'Differences Between Intel® Desktop and Mobile Processors', date: '05/29/2024' },
                { icon: 'fa-wrench', title: 'Troubleshooting', description: 'Why the Task Manager Is Showing No Activity on Neural Processing Unit', date: '05/24/2024' },
                { icon: 'fa-puzzle-piece', title: 'Compatibility', description: 'Supported Operating Systems By the Intel® NPU Driver', date: '05/13/2024' },
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'Where to Buy Computer Systems and Devices Powered by Intel®', date: '05/01/2024' },
                { icon: 'fa-gauge', title: 'Maintenance & Performance', description: 'Updated Guidance for Intel Drivers', date: '04/29/2024' },
                { icon: 'fa-magnifying-glass', title: 'Identify My Product', description: 'How to Identify Your Intel® Desktop Processor Socket', date: '04/16/2024' },
                { icon: 'fa-magnifying-glass', title: 'Identify My Product', description: 'How to Check Number of Cores and Threads in My Processor?', date: '04/16/2024' },
                { icon: 'fa-wrench', title: 'Troubleshooting', description: 'How to Fix a Noisy Fan in Built-in System with Intel® Processors', date: '04/16/2024' },
                { icon: 'fa-award', title: 'Warranty & RMA', description: 'Will My Intel® Product Be Replaced with the Same or Different Model?', date: '04/16/2024' },
                { icon: 'fa-award', title: 'Warranty & RMA', description: 'What Email Confirmations Should I Expect When Submitting a Warranty Request, and What if I Dont Get Them?', date: '04/16/2024' },
                { icon: 'fa-award', title: 'Warranty & RMA', description: 'How Do I Cancel My Warranty Return or Claim?', date: '04/16/2024' },
                { icon: 'fa-award', title: 'Warranty & RMA', description: 'How Do I Package Intel® Product for a Warranty Replacement?', date: '04/16/2024' },
                { icon: 'fa-award', title: 'Warranty & RMA', description: 'What Information Do I Need to Provide When Requesting a Warranty Return?', date: '04/16/2024' },
                { icon: 'fa-award', title: 'Warranty & RMA', description: 'Where Do I Ship Intel® Product for a Warranty Replacement?', date: '04/16/2024' },
                { icon: 'fa-award', title: 'Warranty & RMA', description: 'Warranty Terms and Conditions for Intel® Products', date: '04/16/2024' },
                { icon: 'fa-award', title: 'Warranty & RMA', description: 'What Factors Determine if I Get New or Refurbished Intel® Products When a Warranty Replacement Order Is Approved?', date: '04/16/2024' },
                { icon: 'fa-wrench', title: 'Troubleshooting', description: 'Troubleshooting Tips for Blue Screen Error (BSOD) While Using Intel® Processors', date: '04/08/2024' },
                { icon: 'fa-award', title: 'Warranty & RMA', description: 'What Warranty Return Services Are Offered by Intel?', date: '04/08/2024' },
                
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'Intel® AI Engines and Supported Datatypes', date: '04/02/2024' },
            ]
        },
        profile: {
            popular: [],
            all: [
                { icon: 'fa-puzzle-piece', title: 'Compatibility', description: 'Unable To Increase the Native Resolution of My Laptop to More Than 1360x768', date: '08/08/2024' },
                { icon: 'fa-puzzle-piece', title: 'Compatibility', description: 'Frequently Asked Questions for Intel® Graphics Memory on Windows® 10 and Windows 11*', date: '06/05/2024' },
                { icon: 'fa-puzzle-piece', title: 'Compatibility', description: 'Supported Operating Systems By the Intel® NPU Driver', date: '05/13/2024' },
                { icon: 'fa-puzzle-piece', title: 'Compatibility', description: 'Why Do Certain Games or Applications Have Compatibility Issues?', date: '02/23/2024' }
            ]
        },
        info: {
            popular: [
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'Engineered For Intel® Evo™ Laptops: Verified Accessories', date: '08/27/2024' },
            ],
            all: [
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'How to Find China RoHS Documentation for Intel® Processors', date: '08/30/2024' },
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'Engineered For Intel® Evo™ Laptops: Verified Accessories', date: '08/27/2024' },
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'Right to Repair', date: '07/02/2024' },
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'How to Find if Intel® Deep Learning Boost (Intel® DL Boost) Is Supported on My Intel® Processor', date: '06/21/2024' },
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'Where to Buy Computer Systems and Devices Powered by Intel®', date: '05/01/2024' },
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'Intel® AI Engines and Supported Datatypes', date: '04/02/2024' },
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'Performance Proxy Frequently Asked Questions (FAQs) for Intel® Processors', date: '03/18/2024' },
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'Where to Find the Thermal Design Power (TDP) for Intel® Processors', date: '03/04/2024' },
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'Where to Find Information About Intel® Linux Processor Microcode Data Files', date: '02/21/2024' },
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'Supported Memory Type for Intel® Core™ Laptop Processors', date: '01/08/2024' },
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'Overview of Intel® Evo™ Platform in Intel® Laptops', date: '01/08/2024' },
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'HD Graphics for Intel® Core™ Laptop Processors', date: '01/08/2024' },
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'Overview of Intel® Core™ Ultra Laptop Processors (Code Named Meteor Lake)', date: '12/27/2023' },
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'Comparison Chart for Intel® Core™ Ultra Processors (Laptop Processors)', date: '12/22/2023' },
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'Intel® Core™ Ultra Processors Names and Numbers', date: '12/22/2023' },
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'Intel 4 Versus Intel 7 and Intel Process Technology Naming', date: '12/14/2023' },
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'Information about Temperature for Intel® Processors', date: '12/14/2023' },
                { icon: 'fa-circle-info', title: 'Product Information & Documentation', description: 'Where to Locate the Date Code and Lot Code of Intel® Boxed and Intel® Xeon® Processors', date: '11/27/2023' },
            ]
        },
        identify: {
            popular: [
                { icon: 'fa-magnifying-glass', title: 'Identify My Product', description: 'How to Check If My Intel® Processor Has an Integrated Neural Processing Unit (NPU)', date: '08/07/2024' },
            ],
            all: [
                { icon: 'fa-magnifying-glass', title: 'Identify My Product', description: 'How to Check If My Intel® Processor Has an Integrated Neural Processing Unit (NPU)', date: '08/07/2024' },
                { icon: 'fa-magnifying-glass', title: 'Identify My Product', description: 'How to Identify Your Intel® Desktop Processor Socket', date: '06/11/2024' },
                { icon: 'fa-magnifying-glass', title: 'Identify My Product', description: 'Differences Between Intel® Desktop and Mobile Processors', date: '05/29/2024' },
                { icon: 'fa-magnifying-glass', title: 'Identify My Product', description: 'How to Identify Your Intel® Desktop Processor Socket', date: '04/16/2024' },
                { icon: 'fa-magnifying-glass', title: 'Identify My Product', description: 'How to Check Number of Cores and Threads in My Processor?', date: '04/16/2024' },
                { icon: 'fa-magnifying-glass', title: 'Identify My Product', description: 'How to Check the Number of Performance Cores (P-cores) and Efficient Cores (E-cores) for Systems With Intel® Processor', date: '02/20/2024' },
                { icon: 'fa-magnifying-glass', title: 'Identify My Product', description: 'How Do I Check If My Intel® Processor Supports Intel® Turbo Boost Technology?', date: '02/12/2024' },
                { icon: 'fa-magnifying-glass', title: 'Identify My Product', description: 'How to Identify My Intel® Processor', date: '01/11/2024' },
                { icon: 'fa-magnifying-glass', title: 'Identify My Product', description: 'How Do I Know If a Laptop Is Intel® Evo™ Supported before Buying One?', date: '12/14/2023' },
            ]
        },
        maintenance: {
            popular: [
               
            ],
            all: [
                { icon: 'fa-gauge', title: 'Maintenance & Performance', description: 'Updated Guidance for Intel Drivers', date: '04/29/2024' },
                { icon: 'fa-gauge', title: 'Maintenance & Performance', description: 'Performance and Benchmark Information for AI (Machine Learning) with Intel® Core™ Ultra Processors', date: '03/11/2024' },
                { icon: 'fa-gauge', title: 'Maintenance & Performance', description: 'Why Is the Windows* Task Manager Reported Base Frequency Different from the Frequency Reported by the BIOS or Other Software?', date: '01/23/2024' }
            ]
        },
        troubleshoot: {
            popular: [
               
            ],
            all: [
                { icon: 'fa-wrench', title: 'Troubleshooting', description: 'How to Check if Intel® Quick Sync Video Feature is Enabled or Not in Intel® Processors?', date: '08/08/2024' },
                { icon: 'fa-wrench', title: 'Troubleshooting', description: 'Why the Task Manager Is Showing No Activity on Neural Processing Unit', date: '05/29/2024' },
                { icon: 'fa-wrench', title: 'Troubleshooting', description: 'How to Fix a Noisy Fan in Built-in System with Intel® Processors', date: '04/16/2024' },
                { icon: 'fa-wrench', title: 'Troubleshooting', description: 'Troubleshooting Tips for Blue Screen Error (BSOD) While Using Intel® Processors', date: '04/08/2024' },
                { icon: 'fa-wrench', title: 'Troubleshooting', description: 'Blue Screen Error (BSOD) While Using Intel® Processors', date: '03/28/2024' },
                { icon: 'fa-wrench', title: 'Troubleshooting', description: 'Why Do I Get Error Code 19 When Opening Certain Drivers?', date: '03/18/2024' },
                { icon: 'fa-wrench', title: 'Troubleshooting', description: 'How to Resolve Windows* Crash', date: '02/16/2024' },
            ]
        },
        warranty: {
            popular: [
        
            ],
            all: [
                { icon: 'fa-award', title: 'Warranty & RMA', description: 'How to Identify the Warranty Status of an Intel® Product', date: '07/09/2024' },
                { icon: 'fa-award', title: 'Warranty & RMA', description: 'Warranty Terms and Conditions for Intel® Products', date: '06/11/2024' },
                { icon: 'fa-award', title: 'Warranty & RMA', description: 'Unable to Submit an Intel Warranty Request', date: '06/06/2024' },
                { icon: 'fa-award', title: 'Warranty & RMA', description: 'Will My Intel® Product Be Replaced with the Same or Different Model?', date: '04/16/2024' },
                { icon: 'fa-award', title: 'Warranty & RMA', description: 'What Email Confirmations Should I Expect When Submitting a Warranty Request, and What if I Dont Get Them?', date: '04/16/2024' },
                { icon: 'fa-award', title: 'Warranty & RMA', description: 'How Do I Cancel My Warranty Return or Claim?', date: '04/16/2024' },
                { icon: 'fa-award', title: 'Warranty & RMA', description: 'How Do I Package Intel® Product for a Warranty Replacement?', date: '04/16/2024' },
                { icon: 'fa-award', title: 'Warranty & RMA', description: 'What Information Do I Need to Provide When Requesting a Warranty Return?', date: '04/16/2024' },
                { icon: 'fa-award', title: 'Warranty & RMA', description: 'Where Do I Ship Intel® Product for a Warranty Replacement?', date: '04/16/2024' },
                { icon: 'fa-award', title: 'Warranty & RMA', description: 'Warranty Terms and Conditions for Intel® Products', date: '04/16/2024' },
                { icon: 'fa-award', title: 'Warranty & RMA', description: 'What Factors Determine if I Get New or Refurbished Intel® Products When a Warranty Replacement Order Is Approved?', date: '04/16/2024' },
                { icon: 'fa-award', title: 'Warranty & RMA', description: 'What Warranty Return Services Are Offered by Intel?', date: '04/08/2024' },
                { icon: 'fa-award', title: 'Warranty & RMA', description: 'Intel Customer Support Services during COVID-19 Global Response Actions', date: '02/08/2024' },
            ]
        }
    };

    // function generateContent(category, type) {
    //     const contentContainer = document.getElementById(`${category}-${type}-content`);
    //     contentContainer.innerHTML = '';
    //     data[category][type].forEach(item => {
    //         contentContainer.innerHTML += `
    //             <li class="list-item d-flex align-items-center justify-content-between">
    //                 <div>
    //                     <i class="fa-solid ${item.icon} text-dark pe-2" style="padding-top: 5px;"></i>
    //                     <span class="text-dark">${item.title}</span>
    //                     <p style="color: #0068b5; padding-top: 5px;">${item.description}</p>
    //                 </div>
    //                 <div>
    //                     <div class="text-dark" style="padding-top: 5px;">Last Reviewed</div>
    //                     <div style="color: black; padding-top: 5px;">${item.date}</div>
    //                 </div>
    //             </li>
    //         `;
    //     });
    // }




    function generateContent(category, type) {
        const contentContainer = document.getElementById(`${category}-${type}-content`);
        if (!contentContainer) {
            console.warn(`No content container found for ${category}-${type}`);
            return;
        }
        contentContainer.innerHTML = ''; // Clear existing content
        data[category][type].forEach(item => {
            contentContainer.innerHTML += `
                <li class="list-item d-flex align-items-center justify-content-between py-2" style=" border-bottom:1px solid #e9e9e9">
                    <div >
                        <i class="fa-solid ${item.icon} text-dark pe-2" style="padding-top: 5px;"></i>
                        <span class="text-dark">${item.title}</span>
                        <p style="color: #0068b5; padding-top: 5px;">${item.description}</p>
                    </div>
                    <div>
                        <div class="text-dark" style="padding-top: 5px;">Last Reviewed</div>
                        <div style="color: black; padding-top: 5px;">${item.date}</div>
                    </div>
                </li>
            `;
        });
    }

    // Generate content for all categories
    const categories = ['home', 'profile', 'info', 'identify', 'maintenance', 'troubleshoot', 'warranty'];
    categories.forEach(category => {
        generateContent(category, 'popular');
        
        generateContent(category, 'all');
    });
});