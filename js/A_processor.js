var b_data = [{
        id: 0,
        img: '/img/Akshay image/intel1.avif',
        title: ' Intel® Xeon® Processors',
        des: 'Built for data centers and workstations to handle the heavy processing demands of cloud, big data, modeling, AI, and more.',
        version: [{
            id: '01',
            title: 'Intel® Xeon® Processors',
            href: '#'
        }, {
            id: '02',
            title: 'Intel® Xeon® E Processor',
            href: '#'
        }, {
            id: '03',
            title: 'Intel® Xeon® W Processor',
            href: '#'
        }, {
            id: '04',
            title: 'Intel® Xeon® D Processor',
            href: '#'
        }, {
            id: '05',
            title: 'Intel® Xeon® Scalable Processors',
            href: '#'
        }]
    },
    {
        id: 1,
        img: '/img/Akshay image/V_intel2.webp',
        title: ' Intel® Core™ Ultra Processors',
        des: 'Featuring new AI experiences, immersive graphics, and an optimal balance of battery life and performance.',
        version: [{
            id: '11',
            title: 'Intel® Core™ Ultra Processors',
            href: '#'
        }]
    },
    {
        id: 2,
        img: '/img/Akshay image/V_intel3.png',
        title: ' Intel® Core™ Processors Family',
        des: ' Intel’ s CPUs for laptops and desktops, delivering advanced responsiveness, connectivity and graphics.',
        version: [{
                id: '21',
                title: 'Intel® Core™ Processors Family',
                href: '#'
            },
            {
                id: '22',
                title: 'Intel® Core™ i9 Processors',
                href: '#'
            },
            {
                id: '23',
                title: 'Intel® Core™ i7 Processors',
                href: '#'
            },
            {
                id: '24',
                title: 'Intel® Core™ i5 Processors',
                href: '#'
            }, ,
            {
                id: '25',
                title: 'Intel® Core™ i3 Processors',
                href: '#'
            },
            {
                id: '26',
                title: 'Intel® Core™ processors',
                href: '#'
            }
        ]
    },
    {
        id: 3,
        img: '/img/Akshay image/V_intel4.png',
        title: '  Intel® Gaudi® Al Accelerators',
        des: ' Intel® Gaudi® Al accelerators and Intel® Gaudi® software are designed to bring a new level of productivity advantages and choice to data center generative Al.',
        version: [{
                id: '31',
                title: 'Intel® Gaudi® Al Accelerators',
                href: '#'
            },
            {
                id: '32',
                title: 'Intel® Gaudi® 3 AI Accelerator',
                href: '#'
            },
            {
                id: '33',
                title: 'Intel® Gaudi® 2 AI Accelerator',
                href: '#'
            },
            {
                id: '34',
                title: 'Intel® Gaudi® Software',
                href: '#'
            }
        ]
    },
    {
        id: 4,
        img: '/img/Akshay image/V_intel5.webp',
        title: '  Intel® Processor',
        des: 'Intel’s entry level CPUs provide the performance that you need with the affordability you want to connect, learn, and play anywhere.',
        version: [{
            id: '32',
            title: 'Intel® Processor',
            href: '#'
        }]
    },
    {
        id: 5,
        img: '/img/Akshay image/V_intel6.webp',
        title: ' Intel Atom® Processor',
        des: 'These small, powerful CPUs are ideal for mobile and IoT devices as well as high - density, low - energy data center applications.',
        version: [{
                id: '01',
                title: 'Intel Atom® Processor',
                href: '#'
            },
            {
                id: '01',
                title: 'Intel Atom® Processor C Series',
                href: '#'
            },
            {
                id: '01',
                title: 'Intel Atom® Processor P Series',
                href: '#'
            }
        ]
    },
    {
        id: 6,
        img: '/img/Akshay image/V_intel7.webp',
        title: ' Processors for IoT and Embedded Applications',
        des: 'For swift deployment of edge applications, see Intel’s portfolio of edge-ready compute and connectivity technologies.',
        version: [{
                id: '01',
                title: 'Processors for IoT and Embedded Applications',
                href: '#'
            },
            {
                id: '01',
                title: 'Processors for IoT and Embedded Applications',
                href: '#'
            },
            {
                id: '01',
                title: 'Intel® Xeon® Processors for Embedded Applications',
                href: '#'
            },
            {
                id: '01',
                title: 'Intel® Core™ Processors for Embedded Applications',
                href: '#'
            },
            {
                id: '01',
                title: 'Intel® Pentium® Processors for Embedded Applications',
                href: '#'
            },
            {
                id: '01',
                title: 'Intel® Celeron® Processors for Embedded Applications',
                href: '#'
            },
            {
                id: '01',
                title: 'Intel Atom® Processors for Embedded Applications',
                href: '#'
            }
        ]
    }
]

