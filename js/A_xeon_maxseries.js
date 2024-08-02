const products = [
    { name: 'Intel® Xeon® 6740E Processor (96M Cache, 2.40 GHz)', cores: 96, turbo: '3.2 GHz', base: '2.4 GHz', cache: '96 MB' },
    { name: 'Intel® Xeon® 6756E Processor (96M Cache, 1.80 GHz)', cores: 128, turbo: '2.6 GHz', base: '1.8 GHz', cache: '96 MB' },
    { name: 'Intel® Xeon® 6780E Processor (108M Cache, 2.20 GHz)', cores: 144, turbo: '3 GHz', base: '2.2 GHz', cache: '108 MB' },
    { name: 'Intel® Xeon® 6710E Processor (96M Cache, 2.40 GHz)', cores: 64, turbo: '3.2 GHz', base: '2.4 GHz', cache: '96 MB' },
    { name: 'Intel® Xeon® 6766E Processor (108M Cache, 1.90 GHz)', cores: 144, turbo: '2.7 GHz', base: '1.9 GHz', cache: '108 MB' },
    { name: 'Intel® Xeon® 6731E Processor (96M Cache, 2.20 GHz)', cores: 96, turbo: '3.1 GHz', base: '2.2 GHz', cache: '96 MB' },
    { name: 'Intel® Xeon® 6746E Processor (96M Cache, 2.00 GHz)', cores: 112, turbo: '2.7 GHz', base: '2 GHz', cache: '96 MB' }
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
            <td>${product.cores}</td>
            <td>${product.turbo}</td>
            <td>${product.base}</td>
            <td>${product.cache}</td>
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
    }

    renderTable(sortedData);
}

document.addEventListener('DOMContentLoaded', () => renderTable(products));