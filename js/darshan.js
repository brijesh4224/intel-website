function handleactive(id) {
    for (let i = 1; i <= 4; i++) {
        document.getElementById('id' + i).classList.remove('active')
    }
    document.getElementById('id' + id).classList.add('active')
}
function handleActive(id) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById('id' + id).classList.add('active');
}
// window.onscroll = function (e) {
//     if (document.getElementById('navbar')) {
//         if (scrollY > 400) {
//             document.getElementById("navbar").classList.add('d_navbar')
//         }
//     }

// }


window.onload = function () {
    // submit solutin -- benefit 
    benefit = document.getElementById("D_demo");

    const benefitarr = [
        {
            image: "benefit1.jpg",
            title: "Sales and Marketing Opportunities"
        },
        {
            image: "benefit2.jpg",
            title: "Visibility in the Partner Showcase"
        },
        {
            image: "benefit3.png",
            title: "Intel® Partner Alliance Membership"
        },
    ]

    if (benefit) {
        for (let i = 0; i < benefitarr.length; i++) {
            benefit.innerHTML += `<div class="col-sm-12 col-sm-4 col-md-4">
                <div class="d_item">
                    <div class="d_img">
                        <img src="/img/darshan_image/${benefitarr[i].image}" alt="">
                    </div>
                    <h3>${benefitarr[i].title}</h3>
                </div>
            </div>`;
        }
    }

    // submit solution -- work

    let D_work = document.getElementById("D_work")
    const works =
        [
            {
                id: 1,
                text: "Register to join the Intel® Partner Alliance or sign in."
            },
            {
                id: 2,
                text: "Review the program information and requirements. Select the program that is best suited to your proposal."
            },
            {
                id: 3,
                text: "Use the Solution Submission tool to input details on your solution and upload supporting documentation."
            },
            {
                id: 4,
                text: "Intel will confirm receipt of your solution and start the review process."
            },
            {
                id: 5,
                text: " If necessary, an Intel representative will contact you for any additional information. Intel may ask you to attend a review session to further discuss your solution."
            },
            {
                id: 6,
                text: "Once the review process is complete, Intel will let you know if your application was approved or rejected."
            },
            {
                id: 7,
                text: " If successful, your submission will be converted to a draft offering in the Partner Showcase."
            },
            {
                id: 8,
                text: "If your solution is eligible for Go-to-Market benefits, we will notify you with next steps."
            },
        ]

    if (D_work) {
        for (let i = 0; i < works.length; i++) {
            D_work.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                <div class="d_item">
                    <div class="d_desc"><b>${works[i].id}.</b>${works[i].text}</div>
                </div>
            </div>`;
        }
    }

    // submit soultion -- solution

    let D_solution = document.getElementById('D_solution');
    const solutions = [
        {
            image: "solution1.jpg",
            title: "IoT/Edge Solutions",
            desc: "Intel’s IoT/Edge programs can give you greater market visibility plus access to expert advisors and a vast partner network. You’ll also find resources to generate solid business results."
        },
        {
            image: "solution1.jpg",
            title: "Partner Solutions",
            desc: "Expand your business with a listing in the Partner Showcase. It’s the right place for solutions using Intel® architecture, hardware and software elements."
        },
    ]

    if (D_solution) {
        for (let i = 0; i < solutions.length; i++) {
            D_solution.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-6">
                <div class="d_item">
                    <div class="row">
                        <div class="col-xs-12 col-lg-6">
                            <div class="d_img">
                                <img src="/img/darshan_image/${solutions[i].image}" alt="">
                            </div>
                        </div>
                        <div class="col-xs-12 col-lg-6">
                            <h3>${solutions[i].title}</h3>
                            <p>${solutions[i].desc}</p>
                        </div>
                    </div>
                </div>
            </div>`;
        }
    }

    // Offering category page -- feature

    let D_feature = document.getElementById('D_feature');
    const features = [
        {
            image: "feature1.png",
            title: "Component",
            desc: "Explore stand-alone products used in building complete systems.",
            link:"d_offerning-components.html"
        },
        {
            image: "feature2.png",
            title: "Service",
            desc: "Connect with partners who can support your business needs."
        },
        {
            image: "feature3.png",
            title: "Software / IP Cores",
            desc: "Review the latest software and IP Core offerings."
        },
        {
            image: "feature4.png",
            title: "Solution",
            desc: "Find integrated hardware and software solutions."
        },
        {
            image: "feature5.png",
            title: "System",
            desc: "Browse integrated sets of hardware and software components."
        },
    ]

    if (D_feature) {
        for (let i = 0; i < features.length; i++) {
            D_feature.innerHTML += `<div class="col-xs-12 col-sm-6 col-lg-4 col-xl-4">
                    <div class="d_item">
                        <div class="d-flex align-items-center">
                            <div class="d_img">
                                <img src="/img/darshan_image/${features[i].image}" alt="">
                            </div>
                            <div class="d_content">
                                <h3><a href='${features[i].link}'>${features[i].title}</a></h3>
                                <p>${features[i].desc}</p>
                            </div>
                        </div>
                    </div>
                </div>`
        }
    }

    // partner Directory page -- feature

    let D_feature1 = document.getElementById('D_feature1');

    const features1 = [
        {
            image: "partner1.png",
            title: "Distributor",
            desc: "Explore stand-alone products used in building complete systems.",
            link: "./../d_partner/d_distributor-select-region.html"
        },
        {
            image: "partner2.jpg",
            title: "FPGA Design Services",
            desc: "Connect with partners who can support your business needs."
        },
        {
            image: "partner3.jpg",
            title: "Manufacturer",
            desc: "Review the latest software and IP Core offerings."
        },
        {
            image: "partner4.jpg",
            title: "Solution, Software, and Service Providers",
            desc: "Find integrated hardware and software solutions."
        },
    ]

    if (D_feature1) {
        for (let i = 0; i < features1.length; i++) {
            D_feature1.innerHTML += `<div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3">
                    <div class="d_item">
                        <div class="d-flex align-items-center">
                            <div class="d_img">
                                <img src="/img/darshan_image/${features1[i].image}" alt="">
                            </div>
                            <div class="d_content">
                                <h3><a href="${features1[i].link}">${features1[i].title}</a></h3>
                                <p>${features1[i].desc}</p>
                            </div>
                        </div>
                    </div>
                </div>`
        }
    }

    // about Membership page -- Promotion

    let D_promotion = document.getElementById('D_promotion');

    const pro = [
        {
            image: "promotion1.png",
            title: "Member Level Benefits",
            list: ["Intel® Partner University admission", "Earn and redeem Points1​", "Listing in Intel® Partner Showcase", "Standard warranty replacement", "Customer support within 48 hours", "Access to Intel® Developer Zone – Standard"]
        },
        {
            image: "promotion2.png",
            title: "Gold Level Benefits",
            list: ["Includes all Member benefits​", "Points - higher earning caps​", "Intel® Partner Showcase storefront​", "Lead sharing​ through Intel® Partner Showcase", "Advanced warranty replacement", "Customer support within 24 hours", "Access to Intel® Developer Zone - Premier"]
        },
        {
            image: "promotion3.png",
            title: "Titanium Level Benefits",
            list: ["Includes all Member & Gold benefits", "Points - highest earning caps​", "Enhanced matchmaking​ opportunities​", "Higher advanced warranty replacement", "Customer support within 4 hours"]
        },
    ]

    if (D_promotion) {
        for (let i = 0; i < pro.length; i++) {
            let listItems = '';
            for (let j = 0; j < pro[i].list.length; j++) {
                listItems += `<li>${pro[i].list[j]}</li>`;
            }
            D_promotion.innerHTML += `<div class="col-12 col-sm-4 col-md-4 col-ms-6">
                    <div class="d_item">
                        <div class="d_img">
                            <img src="/img/darshan_image/${pro[i].image}" alt="">
                        </div>
                        <div class="d_content">
                            <h3>${pro[i].title}</h3>
                            <p></p>
                            <ul>
                                 ${listItems}
                            </ul >
                        </div >
                    </div >
                </div > `
        }
    }

    // about Membership page -- Disclaimer

    let D_disclaimer = document.getElementById('D_disclaimer');

    const disclaimer = [
        {
            id: 1,
            text: "Subject to additional qualifications; guests, manufacturers, FPGA design services,and distributors are not eligible for points program."
        },
        {
            id: 2,
            text: "Industry Insights & Research are brought to you by the data scientists in Intel's Market Sizing & Forecast team, providing curated content and data for economic indicators,country-by-country macroeconomics, and industry trends."
        },
        {
            id: 3,
            text: "Event participation is by invitation only."
        },
        {
            id: 4,
            text: "Subject to additional qualifications."
        },
        {
            id: 5,
            text: "Eligible roles for points include OEM, solution provider, Service Integrator (SI), Independent Software Vendor (ISV) and Cloud Service Provider (CSP – IaaS, SaaS, PaaS). All partner membership tiers are eligible to earn points and starting in 2023, member tier can redeem points. Financial benefits such as points are subject to additional qualifications and may not be available to all partners."
        },
        {
            id: 6,
            text: "Revenue is a measurement of Intel® product sales activity. Intel utilizes multiple methods to measure revenue that can differ based on the role the partner plays in the Intel® Partner Alliance. For OEM - Mature Market: A minimum of $1.4M of the Intel component products that you purchase from Intel or authorized suppliers must be integrated by you (or by a 3rd party on your behalf) into a system product that is sold by you. For OEM - Emerging Market: A minimum of $525K of the Intel component products that you purchase from Intel or authorized suppliers must be integrated by you (or by a 3rd party on your behalf) into a system product that is sold by you. For Solution Provider: At least 70% of the Intel-based systems or Intel component products that you purchase from Intel or Authorized suppliers must be sold by you to end-user customers."
        },
        {
            id: 7,
            text: "Approved Solutions = MRS/RRK, DCSS, and other partner solutions."
        },
        {
            id: 8,
            text: "For Titanium OEM - Mature Market: A minimum of $1.4M of the Intel component products that you purchase from Intel or authorized suppliers must be integrated by you (or by a 3rd party on your behalf) into a system product that is sold by you."
        },
        {
            id: 9,
            text: "For Titanium OEM - Emerging Market: A minimum of $525K of the Intel component products that you purchase from Intel or authorized suppliers must be integrated by you (or by a 3rd party on your behalf) into a system product that is sold by you."
        },
        {
            id: 10,
            text: "For titanium solution provider: At least 70% of the Intel-based systems or Intel component products that you purchase from Intel or authorized suppliers must be sold by you to end-user customers."
        },
        {
            id: 11,
            text: "Pipeline gen notification is 1 Intel FPGA product or design project registration. For Training partners: 2 conducted Intel FPGA-based training courses AND 50 trained learners on Intel FPGA technology."
        },
    ]

    if (D_disclaimer) {
        for (let i = 0; i < disclaimer.length; i++) {
            D_disclaimer.innerHTML += `<div class="d_list" >
            <sub>${disclaimer[i].id}</sub>
            <p class="mb-0 ms-1">${disclaimer[i].text}</p>
        </div>`
        }
    }


    // let D_introtext = document.getElementById('D_introtext');

    // const intro = [
    //     {
    //         txt: ["Intel® Partner Alliance program support assists with inquiries and issues on topics such as:"],
    //         list: ["Benefits Support - Points, Intel® Partner University, Partner Showcase, Partner Marketing Studio, etc.", "Membership Support - Login / Access Issues, Upgrades, Account Administration.", "General Program Questions / Issues / Problems."],
    //         txt1: ["Post-sales technical support is provided via Intel® Customer Support (ICS) interactive and digital services. Product Support Engineers (PSEs) and Contact Center agents solve technical cases for software/application support, warranty troubleshooting, and product support.", "Account coverage by a dedicated Intel representative is provided as available for qualifying Titanium partners."]
    //     },
    // ]

    // if (D_introtext) {
    //     for (let i = 0; i < intro.length; i++) {
    //         let listItems = '';
    //         for (let j = 0; j < intro[i].list.length; j++) {
    //             listItems += `<li>${intro[i].list[j]}</li>`;
    //         }
    //         let html = `<p>${intro[i].txt[0]}</p>
    //         <ul>
    //             ${listItems}
    //         </ul>
    //         <p>${intro[i].txt1[0]}</p>
    //         <p>${intro[i].txt1[1]}</p>`;

    //         D_introtext.innerHTML += html

    //     }
    // }

    // let D_More = document.getElementById('D_More');

    // const more = [
    //     {
    //         txt:["Warranty Terms and Conditions for Intel® Products","Intel® Partner University is an integrated, flexible, customizable partner training platform. Individuals earn competencies related to Intel products, technologies, and solutions and receive digital badges, which can be used to promote their skills to your customers.","Everyone who completes a competency [class/unit/module?] and demonstrates knowledge by passing a rigorous test can then claim a digital badge.​ This badge is syndicated by Acclaim and can be shared across social media platforms​. These badges are open to Gold/Titanium members only​.","<a href=>https://www.intel.com/content/www/us/en/events/overview.html</a>","The Intel ON series highlights the impactful solutions we’re developing in hardware and software, neuromorphic computing, security, 5G edge services, artificial intelligence, and much more​. Invitation only.","Watch Intel® CloudTV and differentiate from competitors by staying current with the latest cloud industry considerations. Watch videos highlighting the latest technology, business focus, workload best practices, and design advice. New episodes are released regularly, so add Intel® Cloud TV to your must-watch list.","Industry Insights & Research is brought to you by the data scientists in Intel's Market Sizing & Forecast team, providing curated content and data for economic indicators, macroeconomics country-by-country, and industry trends.","The Intel® Software Developer Zone provides tools and resources to support the development and business opportunities developers and software businesses need to innovate and succeed."]
    //     },

    // ]

    // Partner Alliance -- work

    let D_workpartner = document.getElementById("D_workpartner")
    const work1 =
        [
            {
                title: 'Training and Competencies',
                text: "Admission to Intel® Partner University provides you with specialized training on advanced technologies, competency programs, and rewards for learning."
            },
            {
                title: "Marketing Resources",
                text: "Entry to the Intel® Partner Showcase and the Intel® Marketing Studio helps you create more demand for your products and services."
            },
            {
                title: 'Valuable Rewards',
                text: "Earn points for your qualifying activities, advance your membership status, and get access to additional resources to build your business."
            },
            {
                title: "Expedited Support",
                text: "Quickly connect with live Intel support and account personnel whenever you need to get a question answered."
            },
        ]

    if (D_workpartner) {
        for (let i = 0; i < work1.length; i++) {
            D_workpartner.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                    <div class="d_item">
                        <h4>${work1[i].title}</h4>
                        <div class="d_desc">${work1[i].text}</div>
                    </div>
                </div>`;
        }
    }

    // submit soultion -- promotion

    let D_promotion2 = document.getElementById('D_promotion2');
    const promotion2 = [
        {
            image: "promotion1.png",
            title: "Member",
            desc: "All Members receive admission to Intel® Partner University, listing in the Intel® Partner Showcase directory along with business development matchmaking, customer support within 48 hours, and more."
        },
        {
            image: "promotion2.png",
            title: "Gold",
            desc: "In addition to Member benefits, Gold tier members receive a storefront in the Intel® Partner Showcase with lead generation tools, special invitations, customer support within 24 hours, and more."
        },
        {
            image: "promotion3.png",
            title: "Titanium",
            desc: "In addition to Gold benefits, Titanium tier members receive enhanced lead generation and matchmaking tools, pre-release product information, customer support within 4 hours, and more."
        },
    ]

    if (D_promotion2) {
        for (let i = 0; i < promotion2.length; i++) {
            D_promotion2.innerHTML += `<div class="col-12 col-sm-4 col-md-4 col-ms-6">
                        <div class="d_item">
                            <div class="d_img d_img1">
                                <img src="/img/darshan_image/${promotion2[i].image}" class="w-100" alt="">
                            </div>
                            <div class="d_content">
                                <h3>${promotion2[i].title}</h3>
                                <p></p>
                                <p>${promotion2[i].desc}</p>
                            </div>
                        </div>
                    </div>`;
        }
    }


    // partner alliance soultion -- solution

    let D_solution2 = document.getElementById('D_solution2');
    const solutions2 = [
        {
            image: "partnershowcase.png",
            title: "Find a Partner",
            desc: "Intel® Partner Showcase connects Intel partners with each other. Discover products and solutions to solve your business needs.",
            text: "Go to Showcase",
            link: ""
        },
        {
            image: "partneralliance.png",
            title: "Intel Partner Alliance Communities",
            desc: "Our global partner communities can give you a head start, get you to market quicker, and help you scale faster. Intel Partner Alliance Communities bring together the solutions you need to succeed.",
            link: "./../d_partner/d_partner-alliance-community.html",
            text: "Learn more"
        },
    ]

    if (D_solution2) {
        for (let i = 0; i < solutions2.length; i++) {
            D_solution2.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-6">
                    <div class="d_item">
                        <div class="row">
                            <div class="col-xs-12 col-lg-6">
                                <div class="d_img">
                                    <img src="/img/darshan_image/${solutions2[i].image}" alt="">
                                </div>
                            </div>
                            <div class="col-xs-12 col-lg-6">
                                <h3><a href="">${solutions2[i].title}</a></h3>
                                <p>${solutions2[i].desc}</p>
                                <div class="row mt-2">
                                    <div class="col-xs-12">
                                        <p class="d_ctaitem">
                                            <a href="${solutions2[i].link}" class="d-sm-inline-block text-center d-block">${solutions2[i].text}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        }
    }

    // showcase help page -- Related Materials

    let D_material = document.getElementById('D_material');
    const material = [
        {
            image: "book1.png",
            title: "Glossary of Intel® Partner Showcase Terms",
            desc: "Find the definitions of frequently used terms in the Partner Showcase.",
        },
        {
            image: "book1.png",
            title: "Intel® Partner Alliance Terms and Conditions",
            desc: "Read the terms and conditions—including appendices, guidelines, and additional documentation—that apply to members in the Intel® Partner Alliance program.",
        },
    ]

    if (D_material) {
        for (let i = 0; i < material.length; i++) {
            D_material.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-6">
                    <div class="d_item">
                        <div class="row">
                            <div class="col-xs-12 col-lg-3">
                                <div class="d_img">
                                    <img src=/img/darshan_image/${material[i].image} alt="">
                                </div>
                            </div>
                            <div class="col-xs-12 col-lg-9">
                                <h3><a href="">${material[i].title}</a></h3>
                                <p>${material[i].desc}</p>
                            </div>
                        </div>
                    </div>
                </div>`;
        }
    }

    // membership page -- role and tier faqs

    let D_role = document.getElementById('D_role');
    const roles = [
        {
            country: ["Afghanistan", "Algeria", "Andorra", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Belarus", "Belgium", "Belize", "Bermuda", "Bolivia", "Bosnia-Herz.", "Botswana", "Brazil", "Brit.Virgin Is.", "Brunei", "Bulgaria", "Cambodia", "Canada", "Cayman Islands", "Chile", "China", "Colombia", "Costa Rica", "Croatia", "Curacao", "Cyprus", "Czechia", "Denmark", "Dominican Rep.", "Ecuador", "Egypt", "El Salvador", "Estonia", "Ethiopia", "Falkland Islnds", "Faroe Islands", "Fiji", "Finland", "Georgia", "Germany", "Greece", "Guadeloupe", "Guam", "Guatemala", "Guyana", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", 'Kenya', "Kuwait", "Laos", "Latvia", "Lebanon", "Liechtenstein", "Lithuania", "Luxembourg", "Malaysia", "Malta", "Marshall Islnds", "Martinique", "Mexico", "Moldova", "Monaco", "Montenegro", "Morocco", "Myanmar", "Namibia", "Netherlands", "New Zealand", "Nicaragua", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine,State", "Panama", "Pap. New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Fed", "Rwanda", "Romania", "S. Sandwich Ins", "San Marino", "Saudi Arabia", "Serbia", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "Suriname", "Sweden", "Switzerland", "Taiwan", "Tanzania", "Thailand", "Trinidad,Tobago", "Tunisia", "Turkey", "Uganda", "United States", "Uruguay", "Utd.Arab Emir.", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands", "Yemen", "Zimbabwe"],
            type: ["Emerging", "Emerging", "Developed", "Emerging", "Emerging", "Developed", "Developed", "Emerging", "Emerging", "Emerging", "Emerging", "Emerging", "Developed", "Emerging", "Emerging", "Emerging", "Emerging", "Emerging", "Emerging", "Developed", "Emerging", "Developed", "Emerging", "Developed", "Emerging", "Emerging", "Emerging", "Emerging", "Emerging", "Developed", "Emerging", "Developed", "Developed", "Developed", "Emerging", "Emerging", "Emerging", "Emerging", "Developed", "Emerging", "Emerging", "Emerging", "Emerging", "Developed", "Developed", "Emerging", "Developed", "Developed", "Emerging", "Developed", "Developed", "Emerging", "Emerging", "Emerging", "Emerging", "Emerging", "Emerging", "Developed", "Developed", "Developed", "Emerging", "Developed", "Emerging", "Emerging", "Emerging", "Emerging", "Emerging", "Developed", "Emerging", "Emerging", "Developed", "Developed", "Developed", "Emerging", "Developed", "Emerging", "Emerging", "Emerging", "Emerging", "Developed", "Emerging", "Emerging", "Emerging", "Emerging", "Developed", "Developed", "Emerging", "Emerging", "Developed", "Emerging", "Emerging", "Emerging", "Emerging", "Emerging", "Emerging", "Emerging", "Emerging", "Developed", "Developed", "Emerging", "Emerging", "Developed", "Developed", "Emerging", "Emerging", "Emerging", "Developed", "Emerging", "Emerging", "Developed", "Developed", "Developed", "Emerging", "Emerging", "Developed", "Developed", "Emerging", "Emerging", "Developed", "Developed", "Developed", "Emerging", "Emerging", "Emerging", "Emerging", "Emerging", "Emerging", "Developed", "Developed", "Emerging", "Emerging", "Emerging", "Emerging", "Emerging", "Developed", "Emerging", "Emerging"]
        }
    ]

    if (D_role) {
        for (let i = 0; i < roles[0].country.length; i++) {
            D_role.innerHTML += `<tr>
                                    <td>${roles[0].country[i]}</td>
                                    <td>${roles[0].type[i]}</td>
                                  </tr>`;
        }

    }


    // insighttech help page -- Related Materials

    let D_material1 = document.getElementById('D_material1');
    const material1 = [
        {
            image: "book1.png",
            title: "insight.tech Editorial Calendar",
            desc: "",
        },

    ]

    if (D_material1) {
        for (let i = 0; i < material1.length; i++) {
            console.log(i);
            D_material1.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-6">
                    <div class="d_item">
                        <div class="row">
                            <div class="col-xs-12 col-lg-3">
                                <div class="d_img">
                                    <img src=/img/darshan_image/${material1[i].image} alt="">
                                </div>
                            </div>
                            <div class="col-xs-12 col-lg-9">
                                <h3><a href="">${material1[i].title}</a></h3>
                                <p>${material1[i].desc}</p>
                            </div>
                        </div>
                    </div>
                </div>`;
        }
    }

    // submit solution help page -- Guides

    let D_guide = document.getElementById('D_guide');
    const guides = [
        {
            image: "book1.png",
            title: "Preparing Your Application and Submitting a Successful Solution",
            desc: "Prepare for the application process and find out what information you’ll need to successfully submit a solution.",
        },

    ]

    if (D_guide) {
        for (let i = 0; i < guides.length; i++) {
            console.log(i);
            D_guide.innerHTML += `<div class="col-xs-12 col-ms-12 col-sm-12 col-md-12">
                    <div class="d_item">
                        <div class="row">
                            <div class="col-xs-12 col-lg-2">
                                <div class="d_img">
                                    <img src=/img/darshan_image/${guides[i].image} alt="">
                                </div>
                            </div>
                            <div class="col-xs-12 col-lg-10">
                                <h3><a href="">${guides[i].title}</a></h3>
                                <p>${guides[i].desc}</p>
                            </div>
                        </div>
                    </div>
                </div>`;
        }
    }

    // submit submission -- solution

    let D_solution3 = document.getElementById('D_solution3');
    const solutions3 = [
        {
            image: "solution1.jpg",
            title: "IoT/Edge Solutions",
            desc: "Intel’s IoT/Edge programs can give you greater market visibility plus access to expert advisors and a vast partner network. You’ll also find resources to generate solid business results."
        },
        {
            image: "solution1.jpg",
            title: "Partner Solutions",
            desc: "Expand your business with a listing in the Partner Showcase. It’s the right place for solutions using Intel® architecture, hardware and software elements."
        },
    ]

    if (D_solution3) {
        for (let i = 0; i < solutions3.length; i++) {
            D_solution3.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-6">
                <div class="d_item">
                    <div class="row">
                        <div class="col-xs-12 col-lg-6">
                            <div class="d_img">
                                <img src="/img/darshan_image/${solutions3[i].image}" alt="">
                            </div>
                        </div>
                        <div class="col-xs-12 col-lg-6">
                            <h3>${solutions3[i].title}</h3>
                            <p>${solutions3[i].desc}</p>
                        </div>
                    </div>
                </div>
            </div>`;
        }
    }

    // Distributor select region

    let D_region = document.getElementById('D_region');
    const region = ["select", "United States", "Canada", "Mexico"]

    if (D_region) {
        for (let i = 0; i < region.length; i++) {
            D_region.innerHTML += `
            <li><a class="dropdown-item" href="#">${region[i]}</a></li>`;
        }
    }

    let D_region1 = document.getElementById('D_region1');
    const region1 = ["select", "Argentina", "Bermuda", "Bolivia", "Brazil", "Chile", "Colombia", "Costa Rica", "Dominican Republic", "Ecuador", "El Salvador", "Guatemala", "Honduras", "Jamaica", "Panama", "Paraguay", "Peru", "Puerto Rico", "Trinidad and Tobago", "Uruguay", "Venezuela"]

    if (D_region1) {
        for (let i = 0; i < region1.length; i++) {
            D_region1.innerHTML += `
            <li><a class="dropdown-item" href="#">${region1[i]}</a></li>`;
        }
    }

    let D_region2 = document.getElementById('D_region2');
    const region2 = ["select", "Albania", "Andorra", "Armenia", "Austria", "Belarus", "Belgium", "Bosnia-Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Malta", "Moldova", "Monaco", "Montenegro", "Montenegro", "Netherlands", "Norway", "Poland", "Portugal", "Romania", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom"]

    if (D_region2) {
        for (let i = 0; i < region2.length; i++) {
            D_region2.innerHTML += `
            <li><a class="dropdown-item" href="#">${region2[i]}</a></li>`;
        }
    }

    let D_region3 = document.getElementById('D_region3');
    const region3 = ["select", "Bahrain", "Egypt", "Iran", "Iraq", "Israel", "Jordan", "Kuwait", "Lebanon", "Levant", "Lybia", "Morocco", "Oman", "Qatar", "Saudi Arabia", "Tunisia", "United Arab Emirates", "Yemen"]

    if (D_region3) {
        for (let i = 0; i < region3.length; i++) {
            D_region3.innerHTML += `
            <li><a class="dropdown-item" href="#">${region3[i]}</a></li>`;
        }
    }

    let D_region4 = document.getElementById('D_region4');
    const region4 = ["select", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Comoros", "Congo", "Cote D'Ivoire", "Djibouti", "Gabon", "Ghana", "Kenya", "Lesotho", "Malawi", "Mali", "Mauritius", "Mozambique", "Namibia", "Nigeria", "Rwan", "Senegal", "South Africa", "Swaziland", "Tanzania", "Uganda", "Zambia", "Zimbabwe"]

    if (D_region4) {
        for (let i = 0; i < region4.length; i++) {
            D_region4.innerHTML += `
            <li><a class="dropdown-item" href="#">${region4[i]}</a></li>`;
        }
    }

    let D_region5 = document.getElementById('D_region5');
    const region5 = ["select", "Australia", "Bangladesh", "Cambodia", "Hong Kong", "India", "Indonesia", "Japan", "Kazakhstan", "Macao", "Mainland China", "Malaysia", "Myanmar", "New Zealand", "Pakistan", "Philippines", "Reunion", "Singapore", "South Korea", "Sri Lanka", "Taiwan", "Thailand", "Vietnam"]

    if (D_region4) {
        for (let i = 0; i < region5.length; i++) {
            D_region5.innerHTML += `
            <li><a class="dropdown-item" href="#">${region5[i]}</a></li>`;
        }
    }

    // partner alliance community -- about program

    let D_aboutpro = document.getElementById('D_aboutpro');
    const aboutpro = [
        {
            image: "comm1.png",
            title: "Cloud",
            desc: "Intel® Cloud Insider Community offers continuously refreshed, world-class cloud content and tools. Members have the opportunity to connect with peers and the ecosystem to take innovative, joint cloud solutions to market.",
            link: ""
        },
        {
            image: "comm2.png",
            title: "IoT and Edge Solutions",
            desc: "Join the innovators who are transforming IoT. The IoT and Edge Solutions Community can help you solve technical challenges and build your business with ready-to-run IoT solutions—plus tried and true initiatives that advance collaboration between partners.",
            link: ""
        },
        {
            image: "comm3.png",
            title: "FPGA",
            desc: "The Intel FPGA community can help you unlock the potential of these flexible, programmable devices for your customers and your business. Explore ready-to-deploy, FPGA-based solutions for networking, media, AI, data analytics, finance and other compute-intensive applications. Or start building your own custom solution with community tools, training, and our FPGA developer cloud.",
            link: ""
        },
        {
            image: "comm4.png",
            title: "Network Builders",
            desc: "For over a decade, the Intel® Network Builders ecosystem has worked together to develop world-class solutions that solve technical challenges and define the future of the communications industry. Join the innovators transforming the network.",
            link: ""
        },
    ]

    if (D_aboutpro) {
        for (let i = 0; i < aboutpro.length; i++) {
            D_aboutpro.innerHTML += `<div class="col-xs-12 col-ms-12 col-sm-6 col-lg-3">
                    <div class="d_box">
                        <div class="d_img">
                            <img src="/img/darshan_image/${aboutpro[i].image}" alt="">
                        </div>
                        <h3><a href="">${aboutpro[i].title}</a></h3>
                        <p></p>
                        <p>${aboutpro[i].desc}</p>
                        <p></p>
                        <p class="d_cta">
                            <a href="" class="d-sm-inline-block d-block text-center">Visit</a>
                        </p>
                    </div>
                </div>`;
        }
    }

    // event page -- intel

    let D_intel = document.getElementById('D_intel');
    const intel = [
        {
            image: "event1.webp",
            title: "Innovation 2024: Accelerating the Future Together",
            desc: "Expand your knowledge, skills, and networks to help you get ahead of the new age of development with deep-dive technical sessions, workshops, hands-on labs, and hackathons to help solve what’s next in AI and beyond.",
            link: ""
        },
        {
            image: "event2.png",
            title: "Intel Vision 2024: Bringing AI Everywhere",
            desc: "Intel Vision is our premier event for business and technology executive leaders to come together and learn about the latest industry trends and solutions in advancements from client, to edge, to data center and cloud.",
            link: ""
        },
        {
            image: "event3.png",
            title: "The Innovation and Vision On-demand Content Catalog 'On365' is Now Live!",
            desc: "Tech experts hand-picked select sessions we know you and your team will enjoy and refer to all year. On365 will be your go-to resource to view recorded keynotes, technical insights, sessions, and demos from Intel Vision and Intel Innovation.",
            link: ""
        },
    ]

    if (D_intel) {
        for (let i = 0; i < intel.length; i++) {
            D_intel.innerHTML += `<div class="row mt-3 ${i == 1 ? "flex-row-reverse" : null} align-items-center">
                <div class="col-xs-12 col-sm-5">
                    <div class="d_img">
                        <img src="/img/darshan_image/${intel[i].image}" alt="">
                    </div>
                </div>
                <div class="col-xs-12 col-sm-7">
                    <div class="d_text">
                        <h2>${intel[i].title}</h2>
                        <p>${intel[i].desc}</p>
                        <div class="row mt-2">
                            <div class="col-xs-12">
                                <a href="" class="d-sm-inline-block d-block d_ctaitem text-center">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        }
    }

    // event page -- modal

    let D_modal = document.getElementById('D_modal');
    const list = ["CIO (Chief Information Officer)", "CTO (Chief Technology Officer)", "COO (Chief Operating Officer)", "CISO (Chief Information Security Officer)", "Owner/Executive Management", "IT Management", "Data Sciences", "Software/Application Development/Engineering", "Hardware Development/Engineering", "FPGA Engineering", "Solution/System Architecture", "Infrastructure/Datacenter Architecture", "Network Architecture/Engineering", "IT Information Security", "IT Storage", "IT User Devices - PCs tablets etc", "IT Generalist/Other IT", "Facilities/Audio Video", "Line of Business or Service Head", "Finance/Procurement", "Sales", "Marketing", "Consultant", "Hobbyist/Maker", "Educator", "Student", "Scientist/Researcher", "Other", "Press Analyst", "Operations Engineer"]

    if (D_modal) {
        for (let i = 0; i < list.length; i++) {
            D_modal.innerHTML += `
            <option>${list[i]}</option>`;
        }
    }

    let D_modal1 = document.getElementById('D_modal1');
    const list1 = ["Artificial Intelligence", "Network Transformation", "Data Center", "Internet of Things", "Cloud Solutions"]

    if (D_modal1) {
        for (let i = 0; i < list1.length; i++) {
            D_modal1.innerHTML += `
            <option>${list1[i]}</option>`;
        }
    }

    let D_modal2 = document.getElementById('D_modal2');
    const list2 = ["Agriculture", "Apparel", "Banking", "Biotechnology", "Chemicals", "Communications", "Construction", "Consulting", "Education", "Electronics", "Energy", "Engineering", "Entertainment", "Environmental", "Finance", "Food & Beverage", "Government", "Healthcare", "Hospitality", "Insurance", "Machinery", "Manufacturing", "Media", "Not For Profit", "Others", "Recreation", "Retail", "Shipping", "Technology", "Telecommunications", "Transportation", "Utilities"]

    if (D_modal2) {
        for (let i = 0; i < list2.length; i++) {
            D_modal2.innerHTML += `
            <option>${list2[i]}</option>`;
        }
    }

    let D_modal3 = document.getElementById('D_modal3');
    const list3 = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
        "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia",
        "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini",
        "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
        "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
        "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
        "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South",
        "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
        "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives",
        "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
        "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia",
        "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay",
        "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
        "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
        "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
        "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname",
        "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
        "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
        "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];

    if (D_modal3) {
        for (let i = 0; i < list3.length; i++) {
            D_modal3.innerHTML += `
            <option>${list3[i]}</option>`;
        }
    }

    // CouldTV page -- new episode

    let D_newepisode = document.getElementById('D_newepisode');
    const newepisode = [
        {
            image: "e1.png",
            title: "How to Simplify Cloud Optimization and FinOps",
            desc: "Learn how cloud tools from Intel and Deloitte can help you optimize customer cloud efficiency and enable FinOps capabilities.",
            link: ""
        },
        {
            image: "e2.png",
            title: "Modernization Opportunities with Microsoft",
            desc: "Find out how end of support for Microsoft Windows Server and SQL Server 2012 creates an opportunity for your business.",
            link: ""
        },
        {
            image: "e3.png",
            title: "5th Gen Intel® Xeon® Processors Overview",
            desc: "Find out how 5th Gen Intel® Xeon® Scalable processors can help support today’s critical business objectives.",
            link: ""
        },
        {
            image: "e4.jpg",
            title: "Cloud Workload Modernization",
            desc: "How to queue up the cloud workload modernization conversation with your customers.",
            link: ""
        },
    ]

    if (D_newepisode) {
        for (let i = 0; i < newepisode.length; i++) {
            D_newepisode.innerHTML += `<div class="col-12 col-sm-6 col-lg-3">
                    <div class="d_epi">
                        <div class="d_img">
                            <img src="/img/darshan_image/${newepisode[i].image}" alt="">
                        </div>
                        <h3 class="text-start mt-2"><a href="">${newepisode[i].title}</a></h3>
                        <p class="text-start mb-0">${newepisode[i].desc}</p>
                    </div>
                </div>`;
        }
    }

    record_count();
    Pagination(page, currentRecords);
    if (document.getElementById('VK_search_result_span')) {
        document.getElementById('VK_search_result_span').innerHTML = currentRecords.length + " Results";
    }
    if (document.getElementById('VK_accoridan')) {
        if (window.innerWidth < 1200) {
            document.getElementById('VK_accoridan').classList.add('d-none')
            document.getElementById('VK_accoridan').classList.remove('VK_Block')
        }
    }


// if (document.getElementById('VK_select_filters')) {
//     document.getElementById('VK_select_filters').addEventListener("change", function () {
//         let val = document.getElementById('VK_select_filters').value
//         sortBy(val)
//     })
// }

// if (document.getElementById('VK_selected_filters')) {
//     document.getElementById('VK_selected_filters').addEventListener("change", function () {
//         let val = document.getElementById('VK_selected_filters').value;
//         sortBy(val);
//     })

}



document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.VK_client_app_navigation');
    const navLinks = document.querySelectorAll('.VK_ai_nav_bar a');
    const sections = document.querySelectorAll('section[id]');
    let navOffset = nav.offsetTop;

    // Add smooth scrolling to all links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Sticky Navigation
    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= navOffset) {
            nav.classList.add('VK_sticky_nav_bar');
        } else {
            nav.classList.remove('VK_sticky_nav_bar');
        }

        // Section highlighting
        sections.forEach(section => {
            const sectionTop = section?.offsetTop - nav.clientHeight;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${section.id}`) {
                        link.classList.add('active');
                        
                        // Ensure the active link is visible in the nav bar
                        const navBar = document.querySelector('.VK_ai_nav_bar');
                        const activeLink = document.querySelector('.VK_ai_nav_bar a.active');
                        const linkRect = activeLink.getBoundingClientRect();
                        const navBarRect = navBar.getBoundingClientRect();

                        if (linkRect.left < navBarRect.left || linkRect.right > navBarRect.right) {
                            activeLink.scrollIntoView({ inline: 'center', behavior: 'smooth' });
                        }
                    }
                });
            }
        });
    });
});


