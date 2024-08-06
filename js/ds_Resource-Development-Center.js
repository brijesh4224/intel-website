let data = [
  {
    title: "Cloud Performance Optimization Tools",
    icon: true,
    description:'Cloud Performance Optimization Tools',
    status:'Released'
  },
];

let tbody = document.getElementById("ds_tbody");
let result = data.map((element , index)=>{
    return `<tr ${index}>
                    <td class="ds_td-title">
                       <a href="" class="ds_td-anker">${element.title}</a>
                       <i class="fa-solid fa-lock ms-2 mt-1 ds_table-icon "  ></i>
                     </td>
                     <td class="ds_td-title">
                        Cloud Performance Optimization Tools
                     </td>
                     <td class="ds_td-title"></td>
                     <td class="ds_td-title">
                       Released
                    </td>
                </tr>`
})
tbody.innerHTML += result

// for (let i = 0; i < data.length; i++) {
//   const row = `<tr>
//                     <td class="ds_td-title">
//                        <a href="" class="ds_td-anker">${title}</a>
//                        <i class="fa-solid fa-lock ms-2 mt-1 ds_table-icon "  ></i>
//                      </td>
//                      <td class="ds_td-title">
//                         Cloud Performance Optimization Tools
//                      </td>
//                      <td class="ds_td-title"></td>
//                      <td class="ds_td-title">
//                        Released
//                     </td>
//                 </tr>`;
//     tbody.innerHTML += row         
// }
