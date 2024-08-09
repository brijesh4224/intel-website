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
            link: "d_offerning-components.html"
        },
        {
            image: "feature2.png",
            title: "Service",
            desc: "Connect with partners who can support your business needs.",
            link: "d_offerning-service.html"
        },
        {
            image: "feature3.png",
            title: "Software / IP Cores",
            desc: "Review the latest software and IP Core offerings.",
            link: "d_offerning-software.html"
        },
        {
            image: "feature4.png",
            title: "Solution",
            desc: "Find integrated hardware and software solutions.",
            link: "d_offerning-solution.html"
        },
        {
            image: "feature5.png",
            title: "System",
            desc: "Browse integrated sets of hardware and software components.",
            link: "d_offerning-system.html"
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
            link: "d_distributor-select-region.html"
        },
        {
            image: "partner2.jpg",
            title: "FPGA Design Services",
            desc: "Connect with partners who can support your business needs.",
            link:"d_fpga-service.html"
        },
        {
            image: "partner3.jpg",
            title: "Manufacturer",
            desc: "Review the latest software and IP Core offerings.",
            link:"d_partner-manufacturer.html"
        },
        {
            image: "partner4.jpg",
            title: "Solution, Software, and Service Providers",
            desc: "Find integrated hardware and software solutions.",
            link:"d_partner-provider.html"
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
            D_intel.innerHTML += `<div class="row m-0 mt-3 ${i == 1 ? "flex-row-reverse" : null} align-items-center">
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
}



document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.VK_client_app_navigation')) {
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
                const sectionTop = section.offsetTop - nav.clientHeight;
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
    }
});






// ------------------ json data --------------------

// Offerning Compoenents



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
    'Intel Atom® Processor', 'Intel® Celeron® Processor', 'Intel® Core™ Processors', 'Intel® Core™ Ultra Processors', 'Intel® Movidius™ Vision Processing Units', 'Intel® Pentium® Processor', 'Intel® Processor', 'Intel® Xeon® Processors'
];

if (D_processer) {
    for (let i = 0; i < processer.length; i++) {
        D_processer.innerHTML += `
            <li class="py-2"><a>${processer[i]}</a></li>`;
    }
}

// Region

let D_Region5 = document.getElementById('D_region5');
const region5 = [
    'Americas', 'Asia, Pacific, and Japan', 'Europe, Middle East, and Africa', 'Peoples Republic of China'
];

if (D_Region5) {
    for (let i = 0; i < region5.length; i++) {
        D_Region5.innerHTML += `
        <li class="py-2"><a>${region5[i]}</a></li>`;
    }
}


// Usecase

let D_usecase = document.getElementById('D_usecase');
const usecase = [
    'Advanced Analytics', 'Asset & Operations Optimization', 'Cloud Computing', 'Collaboration', 'Connected Worker', 'Control Optimization & Autonomy', 'Control Optimization & Autonomy', 'Data Science', 'Digital Security Surveillance', 'Digital Signage', 'Energy Monitoring', 'Environmental Monitoring', 'Factory Automation', 'Health & Life Sciences', 'High Performance Computing', 'Human Wellness Monitoring', 'Intelligent Vending', 'Interactive Whiteboard', 'Inventory Management', 'Logistics & Tracking', 'Machine Condition Monitoring', 'Media & Entertainment', 'Others', 'Print Imaging and Office Automation', 'Product Inspection', 'Robot', 'Situational Monitoring', 'Smart Building', 'Smart City', 'Smart Home', 'Storage', 'Telematics', 'Video Management'
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
    'Agriculture', 'Arts and Entertainment', 'Automotive', 'Communications', 'Defense and Space', 'Education', 'Energy and Utilities', 'Finance and Insurance', 'Gaming', 'Government(28)', 'Health and Life Sciences(102)', 'Hospitality and Restaurants(25)', 'Manufacturing(146)', 'Not For Profit(2)', 'Others(35)', 'Professional and Business Services(8)', 'Real Estate, Rental and Leasing(6)', 'Retail(95)', 'Software(6)'
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
    'Titanium(94)', 'Gold(75)'
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


// offerning componnets

let offering_components_data = [
    {
        name: "Agilex 7 FPGA Starter Kit",
        description: "The Terasic Agilex 7 FPGA Starter Kit takes advantage of the latest Intel Agilex® 7 SoC FPGA F-Series devices with either 800K or 2.7M logic elements options, offering 50% higher fabric performance and 40% lower power consumption than equivalent Stratix® 10 devices. The Terasic Agilex 7 FPGA Starter Kit combines a number of high-end hardware interfaces such as PCI",
        image: "c2.png",
        link: "",
        anchor: "TERASIC INC",
        status: "Updated"
    },
    {
        name: "PICO-MTU4",
        description: "Pico-ITX Board with Intel® Core™ Ultra 7/Ultra 5",
        image: "c3.png",
        link: "",
        anchor: "AAEON Technology Inc",
        status: "Updated"
    },
    {
        name: "COM-ADNC6",
        description: "COM Express Type 6 Compact Size with Intel Atom® X Series/N-series/Core™ i3 Processors. Intel Atom® X Series/N-series/Core™ i3-N305 CPU, max TDP 15W, DDR5 SODIMM x 1, up to 16GB (non-ECC).",
        image: "c4.png",
        link: "",
        anchor: "AAEON Technology Inc",
        status: "Updated"
    },
    {
        name: "AQ7-ADN",
        description: "Qseven CPU Module with Intel Atom® X Series/N-series/Core™ i3-N305 processor",
        image: "c5.png",
        link: "",
        anchor: "AAEON Technology Inc",
        status: "Updated"
    },
    {
        name: "uCOM-ADN",
        description: "SMARC Module with Intel Atom® Processor X Series, Intel® Processor N-series, & Intel® Core™ i3-N305 Processor",
        image: "c6.png",
        link: "",
        anchor: "AAEON Technology Inc",
        status: "Updated"
    },
    {
        name: "TR K9x/6sd-RCx",
        description: "TR K9x/6sd-RCx is a rugged 3U VPX board based on the Intel® Tiger Lake UP3 Processor for general purpose computer applications. It is designed in alignment with the SOSA™ technical standard for I/O intensive processor boards. It offers up to 4-cores for high performance compute algorithms that are used in senso",
        image: "c7.png",
        link: "",
        anchor: " CONCURRENT TECHNOLOGIES PLC",
        status: "Updated"
    },
    {
        name: "ALN-10 Intel® Alder Lake-N Series Processor based Mini ITX Motherboard",
        description: "The Maxtang ALN-10 is based on the 12th Gen Intel Alder Lake-N series processor ideal for various industrial applications. The board supports up to 8 cores and 8 threads, faster graphics performance with low power consumption. Its small form factor design is great for IoT deployments that require powerful",
        image: "c8.png",
        link: "",
        anchor: "Shenzhen Datang Computer Co., Ltd.",
        status: "Updated"
    },
    {
        name: "AIMB-788E",
        description: "The AIMB-788E is an advanced ATX motherboard designed for industrial applications, supporting Intel® Core™ processors (14th/13th/12th Gen). It features the Q670E/R680E chipset and offers dual PCIe x16 expansion slots, four DIMM sockets supporting up to 192 GB of DDR5 RAM, and dual M.2 slots for NVMe RAID configurations. The motherboard",
        image: "c9.png",
        link: "",
        anchor: " ADVANTECH CO., LTD.",
        status: "Updated"
    },
    {
        name: "Intel® Xeon® Dual Socket Purley GPU Server Motherboard - Specification",
        description: "The JCYK YK-P11DPG-QT6 Dual Socket Server Motherboard leverages the Intel® Purley platform (Intel® PCH C621 chipset and dual socket LGA3647 CPU). It supports 2nd Gen Intel® Xeon® Scalable processors and six-channel DDR4-2933 ECC RDIMM, offering a cost-effective and flexible IO expansion",
        image: "c10.png",
        link: "",
        anchor: " 深圳金超云控科技有限公司",
        status: "Updated"
    },
    {
        name: "KEIm-A5ESoM",
        description: "The KEIm-A5ESoM is a System-on-Module (SoM) powered by Intel Agilex 5 SoC FPGA E-Series. The SoM board is equipped with 4GByte LPDDR4 memory for HPS, dual channels of 4Gbyte LPDDR4 memory, 32GByte eMMC memory for storage, 2Gbit QSPI flash as configuration memory. The SoM dimensions are 118 x 77mm and c",
        image: "c10.png",
        link: "",
        anchor: " KONDO ELECTRONICS INDUSTRY",
        status: "Updated"
    }, {
        name: "COM Express C6C-ASL",
        description: "The MSC C6C-ASL features the Intel Atom® Processor x7000RE/C Series. With support for up to eight processor cores, the module fits to a wide range of applications including automation, point-of-sales terminals, digital signage controllers, HMI solutions and medical equipment. The board is ideal for system products that are exposed to harsh ambient conditions. It is designed",
        image: "c12.png",
        link: "",
        anchor: "Avnet Embedded",
        status: "Updated"
    },
    {
        name: "LIVE-AD600",
        description: "On board Intel® Raptor Lake-U/P series processors 2x DDR5 SO-DIMM with a maximum memory of 64GB in total. Intel® 2.5G network, single and dual network options, TPM2.0, M.2 SSD, M.2 WIFI, 2 HDMI 2.0 inputs and 2 HDMI 2.0 outputs, 1 Type-C (USD3.2 + DP), 1 MXM graphics card slot 82x70MM; 1 MIC IN, 1 Line outDC 12-24V; dimensions: 95 x 205 mm",
        image: "c13.png",
        link: "",
        anchor: "Shenzhen Piesia Electronics Co.,Ltd",
        status: "Updated"
    },
    {
        name: "NUC-1365UE/D5",
        description: "Intel® 13th Gen (Raptor Lake-P) Core™ Processors i7-1365UE, 2 x 262-pin SO-DIMM DDR5 5200MHz up to 64GB (32GB per DIMM), 1 x USB4 / Thunderbolt™ 4, 5 x USB 3.2 Gen2, 2 x USB 2.0, 1 x M.2 Key M, 1 x M.2 Key E, 1 x COM, 1 x SATA3, 2 x Intel 2.5 Gigabit LAN, Supports Quad display, 1 x HDMI 2.0b, 1 x DP 2.1 (from USB4), 2 x DP 1.4a (1 from",
        image: "c14.png",
        link: "",
        anchor: "Asrock",
        status: "Updated"
    }, {
        name: "conga-SA8",
        description: "Industrial grade SMARC module based on Intel Atom® x7000RE Series with up to 8 cores, max. 16 GByte soldered LPDDR5 and Virtualization ready with RTS Hypervisor",
        image: "c15.png",
        link: "",
        anchor: "CONGATEC AG",
        status: "Updated"
    },
    {
        name: "CONGATEC AG",
        description: "The design of the REECH R720 motherboard complies with the OCSP specifications: the 14-layer PCB+Power busbar (optional on demand) design, with cost and performance balanced; the independent BMC card design with interface definition complying with the DC-SCM specifications; the motherboard and Riser card have no fixed transfer interfaces, adoptingBYD COMPANY LIMITED",
        image: "c16.png",
        link: "",
        anchor: "BYD COMPANY LIMITED",
        status: "Updated"
    },
]

// offerning service
let offering_service_data = [
    {
        name: "Managed Services",
        description: "MicroAge provides a full suite of managed IT services that can be tailored to meet the needs of any business. Our team of dedicated professionals can monitor your IT assets and provide the technical support needed to handle any hardware and software issues that could compromise your network.",
        image: "ser1.png",
        link: "",
        anchor: "MicroAge DIL (Drummond Informatique Ltée)",
        status: "Updated"
    },
    {
        name: "Electronic Product Development From Concept to Production",
        description: "Orchid Technologies Engineering and Consulting specializes in the design and development of high technology electronic products. Today’s electronic product design and development requires the skillful blend of expert hardware and software engineering together wit",
        image: "ser2.png",
        link: "",
        anchor: "ORCHID TECHNOLOGIES ENGINEERING & CONSULTING, INC.",
        status: "Updated"
    },
    {
        name: "POS Kiosks for Self Order",
        description: "POS kiosks are used in multiple verticals for self-order. Touchscreen, computer, enclosure and often a payment device.",
        image: "ser3.png",
        link: "",
        anchor: "Kiosk Manufacturer Association",
        status: "Updated"
    },
    {
        name: "custom gaming solution",
        description: "In our store we are able to offer counseling for your PC configuration for gaming. If you are a basic gamer and want improve your existing PC or buy a new one you can come to our store and our specialists will help you in choosing the right product for you. We know that gaming is a huge world and you need to take account of many aspects to configure the right PC",
        image: "ser4.png",
        link: "",
        anchor: "DIGITAL NETWORK SRL",
        status: "Updated"
    },
    {
        name: "FPGA Design services",
        description: "Design services supporting from design specification creation to RTL coding, verification planning, verification environment creation, simulation, and on-system verification.Functional safety services supporting from Functional Safety Management to Concept, System, Design, and Verification phases by the engineers qualified",
        image: "ser1.png",
        link: "",
        anchor: " VERIFICATION TECHNOLOGY INC.",
        status: "Updated"
    },
    {
        name: "AI Voice engineering & consulting",
        description: "OmniSpeech leverage decades of voice R&D and software development experience to help you improve voice experiences on any app or device. Available as a development contractor, consultants, QA support staff, and more, OmniSpeech technical and business resources are a force multiplier for resource strapped teams looking",
        image: "ser5.png",
        link: "",
        anchor: "OmniSpeech",
        status: "Updated"
    },
    {
        name: "Generative AI Consulting",
        description: "Shyena Tech Yarns provide consulting services to build generative AI solution. Our team is expert in designing and deploying solutions using state of art large language models. We provide support to build solutions on cloud and on premises.",
        image: "ser1.png",
        link: "",
        anchor: "Shyena Tech Yarns Pvt Ltd",
        status: "Updated"
    },
    {
        name: "Gcore Custom Software Development",
        description: "Custom Software Development. Delivered on time, with quality assurance, there is no need to hire developers or invest in infrastructure. After releasing the product, we take over the technical support and continue working on the new features. Reduce your costs and accelerate the development!",
        image: "ser6.png",
        link: "",
        anchor: "Gcore",
        status: "Updated"
    },
    {
        name: "Pratexo Studio",
        description: "Pratexo is the edge solution acceleration platform that brings the power of cloud computing to the far edge, simplifying and accelerating the ability to deploy and manage valuable solutions to critical operational issues. The Pratexo Design Studio allows solutions architects (SAs) to automatically generate code and physically deploy ‘micro’ clouds to the edge, enabli",
        image: "ser1.png",
        link: "",
        anchor: "Gcore",
        status: "Updated"
    },
    {
        name: "BrainFrame AI v.29",
        description: "Factory safety using vision and AI: keep workers safe from injury and flag process issues.",
        image: "ser7.png",
        link: "",
        anchor: "Aotu.ai",
        status: "Updated"
    }, {
        name: "Service",
        description: "Harware and software networking",
        image: "ser1.png",
        link: "",
        anchor: "Microman",
        status: "Updated"
    },
    {
        name: "DALY - DEVICE AS A SERVICE OFFERING",
        description: "Device as a Service (DaaS) is a device management solution that allows end-users to be more independent and productive and easily manage their computing devices. By adopting the appropriate IT hardware and obtaining permanent support from anywhere in the world, DaaS ensures improved accessibility, greater reliability",
        image: "ser1.png",
        link: "",
        anchor: "Daly Computers",
        status: "Updated"
    },
    {
        name: "Gcore Server DDoS Protection",
        description: "Advanced DDoS protection for servers, infrastructure and web resources against attacks at the network (L3,) transport (L4,) and application (L7) layers in data centers around the world. Gcore is a trusted expert in security solutions, hosting, and edge computing, and the security team possesses expert knowledge in server DDoS",
        image: "ser8.png",
        link: "",
        anchor: "Gcore",
        status: "Updated"
    }, {
        name: "Gcore Infrastructure for Video Streaming",
        description: "Reliable local and global infrastructure for streaming, CDN and WebRTC that can scale to 100 million viewers and beyond. Gcore streaming solution covers all technical issues: upload, live ingest, transcode, record, store, process video using machine learning, deliver via CDN, playback. The key streaming platform features: live",
        image: "ser9.png",
        link: "",
        anchor: "Gcore",
        status: "Updated"
    },
]

// offerning software
let offering_software_data = [
    {
        name: "LZ4SNP-D: LZ4/Snappy Data Decompressor",
        description: "LZ4SNP-D is a custom hardware implementation of a lossless data decompression engine for the LZ4 and Snappy compression algorithms. The core receives compressed files, automatically detects the LZ4 or Snappy format, and outputs the decompressed data. The core features fast processing with low latency and high throughput. ",
        image: "s1.png",
        link: "",
        anchor: "CAST",
        status: "Updated"
    },
    {
        name: "Robo/TSN for Industrial Multi-Gigabit Ethernet - MLE FPGA IP Core Design",
        description: "MLE’s Robo/TSN IP can tunnel modern multi-Gig sensor data (GigEVision, PCIe, MIPI CSI-2, GMSL, …) as well as industrial protocols like Ethercat or Profinet , and is scalable from 1 to 100 Gbps to connect sensors and actuators from automation cells to AI engines and/or virtualized/software PLCs i",
        image: "s2.png",
        link: "",
        anchor: "MISSING LINK ELECTRONICS",
        status: "Updated"
    },
    {
        name: "siwave.io",
        description: "We have moved our app to the cloud. Go to https://siwave.io and signup for a free account to try our app today (immediate access) and see how easy it is to generate a ready-to-use FPGA inference model.",
        image: "s3.png",
        link: "",
        anchor: "SIWAVE",
        status: "Updated"
    },
    {
        name: "5G Core NC",
        description: "Revolutionize your private mobile network with our cutting-edge 5G Core solution. Engineered for seamless integration and unparalleled performance, our 5G Core delivers robust, scalable, and secure connectivity designed to meet the advanced needs of modern enterprises.Our solution supports voice services through SIP and VoLTE, ensuring crystal-clear",
        image: "s4.png",
        link: "",
        anchor: "Cumucore",
        status: "Updated"
    },
    {
        name: "TCP Offload Engine",
        description: "Our TCP/UDP offload engine supports simultaneous connection of more than 10,000 sessions on a single core, which is a feature of our IP along with its high quality and performance.Two types of IP are available, one for embedded devices and the other for servers.For embedded devices, our TCP/UDP offload engine provides high-speed communication at over 10 Gbps",
        image: "s5.png",
        link: "",
        anchor: "Intellectual Highway",
        status: "Updated"
    },
    {
        name: "Keyword Spotting IP",
        description: "The smallest keyword spotting full turnkey FPGA solution available in the market today.",
        image: "s6.png",
        link: "",
        anchor: "SIWAVE",
        status: "Updated"
    },
    {
        name: "200G NVMe FPGA RAID High Speed Data Recording and Replay - MLE FPGA Design",
        description: "MLE 200G NVMe FPGA RAID can transfer bulky data from multiple sensors to a RAID of NVMe SSDs at speeds 200 Gbps. It implements a channel-based architecture, supports data-in-motion pre- and post-processing and is highly scalable with regards to bandwidth and recording capacity. ",
        image: "s7.png",
        link: "",
        anchor: "MISSING LINK ELECTRONICS",
        status: "Updated"
    },
    {
        name: "400G NVMe FPGA RAID High Speed Data Recording and Replay - MLE FPGA Design",
        description: "MLE 400G NVMe FPGA RAID can transfer bulky data from multiple sensors to a RAID of NVMe SSDs at speeds up to 400 Gbps. It implements a channel-based architecture, supports data-in-motion pre- and post-processing and is highly scalable with regards to bandwidth and recording capacity",
        image: "s7.png",
        link: "",
        anchor: "MISSING LINK ELECTRONICS",
        status: "Updated"
    },
    {
        name: "SSL/TLS offload engine",
        description: "Our SSL/TLS engine accelerates and offloads processing for encryption / decryption and authentication in SSL / TLS by combining our TCP offload and crypt engine. Since the record layer processing is completely hardware offloaded, the user application can overwhelmingly reduce the CPU load which only needs preparing the data to transfer securely.Besides, ",
        image: "s8.png",
        link: "",
        anchor: "Intellectual Highway",
        status: "Updated"
    },
    {
        name: "Noname AI Augmented API Security",
        description: "Noname Security creates the most powerful, complete, and easy-to-use API security platform that helps enterprises discover, analyze, remediate, and test all legacy and modern APIs. Discover - Find and inventory all APIs.",
        image: "s9.png",
        link: "",
        anchor: "Noname Security",
        status: "Updated"
    }, {
        name: "LIN Master Slave IP Core",
        description: "Local Interconnect Network (LIN) is a broadcasting, Single Master, and Multi Slave (up to 16) communication protocol designed to support those features where CAN is not required. LIN Master Slave Benefits LIN is a single wire-based interface, it reduces the cost and complexity of implementation. LIN is the best-suited and best alternative to CAN for applications that do",
        image: "s10.png",
        link: "",
        anchor: "LOGIC FRUIT TECHNOLOGIES",
        status: "Updated"
    },
    {
        name: "FlexRay RTL IP Core",
        description: "FlexRay, a high-speed protocol for advanced vehicles, addresses safety-critical features, surpassing CAN limitations. Essential in modern automotive tech, it caters to the growing demand for high-end performance.",
        image: "s11.png",
        link: "",
        anchor: "LOGIC FRUIT TECHNOLOGIES",
        status: "Updated"
    },
    {
        name: "CAN Controller IP Core",
        description: "A Controller Area Network (CAN) is a serial half duplex and differential two-wired asynchronous communication protocol that allows the microcontrollers and other devices to communicate without a host computer. The CAN core is a bus controller that performs communication according to the CAN 2.0B, and CAN FD specifications according to ISO",
        image: "s12.png",
        link: "",
        anchor: "LOGIC FRUIT TECHNOLOGIES",
        status: "Updated"
    },
    {
        name: "Noname Security Telco Grade API Security Bundle",
        description: "Unleash Telco-Grade API Security from Edge to Cloud — Introducing the Intel® NetSec Accelerator with Intel® Ethernet Controller E810 and Noname Security Remote Engine Bundle! Harness the power of the Intel® NetSec Accelerator Reference Design and 4th Gen Intel® Xeon® Processors with Noname Security Remote Engines",
        image: "s9.png",
        link: "",
        anchor: "Noname Security",
        status: "Updated"
    },
    {
        name: "AI/ML Voice Algorithms for Noise Suppression and Voice Clarity",
        description: "AI/ML algorithms that remove noise and improve voice experiences on any app or device. Includes noise suppression, voice clarity, ASR, voice biometrics, deep fake AI voice detection and more. Platform agnostic: can be embedded on device, included in source code, the cloud etc.",
        image: "s13.png",
        link: "",
        anchor: "OmniSpeech",
        status: "Updated"
    },
]

// offerning software
let offering_solution_data = [
    {
        name: "Edge AI Video Servers for Advanced Data Analytics and Processing",
        description: "NEXCOM’s Edge AI Video Servers, powered by Intel® Xeon® Scalable processors, deliver the much-desired AI performance. The solution incorporates Intel® Smart Edge Open edge services, facilitating the seamless deployment of Kubernetes microservices in edge servers.",
        image: "sol1.png",
        link: "",
        anchor: "NEXCOM INTERNATIONAL CO., LTD.",
        status: "Updated"
    },
    {
        name: "Language Weaver",
        description: "AI-powered machine translation solutions that transform your multilingual content. Enterprise-grade machine translation that is secure by design, infinitely adaptive and fully scalable. Meeting your needs of today and beyond. Helping organizations protect data, accelerate insight, and ignite growth.",
        image: "sol2.png",
        link: "",
        anchor: "RWS",
        status: "Updated"
    },
    {
        name: "POLYTOUCH® PASSPORT 32 - Restaurant Ordering Kiosk",
        description: "The POLYTOUCH® PASSPORT 32 is designed to cope with high workloads and allows more customers to order simultaneously without queues forming - even during rush hours. The self-ordering kiosk makes ordering in the in the system gastronomy faster and more convenient. With its large and responsive display, ",
        image: "sol3.png",
        link: "",
        anchor: "PYRAMID COMPUTER GMBH",
        status: "Updated"
    },
    {
        name: "V-Series AI Wayfinding Kiosk",
        description: "The V-Series AI Wayfinding Kiosk addresses the challenge of enhancing customer navigation and engagement in shopping malls by replacing static signboards with interactive digital solutions. This kiosk integrates V-Series’ AI Wayfinding Software (VigitWFS) and Signage Content Management Software (VigitSIGN).",
        image: "sol4.png",
        link: "",
        anchor: "V-series International Sdn Bhd.",
        status: "Updated"
    },
    {
        name: "V-Series Top-Notch Outdoor LED Displays",
        description: "V-Series Top-Notch Outdoor LED Displays address the market problem of inefficient and high-maintenance traditional outdoor LED billboards by offering a sustainable and energy-saving solution. These displays feature IP66 waterproof protection, high brightness, and a high refresh rate, ensuring durability and visibility in all weather conditions",
        image: "sol5.png",
        link: "",
        anchor: "V-series International Sdn Bhd.",
        status: "Updated"
    },
    {
        name: "V-SeriesE-Cafeteria Solutions (VigitCAFE)",
        description: "V-Series E-Cafeteria Solutions (VigitCAFE) is a comprehensive digital platform designed to transform traditional workplace cafeterias by addressing common issues such as long waiting times, inconvenient accessibility, rushed food preparation, and inefficient inventory management.",
        image: "sol6.png",
        link: "",
        anchor: "V-series International Sdn Bhd.",
        status: "Updated"
    },
    {
        name: "Corvo Identify",
        description: "Corvo® Identify provides the highest accuracy through its deep learning-based technology. Its enhanced capabilities include advanced facial tracking, high accurate facial recognition, appearance search and zone violation detection to identify persons of interest, criminals, missing persons and VIPs from cameras, archived videos",
        image: "sol7.png",
        link: "",
        anchor: "NEVALABS",
        status: "Updated"
    },
    {
        name: "Park Access Data Processing Server HM-ACSE41T",
        description: "It's a server to manage and control physical access system with features including authentication, gate control, access control, log record, communication interface and more, achieving refined people management across the park by counting and deploying personnel database of the park.",
        image: "sol8.png",
        link: "",
        anchor: "Shanghai Huaming Intelligent Terminal Equipment Co., Ltd",
        status: "Updated"
    },
    {
        name: "Noname Security Confidential Computing on AWS",
        description: "Anjuna seaglass container enclaves include Remote Attestation for the ability to verify that the API gateway (e.g. Kong) is indeed running inside an AWS Nitro based Trusted Execution Environment (TEE) and is running the expected trustworthy version of the software.",
        image: "sol9.png",
        link: "",
        anchor: "Noname Security",
        status: "Updated"
    },
    {
        name: "EPIC iO DeepInsights",
        description: "The EPIC iO DeepInsights Platform uses edge computing to gather AI video analytics for real-time insights; IoT sensors to monitor the operational status, health, and safety of workplace environments; and customizable visualization so customers can review and analyze historical data and reports. It provides high-value, actionable.",
        image: "sol11.png",
        link: "",
        anchor: "EPIC IO",
        status: "Updated"
    }, {
        name: "AI-PPE",
        description: "AI-PPE is a video analysis application powered by deep neural networks, designed to identify individuals wearing personal protective equipment (PPE) such as helmets, vests, or both within a designated area. It serves dual purposes: as an access control mechanism in work areas requiring specific PPE for entry, and as a continuous surveillance tool.",
        image: "sol11.png",
        link: "",
        anchor: "A.I.Tech Srl",
        status: "Updated"
    },
    {
        name: "AI-BIO",
        description: "AI-Bio is a video analytics application designed to detect and analyze faces within images, capable of identifying faces even when obscured by obstacles like non-frontal angles, facemasks, or other accessories. Leveraging deep neural networks, it performs sophisticated face analysis to discern gender, estimate age within a range from 0 to 100 years.",
        image: "sol12.png",
        link: "",
        anchor: "A.I.Tech Srl",
        status: "Updated"
    },
    {
        name: "AI-FIRE-PLUS",
        description: "AI-FIRE-PLUS is an advanced video-analysis software developed to enhance fire detection in environments where traditional fire and smoke alarms may not be effective. Utilizing sophisticated computer vision techniques and deep neural networks, it is capable of identifying flames and smoke across vast or hard-to-monitor areas such as large indoor spaces, forests.",
        image: "sol13.png",
        link: "",
        anchor: "A.I.Tech Srl",
        status: "Updated"
    },
    {
        name: "No code AI in Image and video analytics",
        description: "Tusker is a NO code AI Vision platform, which helps the entire Business Community by Automating their Computer Vision project in span of just few hours instead of weeks without knowledge about AI. Use cases into safety, Security, Compliance and Visual Inspection.",
        image: "sol14.png",
        link: "",
        anchor: "Tusker AI",
        status: "Updated"
    },
    {
        name: "Quantization of ML-Models and Performance-Boost in Pre-Processing",
        description: "Real-time and streaming applications are becoming increasingly popular due to their enormous, cross-domain application potential for generating company-wide added value. Increasing core requirements are primarily defined by the pursuit of ever lower latencies and computing times.",
        image: "sol15.png",
        link: "",
        anchor: "scieneers GmbH",
        status: "Updated"
    },
]

// offerning software
let offering_system_data = [
    {
        name: "NUC 13 Pro",
        description: "Drive business growth with the perfect combination of size, performance, and reliability NUC 13 Pro is ready to work.",
        image: "sy1.png",
        link: "",
        anchor: "ASUSTEK COMPUTER INCORPORATION",
        status: "Updated"
    },
    {
        name: "polytouch® flex21.5",
        description: "The POLYTOUCH® FLEX21.5 is super slim, has a bezel-free touch display and modular options for scanner, printer, payment modules which are directly integrated in the housing. This makes the kiosk incredibly cost effective. But the space miracle is not only flexible in terms of its hardware modules, but also its mounting and color options are absolutely flexible.",
        image: "sy2.png",
        link: "",
        anchor: "PYRAMID COMPUTER GMBH",
        status: "Updated"
    },
    {
        name: "Smart cash register terminal for department stores",
        description: "The product is an integrated touchable smart retail trading terminal. The luxurious look, thick and flexible black aluminium matte improve the overall look and vibe of the store, highlighting the quality of the store. With the integration of the Intel CPU platform (N95/97), the product features a perfect fanless.",
        image: "sy3.png",
        link: "",
        anchor: "QINGDAO WINTEC SYSTEM CO.,LTD",
        status: "Updated"
    },
    {
        name: "AKHET® VarioFlex 4U Front I/O",
        description: "AKHET® VarioFlex 4U Front I/O (44224AN5) offers a lot of space for high performance with a very small installation depth starting at only 350 mm. As a special feature this front I/O system has space to accommodate upto 4 dual slot graphic cards at full height. Areas of application for this product include computationally.",
        image: "sy4.png",
        link: "",
        anchor: "PYRAMID COMPUTER GMBH",
        status: "Updated"
    },
    {
        name: "High-performance smart cash register terminal",
        description: "This terminal is equipped with 12th Gen Intel® Core™ CPU and accommodates storage solutions such as M.2 PCIe X4 and M.2 SATA. The screen, which can be adjusted from multiple angles for better use, can be mounted using VESA bracket, wall-mounted, and placed on a desk.",
        image: "sy5.png",
        link: "",
        anchor: "QINGDAO WINTEC SYSTEM CO.,LTD",
        status: "Updated"
    },
    {
        name: "MIC-770 V3+MIC-75M20 AI Inference System",
        description: "Powered by a Intel® Core™ processors (14th/13th/12th Gen), MIC-770 V3 is designed as a high-performance open-source x86 platform capable of enabling the quick development of GPU-accelerated solutions. By incorporating the MIC-75M20 i-module, the innovative modular design ensures scalable.",
        image: "sy6.png",
        link: "",
        anchor: "ADVANTECH CO., LTD.",
        status: "Updated"
    },
    {
        name: "SXRL-20 Intel® Alder Lake/Raptor Lake-U Processor based Fanless Mini PC Support 4HDMI_OUT plus",
        description: "The Maxtang SXRL-20 fanless embedded mini-PC redefines computing power and versa-tility for digital signage and multitasking environments. Powered by the Intel® Alder Lake-U/Raptor Lake-U processor, it offers exceptional performance and efficiency. With support for up to 64GB dual-chan.",
        image: "sy7.png",
        link: "",
        anchor: "Shenzhen Datang Computer Co., Ltd.",
        status: "Updated"
    },
    {
        name: "POLYTOUCH® CURVE 32 - Self-Service Kiosk adaptable like a chameleon",
        description: "When it comes to expanding a self-service kiosk with peripheral modules, the POLYTOUCH® CURVE is more flexible than any other is. Its areas of application range from info terminal in brick and mortar stores to access management in public buildings to check-in at hotels or airports.",
        image: "sy8.png",
        link: "",
        anchor: "PYRAMID COMPUTER GMBH",
        status: "Updated"
    },
    {
        name: "POLYTOUCH® MIRROR - Interaction for Fitting Rooms",
        description: "The POLYTOUCH® MIRROR is fitted with an RFID reader automatically detecting the items a customer takes in to try on. RFID tags are attached to price labels which transfer data to the MIRROR. The Magic Mirror helps converting regular fitting rooms into smart ones.",
        image: "sy9.png",
        link: "",
        anchor: "PYRAMID COMPUTER GMBH",
        status: "Updated"
    },
    {
        name: "UNO-247",
        description: "IoT Edge Computer with Intel® Celeron® J3455 Processor",
        image: "sy10.png",
        link: "",
        anchor: " ADVANTECH CO., LTD.",
        status: "Updated"
    }, {
        name: "POLYTOUCH® PASSPORT 27 - Self Ordering and Ticketing Kiosk for peak times",
        description: "The dual sided kiosk is optimized for a high workload capacity. This is especially interesting for qsr’s, restaurants, bakeries, cinemas or other brick and mortar stores. It ensures less queues for customers during peak times while optimizing the order and payment process.",
        image: "sy11.png",
        link: "",
        anchor: "PYRAMID COMPUTER GMBH",
        status: "Updated"
    },
    {
        name: "POLYTOUCH® SWIFT 24 - SIMPLY SELF-ORDERING KIOSK",
        description: "Are you looking for a cost-efficient terminal that provides all the hardware needed for straightforward self-ordering? Then the POLYTOUCH® SWIFT 24 is just right for you. Our new kiosk comes with everything you need to make ordering food and beverages as smooth as possible for your guests.",
        image: "sy12.png",
        link: "",
        anchor: "PYRAMID COMPUTER GMBH",
        status: "Updated"
    },
    {
        name: "IPC-320",
        description: "IPC-320 compact tower industrial PC is designed to meet the needs of in-cabinet installations with limited space. Powered by Intel® Core™ processors (14th/13th/12th Gen), it offers reliable performance for factory automation, industrial manufacturing, and other applications such as laboratories and healthcare.",
        image: "sy13.png",
        link: "",
        anchor: "ADVANTECH CO., LTD.",
        status: "Updated"
    },
    {
        name: "MIC-770 V3 Compact Fanless IPC",
        description: "The MIC-770 V3 is a high-performance fanless industrial PC designed for edge computing and AI applications. Powered by the latest Intel® Core™ processors (14th/13th/12th Gen) and supporting up to 16 cores and 24 threads, it delivers exceptional computing capabilities",
        image: "sy14.png",
        link: "",
        anchor: "ADVANTECH CO., LTD.",
        status: "Updated"
    },
    {
        name: "MIC-770 V3+MIC-75GF10 Fanless Edge AI Inference System",
        description: "Powered by a Intel® Core™ processors (14th/13th/12th Gen), MIC-770 V3 is designed as a high-performance open-source x86 platform capable of enabling the quick development of GPU-accelerated solutions.",
        image: "sy15.png",
        link: "",
        anchor: "ADVANTECH CO., LTD.",
        status: "Updated"
    },
]

// partner fpga design service
let partner_servie_data = [
    {
        name: "3T BV",
        text: "Gold Partner",
        description: "3T is a state of the art developer of electronics and embedded systems. With our team of approximately 100 employees, we are one of the well-experienced design services providers in The Netherlands. 3T has offices in Enschede and Eindhoven.We do offer:development of electronics & embedded systems for custom applicationsqualified supply of electronics/sub-",
        image: "f1.png",
        link: "",
        anchor: "",
        status: "Updated"
    },
    {
        name: "A.L.S.E.",
        text: "Gold Partner",
        description: "Advanced Logic Synthesis for Electronics (“A.L.S.E”), offers an exhaustive range of IPs, Design Services, Trainings and Boards to help you with the design of FPGA-based applications, ASICs, or Embedded Systems.",
        image: "f2.png",
        link: "",
        anchor: "",
        status: "Updated"
    },
    {
        name: "A2E TECHNOLOGIES",
        text: "Gold Partner",
        description: "Located in San Diego CA and Guadalajara Mexico,  A2e Technologies is an Electronic Design Services (EDS) firm providing custom embedded design and product development services  to Industry and Government. With a highly experienced senior staff and significant breadth of skills, A2e Technologies provides everything you need for all your custom.",
        image: "f3.png",
        link: "",
        anchor: "",
        status: "Updated"
    },
    {
        name: "Adeas",
        text: "Titanium Partner",
        description: "deas is an independent design house developing customer specific electronic modules, FPGA designs, and embedded systems. Adeas provides design services and IP cores. We offer turnkey solutions and services from system architecture to board design with SI and PI analysis, FPGA based IP to system integration. Our creativity, knowledge and experience allow.",
        image: "f4.png",
        link: "",
        anchor: "",
        status: "Updated"
    },
    {
        name: "Adiuvo Engineering & Training Ltd",
        text: "Gold Partner",
        description: "Adiuvo are experts in the design and development of FPGA and SoC based solutions for a wide range of applications from Industrial, to Automotive, Defense and Space.Key capabilities include, mission critical development e.g. DO254/ IEC61508, Image processing and ML/AI applications at the edge.",
        image: "f6.png",
        link: "",
        anchor: "",
        status: "Updated"
    },
    {
        name: "ADVINNO TECHNOLOGIES PTE LTD",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        status: "Updated"
    },
    {
        name: "Aethertek",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        status: "Updated"
    },
    {
        name: "af inventions GmbH",
        text: "Gold Partner",
        description: "Located in Braunschweig, Germany, we provide broad technical expertise and electronic development services tailored to your particular needs, with a focus on FPGA-based embedded systems. As your strategic partner, we support you in your challenging projects with consultation and services suited to your requirements. Our services at a glance: Hardware development an.",
        image: "f7.png",
        link: "",
        anchor: "",
        status: "Updated"
    },
    {
        name: "Agnisys, Inc.",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        status: "Updated"
    },
    {
        name: "AIRIS Labs Sdn. Bhd.",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        status: "Updated"
    },
    {
        name: "Algotronix Ltd.",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        status: "Updated"
    },
    {
        name: "Allowtech Inc",
        text: "Gold Partner",
        description: "Founded in 2005, AllowTech Inc. specializes in high speed FPGA design services.AllowTech developed more than a hundred designs in various fields and built a comprehensive in-house technology to support the most complex designs. With a solid background in ASIC, hardware, software, system, and verification, we know how to simplify your FPGA architecture",
        image: "f8.png",
        link: "",
        anchor: "",
        status: "Updated"
    },
    {
        name: "ALMA TECHNLOGIES SA",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        status: "Updated"
    },
    {
        name: "Alorium Technology, LLC",
        text: "Gold Partner",
        description: "Alorium Technology provides Intel® FPGA-based embedded computing platforms for specific Industrial IoT applications such as motor/motion control, IoT endpoint analytics, and scientific instrumentation.   Our hardware makes it easy for traditional embedded software developers to realize the benefits of FPGA acceleration through plug.",
        image: "f9.png",
        link: "",
        anchor: "",
        status: "Updated"
    },
    {
        name: "ALPHI TECHNOLOGY CORPORATION",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        status: "Updated"
    },
]

// partner manufacturer
let partner_manufacturer_data = [
    {
        name: "Asrock",
        text: "Titanium Partner",
        description: "ASRock Industrial Computer Corporation established the industrial computer division in 2011 by ASRock Inc.. In the beginging, focus on development industrial-grade proruct to service  customer for industrial markeiting. It was separate to an independent compane on July 4, 2018. The current main products are industrial grade motherboard products.",
        image: "m1.png",
        link: "",
        anchor: "",
        status: "Updated"
    },
    {
        name: "APANTAC",
        text: "",
        description: "Member Partner",
        image: "f2.png",
        link: "",
        anchor: "View Website",
        status: "Updated"
    },
    {
        name: "Apacer",
        text: "",
        description: "Member Partner",
        image: "f2.png",
        link: "",
        anchor: "View Website",
        status: "Updated"
    },
    {
        name: "Inventec",
        text: "Titanium Partner",
        description: "Founded in 1975, Inventec manufactures computers, telephones, notebooks, and servers and has developed a strong foundation for global success. Upon entering the 21st century, our company has become even more active in such industries as cloud computing, wireless communication, intelligent devices, IoT, and green energy.",
        image: "m2.png",
        link: "",
        anchor: "",
        status: "Updated"
    },
    {
        name: "Alleantia S.r.l.",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        status: "Updated"
    },
    {
        name: "Adaptertek Technology Co., Ltd.",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        status: "Updated"
    },
    {
        name: "QUANTA COMPUTER INC.",
        text: "Titanium Partner",
        description: "Quanta Computer Incorporated (TWSE: 2382) is a Taiwan-based manufacturer of notebook computers and other electronic hardware. It is the largest manufacturer of notebook computers in the world. Its customers include Apple Inc., Compaq, Dell, Gateway, Hewlett-Packard, Alienware, Amazon.com, Casper, Cisco, Fujitsu, Gericom, Lenovo, LG, Maxdata.",
        image: "m3.png",
        link: "",
        anchor: "",
        status: "Updated"
    },
    {
        name: "AAEON Technology Inc",
        text: "Titanium Partner",
        description: "Established in 1992, AAEON is one of the leading designers and manufacturers of professional intelligent IoT solutions. Committed to innovative engineering, AAEON provides reliable and high quality computing platforms, including industrial motherboards and systems, industrial displays, rugged tablets, embedded controllers, network appliances and related.",
        image: "m4.png",
        link: "",
        anchor: "",
        status: "Updated"
    },
    {
        name: "Matic Entreprises",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        status: "Updated"
    },
    {
        name: "Clevertouch Technologies",
        text: "Gold Partner",
        description: "A unique User Experience for the collaborative space, redefining the way we communicate, interact, and collaborate with each other.",
        image: "m5.png",
        link: "",
        anchor: "View Website",
        status: "Updated"
    },
    {
        name: "Pulstec Industrial",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        status: "Updated"
    },
    {
        name: "Appear AS",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        status: "Updated"
    },
    {
        name: "JEOL Ltd.",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        status: "Updated"
    },
    {
        name: "Eii",
        text: "Titanium Partner",
        description: "stablished in 2013, Eii Technology is a renowned ODM (Original Design Manufacturer) company located in the vibrant hub of Shenzhen's Qianhai bay. Our primary focus is on the production and marketing of consumer electronics, encompassing notebook PCs, All-in-One (AIO) computers, and tablet PCs. Our dedicated team of 120 professionals operates.",
        image: "m6.png",
        link: "",
        anchor: "",
        status: "Updated"
    },
    {
        name: "High Project Group",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        status: "Updated"
    },
]

// partner provider
let partner_provider_data = [
    {
        name: "ConnectOn",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        status: "Updated"
    },
    {
        name: "POSIFLEX TECHNOLOGY, INC.",
        text: "Gold Partner",
        description: "Founded in 1984, Posiflex Technology Inc, has since grown to be a world leader in the design and manufacture of touch screen terminals and peripherals. These terminals have been deployed globally across multiple industries and applications including retail Point-of-Sale, health care, hospitality, kiosks and more.",
        image: "f10.png",
        link: "",
        anchor: "",
        status: "Updated"
    },
    {
        name: "PORTWELL, INC",
        text: "Gold Partner",
        description: "Portwell, a world-leading innovator in Industrial PC and embedded computing solutions, and an IoT Solutions Titanium Partner of the Intel Partner Alliance, develops a wide-range of cutting-edge platforms to meet versatile needs of mission-critical applications. We provide board-level solutions along with high quality and real-time",
        image: "f11.png",
        link: "",
        anchor: "",
        status: "Updated"
    },
    {
        name: "EPSON DIRECT CORPORATION",
        text: "Titanium Partner",
        description: "a)Product planning, development, manufacturing & direct sales of PC & peripheral goods b)Web direct sales for all EPSON products",
        image: "f10.png",
        link: "",
        anchor: "",
        status: "Updated"
    },
    {
        name: "AppCard Inc.",
        text: "Gold Partner",
        description: "AppCard simplifies customer retention for brick and mortar merchants. By combining a multi-tier loyalty program with actionable data analytics and business intelligence insights, AppCard makes personalized offers, automated triggers and rewards, easy and effective. As a cloud based platform, merchants can view their entire business.",
        image: "f12.png",
        link: "",
        anchor: "",
        status: "Updated"
    },
    {
        name: "AMI",
        text: "Gold Partner",
        description: "Founded in 1985 and known worldwide for AMIBIOS®, the mission of AMI is to power, manage and secure the world’s connected digital infrastructure by providing best-in-class UEFI and remote management firmware, security solutions, development tools and utilities to top-tier manufacturers of desktop, server, mobile and embedded/IoT systems.",
        image: "f13.png",
        link: "",
        anchor: "",
        status: "Updated"
    },
    {
        name: "ARCHERMIND TECHNOLOGY (NANJING) CO., LTD",
        text: "Gold Partner",
        description: "ArcherMind Technology (Nanjing) Co., Ltd., which was established in September, 2006, is a professional software service provider specializing in software product design, code development, quality assurance, technology support, etc.. The company is devoted to providing specialized world-wide software R&D service",
        image: "f10.png",
        link: "",
        anchor: "",
        status: "Updated"
    },
    {
        name: "AMAX Engineering Corporation",
        text: "Titanium Partner",
        description: "AMAX is a global leader in application-tailored cloud, data center, open architecture platforms, HPC, Deep Learning and OEM server manufacturing solutions, we build trusted relationships that help our customers build products and services with greater innovation, quality and time-to-market – at any scale. ",
        image: "f14.png",
        link: "",
        anchor: "",
        status: "Updated"
    },
    {
        name: "ALGO SYSTEM CO.,LTD.",
        text: "Gold Partner",
        description: "We have been proposing best sollution to resolve the problems totally for mainly FA companies, from the development to production, sales, follow-up service since 1981. We have made all products in Japan by ourselves, and our service or products are below Contract-based Development, Hardware and Software Industrial Touch-Panel computers.",
        image: "f6.png",
        link: "",
        anchor: "",
        status: "Updated"
    },
    {
        name: "ACRELEC",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        status: "Updated"
    },
    {
        name: "ALLION TEST LABS, INC.",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        status: "Updated"
    },
    {
        name: "ALTAIR",
        text: "Gold Partner",
        description: "Altair is a leading provider of enterprise-class engineering software enabling innovation, reduced development times, and lower costs through the entire product lifecycle from concept to design to in-service operation. Our simulation-driven approach to innovation is powered by our integrated suite of software which optimizes design performance.",
        image: "f6.png",
        link: "",
        anchor: "",
        status: "Updated"
    },
    {
        name: "Aevistrack Pte Ltd",
        text: "Gold Partner",
        description: "AEVISTRACK PTE LTD is a Singapore based IoT centric company specializes in technologies integrating connected systems to form a SMART Nation and SMART City driven by the world market. We are a member of the Intel® Retail MSP and provides retail solutions and support to our customers. Our tracking technologies also covers various market sectors on Sports.",
        image: "f15.png",
        link: "",
        anchor: "",
        status: "Updated"
    },
    {
        name: "ADS-TEC",
        text: "Gold  Partner",
        description: "We believe that a connected future can succeed when humans and machines interact easily and securely. By this we mean both the interaction of humans with humans, of humans with machines and of machines with machines. For more than 40 years, we have been developing and manufacturing industrial computing and IT systems for sectors.",
        image: "f16.png",
        link: "",
        anchor: "",
        status: "Updated"
    },
    {
        name: "Perfecta Federal",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        status: "Updated"
    },
]



function initializePage() {
    let originalRecords, currentRecords, page = 1;
    let pageId;

    // Determine which page we're on and set the appropriate data and pageId
    if (window.location.pathname.includes('d_offerning-components.html')) {
        originalRecords = offering_components_data;
        pageId = 'VK_card_parent1';
        isFPGAServicePage = false;
    } else if (window.location.pathname.includes('d_offerning-service.html')) {
        originalRecords = offering_service_data;
        pageId = 'VK_card_parent2';
        isFPGAServicePage = false;
    } else if (window.location.pathname.includes('d_offerning-software.html')) {
        originalRecords = offering_software_data;
        pageId = 'VK_card_parent3';
        isFPGAServicePage = false;
    } else if (window.location.pathname.includes('d_offerning-solution.html')) {
        originalRecords = offering_solution_data;
        pageId = 'VK_card_parent4';
        isFPGAServicePage = false;
    } else if (window.location.pathname.includes('d_offerning-system.html')) {
        originalRecords = offering_solution_data;
        isFPGAServicePage = false;
        pageId = 'VK_card_parent5';
    } else if (window.location.pathname.includes('d_fpga-service.html')) {
        originalRecords = partner_servie_data;
        pageId = 'VK_card_parent6';
        isFPGAServicePage = true;
    } else if (window.location.pathname.includes('d_partner-manufacturer.html')) {
        originalRecords = partner_manufacturer_data;
        pageId = 'VK_card_parent7';
        isFPGAServicePage = true;
    } else if (window.location.pathname.includes('d_partner-provider.html')) {
        originalRecords = partner_provider_data;
        pageId = 'VK_card_parent8';
        isFPGAServicePage = true;
    } else {
        console.error('Unknown page');
        return;
    }

    currentRecords = [...originalRecords];

    function Pagination(page, record) {
        if (record.length !== 0) {
            if (document.getElementById('VK_curent_page')) {
                document.getElementById('VK_curent_page').innerHTML = page;
                let limit = 10;
                let first = (limit * page) - limit;
                let last = limit * page;
                let total_page = Math.ceil(record.length / limit);

                document.getElementById('VK_total_page_count').innerHTML = total_page;
                let result = record.slice(first, last);
                let VK_card_map = document.getElementById(pageId);
                VK_card_map.innerHTML = '';
                for (let i = 0; i < result.length; i++) {
                    if (isFPGAServicePage) {
                        VK_card_map.innerHTML += `
                        <div class="col-xxl-3 VK_result_card col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-3">
                            <div class="VK_card_parent bg-white h-100 d-flex flex-column">
                                <div class="d_offer">Offering</div>
                                <div class="VK_card_img_box d-flex justify-content-center overflow-hidden">
                                    <img src="/img/darshan_image/${result[i].image}" alt=""
                                        class="h-100 object-fit-contain">
                                </div>
                                <hr class="m-0">
                                <div class="VK_card_details px-3 pb-3 mt-3 d-flex align-items-stretch h-100 flex-column">
                                    <div class="VK_card_Title">
                                        <a href="" class="text-decoration-none fw-normal">${result[i].name}</a>
                                    </div>
                                    <div class="d_type"><span>${result[i].text}</span></div>
                                    <div class="VK_card_description py-1">
                                        <span class="mt-2 d-block">${result[i].description}</span>
                                    </div>
                                    ${result[i].anchor ?
                                `<div class="d_partner_sub mt-auto">
                                        <a class="text-center">${result[i].anchor}<i class="fa-solid fa-up-right-from-square ms-1"></i></a>
                                    </div>`
                                : ""}
                                    
                                </div>
                            </div>
                        </div>`;
                    } else {
                        VK_card_map.innerHTML += `
                        <div class="col-xxl-3 VK_result_card col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-3">
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
                                    <div class="VK_card_description py-1">
                                        <span class="mt-2 d-block">${result[i].description}<br>by <a>${result[i].anchor}</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                    }
                }
            }
        } else {
            document.getElementById(pageId).innerHTML = `<h1 class="text-danger">Record Not Found</h1>`;
        }
    }

    function ince(amt) {
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
    }

    function operating_system_filter(op_system) {
        currentRecords = originalRecords.filter((ele) => {
            return ele.system != null && ele.system.includes(op_system);
        });
        page = 1;
        Pagination(page, currentRecords);
    }

    function content_type() {
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
    }

    function record_count() {
        let id = ['Linux', 'Microsoft_Windows', 'macOS', 'Android', 'Chrome', 'Chromium', 'Unix'];
        let op = ["Linux", "Microsoft Windows", "macOS", "Android", "Chrome", "Chromium", "Unix"];
        for (let i = 0; i < op.length; i++) {
            let arrr = originalRecords.filter((ele) => {
                return ele.system != null && ele.system.includes(op[i]);
            });
            let chk = id[i];
            if (document.getElementById(chk)) {
                document.getElementById(chk).innerHTML = id[i] + " (" + arrr.length + ")";
            }
        }
    }

    function VK_catalog_searching() {
        let search = document.getElementById('VK_software_catalog_search_bar');
        if (search.value.length > 2) {
            currentRecords = originalRecords.filter(item =>
                item.name.toLowerCase().includes(search.value.toLowerCase()) ||
                (item.description && item.description.toLowerCase().includes(search.value.toLowerCase()))
            );
            Pagination(1, currentRecords);
        } else if (search.value.length === 0) {
            currentRecords = [...originalRecords];
            Pagination(1, currentRecords);
        }
    }

    function sortBy(val) {
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

    // Initialize the page
    record_count();
    Pagination(page, currentRecords);

    // Update search results count
    if (document.getElementById('VK_search_result_span')) {
        document.getElementById('VK_search_result_span').innerHTML = currentRecords.length + " Results";
    }

    // Handle accordion visibility on smaller screens
    if (document.getElementById('VK_accoridan')) {
        if (window.innerWidth < 1200) {
            document.getElementById('VK_accoridan').classList.add('d-none');
            document.getElementById('VK_accoridan').classList.remove('VK_Block');
        }
    }

    // Set up event listeners
    if (document.getElementById('VK_select_filters')) {
        document.getElementById('VK_select_filters').addEventListener("change", function () {
            let val = this.value;
            sortBy(val);
        });
    }

    if (document.getElementById('VK_selected_filters')) {
        document.getElementById('VK_selected_filters').addEventListener("change", function () {
            let val = this.value;
            sortBy(val);
        });
    }

    if (document.getElementById('VK_software_catalog_search_bar')) {
        document.getElementById('VK_software_catalog_search_bar').addEventListener("input", VK_catalog_searching);
    }

    // Expose necessary functions to global scope for HTML onclick attributes
    window.ince = ince;
    window.operating_system_filter = operating_system_filter;
    window.content_type = content_type;
}

// Call the initialization function when the DOM is ready
document.addEventListener('DOMContentLoaded', initializePage);