// ------------------ json data --------------------

// Offerning Compoenents

let developer_catalog_card_data = [
    {
        name: "ASUS Internet of Things",
        description: "ASUS IoT is a sub-brand of ASUS dedicated to the creation of incredible solutions in the fields of AI and IoT. Our mission is to become a trusted provider of embedded systems and a partner in the AIoT solutions ecosystem. ASUS IoT strives to deliver best-in-class products and services across diverse vertical markets – providing convenient and efficient",
        image: "c1.png",
        link:"",
        anchor:"Ingram Micro Inc Canada",
        status: "Updated"
    },
    {
        name: "SI-62S - AI Education Platform",
        description: "ASUS IoT is a sub-brand of ASUS dedicated to the creation of incredible solutions in the fields of AI and IoT. Our mission is to become a trusted provider of embedded systems and a partner in the AIoT solutions ecosystem. ASUS IoT strives to deliver best-in-class products and services across diverse vertical markets – providing convenient and efficient",
        image: "c1.png",
        link:"",
        anchor:"Ingram Micro Inc Canada",
        status: "Updated"
    },
    {
        name: "G-NETX710F4",
        description: "ASUS IoT is a sub-brand of ASUS dedicated to the creation of incredible solutions in the fields of AI and IoT. Our mission is to become a trusted provider of embedded systems and a partner in the AIoT solutions ecosystem. ASUS IoT strives to deliver best-in-class products and services across diverse vertical markets – providing convenient and efficient",
        image: "c1.png",
        link:"",
        anchor:"Ingram Micro Inc Canada",
        status: "Updated"
    },
    {
        name: "ASUS Internet of Things",
        description: "ASUS IoT is a sub-brand of ASUS dedicated to the creation of incredible solutions in the fields of AI and IoT. Our mission is to become a trusted provider of embedded systems and a partner in the AIoT solutions ecosystem. ASUS IoT strives to deliver best-in-class products and services across diverse vertical markets – providing convenient and efficient",
        image: "c1.png",
        link:"",
        anchor:"Ingram Micro Inc Canada",
        status: "Updated"
    },
    {
        name: "ASUS Internet of Things",
        description: "ASUS IoT is a sub-brand of ASUS dedicated to the creation of incredible solutions in the fields of AI and IoT. Our mission is to become a trusted provider of embedded systems and a partner in the AIoT solutions ecosystem. ASUS IoT strives to deliver best-in-class products and services across diverse vertical markets – providing convenient and efficient",
        image: "c1.png",
        link:"",
        anchor:"Ingram Micro Inc Canada",
        status: "Updated"
    },
    {
        name: "ASUS Internet of Things",
        description: "ASUS IoT is a sub-brand of ASUS dedicated to the creation of incredible solutions in the fields of AI and IoT. Our mission is to become a trusted provider of embedded systems and a partner in the AIoT solutions ecosystem. ASUS IoT strives to deliver best-in-class products and services across diverse vertical markets – providing convenient and efficient",
        image: "c1.png",
        link:"",
        anchor:"Ingram Micro Inc Canada",
        status: "Updated"
    },
    {
        name: "ASUS Internet of Things",
        description: "ASUS IoT is a sub-brand of ASUS dedicated to the creation of incredible solutions in the fields of AI and IoT. Our mission is to become a trusted provider of embedded systems and a partner in the AIoT solutions ecosystem. ASUS IoT strives to deliver best-in-class products and services across diverse vertical markets – providing convenient and efficient",
        image: "c1.png",
        link:"",
        anchor:"Ingram Micro Inc Canada",
        status: "Updated"
    },
    {
        name: "ASUS Internet of Things",
        description: "ASUS IoT is a sub-brand of ASUS dedicated to the creation of incredible solutions in the fields of AI and IoT. Our mission is to become a trusted provider of embedded systems and a partner in the AIoT solutions ecosystem. ASUS IoT strives to deliver best-in-class products and services across diverse vertical markets – providing convenient and efficient",
        image: "c1.png",
        link:"",
        anchor:"Ingram Micro Inc Canada",
        status: "Updated"
    },
    {
        name: "ASUS Internet of Things",
        description: "ASUS IoT is a sub-brand of ASUS dedicated to the creation of incredible solutions in the fields of AI and IoT. Our mission is to become a trusted provider of embedded systems and a partner in the AIoT solutions ecosystem. ASUS IoT strives to deliver best-in-class products and services across diverse vertical markets – providing convenient and efficient",
        image: "c1.png",
        link:"",
        anchor:"Ingram Micro Inc Canada",
        status: "Updated"
    },
    {
        name: "ASUS Internet of Things",
        description: "ASUS IoT is a sub-brand of ASUS dedicated to the creation of incredible solutions in the fields of AI and IoT. Our mission is to become a trusted provider of embedded systems and a partner in the AIoT solutions ecosystem. ASUS IoT strives to deliver best-in-class products and services across diverse vertical markets – providing convenient and efficient",
        image: "c1.png",
        link:"",
        anchor:"Ingram Micro Inc Canada",
        status: "Updated"
    },{
        name: "ASUS Internet of Things",
        description: "ASUS IoT is a sub-brand of ASUS dedicated to the creation of incredible solutions in the fields of AI and IoT. Our mission is to become a trusted provider of embedded systems and a partner in the AIoT solutions ecosystem. ASUS IoT strives to deliver best-in-class products and services across diverse vertical markets – providing convenient and efficient",
        image: "c1.png",
        link:"",
        anchor:"Ingram Micro Inc Canada",
        status: "Updated"
    },
    {
        name: "ASUS Internet of Things",
        description: "ASUS IoT is a sub-brand of ASUS dedicated to the creation of incredible solutions in the fields of AI and IoT. Our mission is to become a trusted provider of embedded systems and a partner in the AIoT solutions ecosystem. ASUS IoT strives to deliver best-in-class products and services across diverse vertical markets – providing convenient and efficient",
        image: "c1.png",
        link:"",
        anchor:"Ingram Micro Inc Canada",
        status: "Updated"
    },
    {
        name: "ASUS Internet of Things",
        description: "ASUS IoT is a sub-brand of ASUS dedicated to the creation of incredible solutions in the fields of AI and IoT. Our mission is to become a trusted provider of embedded systems and a partner in the AIoT solutions ecosystem. ASUS IoT strives to deliver best-in-class products and services across diverse vertical markets – providing convenient and efficient",
        image: "c1.png",
        link:"",
        anchor:"Ingram Micro Inc Canada",
        status: "Updated"
    },{
        name: "ASUS Internet of Things",
        description: "ASUS IoT is a sub-brand of ASUS dedicated to the creation of incredible solutions in the fields of AI and IoT. Our mission is to become a trusted provider of embedded systems and a partner in the AIoT solutions ecosystem. ASUS IoT strives to deliver best-in-class products and services across diverse vertical markets – providing convenient and efficient",
        image: "c1.png",
        link:"",
        anchor:"Ingram Micro Inc Canada",
        status: "Updated"
    },
    {
        name: "ASUS Internet of Things",
        description: "ASUS IoT is a sub-brand of ASUS dedicated to the creation of incredible solutions in the fields of AI and IoT. Our mission is to become a trusted provider of embedded systems and a partner in the AIoT solutions ecosystem. ASUS IoT strives to deliver best-in-class products and services across diverse vertical markets – providing convenient and efficient",
        image: "c1.png",
        link:"",
        anchor:"Ingram Micro Inc Canada",
        status: "Updated"
    },
]


