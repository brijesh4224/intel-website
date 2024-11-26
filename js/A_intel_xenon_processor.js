var data = [
    { product: 'Intel® Xeon® 6960P Processor (432M Cache, 2.70 GHz)', date: "Q3'24", cores: 72, max_turbo: '3.9 GHz', processor_base: '2.7 GHz', caches: '432 MB', TDP: '500 W', link: '#'},
    { product: 'Intel® Xeon® 6980P Processor (504M Cache, 2.00 GHz)', date: "Q3'24", cores: 128, max_turbo: '3.9 GHz', processor_base: '2 GHz', caches: '504 MB', TDP: '500 W', link: '#'},
    { product: 'Intel® Xeon® 6979P Processor (504M Cache, 2.10 GHz)', date: "Q3'24", cores: 120, max_turbo: '3.9 GHz', processor_base: '2.1 GHz', caches: '504 MB', TDP: '500 W', link: '#'},
    { product: 'Intel® Xeon® 6972P Processor (480M Cache, 2.40 GHz)', date: "Q3'24", cores: 96, max_turbo: '3.9 GHz', processor_base: '2.4 GHz', caches: '480 MB', TDP: '500 W', link: '#'},
    { product: 'Intel® Xeon® 6952P Processor (480M Cache, 2.10 GHz)', date: "Q3'24", cores: 96, max_turbo: '3.9 GHz', processor_base: '2.1 GHz', caches: '480 MB', TDP: '400 W', link: '#'},
    { product: 'Intel® Xeon® 6740E Processor (96M Cache, 2.40 GHz)', date: "Q2'24", cores: 96, max_turbo: '3.2 GHz', processor_base: '2.4 GHz', caches: '96 MB', TDP: '250 W',  link: '#'},
    { product: 'Intel® Xeon® 6756E Processor (96M Cache, 1.80 GHz)', date: "Q2'24", cores: 128, max_turbo: '2.6 GHz', processor_base: '1.8 GHz', caches: '96 MB', TDP: '225 W', link: '#'},
    { product: 'Intel® Xeon® 6780E Processor (108M Cache, 2.20 GHz)', date: "Q2'24", cores: 144, max_turbo: '3 GHz', processor_base: '2.2 Ghz', caches: '108 MB', TDP: '330 W', link: '#'},
    { product: 'Intel® Xeon® 6710E Processor (96M Cache, 2.40 GHz)', date: "Q2'24", cores: 64, max_turbo: '3.2 GHz', processor_base: '2.4 GHz', caches: '96 MB', TDP: '205 W',  link: '#'},
    { product: 'Intel® Xeon® 6766E Processor (108M Cache, 1.90 GHz)', date: "Q2'24", cores: 144, max_turbo: '2.7 GHz', processor_base: '1.9 GHz', caches: '108 MB', TDP: '250 W', link: '#'},
    { product: 'Intel® Xeon® 6731E Processor (96M Cache, 2.20 GHz)', date: "Q2'24", cores: 96, max_turbo: '3.1 GHz', processor_base: '2.2 GHz', caches: '96 MB', TDP: '250 W', link: '#'},
    { product: 'Intel® Xeon® 6746E Processor (96M Cache, 2.00 GHz)', date: "Q2'24", cores: 112, max_turbo: '2.7 GHz', processor_base: '2 GHz', caches: '96 MB', TDP: '250 W', link: '#'},
   
]
function load_data(x, y) {
    var print_data;
    if (x == undefined || y == undefined) {
        print_data = data
    }
    console.log(x, y);
    if (y == 'Generation') {
        if (x == ' ') {
            print_data = data

        }
        else {
            print_data = data.filter((item) => { return (item.generation.includes(x)) });
            console.log(print_data);
        }

    }
    if( y == 'Type'){
        if (x == ' ') {
            print_data = data

        }
        else {
            print_data = data.filter((item) => { return (item.type.includes(x)) });
            console.log(print_data);
        }
    }
    if( y == 'Status'){
        if (x == 'true') {
            print_data = data.filter((item) => { return (item.status == true) });
        }
        else {
            print_data = data.filter((item) => { return (item.status == false) });
            console.log(print_data);
        }
    }
    var total = document.getElementById('V_table');
    total.innerHTML = print_data.length + ' Product';
    var data_id = document.getElementById('V_data');
    data_id.innerHTML = '';
    print_data.forEach(element => {
        var innerdata = `<tr class='great-parent'>
            <td class='h-100  align-self-center'><input type='checkbox' class='V_special_checkbox ms-3 ' onclick='check_items()'></input><a href='${element.link}' class='V_special_a1 text-nowrap mx-3'>${element.product}</a></td>
            <td><p class='px-2 mb-0'>${element.date}</p></td>
            <td><p class='px-2 mb-0'>${element.cores}</p></td>
            <td><p class='px-2 mb-0'>${element.max_turbo}</p></td>
            <td><p class='px-2 mb-0'>${element.processor_base}</p></td>
            <td><p class='px-2 mb-0'>${element.caches}</p></td>
            <td><p class='px-2 mb-0'>${element.TDP}</p></td>
        </tr>`
        data_id.innerHTML += innerdata;
    });
}
function check_items() {
    var cnt = 0; 
    var checkboxes = document.getElementsByClassName('V_special_checkbox');

    for (let i = 0; i < checkboxes.length; i++) {
        const checkbox = checkboxes[i];
        const greatParent = checkbox.closest('.great-parent'); 
        if (checkbox.checked) {
            cnt++;
            if (greatParent) {
                greatParent.classList.add('bg_light_blue'); 
            }
        } else {
            if (greatParent) {
                greatParent.classList.remove('bg_light_blue'); 
            }
        }
    }
    console.log(cnt);
    if (cnt != 0) {
        var id = document.getElementsByClassName('V_compare_box')[0];
        id.classList.remove('d-none');
        var id2 = document.getElementById('compare_product');
        id2.innerHTML = '' + cnt;
    }
}
function closecompare() {
    var id = document.getElementsByClassName('V_compare_box')[0];
    id.classList.add('d-none');
    var checkbox = document.getElementsByClassName('V_special_checkbox');
    for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = false
    }
    var greatParent = document.getElementsByClassName('great-parent');
    for (var i = 0; i < greatParent.length; i++) {
        greatParent[i].classList.remove('bg_light_blue');
    }
}
function campareall() {
    var checkbox = document.getElementsByClassName('V_special_checkbox');
    for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = true
    }
    var id = document.getElementsByClassName('V_compare_box')[0];
    id.classList.remove('d-none');
    var id2 = document.getElementById('compare_product');
    id2.innerHTML = '' + checkbox.length;
    var greatParent = document.getElementsByClassName('great-parent');
    for (var i = 0; i < greatParent.length; i++) {
        greatParent[i].classList.add('bg_light_blue');
    }
}
window.onload = function () {
    load_data();
}

// function fiterhanddler(){
//     var id = document.getElementById('b_filter');
//     id.classList.toggle('d-none');
// }