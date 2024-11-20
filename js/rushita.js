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
      { video: document.getElementById('myVideo3'), button: document.getElementById('playButton3') },
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
  function initOwlCarousel() {
      if ($(window).width() <= 425) {
          $('.performance-slider2').owlCarousel({
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
          $('.performance-slider2').owlCarousel('destroy');
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
      margin: 20,
      nav: true,
      navText: ['<i class="fa-regular fa-circle-left"></i>','<i class="fa-regular fa-circle-right"></i>'],
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
$(document).ready(function(){
  $('.perfor-slider1').owlCarousel({
      loop: true,
      // margin: 20,
      nav: true,
      navText: ['<i class="fa-regular fa-circle-left"></i>','<i class="fa-regular fa-circle-right"></i>'],
      dots: true,
      items: 1,
      dotsEach: 1,
      responsive: {
                  0: {
                      items: 1
                  },
                  600: {
                      items: 1
                  },
                  1000: {
                      items: 1
                  }
              }
  });
});
const cardsData = [
  {
      imgSrc: '/img/Monika_img/rcs_9.png',
      date: 'August 8th, 2024',
      title: 'Hope for Justice Fights Modern Slavery',
      description: 'Confidential Computing aids in the fight to end modern slavery by protecting victim data.',
      cls: 'rcs_cl1',
      link: '#'
  },
  {
      imgSrc: '/img/Monika_img/rcs_10.webp',
      date: 'August 2nd, 2024',
      title: 'ENGIE Digital Optimizes Cloud Cost Spend',
      description: 'ENGIE Digital uses Intel® Cloud Optimizer to manage cloud cost, enabling it to maintain and operate its renewable assets.',
      cls: 'rcs_cl2',
      link: '#'
  },
  {
      imgSrc: '/img/Monika_img/rcs_5.avif',
      date: 'August 1st, 2024',
      title: 'Global Retailer Improves IT Operations',
      description: 'The retailer used remote management capabilities of Intel vPro® platform to maintain POS devices and back-office computers.',
      cls: 'rcs_cl3',
      link: '#'
  },
  {
      imgSrc: '/img/Monika_img/rcs_11.avif',
      date: 'July 31st, 2024',
      title: 'Project Indus Benchmarks LLM Performance in Hindi',
      description: 'EThe Indus LLM underwent benchmarking on the Intel® platform; results showed it is a robust, versatile, and efficient model.',
      cls: 'rcs_cl1',
      link: '#'
  },
  {
      imgSrc: '/img/Monika_img/rcs_12.webp',
      date: 'July 25th, 2024',
      title: 'Winning Health Optimizes LLMs in Healthcare',
      description: 'Winning Health LLM, WiNGPT, leveraging Intel® technology, meets performance demands for healthcare institutions.',
      cls: 'rcs_cl2',
      link: '#'
  },
  {
      imgSrc: '/img/Monika_img/rcs_13.webp',
      date: 'July 23rd, 2024',
      title: 'CUSD Gains Insight into Device Investment',
      description: 'Telemetry data provides visibility into CUSD’s device performance, resulting in more informed technology decisions.',
      cls: 'rcs_cl3',
      link: '#'
  },
  {
      imgSrc: '/img/Monika_img/rcs_14.webp',
      date: 'July 18th, 2024',
      title: 'CMCC Speeds Climate Change Modeling',
      description: 'CMCC improves its supercomputer architecture with Intel® Xeon® CPU Max series with HBM on existing clusters.',
      cls: 'rcs_cl1',
      link: '#'
  },
  {
      imgSrc: '/img/Monika_img/rcs_15.webp',
      date: 'July 4th, 2024',
      title: 'HCLTech Optimizes Cloud Resource Utilization',
      description: 'HCLTech implements Intel® Cloud Optimizer to better utilize cloud resources while also identifying cost-saving opportunities.',
      cls: 'rcs_cl2',
      link: '#'
  },
  {
      imgSrc: '/img/Monika_img/rcs_16.webp',
      date: 'July 4th, 2024',
      title: 'Penang Science Cluster Advances Digital Education',
      description: 'A 5G Digital School Library made digital learning resources accessible to thousands of K-12 students across the state.',
      cls: 'rcs_cl3',
      link: '#'
  },
  {
      imgSrc: '/img/Monika_img/rcs_17.webp',
      date: 'July 2nd, 2024',
      title: 'Digital Twins Platform Simplifies Venue Planning',
      description: 'A digital twinning platform creates detailed digital models for venue planning.',
      cls: 'rcs_cl1',
      link: '#'
  },
  {
      imgSrc: '/img/Monika_img/rcs_18.avif',
      date: 'July 2nd, 2024',
      title: 'AT&T Uses Open Network Equipment Model for EMUX',
      description: 'AT&T incorporates Intel® Virtual RAID on CPU for its 100/400 Gb large Ethernet multiplexer (EMUX) and core router.',
      cls: 'rcs_cl2',
      link: '#'
  },
  {
      imgSrc: '/img/Monika_img/rcs_19.avif',
      date: 'July 1st, 2024',
      title: 'Team USA’s Universally Accessible Training Site',
      description: 'Team USA’s universal accessibility platform provides easy navigation for people of any ability attending the Training Site.',
      cls: 'rcs_cl3',
      link: '#'
  },
  {
      imgSrc: '/img/Monika_img/rcs_20.webp',
      date: 'June 14th, 2024',
      title: 'IBM watsonx.data Accelerates GenAI Data Analysis',
      description: 'IBM watsonx.data integrates multiple, optimized query engines for more AI workloads in the enterprise.',
      cls: 'rcs_cl1',
      link: '#'
  },
  {
      imgSrc: '/img/Monika_img/rcs_21.webp',
      date: 'June 5th, 2024',
      title: 'DBS Bank Speeds Financial Service Software',
      description: 'DBS Bank improves derivative pricing engines’ accuracy and accelerates time to insights, resulting in lower operating costs.',
      cls: 'rcs_cl2',
      link: '#'
  },
  {
      imgSrc: '/img/Monika_img/rcs_22.png',
      date: 'May 29th, 2024',
      title: 'Nice Apparel Drives Operational Efficiency',
      description: 'Nice Apparel reacts to rapidly changing market demands with real-time data analytics and insights powered by SAP S/4HANA.',
      cls: 'rcs_cl3',
      link: '#'
  },
  {
      imgSrc: '/img/Monika_img/rcs_23.png',
      date: 'May 21st, 2024',
      title: 'Mu Sigma Develops HMT System',
      description: 'The Mu Sigma HMT system’s high accuracy, driven by Intel® technology, provides real-time tracking and actionable insights.',
      cls: 'rcs_cl1',
      link: '#'
  },
  {
      imgSrc: '/img/Monika_img/rcs_24.png',
      date: 'May 16th, 2024',
      title: 'Storm Reply Taps EC2 C7i Instances on CPUs for LLM',
      description: 'Storm Reply chose EC2 C7i instances on Intel® CPUs for LLM modeling and matched price-performance ratio of GPU-based options.',
      cls: 'rcs_cl2',
      link: '#'
  },
  {
      imgSrc: '/img/Monika_img/rcs_25.png',
      date: 'May 14th, 2024',
      title: 'ENEA Upgrades HPC Architecture',
      description: 'ENEA speeds research and bandwidth-constrained workloads with upgraded architecture, allowing a single code base to be used.',
      cls: 'rcs_cl3',
      link: '#'
  },
  {
      imgSrc: '/img/Monika_img/rcs_26.png',
      date: 'May 1st, 2024',
      title: 'Stony Brook Upgrades Seawulf Supercomputer',
      description: 'Stony Brook Universitys Seawulf is First U.S. Academic Supercomputer with Intel® Xeon® CPU Max Series.',
      cls: 'rcs_cl1',
      link: '#'
  },
  {
      imgSrc: '/img/Monika_img/rcs_27.png',
      date: 'April 13th, 2024',
      title: 'Kyoto University Enhances HPC Performance',
      description: 'ACCMS at KyotoU maximizes the Intel® Xeon® CPU Max Series to enhance the speed and eﬃciency of its scientiﬁc investigations.',
      cls: 'rcs_cl2',
      link: '#'
  }
];

const itemsPerPage = 8;
let currentPage = 1;
let isViewAll = false;
const totalPages = Math.ceil(cardsData.length / itemsPerPage);

const container = document.querySelector('.m_re_con');
const pageInput = document.getElementById('page-input');
const totalPagesElement = document.getElementById('total-pages');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageInputBottom = document.getElementById('page-input-bottom');
const totalPagesBottomElement = document.getElementById('total-pages-bottom');
const prevBtnBottom = document.getElementById('prev-btn-bottom');
const nextBtnBottom = document.getElementById('next-btn-bottom');
const totalCardsElement = document.getElementById('total-cards');
const totalCardsElement2 = document.getElementById('total-cards2');
const viewAllBtn = document.getElementById('m_re_viewAll');
const viewAllBtn2 = document.getElementById('m_re_viewAll2');
const viewLessBtn = document.getElementById('m_re_viewLess');
const paginationControls = document.querySelectorAll('.m_re_pgcon');
const topPaginationControl = document.querySelector('.m_re_pgcon.top-pagination');

totalPagesElement.textContent = totalPages;
totalPagesBottomElement.textContent = totalPages;
totalCardsElement.textContent = cardsData.length;
totalCardsElement2.textContent = cardsData.length;

function renderCards() {
  let start = (currentPage - 1) * itemsPerPage;
  let end = start + itemsPerPage;

  let paginatedCards;
  if (isViewAll) {
      paginatedCards = cardsData;
  } else {
      paginatedCards = cardsData.slice(start, end);
  }

  const cardsHTML = paginatedCards.map(card => `
      <div class="m_re_card-item ${card.cls}">
          <img class="m_re_im" src="${card.imgSrc}" alt="">
          <div>
          <div class="m_re_card-date">${card.date}</div>
          <h3 class="m_re_card-title m_subHeading m_color m_underline ">${card.title}</h3>
          </div>
          <p class="m_re_card-description">${card.description}</p>
          <a class="m_re_card-link " href="${card.link}">Learn More</a>
      </div>
  `).join('');

  container.innerHTML = cardsHTML;
  pageInput.value = currentPage;
  pageInputBottom.value = currentPage;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
  prevBtnBottom.disabled = currentPage === 1;
  nextBtnBottom.disabled = currentPage === totalPages;
}

function goToPage(page) {
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  renderCards();
}

function toggleViewAll() {
  isViewAll = !isViewAll;

  if (isViewAll) {
      paginationControls.forEach(control => control.style.display = 'none');
      viewAllBtn.style.display = 'none';
      viewLessBtn.style.display = 'inline';
      if (topPaginationControl) {
          topPaginationControl.classList.remove('m_re_pgcon');
      }
  } else {
      paginationControls.forEach(control => control.style.display = 'flex');
      viewAllBtn.style.display = 'inline';
      viewLessBtn.style.display = 'none';
      if (topPaginationControl) {
          topPaginationControl.classList.add('m_re_pgcon');
      }
      goToPage(1);
  }

  renderCards();
}

prevBtn.addEventListener('click', () => goToPage(currentPage - 1));
nextBtn.addEventListener('click', () => goToPage(currentPage + 1));
prevBtnBottom.addEventListener('click', () => goToPage(currentPage - 1));
nextBtnBottom.addEventListener('click', () => goToPage(currentPage + 1));

pageInput.addEventListener('change', () => goToPage(Number(pageInput.value)));
pageInputBottom.addEventListener('change', () => goToPage(Number(pageInputBottom.value)));

viewAllBtn.addEventListener('click', toggleViewAll);
viewAllBtn2.addEventListener('click', toggleViewAll);
viewLessBtn.addEventListener('click', toggleViewAll);

viewLessBtn.style.display = 'none';
renderCards();

$(document).ready(function () {
  $(".m_re_pgcon2").css("display", "flex");
  $("#m_re_viewAll, #m_re_viewAll2").click(function () {
      $(".m_re_pgcon2").css("display", "none");
  })
  $("#m_re_viewLess").click(function () {
      $(".m_re_pgcon2").css("display", "flex");
  })

  $("#m_re_list").css("display", "block");
  $("#m_re_card").css("display", "none");

  $(document).on('click', '#m_re_list', function () {
      $(this).css("display", "none");
      $("#m_re_card").css("display", "block");

      $(".m_re_card-item").addClass("m_cardTran1");
      $(".m_re_im").addClass("m_cardTran2");
      $(".m_re_card-link").addClass("m_cardTran3");
  });

  $(document).on('click', '#m_re_card', function () {
      $(this).css("display", "none");
      $("#m_re_list").css("display", "block");

      $(".m_re_card-item").removeClass("m_cardTran1");
      $(".m_re_im").removeClass("m_cardTran2");
      $(".m_re_card-link").removeClass("m_cardTran3");
  });

  $(".m_re_filswitch, .m_re_cro").click(function () {
      $(".m_re_fil").slideToggle("slow");
  });
})


// Refine Filter
document.querySelectorAll('.m_re_dropdownBtn').forEach(button => {
  button.addEventListener('click', (e) => {
      e.stopPropagation();
      const dropdownContent = button.nextElementSibling;
      const isVisible = dropdownContent.style.display === 'block';

      document.querySelectorAll('.m_re_dropdownContent').forEach(dropdown => {
          dropdown.style.display = 'none';
          dropdown.previousElementSibling.classList.remove('active');
      });

      if (!isVisible) {
          dropdownContent.style.display = 'block';
          button.classList.add('active');
      } else {
          dropdownContent.style.display = 'none';
          button.classList.remove('active');
      }
  });
});

window.addEventListener('click', function (e) {
  if (!e.target.closest('.m_re_dropdown')) {
      document.querySelectorAll('.m_re_dropdownContent').forEach(dropdown => {
          dropdown.style.display = 'none';
          dropdown.previousElementSibling.classList.remove('active');
      });
  }
});

const selectedValuesContainer = document.querySelector('.selectedValues');
const filterContainer = document.querySelector('.m_re_fcon');

document.querySelectorAll('.m_re_customCheckbox').forEach(checkbox => {
  checkbox.addEventListener('change', function () {
      updateSelectedValues();
      toggleFilterContainer();
  });
});

function updateSelectedValues() {
  selectedValuesContainer.innerHTML = '';

  document.querySelectorAll('.m_re_customCheckbox:checked').forEach(checkedBox => {
      const valueSpan = document.createElement('div');
      valueSpan.textContent = checkedBox.value;

      const removeBtn = document.createElement('span');
      removeBtn.innerHTML = '&times;';
      removeBtn.classList.add('remove-btn');

      valueSpan.appendChild(removeBtn);

      selectedValuesContainer.appendChild(valueSpan);

      removeBtn.addEventListener('click', function () {
          document.querySelector(`.m_re_customCheckbox[value="${checkedBox.value}"]`).checked = false;
          valueSpan.remove();
          toggleFilterContainer();
      });
  });
}

function toggleFilterContainer() {
  const hasSelectedValues = document.querySelectorAll('.m_re_customCheckbox:checked').length > 0;
  filterContainer.style.display = hasSelectedValues ? 'block' : 'none';
}

document.querySelector('.m_re_fval p').addEventListener('click', function () {
  document.querySelectorAll('.m_re_customCheckbox').forEach(checkbox => {
      checkbox.checked = false;
  });
  selectedValuesContainer.innerHTML = '';
  toggleFilterContainer();
});

toggleFilterContainer();

document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.k_btn a');
  
  function removeActiveClass() {
      document.querySelectorAll('.k_btn').forEach(btn => {
          btn.classList.remove('active');
      });
  }

  function activateLink(targetId) {
      document.querySelectorAll('.k_btn').forEach(btn => {
          const link = btn.querySelector('a');
          if (link.getAttribute('href') === `#${targetId}`) {
              btn.classList.add('active');
          }
      });
  }

  function onScroll() {
      let currentSection = '';
      sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;
          const sectionBottom = section.getBoundingClientRect().bottom;
          
          if (sectionTop <= 100 && sectionBottom >= 100) {
              currentSection = section.getAttribute('id');
          }
      });

      if (currentSection) {
          removeActiveClass();
          activateLink(currentSection);
      }
  }

  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', onScroll);
  
  // Initial check on page load
  onScroll();
});