// // -------------------------------- pagination ---------------------------------------


let originalRecords = developer_catalog_card_data;
let currentRecords = [...originalRecords];
let page = 1;

let all_data = () => {
    page = 1;
    currentRecords = [...originalRecords];
    Pagination(page, currentRecords);
};

let Pagination = (page, record) => {
    if (record.length !== 0) {
        if (document.getElementById('VK_curent_page')) {
            document.getElementById('VK_curent_page').innerHTML = page;
            let limit = 10;
            let first = (limit * page) - limit;
            let last = limit * page;
            let total_page = Math.ceil(record.length / limit);

            document.getElementById('VK_total_page_count').innerHTML = total_page;
            let result = record.slice(first, last);
            let VK_card_map = document.getElementById('VK_card_parent');
            VK_card_map.innerHTML = '';
            for (let i = 0; i < result.length; i++) {
                VK_card_map.innerHTML += `<div class="col-xxl-3 VK_result_card col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-3">
            <div class="VK_card_parent bg-white h-100">
            <div class="d_offer">Offering</div>
                                        <div class="VK_card_img_box d-flex justify-content-center overflow-hidden">
                                            <img src="/img/darshan_image/${result[i].image}" alt=""
                                                class="h-100 object-fit-contain">
                                        </div>
                                        <hr class="m-0">
                                        <div class="VK_card_details px-3 pb-3 mt-3">
                                        <div class="VK_card_Title">
                                                <a href="" class="text-decoration-none fw-normal">${result[i].name}</a>
                                            </div>
                                            ${result[i].system ? `<div class="VK_card_system py-1">
                                                <span><strong>Operating System : </strong> ${result[i].system}</span>
                                                </div>` : ""}
                                                <div class="VK_card_description py-1">
                                            
                                                <span class="mt-2 d-block">${result[i].description}<br>by <a>${result[i].anchor}</a></span>
                                                </div>
                                                </div>
                                    </div>
                                    </div>`;
            }
        }
    }
    else {
        document.getElementById('VK_card_parent').innerHTML = `<h1 class="text-danger">Record Not Found</h1>`
    }
};

