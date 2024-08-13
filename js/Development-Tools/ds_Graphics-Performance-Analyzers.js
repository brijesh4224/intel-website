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

// <!-- **********  Graphics Performance Analyzers ***********   -->
const handleNav = (b) => {
    let id2 = b;

    let arr2 = ["ds_over","ds_download" ,"ds_document" , "ds_train"]
    arr2.forEach((ele)=>{
        document.getElementById(ele).classList.remove('ds_graph-active')
    })
    document.getElementById(arr2[id2]).classList.add('ds_graph-active')


    let id = b;
    let arr = ["ds_Overview", "ds_Download", "ds_Documentation" , "ds_Training"]
    arr.forEach((ele)=>{
        document.getElementById(ele).classList.add('d-none')
    })
    document.getElementById(arr[id]).classList.remove('d-none')
}

// <!-- ++++++++++++++  Documentation Page ++++++++++++++  -->
const handleOperator = () => {
  let data =  document.getElementById("ds_drop")
  if(data.style.display === 'none'){
       data.style.display = 'block'
  }
  else{
    data.style.display = 'none'

  }

 
}


document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = [
        {
            title: 'Intel® Graphics Performance Analyzers Cookbook',
            date: '06/27/24',
            version: '2024.2',
            category: 'Cookbooks',
            file:'URL (4.76 MB)',
            content: 'Content for the first accordion item.',
            list:{
               option:'2024.2',
               option2:'2023.4',
               option3:'2023.3',
               option4:'2023.1',
               option5:'2022.4',
            },
            icon:true,
        },
        {
            title: 'Get Started with Intel® Graphics Performance Analyzers',
            date: '06/27/24',
            version: '2024.3',
            category: 'Getting Started Guides',
            file:' URL (2.01 MB)',
            content: 'Start profiling game applications with Intel® Graphics Performance Analyzers',
            list:{
                option:'2024.2',
                option2:'2023.4',
                option3:'2023.3',
                option4:'2023.1',
                option5:'2022.4',
             },
             icon:true,
        },
        {
            title: 'Using Visual Studio Code with Intel® oneAPI Toolkits User Guide',
            date: '06/24/24',
            version: '2024.4',
            category: 'Cookbooks',
            file:' URL (2.46 MB)',
            content: 'Using Visual Studio Code to work with Intel oneAPI Toolkits.',
            list:{
                option:'2024.2',
                option2:'2023.4',
                option3:'2023.3',
                option4:'2023.1',
                option5:'2022.4',
             },
             icon:true,
        },
        {
            title: 'Intel® Graphics Performance Analyzers User Guide',
            date: '06/13/24',
            version: '2024.4',
            category: 'Development User Guides',
            single_version:'',
            file:'URL (30.0 MB)',
            content: 'Get a comprehensive overview of Intel® GPA for graphics performance analysis. Understand workflows to profile game applications with Intel® GPA.',
            list:{
                option:'2024.2',
                option2:'2023.4',
                option3:'2023.3',
                option4:'2023.1',
                option5:'2022.4',
             },
             icon:true,
        },
        {
            img:'/img/dhruvin/Development-Tools/Graphics-Performance-Analyzers/pdf.svg',
            title: 'Intel® Graphics Performance Analyzers (Intel® GPA) Release Notes',
            date: '03/16/24',
            category: 'Release Notes',
            single_version:'2024.1',
            file:'URL (30.0 MB)',
            content: 'Get a comprehensive overview of Intel® GPA for graphics performance analysis. Understand workflows to profile game applications with Intel® GPA.',
            icon:true,
        },
        {
            title: 'GPA Framework Keyframing: Replaced By Deferred Capture and Sub-Capture',
            date: '03/11/24',
            category: 'Technical Documentation Kits',
            single_version:'Original',
            file:'URL',
            content: 'Deferred capture and sub-capture replace keyframing in Intel® Graphics Performance Analyzers Framework (Intel® GPA Framework).',
            icon:false,
        },
        {
            img:'/img/dhruvin/Development-Tools/Graphics-Performance-Analyzers/pdf.svg',
            title: 'Intel® Graphics Performance Analyzers (Intel® GPA) Release Notes',
            date: '12/21/23',
            category: 'Release Notes',
            single_version:'2023.4',
            file:'pdf (211 KB)',
            content: 'Intel® Graphics Performance Analyzers (Intel® GPA) Release Notes and New Features',
            icon:true,
        },
    ];

    const accordionContainer = document.getElementById('ds_dataAdded');
    const sortSelect = document.getElementById('sortSelect');
    const searchInput = document.getElementById('searchInput');
    const filterContainer = document.getElementById('filterContainer');

    if (!accordionContainer || !sortSelect || !searchInput || !filterContainer) {
        console.error('One or more required elements are missing from the DOM.');
        return;
    }

    function renderAccordion(items) {
        const accordionHTML = items.map((item, index) => `
            <div class="accordion-item border-bottom ds_main-accor">
                <div class="row bg-white d-flex align-items-center">
                    <div class="col-xl-6 col-lg-12   py-3">
                        <a href="#" class="ds_docu-mini-anker">
                         ${item.img ? `<img src='${item.img}' width="10px">` : ''}
                        ${item.title}</a>
                    </div>
                    <div class="col-xl-1 col-lg-12 py-3 text-muted">
                        ${item.date}
                    </div>
                    <div class="col-xl-2 py-3">
                        ${item.list ? `<select class="form-select w-100">
                            <option value="${item.version}" selected>${item.version}</option>
                            <option value="2023.4">${item?.list?.option}</option>
                            <option value="2023.3">${item?.list?.option2}</option>
                            <option value="2023.1">${item?.list?.option3}</option>
                            <option value="2022.4">${item?.list?.option4}</option>
                        </select>` : ''}
                        ${item.single_version ? `<p class="mb-0">${item.single_version}</p>` : ''}
                    </div>
                    <div class="col-xl-1 py-3 text-muted">
                        <div>
                           ${item.category}
                        </div>
                    </div>
                    <div class="col-xl-2 py-3 d-flex justify-content-end">
                       ${item.icon ? `<i class="fa-solid fa-download mx-2" style="color: #0068b5;" aria-label="Download"></i>
                        <i class="fa-solid fa-bookmark mx-2" style="color: #0068b5;" aria-label="Bookmark"></i>` : ''}
                        <i class="fa-solid fa-chevron-down mx-2 toggle-icon" style="color: #0068b5;" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}" aria-label="Expand content" id="ds_toggle"></i>
                    </div>


                </div>
                <div class="row bg-white">
                    <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#accordionFlushExample">
                       <div class="accordion-body p-3 ">
                         <p class="mb-1">
                           <b>File:</b> ${item.file}
                        </p>
                        <p class="ds-Line-Height">
                           ${item.content}
                        </p>
                       </div>
                   </div>
                </div>
            </div>





            <div class="accordion-item ds_basic-accor mt-3">
                                <div class="row">
                                    <div class="col-lg-12 mt-3">
                                        <div class="ds_docu-inner">
                                            <div class="d-flex justify-content-between flex-sm-row flex-column-reverse ">
                                                 <div>
                                                    <a href="#" class="ds_docu-mini-anker">
                                                     ${item.img ? `<img src='${item.img}' width="10px">` : ''}
                                                     ${item.title}</a>
                                                 </div>
                                                 <div class="align-self-baseline">
                                                   <i class="fa-solid fa-download mx-2" style="color: #0068b5;" aria-label="Download"></i>
                                                    <i class="fa-solid fa-bookmark mx-2" style="color: #0068b5;" aria-label="Bookmark"></i>
                                                    <i class="fa-solid fa-chevron-down mx-2 toggle-icon" style="color: #0068b5;" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}" aria-label="Expand content" id="ds_toggle"></i>
                                                 </div>
                                            </div>
                                            <div class="mt-3">
                                                <p>
                                                    <b>Date:</b>  ${item.date}
                                                </p>
                                                <p>
                                                    <b>Version:</b>
                                                    ${item.list ? `<select class="">
                                                                      <option value="${item.version}" selected>${item.version}</option>
                                                                      <option value="2023.4">${item?.list?.option}</option>
                                                                      <option value="2023.3">${item?.list?.option2}</option>
                                                                      <option value="2023.1">${item?.list?.option3}</option>
                                                                      <option value="2022.4">${item?.list?.option4}</option>
                                                                  </select>` : ''}
                                                                  ${item.single_version ? `<p class="mb-0">${item.single_version}</p>` : ''}
                                                </p>
                                                <p>
                                                    <b>Content Type:</b> ${item.category}   
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                   </div>

                                   <div class="row ">
                                    <div class="col-lg-12">
                                    <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#accordionFlushExample">
                                       <div class="accordion-body  ">
                                         <p class="mb-1">
                                           <b>File:</b> ${item.file}
                                        </p>
                                        <p class="ds-Line-Height">
                                           ${item.content}
                                        </p>
                                       </div>
                                   </div>
                                    </div>
                                </div>
                              </div>



        `).join('');

        accordionContainer.innerHTML = accordionHTML;

        document.querySelectorAll('.toggle-icon').forEach(icon => {
            icon.addEventListener('click', function () {
                const targetElement = document.getElementById('ds_toggle');
                if (targetElement) {
                    const ariaExpanded = targetElement.getAttribute('aria-expanded');
                    if (ariaExpanded == "true") {
                        this.classList.remove('rotate');
                    } else {
                        this.classList.add('rotate');
                    }
                }
            });
        });
    }

    function filterItems(items) {
        const searchValue = searchInput.value.toLowerCase();
        const checkedCategories = Array.from(filterContainer.querySelectorAll('input[type="checkbox"]:checked'))
                                      .map(cb => cb.nextElementSibling.textContent.split('(')[0].trim());

        return items.filter(item => {
            const matchesSearch = item.title.toLowerCase().includes(searchValue);
            const matchesCategory = checkedCategories.length === 0 || checkedCategories.includes(item.category);

            return matchesSearch && matchesCategory;
        });
    }

    function sortItems(items, criteria) {
        if (criteria === 'az') {
            return [...items].sort((a, b) => a.title.localeCompare(b.title));
        } else if (criteria === 'za') {
            return [...items].sort((a, b) => b.title.localeCompare(a.title));
        } else if (criteria === 'oldest') {
            return [...items].sort((a, b) => new Date(a.date) - new Date(b.date));
        } else {
            return items; // Default or newest
        }
    }

    function updateAccordion() {
        let filteredItems = filterItems(accordionItems);
        let sortedItems = sortItems(filteredItems, sortSelect.value);
        renderAccordion(sortedItems);
    }

    renderAccordion(accordionItems);

    sortSelect.addEventListener('change', updateAccordion);
    searchInput.addEventListener('input', updateAccordion);

    filterContainer.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', updateAccordion);
    });
});