var VK_techical_library_data = [
  {
      title: "Case Study: Emotion Detection & Classification from Audio Samples",
      id: "771106",
      date: "09/10/24",
      version: "Original",
      bookmark: false,
      download: false,
      file: "URL",
      content: "Tutorials",
      description: "Use a deep neural network to detect underlying emotions in recorded speech samples.",
      status: "Updated"
  },
  {
      title: "GeekBench Execution Environments and Optimization",
      id: "832658",
      date: "09/09/24",
      version: "Original",
      bookmark: false,
      download: false,
      file: "URL",
      content: "Technical Articles",
      description: "A Deep Dive into GeekBench Execution Environments and Performance Optimization",
      status: "New"
  },
  {
      title: "Gaming Workloads in VMs through Guest Halt Polling",
      id: "832657",
      date: "09/09/24",
      version: "Original",
      bookmark: false,
      download: false,
      file: "URL",
      content: "Technical Articles",
      description: "Enhancing Performance of Gaming Workloads in Virtual Machines through Guest Halt Polling Optimization",
      status: "New"
  },
  {
      title: "Optimization Guide for ChromeOS Libraries",
      id: "832654",
      date: "09/09/24",
      version: "Original",
      bookmark: false,
      download: false,
      file: "URL",
      content: "Technical Articles",
      description: "Hardware Profile Guided Optimization Usage Guide for ChromeOS Libraries",
      status: "New"
  },
  {
      title: "Optimizing LLC for Steam Gaming on ChromeOS",
      id: "832650",
      date: "09/09/24",
      version: "Original",
      bookmark: false,
      download: false,
      file: "URL",
      content: "Technical Articles",
      description: "Optimizing Last-Level Cache Allocation for Enhanced Steam Gaming Performance on ChromeOS",
      status: "New"
  },
  {
      title: "Optimizing Mining and Extraction Operations and Improving Ore Grade Management with NTWIST’s nVision POSOC Application",
      id: "832561",
      date: "09/09/24",
      version: "361291-001",
      bookmark: true,
      download: true,
      file: "pdf (1.65 MB)",
      content: "Use Cases",
      description: "NTWIST nVision Prediction of Oil Sands Ore Characteristics (POSOC) Application helps extraction and processing operators enhance productivity and quality control through real-time data-driven insights",
      status: "New"
  },
  {
      title: "The Gamma TITANUS EYEoT Solution Accelerates Smart Transformation of Transportation",
      id: "832529",
      date: "09/08/24",
      version: "1",
      bookmark: true,
      download: true,
      file: "pdf (3.53 MB)",
      content: "White Papers",
      description: "Gamma's TITANUS EYEoT smart transportation solution integrates algorithms such as number plate and vehicle recognition to efficiently analyze video in smart parking and traffic behavior situations.",
      status: "New"
  },
  {
      title: "Hummingbirds AI Guacamole",
      id: "832523",
      date: "09/08/24",
      version: "1",
      bookmark: true,
      download: true,
      file: "Partner Briefs",
      content: "Tutorials",
      description: "Using a suite of advanced vision AI algorithms, Guacamole processes webcam footage in real-time to support continuous re-authentication of users through facial biometrics.",
      status: "New"
  },
  {
      title: "Siena Analytics - Siena Insights Solution Brief",
      id: "832503",
      date: "09/07/24",
      version: "1",
      bookmark: true,
      download: true,
      file: "pdf (610 KB)",
      content: "Solution Briefs",
      description: "Improving and optimizing logistics for smarter utilization and understanding available space with Siena Analytics.",
      status: "New"
  },
  {
      title: "Top Tips and Tricks for LLM Fine-tuning and Inference",
      id: "830925",
      date: "09/07/24",
      version: "Original",
      bookmark: false,
      download: false,
      file: "URL",
      content: "Technical Articles",
      description: "This guide provides top tips and tricks for LLM Fine-tuning and Inference",
      status: "Updated"
  },
  {
      title: "How to deploy AI applications on AI PCs",
      id: "830175",
      date: "09/07/24",
      version: "Original",
      bookmark: false,
      download: false,
      file: "URL",
      content: "Technical Articles",
      description: "An Easy Guide to deploying AI Applications on AI PCs",
      status: "Updated"
  },
  {
      title: "Developer's Guide to Adapting to Enterprise AI",
      id: "832269",
      date: "09/07/24",
      version: "Original",
      bookmark: false,
      download: false,
      file: "URL",
      content: "Technical Articles",
      description: "Developer's Guide to Adapting to Enterprise AI",
      status: "Updated"
  },
  {
      title: "Detect Dynamic Shapes",
      id: "832481",
      date: "09/06/24",
      version: "Original",
      bookmark: false,
      download: false,
      file: "URL",
      content: "Technical Articles",
      description: "Tools can detect dynamic inputs and operations for dynamic shapes—model behaviors that affect how variable-output tensor shapes generate.",
      status: "New"
  },
  {
      title: "When You Have to Fork a Project: All About Valkey",
      id: "832417",
      date: "09/06/24",
      version: "Original",
      bookmark: false,
      download: false,
      file: "URL",
      content: "Blogs",
      description: "AWS Engineer Madelyn Olson talks with Open at Intel host Katherine Druckman about the creation of Valkey, what’s next for the popular project, when to fork a project, and how to handle maintainer burn",
      status: "New"
  },
  {
      title: "Become a Certified Instructor",
      id: "817869",
      date: "09/06/24",
      version: "Original",
      bookmark: false,
      download: false,
      file: "URL",
      content: "Instructor-Led Training",
      description: "Register for the Intel® Certified Instructor Program to access high-quality curriculum and the Intel® Tiber™ Developer Cloud.",
      status: "Updated"
  },
  {
      title: "Decoupling Non-Critical Workloads",
      id: "819066",
      date: "09/05/24",
      version: "Original",
      bookmark: false,
      download: false,
      file: "URL",
      content: "Technical Articles",
      description: "How to get more out of modern compute platforms by decoupling non-critical workloads.",
      status: "Updated"
  },
]