let ince = (amt) => {
    let total_page = parseInt(document.getElementById('VK_total_page_count').innerHTML);
    let curent_page = parseInt(document.getElementById('VK_curent_page').innerHTML);
    curent_page += amt;
    if (curent_page <= 0) curent_page = 1;
    if (curent_page >= total_page) curent_page = total_page;
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    Pagination(curent_page, currentRecords);
};

let operating_system_filter = (op_system) => {
    currentRecords = originalRecords.filter((ele) => {
        return ele.system != null && ele.system.includes(op_system);
    });
    page = 1;
    Pagination(page, currentRecords);
};

let content_type = () => {
    let check_box = document.getElementById('VK_filter_checkbox');
    if (check_box.checked) {
        currentRecords = originalRecords.filter((ele) => {
            return ele.content == "Software Overviews";
        });
    } else {
        currentRecords = [...originalRecords];
    }
    page = 1;
    Pagination(page, currentRecords);
};

let record_count = () => {
    let id = ['Linux', 'Microsoft_Windows', 'macOS', 'Android', 'Chrome', 'Chromium', 'Unix']
    let op = ["Linux", "Microsoft Windows", "macOS", "Android", "Chrome", "Chromium", "Unix"]
    for (let i = 0; i < op.length; i++) {
        let arrr = originalRecords.filter((ele) => {
            return ele.system != null && ele.system.includes(op[i]);
        });
        let chk = id[i];
        if (document.getElementById(chk)) {
            document.getElementById(chk).innerHTML = id[i] + " (" + arrr.length + ")";
        } else {
            return;
        }
    }
}

