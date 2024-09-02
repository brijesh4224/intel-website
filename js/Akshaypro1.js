

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