var VK_techical_data = VK_techical_library_data

// display data
function VK_technical_accoridan() {

  const div = document.getElementById('VK_technical_library');

  // result count 
  if (document.getElementById('VK_technical_library_cnt1')) {
      document.getElementById('VK_technical_library_cnt1').innerHTML = VK_techical_data.length + " results";
  }


  // display accoridan
  if (div) {

      const htmlele = VK_techical_data.map((ele, ind) => {
          const uniqueID = `flush-collapse-${ind}`;
          const uniqueHeadingID = `flush-heading-${ind}`;

          const versionDisplay = Array.isArray(ele.version)
              ? `<select class="py-2 pe-xl-4 pe-5">${ele.version.map(v => `<option value="${v}">${v}</option>`).join('')}</select>`
              : ele.version;

          return `
          <div class="accordion-item">
              <div class="row m-0 flex-column flex-xl-row py-xl-3 px-3 p-2">
                  <div class="col-xxl-7 col-xl-6 col-12 align-self-center">
                      <p class="m-xl-0 mb-4">
                          <a href="#" class="VK_red_normal_font text-decoration-none VK_a">
                              ${ele.title}
                          </a>
                      </p>
                  </div>
                  <div class="col-xxl-4 col-xl-5 col-12 p-0 text-xl-center d-flex flex-column flex-xl-row justify-content-between align-items-center">
                      <p class="m-0 my-1 VK_red_small_font w-100">
                          <span class="d-xl-none"><b>ID :</b></span> ${ele.id}
                      </p>
                      <p class="m-0 my-1 VK_red_small_font w-100">
                          <span class="d-xl-none"><b>Date :</b></span> ${ele.date}
                      </p>
                      <p class="m-0 my-1 VK_red_small_font w-100">
                          <span class="d-xl-none"><b>Version: </b></span>
                          ${versionDisplay}
                      </p>
                  </div>
                  <div class="col-xl-1 col-12 p-0 my-xl-0 my-2 align-self-center">
                      <p class="d-flex m-0 justify-content-end justify-content-end">
                          ${ele.download ? `
                              <button class="bg-transparent border-0 text-primary px-2 mx-2 m-xl-0">
                                  <i class="fa-solid fa-download"></i>
                              </button>
                          ` : ''}
                          ${ele.bookmark ? `
                              <button class="bg-transparent border-0 text-primary px-2 mx-2 m-xl-0">
                                  <i class="fa-regular fa-bookmark"></i>
                              </button>
                          ` : ''}
                          <button class="accordion-button collapsed mx-2 m-xl-0 px-2" type="button"
                              data-bs-toggle="collapse" data-bs-target="#${uniqueID}"
                              aria-expanded="false" aria-controls="${uniqueID}">
                              <span>&nbsp;</span>
                          </button>
                      </p>
                  </div>
              </div>
              <div id="${uniqueID}" class="accordion-collapse collapse"
                  aria-labelledby="${uniqueHeadingID}" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                      <p class="m-0">
                          <span class="d-inline-block mx-2">
                              <b>File:</b>
                              <span>${ele.file}</span>
                          </span>
                          <span class="d-inline-block mx-2">
                              <b>Content Type :</b>
                              <span>${ele.content}</span>
                          </span>
                      </p>
                      <p class="m-0">${ele.description}</p>
                  </div>
              </div>
          </div>`;
      });

      div.innerHTML = htmlele.join('');

      const accordionButtons = div.querySelectorAll('.accordion-button');
      accordionButtons.forEach(button => {
          const collapseElement = document.querySelector(button.getAttribute('data-bs-target'));
          const collapseInstance = new bootstrap.Collapse(collapseElement, {
              toggle: false
          });

          button.addEventListener('click', function () {
              collapseInstance.toggle();
          });
      });
  } else {
      return;
  }
}

