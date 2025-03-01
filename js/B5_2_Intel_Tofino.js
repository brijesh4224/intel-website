var data = [
    { product: 'Intel® Xeon® 6740E Processor (96M Cache, 2.40 GHz)',status:'Launched'},
    { product: 'Intel® Xeon® 6740E Processor (96M Cache, 2.40 GHz)',status:'Announced'},
    { product: 'Intel® Xeon® 6740E Processor (96M Cache, 2.40 GHz)',status:'Launched'},
    { product: 'Intel® Xeon® 6740E Processor (96M Cache, 2.40 GHz)',status:'Launched'},
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
    var total = document.getElementById('b_table');
    total.innerHTML = print_data.length + ' Product';
    var data_id = document.getElementById('b_data');
    data_id.innerHTML = '';
    print_data.forEach(element => {
        var innerdata = `<tr class='great-parent'>
            <td class='h-100  align-self-center'><input type='checkbox' class='b_special_checkbox ms-2 ' onclick='check_items()'></input><a href='${element.link}' class='b_special_a1 text-nowrap mx-2'>${element.product}</a></td>
            <td><p class='px-2 mb-0'>${element.status}</p></td>
           
        </tr>`
        data_id.innerHTML += innerdata;
    });
}
function check_items() {
    var cnt = 0; 
    var checkboxes = document.getElementsByClassName('b_special_checkbox');

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
        var id = document.getElementsByClassName('b_compare_box')[0];
        id.classList.remove('d-none');
        var id2 = document.getElementById('compare_product');
        id2.innerHTML = '' + cnt;
    }
}
function closecompare() {
    var id = document.getElementsByClassName('b_compare_box')[0];
    id.classList.add('d-none');
    var checkbox = document.getElementsByClassName('b_special_checkbox');
    for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = false
    }
    var greatParent = document.getElementsByClassName('great-parent');
    for (var i = 0; i < greatParent.length; i++) {
        greatParent[i].classList.remove('bg_light_blue');
    }
}
function campareall() {
    var checkbox = document.getElementsByClassName('b_special_checkbox');
    for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = true
    }
    var id = document.getElementsByClassName('b_compare_box')[0];
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

function fiterhanddler(){
    var id = document.getElementById('b_filter');
    id.classList.toggle('d-none');
}