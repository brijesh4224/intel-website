function showchoose(x) {
    var value = document.getElementsByClassName('hide');
    if (x == 1) {
        for (var j = 0; j < value.length; j++) {
            value[j].classList.remove('d-none');
        }
        var data = document.getElementById('showmore');
        data.classList.add('d-none');
        var data1 = document.getElementById('showless');
        data1.classList.remove('d-none')
    }
    if (x == 2) {
        for (var j = 0; j < value.length; j++) {
            value[j].classList.add('d-none');
        }
        var data = document.getElementById('showmore');
        data.classList.remove('d-none');
        var data1 = document.getElementById('showless');
        data1.classList.add('d-none')
    }
}

function V_dynamic_li(id){
    let ele = document.querySelectorAll(`.v_dynamic_li`)
    let img = document.querySelectorAll('.V_imag_div')
    img.forEach((it)=>{
        it.classList.add('d-none')
    })
    img[id].classList.remove('d-none')
    ele.forEach((el)=>{
        el.classList.remove('V_active_li')
    })
    ele[id].classList.add('V_active_li')

}