// data sort by
function VK_technical_data_softby() {
  let sort_by = document.getElementById('VK_technical_data_sortby').value;
  if (sort_by == 'A-Z') {
      VK_techical_data.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort_by == 'Z-A') {
      VK_techical_data.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sort_by == 'Content Type') {
      VK_techical_data.sort((a, b) => a.content.localeCompare(b.content));
  }
  VK_technical_accoridan();
}

// data searchbox
function VK_technical_data_search_box() {
  let search_txt = document.getElementById('VK_technical_library_search_bar').value;
  VK_techical_data = VK_techical_library_data.filter((ele) => {
      return ele.title.toLowerCase().includes(search_txt.toLowerCase()) || ele.content.toLowerCase().includes(search_txt.toLowerCase())
  })
  VK_technical_accoridan();
}




// software checkbox
var VK_technical_software_data = [
  "AI Tools",
  "Assistive Context-Aware Toolkit (ACAT)",
  "BigDL",
  "BIOS",
  "BIOS and Firmware",
  "Boot Loader Development Kit",
  "C for Metal Software Development Kit (CM SDK)",
  "Cluster Tools",
  "Compilers",
  "Components & Products",
  "Data Center Software",
  "Data Plane Development Kit (DPDK)",
  "Development Tools",
  "Firmware",
  "GNU* Debugger (GDB)",
  "GStreamer* Video Analytics (GVA) Plugin",
  "Hyperscan",
  "Intel in Cloud Native (Kubernetes*)",
  "Intel Unite® Plugin SDK",
  "Intel® Active Management Technology SDK",
  "Intel® Advisor",
  "Intel® Architecture Code Analyzer",
  "Intel® C++ Compiler",
  "Intel® Cilk™ Plus",
  "Intel® Cluster Checker",
  "Intel® Collaboration Suite for WebRTC",
  "Intel® CPU Runtime for OpenCL™ Applications",
  "Intel® Cryptography Primitives Library",
  "Intel® Data Analytics Acceleration Library (Intel® DAAL)",
  "Intel® Data Center Manager Console",
  "Intel® Debug Extensions for WinDbg*",
  "Intel® Distribution for Python*",
  "Intel® Distribution of Modin*",
  "Intel® Distribution of OpenVINO™ toolkit",
  "Intel® DPC++ Compatibility Tool",
  "Intel® Embree",
  "Intel® Extension for Scikit_learn*",
  "Intel® Firmware Support Package (Intel® FSP)",
  "Intel® Fortran Compiler",
  "Intel® FPGA Add-On for oneAPI Base Toolkit",
  "Intel® Graphics Performance Analyzers",
  "Intel® Homomorphic Encryption Toolkit (Intel® HE Toolkit)",
  "Intel® HPC Toolkit",
  "Intel® Inspector",
  "Intel® Integrated Performance Primitives",
  "Intel® Integrated Simulation Infrastructure with Modeling (Intel® ISIM)",
  "Intel® Intelligent Storage Acceleration Library (ISA-L)",
  "Intel® IoT Toolkit",
  "Intel® License Manager for FLEXlm*",
  "Intel® Math Kernel Library",
  "Intel® Media SDK",
  "Intel® Media Server Studio",
  "Intel® Media Server Studio Essentials Edition",
  "Intel® Media Server Studio Professional Edition",
  "Intel® MPI Library",
  "Intel® Neural Compressor",
  "Intel® oneAPI Base Toolkit",
  "Intel® oneAPI Collective Communications Library",
  "Intel® oneAPI Data Analytics Library",
  "Intel® oneAPI Deep Neural Network Library",
  "Intel® oneAPI DL Framework Developer Toolkit",
  "Intel® oneAPI DPC++ C++ Compiler",
  "Intel® oneAPI DPC++ Library",
  "Intel® oneAPI Math Kernel Library",
  "Intel® oneAPI Threading Building Blocks",
  "Intel® oneAPI Toolkits",
  "Intel® Open Image Denoise",
  "Intel® Open Path Guiding Library (Intel® Open PGL)",
  "Intel® Open Volume Kernel Library (Intel® Open VKL)",
  "Intel® OpenSWR",
  "Intel® Optimization for PyTorch*",
  "Intel® Optimization for TensorFlow*",
  "Intel® Optimization for XGBoost*",
  "Intel® OSPRay",
  "Intel® Parallel Studio XE",
  "Intel® Parallel Studio XE Cluster Edition",
  "Intel® Parallel Studio XE Composer Edition",
  "Intel® Parallel Studio XE Professional Edition",
  "Intel® Platform Analysis Library",
  "Intel® Platform Service Record (Intel® PSR)",
  "Intel® RealSense™ SDK",
  "Intel® Rendering Toolkit",
  "Intel® SDK for OpenCL™ Applications",
  "Intel® Secure Device Onboard",
  "Intel® Smart Edge Open",
  "Intel® SoC Watch",
  "Intel® Software Development Emulator",
  "Intel® Software Development Products Registration Center",
  "Intel® Software Guard Extensions SDK",
  "Intel® System Bring-Up Toolkit",
  "Intel® System Debugger",
  "Intel® System Studio",
  "Intel® System Studio Composer Edition",
  "Intel® System Studio for Microcontrollers",
  "Intel® System Studio Professional Edition",
  "Intel® System Studio Professional Edition",
  "Intel® Threading Building Blocks",
  "Intel® Time Coordinated Computing Tools (Intel® TCC Tools)",
  "Intel® Trace Analyzer and Collector",
  "Intel® vCMTS Reference Dataplane",
  "Intel® Video Pro Analyzer",
  "Intel® Video Processing Library",
  "Intel® VTune™ Profiler (formerly Intel® VTune™ Amplifier)",
  "Key Management Reference Application (KMRA)",
  "Legacy Products",
  "Libraries and SDKs",
  "NumaTOP",
  "OP-TEE* for Intel® Architecture",
  "Open Source Media Framework",
  "Open Source Software Projects",
  "OpenVINO™ Toolkit",
  "Other Software Tools",
  "Performance Analyzers",
  "Pin",
  "PM-Graph",
  "Program Record Replay Toolkit",
  "SDK for Intel® Dynamic Application Loader (Intel® DAL)",
  "Simics",
  "Software Development Platform",
  "Software Quality",
  "Storage Performance Development Kit (SPDK)",
  "System Tools",
  "UEFI",
  "Useful Packages & Modules (UPM) MRAA Library"
]

