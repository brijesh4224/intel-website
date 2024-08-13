const cardFuc = (a) => {
    let id = a;
    let arr = ["ds_syatem","ds_frame","ds_trace"]
    arr.forEach((ele)=>{
        document.getElementById(ele).classList.add('d-none')
    })
    document.getElementById(arr[id]).classList.remove('d-none')

    let id2 = a;

    let arr2 = ["ds_Feature","ds_Download","ds_Document"]
    arr2.forEach((ele)=>{
        document.getElementById(ele).classList.remove('ds_graph-active')
    })
    document.getElementById(arr2[id2]).classList.add('ds_graph-active')

}