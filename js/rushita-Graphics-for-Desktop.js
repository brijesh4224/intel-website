const processorData = [
    {
        name: "Intel® Arc™ A770 Graphics (8GB)",
        launchDate: "Q3'22",
        MemorySize: "8 GB",
        cores: 32
    },
    {
        name: "Intel® Arc™ A770 Graphics (16GB)",
        launchDate: "Q3'22",
        MemorySize: "	16 GB",
        cores: 32
    },
    {
        name: "Intel® Arc™ A750 Graphics",
        launchDate: "Q3'22",
        MemorySize: "8 GB",
        cores: 28
    },
    {
        name: "Intel® Arc™ A580 Graphics",
        launchDate: "Q4'23",
        MemorySize: "	8 GB",
        cores: 24
    },
    {
        name: "Intel® Arc™ A380 Graphics",
        launchDate: "Q2'22",
        MemorySize: "6 GB",
        cores: 8
    },
    {
        name: "Intel® Arc™ A310 Graphics",
        launchDate: "Q3'22",
        MemorySize: "4 GB",
        cores: 6
    }
];

const LaunchData = [
    {
        name: "Intel® Arc™ A380 Graphics",
        launchDate: "	Q2'22",
        MemorySize: "6 GB",
        cores: 8
    },
    {
        name: "Intel® Arc™ A770 Graphics (8GB)",
        launchDate: "Q3'22",
        MemorySize: "8 GB",
        cores: 32
    },
    {
        name: "Intel® Arc™ A770 Graphics (16GB)",
        launchDate: "Q3'22",
        MemorySize: "16 GB",
        cores: 32
    },
    {
        name: "Intel® Arc™ A750 Graphics",
        launchDate: "Q3'22",
        MemorySize: "	8 GB",
        cores: 28
    },
    {
        name: "Intel® Arc™ A310 Graphics",
        launchDate: "	Q3'22",
        MemorySize: "4 GB",
        cores: 6
    },
    {
        name: "Intel® Arc™ A580 Graphics",
        launchDate: "Q4'23",
        MemorySize: "8 GB",
        cores: 24
    }
];

const MemorySize = [
    {
        name: "Intel® Arc™ A310 Graphics",
        launchDate: "	Q3'22",
        MemorySize: "4 GB",
        cores: 6
    },
    {
        name: "Intel® Arc™ A380 Graphics",
        launchDate: "Q2'22",
        MemorySize: "6 GB",
        cores:8
    },
    {
        name: "Intel® Arc™ A770 Graphics (8GB)",
        launchDate: "Q3'22",
        MemorySize: "8 GB",
        cores: 32
    },
    {
        name: "Intel® Arc™ A750 Graphics",
        launchDate: "Q3'22",
        MemorySize: "	8 GB",
        cores: 28
    },
    {
        name: "Intel® Arc™ A580 Graphics",
        launchDate: "Q4'23",
        MemorySize: "8 GB",
        cores: 24
    },
    {
        name: "Intel® Arc™ A770 Graphics (16GB)",
        launchDate: "Q3'22",
        MemorySize: "16 GB",
        cores: 32
    }
];

const cores = [
    {
        name: "Intel® Arc™ A770 Graphics (8GB)",
        launchDate: "Q3'22",
        MemorySize: "8 GB",
        cores: 32
    },
    {
        name: "Intel® Arc™ A770 Graphics (16GB)",
        launchDate: "Q3'22",
        MemorySize: "	16 GB",
        cores: 32
    },
    {
        name: "Intel® Arc™ A750 Graphics",
        launchDate: "Q3'22",
        MemorySize: "8 GB",
        cores: 28
    },
    {
        name: "Intel® Arc™ A580 Graphics",
        launchDate: "Q4'23",
        MemorySize: "	8 GB",
        cores: 24
    },
    {
        name: "Intel® Arc™ A380 Graphics",
        launchDate: "Q2'22",
        MemorySize: "6 GB",
        cores: 8
    },
    {
        name: "Intel® Arc™ A310 Graphics",
        launchDate: "Q3'22",
        MemorySize: "4 GB",
        cores: 6
    }
];

function createTable(data, activeTab = 'product_name') {
    const outerContainer = document.createElement('div');
    outerContainer.style.overflowX = 'auto';

    const tableContainer = document.createElement('div');
    tableContainer.className = 'k_container11';

    const table = document.createElement('table');
    table.className = 'custom-table';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.className = 'k_xeontablebg k_rightborder1 k_xeoncenter';

    const headers = ['Product Name', 'Launch Date', 'Memory Size', 'Cores'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        const link = document.createElement('a');
        link.href = "#";
        link.textContent = headerText;
        link.style.cursor = 'pointer';
        link.style.textDecoration = 'none';
        link.style.color = 'black';
        // Prevent default and stop propagation
        link.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            changeTab(headerText.toLowerCase().replace(/ /g, '_'));
        });
        th.appendChild(link);
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    data.forEach((item, index) => {
        const row = document.createElement('tr');
        row.className = index % 2 === 0 ? 'k_xeontablebg1' : '';

        const cells = [
            `<input type="checkbox" class="k_checkbox"><a href="#" class="k_plink k_intext1blue">${item.name}</a>`,
            item.launchDate,
            item.MemorySize,
            item.cores
        ];

        cells.forEach((cellContent, cellIndex) => {
            const td = document.createElement('td');
            td.innerHTML = cellContent;
            if (headers[cellIndex].toLowerCase().replace(/ /g, '_') === activeTab) {
                td.classList.add('active-column');
            }
            row.appendChild(td);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
    outerContainer.appendChild(tableContainer);

    return outerContainer;
}

function changeTab(tabName) {
    showTable(tabName);
}

function showTable(activeTab = 'product_name') {
    let dataToUse = processorData; // Default to full data

    switch (activeTab) {
        case 'launch_date':
            dataToUse = LaunchData;
            break;
        case 'memory_size':
            dataToUse = MemorySize;
            break;
        case 'cores':
            dataToUse = cores;
            break;
    }

    const tableContainer = createTable(dataToUse, activeTab);
    const container = document.getElementById('tableContainer');

    // Ensure container exists before appending
    if (container) {
        container.innerHTML = '';
        container.appendChild(tableContainer);
    } else {
        console.error('Table container not found');
    }
}

// Simplified DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    // Initial table load
    showTable();

    // Prevent default link behavior on all links
    document.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName === 'A' && target.getAttribute('href') === '#') {
            event.preventDefault();
        }
    });
});