var VK_technical_software = VK_technical_software_data

// display software type checkbox
function VK_technical_software_checkbox() {
  if (document.getElementById('VK_technical_software_checkbox')) {
      let html = VK_technical_software.map((ele, ind) => {
          return `
      <div class="${ind > 7 ? "d-none" : ""} my-1 VK_white_space"> 
          <input type="checkbox" value="${ele}" class="me-2 VK_overflow_checkbox" onclick="VK_oneapi_content_type()">
          <span>${ele}</span>
      </div>
      `;
      }).join(' ');

      if (VK_technical_software.length > 7) {
          html += `
      <button class="border-0 bg-transparent VK_a" onclick="VK_oneapi_toolkit_software_showmore()" id="VK_toolkit_software_show_more">
          <span>Show More</span>
      </button>
      `;
      }

      document.getElementById('VK_technical_software_checkbox').innerHTML = html;
  } else {
      return;
  }
}

// software checkbox show more or less
function VK_oneapi_toolkit_software_showmore() {
  let showMoreButton = document.getElementById('VK_toolkit_software_show_more');
  let hiddenItems = document.querySelectorAll('#VK_technical_software_checkbox .d-none');
  let visibleItems = document.querySelectorAll('#VK_technical_software_checkbox > div:not(.d-none)');

  if (showMoreButton.innerText.trim() === "Show More") {
      showMoreButton.innerHTML = "<span>Show Less</span>";
      hiddenItems.forEach(item => item.classList.remove('d-none'));
  } else {
      showMoreButton.innerHTML = "<span>Show More</span>";
      visibleItems.forEach((item, ind) => {
          if (ind > 7) {
              item.classList.add('d-none');
          }
      });
  }
}