let VK_catalog_searching = () => {
    let search = document.getElementById('VK_software_catalog_search_bar')
    if (search.value.length > 2) {
        console.log(currentRecords);

    }
}

// window.onload = function () {
//     // developer catalog
//     record_count();
//     Pagination(page, currentRecords);
//     if (document.getElementById('VK_search_result_span')) {
//         document.getElementById('VK_search_result_span').innerHTML = currentRecords.length + " Results";
//     }
//     if (document.getElementById('VK_accoridan')) {
//         if (window.innerWidth < 1200) {
//             document.getElementById('VK_accoridan').classList.add('d-none')
//             document.getElementById('VK_accoridan').classList.remove('VK_Block')
//         }
//     }


// // if (document.getElementById('VK_select_filters')) {
// //     document.getElementById('VK_select_filters').addEventListener("change", function () {
// //         let val = document.getElementById('VK_select_filters').value
// //         sortBy(val)
// //     })
// // }

// // if (document.getElementById('VK_selected_filters')) {
// //     document.getElementById('VK_selected_filters').addEventListener("change", function () {
// //         let val = document.getElementById('VK_selected_filters').value;
// //         sortBy(val);
// //     })
// // }

let sortBy = (val) => {

    switch (val) {
        case 'A-Z':
            currentRecords = sortByNameAscending([...currentRecords]);
            break;
        case 'Z-A':
            currentRecords = sortDescendingByName([...currentRecords]);
            break;
    }
    Pagination(1, currentRecords);
}

