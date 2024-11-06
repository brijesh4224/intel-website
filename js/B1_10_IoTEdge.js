var data = [
    { product: 'Intel® Processor N50',status:'Launched', date: 'Q2 24', cores: 96, max_turbo: '3.2 GHz', caches: '96 MB', GPU: 'Intel® Graphics', link: '#', },
    { product: 'Intel® Processor N97',status:'Launched', date: 'Q2 24', cores: 96, max_turbo: '3.2 GHz', caches: '96 MB', GPU: 'Intel® Graphics', link: '#', },
    { product: 'Intel® Processor N200',status:'Launched', date: 'Q2 24', cores: 96, max_turbo: '3.2 GHz', caches: '96 MB', GPU: 'Intel® Graphics', link: '#', },
]
function load_data() {
    var data_id = document.getElementById('b_data');
    data_id.innerHTML = '';
    data.forEach(element => {
        var innerdata = `<tr class="great-parent">
            <td class='h-100  align-self-center'><p class='px-2 mb-0'>${element.product}</p></td>
            <td class='h-100  align-self-center'><p class='px-2 mb-0'>${element.status}</p></td>
            <td><p class='px-2 mb-0'>${element.date}</p></td>
            <td><p class='px-2 mb-0'>${element.cores}</p></td>
            <td><p class='px-2 mb-0'>${element.max_turbo}</p></td>
            <td><p class='px-2 mb-0'>${element.caches}</p></td>
            <td><p class='px-2 mb-0'>${element.GPU}</p></td>
        </tr>`
        data_id.innerHTML += innerdata;
    });
}
window.onload = function () {
    load_data();
}