// checkbox search box
function VK_techincal_software_search() {
  let srch = document.getElementById('VK_technical_software_search').value
  let arr = VK_technical_software_data.filter((ele) => {
      return ele.toLowerCase().includes(srch.toLowerCase())
  })
  VK_technical_software = arr
  VK_technical_software_checkbox()
}

// orderby
function VK_technical_software_order_By() {
  let orderby = document.getElementById('VK_technical_software_sort').value
  if (orderby == 'A-Z') {
      VK_technical_software.sort((a, b) => a.localeCompare(b))
  }
  else if (orderby == 'Z-A') {
      VK_technical_software.sort((a, b) => b.localeCompare(a))
  }
  VK_technical_software_checkbox()
}




// programming language
var VK_techical_programming_data = [
  "C C++",
  "C#",
  "CUDA*",
  "Data Parallel C++ (DPC++)",
  "Fortran",
  "Go*",
  "Hack HHVM",
  "HTML5",
  "Java*",
  "JavaScript*",
  "Julia*",
  "Microsoft .NET*",
  "Node.js*",
  "PHP",
  "Python*",
  "R*",
  "ROCm*",
  "SYCL*"
]

var VK_technical_programming = VK_techical_programming_data

// display programming type checkbox
function VK_technical_programming_checkbox() {
  if (document.getElementById('VK_technical_programming_checkbox')) {
      let html = VK_technical_programming.map((ele, ind) => {
          return `
      <div class="${ind > 7 ? "d-none" : ""} my-1 VK_white_space"> 
          <input type="checkbox" value="${ele}" class="me-2 VK_overflow_checkbox" onclick="VK_oneapi_content_type()">
          <span>${ele}</span>
      </div>
      `;
      }).join(' ');

      if (VK_technical_programming.length > 7) {
          html += `
      <button class="border-0 bg-transparent VK_a" onclick="VK_technical_programming_showmore()" id="VK_toolkit_programming_show_more">
          <span>Show More</span>
      </button>
      `;
      }

      document.getElementById('VK_technical_programming_checkbox').innerHTML = html;
  } else {
      return;
  }
}

