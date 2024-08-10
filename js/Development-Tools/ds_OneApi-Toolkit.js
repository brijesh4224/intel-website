// <!-- *********  What Customers Are Saying ********   -->
const cardFuc = (a) => {
    let id = a;
    let arr = ["ds_industry","ds_vendor","ds_academia"]
    arr.forEach((ele)=>{
        document.getElementById(ele).classList.add('d-none')
    })
    document.getElementById(arr[id]).classList.remove('d-none')

    let id2 = a;

    let arr2 = ["ds_Indu","ds_Inde","ds_Acade"]
    arr2.forEach((ele)=>{
        document.getElementById(ele).classList.remove('ds_cust-active')
    })
    document.getElementById(arr2[id2]).classList.add('ds_cust-active')

}
