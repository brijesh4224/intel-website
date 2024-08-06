let data = [
  {
    title: "Cloud Performance Optimization Tools",
    icon: true,
    description:'Cloud Performance Optimization Tools',
    status:'Released'
  },
  {
    title:'GPU Development ',
    icon: true,
    description: 'GPU Development ',
    status:'Pre-release'
  },
  {
    title:'GPU Tuning and Optimization Guides ',
    icon: false,
    description: 'GPU Tuning and Optimization Guides ',
    status:'Released'
  },
  {
    title:'Intel Product Qualification Reports ',
    icon: true,
    description: ' Product Quality and Reliability Data in support of Intel® Production Release Qualification',
    status:'Released'
  },
  {
    title:'Intel® oneAPI Documentation ',
    icon: false,
    description: 'Intel® oneAPI Documentation ',
    status:'Released'
  },
  {
    title:'Product Roadmaps ',
    icon: false,
    description: 'Processors and Chipsets Product Roadmaps from Intel ',
    status:'Released'
  },
  {
    title:'Restricted Documents ',
    icon: true,
    description: 'Restricted Documents ',
    status:'Released'
  },
  {
    title:'Software Kits ',
    icon: true,
    description: 'Software Kits ',
    status:'Released'
  },
  {
    title:"What's New ",
    icon: true,
    description: "What's New",
    status:'Released'
  }
];

let tbody = document.getElementById("ds_tbody");
let result = data.map((element , index)=>{
    return `<tr ${index}>
                    <td class="ds_td-title">
                       <a href="" class="ds_td-anker">${element.title}</a>
                      ${ element.icon ? `<i class="fa-solid fa-lock ms-2 mt-1 ds_table-icon "></i>` : ``}
                     </td>
                     <td class="ds_td-title">
                        ${element.description}
                     </td>
                     <td class="ds_td-title"></td>
                     <td class="ds_td-title">
                       ${element.status}
                    </td>
                </tr>`
}).join(" ")
tbody.innerHTML += result


let All_CollectionArr = [
  {
    title:'AI Technical Library ',
    icon:false,
    description:'AI Technical Library ',
    lanuch:'',
    status:'Released ',
  },
  {
    title:'Adams Pass ',
    icon:false,
    description:'Intel® Server Board S7200AP Family (Adams Pass) ',
    lanuch:'2018 Q1',
    status:'Released ',
  },
  {
    title:'Alder Lake N ',
    icon:false,
    description:'Intel Atom® Processors x7000E Series and Intel® Core™ i3-N305 Processors for IoT edge applications ',
    lanuch:'2023 Q1',
    status:'Released ',
  },
  {
    title:'Alder Lake P ',
    icon:false,
    description:'12th Gen Intel® Core™ mobile processor with hybrid architecture ',
    lanuch:'',
    status:'Released ',
  },
]

let All_CollectionBody = document.getElementById("ds_All-Collection-Body");
let Collection_Result = All_CollectionArr.map((element , index)=>{
    return `<tr ${index}>
                    <td class="ds_td-title">
                       <a href="" class="ds_td-anker">${element.title}</a>
                      ${ element.icon ? `<i class="fa-solid fa-lock ms-2 mt-1 ds_table-icon "></i>` : ``}
                     </td>
                     <td class="ds_td-title">
                        ${element.description}
                     </td>
                     <td class="ds_td-title">
                        ${element.lanuch ? element.lanuch : ' '}
                     </td>
                     <td class="ds_td-title">
                       ${element.status}
                    </td>
                </tr>`
}).join(" ")
All_CollectionBody.innerHTML += Collection_Result 


let Content_TypeArr = [
  {
    title:'Declarations of Conformity (DoC) ',
    icon:false,
    description:'Declarations of Conformity (DoC)',
    lanuch:'',
    status:'Released ',
  },
  {
    title:'Installation Guides ',
    icon:false,
    description:'Developer installation guides collection. ',
    lanuch:'2018 Q1',
    status:'Released ',
  },
  {
    title:'Intel Product Qualification Reports ',
    icon:false,
    description:'Product Quality and Reliability Data in support of Intel® Production Release Qualification ',
    lanuch:'2023 Q1',
    status:'Released ',
  },
  {
    title:'Manufacturing Advantage Services (MAS)',
    icon:false,
    description:'Manufacturing Advantage Service (MAS) documentation is intended to define a general reference process for manufacturing with Intel products and technologies. ',
    lanuch:'',
    status:'Released ',
  },
]