// programming checkbox show more or less
function VK_technical_programming_showmore() {
  let showMoreButton = document.getElementById('VK_toolkit_programming_show_more');
  let hiddenItems = document.querySelectorAll('#VK_technical_programming_checkbox .d-none');
  let visibleItems = document.querySelectorAll('#VK_technical_programming_checkbox > div:not(.d-none)');

  if (showMoreButton.innerText.trim() === "Show More") {
      showMoreButton.innerHTML = "<span>Show Less</span>";
      hiddenItems.forEach(item => item.classList.remove('d-none'));
  } else {
      showMoreButton.innerHTML = "<span>Show More</span>";
      visibleItems.forEach((item, ind) => {
          if (ind > 7) {
              item.classList.add('d-none');
          }
      });
  }
}


// checkbox search box
function VK_techincal_programming_search() {
  let srch = document.getElementById('VK_technical_programming_search').value
  let arr = VK_techical_programming_data.filter((ele) => {
      return ele.toLowerCase().includes(srch.toLowerCase())
  })
  VK_technical_programming = arr
  VK_technical_programming_checkbox()
}

// orderby
function VK_technical_programming_order_By() {
  let orderby = document.getElementById('VK_technical_programming_filters').value
  if (orderby == 'A-Z') {
      VK_technical_programming.sort((a, b) => a.localeCompare(b))
  }
  else if (orderby == 'Z-A') {
      VK_technical_programming.sort((a, b) => b.localeCompare(a))
  }
  VK_technical_programming_checkbox()
}




