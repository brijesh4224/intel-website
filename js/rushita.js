document.addEventListener('DOMContentLoaded', function() {
    const scrollMenu = document.getElementById('scrollMenu');
    const scrollMenuOffset = scrollMenu.offsetTop;
    const menuItems = document.querySelectorAll('.k_item a');

    function setActiveTab() {
        const fromTop = window.scrollY;

        menuItems.forEach(link => {
            const section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > scrollMenuOffset) {
            scrollMenu.classList.add('fixed');
        } else {
            scrollMenu.classList.remove('fixed');
        }

        setActiveTab();
    });
    setActiveTab();
});

function playVideo() {
    var video = document.getElementById('myVideo');
    var playIcon = document.querySelector('.play-icon');

    video.play();
    playIcon.style.display = 'none';

    video.addEventListener('pause', function () {
        playIcon.style.display = 'block';
    });

    video.addEventListener('play', function () {
        playIcon.style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', function() {
const scrollMenu = document.getElementById('scrollMenu');
const scrollMenuOffset = scrollMenu.offsetTop;

window.addEventListener('scroll', function() {
if (window.pageYOffset > scrollMenuOffset) {
    scrollMenu.classList.add('fixed');
} else {
    scrollMenu.classList.remove('fixed');
}
});


document.addEventListener('DOMContentLoaded', function() {
const tabItems = document.querySelectorAll('.k_item a');

tabItems.forEach(item => {
item.addEventListener('click', function(e) {
e.preventDefault();

tabItems.forEach(tab => tab.classList.remove('active'));

this.classList.add('active');

const targetId = this.getAttribute('href');
document.querySelector(targetId).scrollIntoView({behavior: 'smooth'});
});
});


tabItems[0].classList.add('active');
});
});

document.addEventListener('DOMContentLoaded', function () {
    const submenuToggles = document.querySelectorAll('.k_plink');

    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            const submenuId = this.id.replace('-link', '-submenu');
            const submenu = document.getElementById(submenuId);
            const isActive = submenu.classList.contains('active');

            document.querySelectorAll('.k_submenu1').forEach(menu => {
                menu.classList.remove('active');
            });

            document.querySelectorAll('.fa-angle-down').forEach(icon => {
                icon.classList.remove('rotated');
            });

            if (!isActive) {
                submenu.classList.add('active');
                this.querySelector('.fa-angle-up').classList.add('rotated');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const scrollMenu = document.getElementById('scrollMenu');
    const scrollMenuOffset = scrollMenu.offsetTop;
    const menuItems = document.querySelectorAll('.k_item a');

    function setActiveTab() {
        const fromTop = window.scrollY;

        menuItems.forEach(link => {
            const section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > scrollMenuOffset) {
            scrollMenu.classList.add('fixed');
        } else {
            scrollMenu.classList.remove('fixed');
        }

        setActiveTab();
    });
    setActiveTab();
});



document.addEventListener('DOMContentLoaded', function() {
    var productInfoLink = document.getElementById('productInfoLink');
    var productInfoSection = document.getElementById('productInfoSection');
  
    productInfoLink.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default link behavior
      
      // Toggle the visibility of the section
      if (document.getElementById('productInfoSection').style.display !== 'none') {
        console.log('Product Information section is open');
      } else {
        console.log('Product Information section is closed');
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.k_menu li a, .k_submenu li a, .k_petamenu li a');

    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            menuItems.forEach(i => i.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');
            if (this.classList.contains('k_submenu-toggle') || this.classList.contains('k_petamenu-toggle')) {
                e.preventDefault();
                this.classList.toggle('active');
                this.nextElementSibling.classList.toggle('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
const stickySection = document.getElementById('k_sticky-section');
const stickyOffset = stickySection.offsetTop;

window.addEventListener('scroll', function() {
if (window.pageYOffset >= stickyOffset) {
    stickySection.classList.add('sticky');
} else {
    stickySection.classList.remove('sticky');
}
});

document.addEventListener('DOMContentLoaded', function() {
const tabButtons = document.querySelectorAll('.k_btn');

tabButtons.forEach(button => {
button.addEventListener('click', function(e) {
    e.preventDefault();
    
    tabButtons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    const tabId = this.getAttribute('data-tab');
    console.log(`Tab ${tabId} clicked`);
});
});
});
});
// const processorData = [
//     {
//       name: "Intel® Xeon® w5-3425 Processor (30M Cache, 3.20 GHz)",
//       launchDate: "Q1'23",
//       cores: 12,
//       maxTurboFreq: "4.60 GHz",
//       baseFreq: "	3.20 GHz",
//       cache: "30 MB Intel® Smart Cache",
//       tdp: "",
//       graphics: ""
//     },
//     {
//       name: "Intel® Xeon® w9-3495X Processor (105M Cache, 1.90 GHz)",
//       launchDate: "Q1'23",
//       cores: 56,
//       maxTurboFreq: "4.80 GHz",
//       baseFreq: "1.90 GHz",
//       cache: "105 MB Intel® Smart Cache",
//       tdp: "",
//       graphics: ""
//     },
//     {
//       name: "Intel® Xeon® w9-3495X Processor (105M Cache, 1.90 GHz)",
//       launchDate: "Q1'23",
//       cores: 6,
//       maxTurboFreq: "4.20 GHz",
//       baseFreq: "	2.10 GHz",
//       cache: "15 MB Intel® Smart Cache",
//       tdp: "",
//       graphics: ""
//     },
//     {
//       name: "Intel® Xeon® w9-3495X Processor (105M Cache, 1.90 GHz)",
//       launchDate: "Q1'23",
//       cores: 56,
//       maxTurboFreq: "4.80 GHz",
//       baseFreq: "1.90 GHz",
//       cache: "105 MB Intel® Smart Cache",
//       tdp: "",
//       graphics: ""
//     },
//     {
//       name: "Intel® Xeon® w9-3495X Processor (105M Cache, 1.90 GHz)",
//       launchDate: "Q1'23",
//       cores: 56,
//       maxTurboFreq: "4.80 GHz",
//       baseFreq: "1.90 GHz",
//       cache: "105 MB Intel® Smart Cache",
//       tdp: "",
//       graphics: ""
//     },
//   ];

//   function createTable(data) {
//     const tableContainer = document.createElement('div');
//     tableContainer.className = 'k_container11';

//     const table = document.createElement('table');
//     table.className = 'custom-table';

//     const thead = document.createElement('thead');
//     const headerRow = document.createElement('tr');
//     headerRow.className = 'k_xeontablebg k_rightborder1 k_xeoncenter';
//   // headers.forEach(headerText => {
//     //   const th = document.createElement('th');
//     //   th.textContent = headerText;
//     //   headerRow.appendChild(th);
//     // });
//     const headers = ['Product Name', 'Launch Date', '# of Cores', 'Max Turbo Frequency', 'Processor Base Frequency', 'Cache', 'TDP', 'Processor Graphics ‡'];
  
//     headers.forEach(headerText => {
//         const th = document.createElement('th');
    
//         const link = document.createElement('a');
//         link.href = "#"; 
//         link.textContent = headerText;
//         link.style.cursor = 'pointer'; 
//         link.style.textDecoration = 'none'; 
//         link.style.color = 'black';

//         th.appendChild(link);
        
//         if (headerText === 'Product Name') {
//             th.id = 'product'; // Set the ID to "product"
//         }
//         headerRow.appendChild(th);
//       });
    

//     thead.appendChild(headerRow);
//     table.appendChild(thead);

//     const tbody = document.createElement('tbody');

//     data.forEach((processor, index) => {
//       const row = document.createElement('tr');
//       row.className = index % 2 === 0 ? 'k_xeontablebg1' : '';

//       const cells = [
//         `<input type="checkbox" class="k_checkbox"><a href="#" class="k_plink k_intext1blue">${processor.name}</a>`,
//         processor.launchDate,
//         processor.cores,
//         processor.maxTurboFreq,
//         processor.baseFreq,
//         processor.cache,
//         processor.tdp,
//         processor.graphics
//       ];

//       cells.forEach((cellContent, cellIndex) => {
//         const td = document.createElement('td');
//         td.innerHTML = cellContent;
//         row.appendChild(td);
//       });

//       tbody.appendChild(row);
//     });

//     table.appendChild(tbody);
//     tableContainer.appendChild(table);

//     return tableContainer;
//   }

//   document.addEventListener('DOMContentLoaded', () => {
//     const tableContainer = createTable(processorData);
//     document.getElementById('tableContainer').appendChild(tableContainer);
//   });


// const processorData = [
//     {
//       name: "Intel® Xeon® w5-3425 Processor (30M Cache, 3.20 GHz)",
//       launchDate: "Q1'23",
//       cores: 12,
//       maxTurboFreq: "4.60 GHz",
//       baseFreq: "3.20 GHz",
//       cache: "30 MB Intel® Smart Cache",
//       tdp: "",
//       graphics: ""
//     },
//     {
//       name: "Intel® Xeon® w9-3495X Processor (105M Cache, 1.90 GHz)",
//       launchDate: "Q1'23",
//       cores: 56,
//       maxTurboFreq: "4.80 GHz",
//       baseFreq: "1.90 GHz",
//       cache: "105 MB Intel® Smart Cache",
//       tdp: "",
//       graphics: ""
//     },
//     {
//       name: "Intel® Xeon® w9-3495X Processor (105M Cache, 1.90 GHz)",
//       launchDate: "Q1'23",
//       cores: 6,
//       maxTurboFreq: "4.20 GHz",
//       baseFreq: "2.10 GHz",
//       cache: "15 MB Intel® Smart Cache",
//       tdp: "",
//       graphics: ""
//     },
//     {
//       name: "Intel® Xeon® w9-3495X Processor (105M Cache, 1.90 GHz)",
//       launchDate: "Q1'23",
//       cores: 56,
//       maxTurboFreq: "4.80 GHz",
//       baseFreq: "1.90 GHz",
//       cache: "105 MB Intel® Smart Cache",
//       tdp: "",
//       graphics: ""
//     },
//     {
//       name: "Intel® Xeon® w9-3495X Processor (105M Cache, 1.90 GHz)",
//       launchDate: "Q1'23",
//       cores: 56,
//       maxTurboFreq: "4.80 GHz",
//       baseFreq: "1.90 GHz",
//       cache: "105 MB Intel® Smart Cache",
//       tdp: "",
//       graphics: ""
//     },
//   ];
  
//   function createTable(data) {
//     const tableContainer = document.createElement('div');
//     tableContainer.className = 'k_container11';
  
//     const table = document.createElement('table');
//     table.className = 'custom-table';
  
//     const thead = document.createElement('thead');
//     const headerRow = document.createElement('tr');
//     headerRow.className = 'k_xeontablebg k_rightborder1 k_xeoncenter';
  
//     const headers = ['Product Name', 'Launch Date', '# of Cores', 'Max Turbo Frequency', 'Processor Base Frequency', 'Cache', 'TDP', 'Processor Graphics ‡'];
  
//     headers.forEach(headerText => {
//       const th = document.createElement('th');
  
//       const link = document.createElement('a');
//       link.href = "#";
//       link.textContent = headerText;
//       link.style.cursor = 'pointer';
//       link.style.textDecoration = 'none';
//       link.style.color = 'black';
  
//       if (headerText === 'Product Name') {
//         link.id = 'productNameHeader';
//       } else if (headerText === 'Launch Date') {
//         link.id = 'launchDateHeader';
//       }
  
//       th.appendChild(link);
//       headerRow.appendChild(th);
//     });
  
//     thead.appendChild(headerRow);
//     table.appendChild(thead);
  
//     const tbody = document.createElement('tbody');
  
//     data.forEach((processor, index) => {
//       const row = document.createElement('tr');
//       row.className = index % 2 === 0 ? 'k_xeontablebg1' : '';
  
//       const cells = [
//         `<input type="checkbox" class="k_checkbox"><a href="#" class="k_plink k_intext1blue">${processor.name}</a>`,
//         processor.launchDate,
//         processor.cores,
//         processor.maxTurboFreq,
//         processor.baseFreq,
//         processor.cache,
//         processor.tdp,
//         processor.graphics
//       ];
  
//       cells.forEach((cellContent, cellIndex) => {
//         const td = document.createElement('td');
//         td.innerHTML = cellContent;
//         row.appendChild(td);
//       });
  
//       tbody.appendChild(row);
//     });
  
//     table.appendChild(tbody);
//     tableContainer.appendChild(table);
  
//     return tableContainer;
//   }
  
//   function showProductContent(event) {
//     event.preventDefault();
//     const contentDiv = document.createElement('div');
//     contentDiv.innerHTML = `
//       <h2>Product Information</h2>
//       <p>This section contains detailed information about the products.</p>
//       <button id="backToTable">Back to Table</button>
//     `;
  
//     document.getElementById('tableContainer').innerHTML = '';
//     document.getElementById('tableContainer').appendChild(contentDiv);
  
//     document.getElementById('backToTable').addEventListener('click', showTable);
//   }
  
//   function showLaunchDateContent(event) {
//     event.preventDefault();
//     const contentDiv = document.createElement('div');
//     contentDiv.innerHTML = `
//       <h2>Launch Dates</h2>
//       <p>This section contains information about product launch dates.</p>
//       <button id="backToTable">Back to Table</button>
//     `;
  
//     document.getElementById('tableContainer').innerHTML = '';
//     document.getElementById('tableContainer').appendChild(contentDiv);
  
//     document.getElementById('backToTable').addEventListener('click', showTable);
//   }
  
//   function showTable() {
//     const tableContainer = createTable(processorData);
//     document.getElementById('tableContainer').innerHTML = '';
//     document.getElementById('tableContainer').appendChild(tableContainer);
  
//     document.getElementById('productNameHeader').addEventListener('click', showProductContent);
//     document.getElementById('launchDateHeader').addEventListener('click', showLaunchDateContent);
//   }
  
//   document.addEventListener('DOMContentLoaded', () => {
//     showTable();
//   }); 


const processorData = [
    {
      name: "Intel® Xeon® w5-3425 Processor (30M Cache, 3.20 GHz)",
      launchDate: "Q1'23",
      cores: 12,
      maxTurboFreq: "4.60 GHz",
      baseFreq: "3.20 GHz",
      cache: "30 MB Intel® Smart Cache",
      tdp: "",
      graphics: ""
    },
    {
      name: "Intel® Xeon® w9-3495X Processor (105M Cache, 1.90 GHz)",
      launchDate: "Q1'23",
      cores: 56,
      maxTurboFreq: "4.80 GHz",
      baseFreq: "1.90 GHz",
      cache: "105 MB Intel® Smart Cache",
      tdp: "",
      graphics: ""
    },
    {
      name: "Intel® Xeon® w9-3495X Processor (105M Cache, 1.90 GHz)",
      launchDate: "Q1'23",
      cores: 6,
      maxTurboFreq: "4.20 GHz",
      baseFreq: "2.10 GHz",
      cache: "15 MB Intel® Smart Cache",
      tdp: "",
      graphics: ""
    },
    {
      name: "Intel® Xeon® w9-3495X Processor (105M Cache, 1.90 GHz)",
      launchDate: "Q1'23",
      cores: 56,
      maxTurboFreq: "4.80 GHz",
      baseFreq: "1.90 GHz",
      cache: "105 MB Intel® Smart Cache",
      tdp: "",
      graphics: ""
    },
    {
      name: "Intel® Xeon® w9-3495X Processor (105M Cache, 1.90 GHz)",
      launchDate: "Q1'23",
      cores: 56,
      maxTurboFreq: "4.80 GHz",
      baseFreq: "1.90 GHz",
      cache: "105 MB Intel® Smart Cache",
      tdp: "",
      graphics: ""
    },
  ];
  
  function createTable(data) {
    const tableContainer = document.createElement('div');
    tableContainer.className = 'k_container11';
  
    const table = document.createElement('table');
    table.className = 'custom-table';
  
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.className = 'k_xeontablebg k_rightborder1 k_xeoncenter';
  
    const headers = ['Product Name', 'Launch Date', '# of Cores', 'Max Turbo Frequency', 'Processor Base Frequency', 'Cache', 'TDP', 'Processor Graphics ‡'];
  
    headers.forEach(headerText => {
      const th = document.createElement('th');
  
      const link = document.createElement('a');
      link.href = "#";
      link.textContent = headerText;
      link.style.cursor = 'pointer';
      link.style.textDecoration = 'none';
      link.style.color = 'black';
      link.setAttribute('data-tab', headerText.toLowerCase().replace(/ /g, '-'));
  
      th.appendChild(link);
      headerRow.appendChild(th);
    });
  
    thead.appendChild(headerRow);
    table.appendChild(thead);
  
    const tbody = document.createElement('tbody');
  
    data.forEach((processor, index) => {
      const row = document.createElement('tr');
      row.className = index % 2 === 0 ? 'k_xeontablebg1' : '';
  
      const cells = [
        `<input type="checkbox" class="k_checkbox"><a href="#" class="k_plink k_intext1blue">${processor.name}</a>`,
        processor.launchDate,
        processor.cores,
        processor.maxTurboFreq,
        processor.baseFreq,
        processor.cache,
        processor.tdp,
        processor.graphics
      ];
  
      cells.forEach((cellContent, cellIndex) => {
        const td = document.createElement('td');
        td.innerHTML = cellContent;
        row.appendChild(td);
      });
  
      tbody.appendChild(row);
    });
  
    table.appendChild(tbody);
    tableContainer.appendChild(table);
  
    return tableContainer;
  }
  
  function switchTab(event) {
    event.preventDefault();
    const tabId = event.target.getAttribute('data-tab');
    
    document.getElementById('tableContainer').innerHTML = '';
  
    createTabContent(tabId);
  }
  
  function createTabContent(tabId) {
    const contentDiv = document.createElement('div');
    contentDiv.id = tabId;
    contentDiv.className = 'tab-content';
  
    let content = '';
    switch(tabId) {
      case 'product-name':
        content = `
          <h2>Product Information</h2>
          <p>This section contains detailed information about the products.</p>
        `;
        break;
      case 'launch-date':
        content = `
          <h2>Launch Dates</h2>
          <p>This section contains information about product launch dates.</p>
        `;
        break;
      case 'of-cores':
        content = `
          <h2>Core Information</h2>
          <p>This section provides details about the number of cores in each processor.</p>
        `;
        break;
      case 'max-turbo-frequency':
        content = `
          <h2>Max Turbo Frequency</h2>
          <p>Here you can find information about the maximum turbo frequencies of the processors.</p>
        `;
        break;
      case 'processor-base-frequency':
        content = `
          <h2>Base Frequency</h2>
          <p>This tab shows the base frequencies of the processors.</p>
        `;
        break;
      case 'cache':
        content = `
          <h2>Cache Information</h2>
          <p>Details about the cache sizes of the processors are provided here.</p>
        `;
        break;
      case 'tdp':
        content = `
          <h2>TDP Information</h2>
          <p>This section contains information about the Thermal Design Power of the processors.</p>
        `;
        break;
      case 'processor-graphics':
        content = `
          <h2>Processor Graphics</h2>
          <p>Information about integrated graphics in the processors can be found here.</p>
        `;
        break;
      default:
        content = `<p>Content for ${tabId} tab</p>`;
    }
  
    content += `<button id="backToTable">Back to Table</button>`;
  
    contentDiv.innerHTML = content;
    document.getElementById('tableContainer').appendChild(contentDiv);
  
    document.getElementById('backToTable').addEventListener('click', showTable);
  }
  
  function showTable() {
    const tableContainer = createTable(processorData);
    document.getElementById('tableContainer').innerHTML = '';
    document.getElementById('tableContainer').appendChild(tableContainer);
  
    document.querySelectorAll('th a').forEach(link => {
      link.addEventListener('click', switchTab);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    showTable();
  });