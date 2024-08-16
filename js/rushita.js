document.addEventListener('DOMContentLoaded', function () {
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

  window.addEventListener('scroll', function () {
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

document.addEventListener('DOMContentLoaded', function () {
  const scrollMenu = document.getElementById('scrollMenu');
  const scrollMenuOffset = scrollMenu.offsetTop;

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > scrollMenuOffset) {
      scrollMenu.classList.add('fixed');
    } else {
      scrollMenu.classList.remove('fixed');
    }
  });


  document.addEventListener('DOMContentLoaded', function () {
    const tabItems = document.querySelectorAll('.k_item a');

    tabItems.forEach(item => {
      item.addEventListener('click', function (e) {
        e.preventDefault();

        tabItems.forEach(tab => tab.classList.remove('active'));

        this.classList.add('active');

        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
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
document.addEventListener('DOMContentLoaded', function () {
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

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > scrollMenuOffset) {
      scrollMenu.classList.add('fixed');
    } else {
      scrollMenu.classList.remove('fixed');
    }

    setActiveTab();
  });
  setActiveTab();
});



document.addEventListener('DOMContentLoaded', function () {
  var productInfoLink = document.getElementById('productInfoLink');
  var productInfoSection = document.getElementById('productInfoSection');

  productInfoLink.addEventListener('click', function (e) {
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

document.addEventListener('DOMContentLoaded', function () {
  const stickySection = document.getElementById('k_sticky-section');
  const stickyOffset = stickySection.offsetTop;

  window.addEventListener('scroll', function () {
    if (window.pageYOffset >= stickyOffset) {
      stickySection.classList.add('sticky');
    } else {
      stickySection.classList.remove('sticky');
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.k_btn');

    tabButtons.forEach(button => {
      button.addEventListener('click', function (e) {
        e.preventDefault();

        tabButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        const tabId = this.getAttribute('data-tab');
        console.log(`Tab ${tabId} clicked`);
      });
    });
  });
});

const processorData = [
  {
    name: "Intel® Xeon® w5-3425 Processor (30M Cache, 3.20 GHz)",
    launchDate: "Q1'23",
    cores: 12,
    maxTurboFreq: "4.60 GHz",
    baseFreq: "3.20 GHz",
    cache: "30 MB Intel® Smart Cache",
    tdp: "270 W",
    graphics: ""
  },
  {
    name: "Intel® Xeon® w9-3495X Processor (105M Cache, 1.90 GHz)",
    launchDate: "Q1'23",
    cores: 56,
    maxTurboFreq: "4.80 GHz",
    baseFreq: "1.90 GHz",
    cache: "105 MB Intel® Smart Cache",
    tdp: "350 W",
    graphics: ""
  },
  {
    name: "Intel® Xeon® w9-3495X Processor (105M Cache, 1.90 GHz)",
    launchDate: "Q1'23",
    cores: 56,
    maxTurboFreq: "4.80 GHz",
    baseFreq: "1.90 GHz",
    cache: "105 MB Intel® Smart Cache",
    tdp: "350 W",
    graphics: ""
  },
  {
    name: "Intel® Xeon® w9-3495X Processor (105M Cache, 1.90 GHz)",
    launchDate: "Q1'23",
    cores: 56,
    maxTurboFreq: "4.80 GHz",
    baseFreq: "1.90 GHz",
    cache: "105 MB Intel® Smart Cache",
    tdp: "350 W",
    graphics: ""
  },
];

const LaunchData = [
  {
    name: "Intel® Xeon® w5-3425 Processor (30M Cache, 3.20 GHz)",
    launchDate: "	Q2'19",
    cores: 17,
    maxTurboFreq: "4.40 GHz",
    baseFreq: "3.30 GHz",
    cache: "	19.25 MB",
    tdp: "	180 W",
    graphics: ""
  },
  {
    name: "Intel® Xeon® W-3265M Processor (33M Cache, 2.70 GHz)",
    launchDate: "	Q2'19",
    cores: 17,
    maxTurboFreq: "4.40 GHz",
    baseFreq: "3.30 GHz",
    cache: "	19.25 MB",
    tdp: "	180 W",
    graphics: ""
  },
];

const CoresData = [
  {
    name: "Intel® Xeon® w5-3425 Processor (30M Cache, 3.20 GHz)",
    launchDate: "	Q2'19",
    cores: 17,
    maxTurboFreq: "4.40 GHz",
    baseFreq: "3.30 GHz",
    cache: "	19.25 MB",
    tdp: "	180 W",
    graphics: "hjkhjlkhjkhhh"
  },
  {
    name: "Intel® Xeon® W-3265M Processor (33M Cache, 2.70 GHz)",
    launchDate: "	Q2'19",
    cores: 17,
    maxTurboFreq: "4.40 GHz",
    baseFreq: "3.30 GHz",
    cache: "	19.25 MB",
    tdp: "	180 W",
    graphics: "3434"
  },
];
const FrequencyData = [
  {
    name: "Intel® Xeon® w5-3425 Processor (30M Cache, 3.20 GHz)",
    launchDate: "	Q2'19",
    cores: 17,
    maxTurboFreq: "4.40 GHz",
    baseFreq: "3.30 GHz",
    cache: "	19.25 MB",
    tdp: "	180 W",
    graphics: "hjkhjlkhjkhhh"
  },
  {
    name: "Intel® Xeon® W-3265M Processor (33M Cache, 2.70 GHz)",
    launchDate: "	Q2'19",
    cores: 17,
    maxTurboFreq: "4.40 GHz",
    baseFreq: "3.30 GHz",
    cache: "	19.25 MB",
    tdp: "	180 W",
    graphics: "5555"
  },
];
const BaseData = [
  {
    name: "Intel® Xeon® w5-3425 Processor (30M Cache, 3.20 GHz)",
    launchDate: "	Q2'19",
    cores: 17,
    maxTurboFreq: "4.40 GHz",
    baseFreq: "3.30 GHz",
    cache: "	19.25 MB",
    tdp: "	180 W",
    graphics: "hjkhjlkhjkhhh"
  },
  {
    name: "Intel® Xeon® W-3265M Processor (33M Cache, 2.70 GHz)",
    launchDate: "	Q2'19",
    cores: 17,
    maxTurboFreq: "4.40 GHz",
    baseFreq: "3.30 GHz",
    cache: "	19.25 MB",
    tdp: "	180 W",
    graphics: "3333"
  },
];
const CacheData = [
  {
    name: "Intel® Xeon® w5-3425 Processor (30M Cache, 3.20 GHz)",
    launchDate: "	Q2'19",
    cores: 17,
    maxTurboFreq: "4.40 GHz",
    baseFreq: "3.30 GHz",
    cache: "	19.25 MB",
    tdp: "	180 W",
    graphics: "hjkhjlkhjkhhh"
  },
  {
    name: "Intel® Xeon® W-3265M Processor (33M Cache, 2.70 GHz)",
    launchDate: "	Q2'19",
    cores: 17,
    maxTurboFreq: "4.40 GHz",
    baseFreq: "3.30 GHz",
    cache: "	19.25 MB",
    tdp: "	180 W",
    graphics: "qqqqq"
  },
];
const TDPData = [
  {
    name: "Intel® Xeon® w5-3425 Processor (30M Cache, 3.20 GHz)",
    launchDate: "	Q2'19",
    cores: 17,
    maxTurboFreq: "4.40 GHz",
    baseFreq: "3.30 GHz",
    cache: "	19.25 MB",
    tdp: "	180 W",
    graphics: "hjkhjlkhjkhhh"
  },
  {
    name: "Intel® Xeon® W-3265M Processor (33M Cache, 2.70 GHz)",
    launchDate: "	Q2'19",
    cores: 17,
    maxTurboFreq: "4.40 GHz",
    baseFreq: "3.30 GHz",
    cache: "	19.25 MB",
    tdp: "	180 W",
    graphics: "123"
  },
];
const GraphicsData = [
  {
    name: "Intel® Xeon® w5-3425 Processor (30M Cache, 3.20 GHz)",
    launchDate: "	Q2'19",
    cores: 17,
    maxTurboFreq: "4.40 GHz",
    baseFreq: "3.30 GHz",
    cache: "	19.25 MB",
    tdp: "	180 W",
    graphics: "hjkhjlkhjkhhh"
  },
  {
    name: "Intel® Xeon® W-3265M Processor (33M Cache, 2.70 GHz)",
    launchDate: "	Q2'19",
    cores: 17,
    maxTurboFreq: "4.40 GHz",
    baseFreq: "3.30 GHz",
    cache: "	19.25 MB",
    tdp: "	180 W",
    graphics: ""
  },
];


function createTable(data, activeTab = 'product_name') {
  const outerContainer = document.createElement('div');
  // outerContainer.className = 'k_table-container';
  // outerContainer.style.width = '100%';
  outerContainer.style.overflowX = 'auto';

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
    link.addEventListener('click', () => changeTab(headerText.toLowerCase().replace(/ /g, '_')));
    th.appendChild(link);
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  data.forEach((item, index) => {
    const row = document.createElement('tr');
    row.className = index % 2 === 0 ? 'k_xeontablebg1' : '';

    const cells = [
      `<input type="checkbox" class="k_checkbox"><a href="#" class="k_plink k_intext1blue">${item.name}</a>`,
      item.launchDate,
      item.cores,
      item.maxTurboFreq,
      item.baseFreq,
      item.cache,
      item.tdp,
      item.graphics
    ];

    cells.forEach((cellContent, cellIndex) => {
      const td = document.createElement('td');
      td.innerHTML = cellContent;
      if (headers[cellIndex].toLowerCase().replace(/ /g, '_') === activeTab) {
        td.classList.add('active-column');
      }
      row.appendChild(td);
    });

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  tableContainer.appendChild(table);
  outerContainer.appendChild(tableContainer);

  return outerContainer;
}

function changeTab(tabName) {
  showTable(tabName);
}

function showTable(activeTab = 'product_name') {
  let dataToUse;
  switch (activeTab) {
    case 'launch_date':
      dataToUse = LaunchData;
      break;
    case '#_of_cores':
      dataToUse = CoresData;
      break;
    case 'max_turbo_frequency':
      dataToUse = FrequencyData;
      break;
    case 'processor_base_frequency':
      dataToUse = BaseData;
      break;
    case 'cache':
      dataToUse = CacheData;
      break;
    case 'tdp':
      dataToUse = TDPData;
      break;
    case 'processor_graphics_‡':
      dataToUse = GraphicsData;
      break;
    default:
      dataToUse = processorData;
  }

  const tableContainer = createTable(dataToUse, activeTab);
  document.getElementById('tableContainer').innerHTML = '';
  document.getElementById('tableContainer').appendChild(tableContainer);
}

document.addEventListener('DOMContentLoaded', () => {
  showTable();
});
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.k_custom-tab');
  const tabContents = document.querySelectorAll('.k_custom-tab-content');

  if (tabs.length > 0) {
      tabs[0].classList.add('active');
      tabContents[0].classList.add('active');
  }

  tabs.forEach(tab => {
      tab.addEventListener('click', function () {
          tabs.forEach(t => t.classList.remove('active'));
          tabContents.forEach(content => content.classList.remove('active'));

          this.classList.add('active');

          const targetId = this.getAttribute('data-target');
          const targetContent = document.getElementById(targetId);
          if (targetContent) {
              targetContent.classList.add('active');
          }
      });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const videos = [
      { video: document.getElementById('myVideo'), button: document.getElementById('playButton') },
      { video: document.getElementById('myVideo1'), button: document.getElementById('playButton1') },
      { video: document.getElementById('myVideo2'), button: document.getElementById('playButton2') },
      { video: document.getElementById('myVideo3'), button: document.getElementById('playButton3') }
  ];

  videos.forEach(item => {
      item.button.addEventListener('click', () => togglePlay(item.video, item.button));
      item.video.addEventListener('play', () => updatePlayButton(item.button, false));
      item.video.addEventListener('pause', () => updatePlayButton(item.button, true));
  });

  function togglePlay(video, button) {
      if (video.paused || video.ended) {
          video.play();
      } else {
          video.pause();
      }
  }

  function updatePlayButton(button, isPaused) {
      const icon = button.querySelector('i');
      if (isPaused) {
          icon.className = 'far fa-circle-play';
          button.style.display = 'block';
      } else {
          icon.className = 'far fa-circle-pause';
          button.style.display = 'none';
      }
  }
});

$(function () {
  // Show the first section by default
  $('.content-section').first().show();
  $('.k_navigation__link').first().addClass('active');

  $('.k_navigation').on('click', '.k_navigation__link', function (e) {
      e.preventDefault();
      var targetId = $(this).attr('href');
      
      // Hide all sections and remove active class from all links
      $('.content-section').hide();
      $('.k_navigation__link').removeClass('active');
      
      // Show the target section and add active class to the clicked link
      $(targetId).show();
      $(this).addClass('active');
  });
});
$(document).ready(function(){
  function initOwlCarousel() {
      if ($(window).width() <= 425) {
          $('.performance-slider').owlCarousel({
              items: 1,
              loop: true,
              margin: 10,
              nav: false,
              dots: true,
              dots:true,
              responsive: {
                  0: {
                      items: 1
                  }
              }
          });
      } else {
          $('.performance-slider').owlCarousel('destroy');
      }
  }

  initOwlCarousel();

  $(window).resize(function() {
      initOwlCarousel();
  });
});


$(document).ready(function(){
  $('.perfor-slider').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: ['<span>&lt;</span>','<span>&gt;</span>'],
      dots: true,
      items: 1,
      dotsEach: 1,
      responsive: {
                  0: {
                      items: 1
                  },
                  600: {
                      items: 3
                  },
                  1000: {
                      items: 3
                  }
              }
  });
});