// content Type
var VK_technical_content_type_data = [
  "Analyst Reports",
  "Application Notes",
  "Applications",
  "Architecture Guides",
  "Architecture Specifications",
  "Benchmarks",
  "Best Practices",
  "Biographies",
  "BIOS Specifications",
  "Blogs",
  "Briefs",
  "Business Briefs",
  "Case Studies",
  "Certification",
  "Code Samples",
  "Communications",
  "Conference Sessions",
  "Conferences and Events",
  "Configuration Guides",
  "Cookbooks",
  "Courseware",
  "Customer Presentations",
  "Datasheets",
  "Dear Customer Letters (DCL)",
  "Demo Videos",
  "Demos",
  "Design Reference",
  "Development Guides",
  "Development Reference Guides",
  "Development User Guides",
  "Device Overviews",
  "Drivers",
  "Event Overviews",
  "Event Schedules",
  "FAQs",
  "Feature Lists",
  "Firmware",
  "Getting Started Guides",
  "How-To Training",
  "Implementation Guides",
  "Infographics",
  "Installation Guides",
  "Instructional Materials",
  "Instructor-Led Training",
  "Internal Training",
  "Known Issues",
  "Learning Plans and Paths",
  "Machine Learning Models",
  "Marketing Guides",
  "Marketing Tools",
  "On-Demand Training",
  "Partner Briefs",
  "Playbooks",
  "Product Briefs",
  "Product Snapshots",
  "Product Specifications",
  "Product Updates",
  "Programming Reference",
  "Release Notes",
  "Sales and Marketing Materials",
  "Sales Quick Reference",
  "Sales Tools",
  "Sample Applications",
  "Schematic and Layout Files",
  "Scripts",
  "Software Containers",
  "Software Development Kits (SDKs)",
  "Software Downloads",
  "Software Kits",
  "Software Packages",
  "Software Patches",
  "Software Reference Implementations",
  "Software, Drivers and Utilities",
  "Solution Briefs",
  "Stock Video",
  "Success Stories",
  "Support Articles",
  "System Requirements",
  "Technical Advisories",
  "Technical Articles",
  "Technical Documentation Kits",
  "Technical Specifications",
  "Testimonials",
  "Training and Learning",
  "Training Manuals",
  "Troubleshooting",
  "Tuning and Optimization Guides",
  "Tutorials",
  "Use Cases",
  "User Guides",
  "Validation and Debug Guides",
  "White Papers",
  "Workshop Events"
]

var VK_technical_content_type = VK_technical_content_type_data

// display content type checkbox
function VK_technical_content_type_checkbox() {
  if (document.getElementById('VK_technical_content_type_checkbox')) {
      let html = VK_technical_content_type.map((ele, ind) => {
          return `
      <div class="${ind > 7 ? "d-none" : ""} my-1 VK_white_space"> 
          <input type="checkbox" value="${ele}" class="me-2 VK_overflow_checkbox VK_technical_content_checkbox" onclick="VK_oneapi_content_type()">
          <span>${ele}</span>
      </div>
      `;
      }).join(' ');

      if (VK_technical_content_type.length > 7) {
          html += `
      <button class="border-0 bg-transparent VK_a" onclick="VK_technical_content_showmore()" id="VK_technical_content_show_more">
          <span>Show More</span>
      </button>
      `;
      }

      document.getElementById('VK_technical_content_type_checkbox').innerHTML = html;
  } else {
      return;
  }
}

// content checkbox show more or less
function VK_technical_content_showmore() {
  let showMoreButton = document.getElementById('VK_technical_content_show_more');
  let hiddenItems = document.querySelectorAll('#VK_technical_content_type_checkbox .d-none');
  let visibleItems = document.querySelectorAll('#VK_technical_content_type_checkbox > div:not(.d-none)');

  if (showMoreButton.innerText.trim() === "Show More") {
      showMoreButton.innerHTML = "<span>Show Less</span>";
      hiddenItems.forEach(item => item.classList.remove('d-none'));
  } else {
      showMoreButton.innerHTML = "<span>Show More</span>";
      visibleItems.forEach((item, ind) => {
          if (ind > 7) {
              item.classList.add('d-none');
          }
      });
  }
}

// checkbox search box
function VK_techincal_content_search() {
  let srch = document.getElementById('VK_technical_content_search').value
  let arr = VK_technical_content_type_data.filter((ele) => {
      return ele.toLowerCase().includes(srch.toLowerCase())
  })
  VK_technical_content_type = arr
  VK_technical_content_type_checkbox()
}

// orderby
function VK_technical_content_order_By() {
  let orderby = document.getElementById('VK_technical_content_filters').value
  if (orderby == 'A-Z') {
      VK_technical_content_type.sort((a, b) => a.localeCompare(b))
  }
  else if (orderby == 'Z-A') {
      VK_technical_content_type.sort((a, b) => b.localeCompare(a))
  }
  VK_technical_content_type_checkbox()
}

// content type checkbox event
function VK_oneapi_content_type() {
  let checkboxes = document.querySelectorAll('.VK_technical_content_checkbox');
  let checkedBoxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);

  if (checkedBoxes.length === 0) {
      VK_techical_data = VK_techical_library_data;
  } else {
      let selectedContentTypes = checkedBoxes.map(checkbox => checkbox.value.toLowerCase());
      VK_techical_data = VK_techical_library_data.filter(item => {
          return selectedContentTypes.includes(item.content.toLowerCase());
      });
  }

  VK_technical_accoridan();
}