function sortByNameAscending(arr) {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
}

function sortDescendingByName(arr) {
    return arr.sort((a, b) => b.name.localeCompare(a.name));
}

// Category

let D_categorylist = document.getElementById('D_categorylist');
    const categorylist = [
        'Component'
    ];

    if (D_categorylist) {
        for (let i = 0; i < categorylist.length; i++) {
            D_categorylist.innerHTML += `
            <li class="py-2"><a>${categorylist[i]}</a></li>`;
        }
    }

// // Processer item

let D_processer = document.getElementById('D_processer');
    const processer = [
        'Intel Atom® Processor','Intel® Celeron® Processor','Intel® Core™ Processors','Intel® Core™ Ultra Processors','Intel® Movidius™ Vision Processing Units','Intel® Pentium® Processor','Intel® Processor','Intel® Xeon® Processors'
    ];

    if (D_processer) {
        for (let i = 0; i < processer.length; i++) {
            D_processer.innerHTML += `
            <li class="py-2"><a>${processer[i]}</a></li>`;
        }
    }

// Region
    
let D_Region = document.getElementById('D_region');
const region = [
    'Americas','Asia, Pacific, and Japan','Europe, Middle East, and Africa','Peoples Republic of China'
];

if (D_Region) {
    for (let i = 0; i < region.length; i++) {
        D_Region.innerHTML += `
        <li class="py-2"><a>${region[i]}</a></li>`;
    }
}


