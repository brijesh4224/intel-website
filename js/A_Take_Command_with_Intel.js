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