let Content_TypeBody = document.getElementById("ds_Content-Type-Body");
let Content_TypeResult = Content_TypeArr.map((element , index)=>{
    return `<tr ${index}>
                    <td class="ds_td-title">
                       <a href="" class="ds_td-anker">${element.title}</a>
                      ${ element.icon ? `<i class="fa-solid fa-lock ms-2 mt-1 ds_table-icon "></i>` : ``}
                     </td>
                     <td class="ds_td-title">
                        ${element.description}
                     </td>
                     <td class="ds_td-title">
                        ${element.lanuch ? element.lanuch : ' '}
                     </td>
                     <td class="ds_td-title">
                       ${element.status}
                    </td>
                </tr>`
}).join(" ")
Content_TypeBody.innerHTML += Content_TypeResult




document.addEventListener("DOMContentLoaded", function() {
    const accordionContainer = document.getElementById("accordionContainer");

    // Sample user data array
    const userData = [
        {
            title: "Accordion Item #1",
            content: [
                { title: "Nested Accordion Item #1", content: "Content for nested item #1 in accordion #1" },
                { title: "Nested Accordion Item #2", content: "Content for nested item #2 in accordion #1" },
                { title: "Nested Accordion Item #3", content: "Content for nested item #3 in accordion #1" }
            ]
        },
        {
            title: "Accordion Item #2",
            content: [
                { title: "Nested Accordion Item #1", content: "Content for nested item #1 in accordion #2" },
                { title: "Nested Accordion Item #2", content: "Content for nested item #2 in accordion #2" },
                { title: "Nested Accordion Item #3", content: "Content for nested item #3 in accordion #2" }
            ]
        },
        {
            title: "Accordion Item #3",
            content: [
                { title: "Nested Accordion Item #1", content: "Content for nested item #1 in accordion #3" },
                { title: "Nested Accordion Item #2", content: "Content for nested item #2 in accordion #3" },
                { title: "Nested Accordion Item #3", content: "Content for nested item #3 in accordion #3" }
            ]
        },
        {
          title: "Accordion Item #4",
          content: [
              { title: "Nested Accordion Item #1", content: "Content for nested item #1 in accordion #4" },
              { title: "Nested Accordion Item #2", content: "Content for nested item #2 in accordion #4" },
              { title: "Nested Accordion Item #3", content: "Content for nested item #3 in accordion #4" }
          ]
      }
    ];

    function createAccordionItem(parentId, accordionId, headerId, collapseId, title, content, isNested = false) {
        const accordionItem = document.createElement('div');
        accordionItem.classList.add('accordion-item');

        const accordionHeader = document.createElement('h2');
        accordionHeader.classList.add('accordion-header');
        accordionHeader.id = headerId;

        const button = document.createElement('button');
        button.classList.add('accordion-button', 'collapsed');
        button.type = 'button';
        button.dataset.bsToggle = 'collapse';
        button.dataset.bsTarget = `#${collapseId}`;
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-controls', collapseId);
        button.textContent = title;

        accordionHeader.appendChild(button);
        accordionItem.appendChild(accordionHeader);

        const collapse = document.createElement('div');
        collapse.id = collapseId;
        collapse.classList.add('accordion-collapse', 'collapse');
        collapse.setAttribute('aria-labelledby', headerId);
        collapse.dataset.bsParent = `#${parentId}`;

        const accordionBody = document.createElement('div');
        accordionBody.classList.add('accordion-body');

        if (isNested) {
            accordionBody.textContent = content;
        } else {
            const nestedAccordion = document.createElement('div');
            nestedAccordion.classList.add('accordion', 'accordion-flush');
            nestedAccordion.id = `nestedAccordion${accordionId}`;

            content.forEach((nestedItem, index) => {
                const nestedTitle = nestedItem.title;
                const nestedContent = nestedItem.content;
                const nestedHeaderId = `nested-flush-heading${accordionId}-${index + 1}`;
                const nestedCollapseId = `nested-flush-collapse${accordionId}-${index + 1}`;
                const nestedAccordionItem = createAccordionItem(`nestedAccordion${accordionId}`, `${accordionId}-${index + 1}`, nestedHeaderId, nestedCollapseId, nestedTitle, nestedContent, true);
                nestedAccordion.appendChild(nestedAccordionItem);
            });

            accordionBody.appendChild(nestedAccordion);
        }

        collapse.appendChild(accordionBody);
        accordionItem.appendChild(collapse);

        return accordionItem;
    }

    const mainAccordion = document.createElement('div');
    mainAccordion.classList.add('accordion', 'accordion-flush');
    mainAccordion.id = 'accordionFlushExample';

    userData.forEach((item, index) => {
        const title = item.title;
        const content = item.content;
        const headerId = `flush-heading${index + 1}`;
        const collapseId = `flush-collapse${index + 1}`;
        const accordionItem = createAccordionItem('accordionFlushExample', index + 1, headerId, collapseId, title, content);
        mainAccordion.appendChild(accordionItem);
    });

    accordionContainer.appendChild(mainAccordion);
});

