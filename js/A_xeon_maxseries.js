

const products = [
    { name: 'Intel® Xeon® CPU Max 9460 Processor (97.5M Cache, 2.20 GHz)', launhdate: "Q1'23", cores: 40, turbo: '3.50 GHz', base: '2.20 GHz', cache: '97.5 MB', tdp: '350 W' },
    { name: 'Intel® Xeon® CPU Max 9462 Processor (75M Cache, 2.70 GHz)', launhdate: "Q1'23", cores: 32, turbo: '3.50 GHz', base: '2.70 GHz', cache: '75 MB', tdp: '350 W' },
    { name: 'Intel® Xeon® CPU Max 9468 Processor (105M Cache, 2.10 GHz)', launhdate: "Q1'23", cores: 48, turbo: '3.50 GHz', base: '2.10 GHz', cache: '105 MB', tdp: '350 W' },
    { name: 'Intel® Xeon® CPU Max 9470 Processor (105M Cache, 2.00 GHz)', launhdate: "Q1'23", cores: 52, turbo: '3.50 GHz', base: '2.00 GHz', cache: '105 MB', tdp: '350 W' },
    { name: 'Intel® Xeon® CPU Max 9480 Processor (112.5M Cache, 1.90 GHz)', launhdate: "Q1'23", cores: 56, turbo: '3.50 GHz', base: '1.90 GHz', cache: '112.5 MB', tdp: '350 W' }
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
            <td>${product.launhdate}</td>
            <td>${product.cores}</td>
            <td>${product.turbo}</td>
            <td>${product.base}</td>
            <td>${product.cache}</td>
            <td>${product.tdp}</td>
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
            sortedData = products.sort((a, b) => currentSort.ascending ? new Date(a.launhdate) - new Date(b.launhdate) : new Date(b.launhdate) - new Date(a.launhdate));
            break;
        case 'Total Cores':
            sortedData = products.sort((a, b) => currentSort.ascending ? a.cores - b.cores : b.cores - a.cores);
            break;
        case 'Max Turbo Frequency':
            sortedData = products.sort((a, b) => currentSort.ascending ? parseFloat(a.turbo) - parseFloat(b.turbo) : parseFloat(b.turbo) - parseFloat(a.turbo));
            break;
        case 'Processor Base Frequency':
            sortedData = products.sort((a, b) => currentSort.ascending ? parseFloat(a.base) - parseFloat(b.base) : parseFloat(b.base) - parseFloat(a.base));
            break;
        case 'Cache':
            sortedData = products.sort((a, b) => currentSort.ascending ? parseFloat(a.cache) - parseFloat(b.cache) : parseFloat(b.cache) - parseFloat(a.cache));
            break;
        case 'TDP':
            sortedData = products.sort((a, b) => currentSort.ascending ? parseFloat(a.tdp) - parseFloat(b.tdp) : parseFloat(b.tdp) - parseFloat(a.tdp));
            break;
    }

    renderTable(sortedData);
}

renderTable(products);

// document.getElementById('toggleButton').addEventListener('click', function() {
//     const optionsContainer = document.getElementById('v_optionsContainer');
//     if (optionsContainer.classList.contains('v_hidden')) {
//         optionsContainer.classList.remove('v_hidden');
//         this.textContent = 'Filter';
//     } else {
//         optionsContainer.classList.add('v_hidden');
//         this.textContent = 'Filter';
//     }
// });
document.getElementById('toggleButton').addEventListener('click', function() {
    const optionsContainer = document.getElementById('v_optionsContainer');
    const icon = this.querySelector('.v_adjust_icon');
    if (optionsContainer.classList.contains('v_hidden')) {
        optionsContainer.classList.remove('v_hidden');
    } else {
        optionsContainer.classList.add('v_hidden');
    }
});