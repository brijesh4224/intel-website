const cardFuc = (a) => {
    let id = a;
    let arr = ["ds_industry","ds_vendor","ds_academia" , "ds_shader"]
    arr.forEach((ele)=>{
        document.getElementById(ele).classList.add('d-none')
    })
    document.getElementById(arr[id]).classList.remove('d-none')

    let id2 = a;

    let arr2 = ["ds_Indu","ds_Inde","ds_Acade" ,"ds_Shader"]
    arr2.forEach((ele)=>{
        document.getElementById(ele).classList.remove('ds_cust-active')
    })
    document.getElementById(arr2[id2]).classList.add('ds_cust-active')

}

const handleNav = (b) => {
    let id2 = b;

    let arr2 = ["ds_over","ds_feature","ds_download" ,"ds_document" , "ds_train"]
    arr2.forEach((ele)=>{
        document.getElementById(ele).classList.remove('ds_graph-active')
    })
    document.getElementById(arr2[id2]).classList.add('ds_graph-active')


    let id = b;
    let arr = ["ds_Overview", "", "ds_Download", "" , "ds_Training"]
    arr.forEach((ele)=>{
        document.getElementById(ele).classList.add('d-none')
    })
    document.getElementById(arr[id]).classList.remove('d-none')
}