// Usecase
    
let D_usecase = document.getElementById('D_usecase');
const usecase = [
    'Advanced Analytics','Asset & Operations Optimization','Cloud Computing','Collaboration','Connected Worker','Control Optimization & Autonomy','Control Optimization & Autonomy','Data Science','Digital Security Surveillance','Digital Signage','Energy Monitoring','Environmental Monitoring','Factory Automation','Health & Life Sciences','High Performance Computing','Human Wellness Monitoring','Intelligent Vending','Interactive Whiteboard','Inventory Management','Logistics & Tracking','Machine Condition Monitoring','Media & Entertainment','Others','Print Imaging and Office Automation','Product Inspection','Robot','Situational Monitoring','Smart Building','Smart City','Smart Home','Storage','Telematics','Video Management'
];

if (D_usecase) {
    for (let i = 0; i < usecase.length; i++) {
        D_usecase.innerHTML += `
        <li class="py-2"><a>${usecase[i]}</a></li>`;
    }
}

// Industry
    
let D_industry = document.getElementById('D_industry');
const industry = [
    'Agriculture','Arts and Entertainment','Automotive','Communications','Defense and Space','Education','Energy and Utilities','Finance and Insurance','Gaming','Government(28)','Health and Life Sciences(102)','Hospitality and Restaurants(25)','Manufacturing(146)','Not For Profit(2)','Others(35)','Professional and Business Services(8)','Real Estate, Rental and Leasing(6)','Retail(95)','Software(6)'
];

if (D_industry) {
    for (let i = 0; i < industry.length; i++) {
        D_industry.innerHTML += `
        <div class="VK_check_box_filter mt-2">
                                                    <input type="checkbox" class="me-2" id="VK_filter_checkbox"
                                                        onclick="content_type()"><span>${industry[i]}
                                                        (100)</span>
                                                </div>`;
    }
}


// partner
    
let D_tier = document.getElementById('D_tier');
const tier = [
    'Titanium(94)','Gold(75)'
];

if (D_tier) {
    for (let i = 0; i < tier.length; i++) {
        D_tier.innerHTML += `
        <div class="VK_check_box_filter mt-2">
                                                    <input type="checkbox" class="me-2" id="VK_filter_checkbox"
                                                        onclick="content_type()"><span>${tier[i]}
                                                        (100)</span>
                                                </div>`;
    }
}