function loaddata() {
    var data = document.getElementById('accordiondata');
    data.innerHTML = ''
    b_data.forEach(function (item, id) {
        var innerdata = `                 <div class="accordion-item border-0">
                        <h2 class="accordion-header" id="flush-heading">
                            <button class="accordion-button collapsed p-3 py-2  b_bgcolor_grey b border-white row border-bottom gx-0" type="button"
                                data-bs-toggle="collapse" data-bs-target='#flush-collapseOne${id}' aria-expanded="false"
                                aria-controls="flush-collapse" style="box-shadow: none !important; ">
                                <div class="py-3 row col-11 align-items-center">
                                    <div class="col-md-4 pt-2 b_padding_remove d-flex  align-items-center">
                                    ${item.img ? `
                                        <div>
                                            <img src='${item.img}' alt="">
                                        </div>` : ''}
                                        <div>
                                            <h4 class="b_padding">
                                                <a href="#" class="b_fontweight">
                                                    ${item.title}
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                    <div class="px-3 col-md-8 pt-2 b_hide_sec">
                                        <p>
                                            <a href="#" class="text-decoration-none text-dark">
                                                ${item.des}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </button>
                        </h2>
                        <div id='flush-collapseOne${id}'  class="accordion-collapse collapse" aria-labelledby="flush-heading"
                            data-bs-parent="#accordiondata" >
                            <div class="accordion-body row gx-0" style="border-top:5px solid #00AEEF" >
                                         ${item.version.map(function (version, index) {
            return `
                                            <div class="col-md-3 col-sm-6 col-12 py-2">
                                                <a href="#" class="text-decoration-none b_special_a2 ">
                                                    <h6 class="px-3 b_padding_remove ${index == 0 ? 'fw-bolder' : ''}">
                                                        ${version.title}
                                                    </h6>
                                                </a>
                                            </div>`
        }).join('')}
                            </div>
                            </div>
                        </div>
                    </div>`

        data.innerHTML += innerdata;
    })
    var data1 = document.getElementById('accordiondata1');
    data1.innerHTML = ''
    b_data.forEach(function (item, id) {
        var innerdata = `<div class="p-3 d-flex border-bottom align-items-center" onclick='openoffcanvas(${JSON.stringify(item)})'>
                ${item.img ? `
                    <div>
                        <img src='${item.img}' alt="">
                    </div>` : ''}
                    <div>
                         <h4 class="b_padding mx-2">
                            <a href="#" class="b_fontweight">
                                ${item.title}
                            </a>
                        </h4>
                    </div>
                    <i class="fa-solid fa-angle-right ms-auto" style='color:#0071c5'></i>
                </div>
                `
        data1.innerHTML += innerdata;
    })
}

function openoffcanvas(x) {
    var canvas = document.getElementById('b_offcanvas');
    canvas.classList.toggle('d-none');
    canvas.innerHTML = `<h4 class='border-bottom p-3 text-nowrap' onclick='openoffcanvas()'><i class="fa-solid fa-angle-left" style='color:#0071c5'></i><a href="#" class='text-decoration-none text-dark'>${x.title}</a><h4>
                                                       ${x.version.map(function (version, index) {
        return `
                                            <div class="p-3 border-bottom">
                                                <a href="#" class="text-decoration-none b_special_a2 text-wrap">
                                                    <h5 class="b_padding_remove text-wrap ${index == 0 ? 'fw-bolder' : ''}">
                                                        ${version.title}
                                                    </h5>
                                                </a>
                                            </div>`
    }).join('')}          
    `;
}
window.onload = function () {
    loaddata();
}













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