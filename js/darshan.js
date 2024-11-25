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
            link: "d_fpga-service.html"
        },
        {
            image: "partner3.jpg",
            title: "Manufacturer",
            desc: "Review the latest software and IP Core offerings.",
            link: "d_partner-manufacturer.html"
        },
        {
            image: "partner4.jpg",
            title: "Solution, Software, and Service Providers",
            desc: "Find integrated hardware and software solutions.",
            link: "d_partner-provider.html"
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
            link: "d_insightech-calendar.html"
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
                                <h3><a href="${material1[i].link}">${material1[i].title}</a></h3>
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
            link: "d_solution-application-readiness-guide.html"
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
                                <h3><a href="${guides[i].link}">${guides[i].title}</a></h3>
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
            link: "d_cloud-community.html"
        },
        {
            image: "comm2.png",
            title: "IoT and Edge Solutions",
            desc: "Join the innovators who are transforming IoT. The IoT and Edge Solutions Community can help you solve technical challenges and build your business with ready-to-run IoT solutions—plus tried and true initiatives that advance collaboration between partners.",
            link: "iotEdge-solutions-community.html"
        },
        {
            image: "comm3.png",
            title: "FPGA",
            desc: "The Intel FPGA community can help you unlock the potential of these flexible, programmable devices for your customers and your business. Explore ready-to-deploy, FPGA-based solutions for networking, media, AI, data analytics, finance and other compute-intensive applications. Or start building your own custom solution with community tools, training, and our FPGA developer cloud.",
            link: "d_fpga-community.html"
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
                        <h3><a href="${aboutpro[i].link}">${aboutpro[i].title}</a></h3>
                        <p></p>
                        <p>${aboutpro[i].desc}</p>
                        <p></p>
                        <p class="d_cta">
                            <a href="${aboutpro[i].link}" class="d-sm-inline-block d-block text-center">Visit</a>
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
            link: "d_cloud-optimization-granulate-deloitte-video.html"
        },
        {
            image: "e2.png",
            title: "Modernization Opportunities with Microsoft",
            desc: "Find out how end of support for Microsoft Windows Server and SQL Server 2012 creates an opportunity for your business.",
            link: "d_modernize-microsoft-server-refresh-video.html"
        },
        {
            image: "e3.png",
            title: "5th Gen Intel® Xeon® Processors Overview",
            desc: "Find out how 5th Gen Intel® Xeon® Scalable processors can help support today’s critical business objectives.",
            link: "d_5th-gen-xeon-emr-video.html"
        },
        {
            image: "e4.jpg",
            title: "Cloud Workload Modernization",
            desc: "How to queue up the cloud workload modernization conversation with your customers.",
            link: "d_workload-modernization-video.html"
        },
    ]

    if (D_newepisode) {
        for (let i = 0; i < newepisode.length; i++) {
            D_newepisode.innerHTML += `<div class="col-12 col-sm-6 col-lg-3">
                    <div class="d_epi">
                        <div class="d_img">
                            <img src="/img/darshan_image/${newepisode[i].image}" alt="">
                        </div>
                        <h3 class="text-start mt-2"><a href="/d_partner/${newepisode[i].link}">${newepisode[i].title}</a></h3>
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

// // featured network item

let D_processer1 = document.getElementById('D_processer1');
const processer1 = [
    'Intel® Xeon® Processors'
];

if (D_processer1) {
    for (let i = 0; i < processer1.length; i++) {
        D_processer1.innerHTML += `
            <li class="py-2"><a>${processer1[i]}</a></li>`;
    }
}


// featured edge

let D_categorylist1 = document.getElementById('D_categorylist1');
const categorylist1 = [
    'Partner', 'Offerning'
];

if (D_categorylist1) {
    for (let i = 0; i < categorylist1.length; i++) {
        D_categorylist1.innerHTML += `
            <div class="VK_check_box_filter mt-2">
                                                    <input type="checkbox" class="me-2" id="VK_filter_checkbox"
                                                        onclick="content_type()"><span>${categorylist1[i]}
                                                        (100)</span>
                                                </div>`;
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

const usecase = [
    'Advanced Analytics', 'Asset & Operations Optimization', 'Cloud Computing', 'Collaboration', 'Connected Worker',
    'Control Optimization & Autonomy', 'Data Science', 'Digital Security Surveillance', 'Digital Signage',
    'Energy Monitoring', 'Environmental Monitoring', 'Factory Automation', 'Health & Life Sciences',
    'High Performance Computing', 'Human Wellness Monitoring', 'Intelligent Vending', 'Interactive Whiteboard',
    'Inventory Management', 'Logistics & Tracking', 'Machine Condition Monitoring', 'Media & Entertainment',
    'Others', 'Print Imaging and Office Automation', 'Product Inspection', 'Robot', 'Situational Monitoring',
    'Smart Building', 'Smart City', 'Smart Home', 'Storage', 'Telematics', 'Video Management'
];

// Function to populate the use case list
function populateUsecaseList() {
    const D_usecase = document.getElementById('D_usecase');
    if (D_usecase) {
        D_usecase.innerHTML = ''; // Clear existing items
        for (let i = 0; i < usecase.length; i++) {
            D_usecase.innerHTML += `
            <li class="py-2"><a>${usecase[i]}</a></li>`;
        }
    }
}

// Function to filter the list based on the search input
function filterUsecaseList() {
    const searchInput = document.getElementById('usecaseSearch').value.toLowerCase();
    const items = document.querySelectorAll('#D_usecase li');

    items.forEach(item => {
        const text = item.textContent || item.innerText;
        item.style.display = text.toLowerCase().includes(searchInput) ? '' : 'none';
    });
}

// Event listener for the search input
if (document.getElementById('usecaseSearch')) {
    document.getElementById('usecaseSearch').addEventListener('input', filterUsecaseList);

}

// Populate the use case list when the document is loaded
document.addEventListener('DOMContentLoaded', populateUsecaseList);

// Industry

let D_industry = document.getElementById('D_industry');
const industry = [
    'Agriculture', 'Arts and Entertainment', 'Automotive', 'Communications', 'Defense and Space', 'Education', 'Energy and Utilities', 'Finance and Insurance', 'Gaming', 'Government(28)', 'Health and Life Sciences(102)', 'Hospitality and Restaurants(25)', 'Manufacturing(146)', 'Not For Profit(2)', 'Others(35)', 'Professional and Business Services(8)', 'Real Estate, Rental and Leasing(6)', 'Retail(95)', 'Software(6)'
];

function populateIndustryList() {
    const D_industry = document.getElementById('D_industry');
    if (D_industry) {
        D_industry.innerHTML = ''; // Clear existing items
        for (let i = 0; i < industry.length; i++) {
            D_industry.innerHTML += `
            <li class="VK_check_box_filter mt-2">
                <input type="checkbox" class="me-2" id="VK_filter_checkbox_${i}">
                <span>${industry[i]}</span>
            </li>`;
        }
    }
}

function filterIndustryList() {
    const searchInput = document.getElementById('industrySearch').value.toLowerCase();
    const items = document.querySelectorAll('#D_industry li');

    items.forEach(item => {
        const text = item.textContent || item.innerText;
        item.style.display = text.toLowerCase().includes(searchInput) ? '' : 'none';
    });
}

// Event listener for the search input
if (document.getElementById('industrySearch')) {
    document.getElementById('industrySearch').addEventListener('input', filterIndustryList);
}

// Populate the industry list when the document is loaded
document.addEventListener('DOMContentLoaded', populateIndustryList);


// partner

let D_tier = document.getElementById('D_tier');
const tier = [
    'Titanium', 'Gold'
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
        type: "Offering"
    },
    {
        name: "PICO-MTU4",
        description: "Pico-ITX Board with Intel® Core™ Ultra 7/Ultra 5",
        image: "c3.png",
        link: "",
        anchor: "AAEON Technology Inc",
        type: "Offering"
    },
    {
        name: "COM-ADNC6",
        description: "COM Express Type 6 Compact Size with Intel Atom® X Series/N-series/Core™ i3 Processors. Intel Atom® X Series/N-series/Core™ i3-N305 CPU, max TDP 15W, DDR5 SODIMM x 1, up to 16GB (non-ECC).",
        image: "c4.png",
        link: "",
        anchor: "AAEON Technology Inc",
        type: "Offering"
    },
    {
        name: "AQ7-ADN",
        description: "Qseven CPU Module with Intel Atom® X Series/N-series/Core™ i3-N305 processor",
        image: "c5.png",
        link: "",
        anchor: "AAEON Technology Inc",
        type: "Offering"
    },
    {
        name: "uCOM-ADN",
        description: "SMARC Module with Intel Atom® Processor X Series, Intel® Processor N-series, & Intel® Core™ i3-N305 Processor",
        image: "c6.png",
        link: "",
        anchor: "AAEON Technology Inc",
        type: "Offering"
    },
    {
        name: "TR K9x/6sd-RCx",
        description: "TR K9x/6sd-RCx is a rugged 3U VPX board based on the Intel® Tiger Lake UP3 Processor for general purpose computer applications. It is designed in alignment with the SOSA™ technical standard for I/O intensive processor boards. It offers up to 4-cores for high performance compute algorithms that are used in senso",
        image: "c7.png",
        link: "",
        anchor: " CONCURRENT TECHNOLOGIES PLC",
        type: "Offering"
    },
    {
        name: "ALN-10 Intel® Alder Lake-N Series Processor based Mini ITX Motherboard",
        description: "The Maxtang ALN-10 is based on the 12th Gen Intel Alder Lake-N series processor ideal for various industrial applications. The board supports up to 8 cores and 8 threads, faster graphics performance with low power consumption. Its small form factor design is great for IoT deployments that require powerful",
        image: "c8.png",
        link: "",
        anchor: "Shenzhen Datang Computer Co., Ltd.",
        type: "Offering"
    },
    {
        name: "AIMB-788E",
        description: "The AIMB-788E is an advanced ATX motherboard designed for industrial applications, supporting Intel® Core™ processors (14th/13th/12th Gen). It features the Q670E/R680E chipset and offers dual PCIe x16 expansion slots, four DIMM sockets supporting up to 192 GB of DDR5 RAM, and dual M.2 slots for NVMe RAID configurations. The motherboard",
        image: "c9.png",
        link: "",
        anchor: " ADVANTECH CO., LTD.",
        type: "Offering"
    },
    {
        name: "Intel® Xeon® Dual Socket Purley GPU Server Motherboard - Specification",
        description: "The JCYK YK-P11DPG-QT6 Dual Socket Server Motherboard leverages the Intel® Purley platform (Intel® PCH C621 chipset and dual socket LGA3647 CPU). It supports 2nd Gen Intel® Xeon® Scalable processors and six-channel DDR4-2933 ECC RDIMM, offering a cost-effective and flexible IO expansion",
        image: "c10.png",
        link: "",
        anchor: " 深圳金超云控科技有限公司",
        type: "Offering"
    },
    {
        name: "KEIm-A5ESoM",
        description: "The KEIm-A5ESoM is a System-on-Module (SoM) powered by Intel Agilex 5 SoC FPGA E-Series. The SoM board is equipped with 4GByte LPDDR4 memory for HPS, dual channels of 4Gbyte LPDDR4 memory, 32GByte eMMC memory for storage, 2Gbit QSPI flash as configuration memory. The SoM dimensions are 118 x 77mm and c",
        image: "c10.png",
        link: "",
        anchor: " KONDO ELECTRONICS INDUSTRY",
        type: "Offering"
    }, {
        name: "COM Express C6C-ASL",
        description: "The MSC C6C-ASL features the Intel Atom® Processor x7000RE/C Series. With support for up to eight processor cores, the module fits to a wide range of applications including automation, point-of-sales terminals, digital signage controllers, HMI solutions and medical equipment. The board is ideal for system products that are exposed to harsh ambient conditions. It is designed",
        image: "c12.png",
        link: "",
        anchor: "Avnet Embedded",
        type: "Offering"
    },
    {
        name: "LIVE-AD600",
        description: "On board Intel® Raptor Lake-U/P series processors 2x DDR5 SO-DIMM with a maximum memory of 64GB in total. Intel® 2.5G network, single and dual network options, TPM2.0, M.2 SSD, M.2 WIFI, 2 HDMI 2.0 inputs and 2 HDMI 2.0 outputs, 1 Type-C (USD3.2 + DP), 1 MXM graphics card slot 82x70MM; 1 MIC IN, 1 Line outDC 12-24V; dimensions: 95 x 205 mm",
        image: "c13.png",
        link: "",
        anchor: "Shenzhen Piesia Electronics Co.,Ltd",
        type: "Offering"
    },
    {
        name: "NUC-1365UE/D5",
        description: "Intel® 13th Gen (Raptor Lake-P) Core™ Processors i7-1365UE, 2 x 262-pin SO-DIMM DDR5 5200MHz up to 64GB (32GB per DIMM), 1 x USB4 / Thunderbolt™ 4, 5 x USB 3.2 Gen2, 2 x USB 2.0, 1 x M.2 Key M, 1 x M.2 Key E, 1 x COM, 1 x SATA3, 2 x Intel 2.5 Gigabit LAN, Supports Quad display, 1 x HDMI 2.0b, 1 x DP 2.1 (from USB4), 2 x DP 1.4a (1 from",
        image: "c14.png",
        link: "",
        anchor: "Asrock",
        type: "Offering"
    }, {
        name: "conga-SA8",
        description: "Industrial grade SMARC module based on Intel Atom® x7000RE Series with up to 8 cores, max. 16 GByte soldered LPDDR5 and Virtualization ready with RTS Hypervisor",
        image: "c15.png",
        link: "",
        anchor: "CONGATEC AG",
        type: "Offering"
    },
    {
        name: "CONGATEC AG",
        description: "The design of the REECH R720 motherboard complies with the OCSP specifications: the 14-layer PCB+Power busbar (optional on demand) design, with cost and performance balanced; the independent BMC card design with interface definition complying with the DC-SCM specifications; the motherboard and Riser card have no fixed transfer interfaces, adoptingBYD COMPANY LIMITED",
        image: "c16.png",
        link: "",
        anchor: "BYD COMPANY LIMITED",
        type: "Offering"
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
        type: "Offering"
    },
    {
        name: "Electronic Product Development From Concept to Production",
        description: "Orchid Technologies Engineering and Consulting specializes in the design and development of high technology electronic products. Today’s electronic product design and development requires the skillful blend of expert hardware and software engineering together wit",
        image: "ser2.png",
        link: "",
        anchor: "ORCHID TECHNOLOGIES ENGINEERING & CONSULTING, INC.",
        type: "Offering"
    },
    {
        name: "POS Kiosks for Self Order",
        description: "POS kiosks are used in multiple verticals for self-order. Touchscreen, computer, enclosure and often a payment device.",
        image: "ser3.png",
        link: "",
        anchor: "Kiosk Manufacturer Association",
        type: "Offering"
    },
    {
        name: "custom gaming solution",
        description: "In our store we are able to offer counseling for your PC configuration for gaming. If you are a basic gamer and want improve your existing PC or buy a new one you can come to our store and our specialists will help you in choosing the right product for you. We know that gaming is a huge world and you need to take account of many aspects to configure the right PC",
        image: "ser4.png",
        link: "",
        anchor: "DIGITAL NETWORK SRL",
        type: "Offering"
    },
    {
        name: "FPGA Design services",
        description: "Design services supporting from design specification creation to RTL coding, verification planning, verification environment creation, simulation, and on-system verification.Functional safety services supporting from Functional Safety Management to Concept, System, Design, and Verification phases by the engineers qualified",
        image: "ser1.png",
        link: "",
        anchor: " VERIFICATION TECHNOLOGY INC.",
        type: "Offering"
    },
    {
        name: "AI Voice engineering & consulting",
        description: "OmniSpeech leverage decades of voice R&D and software development experience to help you improve voice experiences on any app or device. Available as a development contractor, consultants, QA support staff, and more, OmniSpeech technical and business resources are a force multiplier for resource strapped teams looking",
        image: "ser5.png",
        link: "",
        anchor: "OmniSpeech",
        type: "Offering"
    },
    {
        name: "Generative AI Consulting",
        description: "Shyena Tech Yarns provide consulting services to build generative AI solution. Our team is expert in designing and deploying solutions using state of art large language models. We provide support to build solutions on cloud and on premises.",
        image: "ser1.png",
        link: "",
        anchor: "Shyena Tech Yarns Pvt Ltd",
        type: "Offering"
    },
    {
        name: "Gcore Custom Software Development",
        description: "Custom Software Development. Delivered on time, with quality assurance, there is no need to hire developers or invest in infrastructure. After releasing the product, we take over the technical support and continue working on the new features. Reduce your costs and accelerate the development!",
        image: "ser6.png",
        link: "",
        anchor: "Gcore",
        type: "Offering"
    },
    {
        name: "Pratexo Studio",
        description: "Pratexo is the edge solution acceleration platform that brings the power of cloud computing to the far edge, simplifying and accelerating the ability to deploy and manage valuable solutions to critical operational issues. The Pratexo Design Studio allows solutions architects (SAs) to automatically generate code and physically deploy ‘micro’ clouds to the edge, enabli",
        image: "ser1.png",
        link: "",
        anchor: "Gcore",
        type: "Offering"
    },
    {
        name: "BrainFrame AI v.29",
        description: "Factory safety using vision and AI: keep workers safe from injury and flag process issues.",
        image: "ser7.png",
        link: "",
        anchor: "Aotu.ai",
        type: "Offering"
    }, {
        name: "Service",
        description: "Harware and software networking",
        image: "ser1.png",
        link: "",
        anchor: "Microman",
        type: "Offering"
    },
    {
        name: "DALY - DEVICE AS A SERVICE OFFERING",
        description: "Device as a Service (DaaS) is a device management solution that allows end-users to be more independent and productive and easily manage their computing devices. By adopting the appropriate IT hardware and obtaining permanent support from anywhere in the world, DaaS ensures improved accessibility, greater reliability",
        image: "ser1.png",
        link: "",
        anchor: "Daly Computers",
        type: "Offering"
    },
    {
        name: "Gcore Server DDoS Protection",
        description: "Advanced DDoS protection for servers, infrastructure and web resources against attacks at the network (L3,) transport (L4,) and application (L7) layers in data centers around the world. Gcore is a trusted expert in security solutions, hosting, and edge computing, and the security team possesses expert knowledge in server DDoS",
        image: "ser8.png",
        link: "",
        anchor: "Gcore",
        type: "Offering"
    }, {
        name: "Gcore Infrastructure for Video Streaming",
        description: "Reliable local and global infrastructure for streaming, CDN and WebRTC that can scale to 100 million viewers and beyond. Gcore streaming solution covers all technical issues: upload, live ingest, transcode, record, store, process video using machine learning, deliver via CDN, playback. The key streaming platform features: live",
        image: "ser9.png",
        link: "",
        anchor: "Gcore",
        type: "Offering"
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
        type: "Offering"
    },
    {
        name: "Robo/TSN for Industrial Multi-Gigabit Ethernet - MLE FPGA IP Core Design",
        description: "MLE’s Robo/TSN IP can tunnel modern multi-Gig sensor data (GigEVision, PCIe, MIPI CSI-2, GMSL, …) as well as industrial protocols like Ethercat or Profinet , and is scalable from 1 to 100 Gbps to connect sensors and actuators from automation cells to AI engines and/or virtualized/software PLCs i",
        image: "s2.png",
        link: "",
        anchor: "MISSING LINK ELECTRONICS",
        type: "Offering"
    },
    {
        name: "siwave.io",
        description: "We have moved our app to the cloud. Go to https://siwave.io and signup for a free account to try our app today (immediate access) and see how easy it is to generate a ready-to-use FPGA inference model.",
        image: "s3.png",
        link: "",
        anchor: "SIWAVE",
        type: "Offering"
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
        type: "Offering"
    },
    {
        name: "200G NVMe FPGA RAID High Speed Data Recording and Replay - MLE FPGA Design",
        description: "MLE 200G NVMe FPGA RAID can transfer bulky data from multiple sensors to a RAID of NVMe SSDs at speeds 200 Gbps. It implements a channel-based architecture, supports data-in-motion pre- and post-processing and is highly scalable with regards to bandwidth and recording capacity. ",
        image: "s7.png",
        link: "",
        anchor: "MISSING LINK ELECTRONICS",
        type: "Offering"
    },
    {
        name: "400G NVMe FPGA RAID High Speed Data Recording and Replay - MLE FPGA Design",
        description: "MLE 400G NVMe FPGA RAID can transfer bulky data from multiple sensors to a RAID of NVMe SSDs at speeds up to 400 Gbps. It implements a channel-based architecture, supports data-in-motion pre- and post-processing and is highly scalable with regards to bandwidth and recording capacity",
        image: "s7.png",
        link: "",
        anchor: "MISSING LINK ELECTRONICS",
        type: "Offering"
    },
    {
        name: "SSL/TLS offload engine",
        description: "Our SSL/TLS engine accelerates and offloads processing for encryption / decryption and authentication in SSL / TLS by combining our TCP offload and crypt engine. Since the record layer processing is completely hardware offloaded, the user application can overwhelmingly reduce the CPU load which only needs preparing the data to transfer securely.Besides, ",
        image: "s8.png",
        link: "",
        anchor: "Intellectual Highway",
        type: "Offering"
    },
    {
        name: "Noname AI Augmented API Security",
        description: "Noname Security creates the most powerful, complete, and easy-to-use API security platform that helps enterprises discover, analyze, remediate, and test all legacy and modern APIs. Discover - Find and inventory all APIs.",
        image: "s9.png",
        link: "",
        anchor: "Noname Security",
        type: "Offering"
    }, {
        name: "LIN Master Slave IP Core",
        description: "Local Interconnect Network (LIN) is a broadcasting, Single Master, and Multi Slave (up to 16) communication protocol designed to support those features where CAN is not required. LIN Master Slave Benefits LIN is a single wire-based interface, it reduces the cost and complexity of implementation. LIN is the best-suited and best alternative to CAN for applications that do",
        image: "s10.png",
        link: "",
        anchor: "LOGIC FRUIT TECHNOLOGIES",
        type: "Offering"
    },
    {
        name: "FlexRay RTL IP Core",
        description: "FlexRay, a high-speed protocol for advanced vehicles, addresses safety-critical features, surpassing CAN limitations. Essential in modern automotive tech, it caters to the growing demand for high-end performance.",
        image: "s11.png",
        link: "",
        anchor: "LOGIC FRUIT TECHNOLOGIES",
        type: "Offering"
    },
    {
        name: "CAN Controller IP Core",
        description: "A Controller Area Network (CAN) is a serial half duplex and differential two-wired asynchronous communication protocol that allows the microcontrollers and other devices to communicate without a host computer. The CAN core is a bus controller that performs communication according to the CAN 2.0B, and CAN FD specifications according to ISO",
        image: "s12.png",
        link: "",
        anchor: "LOGIC FRUIT TECHNOLOGIES",
        type: "Offering"
    },
    {
        name: "Noname Security Telco Grade API Security Bundle",
        description: "Unleash Telco-Grade API Security from Edge to Cloud — Introducing the Intel® NetSec Accelerator with Intel® Ethernet Controller E810 and Noname Security Remote Engine Bundle! Harness the power of the Intel® NetSec Accelerator Reference Design and 4th Gen Intel® Xeon® Processors with Noname Security Remote Engines",
        image: "s9.png",
        link: "",
        anchor: "Noname Security",
        type: "Offering"
    },
    {
        name: "AI/ML Voice Algorithms for Noise Suppression and Voice Clarity",
        description: "AI/ML algorithms that remove noise and improve voice experiences on any app or device. Includes noise suppression, voice clarity, ASR, voice biometrics, deep fake AI voice detection and more. Platform agnostic: can be embedded on device, included in source code, the cloud etc.",
        image: "s13.png",
        link: "",
        anchor: "OmniSpeech",
        type: "Offering"
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
        type: "Offering"
    },
    {
        name: "Language Weaver",
        description: "AI-powered machine translation solutions that transform your multilingual content. Enterprise-grade machine translation that is secure by design, infinitely adaptive and fully scalable. Meeting your needs of today and beyond. Helping organizations protect data, accelerate insight, and ignite growth.",
        image: "sol2.png",
        link: "",
        anchor: "RWS",
        type: "Offering"
    },
    {
        name: "POLYTOUCH® PASSPORT 32 - Restaurant Ordering Kiosk",
        description: "The POLYTOUCH® PASSPORT 32 is designed to cope with high workloads and allows more customers to order simultaneously without queues forming - even during rush hours. The self-ordering kiosk makes ordering in the in the system gastronomy faster and more convenient. With its large and responsive display, ",
        image: "sol3.png",
        link: "",
        anchor: "PYRAMID COMPUTER GMBH",
        type: "Offering"
    },
    {
        name: "V-Series AI Wayfinding Kiosk",
        description: "The V-Series AI Wayfinding Kiosk addresses the challenge of enhancing customer navigation and engagement in shopping malls by replacing static signboards with interactive digital solutions. This kiosk integrates V-Series’ AI Wayfinding Software (VigitWFS) and Signage Content Management Software (VigitSIGN).",
        image: "sol4.png",
        link: "",
        anchor: "V-series International Sdn Bhd.",
        type: "Offering"
    },
    {
        name: "V-Series Top-Notch Outdoor LED Displays",
        description: "V-Series Top-Notch Outdoor LED Displays address the market problem of inefficient and high-maintenance traditional outdoor LED billboards by offering a sustainable and energy-saving solution. These displays feature IP66 waterproof protection, high brightness, and a high refresh rate, ensuring durability and visibility in all weather conditions",
        image: "sol5.png",
        link: "",
        anchor: "V-series International Sdn Bhd.",
        type: "Offering"
    },
    {
        name: "V-SeriesE-Cafeteria Solutions (VigitCAFE)",
        description: "V-Series E-Cafeteria Solutions (VigitCAFE) is a comprehensive digital platform designed to transform traditional workplace cafeterias by addressing common issues such as long waiting times, inconvenient accessibility, rushed food preparation, and inefficient inventory management.",
        image: "sol6.png",
        link: "",
        anchor: "V-series International Sdn Bhd.",
        type: "Offering"
    },
    {
        name: "Corvo Identify",
        description: "Corvo® Identify provides the highest accuracy through its deep learning-based technology. Its enhanced capabilities include advanced facial tracking, high accurate facial recognition, appearance search and zone violation detection to identify persons of interest, criminals, missing persons and VIPs from cameras, archived videos",
        image: "sol7.png",
        link: "",
        anchor: "NEVALABS",
        type: "Offering"
    },
    {
        name: "Park Access Data Processing Server HM-ACSE41T",
        description: "It's a server to manage and control physical access system with features including authentication, gate control, access control, log record, communication interface and more, achieving refined people management across the park by counting and deploying personnel database of the park.",
        image: "sol8.png",
        link: "",
        anchor: "Shanghai Huaming Intelligent Terminal Equipment Co., Ltd",
        type: "Offering"
    },
    {
        name: "Noname Security Confidential Computing on AWS",
        description: "Anjuna seaglass container enclaves include Remote Attestation for the ability to verify that the API gateway (e.g. Kong) is indeed running inside an AWS Nitro based Trusted Execution Environment (TEE) and is running the expected trustworthy version of the software.",
        image: "sol9.png",
        link: "",
        anchor: "Noname Security",
        type: "Offering"
    },
    {
        name: "EPIC iO DeepInsights",
        description: "The EPIC iO DeepInsights Platform uses edge computing to gather AI video analytics for real-time insights; IoT sensors to monitor the operational status, health, and safety of workplace environments; and customizable visualization so customers can review and analyze historical data and reports. It provides high-value, actionable.",
        image: "sol11.png",
        link: "",
        anchor: "EPIC IO",
        type: "Offering"
    }, {
        name: "AI-PPE",
        description: "AI-PPE is a video analysis application powered by deep neural networks, designed to identify individuals wearing personal protective equipment (PPE) such as helmets, vests, or both within a designated area. It serves dual purposes: as an access control mechanism in work areas requiring specific PPE for entry, and as a continuous surveillance tool.",
        image: "sol11.png",
        link: "",
        anchor: "A.I.Tech Srl",
        type: "Offering"
    },
    {
        name: "AI-BIO",
        description: "AI-Bio is a video analytics application designed to detect and analyze faces within images, capable of identifying faces even when obscured by obstacles like non-frontal angles, facemasks, or other accessories. Leveraging deep neural networks, it performs sophisticated face analysis to discern gender, estimate age within a range from 0 to 100 years.",
        image: "sol12.png",
        link: "",
        anchor: "A.I.Tech Srl",
        type: "Offering"
    },
    {
        name: "AI-FIRE-PLUS",
        description: "AI-FIRE-PLUS is an advanced video-analysis software developed to enhance fire detection in environments where traditional fire and smoke alarms may not be effective. Utilizing sophisticated computer vision techniques and deep neural networks, it is capable of identifying flames and smoke across vast or hard-to-monitor areas such as large indoor spaces, forests.",
        image: "sol13.png",
        link: "",
        anchor: "A.I.Tech Srl",
        type: "Offering"
    },
    {
        name: "No code AI in Image and video analytics",
        description: "Tusker is a NO code AI Vision platform, which helps the entire Business Community by Automating their Computer Vision project in span of just few hours instead of weeks without knowledge about AI. Use cases into safety, Security, Compliance and Visual Inspection.",
        image: "sol14.png",
        link: "",
        anchor: "Tusker AI",
        type: "Offering"
    },
    {
        name: "Quantization of ML-Models and Performance-Boost in Pre-Processing",
        description: "Real-time and streaming applications are becoming increasingly popular due to their enormous, cross-domain application potential for generating company-wide added value. Increasing core requirements are primarily defined by the pursuit of ever lower latencies and computing times.",
        image: "sol15.png",
        link: "",
        anchor: "scieneers GmbH",
        type: "Offering"
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
        type: "Offering"
    },
    {
        name: "polytouch® flex21.5",
        description: "The POLYTOUCH® FLEX21.5 is super slim, has a bezel-free touch display and modular options for scanner, printer, payment modules which are directly integrated in the housing. This makes the kiosk incredibly cost effective. But the space miracle is not only flexible in terms of its hardware modules, but also its mounting and color options are absolutely flexible.",
        image: "sy2.png",
        link: "",
        anchor: "PYRAMID COMPUTER GMBH",
        type: "Offering"
    },
    {
        name: "Smart cash register terminal for department stores",
        description: "The product is an integrated touchable smart retail trading terminal. The luxurious look, thick and flexible black aluminium matte improve the overall look and vibe of the store, highlighting the quality of the store. With the integration of the Intel CPU platform (N95/97), the product features a perfect fanless.",
        image: "sy3.png",
        link: "",
        anchor: "QINGDAO WINTEC SYSTEM CO.,LTD",
        type: "Offering"
    },
    {
        name: "AKHET® VarioFlex 4U Front I/O",
        description: "AKHET® VarioFlex 4U Front I/O (44224AN5) offers a lot of space for high performance with a very small installation depth starting at only 350 mm. As a special feature this front I/O system has space to accommodate upto 4 dual slot graphic cards at full height. Areas of application for this product include computationally.",
        image: "sy4.png",
        link: "",
        anchor: "PYRAMID COMPUTER GMBH",
        type: "Offering"
    },
    {
        name: "High-performance smart cash register terminal",
        description: "This terminal is equipped with 12th Gen Intel® Core™ CPU and accommodates storage solutions such as M.2 PCIe X4 and M.2 SATA. The screen, which can be adjusted from multiple angles for better use, can be mounted using VESA bracket, wall-mounted, and placed on a desk.",
        image: "sy5.png",
        link: "",
        anchor: "QINGDAO WINTEC SYSTEM CO.,LTD",
        type: "Offering"
    },
    {
        name: "MIC-770 V3+MIC-75M20 AI Inference System",
        description: "Powered by a Intel® Core™ processors (14th/13th/12th Gen), MIC-770 V3 is designed as a high-performance open-source x86 platform capable of enabling the quick development of GPU-accelerated solutions. By incorporating the MIC-75M20 i-module, the innovative modular design ensures scalable.",
        image: "sy6.png",
        link: "",
        anchor: "ADVANTECH CO., LTD.",
        type: "Offering"
    },
    {
        name: "SXRL-20 Intel® Alder Lake/Raptor Lake-U Processor based Fanless Mini PC Support 4HDMI_OUT plus",
        description: "The Maxtang SXRL-20 fanless embedded mini-PC redefines computing power and versa-tility for digital signage and multitasking environments. Powered by the Intel® Alder Lake-U/Raptor Lake-U processor, it offers exceptional performance and efficiency. With support for up to 64GB dual-chan.",
        image: "sy7.png",
        link: "",
        anchor: "Shenzhen Datang Computer Co., Ltd.",
        type: "Offering"
    },
    {
        name: "POLYTOUCH® CURVE 32 - Self-Service Kiosk adaptable like a chameleon",
        description: "When it comes to expanding a self-service kiosk with peripheral modules, the POLYTOUCH® CURVE is more flexible than any other is. Its areas of application range from info terminal in brick and mortar stores to access management in public buildings to check-in at hotels or airports.",
        image: "sy8.png",
        link: "",
        anchor: "PYRAMID COMPUTER GMBH",
        type: "Offering"
    },
    {
        name: "POLYTOUCH® MIRROR - Interaction for Fitting Rooms",
        description: "The POLYTOUCH® MIRROR is fitted with an RFID reader automatically detecting the items a customer takes in to try on. RFID tags are attached to price labels which transfer data to the MIRROR. The Magic Mirror helps converting regular fitting rooms into smart ones.",
        image: "sy9.png",
        link: "",
        anchor: "PYRAMID COMPUTER GMBH",
        type: "Offering"
    },
    {
        name: "UNO-247",
        description: "IoT Edge Computer with Intel® Celeron® J3455 Processor",
        image: "sy10.png",
        link: "",
        anchor: " ADVANTECH CO., LTD.",
        type: "Offering"
    }, {
        name: "POLYTOUCH® PASSPORT 27 - Self Ordering and Ticketing Kiosk for peak times",
        description: "The dual sided kiosk is optimized for a high workload capacity. This is especially interesting for qsr’s, restaurants, bakeries, cinemas or other brick and mortar stores. It ensures less queues for customers during peak times while optimizing the order and payment process.",
        image: "sy11.png",
        link: "",
        anchor: "PYRAMID COMPUTER GMBH",
        type: "Offering"
    },
    {
        name: "POLYTOUCH® SWIFT 24 - SIMPLY SELF-ORDERING KIOSK",
        description: "Are you looking for a cost-efficient terminal that provides all the hardware needed for straightforward self-ordering? Then the POLYTOUCH® SWIFT 24 is just right for you. Our new kiosk comes with everything you need to make ordering food and beverages as smooth as possible for your guests.",
        image: "sy12.png",
        link: "",
        anchor: "PYRAMID COMPUTER GMBH",
        type: "Offering"
    },
    {
        name: "IPC-320",
        description: "IPC-320 compact tower industrial PC is designed to meet the needs of in-cabinet installations with limited space. Powered by Intel® Core™ processors (14th/13th/12th Gen), it offers reliable performance for factory automation, industrial manufacturing, and other applications such as laboratories and healthcare.",
        image: "sy13.png",
        link: "",
        anchor: "ADVANTECH CO., LTD.",
        type: "Offering"
    },
    {
        name: "MIC-770 V3 Compact Fanless IPC",
        description: "The MIC-770 V3 is a high-performance fanless industrial PC designed for edge computing and AI applications. Powered by the latest Intel® Core™ processors (14th/13th/12th Gen) and supporting up to 16 cores and 24 threads, it delivers exceptional computing capabilities",
        image: "sy14.png",
        link: "",
        anchor: "ADVANTECH CO., LTD.",
        type: "Offering"
    },
    {
        name: "MIC-770 V3+MIC-75GF10 Fanless Edge AI Inference System",
        description: "Powered by a Intel® Core™ processors (14th/13th/12th Gen), MIC-770 V3 is designed as a high-performance open-source x86 platform capable of enabling the quick development of GPU-accelerated solutions.",
        image: "sy15.png",
        link: "",
        anchor: "ADVANTECH CO., LTD.",
        type: "Offering"
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
        type: "Partner"
    },
    {
        name: "A.L.S.E.",
        text: "Gold Partner",
        description: "Advanced Logic Synthesis for Electronics (“A.L.S.E”), offers an exhaustive range of IPs, Design Services, Trainings and Boards to help you with the design of FPGA-based applications, ASICs, or Embedded Systems.",
        image: "f2.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "A2E TECHNOLOGIES",
        text: "Gold Partner",
        description: "Located in San Diego CA and Guadalajara Mexico,  A2e Technologies is an Electronic Design Services (EDS) firm providing custom embedded design and product development services  to Industry and Government. With a highly experienced senior staff and significant breadth of skills, A2e Technologies provides everything you need for all your custom.",
        image: "f3.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Adeas",
        text: "Titanium Partner",
        description: "deas is an independent design house developing customer specific electronic modules, FPGA designs, and embedded systems. Adeas provides design services and IP cores. We offer turnkey solutions and services from system architecture to board design with SI and PI analysis, FPGA based IP to system integration. Our creativity, knowledge and experience allow.",
        image: "f4.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Adiuvo Engineering & Training Ltd",
        text: "Gold Partner",
        description: "Adiuvo are experts in the design and development of FPGA and SoC based solutions for a wide range of applications from Industrial, to Automotive, Defense and Space.Key capabilities include, mission critical development e.g. DO254/ IEC61508, Image processing and ML/AI applications at the edge.",
        image: "f6.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "ADVINNO TECHNOLOGIES PTE LTD",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "Aethertek",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "af inventions GmbH",
        text: "Gold Partner",
        description: "Located in Braunschweig, Germany, we provide broad technical expertise and electronic development services tailored to your particular needs, with a focus on FPGA-based embedded systems. As your strategic partner, we support you in your challenging projects with consultation and services suited to your requirements. Our services at a glance: Hardware development an.",
        image: "f7.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Agnisys, Inc.",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "AIRIS Labs Sdn. Bhd.",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "Algotronix Ltd.",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "Allowtech Inc",
        text: "Gold Partner",
        description: "Founded in 2005, AllowTech Inc. specializes in high speed FPGA design services.AllowTech developed more than a hundred designs in various fields and built a comprehensive in-house technology to support the most complex designs. With a solid background in ASIC, hardware, software, system, and verification, we know how to simplify your FPGA architecture",
        image: "f8.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "ALMA TECHNLOGIES SA",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "Alorium Technology, LLC",
        text: "Gold Partner",
        description: "Alorium Technology provides Intel® FPGA-based embedded computing platforms for specific Industrial IoT applications such as motor/motion control, IoT endpoint analytics, and scientific instrumentation.   Our hardware makes it easy for traditional embedded software developers to realize the benefits of FPGA acceleration through plug.",
        image: "f9.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "ALPHI TECHNOLOGY CORPORATION",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
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
        type: "Partner"
    },
    {
        name: "APANTAC",
        text: "",
        description: "Member Partner",
        image: "f2.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "Apacer",
        text: "",
        description: "Member Partner",
        image: "f2.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "Inventec",
        text: "Titanium Partner",
        description: "Founded in 1975, Inventec manufactures computers, telephones, notebooks, and servers and has developed a strong foundation for global success. Upon entering the 21st century, our company has become even more active in such industries as cloud computing, wireless communication, intelligent devices, IoT, and green energy.",
        image: "m2.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Alleantia S.r.l.",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "Adaptertek Technology Co., Ltd.",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "QUANTA COMPUTER INC.",
        text: "Titanium Partner",
        description: "Quanta Computer Incorporated (TWSE: 2382) is a Taiwan-based manufacturer of notebook computers and other electronic hardware. It is the largest manufacturer of notebook computers in the world. Its customers include Apple Inc., Compaq, Dell, Gateway, Hewlett-Packard, Alienware, Amazon.com, Casper, Cisco, Fujitsu, Gericom, Lenovo, LG, Maxdata.",
        image: "m3.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "AAEON Technology Inc",
        text: "Titanium Partner",
        description: "Established in 1992, AAEON is one of the leading designers and manufacturers of professional intelligent IoT solutions. Committed to innovative engineering, AAEON provides reliable and high quality computing platforms, including industrial motherboards and systems, industrial displays, rugged tablets, embedded controllers, network appliances and related.",
        image: "m4.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Matic Entreprises",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "Clevertouch Technologies",
        text: "Gold Partner",
        description: "A unique User Experience for the collaborative space, redefining the way we communicate, interact, and collaborate with each other.",
        image: "m5.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "Pulstec Industrial",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "Appear AS",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "JEOL Ltd.",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "Eii",
        text: "Titanium Partner",
        description: "stablished in 2013, Eii Technology is a renowned ODM (Original Design Manufacturer) company located in the vibrant hub of Shenzhen's Qianhai bay. Our primary focus is on the production and marketing of consumer electronics, encompassing notebook PCs, All-in-One (AIO) computers, and tablet PCs. Our dedicated team of 120 professionals operates.",
        image: "m6.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "High Project Group",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
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
        type: "Partner"
    },
    {
        name: "POSIFLEX TECHNOLOGY, INC.",
        text: "Gold Partner",
        description: "Founded in 1984, Posiflex Technology Inc, has since grown to be a world leader in the design and manufacture of touch screen terminals and peripherals. These terminals have been deployed globally across multiple industries and applications including retail Point-of-Sale, health care, hospitality, kiosks and more.",
        image: "f10.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "PORTWELL, INC",
        text: "Gold Partner",
        description: "Portwell, a world-leading innovator in Industrial PC and embedded computing solutions, and an IoT Solutions Titanium Partner of the Intel Partner Alliance, develops a wide-range of cutting-edge platforms to meet versatile needs of mission-critical applications. We provide board-level solutions along with high quality and real-time",
        image: "f11.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "EPSON DIRECT CORPORATION",
        text: "Titanium Partner",
        description: "a)Product planning, development, manufacturing & direct sales of PC & peripheral goods b)Web direct sales for all EPSON products",
        image: "f10.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "AppCard Inc.",
        text: "Gold Partner",
        description: "AppCard simplifies customer retention for brick and mortar merchants. By combining a multi-tier loyalty program with actionable data analytics and business intelligence insights, AppCard makes personalized offers, automated triggers and rewards, easy and effective. As a cloud based platform, merchants can view their entire business.",
        image: "f12.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "AMI",
        text: "Gold Partner",
        description: "Founded in 1985 and known worldwide for AMIBIOS®, the mission of AMI is to power, manage and secure the world’s connected digital infrastructure by providing best-in-class UEFI and remote management firmware, security solutions, development tools and utilities to top-tier manufacturers of desktop, server, mobile and embedded/IoT systems.",
        image: "f13.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "ARCHERMIND TECHNOLOGY (NANJING) CO., LTD",
        text: "Gold Partner",
        description: "ArcherMind Technology (Nanjing) Co., Ltd., which was established in September, 2006, is a professional software service provider specializing in software product design, code development, quality assurance, technology support, etc.. The company is devoted to providing specialized world-wide software R&D service",
        image: "f10.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "AMAX Engineering Corporation",
        text: "Titanium Partner",
        description: "AMAX is a global leader in application-tailored cloud, data center, open architecture platforms, HPC, Deep Learning and OEM server manufacturing solutions, we build trusted relationships that help our customers build products and services with greater innovation, quality and time-to-market – at any scale. ",
        image: "f14.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "ALGO SYSTEM CO.,LTD.",
        text: "Gold Partner",
        description: "We have been proposing best sollution to resolve the problems totally for mainly FA companies, from the development to production, sales, follow-up service since 1981. We have made all products in Japan by ourselves, and our service or products are below Contract-based Development, Hardware and Software Industrial Touch-Panel computers.",
        image: "f6.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "ACRELEC",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "ALLION TEST LABS, INC.",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "ALTAIR",
        text: "Gold Partner",
        description: "Altair is a leading provider of enterprise-class engineering software enabling innovation, reduced development times, and lower costs through the entire product lifecycle from concept to design to in-service operation. Our simulation-driven approach to innovation is powered by our integrated suite of software which optimizes design performance.",
        image: "f6.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Aevistrack Pte Ltd",
        text: "Gold Partner",
        description: "AEVISTRACK PTE LTD is a Singapore based IoT centric company specializes in technologies integrating connected systems to form a SMART Nation and SMART City driven by the world market. We are a member of the Intel® Retail MSP and provides retail solutions and support to our customers. Our tracking technologies also covers various market sectors on Sports.",
        image: "f15.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "ADS-TEC",
        text: "Gold  Partner",
        description: "We believe that a connected future can succeed when humans and machines interact easily and securely. By this we mean both the interaction of humans with humans, of humans with machines and of machines with machines. For more than 40 years, we have been developing and manufacturing industrial computing and IT systems for sectors.",
        image: "f16.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Perfecta Federal",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
]

// feature edge 

let feature_edge_acceleraror = [
    {
        name: "Arrow Electronics Inc",
        description: "Arrow Electronics guides innovation forward for over 210,000 leading technology manufacturers and service providers. With 2022 sales of $37 billion, Arrow develops technology solutions that improve business and daily life. Learn more at fiveyearsout.com.",
        image: "fea1.png",
        link: "",
        anchor: "",
        type: "Partner",
        text: "Intel Authorized Distributor (IAD), IoT Solution Aggregator"
    },
    {
        name: "Synnex Technology International (HK) Ltd.",
        description: "Synnex in Greater China is one of several business entities of Synnex Group that ranks second in the world and first in APAC among distributors of products in Component, Computer, Communication, Consumer and Commercial (5C). Synnex has evolved into an integrated matrix",
        image: "fea2.png",
        link: "",
        anchor: "",
        type: "Partner",
        text: "Intel Authorized Distributor (IAD), IoT Solution Aggregator"
    },
    {
        name: "Nantum AI",
        description: "Nantum AI is an award-winning, integrated energy platform that empowers buildings with actionable building insights and automation. Saving energy, reducing carbon emissions, and lowering costs without sacrificing occupant health or comfort, Nantum AI enables buildings to hit energy targets via real time and predictive data as well as intelligent recommendations.",
        image: "fea3.png",
        link: "",
        anchor: "",
        type: "Partner",
        text: "Gold Partner"
    },
    {
        name: "PORTWELL, INC",
        description: "Portwell, a world-leading innovator in Industrial PC and embedded computing solutions, and an IoT Solutions Titanium Partner of the Intel Partner Alliance, develops a wide-range of cutting-edge platforms to meet versatile needs of mission-critical applications. We provide board-level solutions along with high quality and real-time industrial-level system integration.",
        image: "fea4.png",
        link: "",
        anchor: "",
        type: "Partner",
        text: "Gold Partner"
    },
    {
        name: "POSIFLEX TECHNOLOGY, INC.",
        description: "Founded in 1984, Posiflex Technology Inc, has since grown to be a world leader in the design and manufacture of touch screen terminals and peripherals. These terminals have been deployed globally across multiple industries and applications including retail Point-of-Sale, health care, hospitality, kiosks and more",
        image: "fea5.png",
        link: "",
        anchor: "",
        type: "Partner",
        text: "Gold Partner"
    },
    {
        name: "HCL Technologies",
        description: "HCL Technologies is a next-generation global technology company that helps enterprises reimagine their businesses for the digital age. Our technology products and services are built on four decades of innovation, with a world-renowned management philosophy, a strong culture of invention and risk-taking, and a relentless focus on customer relationships.",
        image: "fea6.png",
        link: "",
        anchor: "",
        type: "Partner",
        text: "Titanium Partner"
    },
    {
        name: "上海诠视传感技术有限公司",
        description: "Intellect Technology is a computer vision company dedicated to space awareness and cognition (vSLAM+AI) solutions, focusing on high-precision visual positioning in AR/VR/MR, robotics, AGV, drones, etc. Navigation, obstacle avoidance and object recognition technology solutions and core device development.",
        image: "fea7.png",
        link: "",
        anchor: "",
        type: "Partner",
        text: "Gold Partner"
    },
    {
        name: "Clevertouch Technologies",
        description: "A unique User Experience for the collaborative space, redefining the way we communicate, interact, and collaborate with each other.",
        image: "fea8.png",
        link: "",
        anchor: "",
        type: "Partner",
        text: "Gold Partner"
    },
    {
        name: "AARONN ELECTRONIC GMBH",
        description: "n the past 30 years, Aaronn Electronic GmbH has developed from a pure distributor to a successful system integrator for Industrial PCs, who works closely with customers to create individual embedded solutions professionally and reliably. Aaronn advises and supports its customers throughout the entire duration of a project.",
        image: "fea9.png",
        link: "",
        anchor: "",
        type: "Partner",
        text: "Gold Partner"
    },
    {
        name: "Symg (shanghai) Intelligence System Co., Ltd",
        description: "SYMG (Shanghai) intelligence System Co., Ltd is a pioneer in motion control technology and application.   New institution, founded by Shenyang Machine Tool Group. The company builds i5 intelligent manufacturing ecology around the core technology of motion control, and is committed to the development.",
        image: "fea10.png",
        link: "",
        anchor: "",
        type: "Partner",
        text: "Gold Partner"
    },
]

// feature edge 

let feature_network_acceleraror = [
    {
        name: "HCL Technologies",
        description: "Arrow Electronics guides innovation forward for over 210,000 leading technology manufacturers and service providers. With 2022 sales of $37 billion, Arrow develops technology solutions that improve business and daily life. Learn more at fiveyearsout.com.",
        image: "fna1.png",
        link: "",
        anchor: "",
        text: "Titanium Partner",
        type: "Partner"

    },
    {
        name: "ADVANTECH CO., LTD.",
        description: "Founded in 1983, Advantech has more than 5,000 employees worldwide and a global reach with teams in seven geographic regions. Our products are distributed and serviced by an extensive global network of offices and an industry leading eBusiness infrastructure designed to provide fast and responsive service that benefits customers.",
        image: "fna2.png",
        link: "",
        anchor: "",
        text: "Titanium Partner",
        type: "Partner"

    },
    {
        name: "DELL TECHNOLOGIES",
        description: "Dell original equipment manufacturer (OEM) solutions offer an extensive product portfolio and comprehensive services from Dell to help its customers power their own solutions. Our standards-based technologies are built to order and customized for the specific needs of our customers and their end users.",
        image: "fna3.png",
        link: "",
        anchor: "",
        text: "Titanium Partner",
        type: "Partner"

    },
    {
        name: "6WIND",
        description: "We deliver virtualized, cloudified, distributed high performance & secure networking software solutions to support new applications such as 5G, IoT, SD-WAN. 6WIND software is deployed globally by Service Providers, Systems Integrators, and Tier-1 OEMs, allowing customers to replace expensive hardware with flexible software solutions",
        image: "fna4.png",
        link: "",
        anchor: "",
        text: "Gold Partner",
        type: "Partner"

    },
    {
        name: "PFU Ltd.",
        description: "Our high-level quality and reliability are supported by the creation of an integrated system in terms of development, manufacturing, and maintenance by our domestic in-house factory.",
        image: "fna5.png",
        link: "",
        anchor: "",
        text: "Titanium Partner",
        type: "Partner"

    },
    {
        name: "AAEON Technology Inc",
        description: "Established in 1992, AAEON is one of the leading designers and manufacturers of professional intelligent IoT solutions. Committed to innovative engineering, AAEON provides reliable and high quality computing platforms, including industrial motherboards and systems, industrial displays, rugged tablets, embedded controllers, network appliances.",
        image: "fna6.png",
        link: "",
        anchor: "",
        text: "Titanium Partner",
        type: "Partner"

    },
    {
        name: "Fujitsu Technology Solutions",
        description: "Fujitsu is one of the leading IT-companies in the world. Based on its broad knowledge and experience the company offers a huge variety of IT products and services. For more than 25 years, mainboards have been and are being developed and produced in Augsburg/Germany.",
        image: "fna7.png",
        link: "",
        anchor: "",
        text: "Titanium Partner",
        type: "Partner"

    },
    {
        name: "CISCO SYSTEMS",
        description: "Cisco is the worldwide leader in IT that helps companies seize the opportunities of tomorrow by proving that amazing things can happen when you connect the previously unconnected. At Cisco customers come first and an integral part of our DNA is creating long-lasting customer partnerships and working with them to identify their needs.",
        image: "fna8.png",
        link: "",
        anchor: "",
        text: "Titanium Partner",
        type: "Partner"

    },
    {
        name: "6WIND Virtual Cell Site Router (vCSR)",
        description: "The 6WIND vCSR simplifies the mobile network architecture and significantly reduces operator TCO. It is optimized to develop high-performance routing and IPsec VPN connectivity with minimal CPU resource usage.Designed to be deployed as a virtual network function on an x86 COTS server",
        image: "fna9.png",
        link: "",
        anchor: "",
        text: "",
        type: "Offering"

    },
    {
        name: "A10 NETWORKS",
        description: "",
        image: "fna10.png",
        link: "",
        anchor: "",
        text: "Gold Partner",
        type: "Partner"

    },
]

// feature ai

let feature_ai = [
    {
        name: "ISSD Electronics",
        description: "SSD is working on system design and integration, digital signal processing, software development and electronic design. ISSD provides solutions for Intelligent Transportation Systems, Traffic Management and Enforcement Systems. The company delivers A to Z Smart Traffic Solution Applications to the Cities Worldwide.",
        image: "fa1.png",
        link: "",
        anchor: "",
        text: "Gold Partner",
        type: "Partner"
    },
    {
        name: "Visage Technologies AB",
        description: "Founded in 2002, Visage Technologies grew to over 170 employees, 2 offices and 2 divisions.Our mission is to continuously build up the highest possible level of knowledge and skills in R&D in the fields of computer vision, machine learning.",
        image: "fa2.png",
        link: "",
        anchor: "",
        text: "Gold Partner",
        type: "Partner"
    },
    {
        name: "WEG S.A.",
        description: "WEG is a global company and is regarded as one of the world’s leading manufacturers of energy efficient electric motors, automation, power transmission, renewable resource technologies, solar, biomass and wind power generation, distribution equipment, and industrial coatings and varnishes. Doing business in over 135 countries.",
        image: "fa3.png",
        link: "",
        anchor: "",
        text: "Titanium  Partner",
        type: "Partner"
    },
    {
        name: "Fujitsu Technology Solutions",
        description: "Fujitsu is one of the leading IT-companies in the world. Based on its broad knowledge and experience the company offers a huge variety of IT products and services. For more than 25 years, mainboards have been and are being developed and produced in Augsburg/Germany.",
        image: "fa4.png",
        link: "",
        anchor: "",
        text: "Titanium Partner",
        type: "Partner"
    },
    {
        name: "慧影医疗科技（北京）有限公司",
        description: "HY Medical is one of the leading healthcare AI solution developers, dedicated to applying computer vision and deep learning technologies to the medical field. We are an early member of the Intel AI Builders Program and in 2018 we became one of the Intel capital portfolio companies. As one of the early AI companies focusing on medical imaging.",
        image: "fa5.png",
        link: "",
        anchor: "",
        text: "Gold Partner",
        type: "Partner"
    },
    {
        name: "EPIC iO DeepInsights",
        description: "The EPIC iO DeepInsights Platform uses edge computing to gather AI video analytics for real-time insights; IoT sensors to monitor the operational status, health, and safety of workplace environments; and customizable visualization so customers can review and analyze historical data and reports. It provides high-value, actionable insights through a single.",
        image: "fa6.png",
        link: "",
        anchor: "EPIC IO",
        text: "",
        type: "Offering"
    },
    {
        name: "AI-PPE",
        description: "AI-PPE is a video analysis application powered by deep neural networks, designed to identify individuals wearing personal protective equipment (PPE) such as helmets, vests, or both within a designated area. It serves dual purposes: as an access control mechanism in work areas requiring specific PPE for entry, and as a continuous surveillance tool.",
        image: "fa7.png",
        link: "",
        anchor: "A.I.Tech Srl",
        text: "",
        type: "Offering"
    },
    {
        name: "AI-BIO",
        description: "AI-Bio is a video analytics application designed to detect and analyze faces within images, capable of identifying faces even when obscured by obstacles like non-frontal angles, facemasks, or other accessories. Leveraging deep neural networks, it performs sophisticated face analysis to discern gender, estimate age within a range from 0 to 100 years.",
        image: "fa7.png",
        link: "",
        anchor: "A.I.Tech Srl",
        text: "",
        type: "Offering"
    },
    {
        name: "AI-FIRE-PLUS",
        description: "AI-FIRE-PLUS is an advanced video-analysis software developed to enhance fire detection in environments where traditional fire and smoke alarms may not be effective. Utilizing sophisticated computer vision techniques and deep neural networks, it is capable of identifying flames and smoke across vast or hard-to-monitor areas such as large indoor spaces, forests.",
        image: "fa9.png",
        link: "",
        anchor: "A.I.Tech Srl",
        text: "",
        type: "Offering"
    },
    {
        name: "No code AI in Image and video analytics",
        description: "Tusker is a NO code AI Vision platform, which helps the entire Business Community by Automating their Computer Vision project in span of just few hours instead of weeks without knowledge about AI. Use cases into safety, Security, Compliance and Visual Inspection.",
        image: "fa10.png",
        link: "",
        anchor: "Tusker AI",
        text: "",
        type: "Offering"
    },
]

// design ai

let design_ai = [
    {
        name: "QUANTA COMPUTER INC.",
        description: "Quanta Computer Incorporated (TWSE: 2382) is a Taiwan-based manufacturer of notebook computers and other electronic hardware. It is the largest manufacturer of notebook computers in the world. Its customers include Apple Inc., Compaq, Dell, Gateway, Hewlett-Packard, Alienware, Amazon.com, Casper, Cisco, Fujitsu, Gericom, Lenovo, LG, Maxdata, MPC.",
        image: "da1.png",
        link: "",
        anchor: "",
        text: "Titanium Partner",
        type: "Partner"
    },
    {
        name: "AVALUE TECHNOLOGY INCORPORATION",
        description: "Avalue Technology (TAIEX: 3479-TW) is a professional Industrial Computer manufacturing company, who is dedicated to developing the x86 and other architecture products, including Embedded Computers, Single Board Computers (Full Size SBC), Systems-on-Modules/ ETX (SoM/ ETX).",
        image: "da2.png",
        link: "",
        anchor: "",
        text: "Gold Partner",
        type: "Partner"
    },
    {
        name: "WEG S.A.",
        description: "WEG is a global company and is regarded as one of the world’s leading manufacturers of energy efficient electric motors, automation, power transmission, renewable resource technologies, solar, biomass and wind power generation, distribution equipment, and industrial coatings and varnishes. Doing business in over 135 countries.",
        image: "da3.png",
        link: "",
        anchor: "",
        text: "Titanium  Partner",
        type: "Partner"
    },
    {
        name: "LANNER ELECTRONICS INC.",
        description: "Lanner Electronics Inc (TAIEX 6245) is a world leading provider of design, engineering and manufacturing services for advanced network appliances and rugged applied computing platforms for system integrator, service providers and application developers. Founded in 1986, Lanner is an ISO 9001 accredited organization with headquarters in Taipei.",
        image: "da4.jpg",
        link: "",
        anchor: "",
        text: "Titanium Partner",
        type: "Partner"
    },
    {
        name: "Kontron",
        description: "Kontron is a global leader in IoT/Embedded Computing Technology (ECT) and offers individual solutions in the areas of Internet of Things (IoT) and Industry 4.0 through a combined portfolio of hardware, software and services. With its standard and customized products based on highly reliable state-of-the-art technologies, Kontron provides secure.",
        image: "da5.png",
        link: "",
        anchor: "",
        text: "Titanium Partner",
        type: "Partner"
    },
    {
        name: "Prodrive Technologies",
        description: "Prodrive Technologies is an OEM and provider of high-end embedded systems and solutions. With locations in the Netherlands, China, and USA and sales offices in Israel and Japan our footprint is global. Prodrive Technologies' portfolio includes the Zeus server series, the Poseidon Industrial PC series,, the Hermes motherboard series, and the Zeus High Performance.",
        image: "da6.png",
        link: "",
        anchor: "",
        text: "Titanium Partner",
        type: "Partner"
    },
    {
        name: "NEXCOM INTERNATIONAL CO., LTD.",
        description: "Founded in 1992, NEXCOM is committed to being the trustworthy partner in building intelligent solutions. NEXCOM integrates its capabilities and operates six global businesses, which are IoT Automation Solutions, Intelligent Digital Security, Intelligent Platform @ Smart City, Mobile Computing Solutions, Medical.",
        image: "da7.png",
        link: "",
        anchor: "",
        text: "Titanium Partner",
        type: "Partner"
    },
    {
        name: "NCA-5540 1U 19” Rackmount Network Appliance Powered by the 4th Gen Intel® Xeon® Scalable Processor",
        description: "The NCA-5540 is a 1U 19” rackmount security network appliance built with Intel® Xeon® Processor Scalable Family (Sapphire Rapids-SP) and Emmisburg PCH. The introduction of the NCA-5540 fulfills network service providers’ demand for a more robust and flexible hardware platform.",
        image: "da8.png",
        link: "",
        anchor: "LANNER ELECTRONICS INC.",
        text: "",
        type: "Offering"
    },
    {
        name: "NCA-6530 2U 19” Rackmount Network Appliance Built With Intel® Xeon® Processor Scalable Family (Codenamed Sapphire Rapids-SP)",
        description: "The NCA-6530, a high-performance 2U rackmount network appliance, is powered by Intel® Xeon® Processor Scalable family (Codenamed Sapphire Rapids-SP) and supports up to 8x NIC slots, Max. 1536GB system memory, 6x hot-swappable fans, 1600W/2000W redundant PSUs, Intel® QAT",
        image: "da9.png",
        link: "",
        anchor: "LANNER ELECTRONICS INC.",
        text: "",
        type: "Offering"
    },
    {
        name: "AI-FIRE-PLUS",
        description: "NCA-6040 2U 19” Rackmount Network Appliance Powered by the 4th Gen Intel® Xeon® Scalable Processor",
        image: "da10.png",
        link: "",
        anchor: "LANNER ELECTRONICS INC.",
        text: "",
        type: "Offering"
    },
    {
        name: "ECA-5540 1U 19” Rackmount Open RAN Appliance Powered by 4th Gen Intel® Xeon® Scalable Processor",
        description: "Featuring a short-depth chassis and front access IO design, the ECA-5540 is powered by the latest 4th Gen Intel® Xeon® Scalable Processor, which is equipped with Intel® vRAN boost for improved virtualization performance and power efficiency. Powered by 4th Gen Intel® Xeon® Scalable",
        image: "da5.png",
        link: "",
        anchor: "LANNER ELECTRONICS INC.",
        text: "",
        type: "Offering"
    },
]

// cloudetv 

let cloud_episode = [
    {
        name: "Enhance Confidential Computing with Intel® Trust Authority - Intel",
        desc: "Learn how Intel® Trust Authority attestation services enhance confidential computing by offering assurance that data enclaves are protected.",
        image: "epi1.png",
        link: "",
    },
    {
        name: "How to Simplify Cloud Optimization with Intel® Granulate™",
        desc: "Learn how cloud tools from Intel and Deloitte can help you optimize customer cloud efficiency and enable FinOps capabilities.",
        image: "epi2.png",
        link: "",
    },
    {
        name: "Support Migration to Microsoft Windows Server and SQL Server 2022",
        desc: "Learn how you can build your business by supporting customer migration to Microsoft Windows Server 2022 and SQL Server 2022.",
        image: "epi3.png",
        link: "",
    },
    {
        name: "5th Gen Intel® Xeon® Scalable Processors Overview",
        desc: "Find out how 5th Gen Intel® Xeon® Scalable processors (code named Emerald Rapids) can help solve critical business challenges for your customers.",
        image: "epi4.png",
        link: "",
    },
    {
        name: "Your GenAI Opportunity with Intel® Gaudi® AI Accelerators",
        desc: "Learn how Intel® Gaudi AI accelerators provide the performance, scalability, efficiency, and affordability needed for GenAI training and inference.",
        image: "epi5.png",
        link: "",
    },
    {
        name: "Accelerated by Intel®",
        desc: "Learn more about the Accelerated by Intel® Partner Solution brand and how your offerings could qualify.",
        image: "epi6.png",
        link: "",
    },
    {
        name: "Overcoming Developer Challenges with Microservices",
        desc: "This episode of Intel® Cloud TV dives into some key developer challenges around microservices in the cloud and how Intel can help overcome them.",
        image: "epi7.png",
        link: "",
    },
    {
        name: "Intel® Optimization Hub",
        desc: "Watch a demo of the Intel® Optimization Hub and learn about the many benefits it offers for improved performance, efficiency, and cost-effectiveness.",
        image: "epi8.png",
        link: "",
    },
    {
        name: "Cloud Solutions Help from Intel",
        desc: "Using a real-world example in the health and life science industry, learn how to get the best value from Intel's cloud technology and support.",
        image: "epi9.jpg",
        link: "",
    },
    {
        name: "Successful Cloud Migrations",
        desc: "Cloud Partner Manager, Ashley Rodrigue, shares her experience with successful cloud migrations using continuous optimization.",
        image: "epi10.jpg",
        link: "",
    },

]

// showcase search

let showcase_search_data = [
    {
        name: "Babybot Smart Health Evaluation & Precise Exercise Solution",
        description: "First in the market “Babybot Smart Exercise Series”, integrated with evaluation system to provide personalized training program​​ wellness evaluation first in market “Smart Muscle Strength Evaluation System” for community scale combine grip strength, sit-to-stand speed, walking speed, etc.",
        image: "ss15.png",
        link: "",
        anchor: " Netown",
        type: "Offering"
    },
    {
        name: "'BxBFFT' Fast Fourier Transform for FPGAs",
        description: "The 'BxBFFT' Fast Fourier Transform is a hardware FFT for FPGAs or ASICs. It has features not supported by the Altera® Parallel FFT or other FFTs, including Real FFTs and Non-Power-of-2 FFTs. It supports larger FFT sizes and higher levels of parallelism at higher clock rates than other FFTs, making it uniquely capable of supporting",
        image: "ss16.png",
        link: "",
        anchor: " Bit by Bit Signal Processing LLC",
        type: "Offering"
    },
    {
        name: '"Jey Tech"MMC',
        description: "",
        image: "ss17.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: '"Lift and Learn" Interactive Retail Displays for Product Engagement Marketing',
        description: "Perch Engages Shoppers To Interact With Your Products By: Attracting customers to the interactive retail displays with high-impact, dynamic digital media Detecting which products shoppers touch or pickup using advanced computer vision technology Responding to shoppers with engaging product",
        image: "ss18.png",
        link: "",
        anchor: "Perch",
        type: "Offering"
    },
    {
        name: "&O",
        description: "Omnind collects real engineering data from the production environment and builds the machine learning for traditional industries like manufacturing to reduce cost and improve efficiency. Our paramount objective is to comprehend your distinct pain points, discern your aspirations, and align with your strategic goals.",
        image: "ss19.png",
        link: "",
        anchor: "Omnind Inc.",
        type: "Offering"
    },
    {
        name: "'KODEKS' d.o.o. Sarajevo",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "(주)굿트윈",
        text: "",
        description: "Member Partner",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "(주)다나와컴퓨터",
        text: "Titanium Partner",
        description: "PC, LED monitor and peripherals manufacturing distribution Joining the Public Procurement Service Public institutions, financial institutions, educational institutions, B2B specialized enterprises ﻿Educational institutions: 300 such as elementary, middle, high school, university, university-industry cooperation group and institutes of various levels",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "(주)메이드인테크",
        text: "Member Partner",
        description: "",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "(주)바른나라",
        text: "",
        description: "PC, LED monitor and peripherals manufacturing distribution Joining the Public Procurement Service Public institutions, financial institutions, educational institutions, B2B specialized enterprises ﻿Educational institutions: 300 such as elementary, middle, high school, university, university-industry cooperation group and institutes of various levels",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "(주)브레인박스벤치마크",
        text: "Member  Partner",
        description: "",
        image: "f6.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
]

// iot

let internet_thing_embedded_data = [
    {
        name: "Arrow Electronics Inc",
        text: "Intel Authorized Distributor (IAD), IoT Solution Aggregator",
        description: "Arrow Electronics guides innovation forward for over 210,000 leading technology manufacturers and service providers. With 2022 sales of $37 billion, Arrow develops technology solutions that improve business and daily life. Learn more at fiveyearsout.com.",
        image: "img0.jpg",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Avnet Inc.",
        text: "Intel Authorized Distributor (IAD)",
        description: "Avnet is a global technology solutions provider with an extensive ecosystem delivering design, product, marketing and supply chain expertise for customers at every stage of the product lifecycle. We transform ideas into intelligent solutions, reducing the time, cost and complexities of bringing products to market.",
        image: "img1.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "PORTWELL, INC",
        text: "Gold Partner",
        description: "Portwell, a world-leading innovator in Industrial PC and embedded computing solutions, and an IoT Solutions Titanium Partner of the Intel Partner Alliance, develops a wide-range of cutting-edge platforms to meet versatile needs of mission-critical applications. We provide board-level solutions along with high quality and real-time industrial-level system",
        image: "img2.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "POSIFLEX TECHNOLOGY, INC.",
        text: "Gold Partner",
        description: "Founded in 1984, Posiflex Technology Inc, has since grown to be a world leader in the design and manufacture of touch screen terminals and peripherals. These terminals have been deployed globally across multiple industries and applications including retail Point-of-Sale, health care, hospitality, kiosks and more.",
        image: "img3.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Biomdcare Corporation",
        text: "Gold Partner",
        description: "Biomedica focus on the needs of women around the world. With our user-friendly and highly accurate medical AI, we help medical professionals to screen out diseases at all stages of women’s life with simple and accurate solutions. Our solutions and services are based on medical imaging and molecular medicine, including AI screening tools for osteoporosis",
        image: "img4.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "DELL TECHNOLOGIES",
        text: "Titanium Partner",
        description: "Dell original equipment manufacturer (OEM) solutions offer an extensive product portfolio and comprehensive services from Dell to help its customers power their own solutions. Our standards-based technologies are built to order and customized for the specific needs of our customers and their end users.",
        image: "img5.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "QSC AUDIO PRODUCTS,LLC",
        text: "Gold Partner",
        description: "For over 50 years, QSC has developed the technology and solutions that power immersive cinema, live performance audio, themed entertainment experiences, and digital collaboration and meeting experiences across the globe. A globally recognized innovator in the design, engineering and manufacture of category leading high-performance loudspeakers.",
        image: "img6.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "SUPER MICRO COMPUTER, INC.",
        text: "Titanium Partner",
        description: "Supermicro®, a global leader in high-performance, high-efficiency server technology and innovation is a premier provider of end-to-end green computing solutions and integration/support services for Data Center, Cloud Computing, Enterprise IT, Hadoop/Big Data, HPC and Embedded Systems worldwide.",
        image: "img7.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "AvidBeam",
        text: "Gold Partner",
        description: "We are an AI based video analytics company. We develop applications for the surveillance industry that span security, safety and business intelligence. We target Smart Cities, critical infrastructure, malls, financial institutions, big retailers, manufacturers, smart buildings, ports and railway stations and gated smart communities,",
        image: "img8.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "ATRUST COMPUTER CORPORATION",
        text: "Gold Partner",
        description: "Established in 2007, Atrust is a creative, professional and enthusiastic team which has rich experience in designing, producing Thin Client, Zero Client, Server and Management Software. The objectives of Atrust are to provide customers with high quality, high efficiency and environmental.",
        image: "img9.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "Aventyn, Inc",
        text: "Gold Partner",
        description: "Aventyn is an award winning digital health company delivering innovative, standards based secure core to cloud connected clinical information solutions and services to lower health care delivery costs, improve quality and increase patient safety. We provide clinical evidence based solutions for personalized chronic disease management, medical imaging.",
        image: "img10.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "Avocor",
        text: "Gold Partner",
        description: "From agnostic solutions, ideal for every room, space and budget to the world's first Windows collaboration displays created in partnership with Microsoft, Avocor has an interactive display ideal for every environment. Incredibly easy-to-use, our solutions deliver seamless integration with 3rd party hardware and software platforms, meaning that choosing.",
        image: "img11.jpg",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "Asseco",
        text: "Gold Partner",
        description: "",
        image: "img12.png",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
    {
        name: "新华三技术有限公司(h3c)",
        text: "Titanium Partner",
        description: "Titanium Partner紫光旗下新华三集团作为数字化解决方案领导者，致力于成为客户业务创新、数字化转型最可信赖的合作伙伴。新华三拥有计算、存储、网络、5G、安全等全方位的数字化基础设施整体能力，提供云计算、大数据、人工智能、工业互联网、信息安全、智能联接、新安防、边缘计算等在内的一站式数字化解决方案，以及端到端的技术服务。同时，新华三也是HPE ® 服务器、存储和技术服务的中国独家提供商",
        image: "img13.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Cathexis Technologies",
        text: "Gold Partner",
        description: "Introduction to Cathexis: Cathexis Technologies is a globally recognized electronic and video monitoring software developer. For more than 20 years Cathexis has shown how video monitoring solutions can maximize return-on-investment for security management, infrastructure management, and business intelligence to improve.",
        image: "img14.jpg",
        link: "",
        anchor: "View Website",
        type: "Partner"
    },
]

// fpga featured
let fgpa_feature_data = [
    {
        name: "Agilex 7 FPGA Starter Kit",
        description: "The Terasic Agilex 7 FPGA Starter Kit takes advantage of the latest Intel Agilex® 7 SoC FPGA F-Series devices with either 800K or 2.7M logic elements options, offering 50% higher fabric performance and 40% lower power consumption than equivalent Stratix® 10 devices. The Terasic Agilex 7 FPGA Starter Kit combines a number of high-end hardware interfaces such as PCI.",
        image: "img15.png",
        link: "",
        anchor: "TERASIC INC",
        type: "Offering"
    },
    {
        name: "SYSTEC Corporation",
        text: "Gold Partner",
        description: "'1. Design to manufacturing (one-stop system for software, hardware, mechanism, and manufacturing)2. Development of FPGAs, boards, and drivers for high-speed communication control3. Engineering Dispatch(software design, hardware design, mechanism design, FPGA solutions)'",
        image: "img16.png",
        link: "",
        anchor: "",
        type: "Offering",
    },
    {
        name: "DELL TECHNOLOGIES",
        text: "Titanium Partner",
        description: "Dell original equipment manufacturer (OEM) solutions offer an extensive product portfolio and comprehensive services from Dell to help its customers power their own solutions. Our standards-based technologies are built to order and customized for the specific needs of our customers and their end users.",
        image: "img17.png",
        link: "",
        anchor: "",
        type: "Offering"
    },
    {
        name: "SUPER MICRO COMPUTER, INC.",
        text: "Titanium Partner",
        description: "Supermicro®, a global leader in high-performance, high-efficiency server technology and innovation is a premier provider of end-to-end green computing solutions and integration/support services for Data Center, Cloud Computing, Enterprise IT, Hadoop/Big Data, HPC and Embedded Systems worldwide.",
        image: "img18.png",
        link: "",
        anchor: "",
        type: "Offering"
    },
    {
        name: "CREONIC GMBH",
        text: "Gold Partner",
        description: "Creonic is an ISO 9001:2015 certified provider of ready-for-use IP cores for wired, wireless, fiber, and free-space optical communications. All relevant digital signal processing algorithms are covered, including, but not limited to, forward error correction, modulation, equalization, and demodulation. We offer the richest product portfolio in this field, covering standards like 3GPP 5G.",
        image: "img19.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "IMAGOS",
        text: "Gold Partner",
        description: "Imagos s.a.s. is specialized in electronic design and software development for artificial vision systems. The company was started in 1999 with the aim to offer high level services in the fields of the electronic and software design for industrial applications. Currently we are operating in systems for: Computer vision Contactless optical measurement Frame.",
        image: "img20.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "IWAVE SYSTEMS TECHNOLOGIES",
        text: "Titanium Partner",
        description: "As an embedded design and engineering services company offering an extensive portfolio of FPGA & SoC FPGA system on modules and embedded computing solutions, iWave is committed to being your reliable technology partner. With over 25 years of expertise and projects on Arria®, Intel Agilex®, Intel® Stratix®.",
        image: "img21.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Hitek Systems",
        text: "Titanium Partner",
        description: "A nimble hardware, software and systems development company providing FPGA platforms and leading edge networking IP solutions.Custom and COTS acceleration, computational storage, networked-computational storage PCIe cards and embedded SOM (eSOM™) hardware with leading edge Intel® FPGAs. Solutions targeted at cloud, 5G/wireless.",
        image: "img22.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "WISTRON CORPORATION",
        text: "Gold Partner",
        description: "Founded in 1996, WNC specializes in the design, research, development, and manufacture of communications products, in particular in the fields of radio frequency (RF) antenna design, software and hardware design, mechanical design, system integration, user interface development, and product testing and certification.",
        image: "img23.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "IEI Integration Corp.",
        text: "Titanium Partner",
        description: "IEI Integration Corp. is a leading industrial computing service provider that integrates computing platforms and customization services as its core service.  IEI provides hundreds of industrial computer boards, systems and peripherals in thousands of customer applications, and supports OEM/ODM services thereby reducing  customers'  design .",
        image: "img24.png",
        link: "",
        anchor: "Aotu.ai",
        type: "Partner"
    }, {
        name: "Fujitsu Technology Solutions",
        text: "Titanium Partner",
        description: "Fujitsu is one of the leading IT-companies in the world. Based on its broad knowledge and experience the company offers a huge variety of IT products and services. For more than 25 years, mainboards have been and are being developed and produced in Augsburg/Germany.",
        image: "img25.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "TTTECH INDUSTRIAL",
        text: "Titanium Partner",
        description: "TTTech Industrial develops innovative computing and connectivity solutions that help customers to modernize automation systems and become IoT leaders in their field. TTTech Industrial integrates open, standard technologies to offer flexible platforms for connecting, controlling and managing machines.",
        image: "img26.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "HCL Technologies",
        text: "Titanium Partner",
        description: "HCL Technologies is a next-generation global technology company that helps enterprises reimagine their businesses for the digital age. Our technology products and services are built on four decades of innovation, with a world-renowned management philosophy, a strong culture of invention and risk-taking, and a relentless focus on customer relationships.",
        image: "img27.png",
        link: "",
        anchor: "",
        type: "Partner"
    }, {
        name: "Hitachi Vantara",
        text: "Gold Partner",
        description: "Hitachi pursues Social Innovation with data-driven technology solutions that help you build a strong business and a healthier, safer, smarter society. To succeed in a world of disruptive change requires technological adaptation and smart decisions. We help you achieve both with a focus on data that offers real value – what we call the Internet of Things that matter.",
        image: "img28.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
]

// 5th-gen-xeon

let gen_xeon_data = [
    {
        name: "QUANTA COMPUTER INC.",
        text: "Titanium Partner",
        description: "Quanta Computer Incorporated (TWSE: 2382) is a Taiwan-based manufacturer of notebook computers and other electronic hardware. It is the largest manufacturer of notebook computers in the world. Its customers include Apple Inc., Compaq, Dell, Gateway, Hewlett-Packard, Alienware, Amazon.com, Casper, Cisco, Fujitsu, Gericom, Lenovo, LG, Maxdata.",
        image: "img29.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "AVALUE TECHNOLOGY INCORPORATION",
        text: "Gold Partner",
        description: "Avalue Technology (TAIEX: 3479-TW) is a professional Industrial Computer manufacturing company, who is dedicated to developing the x86 and other architecture products, including Embedded Computers, Single Board Computers (Full Size SBC), Systems-on-Modules/ ETX (SoM/ ETX), Industrial.",
        image: "img30.png",
        link: "",
        anchor: "",
        type: "Partner",
    },
    {
        name: "Kontron",
        text: "Titanium Partner",
        description: "Kontron is a global leader in IoT/Embedded Computing Technology (ECT) and offers individual solutions in the areas of Internet of Things (IoT) and Industry 4.0 through a combined portfolio of hardware, software and services. With its standard and customized products based on highly reliable state-of-the-art technologies, Kontron provides secure.",
        image: "img31.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "LANNER ELECTRONICS INC.",
        text: "Titanium Partner",
        description: "Lanner Electronics Inc (TAIEX 6245) is a world leading provider of design, engineering and manufacturing services for advanced network appliances and rugged applied computing platforms for system integrator, service providers and application developers. Founded in 1986, Lanner is an ISO 9001 accredited organization with headquarters in Taipei, Taiwan.",
        image: "img32.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Prodrive Technologies",
        text: "Titanium Partner",
        description: "Prodrive Technologies is an OEM and provider of high-end embedded systems and solutions. With locations in the Netherlands, China, and USA and sales offices in Israel and Japan our footprint is global. Prodrive Technologies' portfolio includes the Zeus server series, the Poseidon Industrial PC series,, the Hermes motherboard series, and the Zeus High Performance.",
        image: "img33.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "NEXCOM INTERNATIONAL CO., LTD.",
        text: "Titanium Partner",
        description: "ounded in 1992, NEXCOM is committed to being the trustworthy partner in building intelligent solutions. NEXCOM integrates its capabilities and operates six global businesses, which are IoT Automation Solutions, Intelligent Digital Security, Intelligent Platform @ Smart City, Mobile Computing Solutions.",
        image: "img34.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "NCA-5540 1U 19” Rackmount Network Appliance Powered ",
        text: "",
        description: "The NCA-5540 is a 1U 19” rackmount security network appliance built with Intel® Xeon® Processor Scalable Family (Sapphire Rapids-SP) and Emmisburg PCH. The introduction of the NCA-5540 fulfills network service providers’ demand for a more robust and flexible hardware platform.",
        image: "img35.png",
        link: "",
        anchor: "LANNER ELECTRONICS INC.",
        type: "Offering"
    },
    {
        name: "NCA-6530 2U 19” Rackmount Network Appliance Built",
        text: "",
        description: "The NCA-6530, a high-performance 2U rackmount network appliance, is powered by Intel® Xeon® Processor Scalable family (Codenamed Sapphire Rapids-SP) and supports up to 8x NIC slots, Max. 1536GB system memory, 6x hot-swappable fans, 1600W/2000W redundant PSUs.",
        image: "img36.png",
        link: "",
        anchor: "",
        type: "Offering"
    },
    {
        name: "NCA-6040 2U 19” Rackmount Network Appliance Powered by the",
        text: "",
        description: "The NCA-6040 is a 2U 19” rackmount security network appliance built with Intel® Xeon® Processor Scalable Family (Sapphire Rapids-SP) and Emmisburg PCH. The introduction of the NCA-6040 fulfills network service providers’ demand for a more robust and flexible hardware platform.",
        image: "img37.png",
        link: "",
        anchor: "LANNER ELECTRONICS INC.",
        type: "Offering"
    },
    {
        name: "ECA-5540 1U 19” Rackmount Open RAN Appliance Powered by 4th Gen Intel®",
        text: "",
        description: "Featuring a short-depth chassis and front access IO design, the ECA-5540 is powered by the latest 4th Gen Intel® Xeon® Scalable Processor, which is equipped with Intel® vRAN boost for improved virtualization performance and power efficiency. Powered by 4th Gen Intel® Xeon® Scalable.",
        image: "img38.png",
        link: "",
        anchor: "LANNER ELECTRONICS INC",
        type: "Offering"
    },
    {
        name: "Avalue HPM-ERSDE Intel® dual 5th Gen. Xeon® Scalable Processor",
        text: "",
        description: "Dual Intel® LGA4677 Sockets support 5th Gen. Intel® Xeon® Scalable Processor (Max. TDP at 270W) Intel® C741 Chipset12 x DDR5 5600 MHz RDIMM up to 3TBTPM 2.0 onboardIPMI 2.0 with AST 2600 BMC controller onboard1 x Intel® I210AT Giga-bit Etherne.",
        image: "img39.png",
        link: "",
        anchor: "AVALUE TECHNOLOGY INCORPORATION",
        type: "Offering"
    },
    {
        name: "NSA 7160R - High-Performance Cyber Security Appliance",
        text: "",
        description: "NEXCOM’s NSA 7160R is a 2U rackmount high-performance networking appliance intended for networking security and 5G network applications. Based on the 5th Gen Intel® Xeon® product family (formerly: Eagle Stream), NSA 7160R features enhancements .",
        image: "img40.png",
        link: "",
        anchor: "NEXCOM INTERNATIONAL CO., LTD.",
        type: "Offering"
    },
]

// built for the edge
let built_edge_data = [
    {
        name: "Agilex 7 FPGA Starter Kit",
        description: "The Terasic Agilex 7 FPGA Starter Kit takes advantage of the latest Intel Agilex® 7 SoC FPGA F-Series devices with either 800K or 2.7M logic elements options, offering 50% higher fabric performance and 40% lower power consumption than equivalent Stratix® 10 devices. The Terasic Agilex 7 FPGA Starter Kit combines a number of high-end hardware interfaces such as PCI.",
        image: "img15.png",
        link: "",
        anchor: "TERASIC INC",
        type: "Offering"
    },
    {
        name: "SYSTEC Corporation",
        text: "Gold Partner",
        description: "'1. Design to manufacturing (one-stop system for software, hardware, mechanism, and manufacturing)2. Development of FPGAs, boards, and drivers for high-speed communication control3. Engineering Dispatch(software design, hardware design, mechanism design, FPGA solutions)'",
        image: "img16.png",
        link: "",
        anchor: "",
        type: "Offering",
    },
    {
        name: "DELL TECHNOLOGIES",
        text: "Titanium Partner",
        description: "Dell original equipment manufacturer (OEM) solutions offer an extensive product portfolio and comprehensive services from Dell to help its customers power their own solutions. Our standards-based technologies are built to order and customized for the specific needs of our customers and their end users.",
        image: "img17.png",
        link: "",
        anchor: "",
        type: "Offering"
    },
    {
        name: "SUPER MICRO COMPUTER, INC.",
        text: "Titanium Partner",
        description: "Supermicro®, a global leader in high-performance, high-efficiency server technology and innovation is a premier provider of end-to-end green computing solutions and integration/support services for Data Center, Cloud Computing, Enterprise IT, Hadoop/Big Data, HPC and Embedded Systems worldwide.",
        image: "img18.png",
        link: "",
        anchor: "",
        type: "Offering"
    },
    {
        name: "CREONIC GMBH",
        text: "Gold Partner",
        description: "Creonic is an ISO 9001:2015 certified provider of ready-for-use IP cores for wired, wireless, fiber, and free-space optical communications. All relevant digital signal processing algorithms are covered, including, but not limited to, forward error correction, modulation, equalization, and demodulation. We offer the richest product portfolio in this field, covering standards like 3GPP 5G.",
        image: "img19.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "IMAGOS",
        text: "Gold Partner",
        description: "Imagos s.a.s. is specialized in electronic design and software development for artificial vision systems. The company was started in 1999 with the aim to offer high level services in the fields of the electronic and software design for industrial applications. Currently we are operating in systems for: Computer vision Contactless optical measurement Frame.",
        image: "img20.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "IWAVE SYSTEMS TECHNOLOGIES",
        text: "Titanium Partner",
        description: "As an embedded design and engineering services company offering an extensive portfolio of FPGA & SoC FPGA system on modules and embedded computing solutions, iWave is committed to being your reliable technology partner. With over 25 years of expertise and projects on Arria®, Intel Agilex®, Intel® Stratix®.",
        image: "img21.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Hitek Systems",
        text: "Titanium Partner",
        description: "A nimble hardware, software and systems development company providing FPGA platforms and leading edge networking IP solutions.Custom and COTS acceleration, computational storage, networked-computational storage PCIe cards and embedded SOM (eSOM™) hardware with leading edge Intel® FPGAs. Solutions targeted at cloud, 5G/wireless.",
        image: "img22.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "WISTRON CORPORATION",
        text: "Gold Partner",
        description: "Founded in 1996, WNC specializes in the design, research, development, and manufacture of communications products, in particular in the fields of radio frequency (RF) antenna design, software and hardware design, mechanical design, system integration, user interface development, and product testing and certification.",
        image: "img23.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "IEI Integration Corp.",
        text: "Titanium Partner",
        description: "IEI Integration Corp. is a leading industrial computing service provider that integrates computing platforms and customization services as its core service.  IEI provides hundreds of industrial computer boards, systems and peripherals in thousands of customer applications, and supports OEM/ODM services thereby reducing  customers'  design .",
        image: "img24.png",
        link: "",
        anchor: "Aotu.ai",
        type: "Partner"
    }, {
        name: "Fujitsu Technology Solutions",
        text: "Titanium Partner",
        description: "Fujitsu is one of the leading IT-companies in the world. Based on its broad knowledge and experience the company offers a huge variety of IT products and services. For more than 25 years, mainboards have been and are being developed and produced in Augsburg/Germany.",
        image: "img25.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "TTTECH INDUSTRIAL",
        text: "Titanium Partner",
        description: "TTTech Industrial develops innovative computing and connectivity solutions that help customers to modernize automation systems and become IoT leaders in their field. TTTech Industrial integrates open, standard technologies to offer flexible platforms for connecting, controlling and managing machines.",
        image: "img26.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "HCL Technologies",
        text: "Titanium Partner",
        description: "HCL Technologies is a next-generation global technology company that helps enterprises reimagine their businesses for the digital age. Our technology products and services are built on four decades of innovation, with a world-renowned management philosophy, a strong culture of invention and risk-taking, and a relentless focus on customer relationships.",
        image: "img27.png",
        link: "",
        anchor: "",
        type: "Partner"
    }, {
        name: "Hitachi Vantara",
        text: "Gold Partner",
        description: "Hitachi pursues Social Innovation with data-driven technology solutions that help you build a strong business and a healthier, safer, smarter society. To succeed in a world of disruptive change requires technological adaptation and smart decisions. We help you achieve both with a focus on data that offers real value – what we call the Internet of Things that matter.",
        image: "img28.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
]

// 5g private network
let private_network_data = [
    {
        name: "QUANTA COMPUTER INC.",
        text: "Titanium Partner",
        description: "Quanta Computer Incorporated (TWSE: 2382) is a Taiwan-based manufacturer of notebook computers and other electronic hardware. It is the largest manufacturer of notebook computers in the world. Its customers include Apple Inc., Compaq, Dell, Gateway, Hewlett-Packard, Alienware, Amazon.com, Casper, Cisco, Fujitsu, Gericom, Lenovo, LG, Maxdata, MPC.",
        image: "img41.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "ADLINK TECHNOLOGY INC.",
        text: "Titanium Partner",
        description: "ADLINK Technology is a global leader in edge computing. Our mission is to affect positive change in society and industry by connecting people, places and things with AI. We do this through the delivery of leading edge, robust solutions addressing our customer’s critical business and technology challenges. Our offerings include robust boards, modules and syste.",
        image: "img42.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "ALPHA NETWORKS INC.",
        text: "Gold Partner",
        description: "Alpha Networks Inc. was founded in 2003 and is currently one of the largest professional network equipment manufacturers in Taiwan. With years of profound experience in product development and design, Alpha Networks has been a major service provider for network product design, development, and manufacturing for renowned global brand names.",
        image: "img43.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "HTC CORPORATION",
        text: "Gold Partner",
        description: "HTC brings brilliance to life through leading innovation in smart mobile device and experience design. Beginning with a vision to put a personal computer in the palm of our customers' hands, we have led the way in the evolution from palm PC to smartphone. The Pursuit of Brilliance is at the heart of everything we do, inspiring best-in-class design.",
        image: "img44.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "WAVE-IN COMMUNICATION INC.",
        text: "Gold Partner",
        description: "Founded in 2014, Wave-In Communication has the industry-leading technologies to provide custom-tailored services and innovative solutions for our clients. Our business units includes indoor coverage solutions, big data analytics platform, NB-IoT and 5G private network system integration.",
        image: "img45.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
]

// ai retail
let ai_retails_data = [
    {
        name: "BlueStar, Inc.",
        text: "Gold Partner",
        description: "BlueStar is the leading global distributor of solutions-based Digital Identification, Mobility, Point-of-Sale, RFID, IoT, AI. AR, M2M, Digital Signage, Networking, Blockchain, and Security technology solutions. BlueStar works exclusively with Value-Added Resellers (VARs) to provide complete solutions, custom configuration offerings.",
        image: "img312.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "AvidBeam",
        text: "Gold Partner",
        description: "We are an AI based video analytics company. We develop applications for the surveillance industry that span security, safety and business intelligence. We target Smart Cities, critical infrastructure, malls, financial institutions, big retailers, manufacturers, smart buildings, ports and railway stations and gated smart communities, ",
        image: "img313.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "IBM Cloud",
        text: "Titanium Partner",
        description: "IBM is a leading global hybrid cloud and AI, and business services provider, helping clients in more than 175 countries capitalize on insights from their data, streamline business processes, reduce costs and gain the competitive edge in their industries. Nearly 3,800 government and corporate entities in critical infrastructure areas such as financial services",
        image: "img314.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "JOHNSON CONTROLS INC",
        text: "Gold Partner",
        description: "Powering impactful sustainability, respectful safety and security, while delivering an enhanced customer experience. Your buildings have a purpose. They are places for people to live or work. Facilities for learning or healing. Venues for entertainment and shopping. Sites for the specialized storage of tangible goods or mission-critical data.",
        image: "img315.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Sensormatic Solutions",
        text: "Gold Partner",
        description: "Sensormatic Solutions is the leading global retail solutions portfolio of Johnson Controls powering operational excellence at scale and enabling smart and connected shopper engagement. As a global leader in retail technology with nearly 60 years of experience, Sensormatic Solutions delivers connected, powerful, and comprehensive solutions",
        image: "img316.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "CyberLink Corp",
        text: "Gold Partner",
        description: "CyberLink is the world's leading multimedia software company and pioneer in video and audio technologies in both PC and Mobile devices. Key products -- PowerDVD, PowerDirector, PhotoDirector, U Meeting, and FaceMe AI technology",
        image: "img317.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Diebold Nixdorf Inc",
        text: "Titanium Partner",
        description: "We started out making safes—security is embedded in our DNA. Today, we are strategic, collaborative, end-to-end provider of services, software, hardware and, yes, security. With our clients around the world, we’re driving connected commerce for the future of banking and retail. ",
        image: "img318.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "EPIC IO",
        text: "Gold Partner",
        description: "EPIC iO strives to make organizations and communities safer, smarter, and more connected through our robust portfolio of connectivity and AI + IoT solutions. With over 20 years of experience, our 4G/5G network solutions include Failover, Bonded Connectivity, Wireless WAN as primary, Fixed wireless access, Private LTE.",
        image: "img319.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "THUNDERSOFT SOFTWARE TECHNOLOGY CO LTD",
        text: "Gold Partner",
        description: "ThunderSoft is a provider of operating system technologies, superior products and solutions, experts in mobile, IoT, automotive, and enterprise. ﻿ Founded in 2008, through ThunderSoft’s expertise in edge intelligence and operating systems including Android, Linux, Windows and others, a profound middleware, application",
        image: "img320.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "viso.ai",
        text: "Gold Partner",
        description: "About viso.ai Switzerland-based viso.ai seeks to advance humanity through the power of computer vision. The company works closely with organizations in manufacturing, farming, medicine, transportation, and disaster response to guide product development for their widely accessible AI vision application",
        image: "img321.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Shekel Brainweigh Limited",
        text: "",
        description: "Member Partner",
        image: "img322.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Irisity",
        text: "Gold Partner",
        description: "Agent Video Intelligence (Agent Vi) is the leading global provider of open architecture, video analytics solutions. Agent Vi's comprehensive video analytics offering includes software products for on-premise installations as well as cloud-based SaaS, with capabilities ranging from real-time video analysis and alerts to video search and business intelligence. ",
        image: "img323.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Milestone Systems, Inc.",
        text: "Titanium Partner",
        description: "Milestone is the world's leading provider of open platform IP video surveillance software with more then 150.000 installations world wide. Represented in more then 150 countries through more than 10.000 resellers and integrators. Milestone's XProtect Video Management Software is designed as an Open Platform, with free downloadable API .",
        image: "img324.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "NCR Corporation",
        text: "Gold Partner",
        description: "At NCR, we know digital has completely changed how brands compete. To differentiate and win more business, having a digital-first mindset is key—even for physical locations—it’s the way to meet consumers in every moment and transform transactions into meaningful interactions. Shaping the future for 135 years, NCR is the world’s enterprise technology.",
        image: "img325.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Digital Content Technologies (DGCT)",
        text: "Gold Partner",
        description: "DiGital Content Technologies is a solution provider specialized in smart visual solution for retail, digital out-of-home media and smart cities. Based in Singapore since 2002, we propose, distribute and build innovative solutions integrating digital signage, video analytic (OpenVINO™), 3D technologies",
        image: "img326.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
]

// vpro 

let vipro_data = [
    {
        name: 'ADVANTECH CO., LTD.',
        text: "Titanium Partner",
        description: "Founded in 1983, Advantech has more than 5,000 employees worldwide and a global reach with teams in seven geographic regions. Our products are distributed and serviced by an extensive global network of offices and an industry leading eBusiness infrastructure designed to provide fast and responsive service that benefits customers",
        image: "img327.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Connect Self Hosted Portal",
        description: "Impero software is meticulously crafted to provide you with centralized control while maintaining the flexibility to adapt to the unique demands of your business. Through the integration of Intel® AMT within the Connect Portal, users can oversee Intel vPro® devices right down to the BIOS level, regardless of their location.",
        image: "img328.png",
        link: "",
        anchor: "Impero Software",
        type: "Offering"
    },
    {
        name: "Connect Cloud Portal",
        description: "Impero software is meticulously crafted to provide you with centralized control while maintaining the flexibility to adapt to the unique demands of your business. Through the integration of Intel® AMT within the Connect Portal, users can oversee Intel vPro® devices right t down to the BIOS level, regardless of their location.",
        image: "img329.png",
        link: "",
        anchor: "Impero Software",
        type: "Offering"
    },
    {
        name: 'Scalefusion',
        text: "",
        description: "Ambitious companies around the world trust Scalefusion to secure and manage endpoints including smartphones, tablets, laptops, rugged devices, Point of Sale (POS), and digital signages. Our mission is to make Device Management simple and effortless along with providing world-class customer support.Scalefusion simplifies the management of a diverse fleet of Android, Windows, iOS, macOS",
        image: "img330.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: 'Impero Software',
        text: "",
        description: "Impero software is meticulously crafted to provide you with centralized control while maintaining the flexibility to adapt to the unique demands of your business. The integration of Intel® AMT within the Connect Portal, users can oversee Intel vPro® devices right down to the BIOS level, regardless of their location. These management capabilities encompass functions.",
        image: "img331.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
]

// accelerated by intel 

let accelerated_by_intel_data = [
    {
        name: 'IBM Cloud',
        text: "Titanium Partner",
        description: "IBM is a leading global hybrid cloud and AI, and business services provider, helping clients in more than 175 countries capitalize on insights from their data, streamline business processes, reduce costs and gain the competitive edge in their industries. Nearly 3,800 government and corporate entities in critical infrastructure areas such as financial services, telecommunications.",
        image: "img332.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: 'Intelligent Security Systems (ISS)',
        text: "Titanium Partner",
        description: "Intelligent Security Systems, ISS, is a world leading developer of security surveillance and control systems through audio and video capture, recording, and analysis of patterns, of video images and digital data transmission. ISS provides a comprehensive line of digital video surveillance solutions that are at the forefront of security.",
        image: "img333.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: 'ISSD Electronics',
        text: "Gold Partner",
        description: "ISSD is working on system design and integration, digital signal processing, software development and electronic design. ISSD provides solutions for Intelligent Transportation Systems, Traffic Management and Enforcement Systems. The company delivers A to Z Smart Traffic Solution Applications to the Cities Worldwide.",
        image: "img334.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: 'BAUNE ECOSYSTEM INC.',
        text: "Gold Partner",
        description: "Baüne® is a solutions integrator of smart ecosystems, pioneering with a combination of emerging technologies such as edge computing, physical web, internet of things, remote management system, big data, mobile payments, artificial intelligence and blockchain. We have completed projects in the Automation and Control area and successful execution.",
        image: "img335.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Quantization of ML-Models and Performance-Boost in Pre-Processing",
        description: "Real-time and streaming applications are becoming increasingly popular due to their enormous, cross-domain application potential for generating company-wide added value. Increasing core requirements are primarily defined by the pursuit of ever lower latencies and computing times, while at the.",
        image: "img336.png",
        link: "",
        anchor: "scieneers GmbH",
        type: "Offering"
    },
    {
        name: "Numenta Platform for Intelligent Computing (NuPIC™)",
        description: "NuPIC™ is an AI software platform that draws on Numenta's decades of neuroscience research to enable large language model (LLM) deployments on CPUs with simplicity, scalability, and speed. NuPIC comes with a highly optimized inference server and production-ready pretrained mode.",
        image: "img337.png",
        link: "",
        anchor: " Numenta",
        type: "Offering"
    },
    {
        name: "Eigen Machine Vision",
        description: "Eigen Machine Vision is a suite of software tools and engineering services that helps manufacturers in both discrete and continuous manufacturing unlock the value of image data to better manage product and process variability across their machines, lines, and factories. It features Intel®-powered, OpenVINO™- optimized Edge.",
        image: "img338.png",
        link: "",
        anchor: "Eigen Innovations Inc.",
        type: "Offering"
    },
    {
        name: "AI-Traffic-Deep",
        description: "AI-Traffic DEEP is a video-analysis software that leverages deep neural networks for monitoring vehicles and pedestrians within designated areas. Its capabilities extend to recognizing vehicle types, colors, and average speeds, and it is adept at sending notifications based on these observations. The software is designed to enhance traffic management and safety.",
        image: "img339.png",
        link: "",
        anchor: "A.I.Tech Srl",
        type: "Offering"
    },
    {
        name: "AI-PPE",
        description: "AI-PPE is a video analysis application powered by deep neural networks, designed to identify individuals wearing personal protective equipment (PPE) such as helmets, vests, or both within a designated area. It serves dual purposes: as an access control mechanism in work areas requiring specific PPE for entry, and as a continuous surveillance.",
        image: "img339.png",
        link: "",
        anchor: "A.I.Tech Srl",
        type: "Offering"
    },
    {
        name: "AI-INTRUSION",
        description: "AI-INTRUSION is a video analytics app based on the most advanced artificial intelligence and computer vision algorithms. It enables intrusion detection, in terms of access and/or persistence in a sterile area (sterile zone detection), virtual line crossing (crossing line or tripwire detection) and multiple virtual line crossing. In addition to the real size of the object.",
        image: "img339.png",
        link: "",
        anchor: "A.I.Tech Srl",
        type: "Offering"
    },
    {
        name: "AI-FIRE-PLUS",
        description: "AI-FIRE-PLUS is an advanced video-analysis software developed to enhance fire detection in environments where traditional fire and smoke alarms may not be effective. Utilizing sophisticated computer vision techniques and deep neural networks, it is capable of identifying flames and smoke across vast or hard-to-monitor areas such as large indoor spaces, forests.",
        image: "img340.png",
        link: "",
        anchor: "A.I.Tech Srl",
        type: "Offering"
    },
    {
        name: "Chooch Ready Now Application for PPE Detection",
        description: "Chooch, an award winning leader in computer vision, offers the flexibility of custom and Ready Now applications that solve mission critical use cases. The Chooch Ready Now Application for PPE Detection, analyzes streaming video to determine if employees are wearing hard hats, high visibility vests, safety goggles.",
        image: "img341.png",
        link: "",
        anchor: "Chooch Intelligence Technologies Co.",
        type: "Offering"
    },
]

// solution

let solution_data = [
    {
        name: "Juniper RAN Intelligent Controller (RIC)",
        description: "The Juniper RAN Intelligent Controller (RIC) brings intelligence, agility, and programmability to the radio access network (RAN). It supports third-party applications that can improve service experience, reduce infrastructure and operational costs, and deliver new business models. The Juniper RIC platform is based on a cloud-native",
        image: "img342  .png",
        link: "",
        anchor: "Marconi Wireless",
        type: "Offering"
    },
    {
        name: "Acromove Private 5G",
        description: "Acromove Private 5G Network In-a-Box, addresses crucial challenges faced by the broadcast industry when using traditional wireless technologies and public 5G networks for live event broadcasting. Traditionally, broadcast relied on point-to-point COFDM digital technologies, which lacked the flexibility of cellular networks, resulting in limited",
        image: "img343.png",
        link: "",
        anchor: "Acromove Inc",
        type: "Offering"
    },
    {
        name: '"BxBFFT" Fast Fourier Transform for FPGAs',
        description: 'The "BxBFFT" Fast Fourier Transform is a hardware FFT for FPGAs or ASICs. It has features not supported by the Altera® Parallel FFT or other FFTs, including Real FFTs and Non-Power-of-2 FFTs. It supports larger FFT sizes and higher levels of parallelism at higher clock rates than other FFTs, making it uniquely capable of supporting.',
        image: "img344.png",
        link: "",
        anchor: "Bit by Bit Signal Processing LLC",
        type: "Offering"
    },
    {
        name: "Pathr.ai Spatial Intelligence",
        description: "Pathr.ai delivers a retail Spatial Intelligence solution that captures customer and staff movement leveraging existing cameras and data sources. As online retailers have unprecedented visibility into their shopper behavior, brick-and-mortar retailers are at a disadvantage when it comes to acquiring in-store insights surrounding their customer behavior.",
        image: "img345.png",
        link: "",
        anchor: "Pathr.ai",
        type: "Offering"
    },
    {
        name: "TensorGo Hyperspace Platform",
        description: "1. Description The TensorGo Hyperspace Platform is a highly secure, comprehensive AI solution, designed to streamline AI adoption for enterprises. It provides a modular, scalable, and flexible infrastructure for deploying, managing, and optimizing AI models across various environments, including cloud, on-premises.",
        image: "img346.png",
        link: "",
        anchor: "TensorGo Software Private Ltd",
        type: "Offering"
    },
    {
        name: "An AI Smart Vision Solution for Factory Worker Safety [7-18-2023 1:50 PM]",
        description: "OSHA reported that in 2021, an average of 14 fatal occupational injuries occurred each day. Despite the prevalence of slip hazards, dangerous vehicles, and limited human supervision, factories have few tools to manage safety. In response, Aotu and Intel® created an intelligent video solution.",
        image: "img347.png",
        link: "",
        anchor: "Aotu.ai",
        type: "Offering"
    },
    {
        name: "Ingram Micro Internet of things",
        description: "ngram Micro is helping businesses realize the promise of IoTAs organizations accelerate their adoption of digital technology to gain insights from their data, IoT opportunities become nearly endless while the underpinning technology needed to deliver these solutions continues to evolve. It can be overwhelming.",
        image: "img348.png",
        link: "",
        anchor: "Ingram Micro Inc Canada",
        type: "Offering"
    },
    {
        name: "BenQ RP04 Series Education Interactive Display.",
        description: "BenQ education interactive displays are designed to help teaching, presentation and collaboration. It allows for extended, seamless collaboration, and stimulating innovative ideas and is perfect for fostering collaboration then turning students creativities from abstract to real. RP04 series is powerful in every way.",
        image: "img349.png",
        link: "",
        anchor: "BenQ Corporation",
        type: "Offering"
    },
    {
        name: "RobotHPC™ Robotics HPC Edge Platform",
        description: "The RobotHPC™ robotics HPC edge platform enables high performance, computationally intensive processing in small and low-power form-factors. Examples include multi-thousand image and speech recognition and failure prediction in mobile robots, drones, automatic vehicles, emergency and maintenance vehicles.",
        image: "img350.png",
        link: "",
        anchor: "Signalogic, Inc.",
        type: "Offering"
    },
    {
        name: "AyeFace",
        description: "A biometric payment-enabled SaaS that provides in-store AI agents that captures customers' face as a unique identifier to be used as both loyalty and payment IDs. This automation streamlines the order & pay journey without the need for a third-party device (scanner/card terminal/mobile phone), while allowing AI agents to recognize the encrypted faces.",
        image: "img351.png",
        link: "",
        anchor: " Aye",
        type: "Offering"
    }, {
        name: "Quantization of ML-Models and Performance-Boost in Pre-Processing",
        description: "Real-time and streaming applications are becoming increasingly popular due to their enormous, cross-domain application potential for generating company-wide added value. Increasing core requirements are primarily defined by the pursuit of ever lower latencies and computing times.",
        image: "img352.png",
        link: "",
        anchor: "scieneers GmbH",
        type: "Offering"
    },
    {
        name: "Noname Security Confidential Computing on GCP",
        description: "Leverage the Intel® Trust Authority to attest that the most recent innovations from Intel® are properly configured on GCP instances with Intel® SGX processors for container-level Anjuna seaglass enclaves. Remote Attestation adds the ability to verify that the application.",
        image: "img353.png",
        link: "",
        anchor: "Noname Security",
        type: "Offering"
    },
]

// intel network builders 

let intel_network_builder_data = [
    {
        name: 'Hewlett Packard Enterprise Company',
        text: "Titanium Partner",
        description: "Solutions for HPE",
        image: "img354.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: 'NEXCOM INTERNATIONAL CO., LTD.',
        text: "Titanium Partner",
        description: "NEXCOM, founded in 1992 and headquartered in Taiwan, stands as a distinguished global leader in edge computing and industrial IoT solutions. Demonstrating an unwavering commitment to excellence, NEXCOM provides integrated services encompassing SD-Edge Computing (software-defined edge computing) .",
        image: "img355.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: 'DELL TECHNOLOGIES',
        text: "Titanium Partner",
        description: "Dell original equipment manufacturer (OEM) solutions offer an extensive product portfolio and comprehensive services from Dell to help its customers power their own solutions. Our standards-based technologies are built to order and customized for the specific needs of our customers and their end users. By making use of Dell’s buying.",
        image: "img356.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: 'LANNER ELECTRONICS INC.',
        text: "Titanium Partner",
        description: "Lanner Electronics Inc (TAIEX 6245) is a world leading provider of design, engineering and manufacturing services for advanced network appliances and rugged applied computing platforms for system integrator, service providers and application developers. Founded in 1986, Lanner is an ISO 9001 accredited organization with headquarters in Taipei.",
        image: "img357.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: '新华三技术有限公司(h3c)',
        text: "Titanium Partner",
        description: "紫光旗下新华三集团作为数字化解决方案领导者，致力于成为客户业务创新、数字化转型最可信赖的合作伙伴。新华三拥有计算、存储、网络、5G、安全等全方位的数字化基础设施整体能力，提供云计算、大数据、人工智能、工业互联网、信息安全、智能联接、新安防、边缘计算等在内的一站式数字化解决方案，以及端到端的技术服务。同时，新华三也是HPE ® 服务器、存储和技术服务的中国独家提供商.",
        image: "img358.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: 'HCL Technologies',
        text: "Titanium Partner",
        description: "HCL Technologies is a next-generation global technology company that helps enterprises reimagine their businesses for the digital age. Our technology products and services are built on four decades of innovation, with a world-renowned management philosophy, a strong culture of invention and risk-taking, and a relentless focus on customer relationships.",
        image: "img359.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: 'ADVANTECH CO., LTD.',
        text: "Titanium Partner",
        description: "Founded in 1983, Advantech has more than 5,000 employees worldwide and a global reach with teams in seven geographic regions. Our products are distributed and serviced by an extensive global network of offices and an industry leading eBusiness infrastructure designed to provide fast and responsive service that benefits customers.",
        image: "img360.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: 'WIND RIVER SYSTEMS',
        text: "Gold Partner",
        description: "The era of software-defined everything is pushing the pace of innovation and transforming market segments ranging from aerospace to industrial, defense to medical, and networking to automotive. A global leader in delivering software for intelligent connected systems, Wind River offers a comprehensive, edge-to-cloud software portfolio designed to address the challenges.",
        image: "img361.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: 'QUANTA COMPUTER INC.',
        text: "Titanium Partner",
        description: "Quanta Computer Incorporated (TWSE: 2382) is a Taiwan-based manufacturer of notebook computers and other electronic hardware. It is the largest manufacturer of notebook computers in the world. Its customers include Apple Inc., Compaq, Dell, Gateway, Hewlett-Packard, Alienware, Amazon.com, Casper, Cisco, Fujitsu, Gericom, Lenovo, LG, Maxdata.",
        image: "img362.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: 'SUPER MICRO COMPUTER, INC.',
        text: "Titanium Partner",
        description: "Supermicro®, a global leader in high-performance, high-efficiency server technology and innovation is a premier provider of end-to-end green computing solutions and integration/support services for Data Center, Cloud Computing, Enterprise IT, Hadoop/Big Data, HPC and Embedded Systems worldwide.",
        image: "img363.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: 'CISCO SYSTEMS',
        text: "Titanium Partner",
        description: "Cisco is the worldwide leader in IT that helps companies seize the opportunities of tomorrow by proving that amazing things can happen when you connect the previously unconnected. At Cisco customers come first and an integral part of our DNA is creating long-lasting customer partnerships and working with them to identify their needs and provide solutions that support their success. ",
        image: "img364.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Gcore Custom Software Development",
        description: "Custom Software Development. Delivered on time, with quality assurance, there is no need to hire developers or invest in infrastructure. After releasing the product, we take over the technical support and continue working on the new features. Reduce your costs and accelerate the development!.",
        image: "img365.png",
        link: "",
        anchor: "Gcore",
        type: "Offering"
    },
]



// network attached storage

let network_attached_storage_data = [
    {
        name: "QNAP Systems, Inc.",
        text: "Titanium Partner",
        description: "QNAP Systems, Inc. is a privately held company founded in 2004 and is dedicated to bringing world class NAS storage, professional NVR video surveillance, and network video players to consumer, small/medium business, and entry level enterprise market segments. QNAP leverages not only hardware design but also a growing core competency in software.",
        image: "img366.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "PROMISE TECHNOLOGY INC.",
        text: "Gold Partner",
        description: "PROMISE Technology Inc. is a recognized global leader in the storage industry and the leading developer of high-performance storage solutions tailor-made for the data center, surveillance, cloud, and rich media markets. Always striving to meet the unique demands of our customers, PROMISE has earned a reputation for developing innovative storage solutions for vertical markets. ",
        image: "img367.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Noon Technology Co.,Ltd",
        text: "Gold Partner",
        description: "Established in 2010, TerraMaster’s focus has been on digital storage products. In line with the evolving technological landscape, TerraMaster has developed a distinctive product line, which includes both direct and network attached storage devices. TerraMaster’s products are designed with home users in mind, as well as small and medium-sized businesse.",
        image: "img368.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Infortrend Technology Inc",
        text: "Gold Partner",
        description: "Since its founding in 1993, Infortrend has been delivering storage technology innovation and performance to customers worldwide with acclaimed quality and flexibility combined with superior value. Based in New Taipei City and trading as Public TPE: 2495, Infortrend stands as one of the few fully integrated technology firms in the world completely.",
        image: "img369.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
]

// iot market ready data

let iot_market_ready_data = [
    {
        name: 'ABILITY ENTERPRISE CO., LTD.',
        text: "Gold Partner",
        description: "With decades of dedication in image processing, Ability has been developing Edge AI computer vision and bringing new values and innovative vision solutions to OEM customers Since its inception, Ability has been the leader in image sensor and optical integration. Leveraging on its solid foundation in high end camera and advanced",
        image: "img464.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Agile & Adaptive Transportation Management",
        description: "Little effort is required is integrate the Edge AI system above with the traffic signal system. A signal control box connected to the internet is installed in each intersection. This allows real-time traffic flow management in the entire traffic system to happen immediately. The key to resolving the challenge is to make a rigid traffic signal control",
        image: "img465.png",
        link: "",
        anchor: "ABILITY ENTERPRISE CO., LTD.",
        type: "Offering"
    },
    {
        name: 'Broox Technologies',
        text: "Gold Partner",
        description: "Maximize retail media & DOOH success: Broox suite™ snhances digital signage with targeted marketing, Personalized experiences, and data driven insights. No-code audience analytics and interactivity platform baked by Intel®: effortlessly connect triggers from many sources as cameras and sensors to trigger analytics and interactive content with any digita.",
        image: "img466.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: 'CISCO SYSTEMS',
        text: "Titanium Partner",
        description: "Cisco is the worldwide leader in IT that helps companies seize the opportunities of tomorrow by proving that amazing things can happen when you connect the previously unconnected. At Cisco customers come first and an integral part of our DNA is creating long-lasting customer partnerships and working with them to identify their needs and provide solutions.",
        image: "img467.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: 'Cloudpick',
        text: "Titanium Partner",
        description: "Cloudpick was founded in 2017, endeavored to provide smart store solutions with AI technology to the world retail industry. Built on computer vision, machine learning and multi-sensor integration technologies, the self-developed patented behavior recognition and product learning algorithm engine  Cloudpick  , is able to accurately identify product information and.",
        image: "img468.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: 'Digital China Limited IoT Aggregator',
        text: "Titanium Partner",
        description: "In 2000, to accommodating the development of the information industry in the era of internet, the original Legend Holdings was reorganized into two divisions, thereby Digital China (神州数码集团) was born. In 2001, Digital China was listed on the main board of the Hong Kong Stock Exchange (Stock Code: 00861.HK).",
        image: "img469.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: 'ForwardX Robotics, Inc.',
        text: "Gold Partner",
        description: "ForwardX Robotics is a global AI and Robotics developer of autonomous robotics. Pioneering vision-guided robotics to help supply chains transform, ForwardX solutions employ world-leading computer vision algorithms to give their technology a true understanding of the dynamic environments seen in warehouses, distribution centers, fulfillment.",
        image: "img470.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Nerve",
        description: "Nerve is cloud-managed edge computing IIoT software platform that enables machine builders to deliver data and offer services to customers from machines installed anywhere in the world. Nerve offers an out-of-the-box experience that allows users to collect, store and analyze machine data, consolidate multiple functions on one device, and remotely manage software.",
        image: "img471.png",
        link: "",
        anchor: "TTTECH INDUSTRIAL",
        type: "Offering"
    },
    {
        name: 'OnLogic Inc.',
        text: "Titanium Partner",
        description: "OnLogic is a global industrial computer manufacturer who designs highly-configurable, solution-focused computers engineered for reliability at the IoT edge. Their systems operate in the world’s harshest environments, empowering customers to solve their most complex computing challenges, no matter their industry. Founded in 2003.",
        image: "img472.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: 'Perch',
        text: "Gold Partner",
        description: "Perch is the leader in interactive physical and digital retail displays that can detect what products customers are touching, picking up or putting down and respond with dynamic digital content. Perch has worked with Macy's, Sunglass Hut, Jo Malone, Neiman Marcus, Kate Spade, Lenovo, Petco, Johnson & Johnson, MAC, Bumble & bumble, Story.",
        image: "img473.png",
        link: "",
        anchor: "",
        type: "Partner"
    },
    {
        name: "Smart Hygiene Control Solutions",
        description: "Wincomm smart process control under hygiene method solutions is under full IP66/67/69K requirement to optimize computing power with various connectivity at Process Control Solutions , such as anti-water, anti-dust, anti-corrosion, anti-oxidation and so on, to keep manufacturing, quality assurance and package tracking suit for food.",
        image: "img474.png",
        link: "",
        anchor: "WINCOMM CORPORATION",
        type: "Offering"
    },
    {
        name: 'TELELOGOS',
        text: "Gold Partner",
        description: "Telelogos - a leader in software & digital transformation - creates solutions to improve onsite Customer and Employee Experience (CX & EX).Digital signage, room booking, flex office, device management, internal communication : Telelogos solutions are used by the most demanding corporations across multiple industries to make information visible in real time at physical places: shopfloors, warehouses, offices, shops, airports. Over 2,000 customers in 50+ countries have already chosen Telelogos. ",
        image: "img475.png",
        link: "",
        anchor: "",
        type: "Partner"
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
        edge_accelerator = false;
        cloudetv = false;
        showcasesearch = false;
    } else if (window.location.pathname.includes('d_offerning-service.html')) {
        originalRecords = offering_service_data;
        pageId = 'VK_card_parent2';
        isFPGAServicePage = false;
        edge_accelerator = false;
        cloudetv = false;
        showcasesearch = false;
    } else if (window.location.pathname.includes('d_offerning-software.html')) {
        originalRecords = offering_software_data;
        pageId = 'VK_card_parent3';
        isFPGAServicePage = false;
        edge_accelerator = false;
        cloudetv = false;
        showcasesearch = false;
    } else if (window.location.pathname.includes('d_offerning-solution.html')) {
        originalRecords = offering_solution_data;
        pageId = 'VK_card_parent4';
        isFPGAServicePage = false;
        edge_accelerator = false;
        cloudetv = false;
        showcasesearch = false;
    } else if (window.location.pathname.includes('d_offerning-system.html')) {
        originalRecords = offering_solution_data;
        isFPGAServicePage = false;
        pageId = 'VK_card_parent5';
        edge_accelerator = false;
        cloudetv = false;
    } else if (window.location.pathname.includes('d_fpga-service.html')) {
        originalRecords = partner_servie_data;
        pageId = 'VK_card_parent6';
        isFPGAServicePage = true;
        edge_accelerator = false;
        cloudetv = false;
        showcasesearch = false;
    } else if (window.location.pathname.includes('d_partner-manufacturer.html')) {
        originalRecords = partner_manufacturer_data;
        pageId = 'VK_card_parent7';
        isFPGAServicePage = true;
        edge_accelerator = false;
        cloudetv = false;
        showcasesearch = false;
    } else if (window.location.pathname.includes('d_partner-provider.html')) {
        originalRecords = partner_provider_data;
        pageId = 'VK_card_parent8';
        isFPGAServicePage = true;
        edge_accelerator = false;
        cloudetv = false;
        showcasesearch = false;
    } else if (window.location.pathname.includes('d_featured-edge-accelerator.html')) {
        originalRecords = feature_edge_acceleraror;
        pageId = 'VK_card_parent9';
        isFPGAServicePage = false;
        edge_accelerator = true
        cloudetv = false;
        showcasesearch = false;
    } else if (window.location.pathname.includes('d_featured-networking-accelerator.html')) {
        originalRecords = feature_network_acceleraror;
        pageId = 'VK_card_parent10';
        isFPGAServicePage = false;
        edge_accelerator = true
        cloudetv = false;
        showcasesearch = false;
    } else if (window.location.pathname.includes('d_featured-ai.html')) {
        originalRecords = feature_ai;
        pageId = 'VK_card_parent11';
        isFPGAServicePage = false;
        edge_accelerator = false
        cloudetv = false;
        showcasesearch = false;
    } else if (window.location.pathname.includes('d_designed-ai.html')) {
        originalRecords = design_ai;
        pageId = 'VK_card_parent12';
        isFPGAServicePage = false;
        edge_accelerator = false;
        cloudetv = false;
        showcasesearch = false;
    } else if (window.location.pathname.includes('d_couldtv.html')) {
        originalRecords = cloud_episode;
        pageId = 'VK_card_parent13';
        isFPGAServicePage = false;
        edge_accelerator = false
        cloudetv = true;
        showcasesearch = false;
    } else if (window.location.pathname.includes('d_showcase-search.html')) {
        originalRecords = showcase_search_data;
        pageId = 'VK_card_parent14';
        isFPGAServicePage = false;
        edge_accelerator = false;
        cloudetv = false;
        showcasesearch = true;
    } else if (window.location.pathname.includes('d_iot-and-embedded.html')) {
        originalRecords = internet_thing_embedded_data;
        pageId = 'VK_card_parent15';
        isFPGAServicePage = true;
        edge_accelerator = false
        cloudetv = false;
        showcasesearch = false;
    } else if (window.location.pathname.includes('d_fpga-featured.html')) {
        originalRecords = fgpa_feature_data;
        pageId = 'VK_card_parent16';
        isFPGAServicePage = false;
        edge_accelerator = false
        cloudetv = false;
        showcasesearch = false;
    }
    else if (window.location.pathname.includes('d_5th-gen-xeon.html')) {
        originalRecords = gen_xeon_data;
        pageId = 'VK_card_parent17';
        isFPGAServicePage = false;
        edge_accelerator = false
        cloudetv = false;
        showcasesearch = false;
    } else if (window.location.pathname.includes('d_built-for-the-edge.html')) {
        originalRecords = built_edge_data;
        pageId = 'VK_card_parent18';
        isFPGAServicePage = false;
        edge_accelerator = false
        cloudetv = false;
        showcasesearch = false;
    } else if (window.location.pathname.includes('d_5g-private-network.html')) {
        originalRecords = private_network_data;
        pageId = 'VK_card_parent19';
        isFPGAServicePage = false;
        edge_accelerator = false
        cloudetv = false;
        showcasesearch = false;
    } else if (window.location.pathname.includes('d_ai-retail.html')) {
        originalRecords = ai_retails_data;
        pageId = 'VK_card_parent20';
        isFPGAServicePage = true;
        edge_accelerator = false
        cloudetv = false;
        showcasesearch = false;
    } else if (window.location.pathname.includes('d_vpro.html')) {
        originalRecords = vipro_data;
        pageId = 'VK_card_parent21';
        isFPGAServicePage = false;
        edge_accelerator = false;
        cloudetv = false;
        showcasesearch = true;
    } else if (window.location.pathname.includes('d_accelerated-by-intel.html')) {
        originalRecords = accelerated_by_intel_data;
        pageId = 'VK_card_parent22';
        isFPGAServicePage = false;
        edge_accelerator = false;
        cloudetv = false;
        showcasesearch = true;
    } else if (window.location.pathname.includes('d_solution.html')) {
        originalRecords = solution_data;
        pageId = 'VK_card_parent23';
        isFPGAServicePage = false;
        edge_accelerator = false;
        cloudetv = false;
        showcasesearch = false;
    }
    else if (window.location.pathname.includes('d_intel-network-builders.html')) {
        originalRecords = intel_network_builder_data;
        pageId = 'VK_card_parent24';
        isFPGAServicePage = false;
        edge_accelerator = false;
        cloudetv = false;
        showcasesearch = true;
    } else if (window.location.pathname.includes('d_network-attached-storage.html')) {
        originalRecords = network_attached_storage_data;
        pageId = 'VK_card_parent25';
        isFPGAServicePage = true;
        edge_accelerator = false
        cloudetv = false;
        showcasesearch = false;
    } else if (window.location.pathname.includes('d_iot-market-ready.html')) {
        originalRecords = iot_market_ready_data;
        pageId = 'VK_card_parent26';
        isFPGAServicePage = false;
        edge_accelerator = false;
        cloudetv = false;
        showcasesearch = true;
    } else {
        console.error('Unknown page');
        return;
    }

    currentRecords = [...originalRecords];

    function Pagination(page, record) {
        if (record.length !== 0) {
            if (document.getElementById('VK_curent_page')) {
                document.getElementById('VK_curent_page').innerHTML = page;
                let limit = 8;
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
                                <div class="d_offer">${result[i].type}</div>
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
                    } else if (edge_accelerator) {
                        VK_card_map.innerHTML += `
                        <div class="col-xxl-3 VK_result_card col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-3">
                            <div class="VK_card_parent bg-white h-100">
                                <div class="d_offer">${result[i].type}</div>
                                <div class="VK_card_img_box d-flex justify-content-center overflow-hidden">
                                    <img src="/img/darshan_image/${result[i].image}" alt=""
                                        class="h-100 object-fit-contain">
                                </div>
                                <hr class="m-0">
                                <div class="VK_card_details px-3 pb-3 mt-3">
                                    <div class="VK_card_Title">
                                        <a href="" class="text-decoration-none fw-normal">${result[i].name}</a>
                                    </div>
                                    <div class="d_type"><span>${result[i].text}</span></div>
                                    <div class="VK_card_description py-1">
                                        <span class="mt-2 d-block">${result[i].description}</span>
                                    </div>
                                </div>
                            </div>
                        </div>`
                    } else if (cloudetv) {
                        VK_card_map.innerHTML += `
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="d_box h-100">
                                <div class="d_img">
                                    <img src="/img/darshan_image/${result[i].image}" alt="">
                                </div>
                                <div class="d_content">
                                    <h3><a href="">${result[i].name}</a></h3>
                                </div>
                                <div class="d_pargraph">
                                    <p>${result[i].desc}</p>
                                </div>
                        </div>
                    </div>`
                    } else if (showcasesearch) {
                        VK_card_map.innerHTML += `
                        ${result[i].type == "Offering" ? `
                            <div class="col-xxl-3 VK_result_card col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-3">
                            <div class="VK_card_parent bg-white h-100">
                                <div class="d_offer">${result[i].type}</div>
                                <div class="VK_card_img_box d-flex justify-content-center overflow-hidden">
                                    <img src="/img/darshan_image/${result[i].image}" alt=""
                                        class="h-100 object-fit-contain">
                                </div>
                                <hr class="m-0">
                                <div class="VK_card_details px-3 pb-3 mt-3">
                                    <div class="VK_card_Title">
                                        <a href="" class="text-decoration-none fw-normal">${result[i].name}</a>
                                    </div>
                                    ${result[i].text ? `<div class="d_type"><span>${result[i].text}</span></div>` : ""}
                                    <div class="VK_card_description py-1">
                                        <span class="mt-2 d-block">${result[i].description}${result[i].anchor ? `<br>by <a>${result[i].anchor}</a>` : ""}</span>
                                    </div>
                                </div>
                            </div>
                        </div>` : `<div class="col-xxl-3 VK_result_card col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-3">
                            <div class="VK_card_parent bg-white h-100 d-flex flex-column">
                                <div class="d_offer">${result[i].type}</div>
                                <div class="VK_card_img_box d-flex justify-content-center overflow-hidden">
                                    <img src="/img/darshan_image/${result[i].image}" alt=""
                                        class="h-100 object-fit-contain">
                                </div>
                                <hr class="m-0">
                                <div class="VK_card_details px-3 pb-3 mt-3 d-flex align-items-stretch h-100 flex-column">
                                    <div class="VK_card_Title">
                                        <a href="" class="text-decoration-none fw-normal">${result[i].name}</a>
                                    </div>
                                    ${result[i].text ? `<div class="d_type"><span>${result[i].text}</span></div>` : ""}
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
                        </div>`
                            }`
                    } else {
                        VK_card_map.innerHTML += `
                        <div class="col-xxl-3 VK_result_card col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-3">
                            <div class="VK_card_parent bg-white h-100">
                                <div class="d_offer">${result[i].type}</div>
                                <div class="VK_card_img_box d-flex justify-content-center overflow-hidden">
                                    <img src="/img/darshan_image/${result[i].image}" alt=""
                                        class="h-100 object-fit-contain">
                                </div>
                                <hr class="m-0">
                                <div class="VK_card_details px-3 pb-3 mt-3">
                                    <div class="VK_card_Title">
                                        <a href="" class="text-decoration-none fw-normal">${result[i].name}</a>
                                    </div>
                                    ${result[i].text ? `<div class="d_type"><span>${result[i].text}</span></div>` : ""}
                                    <div class="VK_card_description py-1">
                                        <span class="mt-2 d-block">${result[i].description}${result[i].anchor ? `<br>by <a>${result[i].anchor}</a>` : ""}</span>
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
        const searchInput = document.getElementById('VK_software_catalog_search_bar').value.toLowerCase();

        // Filter records based on search input
        if (searchInput.length > 2) {
            currentRecords = originalRecords.filter(item =>
                item.name.toLowerCase().includes(searchInput) ||
                (item.description && item.description.toLowerCase().includes(searchInput))
            );
        } else if (searchInput.length === 0) {
            currentRecords = [...originalRecords];
        }

        // Update the pagination and result count
        Pagination(1, currentRecords);
        updateSearchResultCount();
    }

    function updateSearchResultCount() {
        const resultCountElement = document.getElementById('VK_search_result_span');
        if (resultCountElement) {
            resultCountElement.innerHTML = `${currentRecords.length} Results`;
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


// accelerators page

let D_frequently = document.getElementById('D_frequently')

const frequently = [
    {
        id: 1,
        title: "What are Accelerators, and how are they different than the Member, Gold, and Titanium Tiers of Intel® Partner Alliance?",
        desc: "Intel® Partner Alliance Accelerator Initiatives are a set of additive financial & non-financial benefits targeted to drive specific business outcomes tied to strategic priorities. Accelerator benefits are incremental to the Intel® Partner Alliance program foundational benefits delivered to partners based on their respective tier (Member, Gold, Titanium).",
        link: "",
        anchortxt: ""
    },
    {
        id: 2,
        title: "How do accelerators benefit end customers?",
        desc: "Accelerators empower Intel® technology provider partners with additional support and expertise when designing and marketing their solutions. As a result, end customers benefit from faster access to newer solutions and from higher-quality solutions driven by a deeper understanding of their needs.",
        link: "",
        anchortxt: ""
    },
    {
        id: 3,
        title: "Who can participate in accelerator initiatives?",
        desc: "Accelerator initiatives are available to existing Intel® Partner Alliance members who meet qualification criteria. The Intel® Partner Alliance team determines your eligibility based on your company’s registration information.",
        desc1: "To learn more about accelerator initiatives you qualify for, visit the Manage Benefits section of your existing Intel® Partner Alliance account or talk with your account manager.",
        link: "",
        anchortxt: ""
    },
    {
        id: 4,
        title: "What is the status of Network Builders?",
        desc: "Network Builders will continue to exist and is partnering with Intel® Partner Alliance to integrate network partners. From now on, Intel Network Builders partners need to join the Partner Alliance and select the Network Community to be a part of Intel Network Builders.",
        desc1: "A broad selection of technical training, enablement, and partner solutions can be found at networkbuilders.intel.com, which will complement the new Networking Activation Zones within the Intel® Partner Alliance.",
        link: "",
        anchortxt: ""
    },
    {
        id: 4,
        title: "Where can I find Activation Zones?",
        desc: "Activation Zones are available to all Intel® Partner Alliance Program members and will be found on the secure Intel® Partner Alliance homepage.",
        link: "",
        anchortxt: ""
    },
]

if (D_frequently) {
    for (let i = 0; i < frequently.length; i++) {
        D_frequently.innerHTML += `<div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne${frequently[i].id}" aria-expanded="true" aria-controls="collapseOne${frequently[i].id}">
                                <a href="">${frequently[i].title}</a>
                            </button>
                        </h2>
                        <div id="collapseOne${frequently[i].id}" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p class="mb-0">${frequently[i].desc}</p>
                                ${frequently[i].desc1 ? `<p>${frequently[i].desc1}</p>` : ""}
                            </div>
                        </div>
                    </div>
                </div>`
    }
}

// cloud communnity page 

let D_say = document.getElementById('D_say')

const says = [
    {
        id: 1,
        title: "“Our relationship with Intel helps us to advise our customers better.”",
        name: "Mo Siddiqi",
        text: "Group Development Director, Computacenter",
        img: "colud5.png",
        link: "",
        anchortxt: ""
    },
    {
        id: 2,
        title: "““We are able to leverage the investment that Intel is making… and then build a complete service or offering on top of that.”",
        name: "Piyush Saxena, Senior VP",
        text: "HCL Technologies",
        img: "colud6.jpg",
        link: "",
        anchortxt: ""
    },
]

if (D_say) {
    for (let i = 0; i < says.length; i++) {
        D_say.innerHTML += `<div class="col-xs-12 col-ms-12 col-sm-12 col-md-6">
                    <div class="d_box h-100">
                        <div class="d-flex">
                            <i class="fa-solid fa-quote-left me-3"></i>
                            <p>${says[i].title}</p>
                        </div>
                        <div class="d_foot">
                            <div class="fw-bold">${says[i].name}</div>
                            <div class="d_txt">${says[i].text}</div>
                            <div class="d_img">
                                <img src="/img/darshan_image/${says[i].img}" alt="">
                            </div>
                        </div>
                    </div>
                </div>`
    }
}



// Submitting a Solution—Application Readiness Guide

let D_pdfvideo = document.getElementById('D_pdfvideo')

const pdfvideo = [
    {
        id: 1,
        title: "Intel® Solutions Marketplace Overview ",
        time: "1:58",
        text: "Connect with Intel partners for powerful collaboration and matchmaking opportunities.",
        img: "pdf1.jpg",
        link: "",
    },
    {
        id: 2,
        title: "Getting the Most Out of Intel® Solutions Marketplace",
        time: "1:23",
        text: "Market your products and solutions to Intel’s vast network. ",
        img: "pdf1.jpg",
        link: "",
    },
    {
        id: 3,
        title: "Intel Employee Service Corps in Puerto Rico",
        time: "3:25",
        text: "To help rebuild Puerto Rico’s schools after a category 5 hurricane, Intel Employee Service Corps reached 15,000 students in multiple schools. ",
        img: "pdf1.jpg",
        link: "",
    },
    {
        id: 4,
        title: "Intel® AI: In Production: CrowdOptic Demo Video",
        time: "6:57",
        text: "This system uses AI and triangulation algorithms at the network edge to analyze and redirect cameras. ",
        img: "pdf1.jpg",
        link: "",
    },
    {
        id: 5,
        title: "Co-Marketing Market Development Funds (MDF) Overview",
        time: "10:10",
        text: "A video providing guidance on how to optimize your IoT Market Development Funds with Intel. ",
        img: "pdf1.jpg",
        link: "",
    },
    {
        id: 6,
        title: "To the Cloud and Back - Video Teaser 1",
        time: "",
        text: "To the Cloud and Back - Video Teaser 1: Cloud vs. On-Prem Consideration. ",
        img: "pdf1.jpg",
        link: "",
    },
]

if (D_pdfvideo) {
    for (let i = 0; i < pdfvideo.length; i++) {
        D_pdfvideo.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_item">
                        <div class="d_img">
                            <a href=""><img src="/img/darshan_image/${pdfvideo[i].img}" alt=""></a>
                        </div>
                        <h3><a href="">${pdfvideo[i].title} <small>(${pdfvideo[i].time})</small> </a></h3>
                        <p>${pdfvideo[i].text}</p>
                    </div>
                </div>`
    }
}

// Submitting a Solution—Application Readiness Guide

let D_pdfmaterial = document.getElementById('D_pdfmaterial')

const pdfmaterial = [
    {
        id: 1,
        title: "Intel® Partner Showcase Help and Support",
        img: "pdf.png",
        link: "",
    },
    {
        id: 2,
        title: "How to Access the Intel® Partner Showcase Partner Directory",
        img: "pdf.png",
        link: "",
    },
    {
        id: 3,
        title: "How to Manage Intel® Partner Showcase Offerings",
        img: "pdf.png",
        link: "",
    },
    {
        id: 4,
        title: "How to Manage an Intel® Partner Showcase Storefront",
        img: "pdf.png",
        link: "",
    },
    {
        id: 5,
        title: "How to Create Intel® Partner Showcase Offerings",
        img: "pdf.png",
        link: "",
    },
    {
        id: 6,
        title: "How to Connect and Collaborate with Marketplace Partners",
        img: "pdf.png",
        link: "",
    },
    {
        id: 7,
        title: "Adding Dimension to Data Analytics through Immersive Visualization",
        img: "pdf.png",
        link: "",
    },
    {
        id: 8,
        title: "Practical VR: Immersive Arena Experience ADDS a Human Element",
        img: "pdf.png",
        link: "",
    },
    {
        id: 9,
        title: "James Jaussi",
        img: "pdf.png",
        link: "",
    },
    {
        id: 10,
        title: "Mahesh Ketkar ",
        img: "pdf.png",
        link: "",
    },
    {
        id: 11,
        title: "Hosein Nikopour ",
        img: "pdf.png",
        link: "",
    },
    {
        id: 12,
        title: "Richard Chow ",
        img: "pdf.png",
        link: "",
    },

]

if (D_pdfmaterial) {
    for (let i = 0; i < pdfmaterial.length; i++) {
        D_pdfmaterial.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_box">
                        <div class="d-flex">
                            <div class="d_img me-1">
                                <img src="/img/darshan_image/${pdfmaterial[i].img}"  alt="">
                            </div>
                            <h4><a href="">${pdfmaterial[i].title}</a></h4>
                        </div>
                    </div>
                </div>`
    }
}

// Cloud Tools

let D_cot = document.getElementById('D_cot')

const cots = [
    {
        id: 1,
        title: "Intel® System Health Inspector",
        text: "Quickly and easily capture system health, hardware configuration, and software profile via static and dynamic analysis.",
        link: "",
    },
    {
        id: 2,
        title: "gProfiler",
        text: "A system-wide profiler combining multiple sampling profilers to produce unified visualization of what your CPU is spending time on.",
        link: "",
    },
    {
        id: 3,
        title: "Intel® VTune™ Profiler",
        text: "Find and fix performance bottlenecks quickly and realize all the value of your hardware.",
        link: "",
    },
    {
        id: 4,
        title: "Intel® Cloud Optimization Modules",
        text: "Build and deploy Intel®-optimized solutions that accelerate developer velocity on leading cloud providers, including Amazon Web Services* (AWS), Microsoft Azure*, and Google Cloud Platform* service.",
        link: "",
    },
    {
        id: 5,
        title: "Intel® Cloud Optimizer by Densify*",
        text: "Reduce costs and improve performance on existing infrastructure by analyzing a range of cloud workloads. Obtain recommendations for optimization tuning or platform and service combinations offered by the cloud service provider (CSP) to maximize your cloud investment.",
        link: "",
    },
    {
        id: 6,
        title: "Intel® Developer Cloud",
        text: "A no-cost integrated development environment (IDE) for Intel® architectures. Sign up to get access to Intel-optimized frameworks, tools, and libraries that you can use to build low-code or no-code platforms.",
        link: "",
    },
    {
        id: 7,
        title: "Intel® Optimization Hub",
        text: "A curated, easy-to-use repository across use cases and workloads providing recommendations for hardware acceleration, software optimization, containers, and more. Use benchmarks and documentation to get started faster.",
        link: "",
    },
    {
        id: 8,
        title: "Intel® Performance Hub",
        text: "This software-as-a-service platform includes Intel System Health Inspector (checks the health of platforms), Intel® PerfSpect (profiles workload performance), Intel® Smart Tuning (tunes workloads based on user-defined parameters), and more to come.",
        link: "",
    },
    {
        id: 9,
        title: "Intel® Granulate™ Software",
        text: "Optimize production workloads using autonomous, continuous optimization using resource usage patterns and data flow to adapt kernel-level and runtime-level resource management. No code changes required.",
        link: "",
    },
    {
        id: 10,
        title: "Cnvrg.io",
        text: "Automate and scale AI faster with ready-to-use open source machine learning pipelines that can run on any infrastructure. Use your entire AI ecosystem from one launch pad.",
        link: "",
    },
    {
        id: 11,
        title: "Dr. Migrate",
        text: "This automated approach to cloud migrations driven by machine learning learns how your applications interconnect and identifies which applications to migrate first and which out-of-date apps you should remove.",
        link: "",
    },
    {
        id: 12,
        title: "Intel® Distribution of OpenVINO™ Toolkit",
        text: "Deploy high-performance deep learning inference with ease.",
        link: "",
    },
    {
        id: 13,
        title: "Intel® oneAPI Base Toolkit",
        text: "Develop performant, data-centric applications across Intel® CPUs, GPUs, and FPGAs with this foundational toolset.",
        link: "",
    },
    {
        id: 14,
        title: "Intel® HPC Toolkit",
        text: "Build, analyze, and scale applications across shared- and distributed-memory computing systems.",
        link: "",
    },
    {
        id: 15,
        title: "AI Tools",
        text: "Accelerate end-to-end data science and machine learning pipelines using Python* tools and frameworks.",
        link: "",
    },
]

if (D_cot) {
    for (let i = 0; i < cots.length; i++) {
        D_cot.innerHTML += `<div class="col-xs-12 col-sm-6 col-lg-4">
                    <div class="d_box h-100">
                        <div class="d_subline">
                            <a href="">${cots[i].title}</a>
                        </div>
                        <p>${cots[i].text}</p>
                    </div>
                </div>`
    }
}

// Open Source & Cloud Software Optimized for Intel

let D_cot1 = document.getElementById('D_cot1')

const cots1 = [
    {
        id: 1,
        title: "Frameworks",
        text: "Train, architect, and validate deep neural networks.",
        link: "",
    },
    {
        id: 2,
        title: "Containers",
        text: "Find the best container for your cloud development needs.",
        link: "",
    },
    {
        id: 3,
        title: "Cloud Optimization Modules",
        text: "Find AI solutions optimized by Intel on Amazon Web Services* (AWS), Microsoft Azure*, and Google Cloud Platform* service.",
        link: "",
    },
]

if (D_cot1) {
    for (let i = 0; i < cots1.length; i++) {
        D_cot1.innerHTML += `<div class="col-xs-12 col-sm-6 col-lg-4">
                    <div class="d_box h-100">
                        <div class="d_subline">
                            <a href="">${cots1[i].title}</a>
                        </div>
                        <p>${cots1[i].text}</p>
                    </div>
                </div>`
    }
}


// Open Source Projects

let D_osp = document.getElementById('D_osp')

const osp = [
    {
        id: 1,
        title: "Multus CNI",
        text: "Intel contributed the Multus Container Network Interface (CNI) device plugin. This plugin that can be used to create multiple network interfaces for pods in Kubernetes.",
        link: "",
    },
    {
        id: 2,
        title: "Network Resources Injector is a Kubernetes Dynamic",
        text: "Network Resources Injector is a Kubernetes Dynamic Admission Controller app that provides functionality of patching Kubernetes pod specifications with requests and limits of custom network resources.",
        link: "",
    },
    {
        id: 3,
        title: "Open Data Center Diagnostic Project",
        text: "A framework for server fleet management that enables developers to set up environments, run tests, generate test data, log results, and isolate faults.",
        link: "",
    },
    {
        id: 4,
        title: "CPU Management - CPU Pinning and Isolation in Kubernetes",
        text: "In Kubernetes* (as of v1.18), CPU and Memory are the only first class resources managed by Kubernetes with the native CPU manager.",
        link: "",
    },
    {
        id: 5,
        title: "Intel® QAT Device Plugin",
        text: "Accelerate compute-intensive workloads for security, encryption, authentication and compression with Intel® QuickAssist Technology (Intel® QAT), orchestrated by Kubernetes.",
        link: "",
    },
    {
        id: 6,
        title: "Persistent Memory (PMEM) CSI",
        text: "Intel PMEM-CSI is a CSI storage driver for container orchestrators like Kubernetes. It makes local persistent memory (PMEM) available as a filesystem volume to container applications.",
        link: "",
    },
    {
        id: 7,
        title: "Intel® FPGA Device Plugin",
        text: "In the past, using FPGAs has required specialist programming skills, including a good understanding of how the hardware works, to configure each accelerator.",
        link: "",
    },
    {
        id: 8,
        title: "Kata Containers",
        text: "Kata Containers is a novel implementation of a lightweight virtual machine that seamlessly integrates within the container ecosystem. Kata Containers are as light and fast as containers and integrate.",
        link: "",
    },
    {
        id: 9,
        title: "Bond CNI",
        text: "Bonding provides a method for aggregating multiple network interfaces into a single logical interface. According to the 802.3ad specification, Linux Bonding drivers provides various",
        link: "",
    },
    {
        id: 10,
        title: "Telemetry Aware Scheduling (TAS) makes telemetry data available to...",
        text: "Telemetry Aware Scheduling (TAS) makes telemetry data available to scheduling and descheduling decisions in Kubernetes. Through a user defined policy, TAS enables rule based decisions on pod placement",
        link: "",
    },
    {
        id: 11,
        title: "Intel® GPU Device Plugin",
        text: "The GPU device plugin for Kubernetes supports Intel GVT-d device passthrough and acceleration, supporting GPUs of the following hardware families: Integrated GPUs within Intel Core processors Integrat",
        link: "",
    },
    {
        id: 12,
        title: "SR-IOV Network Device Plugin",
        text: "Kubernetes is typically used to run workloads of production web applications at massive scale. While NFV control plane functions are similar to the usual Kubernetes workloads, data plane functions dif",
        link: "",
    },
    {
        id: 13,
        title: "Device Plugins Operator",
        text: "This One Operator is a Kubernetes custom controller whose goal is to serve the installation and lifecycle management of Intel device plugins for Kubernetes",
        link: "",
    },
    {
        id: 14,
        title: "SGX Device Plugin",
        text: "Intel® Software Guard Extensions (Intel® SGX) offers hardware-based memory encryption that isolates specific application code and data in memory.",
        link: "",
    },
    {
        id: 15,
        title: "Network Resources Injector",
        text: "Network Resources Injector is a Kubernetes Dynamic Admission Controller app that provides functionality of patching Kubernetes pod specifications with requests and limits of custom network resources.",
        link: "",
    },
    {
        id: 16,
        title: "Intel® VPU Device Plugin",
        text: "Enables power-efficient, cost-effective visual cloud solution for the emerging AI market for inference and media analytics applications at the Edge.  ",
        link: "",
    },
    {
        id: 17,
        title: "User Space CNI",
        text: "Userspace CNI is a Container Network Interface (CNI) plugin designed to implement userspace networking (as opposed to kernel space networking).",
        link: "",
    },
]

if (D_osp) {
    for (let i = 0; i < osp.length; i++) {
        D_osp.innerHTML += `<div class="col-xs-12 col-sm-6 col-lg-3">
                        <div class="d_box1 h-100">
                            <div class="d_subline mb-1">
                                <a href="">${osp[i].title}</a>
                            </div>
                            <p>${osp[i].text}</p>
                        </div>
                    </div>`
    }
}


// nodeware

let D_pdfmaterial1 = document.getElementById('D_pdfmaterial1')

const pdfmaterial1 = [
    {
        id: 1,
        title: "Broox Audience Analytics Suite Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "SILO AI Weather Insights Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Pratexo Studio Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "NodeWeaver Edge Cloud Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Broox Audience Analytics Suite Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Axiomtek AMR Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "LinkingMed Radiotherapy Planning Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "NexCOBOT SCB100 Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Sycai Medical Pancreatic Imaging Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "Vistry Discrn Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "WaitTime Crowd Intelligence Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Pratexo Studio Partner Brief",
        img: "pdf2.png",
        link: "",
    },

]

if (D_pdfmaterial1) {
    for (let i = 0; i < pdfmaterial1.length; i++) {
        D_pdfmaterial1.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_box">
                        <div class="d-flex">
                            <div class="d_img me-1">
                                <img src="/img/darshan_image/${pdfmaterial1[i].img}"  alt="">
                            </div>
                            <h4><a href="">${pdfmaterial1[i].title}</a></h4>
                        </div>
                    </div>
                </div>`
    }
}

// qct

let D_pdfmaterial2 = document.getElementById('D_pdfmaterial2')

const pdfmaterial2 = [
    {
        id: 1,
        title: "NEXCOM 5G uCPE Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Five Reasons to Choose Intel for Your 5G Core Workloads",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Agilex™ FPGA Architecture White Paper",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "What Is SD-WAN? Software-Defined WAN - Intel",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Intel and HCLTech: Get to Innovative Solutions Faster – Intel",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Intel® Ethernet Technology",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Products formerly Whale Cove",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Pratexo Studio Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "NodeWeaver Edge Cloud Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "QCT OmniPOD Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Agilex™ 7 FPGA and SoC FPGA M-Series",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Agilex™ 7 FPGA and SoC FPGA M-Series",
        img: "pdf2.png",
        link: "",
    },

]

if (D_pdfmaterial2) {
    for (let i = 0; i < pdfmaterial2.length; i++) {
        D_pdfmaterial2.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_box">
                        <div class="d-flex">
                            <div class="d_img me-1">
                                <img src="/img/darshan_image/${pdfmaterial2[i].img}"  alt="">
                            </div>
                            <h4><a href="">${pdfmaterial2[i].title}</a></h4>
                        </div>
                    </div>
                </div>`
    }
}


// eos

let D_pdfmaterial3 = document.getElementById('D_pdfmaterial3')

const pdfmaterial3 = [
    {
        id: 1,
        title: "Sycai Medical Pancreatic Imaging Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "NHN Cloud Offers New AI Cloud Service",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Intel® Data Center GPU Max Series Product Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "AI Partners and Solutions: Intel® Partner Alliance - Intel",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "AmyGB.ai VisionERA Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Deci.AI Deep Learning Platform Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "meldCX AI Playground Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Responsible AI Publications",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Meituan Accelerates Vision AI Inference Services",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "Numenta Delivers Powerful Inference Performance",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Anodot Optimizes Anomaly Detection Services",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Intel® AI: In Production | Success Stories",
        img: "pdf2.png",
        link: "",
    },

]

if (D_pdfmaterial3) {
    for (let i = 0; i < pdfmaterial3.length; i++) {
        D_pdfmaterial3.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_box">
                        <div class="d-flex">
                            <div class="d_img me-1">
                                <img src="/img/darshan_image/${pdfmaterial3[i].img}"  alt="">
                            </div>
                            <h4><a href="">${pdfmaterial3[i].title}</a></h4>
                        </div>
                    </div>
                </div>`
    }
}


// qct omnipod

let D_pdfvideo1 = document.getElementById('D_pdfvideo1')

const pdfvideo1 = [
    {
        id: 1,
        title: "NexAIoT Scaling at the Edge Video",
        time: "6:55",
        text: "Delivering user-centric service with smart autonomous mobile robots (AMR). ",
        img: "nodeware2.png",
        link: "",
    },
    {
        id: 2,
        title: "Lanner Scaling at the Edge Video",
        time: "9:12",
        text: "Lanner Scalable EDGE Cloud Platform ",
        img: "nodeware2.png",
        link: "",
    },
    {
        id: 3,
        title: "EOS Partner Chat Video",
        time: "16:19",
        text: "The EOS Linx EV Charging Station connected solution contribute to faster deployment in the market using Intel's reference architectures.  ",
        img: "nodeware2.png",
        link: "",
    },
    {
        id: 4,
        title: "Portwell Ecosystem Partner Video",
        time: "13:14",
        text: "12th Gen Intel® Core™ Processor PICMG 1.3 single host board.",
        img: "nodeware2.png",
        link: "",
    },
    {
        id: 5,
        title: "Advantech Veridify Scaling at the Edge Video",
        time: "10:12",
        text: "Making industrial IoT and smart buildings cyber safe. ",
        img: "nodeware2.png",
        link: "",
    },
    {
        id: 6,
        title: "Wind River Ecosystem Partner Video",
        time: "10:29",
        text: "Helix Virtualization Platform, advancing safety avionics with Intel Xeon D-1700/2700 and 11th Gen Intel Core Processors. ",
        img: "nodeware2.png",
        link: "",
    },
]

if (D_pdfvideo1) {
    for (let i = 0; i < pdfvideo1.length; i++) {
        D_pdfvideo1.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_item">
                        <div class="d_img">
                            <a href=""><img src="/img/darshan_image/${pdfvideo1[i].img}" alt=""></a>
                        </div>
                        <h3><a href="">${pdfvideo1[i].title} <small>(${pdfvideo1[i].time})</small> </a></h3>
                        <p>${pdfvideo1[i].text}</p>
                    </div>
                </div>`
    }
}


let D_pdfmaterial4 = document.getElementById('D_pdfmaterial4')

const pdfmaterial4 = [
    {
        id: 1,
        title: "Pathr.ai Supermarket Operations Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Siena Analytics Insights Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "WaitTime Platform Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "WaitTime Crowd Intelligence Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Viso AI Viso Suite Solution",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Enhancing worker safety and improving productivity for manufacturers...",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "IBM Watson NLU Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Irida Labs Retail Analytics Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "meldCX AI Playground Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "IBM Watson NLU Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Irisity IRIS Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Profet AI AutoML Platform Solution Brief",
        img: "pdf2.png",
        link: "",
    },

]

if (D_pdfmaterial4) {
    for (let i = 0; i < pdfmaterial4.length; i++) {
        D_pdfmaterial4.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_box">
                        <div class="d-flex">
                            <div class="d_img me-1">
                                <img src="/img/darshan_image/${pdfmaterial4[i].img}"  alt="">
                            </div>
                            <h4><a href="">${pdfmaterial4[i].title}</a></h4>
                        </div>
                    </div>
                </div>`
    }
}

// nexcobot

let D_pdfmaterial5 = document.getElementById('D_pdfmaterial5')

const pdfmaterial5 = [
    {
        id: 1,
        title: "GIBots DigiDoc Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Irida Labs Edge Vision AI Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Beseye AI Video Analysis Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "LinkingMed Radiotherapy Planning Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "4tiitoo NUIA Eye Control Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "GDDi Algorithms Defined AIBox Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Satsafeti Intelligent Conveyor Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Netown Babybot Smart Health Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Cathexis CathexisVision Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "SAIMOS Video Analytics Solution Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "LinkingMed Radiotherapy Planning Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Irida Labs PerCV.ai Partner Brief",
        img: "pdf2.png",
        link: "",
    },

]

if (D_pdfmaterial5) {
    for (let i = 0; i < pdfmaterial5.length; i++) {
        D_pdfmaterial5.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_box">
                        <div class="d-flex">
                            <div class="d_img me-1">
                                <img src="/img/darshan_image/${pdfmaterial5[i].img}"  alt="">
                            </div>
                            <h4><a href="">${pdfmaterial5[i].title}</a></h4>
                        </div>
                    </div>
                </div>`
    }
}

// wait time

let D_pdfmaterial6 = document.getElementById('D_pdfmaterial6')

const pdfmaterial6 = [
    {
        id: 1,
        title: "GIBots DigiDoc Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Irida Labs Edge Vision AI Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Beseye AI Video Analysis Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "LinkingMed Radiotherapy Planning Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "4tiitoo NUIA Eye Control Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "GDDi Algorithms Defined AIBox Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Satsafeti Intelligent Conveyor Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Netown Babybot Smart Health Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Cathexis CathexisVision Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "SAIMOS Video Analytics Solution Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "LinkingMed Radiotherapy Planning Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Irida Labs PerCV.ai Partner Brief",
        img: "pdf2.png",
        link: "",
    },

]

if (D_pdfmaterial6) {
    for (let i = 0; i < pdfmaterial6.length; i++) {
        D_pdfmaterial6.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_box">
                        <div class="d-flex">
                            <div class="d_img me-1">
                                <img src="/img/darshan_image/${pdfmaterial6[i].img}"  alt="">
                            </div>
                            <h4><a href="">${pdfmaterial6[i].title}</a></h4>
                        </div>
                    </div>
                </div>`
    }
}

// axiomtek

let D_pdfmaterial7 = document.getElementById('D_pdfmaterial7')

const pdfmaterial7 = [
    {
        id: 1,
        title: "AmyGB.ai VisionERA Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Deci.AI Deep Learning Platform Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Sycai Medical Pancreatic Imaging Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Intel® AI: In Production | Success Stories",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Harnessing Data to Transform the Shopping Experience",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "a2-VCA Traffic Safety Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "DFI and Chunghwa Telecom Labs Deliver Solution to Help Reduce Traffic...",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Netown Babybot Smart Health Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "FFHS University AI Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "Subtle Medical SubtleMR Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "SIL International Language ID Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "iSIZE BitClear Partner Brief",
        img: "pdf2.png",
        link: "",
    },

]

if (D_pdfmaterial7) {
    for (let i = 0; i < pdfmaterial7.length; i++) {
        D_pdfmaterial7.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_box">
                        <div class="d-flex">
                            <div class="d_img me-1">
                                <img src="/img/darshan_image/${pdfmaterial7[i].img}"  alt="">
                            </div>
                            <h4><a href="">${pdfmaterial7[i].title}</a></h4>
                        </div>
                    </div>
                </div>`
    }
}

// manufecture

let D_pdfmaterial8 = document.getElementById('D_pdfmaterial8')

const pdfmaterial8 = [
    {
        id: 1,
        title: "PerCV.ai* AI Software",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Yunji Technology",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Shanghai Cue Co., Ltd.",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "AWASIN",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Aibee Total AI Solutions",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Qualitas Technology",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Awiros",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "XZSTEAM",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Developer Training",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "Subscribe to the Intel® Developer Zone Newsletter",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Megh Computing Video Analytics Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "CVEDIA ITS Edge Solutions Partner Brief",
        img: "pdf2.png",
        link: "",
    },

]

if (D_pdfmaterial8) {
    for (let i = 0; i < pdfmaterial8.length; i++) {
        D_pdfmaterial8.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_box">
                        <div class="d-flex">
                            <div class="d_img me-1">
                                <img src="/img/darshan_image/${pdfmaterial8[i].img}"  alt="">
                            </div>
                            <h4><a href="">${pdfmaterial8[i].title}</a></h4>
                        </div>
                    </div>
                </div>`
    }
}

// healthcare

let D_pdfmaterial9 = document.getElementById('D_pdfmaterial9')

const pdfmaterial9 = [
    {
        id: 1,
        title: "Evalueserve",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Vulcan AI",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Cathexis",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Uzel Information US-M5520*",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "byteLAKE",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "China Mobile Drives Edge-Cloud Collaboration",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Town Talk Foods Boosts Retail Sales",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Cogent Labs",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Mamotech Design",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "Enhance Data Analytics and Machine Learning with oneDAL",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Visage Technologies",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Weibu Information Inc.",
        img: "pdf2.png",
        link: "",
    },

]

if (D_pdfmaterial9) {
    for (let i = 0; i < pdfmaterial9.length; i++) {
        D_pdfmaterial9.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_box">
                        <div class="d-flex">
                            <div class="d_img me-1">
                                <img src="/img/darshan_image/${pdfmaterial9[i].img}"  alt="">
                            </div>
                            <h4><a href="">${pdfmaterial9[i].title}</a></h4>
                        </div>
                    </div>
                </div>`
    }
}

// retail

let D_pdfmaterial10 = document.getElementById('D_pdfmaterial10')

const pdfmaterial10 = [
    {
        id: 1,
        title: "CEMOSoft Delivers Data-Driven Retail from the IoT Edge to the Cloud",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Video Wall on IA Whitepaper",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Taboola: Optimizing Content Recommendation Engine",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Intel® FPGA AI Whitepaper for Edge",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Transform Retail with Retrieval Augmented Generation (RAG)",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "12 New AI Reference Kits (Total of 34)",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Leading Bottling Company Automates Worker Safety",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "QMed Asia Drives Early-Stage Cancer Detection Rate",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Streamlining Development of Edge-Native Video Analytics",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "Mu Sigma Develops HMT System ",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Penang Science Cluster Advances Digital Education",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Samsung Medison Develops Nerve Detection Model",
        img: "pdf2.png",
        link: "",
    },

]

if (D_pdfmaterial10) {
    for (let i = 0; i < pdfmaterial10.length; i++) {
        D_pdfmaterial10.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_box">
                        <div class="d-flex">
                            <div class="d_img me-1">
                                <img src="/img/darshan_image/${pdfmaterial10[i].img}"  alt="">
                            </div>
                            <h4><a href="">${pdfmaterial10[i].title}</a></h4>
                        </div>
                    </div>
                </div>`
    }
}

// smart city

let D_pdfmaterial11 = document.getElementById('D_pdfmaterial11')

const pdfmaterial11 = [
    {
        id: 1,
        title: "Computer Vision and Machine Vision Solutions",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Cathexis",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Evalueserve",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Viso AI Viso Suite Solution",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Uzel Information US-M5520*",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "XZSTEAM",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "byteLAKE",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "ASTERIA Corporation",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Kibernetika Inc.",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "a2 Technology",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Vulcan AI",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Aotu.ai",
        img: "pdf2.png",
        link: "",
    },

]

if (D_pdfmaterial11) {
    for (let i = 0; i < pdfmaterial11.length; i++) {
        D_pdfmaterial11.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_box">
                        <div class="d-flex">
                            <div class="d_img me-1">
                                <img src="/img/darshan_image/${pdfmaterial11[i].img}"  alt="">
                            </div>
                            <h4><a href="">${pdfmaterial11[i].title}</a></h4>
                        </div>
                    </div>
                </div>`
    }
}


// computer vision in cities video

let D_pdfmaterial12 = document.getElementById('D_pdfmaterial12')

const pdfmaterial12 = [
    {
        id: 1,
        title: "Sky Limit Entertainment Empowers XR Theme Parks",
        img: "pdf3.png",
        link: "",
    },
    {
        id: 2,
        title: "Terasic DE10-Nano ",
        img: "pdf4.png",
        link: "",
    },
    {
        id: 3,
        title: "Intel Drives ‘AI Everywhere’ into Automotive Market at CES",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Moor Insights: The New Era of the AI PC",
        img: "pdf5.png",
        link: "",
    },
    {
        id: 5,
        title: "Introducing the Intel® Extension for PyTorch* for GPUs",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Half Extension Rail Kit CYPHALFEXTRAIL Compatible Products | Intel",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Half Extension Rail Kit CYPHALFEXTRAIL - Product Specifications | Intel",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Half Extension Rail Kit CYPHALFEXTRAIL Ordering and Compliance Information | Intel",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Axiomtek AI-Enabled Vision System",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "Axiomtek eBOX671-521-FL PoE Embedded Vision System",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Power Plant Monitoring with EMQ* and Edge Insights for Industrial",
        img: "pdf3.png",
        link: "",
    },
    {
        id: 12,
        title: "Use EMQ* IoT Messaging Platform with Edge Insights for Industrial",
        img: "pdf3.png",
        link: "",
    },

]

if (D_pdfmaterial12) {
    for (let i = 0; i < pdfmaterial12.length; i++) {
        D_pdfmaterial12.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_box">
                        <div class="d-flex">
                            <div class="d_img me-1">
                                <img src="/img/darshan_image/${pdfmaterial12[i].img}"  alt="">
                            </div>
                            <h4><a href="">${pdfmaterial12[i].title}</a></h4>
                        </div>
                    </div>
                </div>`
    }
}

// computer vision in cities video

let D_pdfmaterial13 = document.getElementById('D_pdfmaterial13')

const pdfmaterial13 = [
    {
        id: 1,
        title: "Axiomtek AI-Enabled Vision System",
        img: "pdf3.png",
        link: "",
    },
    {
        id: 2,
        title: "Power Plant Monitoring with EMQ* and Edge Insights for Industrial",
        img: "pdf4.png",
        link: "",
    },
    {
        id: 3,
        title: "Use EMQ* IoT Messaging Platform with Edge Insights for Industrial",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Half Extension Rail Kit CYPHALFEXTRAIL Compatible Products | Intel",
        img: "pdf5.png",
        link: "",
    },
    {
        id: 5,
        title: "Half Extension Rail Kit CYPHALFEXTRAIL - Product Specifications | Intel",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Half Extension Rail Kit CYPHALFEXTRAIL Ordering and Compliance Information | Intel",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Portwell Inc. PCOM-B656VGL",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Intel® RFID Sensor Platform",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "EverFocus Intelligent Transportation",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "meldCX AI Playground Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Cut Downtime & Costs with Fault Detection for Factory Equipment",
        img: "pdf3.png",
        link: "",
    },
    {
        id: 12,
        title: "Uzel Information US-M5520*",
        img: "pdf3.png",
        link: "",
    },

]

if (D_pdfmaterial13) {
    for (let i = 0; i < pdfmaterial13.length; i++) {
        D_pdfmaterial13.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_box">
                        <div class="d-flex">
                            <div class="d_img me-1">
                                <img src="/img/darshan_image/${pdfmaterial13[i].img}"  alt="">
                            </div>
                            <h4><a href="">${pdfmaterial13[i].title}</a></h4>
                        </div>
                    </div>
                </div>`
    }
}

// computer vision in cities video

let D_pdfmaterial14 = document.getElementById('D_pdfmaterial14')

const pdfmaterial14 = [
    {
        id: 1,
        title: "Half Extension Rail Kit CYPHALFEXTRAIL Compatible Products | Intel",
        img: "pdf3.png",
        link: "",
    },
    {
        id: 2,
        title: "Half Extension Rail Kit CYPHALFEXTRAIL - Product Specifications | Intel",
        img: "pdf4.png",
        link: "",
    },
    {
        id: 3,
        title: "Half Extension Rail Kit CYPHALFEXTRAIL Ordering and Compliance Information | Intel",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "meldCX AI Playground Partner Brief",
        img: "pdf5.png",
        link: "",
    },
    {
        id: 5,
        title: "Axiomtek AI-Enabled Vision System",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Axiomtek eBOX671-521-FL PoE Embedded Vision System",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Power Plant Monitoring with EMQ* and Edge Insights for Industrial",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Use EMQ* IoT Messaging Platform with Edge Insights for Industrial",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Deci.AI Deep Learning Platform Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "EyeCloud, Inc.",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Zeblok Edge AI Solution Brief",
        img: "pdf3.png",
        link: "",
    },
    {
        id: 12,
        title: "Video Wall on IA Whitepaper",
        img: "pdf3.png",
        link: "",
    },

]

if (D_pdfmaterial14) {
    for (let i = 0; i < pdfmaterial14.length; i++) {
        D_pdfmaterial14.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_box">
                        <div class="d-flex">
                            <div class="d_img me-1">
                                <img src="/img/darshan_image/${pdfmaterial14[i].img}"  alt="">
                            </div>
                            <h4><a href="">${pdfmaterial14[i].title}</a></h4>
                        </div>
                    </div>
                </div>`
    }
}

// computer vision in cities video

let D_pdfmaterial15 = document.getElementById('D_pdfmaterial15')

const pdfmaterial15 = [
    {
        id: 1,
        title: "Half Extension Rail Kit CYPHALFEXTRAIL Compatible Products | Intel",
        img: "pdf3.png",
        link: "",
    },
    {
        id: 2,
        title: "Half Extension Rail Kit CYPHALFEXTRAIL - Product Specifications | Intel",
        img: "pdf4.png",
        link: "",
    },
    {
        id: 3,
        title: "Half Extension Rail Kit CYPHALFEXTRAIL Ordering and Compliance Information | Intel",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Axiomtek AI-Enabled Vision System",
        img: "pdf5.png",
        link: "",
    },
    {
        id: 5,
        title: "Power Plant Monitoring with EMQ* and Edge Insights for Industrial",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Axiomtek eBOX671-521-FL PoE Embedded Vision System",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Use EMQ* IoT Messaging Platform with Edge Insights for Industrial",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "EyeCloud, Inc.",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Video Wall on IA Whitepaper",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "meldCX AI Playground Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "TinyGO AI 7702*",
        img: "pdf3.png",
        link: "",
    },
    {
        id: 12,
        title: "TinyGO AI 5033*",
        img: "pdf3.png",
        link: "",
    },

]

if (D_pdfmaterial15) {
    for (let i = 0; i < pdfmaterial15.length; i++) {
        D_pdfmaterial15.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_box">
                        <div class="d-flex">
                            <div class="d_img me-1">
                                <img src="/img/darshan_image/${pdfmaterial15[i].img}"  alt="">
                            </div>
                            <h4><a href="">${pdfmaterial15[i].title}</a></h4>
                        </div>
                    </div>
                </div>`
    }
}

// computer vision in cities video

let D_pdfmaterial16 = document.getElementById('D_pdfmaterial16')

const pdfmaterial16 = [
    {
        id: 1,
        title: "Moor Insights: The New Era of the AI PC",
        img: "pdf3.png",
        link: "",
    },
    {
        id: 2,
        title: "Penang Science Cluster Advances Digital Education",
        img: "pdf4.png",
        link: "",
    },
    {
        id: 3,
        title: "Intel® Gaudi® AI Accelerator",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "QMed Asia Drives Early-Stage Cancer Detection Rate",
        img: "pdf5.png",
        link: "",
    },
    {
        id: 5,
        title: "IBM watsonx.data Accelerates GenAI Data Analysis",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "IDC: Considering the Benefits of AI for your PC Refresh",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "PyTorch 2.4 Supports Intel® GPU Acceleration of AI Workloads",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Intel® Gaudi® 3 AI Accelerator: The AI Difference Maker",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Intel Accelerates ‘AI Everywhere’ at Computex 2024 ",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "Video Wall on IA Whitepaper",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Taboola: Optimizing Content Recommendation Engine",
        img: "pdf3.png",
        link: "",
    },
    {
        id: 12,
        title: "Nationwide Building Society Boosts User Experience",
        img: "pdf3.png",
        link: "",
    },

]

if (D_pdfmaterial16) {
    for (let i = 0; i < pdfmaterial16.length; i++) {
        D_pdfmaterial16.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_box">
                        <div class="d-flex">
                            <div class="d_img me-1">
                                <img src="/img/darshan_image/${pdfmaterial16[i].img}"  alt="">
                            </div>
                            <h4><a href="">${pdfmaterial16[i].title}</a></h4>
                        </div>
                    </div>
                </div>`
    }
}

// computer vision in cities video

let D_pdfmaterial17 = document.getElementById('D_pdfmaterial17')

const pdfmaterial17 = [
    {
        id: 1,
        title: "Intel® AI: In Production | Testimonials",
        img: "pdf3.png",
        link: "",
    },
    {
        id: 2,
        title: "AI: In Production Knowledge Library",
        img: "pdf4.png",
        link: "",
    },
    {
        id: 3,
        title: "RIKEN Accelerates Medical and Drug Research",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Sky Limit Entertainment Empowers XR Theme Parks",
        img: "pdf5.png",
        link: "",
    },
    {
        id: 5,
        title: "Seekr Develops Trustworthy AI Screening System",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "AI Deployment Services and Solutions - Intel",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Numenta and Intel Accelerate Inference",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Southern California Edison Modernizes Future Grid",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Intel® AI: In Production | Success Stories ",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "Terasic DE10-Nano ",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "AI Frameworks & Tools",
        img: "pdf3.png",
        link: "",
    },
    {
        id: 12,
        title: "Intel Drives ‘AI Everywhere’ into Automotive Market at CES",
        img: "pdf3.png",
        link: "",
    },

]

if (D_pdfmaterial17) {
    for (let i = 0; i < pdfmaterial17.length; i++) {
        D_pdfmaterial17.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_box">
                        <div class="d-flex">
                            <div class="d_img me-1">
                                <img src="/img/darshan_image/${pdfmaterial17[i].img}"  alt="">
                            </div>
                            <h4><a href="">${pdfmaterial17[i].title}</a></h4>
                        </div>
                    </div>
                </div>`
    }
}

// computer vision in cities video

let D_pdfmaterial18 = document.getElementById('D_pdfmaterial18')

const pdfmaterial18 = [
    {
        id: 1,
        title: "Axiomtek AI-Enabled Vision System",
        img: "pdf3.png",
        link: "",
    },
    {
        id: 2,
        title: "Power Plant Monitoring with EMQ* and Edge Insights for Industrial",
        img: "pdf4.png",
        link: "",
    },
    {
        id: 3,
        title: "Use EMQ* IoT Messaging Platform with Edge Insights for Industrial",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Half Extension Rail Kit CYPHALFEXTRAIL Compatible Products | Intel",
        img: "pdf5.png",
        link: "",
    },
    {
        id: 5,
        title: "Half Extension Rail Kit CYPHALFEXTRAIL - Product Specifications | Intel",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Half Extension Rail Kit CYPHALFEXTRAIL Ordering and Compliance Information | Intel",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Portwell Inc. PCOM-B656VGL",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Intel® RFID Sensor Platform",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "EverFocus Intelligent Transportation",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "meldCX AI Playground Partner Brief ",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Cut Downtime & Costs with Fault Detection for Factory Equipment",
        img: "pdf3.png",
        link: "",
    },
    {
        id: 12,
        title: "Uzel Information US-M5520*",
        img: "pdf3.png",
        link: "",
    },

]

if (D_pdfmaterial18) {
    for (let i = 0; i < pdfmaterial18.length; i++) {
        D_pdfmaterial18.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_box">
                        <div class="d-flex">
                            <div class="d_img me-1">
                                <img src="/img/darshan_image/${pdfmaterial18[i].img}"  alt="">
                            </div>
                            <h4><a href="">${pdfmaterial18[i].title}</a></h4>
                        </div>
                    </div>
                </div>`
    }
}

let D_pdfmaterial19 = document.getElementById('D_pdfmaterial19')

const pdfmaterial19 = [
    {
        id: 1,
        title: "Intel® AI: In Production | Frequently Asked Questions",
        img: "pdf3.png",
        link: "",
    },
    {
        id: 2,
        title: "Intel® AI: In Production | Cities and Transportation",
        img: "pdf4.png",
        link: "",
    },
    {
        id: 3,
        title: "Hunt Electronic Co., Ltd.",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "JWIPC E099*",
        img: "pdf5.png",
        link: "",
    },
    {
        id: 5,
        title: "Evalueserve AiLENZ Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Megh Computing Video Analytics Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Irisity IRIS Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Pathr.ai Supermarket Operations Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Autocanteen Touchless Self-Checkout Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "Quividi Audience Measurement Platform Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Intel-Enabled AI from Sensormatic Solution Brief",
        img: "pdf3.png",
        link: "",
    },
    {
        id: 12,
        title: "Ombori Grid SaaS Solution Brief",
        img: "pdf3.png",
        link: "",
    },

]

if (D_pdfmaterial19) {
    for (let i = 0; i < pdfmaterial19.length; i++) {
        D_pdfmaterial19.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_box">
                        <div class="d-flex">
                            <div class="d_img me-1">
                                <img src="/img/darshan_image/${pdfmaterial19[i].img}"  alt="">
                            </div>
                            <h4><a href="">${pdfmaterial19[i].title}</a></h4>
                        </div>
                    </div>
                </div>`
    }
}

let D_pdfmaterial20 = document.getElementById('D_pdfmaterial20')

const pdfmaterial20 = [
    {
        id: 1,
        title: "Intel-Enabled AI from Sensormatic Solution Brief",
        img: "pdf3.png",
        link: "",
    },
    {
        id: 2,
        title: "Quividi Audience Measurement Platform Solution Brief",
        img: "pdf4.png",
        link: "",
    },
    {
        id: 3,
        title: "Ombori Grid SaaS Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Pathr.ai Supermarket Operations Solution Brief",
        img: "pdf5.png",
        link: "",
    },
    {
        id: 5,
        title: "Vistry INC Discrn Platform Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Intel® AI: In Production | Cities and Transportation",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "SAIMOS Video Analytics Solution Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "ISS SecurOS Labor Safety Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "PM AM Town Talk Case Study",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "iGenius Crystal Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Awiros",
        img: "pdf3.png",
        link: "",
    },
    {
        id: 12,
        title: "XZSTEAM",
        img: "pdf3.png",
        link: "",
    },

]

if (D_pdfmaterial20) {
    for (let i = 0; i < pdfmaterial20.length; i++) {
        D_pdfmaterial20.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_box">
                        <div class="d-flex">
                            <div class="d_img me-1">
                                <img src="/img/darshan_image/${pdfmaterial20[i].img}"  alt="">
                            </div>
                            <h4><a href="">${pdfmaterial20[i].title}</a></h4>
                        </div>
                    </div>
                </div>`
    }
}

// JavaScript

if (document.getElementById('show-more-btn')) {
    document.getElementById('show-more-btn').addEventListener('click', function () {
        if (document.getElementById('my-card')) {
            var myCard = document.getElementById('my-card');
            var icon = document.getElementById('toggle-icon');
            var isHidden = myCard.classList.contains('ds_use-hidden');

            if (isHidden) {
                myCard.classList.remove('ds_use-hidden');
                myCard.classList.add('ds_use-show');
                this.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-up me-1"></i> Show Less';
            } else {
                myCard.classList.remove('ds_use-show');
                myCard.classList.add('ds_use-hidden');
                this.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-down me-1"></i> Show More';
            }
        }
        else {
            var myCard1 = document.getElementById('my-card1');
            var icon = document.getElementById('toggle-icon');
            var isHidden = myCard1.classList.contains('ds_use-hidden');

            if (isHidden) {
                myCard1.classList.remove('ds_use-hidden');
                myCard1.classList.add('ds_use-show');
                this.innerHTML = '<span class="d_circle"><i class="fa-solid fa-minus"></i></span>';
            } else {
                myCard1.classList.remove('ds_use-show');
                myCard1.classList.add('ds_use-hidden');
                this.innerHTML = '<span class="d_circle"><i class="fa-solid fa-plus"></i></span>';
            }
        }
    });
}

if (document.getElementById('show-more-btn1')) {
    document.getElementById('show-more-btn1').addEventListener('click', function () {
        if (document.getElementById('my-card1')) {
            var myCard = document.getElementById('my-card1');
            var icon = document.getElementById('toggle-icon');
            var isHidden = myCard.classList.contains('ds_use-hidden');

            if (isHidden) {
                myCard.classList.remove('ds_use-hidden');
                myCard.classList.add('ds_use-show');
                this.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-up me-1"></i> Show Less';
            } else {
                myCard.classList.remove('ds_use-show');
                myCard.classList.add('ds_use-hidden');
                this.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-down me-1"></i> Show More';
            }
        }
    });
}
if (document.getElementById('show-more-btn2')) {
    document.getElementById('show-more-btn2').addEventListener('click', function () {
        if (document.getElementById('my-card2')) {
            var myCard = document.getElementById('my-card2');
            var icon = document.getElementById('toggle-icon');
            var isHidden = myCard.classList.contains('ds_use-hidden');

            if (isHidden) {
                myCard.classList.remove('ds_use-hidden');
                myCard.classList.add('ds_use-show');
                this.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-up me-1"></i> Show Less';
            } else {
                myCard.classList.remove('ds_use-show');
                myCard.classList.add('ds_use-hidden');
                this.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-down me-1"></i> Show More';
            }
        }
    });
}
if (document.getElementById('show-more-btn3')) {
    document.getElementById('show-more-btn3').addEventListener('click', function () {
        if (document.getElementById('my-card3')) {
            var myCard = document.getElementById('my-card3');
            var icon = document.getElementById('toggle-icon');
            var isHidden = myCard.classList.contains('ds_use-hidden');

            if (isHidden) {
                myCard.classList.remove('ds_use-hidden');
                myCard.classList.add('ds_use-show');
                this.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-up me-1"></i> Show Less';
            } else {
                myCard.classList.remove('ds_use-show');
                myCard.classList.add('ds_use-hidden');
                this.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-down me-1"></i> Show More';
            }
        }
    });
}
if (document.getElementById('show-more-btn4')) {
    document.getElementById('show-more-btn4').addEventListener('click', function () {
        if (document.getElementById('my-card4')) {
            var myCard = document.getElementById('my-card4');
            var icon = document.getElementById('toggle-icon');
            var isHidden = myCard.classList.contains('ds_use-hidden');

            if (isHidden) {
                myCard.classList.remove('ds_use-hidden');
                myCard.classList.add('ds_use-show');
                this.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-up me-1"></i> Show Less';
            } else {
                myCard.classList.remove('ds_use-show');
                myCard.classList.add('ds_use-hidden');
                this.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-down me-1"></i> Show More';
            }
        }
    });
}
if (document.getElementById('show-more-btn5')) {
    document.getElementById('show-more-btn5').addEventListener('click', function () {
        if (document.getElementById('my-card5')) {
            var myCard = document.getElementById('my-card5');
            var icon = document.getElementById('toggle-icon');
            var isHidden = myCard.classList.contains('ds_use-hidden');

            if (isHidden) {
                myCard.classList.remove('ds_use-hidden');
                myCard.classList.add('ds_use-show');
                this.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-up me-1"></i> Show Less';
            } else {
                myCard.classList.remove('ds_use-show');
                myCard.classList.add('ds_use-hidden');
                this.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-down me-1"></i> Show More';
            }
        }
    });
}
if (document.getElementById('show-more-btn6')) {
    document.getElementById('show-more-btn6').addEventListener('click', function () {
        if (document.getElementById('my-card6')) {
            var myCard = document.getElementById('my-card6');
            var icon = document.getElementById('toggle-icon');
            var isHidden = myCard.classList.contains('ds_use-hidden');

            if (isHidden) {
                myCard.classList.remove('ds_use-hidden');
                myCard.classList.add('ds_use-show');
                this.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-up me-1"></i> Show Less';
            } else {
                myCard.classList.remove('ds_use-show');
                myCard.classList.add('ds_use-hidden');
                this.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-down me-1"></i> Show More';
            }
        }
    });
}
if (document.getElementById('show-more-btn7')) {
    document.getElementById('show-more-btn7').addEventListener('click', function () {
        if (document.getElementById('my-card7')) {
            var myCard = document.getElementById('my-card7');
            var icon = document.getElementById('toggle-icon');
            var isHidden = myCard.classList.contains('ds_use-hidden');

            if (isHidden) {
                myCard.classList.remove('ds_use-hidden');
                myCard.classList.add('ds_use-show');
                this.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-up me-1"></i> Show Less';
            } else {
                myCard.classList.remove('ds_use-show');
                myCard.classList.add('ds_use-hidden');
                this.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-down me-1"></i> Show More';
            }
        }
    });
}





// ps-accenture-video 

let D_playlist = document.getElementById('D_playlist')

const playlist = [
    {
        id: 1,
        title: "Evolving Cloud Tech to Thrive",
        img: "play2.png",
        desc: "Head of Marketing at Redapt Sarah Jones shows how evolving customers’ cloud technologies can drive business impact.",
        link: "d_ps-redapt-video.html",
    },
    {
        id: 2,
        title: "Create Better Customer Outcomes with Cloud",
        img: "play3.png",
        desc: "Senior Vice President at HCL Technologies Piyush Saxena explains how cloud and AI solutions are creating better customer outcomes.",
        link: "d_ps-hcl-video.html",
    },
    {
        id: 3,
        title: "Empowering Businesses with Machine Learning",
        img: "play4.png",
        desc: "Founder and CEO of Aible Arijit Sengupta shares how machine learning and AI add innovation and value to its customers’ projects.",
        link: "d_ps-aible-video.html",
    },
    {
        id: 4,
        title: "Planning for Agility and Change Across the Cloud",
        img: "play5.png",
        desc: "Director of Project Management at Alluxio Adit Madan illustrates how cloud services are meeting customer needs as they quickly evolve.",
        link: "d_ps-alluxio-video.html",
    },
    {
        id: 5,
        title: "New Services Enabled by Cloud",
        img: "play1.png",
        desc: "Jason Mitchell, Managing Director at Accenture, explains how a cloud-first approach—and a strategic combination of data and AI—enables customers’ success.",
        link: "d_ps-accenture-video.html",
    },
    {
        id: 6,
        title: "Deploying Storage Solutions from Cloud to Edge",
        img: "play6.png",
        desc: "Garima Kapoor, MinIO Co-founder, explains how the evolution of cloud storage technology helps customers achieve their goals.",
        link: "d_ps-minio-video.html",
    },
    {
        id: 7,
        title: "Transforming Enterprises with SAP Cloud",
        img: "play7.png",
        desc: "Eamonn O’Neill, Lemongrass Co-founder and CTO, covers real-world customer examples of cloud transformation, including key factors and successes.",
        link: "d_ps-lemongrass-video.html",
    },
    {
        id: 8,
        title: "Solving Challenges with Hybrid Cloud Solutions",
        img: "play8.png",
        desc: "Mo Siddiqui, Group Development Director at Computacenter, shares how hybrid clouds can be deployed effectively in fast-moving environments.",
        link: "d_ps-computacenter-video.html",
    },
]

if (D_playlist) {
    for (let i = 0; i < playlist.length; i++) {
        D_playlist.innerHTML += `<div class="col-xs-12 col-ms-6 col-md-6 col-lg-3">
                    <div class="d_box">
                        <div class="d_img mb-3">
                            <a href="/d_partner/${playlist[i].link}"><img src="/img/darshan_image/${playlist[i].img}" alt=""></a>
                        </div>
                        <h3><a href="/d_partner/${playlist[i].link}">${playlist[i].title}</a></h3>
                        <p>${playlist[i].desc}</p>
                    </div>
                </div>`
    }
}

// Success story

let D_successpartner = document.getElementById('D_successpartner')

const successpartner = [
    {
        id: 1,
        title: "Nodeweaver",
        img: "ps1.png",
        desc: "NodeWeaver bridges the world of private cloud platforms and hyperconverged infrastructure with a unified cloud fabric that brings all pieces together in building-block style.",
        link: "d_nodeweaver-partner-chat-video.html",
        link1: ""
    },
    {
        id: 2,
        title: "QCT",
        img: "ps2.png",
        desc: "Enterprise 5G ready for smart factory application to accelerate digital transformation.",
        link: "d_qct-partner-chat-video.html",
        link1: ""
    },
    {
        id: 3,
        title: "EOS",
        img: "ps3.png",
        desc: "The EOS Linx EV Charging Station connected solution relies on Intel technology including vPro™ Platform and OpenVINO™ Toolkit, which contribute to faster deployment in the market",
        link: "d_eos-partner-chat-video.html",
        link1: ""
    },
    {
        id: 4,
        title: "CoreAVI",
        img: "ps4.png",
        desc: "CoreAVI has partnered with Intel to deliver integrated Platforms for Safety-Critical Applications (PSCAs) that reduce time to safe deployment, deliver incredible performance, consolidate workflows, and allow for a scalable solution with amazing costs.",
        link: "d_coreavi-partner-chat-video.html",
        link1: ""
    },
    {
        id: 5,
        title: "ThunderSoft",
        img: "ps5.png",
        desc: "ThunderSoft smart building solution supports connection and communication with smart building IoT devices such as sensors, devices and building automation systems.",
        link: "d_thundersoft-partner-chat-video.html",
        link1: ""
    },
    {
        id: 6,
        title: "Extreme Vision",
        img: "",
        desc: "Extreme Vision is committed to develop the first computer vision platform in China. They specialize in exploring artificial intelligence's development and application and providing professional AI algorithm solutions for multiple industries.",
        link: "",
        link1: ""
    },
    {
        id: 7,
        title: "C2RO",
        img: "",
        desc: "Deep technical collaboration between Intel and C2RO has enabled 'Journey-to-Touch Analysis' scalable to thousands of enterprise locations by leveraging highly scalable and cost-effective Intel x86 processor technology and Intel's powerful OpenVINO™ toolkit.",
        link: "",
        link1: ""
    },
    {
        id: 8,
        title: "VSBLTY",
        img: "",
        desc: "VSBLTY technology provides enhanced customer engagement and audience measurement using machine learning and computer vision. Its industry leading VisionCaptor™ and DataCaptor™ software combine motion graphics and interactive brand messaging with cutting-edge computer vision measurement and insights.",
        link: "",
        link1: ""
    },
    {
        id: 9,
        title: "Wistron Medical Technology",
        img: "",
        desc: "Intel® Distribution of OpenVINO™ Toolkit helps simplify the move to digital pathology environment for clinics and research facilities by enabling pathologists to optimize pre-trained models for inferencing on their own computers.",
        link: "",
        link1: ""
    },
    {
        id: 10,
        title: "iOmniscient",
        img: "",
        desc: "Delivering privacy protected comprehensive solutions for end users which solve their key safety and productivity challenges.",
        link: "",
        link1: ""
    },
    {
        id: 11,
        title: "Real-Time Solutions",
        img: "",
        desc: "The introduction of the RTS Hypervisor on the latest Intel platforms facilitates new possibilities for real-time applications ranging from robotics and smart cars to factory automation and utility load management.",
        link: "",
        link1: ""
    },
    {
        id: 12,
        title: "Eigen Innovations",
        img: "",
        desc: "The easy-to-deploy machine vision platform enables machine learning and AI that helps manufacturers solve complex engineering problems.",
        link: "",
        link1: ""
    },
    {
        id: 13,
        title: "meldCX",
        img: "",
        desc: "Measuring how people work, shop, learn, and play in physical spaces without the need for complex development.",
        link: "",
        link1: ""
    },
    {
        id: 14,
        title: "DarwinAI",
        img: "",
        desc: "Helping manufacturers automate their visual quality inspection and provide more consistent product quality.",
        link: "",
        link1: ""
    },

    {
        id: 15,
        title: "Vistry, Inc",
        img: "",
        desc: "Vistry helps restaurants measure and improve s peed, production quality, and guest experience.",
        link: "",
        link1: ""
    },
    {
        id: 16,
        title: "IntelliSite",
        img: "",
        desc: "IntelliSite helps improve the public safety, quality of living, and economic growth of communities.",
        link: "",
        link1: ""
    }, {
        id: 17,
        title: "UdyogYantra Technologies",
        img: "",
        desc: "How UdyogYantra empowers food businesses with real-time monitoring and control of their supply chain and manufacturing operations.",
        link: "",
        link1: ""
    },
    {
        id: 18,
        title: "CamCom",
        img: "",
        desc: "How CamCom helps detect exterior defects and damages using AI/ML for entire automotive lifecycle and warehousing industries.",
        link: "",
        link1: ""
    },
    {
        id: 19,
        title: "TIBCO Software",
        img: "",
        desc: "How TIBCO helps organizations solve complex data problems, regardless of vertical.",
        link: "",
        link1: ""
    },
    {
        id: 20,
        title: "Geek+",
        img: "",
        desc: "How Geek+ realizes flexible, reliable, and highly efficient logistics and supply chain management.",
        link: "",
        link1: ""
    },
    {
        id: 21,
        title: "Quividi",
        img: "",
        desc: "How Quividi changes the paradigm for out of home audience measurement.",
        link: "",
        link1: ""
    },
    {
        id: 22,
        title: "IndustryFusion Foundation (IFF)",
        img: "",
        desc: "IFF enables small and medium-sized enterprises to unleash the potential of Industry 4.0.",
        link: "",
        link1: ""
    },
    {
        id: 23,
        title: "PreciTaste",
        img: "",
        desc: "How QSR brain software uses AI for precision forecasting in quick service restaurant food production.",
        link: "",
        link1: ""
    },
]

const itemsPerPage = 8;
let currentPage = 1;

function renderItems(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex && i < successpartner.length; i++) {
        D_successpartner.innerHTML += `
            <div class="col-xs-12 col-ms-6 col-sm-6 col-md-4 col-lg-3">
                <div class="d_item">
                    <div class="d_img mb-2">
                        <img src="/img/darshan_image/${successpartner[i].img}" alt="">
                    </div>
                    <h3><a href="/d_partner/${successpartner[i].link}">${successpartner[i].title}</a></h3>
                    <p>${successpartner[i].desc}</p>
                    <p><a href="/d_partner/${successpartner[i].link}">Watch the video</a></p>
                    ${successpartner[i].link1 ? `<p><a href="">Read the partner brief</a></p>` : ''}
                </div>
            </div>`;
    }
}

function toggleItems() {
    const showMoreBtn = document.getElementById('show-more-btn');
    const myCard = document.getElementById('my-card');

    if (currentPage * itemsPerPage < successpartner.length) {
        // Show more items
        currentPage++;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = currentPage * itemsPerPage;
        renderItems(startIndex, endIndex);

        if (currentPage * itemsPerPage >= successpartner.length) {
            showMoreBtn.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-up"></i> Show Less';
        }
    } else {
        // Show less items
        D_successpartner.innerHTML = '';
        currentPage = 1;
        renderItems(0, itemsPerPage);
        showMoreBtn.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-down"></i> Show More';
    }
}

if (D_successpartner) {
    renderItems(0, itemsPerPage);

    const showMoreBtn = document.getElementById('show-more-btn');
    showMoreBtn.addEventListener('click', toggleItems);
}

// case study

let D_casestudy = document.getElementById('D_casestudy')

const casestudy = [
    {
        id: 1,
        title: "Optalio",
        img: "is1.avif",
        desc: "Optalio's AI process optimization solution improves manufacturing by boosting productivity and profitability. ",
        link: "d_optalio-bergi-plast-case-study.html",
        link1: ""
    },
    {
        id: 2,
        title: "Eigen Innovations",
        img: "is2.jpg",
        desc: "Eigen Innovations' OneView Machine Vision software, centrally-managed machine vision solutions designed for defect prevention.",
        link: "d_eigen-innovations-oneview-machine-vision-partner-brief.html",
        link1: ""
    },
    {
        id: 3,
        title: "Aotu",
        img: "is3.jpg",
        desc: "Aotu BrainFrame is an AI platform that reduces the complexity of AI video analysis integration into manufaturing and industrial environments, streamlining manufacturing processes and enhancing industrial safety.",
        link: "d_aotu-brainframe-partner-brief.html",
        link1: ""
    },
    {
        id: 4,
        title: "Visionatics Inc.",
        img: "is4.jpg",
        desc: "Visionatics Inc's panel inspection solution for manufacturing, delivering quality assurance with automated product inspection.",
        link: "d_visionatics-panel-inspection-solution-partner-brief.html",
        link1: ""
    },
    {
        id: 5,
        title: "SeeWise Smart Factory",
        img: "is5.avif",
        desc: "True AI powered smart factory solution, optimizing manufacturing processes with computer vision from SeeWise.AI.",
        link: "",
        link1: ""
    },
    {
        id: 6,
        title: "Satsafeti Intelligent Conveyor Solution",
        img: "is6.png",
        desc: "Enhancing worker safety and improving productivity for manufacturers with Satsafeti's conveyor solution.",
        link: "",
        link1: ""
    },
    {
        id: 7,
        title: "Profet AI AutoML Platform",
        img: "is7.jpg",
        desc: "Streamlining digital transformations through data-driven manufacturing insights with the Profet AI AutoML Platform.",
        link: "",
        link1: ""
    },
    {
        id: 8,
        title: "4tiitoo NUIA Eye Control",
        img: "is8.jpg",
        desc: "Improving efficiency and ergonomics with intuitive eye-tracking.",
        link: "",
        link1: ""
    },
    {
        id: 9,
        title: "Pratexo Studio",
        img: "is9.jpg",
        desc: "Enhance micro-cloud and edge deployment from a centralized interface.",
        link: "",
        link1: ""
    },
    {
        id: 10,
        title: "Irida Labs PerCV.ai Edge Vision AI Solution",
        img: "",
        desc: "Empowering vision sensors with edge AI for intelligence inventory management.",
        link: "",
        link1: ""
    },
    {
        id: 11,
        title: "Axiomtek AMR Builder Package Accelerates Time-to-Market",
        img: "is11.jpg",
        desc: "Axiomtek releases an AMR builder package including an AMR controller, ROS 2 software package, sensor kits, and development support services to simplify the AMR development process from design to manufacture to assist system integrators in speeding up time-to-market.",
        link: "",
        link1: ""
    },
]

function renderItems1(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex && i < casestudy.length; i++) {
        D_casestudy.innerHTML += `
            <div class="col-xs-12 col-ms-6 col-sm-6 col-md-4 col-lg-3">
                <div class="d_item">
                    <div class="d_img mb-2">
                        <img src="/img/darshan_image/${casestudy[i].img}" alt="">
                    </div>
                    <h3><a href="/d_partner/${casestudy[i].link}">${casestudy[i].title}</a></h3>
                    <p>${casestudy[i].desc}</p>
                    <p><a href="/d_partner/${casestudy[i].link}">Watch the video</a></p>
                    ${casestudy[i].link1 ? `<p><a href="">Read the partner brief</a></p>` : ''}
                </div>
            </div>`;
    }
}

function toggleItems1() {
    const showMoreBtn = document.getElementById('show-more-btn1');

    if (currentPage * itemsPerPage < casestudy.length) {
        // Show more items
        currentPage++;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = currentPage * itemsPerPage;
        renderItems1(startIndex, endIndex);

        if (currentPage * itemsPerPage >= casestudy.length) {
            showMoreBtn.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-up"></i> Show Less';
        }
    } else {
        // Show less items
        D_casestudy.innerHTML = '';
        currentPage = 1;
        renderItems1(0, itemsPerPage);
        showMoreBtn.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-down"></i> Show More';
    }
}

if (D_casestudy) {
    renderItems1(0, itemsPerPage);

    const showMoreBtn = document.getElementById('show-more-btn1');
    showMoreBtn.addEventListener('click', toggleItems1);
}

// health and sciences

let D_successhealth = document.getElementById('D_successhealth')

const successhealth = [
    {
        id: 1,
        title: "ByteDance",
        img: "hp1.jpg",
        desc: "ByteDance Volcano Engine, advancing medical macromolecular models and pharmaceutical research, enhanced by the powerful computing capabilities of the Intel® oneAPIHPC Toolkit.",
        link: "",
        link1: ""
    },
    {
        id: 2,
        title: "Sycai Medical",
        img: "hp2.jpg",
        desc: "Sycai Medical's AI medical imaging improves patient care through AI-assisted detection of pancreatic cystic lesions.",
        link: "d_sycai-medical-pancreatic-imaging-partner-brief.html",
        link1: ""
    },
    {
        id: 3,
        title: "LinkingMed",
        img: "hp3.jpg",
        desc: "LinkingMed AIPlan automatic radiotherapy treatment planning system, improving patient outcomes and optimizing treatment plans with AI-powered tools.",
        link: "d_linkingmed-radiotherapy-planning-partner-brief.html",
        link1: ""
    },
    {
        id: 4,
        title: "JLK MEDIHUB CXR",
        img: "hp4.jpg",
        desc: "MEDIHUB CXR, enhance patient care with AI-based lung disease detection.",
        link: "",
        link1: ""
    },
    {
        id: 5,
        title: "Netown Babybot Smart Health Solution",
        img: "hp5.jpg",
        desc: "Providing personalized health enhancement experiences with AI.",
        link: "d_netown-babybot-smart-health-partner-brief.html",
        link1: ""
    },
    {
        id: 6,
        title: "JelloX MetaLite Digital Pathology Edge Solution",
        img: "hp6.jpg",
        desc: "Enabling enhanced preventative care through intelligent analytics and imaging.",
        link: "",
        link1: ""
    },
    {
        id: 7,
        title: "Subtle Medical SubtleMR",
        img: "hp7.jpg",
        desc: "Enabling safer, faster, and smarter medical imaging.",
        link: "",
        link1: ""
    },
    {
        id: 8,
        title: "Bringing AI-Enabled Digital Pathology to Hospitals",
        img: "hp8.jpg",
        desc: "Wistron leveraged OpenVINO™ Model Server (OVMS) to optimize inference on Intel® CPU-based platforms.",
        link: "",
        link1: ""
    },
    {
        id: 9,
        title: "DarwinAI's Deep Learning Screening Tool Helps Detect COVID-19",
        img: "hp9.jpg",
        desc: "DarwinAI developed the COVID-Net convolutional neural network (CNN) architecture to help clinicians rapidy and accurately detect COVID-19 in patients",
        link: "",
        link1: ""
    },
    {
        id: 10,
        title: "Samsung Collaborates with Intel to Speed Nerve Detection and Improve Workflows",
        img: "hp10.jpg",
        desc: "Real-time inference of ultrasound nerve images powered by the Intel® Distribution of OpenVINO™ toolkit helps enhance workflow and improve accuracy for anesthesiologists.",
        link: "",
        link1: ""
    },
    {
        id: 11,
        title: "Onyx AI Device Automates Medication Identification",
        img: "",
        desc: "A prototype AI Medicine Recognition Device improves identification efficiency and accelerates medication verification to aid in dispensing of medication to patients.",
        link: "",
        link1: ""
    },
]

function renderItems2(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex && i < successhealth.length; i++) {
        D_successhealth.innerHTML += `
            <div class="col-xs-12 col-ms-6 col-sm-6 col-md-4 col-lg-3">
                <div class="d_item">
                    <div class="d_img mb-2">
                        <img src="/img/darshan_image/${successhealth[i].img}" alt="">
                    </div>
                    <h3><a href="/d_partner/${successhealth[i].link}">${successhealth[i].title}</a></h3>
                    <p>${successhealth[i].desc}</p>
                    <p><a href="/d_partner/${successhealth[i].link}">Read the partner brief</a></p>
                    ${successhealth[i].link1 ? `<p><a href="">Read the solution brief</a></p>` : ''}
                </div>
            </div>`;
    }
}

function toggleItems2() {
    const showMoreBtn = document.getElementById('show-more-btn2');

    if (currentPage * itemsPerPage < successhealth.length) {
        // Show more items
        currentPage++;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = currentPage * itemsPerPage;
        renderItems2(startIndex, endIndex);

        if (currentPage * itemsPerPage >= successhealth.length) {
            showMoreBtn.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-up"></i> Show Less';
        }
    } else {
        // Show less items
        D_successhealth.innerHTML = '';
        currentPage = 1;
        renderItems2(0, itemsPerPage);
        showMoreBtn.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-down"></i> Show More';
    }
}

if (D_successhealth) {
    renderItems2(0, itemsPerPage);

    const showMoreBtn = document.getElementById('show-more-btn2');
    showMoreBtn.addEventListener('click', toggleItems2);
}


// reatail

let D_successretail = document.getElementById('D_successretail')

const successretail = [
    {
        id: 1,
        title: "Autocanteen",
        img: "rs1.jpg",
        desc: "Autocanteen is helping a major bank enhance their employee experience with AI-powered self-service checkout terminals. Autocanteen is a touchless self-checkout solution which increases checkout efficiency.",
        link: "d_autocanteen-touchless-checkout-case-study.html",
        link1: ""
    },
    {
        id: 2,
        title: "Shanghai Kaijing",
        img: "rs2.jpg",
        desc: "Shanghai Kaijing Canteen, improving efficiency for food retailers with AI-powered automated checkout services.",
        link: "d_shanghai-kaijing-canteen-partner-brief.html",
        link1: ""
    },
    {
        id: 3,
        title: "Pathr.ai",
        img: "rs3.jpg",
        desc: "Pathr.ai spatial intelligence, empowering data-driven decisions and improving operational efficiency with AI-driven video analytics.",
        link: "d_pathrai-spatial-intelligence-partner-brief.html",
        link1: ""
    },
    {
        id: 4,
        title: "C2RO",
        img: "rs4.jpg",
        desc: "ENTERA's GDPR-compliant video analytics platform empowers customers to maximize the value from their mission-critical video data.",
        link: "d_c2ro-entera-partner-brief.html",
        link1: ""
    },
    {
        id: 5,
        title: "Broox",
        img: "rs5.jpg",
        desc: "Broox Audience Analytics Suite, create meaningful customer engagement through intelligent digital signage.",
        link: "d_broox-audience-analytics-suite-partner-brief.html",
        link1: ""
    },
    {
        id: 6,
        title: "WaitTime",
        img: "rs6.jpg",
        desc: "Improve customer experiences and operations using real-time crowd intelligence.",
        link: "d_waittime-platform-partner-brief.html",
        link1: ""
    },
    {
        id: 7,
        title: "SHELFIE",
        img: "rs7.jpg",
        desc: "Empowering retailers with an intelligent shelf monitoring system for real-time, actionable insights.",
        link: "d_shelfie-white-paper.html",
        link1: ""
    },
    {
        id: 8,
        title: "Vistry Discrn",
        img: "rs8.jpg",
        desc: "Vistry brings AI-enabled automation to enterprise quick service restaurants",
        link: "d_vistry-discrn-solution-brief.html",
        link1: ""
    },
    {
        id: 9,
        title: "PM AM Corporation i3Di Solution",
        img: "rs9.jpg",
        desc: "Enhancing insights into customer behavior with AI-based video analytics.",
        link: "",
        link1: ""
    },
    {
        id: 10,
        title: "GIBots DigiDoc: Accounts Payable Automation",
        img: "rs10.jpg",
        desc: "Enabling high volume transaction processing with a centralized, accurate, and intelligent data processing platform.",
        link: "",
        link1: ""
    },
    {
        id: 11,
        title: "meldCX Reduce Loss and Increase Visibility with AI",
        img: "rs11.jpg",
        desc: "The increased reliance on customer self-checkout for more frictionless shopping as well as modern staffing challenges has increased the potential for theft. Retailers today need solutions to help them monitor their inventory closely, from truck to shelf, to detect potential shrinkage and prevent loss.",
        link: "",
        link1: ""
    },
]

function renderItems3(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex && i < successretail.length; i++) {
        D_successretail.innerHTML += `
            <div class="col-xs-12 col-ms-6 col-sm-6 col-md-4 col-lg-3">
                <div class="d_item">
                    <div class="d_img mb-2">
                        <img src="/img/darshan_image/${successretail[i].img}" alt="">
                    </div>
                    <h3><a href="/d_partner/${successretail[i].link}">${successretail[i].title}</a></h3>
                    <p>${successretail[i].desc}</p>
                    <p><a href="/d_partner/${successretail[i].link}">Read the case study</a></p>
                    ${successretail[i].link1 ? `<p><a href="">Read the partner brief</a></p>` : ''}
                </div>
            </div>`;
    }
}

function toggleItems3() {
    const showMoreBtn = document.getElementById('show-more-btn3');

    if (currentPage * itemsPerPage < successretail.length) {
        // Show more items
        currentPage++;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = currentPage * itemsPerPage;
        renderItems3(startIndex, endIndex);

        if (currentPage * itemsPerPage >= successretail.length) {
            showMoreBtn.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-up"></i> Show Less';
        }
    } else {
        // Show less items
        D_successretail.innerHTML = '';
        currentPage = 1;
        renderItems3(0, itemsPerPage);
        showMoreBtn.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-down"></i> Show More';
    }
}

if (D_successretail) {
    renderItems3(0, itemsPerPage);

    const showMoreBtn = document.getElementById('show-more-btn3');
    showMoreBtn.addEventListener('click', toggleItems3);
}

// reatail

let D_successsecurity = document.getElementById('D_successsecurity')

const successsecurity = [
    {
        id: 1,
        title: "Yumai",
        img: "ss1.jpg",
        desc: "Yumai Palm Vein Identification Box, enhancing individual authentication privacy through Palmar Vein Recognition.",
        link: "d_yumai-palm-vein-identification-ai-box-partner-brief.html",
        link1: ""
    },
    {
        id: 2,
        title: "Cathexis Technologies",
        img: "ss2.jpg",
        desc: "CathexisVision video management software and video analytics, enhancing safety and security with a suite of AI-enhanced features.",
        link: "d_cathexisvision-partner-brief.html",
        link1: ""
    },
    {
        id: 3,
        title: "Irisity IRIS+",
        img: "ss3.jpg",
        desc: "Smart security with validated video analytics.",
        link: "d_irisity-iris-solution-brief.html",
        link1: ""
    },
    {
        id: 4,
        title: "AerVision AerWatch",
        img: "ss4.jpg",
        desc: "AI enabled video monitoring and event detection.",
        link: "d_aervision-aerwatch-solution-brief.html",
        link1: ""
    },
    {
        id: 5,
        title: "WaitTime Crowd Management",
        img: "ss5.jpg",
        desc: "WaitTime is an artificial intelligence software that uses state-of-the-art imaging techniques to monitor crowd behavior in large scale venues.",
        link: "d_waittime-crowd-intelligence-partner-brief.html",
        link1: ""
    },
    {
        id: 6,
        title: "Scale Computing VMS",
        img: "ss6.jpg",
        desc: "Intel and Scale Computing present a powerful and innovative solution for high-demand security stacks and edge computing.",
        link: "d_aioverview.html",
        link1: ""
    },
    {
        id: 7,
        title: "PMY Venue Operational Insights",
        img: "ss7.jpg",
        desc: "PMY delivers smart operating platform with Intel technology for venues and events.",
        link: "d_pmy-solution-brief.html",
        link1: ""
    },
    {
        id: 8,
        title: "Neuroo Platform",
        img: "ss8.jpg",
        desc: "Making security systems smart with actionable data.",
        link: "",
        link1: ""
    },
    {
        id: 9,
        title: "AIRA airaFace Solution",
        img: "ss9.jpg",
        desc: "The AIRA airaFace solution uses a proprietary facial recognition engine and faces from multiple inputs to provide highly accurate facial recognition capabilities.",
        link: "",
        link1: ""
    },
    {
        id: 10,
        title: "ISS SecurOS Labor Safety Solutions",
        img: "ss10.jpg",
        desc: "Protecting workers and customers with video analytics solutions.",
        link: "",
        link1: ""
    },
    {
        id: 11,
        title: "Viso Suite: Low-Code AI Inference Software with OpenVINO™ Toolkit",
        img: "ss11.jpg",
        desc: "Viso Suite and the Intel® Distribution of OpenVINO™ toolkit accelerate time to market for AI inference with a low-code, cloud-based SaaS solution.",
        link: "",
        link1: ""
    },
]

function renderItems4(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex && i < successsecurity.length; i++) {
        D_successsecurity.innerHTML += `
            <div class="col-xs-12 col-ms-6 col-sm-6 col-md-4 col-lg-3">
                <div class="d_item">
                    <div class="d_img mb-2">
                        <img src="/img/darshan_image/${successsecurity[i].img}" alt="">
                    </div>
                    <h3><a href="/d_partner/${successsecurity[i].link}">${successsecurity[i].title}</a></h3>
                    <p>${successsecurity[i].desc}</p>
                    <p><a href="/d_partner/${successsecurity[i].link}">Watch the video</a></p>
                    ${successsecurity[i].link1 ? `<p><a href="">Read the partner brief</a></p>` : ''}
                </div>
            </div>`;
    }
}

function toggleItems4() {
    const showMoreBtn = document.getElementById('show-more-btn4');

    if (currentPage * itemsPerPage < successsecurity.length) {
        // Show more items
        currentPage++;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = currentPage * itemsPerPage;
        renderItems4(startIndex, endIndex);

        if (currentPage * itemsPerPage >= successsecurity.length) {
            showMoreBtn.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-up"></i> Show Less';
        }
    } else {
        // Show less items
        D_successsecurity.innerHTML = '';
        currentPage = 1;
        renderItems4(0, itemsPerPage);
        showMoreBtn.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-down"></i> Show More';
    }
}

if (D_successsecurity) {
    renderItems4(0, itemsPerPage);

    const showMoreBtn = document.getElementById('show-more-btn4');
    showMoreBtn.addEventListener('click', toggleItems4);
}

// transport

let D_transport = document.getElementById('D_transport')

const transport = [
    {
        id: 1,
        title: "Ignitarium TYQ-i",
        img: "ts1.jpg",
        desc: "Empowering smarter inspection with vision intelligence.",
        link: "d_ignitarium-tyq-i-partner-brief.html",
        link1: ""
    },
    {
        id: 2,
        title: "7 StarLake Smart Traffic",
        img: "ts2.jpg",
        desc: "5G C-V2X smart traffic, improving public safety with AI-based traffic monitoring.",
        link: "d_7-starlake-smart-traffic-partner-brief.html",
        link1: ""
    },
    {
        id: 3,
        title: "Siena Analytics Insights",
        img: "ts3.jpg",
        desc: "Improving supply chain logistics with AI and image recognition.",
        link: "d_siena-analytics-insights-solution-brief.html",
        link1: ""
    },
    {
        id: 4,
        title: "Intelligence Design IDEA Counter",
        img: "ts4.jpg",
        desc: "Automating the measurement of traffic volume data and improving insights through automated volume measurement with ai image analysis.",
        link: "",
        link1: ""
    },
    {
        id: 5,
        title: "Viso.ai Viso Suite Solution",
        img: "",
        desc: "Viso Suite is the no-code platform for computer vision to build and operate all AI vision applications in one place.",
        link: "",
        link1: ""
    },
    {
        id: 6,
        title: "Edge Vision EV-Crossroad",
        img: "",
        desc: "Detecting traffic incidents in real-time to improve public safety.",
        link: "",
        link1: ""
    },
    {
        id: 7,
        title: "EXTREME VISION Smart Traffic Violation Review",
        img: "ts7.jpg",
        desc: "Improving traffic management and safety through AI.",
        link: "",
        link1: ""
    },
    {
        id: 8,
        title: "KoiReader HyperAutomation Platform",
        img: "ts8.jpg",
        desc: "KoiReader AIoT-powered HyperAutomation Platform for logistics and supply chain, improving operational efficiency across the entire value chain.",
        link: "",
        link1: ""
    },
    {
        id: 9,
        title: "a2-VCA Traffic Safety Solution",
        img: "ts9.jpg",
        desc: "AI-based video analysis helps improve traffic safety in near-real time.",
        link: "",
        link1: ""
    },
    {
        id: 10,
        title: "DFI and Chunghwa Telecom Labs Deliver Solution to Help Reduce Traffic Accidents",
        img: "ts10.jpg",
        desc: "DFI and Chunghwa Telecom Labs chose the Intel® Distribution of OpenVINO™ toolkit to create a mobile AI system that can identify license plates of vehicles committing traffic violations.",
        link: "",
        link1: ""
    },
    {
        id: 11,
        title: "Intel and ADLINK: Smarter, Safer Railways",
        img: "ts11.jpg",
        desc: "This eBook is intended to show how Artificial Intelligence can be incorporated into railway operations to improve the railway experience and to showcase the many use cases that exist. ",
        link: "",
        link1: ""
    },
]

function renderItems5(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex && i < transport.length; i++) {
        D_transport.innerHTML += `
            <div class="col-xs-12 col-ms-6 col-sm-6 col-md-4 col-lg-3">
                <div class="d_item">
                    <div class="d_img mb-2">
                        <img src="/img/darshan_image/${transport[i].img}" alt="">
                    </div>
                    <h3><a href="/d_partner/${transport[i].link}">${transport[i].title}</a></h3>
                    <p>${transport[i].desc}</p>
                    <p><a href="/d_partner/${transport[i].link}">Watch the video</a></p>
                    ${transport[i].link1 ? `<p><a href="">Read the partner brief</a></p>` : ''}
                </div>
            </div>`;
    }
}

function toggleItems5() {
    const showMoreBtn = document.getElementById('show-more-btn5');

    if (currentPage * itemsPerPage < transport.length) {
        // Show more items
        currentPage++;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = currentPage * itemsPerPage;
        renderItems5(startIndex, endIndex);

        if (currentPage * itemsPerPage >= transport.length) {
            showMoreBtn.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-up"></i> Show Less';
        }
    } else {
        // Show less items
        D_transport.innerHTML = '';
        currentPage = 1;
        renderItems5(0, itemsPerPage);
        showMoreBtn.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-down"></i> Show More';
    }
}

if (D_transport) {
    renderItems5(0, itemsPerPage);

    const showMoreBtn = document.getElementById('show-more-btn5');
    showMoreBtn.addEventListener('click', toggleItems5);
}

// technology

let D_technology = document.getElementById('D_technology')

const technology = [
    {
        id: 1,
        title: "NavAjna",
        img: "es1.avif",
        desc: "NavAjna Avanta AI, creating meaningful customer experiences with intelligent digital interactions.",
        link: "d_navajna-avanta-ai-partner-brief.html",
        link1: ""
    },
    {
        id: 2,
        title: "Course5",
        img: "es2.jpg",
        desc: "Course5 Discovery AI-powered Augmented Analytics Platform is an AI-powered suite of tools that helps businesses make quick, data-driven decisions by providing a powerful and intuitive solution to multi-stream analytics.",
        link: "d_course5-discovery-platform-partner-brief.html",
        link1: ""
    },
    {
        id: 3,
        title: "Taboola",
        img: "es3.jpg",
        desc: "Driving meaningful customer engagement with AI-driven content rocommendations.",
        link: "d_taboola-customer-engagement-partner-brief.html",
        link1: ""
    },
    {
        id: 4,
        title: "brighter AI",
        img: "es4.jpg",
        desc: "brighter AI's image and video anonymization solution, improving identity protection and privacy compliance with AI-powered anonymization at scale.",
        link: "d_brighter-ai-partner-brief.html",
        link1: ""
    },
    {
        id: 5,
        title: "iGenius",
        img: "es5.jpg",
        desc: "iGenius's Crystal is a voice and text-based data platform that lets people effortlessly access and analyze their business data.",
        link: "d_igenius-crystal-partner-brief.html",
        link1: ""
    },
    {
        id: 6,
        title: "IBM",
        img: "es6.jpg",
        desc: "IBM Watson Natural Language Understanding, powered by Intel processors and optimized with Intel software tools, uses deep learning techniques to extract meaning and metadata from unstructured data.",
        link: "",
        link1: ""
    },
    {
        id: 7,
        title: "GDDi",
        img: "es7.jpg",
        desc: "GDDi Algorithms Defined Edge AIBox.  Empowering businesses with accessible computer vision with automated AI algorithm training.",
        link: "",
        link1: ""
    },
    {
        id: 8,
        title: "SILO AI",
        img: "es8.jpg",
        desc: "Achieve better weather insights with deep learning.",
        link: "",
        link1: ""
    },
    {
        id: 9,
        title: "SAIMOS",
        img: "es9.jpg",
        desc: "The SAIMOS Video Analytics Suite, harnesses the power of AI to transform unstructured video streams into actionable data customers can use to optimize their business, security, and smart city operations.",
        link: "",
        link1: ""
    },
    {
        id: 10,
        title: "Beseye",
        img: "es10.jpg",
        desc: "Optimizing safety management and operations through Beseye AI Video Analysis Platform powered by 11th and 12th gen Intel® Core™ Processors.",
        link: "",
        link1: ""
    },
    {
        id: 11,
        title: "CVEDIA + GRIDSMART",
        img: "",
        desc: "GRIDSMART supports safe traffic intersections with advanced video analytics from CVEDIA ITS solutions. ",
        link: "",
        link1: ""
    },
]

function renderItems6(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex && i < technology.length; i++) {
        D_technology.innerHTML += `
            <div class="col-xs-12 col-ms-6 col-sm-6 col-md-4 col-lg-3">
                <div class="d_item">
                    <div class="d_img mb-2">
                        <img src="/img/darshan_image/${technology[i].img}" alt="">
                    </div>
                    <h3><a href="/d_partner/${technology[i].link}">${technology[i].title}</a></h3>
                    <p>${technology[i].desc}</p>
                    <p><a href="/d_partner/${technology[i].link}">Read the solution brief</a></p>
                    ${technology[i].link1 ? `<p><a href="">Read the partner brief</a></p>` : ''}
                </div>
            </div>`;
    }
}

function toggleItems6() {
    const showMoreBtn = document.getElementById('show-more-btn6');

    if (currentPage * itemsPerPage < technology.length) {
        // Show more items
        currentPage++;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = currentPage * itemsPerPage;
        renderItems6(startIndex, endIndex);

        if (currentPage * itemsPerPage >= technology.length) {
            showMoreBtn.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-up"></i> Show Less';
        }
    } else {
        // Show less items
        D_technology.innerHTML = '';
        currentPage = 1;
        renderItems6(0, itemsPerPage);
        showMoreBtn.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-down"></i> Show More';
    }
}

if (D_technology) {
    renderItems6(0, itemsPerPage);

    const showMoreBtn = document.getElementById('show-more-btn6');
    showMoreBtn.addEventListener('click', toggleItems6);
}

// video 

let D_successvideo = document.getElementById('D_successvideo')

const successvideo = [
    {
        id: 1,
        title: "NexCOBOT",
        img: "vs1.png",
        desc: "Functional safety control platform for autonomous mobile robots.",
        link: "d_nexcobot-scaling-edge-video.html",
        link1: ""
    },
    {
        id: 2,
        title: "WaitTime",
        img: "vs2.png",
        desc: "WaitTime is a patented, real-time and historical artificial intelligence software that uses state-of-the-art imaging techniques to monitor crowd behavior in large scale venues.",
        link: "d_waittime-scaling-edge-video.html",
        link1: ""
    },
    {
        id: 3,
        title: "Axiomtek",
        img: "vs3.png",
        desc: "Axiomtek AMR building package aims to accelerate time-to-market through a complete support program.",
        link: "d_axiomtek-scaling-edge-video.html",
        link1: ""
    },
    {
        id: 4,
        title: "AAEON",
        img: "vs4.png",
        desc: "AAEON UP Element i12 Edge, autonomous mobile robot modular toolkit.",
        link: "d_aaeon-scaling-at-the-edge-video.html",
        link1: ""
    },
    {
        id: 5,
        title: "NexAIoT",
        img: "vs5.png",
        desc: "Delivering user-centric service with smart autonomous mobile robots (AMR).",
        link: "d_nexaiot-scaling-at-the-edge-video.html",
        link1: ""
    },
    {
        id: 6,
        title: "Deci",
        img: "vs6.png",
        desc: "Accelerating deep learning performance on edge devices.",
        link: "",
        link1: ""
    },
    {
        id: 7,
        title: "HTC",
        img: "vs7.png",
        desc: "5G Private Network Solution",
        link: "",
        link1: ""
    },
    {
        id: 8,
        title: "NEXCOM",
        img: "vs8.png",
        desc: "NEXCOM 5G uCPE for virtual edge services management.",
        link: "",
        link1: ""
    },
    {
        id: 9,
        title: "Pegatron",
        img: "vs9.png",
        desc: "Pegatron 5G private network solution, digital resilience.",
        link: "",
        link1: ""
    },
    {
        id: 10,
        title: "Lanner",
        img: "vs10.png",
        desc: "Lanner Scalable EDGE Cloud Platform",
        link: "",
        link1: ""
    },
    {
        id: 11,
        title: "JelloX",
        img: "vs11.png",
        desc: "MetaLite digital pathology edge solution.",
        link: "",
        link1: ""
    },
]

function renderItems7(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex && i < successvideo.length; i++) {
        D_successvideo.innerHTML += `
            <div class="col-xs-12 col-ms-6 col-sm-6 col-md-4 col-lg-3">
                <div class="d_item">
                    <div class="d_img mb-2">
                        <img src="/img/darshan_image/${successvideo[i].img}" alt="">
                    </div>
                    <h3><a href="/d_partner/${successvideo[i].link}">${successvideo[i].title}</a></h3>
                    <p>${successvideo[i].desc}</p>
                    <p><a href="/d_partner/${successvideo[i].link}">Watch the video</a></p>
                    ${successvideo[i].link1 ? `<p><a href="">Read the partner brief</a></p>` : ''}
                </div>
            </div>`;
    }
}

function toggleItems7() {
    const showMoreBtn = document.getElementById('show-more-btn7');

    if (currentPage * itemsPerPage < successvideo.length) {
        // Show more items
        currentPage++;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = currentPage * itemsPerPage;
        renderItems7(startIndex, endIndex);

        if (currentPage * itemsPerPage >= successvideo.length) {
            showMoreBtn.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-up"></i> Show Less';
        }
    } else {
        // Show less items
        D_successvideo.innerHTML = '';
        currentPage = 1;
        renderItems7(0, itemsPerPage);
        showMoreBtn.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-down"></i> Show More';
    }
}

if (D_successvideo) {
    renderItems7(0, itemsPerPage);

    const showMoreBtn = document.getElementById('show-more-btn7');
    showMoreBtn.addEventListener('click', toggleItems7);
}

// ecosystem 

let D_knowecosystem = document.getElementById('D_knowecosystem')

const knowecosystem = [
    {
        id: 1,
        title: "Wind River Systems",
        img: "eco1.png",
        desc: "Helix Virtualization Platform, advancing safety avionics with Intel Xeon D-1700/2700 and 11th Gen Intel® Core™ processors.",
        link: "d_windriver-ecosystem-partner-presentation.html",
        link1: ""
    },
    {
        id: 2,
        title: "Portwell",
        img: "eco2.png",
        desc: "12th Gen Intel® Core™ Processor PICMG 1.3 single host board.",
        link: "d_portwell-ecosystem-partner-presentation.html",
        link1: ""
    },
    {
        id: 3,
        title: "Asus",
        img: "eco3.png",
        desc: "Completed industrial components portfolio with 12th Gen Intel® Core™ processors.",
        link: "d_asus-12th-gen-ecosystem-partner-presentation.html",
        link1: ""
    },
    {
        id: 4,
        title: "Advantech",
        img: "",
        desc: "Intel 12th Gen Core processors embedded platforms",
        link: "d_404.html",
        link1: ""
    },
    {
        id: 5,
        title: "Seavo Solutions",
        img: "",
        desc: "Scalable and expandable Vision AI solution.",
        link: "d_404.html",
        link1: ""
    },
    {
        id: 6,
        title: "Congatec",
        img: "",
        desc: "COM-HPC Modules Leverage Intel® Xeon® D Processor for Server-Level Performance at the Edge",
        link: "d_404.html",
        link1: ""
    },
    {
        id: 7,
        title: "DFI",
        img: "",
        desc: "The Virtualized Infrastructure for Industrial Automation Based on Intel 12th Core Processor and Ubuntu.",
        link: "d_404.html",
        link1: ""
    },
    {
        id: 8,
        title: "JWIPC (D34)",
        img: "",
        desc: "E098 Edge AI Box for video analytics",
        link: "d_404.html",
        link1: ""
    },
    {
        id: 9,
        title: "Advantech (D33)",
        img: "",
        desc: "Next Generation AI Applications Powered by 11th Gen Intel® Core™ and Intel® Celeron® processors, and Intel® Xe™ Graphics",
        link: "d_404.html",
        link1: ""
    },
    {
        id: 10,
        title: "IEI (D32)",
        img: "",
        desc: "Scalable and expandable Vision AI solution.",
        link: "d_404.html",
        link1: ""
    },
    {
        id: 11,
        title: "Adlink (D31)",
        img: "",
        desc: "Adlink SMARC modules offer more CPU power for low-power applications. ",
        link: "d_404.html",
        link1: ""
    },
]

function renderItems10(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex && i < knowecosystem.length; i++) {
        D_knowecosystem.innerHTML += `
            <div class="col-xs-12 col-ms-6 col-sm-6 col-md-4 col-lg-3">
                <div class="d_item">
                    <div class="d_img mb-2">
                        <img src="/img/darshan_image/${knowecosystem[i].img}" alt="">
                    </div>
                    <h3><a href="/d_partner/${knowecosystem[i].link}">${knowecosystem[i].title}</a></h3>
                    <p>${knowecosystem[i].desc}</p>
                    <p><a href="/d_partner/${knowecosystem[i].link}">View the presentation</a></p>
                    <p><a href="/d_partner/${knowecosystem[i].link}">Watch the video</a></p>
                </div>
            </div>`;
    }
}

function toggleItems10() {
    const showMoreBtn = document.getElementById('show-more-btn10');

    if (currentPage * itemsPerPage < knowecosystem.length) {
        // Show more items
        currentPage++;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = currentPage * itemsPerPage;
        renderItems10(startIndex, endIndex);

        if (currentPage * itemsPerPage >= knowecosystem.length) {
            showMoreBtn.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-up"></i> Show Less';
        }
    } else {
        // Show less items
        D_knowecosystem.innerHTML = '';
        currentPage = 1;
        renderItems10(0, itemsPerPage);
        showMoreBtn.innerHTML = '<i id="toggle-icon" class="fa-solid fa-angle-down"></i> Show More';
    }
}

if (D_knowecosystem) {
    renderItems10(0, itemsPerPage);

    const showMoreBtn = document.getElementById('show-more-btn10');
    showMoreBtn.addEventListener('click', toggleItems10);
}

// ai retail

let D_type = document.getElementById('D_type');
const types = [
    'Cloud & Comms Service Provider', 'FPGA Design Services', 'Independent Software Vendor', 'Manufacturer', 'Original Equipment Manufacturer (OEM)', 'Service Integrator', 'Solution Provider'
];

if (D_type) {
    for (let i = 0; i < types.length; i++) {
        D_type.innerHTML += `
        <div class="VK_check_box_filter mt-2">
                                                    <input type="checkbox" class="me-2" id="VK_filter_checkbox"
                                                        onclick="content_type()"><span>${types[i]}
                                                        (100)</span>
                                                </div>`;
    }
}

// ai retail

let D_asset = document.getElementById('D_asset');
const asset = [
    'Partners'
];

if (D_asset) {
    for (let i = 0; i < asset.length; i++) {
        D_asset.innerHTML += `
            <div class="VK_check_box_filter mt-2">
                                                    <input type="checkbox" class="me-2" id="VK_filter_checkbox"
                                                        onclick="content_type()"><span>${asset[i]}
                                                        (100)</span>
                                                </div>`;
    }
}

// ai retail

let D_type1 = document.getElementById('D_type1');
const types1 = [
    'Manufacturer'
];

if (D_type1) {
    for (let i = 0; i < types1.length; i++) {
        D_type1.innerHTML += `
        <div class="VK_check_box_filter mt-2">
                                                    <input type="checkbox" class="me-2" id="VK_filter_checkbox"
                                                        onclick="content_type()"><span>${types1[i]}
                                                        (100)</span>
                                                </div>`;
    }
}

// ai retail

let D_asset1 = document.getElementById('D_asset1');
const asset1 = [
    'Partners', 'Offerings'
];

if (D_asset1) {
    for (let i = 0; i < asset1.length; i++) {
        D_asset1.innerHTML += `
            <div class="VK_check_box_filter mt-2">
                                                    <input type="checkbox" class="me-2" id="VK_filter_checkbox"
                                                        onclick="content_type()"><span>${asset1[i]}
                                                        (100)</span>
                                                </div>`;
    }
}

// Submitting a Solution—Application Readiness Guide

// Function to create video gallery
function createVideoGallery(containerId, videoData) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = videoData.map(video => `
      <div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
        <div class="d_item">
          <div class="d_img">
            <a href="${video.link}"><img src="/img/darshan_image/${video.img}" alt="${video.title}"></a>
          </div>
          <h3 class="d_fw3 d_lh"><a href="${video.link}">${video.title} </a>${video.time ? `<small>(${video.time})</small>` : ''}</h3>
          <p>${video.text}</p>
        </div>
      </div>
    `).join('');
}

function createpdf(containerId, pdfData) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = pdfData.map(pdf => `
      <div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_box">
                        <div class="d-flex">
                            <div class="d_img me-1">
                                <img src="/img/darshan_image/${pdf.img}"  alt="">
                            </div>
                            <h4><a href="">${pdf.title}</a></h4>
                        </div>
                    </div>
                </div>`).join('');
}



const pdfvideo11 = [
    {
        id: 1,
        title: "Tech Data Scaling at the Edge ",
        time: "",
        text: "Scaling IoT Soluti",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "C2RO Partner Chat Video",
        time: "22:06",
        text: "Collaboration between Intel and C2RO has enabled 'Journey-to-Touch Analysis' scalable to thousands of enterprise locations. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "meldCX Partner Chat Video",
        time: "3:25",
        text: "Measuring how people work, shop, learn, and play in physical spaces without the need for complex development.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "NexCOBOT Scaling at the Edge Video",
        time: "9:55",
        text: "Functional safety control platform for autonomous mobile robots. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "WaitTime Scaling at the Edge Video",
        time: "18:16",
        text: "WaitTime is a patented, real-time and historical artificial intelligence software that uses state-of-the-art imaging techniques to monitor crowd behavior in large scale venues. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "CoreAVI Edge Testimonial Video",
        time: "2:13",
        text: "Intel edge AI testimonial by Neil Stroud, VP of Marketing and Business Development at CoreAVI.  ",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo11', pdfvideo11);



const pdfmaterial21 = [
    {
        id: 1,
        title: "Axis Smart City eBook",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "iGenius Crystal Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Vistry Discrn Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Enhancing worker safety and improving productivity for manufacturers...",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "SHELFIE Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "WaitTime Platform Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "SHELFIE White Paper",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "LinkingMed Radiotherapy Planning Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "CVEDIA ITS Edge Solutions Case Study",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "C2RO ENTERA Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "WaitTime Platform Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Cathexis CathexisVision Solution Brief",
        img: "pdf2.png",
        link: "",
    },

]

createpdf('D_pdfmaterial21', pdfmaterial21)

// irisity

const pdfvideo12 = [
    {
        id: 1,
        title: "Intel® AI: In Production: CrowdOptic Demo Video ",
        time: "6:57",
        text: "This system uses AI and triangulation algorithms at the network edge to analyze and redirect cameras. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "C2RO Partner Chat Video",
        time: "22:06",
        text: "Collaboration between Intel and C2RO has enabled 'Journey-to-Touch Analysis' scalable to thousands of enterprise locations. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "WaitTime Scaling at the Edge Video",
        time: "18:16",
        text: "WaitTime is a patented, real-time and historical artificial intelligence software that uses state-of-the-art imaging techniques to monitor crowd behavior in large scale venues. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "Intel® AI: In Production: Gorilla Technology Demo Video",
        time: "5:46",
        text: "See how this platform performs facial recognition, site detection, license plate recognition, and loitering detection analytics on multiple channels.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "Intel® AI: In Production: Cortexica Vision Systems Ltd. Demo Video",
        time: "1:01",
        text: "This solution improves compliance, reporting, and operational efficiencies while helping reduce liability and operational down times.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "Intel® AI: In Production: Outdu MediaTech Pvt. Ltd. Demo Video",
        time: "4:54",
        text: "This AI solution uses analytics at the edge to customize and transform the retail customer journey while helping drive business success.",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo12', pdfvideo12);



const pdfmaterial22 = [
    {
        id: 1,
        title: "JLK MEDIHUB CXR Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Pratexo Studio Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "CVEDIA ITS Edge Solutions Case Study",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Eigen Innovations Machine Vision Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "SILO AI Weather Insights Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Intel-Enabled AI from Sensormatic Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "AerVision AerWatch Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "GIBots DigiDoc White Paper",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Netown Babybot Smart Health Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "Cathexis CathexisVision Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "iSIZE BitClear Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Awiros Video AI OS and Marketplace Partner Brief",
        img: "pdf2.png",
        link: "",
    },

]

createpdf('D_pdfmaterial22', pdfmaterial22)

// aervision

const pdfvideo13 = [
    {
        id: 1,
        title: "ThunderSoft Partner Chat Video",
        time: "21:09",
        text: "ThunderSoft smart building solution supports connection and communication with smart building IoT devices such as sensors, devices and building automation systems. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "meldCX Partner Chat Video",
        time: "",
        text: "Measuring how people work, shop, learn, and play in physical spaces without the need for complex development. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "JelloX Scaling at the Edge Video",
        time: "4:31",
        text: "JelloX MetaLite digital pathology solution. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "C2RO Partner Chat Video",
        time: "22:06",
        text: "Collaboration between Intel and C2RO has enabled 'Journey-to-Touch Analysis' scalable to thousands of enterprise locations.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "iBASE Digital Embedded World",
        time: "1:01",
        text: "A look at the iBASE IB953 3.5 inch single board computer and SI-654-N 8K digital signage player. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "Intel® AI: In Production: CrowdOptic Demo Video",
        time: "6:57",
        text: "This system uses AI and triangulation algorithms at the network edge to analyze and redirect cameras. ",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo13', pdfvideo13);



const pdfmaterial23 = [
    {
        id: 1,
        title: "GIBots DigiDoc Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "JLK MEDIHUB CXR Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Beseye AI Video Analysis Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "SILO AI Weather Insights Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Netown Babybot Smart Health Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "C2RO ENTERA Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "NexAIoT AMR Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "GDDi Algorithms Defined AIBox Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "AerVision AerWatch Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "PM AM Corporation i3Di Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Profet AI AutoML Platform Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "SHELFIE White Paper",
        img: "pdf2.png",
        link: "",
    },

]

createpdf('D_pdfmaterial23', pdfmaterial23)

// waittime crowd 

const pdfvideo14 = [
    {
        id: 1,
        title: "Megh Computing Edge Testimonial Video",
        time: "2:14",
        text: "Intel edge AI testimonial by Prabhat K Gupta, founder and CEO of Megh Computing. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "Luxonis Edge Testimonial Video",
        time: "2:14",
        text: "Intel edge AI testimonial by Brandon Gilles, founder and CEO of Luxonis. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "EPIC IO Edge Testimonial Video",
        time: "2:07",
        text: "Intel edge AI testimonial by Ken Mills, CEO of Epic IO, IntelliSite and Broad Sky Networks.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "Vispera Edge Testimonial Video",
        time: "2:09",
        text: "Intel edge AI testimonial video by Erdem Yoruk, CTO at Vispera Information Technologies Co.. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "WaitTime Scaling at the Edge Video",
        time: "18:16",
        text: "WaitTime is a patented, real-time and historical artificial intelligence software that uses state-of-the-art imaging techniques to monitor crowd behavior in large scale venues. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "NodeWeaver Partner Chat Video",
        time: "12:34",
        text: "NodeWeaver bridges the world of private cloud platforms and hyperconverged infrastructure with a unified cloud fabric that brings all pieces together in building-block style. ",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo14', pdfvideo14);



const pdfmaterial24 = [
    {
        id: 1,
        title: "GIBots DigiDoc Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "JLK MEDIHUB CXR Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Beseye AI Video Analysis Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "SILO AI Weather Insights Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Netown Babybot Smart Health Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "C2RO ENTERA Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "NexAIoT AMR Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "GDDi Algorithms Defined AIBox Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "AerVision AerWatch Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "PM AM Corporation i3Di Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Profet AI AutoML Platform Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "SHELFIE White Paper",
        img: "pdf2.png",
        link: "",
    },

]

createpdf('D_pdfmaterial24', pdfmaterial24)

// ignitarium

const pdfvideo15 = [
    {
        id: 1,
        title: "CoreAVI Edge Testimonial Video",
        time: "2:13",
        text: "Intel edge AI testimonial by Neil Stroud, VP of Marketing and Business Development at CoreAVI.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "Vispera Edge Testimonial Video",
        time: "2:09",
        text: "Intel edge AI testimonial video by Erdem Yoruk, CTO at Vispera Information Technologies Co..  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "Cognitifai Edge Testimonial Video",
        time: "2:12",
        text: "Intel edge AI testimonial by Kanishka Nithin, co-founder and CEO at Cognitifai. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "WaitTime Scaling at the Edge Video",
        time: "18:16",
        text: "WaitTime is a patented, real-time and historical artificial intelligence software that uses state-of-the-art imaging techniques to monitor crowd behavior in large scale venues. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "NexCOBOT Scaling at the Edge Video",
        time: "9:55",
        text: "Functional safety control platform for autonomous mobile robots.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "NodeWeaver Partner Chat Video",
        time: "12:34",
        text: "NodeWeaver bridges the world of private cloud platforms and hyperconverged infrastructure with a unified cloud fabric that brings all pieces together in building-block style. ",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo15', pdfvideo15);



const pdfmaterial25 = [
    {
        id: 1,
        title: "Ignitarium TYQ-i Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Broox Audience Analytics Suite Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "CVEDIA ITS Edge Solutions Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "SHELFIE Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Profet AI AutoML Platform Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Vistry Discrn Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "WaitTime Platform Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Intel® AI: In Production | Cities and Transportation",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "QCT OmniPOD Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "ThunderSoft Smart Building Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Beseye AI Video Analysis Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "PMY Solution Briefz`",
        img: "pdf2.png",
        link: "",
    },

]

createpdf('D_pdfmaterial25', pdfmaterial25)

// 7 starlake smart

const pdfvideo16 = [
    {
        id: 1,
        title: "WaitTime Scaling at the Edge Video",
        time: "18:16",
        text: "WaitTime is a patented, real-time and historical artificial intelligence software that uses state-of-the-art imaging techniques to monitor crowd behavior in large scale venues. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "NexCOBOT Scaling at the Edge Video",
        time: "9:55",
        text: "Functional safety control platform for autonomous mobile robots.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "CoreAVI Edge Testimonial Video",
        time: "2:13",
        text: "Intel edge AI testimonial by Neil Stroud, VP of Marketing and Business Development at CoreAVI.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "Luxonis Edge Testimonial Video",
        time: "2:14",
        text: "Intel edge AI testimonial by Brandon Gilles, founder and CEO of Luxonis.   ",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "Megh Computing Edge Testimonial Video",
        time: "2:14",
        text: "Intel edge AI testimonial by Prabhat K Gupta, founder and CEO of Megh Computing.",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "Epic iO Edge Testimonial Video",
        time: "2:07",
        text: "Intel edge AI testimonial by Ken Mills, CEO of Epic IO, IntelliSite and Broad Sky Networks.  ",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo16', pdfvideo16);



const pdfmaterial26 = [
    {
        id: 1,
        title: "7 StarLake Smart Traffic Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "PM AM Corporation i3Di Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "PM AM Corporation i3Di Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "WaitTime Crowd Intelligence Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Axiomtek AMR Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "NexCOBOT SCB100 Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "AIRA airaFace Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "NexAIoT AMR Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "ST Engineering Video Analytics White Paper",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "CVEDIA ITS Edge Solutions Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "CVEDIA ITS Edge Solutions Case Study",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "SAIMOS Video Analytics Solution Partner Brief",
        img: "pdf2.png",
        link: "",
    },

]

createpdf('D_pdfmaterial26', pdfmaterial26)

// siena analytics insights

const pdfvideo17 = [
    {
        id: 1,
        title: "Axiomtek Scaling at the Edge Video",
        time: "7:45",
        text: "Axiomtek AMR building package aims to accelerate time-to-market through a complete support program. System integrators can build a working AMR rapidly and easily. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "ThunderSoft Partner Chat Video",
        time: "21:09",
        text: "ThunderSoft smart building solution supports connection and communication with smart building IoT devices such as sensors, devices and building automation systems. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "meldCX Partner Chat Video",
        time: "2:13",
        text: "Measuring how people work, shop, learn, and play in physical spaces without the need for complex development.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "Eigen Innovations Partner Chat Video",
        time: "14:12",
        text: "Eigen Innovations' easy to deploy machine vision platform enables machine learning and artificial intelligence that helps manufacturers solve complex engineering problems. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "DarwinAI Partner Chat Video",
        time: "",
        text: "Helping manufacturers automate their visual quality inspection and provide more consistent product quality.",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "Advantech Veridify Scaling at the Edge Video",
        time: "10:12",
        text: "Making industrial IoT and smart buildings cyber safe. ",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo17', pdfvideo17);

const pdfmaterial27 = [
    {
        id: 1,
        title: "Pathr.ai Supermarket Operations Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "WaitTime Platform Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Viso AI Viso Suite Solution",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Enhancing worker safety and improving productivity for manufacturers...",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "WaitTime Crowd Intelligence Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "OnePlan Venue Experience Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "meldCX AI Playground Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Hitachi Industrial Edge Computer",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "ST Engineering Video Analytics White Paper",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "IBM Watson NLU Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "SeeWise Smart Factory Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "JelloX MetaLite Digital Pathology Partner Brief",
        img: "pdf2.png",
        link: "",
    },

]

createpdf('D_pdfmaterial27', pdfmaterial27);

// c2ro entera partner

const pdfvideo18 = [
    {
        id: 1,
        title: "C2RO Partner Chat Video",
        time: "22:06",
        text: "Collaboration between Intel and C2RO has enabled 'Journey-to-Touch Analysis' scalable to thousands of enterprise locations.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "Intel® AI: In Production: CrowdOptic Demo Video",
        time: "6:57",
        text: "This system uses AI and triangulation algorithms at the network edge to analyze and redirect cameras. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "ThunderSoft Partner Chat Video",
        time: "21:09",
        text: "ThunderSoft smart building solution supports connection and communication with smart building IoT devices such as sensors, devices and building automation systems. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "meldCX Partner Chat Video",
        time: "",
        text: "Measuring how people work, shop, learn, and play in physical spaces without the need for complex development. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "HTC Scaling at the Edge Video",
        time: "",
        text: "HTC private 5G network solution. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "Intel® AI: In Production: Cortexica Vision Systems Ltd. Demo Video",
        time: "1:01",
        text: "This solution improves compliance, reporting, and operational efficiencies while helping reduce liability and operational down times.",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo18', pdfvideo18);

const pdfmaterial28 = [
    {
        id: 1,
        title: "GIBots DigiDoc Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "JLK MEDIHUB CXR Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Beseye AI Video Analysis Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "SILO AI Weather Insights Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Netown Babybot Smart Health Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "NexAIoT AMR Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "GDDi Algorithms Defined AIBox Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "AerVision AerWatch Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "PM AM Corporation i3Di Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "Profet AI AutoML Platform Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "SHELFIE White Paper",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Satsafeti Intelligent Conveyor Partner Brief",
        img: "pdf2.png",
        link: "",
    },

]

createpdf('D_pdfmaterial28', pdfmaterial28);

// sycai medical

const pdfvideo19 = [
    {
        id: 1,
        title: "CoreAVI Edge Testimonial Video",
        time: "2:13",
        text: "Intel edge AI testimonial by Neil Stroud, VP of Marketing and Business Development at CoreAVI.",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "Vispera Edge Testimonial Video",
        time: "2:09",
        text: "Intel edge AI testimonial video by Erdem Yoruk, CTO at Vispera Information Technologies Co.. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "Cognitifai Edge Testimonial Video",
        time: "2:12",
        text: "Intel edge AI testimonial by Kanishka Nithin, co-founder and CEO at Cognitifai. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "NodeWeaver Partner Chat Video",
        time: "12:34",
        text: "NodeWeaver bridges the world of private cloud platforms and hyperconverged infrastructure with a unified cloud fabric that brings all pieces together in building-block style. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "Epic iO Edge Testimonial Video",
        time: "2:07",
        text: "Intel edge AI testimonial by Ken Mills, CEO of Epic IO, IntelliSite and Broad Sky Networks. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "Luxonis Edge Testimonial Video",
        time: "2:14",
        text: "Intel edge AI testimonial by Brandon Gilles, founder and CEO of Luxonis. ",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo19', pdfvideo19);

const pdfmaterial29 = [
    {
        id: 1,
        title: "LinkingMed Radiotherapy Planning Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "7 StarLake Smart Traffic Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "CathexisVision Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "AerVision AerWatch Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Irisity IRIS Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Profet AI AutoML Platform Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Axiomtek AMR Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "IBM Watson NLU Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Vistry Discrn Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "Ignitarium TYQ-i Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "SeeWise Smart Factory Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "LinkingMed Radiotherapy Planning Solution Brief",
        img: "pdf2.png",
        link: "",
    },

]

createpdf('D_pdfmaterial29', pdfmaterial29);


// linkingmed radiotherapy

const pdfvideo20 = [
    {
        id: 1,
        title: "CoreAVI Edge Testimonial Video",
        time: "2:13",
        text: "Intel edge AI testimonial by Neil Stroud, VP of Marketing and Business Development at CoreAVI.",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "Vispera Edge Testimonial Video",
        time: "2:09",
        text: "Intel edge AI testimonial video by Erdem Yoruk, CTO at Vispera Information Technologies Co.. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "Cognitifai Edge Testimonial Video",
        time: "2:12",
        text: "Intel edge AI testimonial by Kanishka Nithin, co-founder and CEO at Cognitifai. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "WaitTime Scaling at the Edge Video",
        time: "18:36",
        text: "WaitTime is a patented, real-time and historical artificial intelligence software that uses state-of-the-art imaging techniques to monitor crowd behavior in large scale venues. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "NodeWeaver Partner Chat Video",
        time: "12:34",
        text: "NodeWeaver bridges the world of private cloud platforms and hyperconverged infrastructure with a unified cloud fabric that brings all pieces together in building-block style. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "NexCOBOT Scaling at the Edge Video",
        time: "9:55",
        text: "Functional safety control platform for autonomous mobile robots. ",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo20', pdfvideo20);

const pdfmaterial30 = [
    {
        id: 1,
        title: "7 StarLake Smart Traffic Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Sycai Medical Pancreatic Imaging Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "CathexisVision Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "AerVision AerWatch Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Irisity IRIS Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Profet AI AutoML Platform Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Axiomtek AMR Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "IBM Watson NLU Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Vistry Discrn Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "Ignitarium TYQ-i Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "SeeWise Smart Factory Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "LinkingMed Radiotherapy Planning Solution Brief",
        img: "pdf2.png",
        link: "",
    },

]

createpdf('D_pdfmaterial30', pdfmaterial30);


// netown babybot smart health

const pdfvideo21 = [
    {
        id: 1,
        title: "CoreAVI Edge Testimonial Video",
        time: "2:13",
        text: "Intel edge AI testimonial by Neil Stroud, VP of Marketing and Business Development at CoreAVI.",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "Epic iO Edge Testimonial Video",
        time: "2:07",
        text: "Intel edge AI testimonial by Ken Mills, CEO of Epic IO, IntelliSite and Broad Sky Networks. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "Luxonis Edge Testimonial Video",
        time: "2:14",
        text: "Intel edge AI testimonial by Brandon Gilles, founder and CEO of Luxonis. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "Vispera Edge Testimonial Video",
        time: "2:09",
        text: "Intel edge AI testimonial video by Erdem Yoruk, CTO at Vispera Information Technologies Co.. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "Cognitifai Edge Testimonial Video",
        time: "2:12",
        text: "Intel edge AI testimonial by Kanishka Nithin, co-founder and CEO at Cognitifai. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "NodeWeaver Partner Chat Video",
        time: "12:34",
        text: "NodeWeaver bridges the world of private cloud platforms and hyperconverged infrastructure with a unified cloud fabric that brings all pieces together in building-block style. ",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo21', pdfvideo21);

const pdfmaterial31 = [
    {
        id: 1,
        title: "Meet Today’s Retail Challenges",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Reap the Benefits of IT/OT Convergence",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "FOX Sports Delivers World-Class Viewing Experience",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "AIX-COVNET: AI and Visualization Fight COVID-19",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "LTIMindtree Optimizes AI-Enabled Chatbot Abilities",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "JAXA Launches Multi-cluster TOKI Supercomputer",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Artificial Intelligence (AI) in Higher Education - Intel",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "MetaApp Revamps AI-Based Recommendation System",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Equideum Health: Revolutionizing Health Data",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "How AI Will Revolutionize the Computing Experience",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Google Cloud Platform and Intel® AI",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "How to Choose High Performance Computing (HPC) Processors - Intel",
        img: "pdf2.png",
        link: "",
    },

]

createpdf('D_pdfmaterial31', pdfmaterial31);

// coreavi partners

const pdfmaterial32 = [
    {
        id: 1,
        title: "iSIZE BitClear Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Accelerating AI on Intel® Xeon® Scalable Processors",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Lucas A. Wilson, Ph.D.",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Konstantin Rodyushkin",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Neslihan Köse Cihangir",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Melanie Hart Buehler",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Deci.AI Deep Learning Platform Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Sailing the Seas of Autonomous Shipping",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Dina Suehiro Jones",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "Video Wall on IA Whitepaper",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Federated Learning for Medical Imaging",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Unlocking DL Performance with nGraph",
        img: "pdf2.png",
        link: "",
    },

]

createpdf('D_pdfmaterial32', pdfmaterial32);

// thunadersoft partner chat video

const pdfmaterial33 = [
    {
        id: 1,
        title: "PMY Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "ICURO Semiconductor Manufacturing Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "iOmniscient IQ Suite Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Ignitarium TYQ-i Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Ignitarium TYQ-i Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Siena Analytics Insights Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Ombori Grid SaaS Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Vispera Shelfsight Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Pathr.ai Supermarket Operations Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "Extreme Vision Smart Traffic Violation Review Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Intel-Enabled AI from Sensormatic Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Quividi Audience Measurement Platform Solution Brief",
        img: "pdf2.png",
        link: "",
    },

]

createpdf('D_pdfmaterial33', pdfmaterial33);

// nexaiot scaling 

const pdfmaterial34 = [
    {
        id: 1,
        title: "ICURO Mobile Robots AI Edge Platform Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Hitachi Industrial Edge Computer",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "AAEON Technology Inc.",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Microvision Intelligent Manufacturing Technology",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "JWIPC E099*",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "What Is Discrete Manufacturing? IIoT in Manufacturing - Intel",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "SECO JULIET COM Express® with the Intel® Xeon® D-1700 Processor",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "ST Engineering Video Analytics White Paper",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Advantech EI-52",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "WaitTime Crowd Intelligence Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "NexCOBOT SCB100 Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "4th Gen Intel® Xeon® Scalable Processors for IoT Infographic",
        img: "pdf2.png",
        link: "",
    },
]

createpdf('D_pdfmaterial34', pdfmaterial34);

// nexaiot scaling 

const pdfmaterial35 = [
    {
        id: 1,
        title: "Intel® AI: In Production | Success Stories",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "iSIZE BitClear Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Deci.AI Deep Learning Platform Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Video Wall on IA Whitepaper",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Developer Resources for Retail",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Machine Vision Technology",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Braemac",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "DSIPC BU11D",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Uzel Information US-M5520*",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "byteLAKE",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Cathexis",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "XZSTEAM",
        img: "pdf2.png",
        link: "",
    },
]

createpdf('D_pdfmaterial35', pdfmaterial35);

// broox

const pdfvideo26 = [
    {
        id: 1,
        title: "WaitTime Scaling at the Edge Video",
        time: "18:16",
        text: "WaitTime is a patented, real-time and historical artificial intelligence software that uses state-of-the-art imaging techniques to monitor crowd behavior in large scale venues.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "13th Gen Intel® Core™ Processors for IoT Edge Overview Video",
        time: "2:41",
        text: "Accelerate time to value for IoT with more options, performance and features for AI, analytics, computer vision, and industrial solutions at the edge.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "Advantech Veridify Scaling at the Edge Video",
        time: "10:12",
        text: "Making industrial IoT and smart buildings cyber safe.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "Cognitifai Edge Testimonial Video",
        time: "2:12",
        text: "Intel edge AI testimonial by Kanishka Nithin, co-founder and CEO at Cognitifai. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "Megh Computing Edge Testimonial Video",
        time: "2:14",
        text: "Intel edge AI testimonial by Prabhat K Gupta, founder and CEO of Megh Computing. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "NexAIoT Scaling at the Edge Video",
        time: "6:55",
        text: "Delivering user-centric service with smart autonomous mobile robots (AMR). ",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo26', pdfvideo26);



const pdfmaterial36 = [
    {
        id: 1,
        title: "LinkingMed Radiotherapy Planning Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "JLK MEDIHUB CXR Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "SILO AI Weather Insights Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Netown Babybot Smart Health Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "NexAIoT AMR Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "GDDi Algorithms Defined AIBox Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Visionatics Panel Inspection Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "AerVision AerWatch Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Pratexo Studio Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "GIBots DigiDoc White Paper",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "SHELFIE White Paper",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Satsafeti Intelligent Conveyor Partner Brief",
        img: "pdf2.png",
        link: "",
    },

]

createpdf('D_pdfmaterial36', pdfmaterial36)

// waittime

const pdfvideo27 = [
    {
        id: 1,
        title: "EPIC IO Edge Testimonial Video",
        time: "2:07",
        text: "Intel edge AI testimonial by Ken Mills, CEO of Epic IO, IntelliSite and Broad Sky Networks. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "Cognitifai Edge Testimonial Video",
        time: "2:12",
        text: "Intel edge AI testimonial by Kanishka Nithin, co-founder and CEO at Cognitifai. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "NexCOBOT Scaling at the Edge Video",
        time: "9:55",
        text: "Functional safety control platform for autonomous mobile robots.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "Intel® AI: In Production: CrowdOptic Demo Video",
        time: "6:57",
        text: "This system uses AI and triangulation algorithms at the network edge to analyze and redirect cameras. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "C2RO Partner Chat Video",
        time: "22:06",
        text: "Collaboration between Intel and C2RO has enabled 'Journey-to-Touch Analysis' scalable to thousands of enterprise locations. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "meldCX Partner Chat Video",
        time: "6:55",
        text: "Measuring how people work, shop, learn, and play in physical spaces without the need for complex development.  ",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo27', pdfvideo27);



const pdfmaterial37 = [
    {
        id: 1,
        title: "WaitTime Platform Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "C2RO ENTERA Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "SHELFIE Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "SHELFIE White Paper",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Vistry Discrn Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "iGenius Crystal Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Enhancing worker safety and improving productivity for manufacturers...",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "IBM Watson NLU Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "IBM Watson NLU Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "CathexisVision Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "SAIMOS Video Analytics Solution Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Cathexis CathexisVision Solution Brief",
        img: "pdf2.png",
        link: "",
    },

]

createpdf('D_pdfmaterial37', pdfmaterial37)

// shelfie

const pdfvideo28 = [
    {
        id: 1,
        title: "EPIC IO Edge Testimonial Video",
        time: "2:07",
        text: "Intel edge AI testimonial by Ken Mills, CEO of Epic IO, IntelliSite and Broad Sky Networks. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "Cognitifai Edge Testimonial Video",
        time: "2:12",
        text: "Intel edge AI testimonial by Kanishka Nithin, co-founder and CEO at Cognitifai. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "NexCOBOT Scaling at the Edge Video",
        time: "9:55",
        text: "Functional safety control platform for autonomous mobile robots.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "Intel® AI: In Production: CrowdOptic Demo Video",
        time: "6:57",
        text: "This system uses AI and triangulation algorithms at the network edge to analyze and redirect cameras. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "C2RO Partner Chat Video",
        time: "22:06",
        text: "Collaboration between Intel and C2RO has enabled 'Journey-to-Touch Analysis' scalable to thousands of enterprise locations. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "meldCX Partner Chat Video",
        time: "6:55",
        text: "Measuring how people work, shop, learn, and play in physical spaces without the need for complex development.  ",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo28', pdfvideo28);



const pdfmaterial38 = [
    {
        id: 1,
        title: "LinkingMed Radiotherapy Planning Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "JLK MEDIHUB CXR Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "SILO AI Weather Insights Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Netown Babybot Smart Health Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "NexAIoT AMR Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "GDDi Algorithms Defined AIBox Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Visionatics Panel Inspection Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "AerVision AerWatch Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Pratexo Studio Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "GIBots DigiDoc White Paper",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Satsafeti Intelligent Conveyor Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Beseye AI Video Analysis Solution Brief",
        img: "pdf2.png",
        link: "",
    },

]

createpdf('D_pdfmaterial38', pdfmaterial38)

// vistry

const pdfvideo29 = [
    {
        id: 1,
        title: "Intel® AI: In Production: CrowdOptic Demo Video",
        time: "6:57",
        text: "This system uses AI and triangulation algorithms at the network edge to analyze and redirect cameras. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "C2RO Partner Chat Video",
        time: "22:06",
        text: "Collaboration between Intel and C2RO has enabled 'Journey-to-Touch Analysis' scalable to thousands of enterprise locations. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "Luxonis Edge Testimonial Video",
        time: "2:14",
        text: "Intel edge AI testimonial by Brandon Gilles, founder and CEO of Luxonis. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "CoreAVI Edge Testimonial Video",
        time: "2:13",
        text: "Intel edge AI testimonial by Neil Stroud, VP of Marketing and Business Development at CoreAVI.",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "Tech Data Scaling at the Edge",
        time: "",
        text: "Scaling IoT Solutions through the Power of Strategic Alliance.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "ThunderSoft Partner Chat Video",
        time: "21:09",
        text: "ThunderSoft smart building solution supports connection and communication with smart building IoT devices such as sensors, devices and building automation systems.   ",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo29', pdfvideo29);



const pdfmaterial39 = [
    {
        id: 1,
        title: "Ignitarium TYQ-i Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Beseye AI Video Analysis Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "SHELFIE Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Irida Labs PerCV.ai Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "PM AM Corporation i3Di Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Profet AI AutoML Platform Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "LinkingMed Radiotherapy Planning Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Irisity IRIS Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Sycai Medical Pancreatic Imaging Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "LinkingMed Radiotherapy Planning Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "JLK MEDIHUB CXR Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "SILO AI Weather Insights Solution Brief",
        img: "pdf2.png",
        link: "",
    },

]

createpdf('D_pdfmaterial39', pdfmaterial39)

// pmy solution

const pdfvideo30 = [
    {
        id: 1,
        title: "C2RO Partner Chat Video",
        time: "22:06",
        text: "Collaboration between Intel and C2RO has enabled 'Journey-to-Touch Analysis' scalable to thousands of enterprise locations. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "ThunderSoft Partner Chat Video",
        time: "21:09",
        text: "ThunderSoft smart building solution supports connection and communication with smart building IoT devices such as sensors, devices and building automation systems.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "meldCX Partner Chat Video",
        time: "",
        text: "Measuring how people work, shop, learn, and play in physical spaces without the need for complex development.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "NEXCOM Scaling at the Edge Video",
        time: "4:49",
        text: "NEXCOM 5G uCPE for Virtual edge services management. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "Tech Data Scaling at the Edge",
        time: "",
        text: "Scaling IoT Solutions through the Power of Strategic Alliance.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "Intel® AI: In Production: Cortexica Vision Systems Ltd. Demo Video",
        time: "1:01",
        text: "This solution improves compliance, reporting, and operational efficiencies while helping reduce liability and operational down times.",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo30', pdfvideo30);



const pdfmaterial40 = [
    {
        id: 1,
        title: "Ignitarium TYQ-i Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Pathr.ai Supermarket Operations Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "WaitTime Platform Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Viso AI Viso Suite Solution",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Enhancing worker safety and improving productivity for manufacturers...",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "WaitTime Crowd Intelligence Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "OnePlan Venue Experience Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "AerVision AerWatch Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "SeeWise Smart Factory Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "JelloX MetaLite Digital Pathology Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "ST Engineering Video Analytics White Paper",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "IBM Watson NLU Solution Brief",
        img: "pdf2.png",
        link: "",
    },

]

createpdf('D_pdfmaterial40', pdfmaterial40)

// neuroo solution

const pdfvideo31 = [
    {
        id: 1,
        title: "C2RO Partner Chat Video",
        time: "22:06",
        text: "Collaboration between Intel and C2RO has enabled 'Journey-to-Touch Analysis' scalable to thousands of enterprise locations. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "iBASE Digital Embedded World",
        time: "",
        text: "A look at the iBASE IB953 3.5 inch single board computer and SI-654-N 8K digital signage player. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "Geek+ Smart Logistics Solution Partner Chat",
        time: "",
        text: "How Geek+ realizes flexible, reliable, and highly efficient logistics and supply chain management. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "NEXCOM Scaling at the Edge Video",
        time: "4:49",
        text: "NEXCOM 5G uCPE for Virtual edge services management. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "HTC Scaling at the Edge Video",
        time: "",
        text: "HTC private 5G network solution. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "Intel® AI: In Production: Cortexica Vision Systems Ltd. Demo Video",
        time: "1:01",
        text: "This solution improves compliance, reporting, and operational efficiencies while helping reduce liability and operational down times.",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo31', pdfvideo31);



const pdfmaterial41 = [
    {
        id: 1,
        title: "Pathr.ai Supermarket Operations Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "WaitTime Platform Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Viso AI Viso Suite Solution",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Enhancing worker safety and improving productivity for manufacturers...",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "WaitTime Crowd Intelligence Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "OnePlan Venue Experience Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "AerVision AerWatch Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "SeeWise Smart Factory Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "JelloX MetaLite Digital Pathology Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "ST Engineering Video Analytics White Paper",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "IBM Watson NLU Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Siena Analytics Insights Solution Brief",
        img: "pdf2.png",
        link: "",
    },
]

createpdf('D_pdfmaterial41', pdfmaterial41)

// igenius crystal partner

const pdfvideo32 = [
    {
        id: 1,
        title: "Epic iO Edge Testimonial Video",
        time: "22:06",
        text: "Intel edge AI testimonial by Ken Mills, CEO of Epic IO, IntelliSite and Broad Sky Networks. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "CoreAVI Edge Testimonial Video",
        time: "",
        text: "Intel edge AI testimonial by Neil Stroud, VP of Marketing and Business Development at CoreAVI. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "EPIC IO Edge Testimonial Video",
        time: "",
        text: "Intel edge AI testimonial by Ken Mills, CEO of Epic IO, IntelliSite and Broad Sky Networks.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "Vispera Edge Testimonial Video",
        time: "4:49",
        text: "Intel edge AI testimonial video by Erdem Yoruk, CTO at Vispera Information Technologies Co..  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "Cognitifai Edge Testimonial Video",
        time: "",
        text: "Intel edge AI testimonial by Kanishka Nithin, co-founder and CEO at Cognitifai.",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "WaitTime Scaling at the Edge Video",
        time: "1:01",
        text: "WaitTime is a patented, real-time and historical artificial intelligence software that uses state-of-the-art imaging techniques to monitor crowd behavior in large scale venues. ",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo32', pdfvideo32);



const pdfmaterial42 = [
    {
        id: 1,
        title: "LinkingMed Radiotherapy Planning Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "JLK MEDIHUB CXR Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "SILO AI Weather Insights Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Netown Babybot Smart Health Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "NexAIoT AMR Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "GDDi Algorithms Defined AIBox Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Visionatics Panel Inspection Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "AerVision AerWatch Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Pratexo Studio Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "GIBots DigiDoc White Paper",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "SHELFIE White Paper",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Satsafeti Intelligent Conveyor Partner Brief",
        img: "pdf2.png",
        link: "",
    },
]

createpdf('D_pdfmaterial42', pdfmaterial42)

// dynamic device person

const pdfvideo33 = [
    {
        id: 1,
        title: "Changing RAN Deployments Offers Transformation for vRAN",
        time: "3:59",
        text: "Changing RAN Deployments Offers Transformation for vRAN",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "Ethernet Port Configuration Tool",
        time: "3:13",
        text: "This video provides an overview of the Ethernet Port Configuration Tool, which helps IT Managers bring versatility and flexibility into the data center, and at the same time reduces complexity.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "Intel and Tile* Bluetooth® Technology Help Find Your Lost Things",
        time: "",
        text: "Intel and Tile* Bluetooth® Technology Help Find Your Lost Things",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "Intel's Next Generation FPGAs 224 Gbps-PAM4-LR Transceiver Video",
        time: "13:44",
        text: "The 224 Gbps-PAM4-LR transceiver meets high-speed transceiver requirements in cloud, network, data center, AI, and more.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "Grow Revenue with AI",
        time: "30:11",
        text: "30 minute webinar with IDC, and Intel for Architects and Devops on how to grow revenue with AI. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "Fireside Chat with Telefonica",
        time: "8:15",
        text: "Intel and Telefonica discuss collaborations in driving sustainability and performance in 5G networks.  ",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo33', pdfvideo33);



const pdfmaterial43 = [
    {
        id: 1,
        title: "Application Device Queues (ADQ) Resource Center",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Reap the Benefits of IT/OT Convergence",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Meet Today’s Retail Challenges",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Network Connectivity in the Data Center",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Scale to Meet Microsoft SQL Demands with Azure",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "50% More Website Traffic and Services Azure",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Improve Microsoft SQL Service Times with Azure",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "OpenFoam Performance on AWS",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "MySQL on Azure Optimized via Intel® Technology",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "Ansys LS-DYNA on Azure Instances",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Ansys LS-DYNA on Azure Instances",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "STAC-A2 and 3rd Gen Intel Xeon Scalable Processors",
        img: "pdf2.png",
        link: "",
    },
]

createpdf('D_pdfmaterial43', pdfmaterial43)


// threat sense foe utilities solution

const pdfvideo34 = [
    {
        id: 1,
        title: "Neuromorphic Computing: Kapoho Point Development Board and Lava...",
        time: "1:18",
        text: "This demo introduces Intel’s latest neuromorphic innovation, Kapoho Point. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "Agilex™ FPGA Portfolio Overview Video",
        time: "3:37",
        text: "Watch this video to learn about the expanded Agilex™ FPGA portfolio.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "4th Gen Intel® Xeon® Scalable Processors for IoT Edge Video",
        time: "3:34",
        text: "4th Gen Intel® Xeon® Scalable processors deliver increased performance to accelerate IoT and edge deployments and drive faster time to results. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "So You Found a Vulnerability",
        time: "6:27",
        text: "So You Found a Vulnerability ",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "Security Mindset Journey",
        time: "5:23",
        text: "Learn more about Intel's security mindset journey.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "Exploring the Untapped Potential of AI and Computer Vision",
        time: "38:31",
        text: "Exploring the untapped potential of AI and computer vision + how these technologies can pave the way for a visionary future.   ",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo34', pdfvideo34);


const pdfmaterial44 = [
    {
        id: 1,
        title: "Edge Computing Solutions and Technologies - Intel",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Energy Transition Solutions - Intel",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Southern California Edison Modernizes Future Grid",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Intel® Tiber™ Edge Platform",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Intel® SceneScape",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Machine Vision Technology",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "What Is the Network Edge? — Intel",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Edge AI: Bring AI to Your Edge Computing Environment - Intel",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "What Is Edge Computing? — Intel",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "Optimize Throughput and Power Efficiency for NGFWs",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Industrial IoT Security - Intel",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Government Technology and Digital Transformation Solutions - Intel",
        img: "pdf2.png",
        link: "",
    },
]

createpdf('D_pdfmaterial44', pdfmaterial44)

// five challenges hinder microservices paper

const pdfvideo35 = [
    {
        id: 1,
        title: "Accelerate Your Cloud with Intel Technologies",
        time: "1:19",
        text: "Intel Accelerators built in on 4th gen Intel® Xeon® Scalable processors are helping activate mature and agile cloud strategies across workloads.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "Maximize Value with Better Performance and Efficiency",
        time: "2:32",
        text: "Modernize your tech to take advantage of AI, improve cybersecurity, and improve competitiveness. Enter new markets and surpass the competition.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "Intel Security Accelerators Video",
        time: "1:58",
        text: "4th Gen Intel® Xeon® Scalable processors deliver increased performance to accelerate IoT and edge deployments and drive faster time to results. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "Intel and Tile* Bluetooth® Technology Help Find Your Lost Things",
        time: "",
        text: "Find your lost things, including your next Intel®-based laptop, with the Tile* app or one of the Tile* Bluetooth® technology-enabled devices. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "Intel's Next Generation FPGAs 224 Gbps-PAM4-LR Transceiver Video",
        time: "13:34",
        text: "The 224 Gbps-PAM4-LR transceiver meets high-speed transceiver requirements in cloud, network, data center, AI, and more.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "Fireside Chat with Telefonica",
        time: "8:15",
        text: "Intel and Telefonica discuss collaborations in driving sustainability and performance in 5G networks. ",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo35', pdfvideo35);


const pdfmaterial45 = [
    {
        id: 1,
        title: "Reap the Benefits of IT/OT Convergence",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Network Connectivity in the Data Center",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Intel vPro®, Intel® Evo™ Edition Laptops",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Application Device Queues (ADQ) Resource Center",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Dynamic Device Personalization (DDP) Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Intel® Tiber™ Edge Platform: Transform Infrastructure Management",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Overcoming Developer Challenges with Microservices",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Meet Today’s Retail Challenges",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "ASP.NET on Azure Dsv5 VMs vs. Dv2 VMs",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "STAC-A2 and 3rd Gen Intel Xeon Scalable Processors",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Accelerated by Intel®",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Intel® Cloud.U – Comprehensive Cloud Training",
        img: "pdf2.png",
        link: "",
    },
]

createpdf('D_pdfmaterial45', pdfmaterial45)

// d_break-through-to-new-levels-of-insight-in-cloud

const pdfvideo36 = [
    {
        id: 1,
        title: "Fireside Chat with Telefonica",
        time: "8:15",
        text: "Intel and Telefonica discuss collaborations in driving sustainability and performance in 5G networks. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "Intel and Tile* Bluetooth® Technology Help Find Your Lost Things",
        time: "",
        text: "Find your lost things, including your next Intel®-based laptop, with the Tile* app or one of the Tile* Bluetooth® technology-enabled devices. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "Chips and Salsa Episode 29: STORM with Thais Moreira",
        time: "14:05",
        text: "Intel STORM Team: Thais Moreira. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "Intel's Next Generation FPGAs 224 Gbps-PAM4-LR Transceiver Video",
        time: "13:44",
        text: "The 224 Gbps-PAM4-LR transceiver meets high-speed transceiver requirements in cloud, network, data center, AI, and more. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "Chips and Salsa Episode 36: HW Sec Test of Time Award",
        time: "25:18",
        text: "Professor Srinivas Devadas and Professor Ed Suh discuss the paper they wrote over 20 years ago that won the Intel Test of Time Award in 2022. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "Chips and Salsa Episode 35: Intel Hardware Security Academic Award",
        time: "26:55",
        text: "CRob and Jerry interview the winners of Intel's 2022 Hardware Security Academic Award. ",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo36', pdfvideo36);


const pdfmaterial46 = [
    {
        id: 1,
        title: "Resilient Enterprise with Intel and SAP Solutions",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Deliver Business Agility Through Well-Architected Solutions",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "T-Systems NA Helps Customers on the Road to Cloud",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Intel IT Uses Scale Up Memory for SAP HANA* Performance",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Modernizing the Power Grid with Software Defined Infrastructure",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Accelerate with Xeon",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Accelerate AI and Security Workloads",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Accelerate Network and Edge Transformation with E-cores",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Level Up Network and Edge Scalability with E-cores",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "Share Data While Helping to Protect User Privacy",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Intel® Platform Firmware Resilience Overview",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "4th Gen Intel® Xeon® Scalable Processors with Intel® vRAN Boost",
        img: "pdf2.png",
        link: "",
    },
]

createpdf('D_pdfmaterial46', pdfmaterial46)

// d_resilient-intelligent-industry-leading-solutions

const pdfvideo37 = [
    {
        id: 1,
        title: "Fireside Chat with Telefonica",
        time: "8:15",
        text: "Intel and Telefonica discuss collaborations in driving sustainability and performance in 5G networks. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "Better Application and Cloud Performance with Vcinity (Demo)",
        time: "7:28",
        text: "See how to improve app and cloud performance with better data infrastructure via access to data from anywhere, in real time, with Vcinity and Intel. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "Congatec COM-HPC Ecosystem Partner Video",
        time: "17:48",
        text: "COM-HPC Modules Leverage Intel® Xeon® D Processor for Server-Level Performance at the Edge ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "Intel® 5G Solution 5000 Consumer",
        time: "",
        text: "Introducing the 5G Solution 5000, delivering game-changing wireless performance to PCs.",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "Ethernet Port Configuration Tool",
        time: "3:13",
        text: "This video provides an overview of the Ethernet Port Configuration Tool, which helps IT Managers bring versatility and flexibility into the data center, and at the same time reduces complexity. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "Chips and Salsa Episode 29: STORM with Thais Moreira",
        time: "14:05",
        text: "Intel STORM Team: Thais Moreira.",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo37', pdfvideo37);


const pdfmaterial47 = [
    {
        id: 1,
        title: "Intel and SAP: Break Through to New Levels of Insight in the Cloud",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Deliver Business Agility Through Well-Architected Solutions",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "T-Systems NA Helps Customers on the Road to Cloud",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Intel IT Uses Scale Up Memory for SAP HANA* Performance",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Accelerate AI and Security Workloads",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Modernizing the Power Grid with Software Defined Infrastructure",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Accelerate with Xeon",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Accelerate Network and Edge Transformation with E-cores",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Level Up Network and Edge Scalability with E-cores",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "Share Data While Helping to Protect User Privacy",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Intel® Platform Firmware Resilience Overview",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "4th Gen Intel® Xeon® Scalable Processors with Intel® vRAN Boost",
        img: "pdf2.png",
        link: "",
    },
]

createpdf('D_pdfmaterial47', pdfmaterial47)

// d_critical-infrastructure-intelligence-packages

const pdfvideo38 = [
    {
        id: 1,
        title: "Intel® AI: In Production: CrowdOptic Demo Video",
        time: "6:57",
        text: "This system uses AI and triangulation algorithms at the network edge to analyze and redirect cameras. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "WaitTime Scaling at the Edge Video",
        time: "18:16",
        text: "WaitTime is a patented, real-time and historical artificial intelligence software that uses state-of-the-art imaging techniques to monitor crowd behavior in large scale venues. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "Intel® AI: In Production: Outdu MediaTech Pvt. Ltd. Demo Video",
        time: "4:54",
        text: "This AI solution uses analytics at the edge to customize and transform the retail customer journey while helping drive business success. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "Intel® AI: In Production: Gorilla Technology Demo Video",
        time: "5:46",
        text: "See how this platform performs facial recognition, site detection, license plate recognition, and loitering detection analytics on multiple channels. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "Intel® AI: In Production: Cortexica Vision Systems Ltd. Demo Video",
        time: "1:01",
        text: "This solution improves compliance, reporting, and operational efficiencies while helping reduce liability and operational down times.",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "Intel® AI: In Production: Matroid Inc. Demo Video",
        time: "3:25",
        text: "With this solution, users create computer vision detectors to recognize people, events, and objects.",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo38', pdfvideo38);


const pdfmaterial48 = [
    {
        id: 1,
        title: "Intel and SAP Partnership",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Speed Decision-Making with High-Performance SAP Hana Instances",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Total Economic Impact of SUSE for SAP and Intel Environments",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Increase Compliance, Financial Results for Faster Time to Insights",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Forrester Total Economic Impact Infographic for SUSE, SAP, & Intel",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Share Data While Helping to Protect User Privacy",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Intel & SAP: Protect Confidential Customs Data",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Jide Ramps Up Manufacturing While Maintaining Quality",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Developer Resources from Intel and IBM*",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "Maximize TensorFlow* Performance on CPU: Considerations and...",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Intel Accelerates PadChest and fMRI Models on Azure ML",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "3 Approaches to Optimizing Machine Learning Applications",
        img: "pdf2.png",
        link: "",
    },
]

createpdf('D_pdfmaterial48', pdfmaterial48)

// d_asus-ecosystem-partner-video

const pdfmaterial49 = [
    {
        id: 1,
        title: "Cathexis",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "a2 Technology",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Uzel Information US-M5520*",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "byteLAKE",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Kibernetika Inc.",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Vulcan AI",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Apuqi Intelligent Manufacturing",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Mech-Mind Robotics Technologies Ltd.",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "ASTERIA Corporation",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "XZSTEAM",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Asseco Data Systems S.A.",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "AAEON PICO-TGU4-SEMI",
        img: "pdf2.png",
        link: "",
    },
]

createpdf('D_pdfmaterial49', pdfmaterial49);

// d_portwell-ecosystem-partner-video

const pdfmaterial50 = [
    {
        id: 1,
        title: "UVic: New Cloud Computing and ML Resources",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Apuqi Intelligent Manufacturing",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "SandStar Computer Vision",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "DFI Digital Embedded World",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "WEIBU Information Inc.",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "ThunderSoft Software Technology Co Ltd",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Baüne Ecosystems Inc.",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Jian 24 Smart Retail",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "12th Gen Intel Core Processor for IoT Announced",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "Beijing Winsense Technology Co Ltd",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "XINJE Automation",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Lecoo AI Technologies",
        img: "pdf2.png",
        link: "",
    },
]

createpdf('D_pdfmaterial50', pdfmaterial50);

// d_windriver-ecosystem-partner-video

const pdfmaterial51 = [
    {
        id: 1,
        title: "4tiitoo NUIA Eye Control Partner Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Cathexis",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "a2 Technology",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Uzel Information US-M5520*",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "AAEON PICO-TGU4-SEMI",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "byteLAKE",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Kibernetika Inc.",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Vulcan AI",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "ASTERIA Corporation",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "XZSTEAM",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Zeblok Computational Ai-MicroCloud Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Asseco Data Systems S.A.",
        img: "pdf2.png",
        link: "",
    },
]

createpdf('D_pdfmaterial51', pdfmaterial51);

// d_12th-gen-iot-mobile-desktop-processors-infographic

const pdfvideo52 = [
    {
        id: 1,
        title: "Hellometer with 13th Gen Intel Core Mobile Processor Demo Video",
        time: "3:48",
        text: "Video demonstrating how 13th Gen Intel Core mobile processors enables Hellometer to deliver more intelligence and performance for restaurants. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "4th Gen Intel Xeon Scalable processors Siemens Healthineers video",
        time: "4:31",
        text: "4th Gen Intel Xeon Scalable processor AI acceleration, helps Siemens Healthineers to improve performance and sustainability.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "Intel Atom® Processors x7000E Series Overview Video",
        time: "2:53",
        text: "Intel Atom® processors x7000E series and Intel® Core™ i3 processors break new ground for x86 processors in the 6W to 15W base processor power range.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "13th Gen Intel® Core™ Processors for IoT Edge Overview Video",
        time: "2:41",
        text: "Accelerate time to value for IoT with more options, performance and features for AI, analytics, computer vision, and industrial solutions at the edge. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "13th Gen Intel Core Mobile Processors with BiriminD Demo Video",
        time: "3:41",
        text: "Learn how 13th Gen Intel Core processors improve BirminD manufacturing efficiency and performance for industrial wastewater treatment.   ",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "4th Gen Intel® Xeon® Scalable Processors for IoT Edge Video",
        time: "3:34",
        text: "4th Gen Intel® Xeon® Scalable processors deliver increased performance to accelerate IoT and edge deployments and drive faster time to results. ",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo52', pdfvideo52);


const pdfmaterial52 = [
    {
        id: 1,
        title: "12th Gen Intel® Core™ Desktop Processors for Edge Performance",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "12th Gen Intel® Core™ Mobile Processors for Edge AI and Media",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "12th Gen Intel® Core™ Processor for IoT Edge – Infographic",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Intel Atom® x7000E Series, Intel® Core™ i3 Processors Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Enhanced Speed and Capability with 13th Gen Intel® Core™ Processors",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "13th Gen Intel® Core™ Mobile CPUs for AMRs and Optical Inspection",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Kontron COMs with 13th Gen Intel® Core™ Mobile Processors",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "UP Squared Pro 7000 Board with Intel® Processors Brief ‒ Intel",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "12th Gen Intel® Core™ Processors for IoT Edge Product Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "Baüne Ecosystems Inc.",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Guangdong Rosmart Technology Co., Ltd.",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "12th Gen Intel Core Processor for IoT Announced",
        img: "pdf2.png",
        link: "",
    },
]

createpdf('D_pdfmaterial52', pdfmaterial52)

// d_12th-gen-iot-mobile-desktop-processors-infographic

const pdfvideo53 = [
    {
        id: 1,
        title: "Hellometer with 13th Gen Intel Core Mobile Processor Demo Video",
        time: "3:48",
        text: "Video demonstrating how 13th Gen Intel Core mobile processors enables Hellometer to deliver more intelligence and performance for restaurants. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "4th Gen Intel Xeon Scalable processors Siemens Healthineers video",
        time: "4:31",
        text: "4th Gen Intel Xeon Scalable processor AI acceleration, helps Siemens Healthineers to improve performance and sustainability.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "Intel Atom® Processors x7000E Series Overview Video",
        time: "2:53",
        text: "Intel Atom® processors x7000E series and Intel® Core™ i3 processors break new ground for x86 processors in the 6W to 15W base processor power range.  ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "13th Gen Intel® Core™ Processors for IoT Edge Overview Video",
        time: "2:41",
        text: "Accelerate time to value for IoT with more options, performance and features for AI, analytics, computer vision, and industrial solutions at the edge. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "13th Gen Intel Core Mobile Processors with BiriminD Demo Video",
        time: "3:41",
        text: "Learn how 13th Gen Intel Core processors improve BirminD manufacturing efficiency and performance for industrial wastewater treatment.   ",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "4th Gen Intel® Xeon® Scalable Processors for IoT Edge Video",
        time: "3:34",
        text: "4th Gen Intel® Xeon® Scalable processors deliver increased performance to accelerate IoT and edge deployments and drive faster time to results. ",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo53', pdfvideo53);


const pdfmaterial53 = [
    {
        id: 1,
        title: "12th Gen Intel® Core™ Desktop Processors for Edge Performance",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "12th Gen Intel® Core™ Mobile Processors for Edge AI and Media",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "12th Gen Intel® Core™ Processor for IoT Edge – Infographic",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Enhanced Speed and Capability with 13th Gen Intel® Core™ Processors",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "UP Squared Pro 7000 Board with Intel® Processors Brief ‒ Intel",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "12th Gen Intel® Core™ Processors for IoT Edge Product Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Intel Atom® x7000E Series, Intel® Core™ i3 Processors Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Baüne Ecosystems Inc.",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Guangdong Rosmart Technology Co., Ltd.",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "12th Gen Intel Core Processor for IoT Announced",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Jian 24 Smart Retail",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "10th Gen Intel® Core™ Desktop Processors",
        img: "pdf2.png",
        link: "",
    },
]

createpdf('D_pdfmaterial53', pdfmaterial53)

// d_iot-applications-infographic

const pdfvideo54 = [
    {
        id: 1,
        title: "Intel® Xeon® D Processors Overview Video",
        time: "",
        text: "Put Intel® Xeon® platform performance to work in rugged edge and IoT applications with Intel® Xeon® D-1700 and D-2700 processors. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 2,
        title: "IoT Video Analytics with Intel® Xeon® D Processor Demo",
        time: "",
        text: "Intel® Xeon® D processors are ideal for live video analytics at the edge, efficiently scaling from a few video streams to many. ",
        img: "video15.png",
        link: "",
    },
    {
        id: 3,
        title: "Computer Vision in Retail",
        time: "3:56",
        text: "Computer Vision in Retail ",
        img: "video15.png",
        link: "",
    },
    {
        id: 4,
        title: "Computer Vision in Healthcare",
        time: "5:34",
        text: "Computer Vision in Healthcare ",
        img: "video15.png",
        link: "",
    },
    {
        id: 5,
        title: "Computer Vision in Gaming",
        time: "3:34",
        text: "Computer Vision in Gaming ",
        img: "video15.png",
        link: "",
    },
    {
        id: 6,
        title: "Computer Vision in Sales and Marketing Support",
        time: "4:60",
        text: "4th Gen Intel® Xeon® Scalable processors deliver increased performance to accelerate IoT and edge deployments and drive faster time to results. ",
        img: "video15.png",
        link: "",
    },
]

createVideoGallery('D_pdfvideo54', pdfvideo54);


const pdfmaterial54 = [
    {
        id: 1,
        title: "Intel® Xeon® D-1700 and D-2700 Processors in BGA Packages",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Intel® Xeon® D-2700 and D-1700 Product Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Intel® Xeon® D Processor Is Built for the Edge",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Intel® Xeon® D Processor Is Built for the Edge",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "SECO JULIET COM Express® with the Intel® Xeon® D-1700 Processor",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Intel® Xeon® D Supplies the High-Performance You Need at the Edge",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "High-Efficiency Compute for Mid-Range vRAN Deployments",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Intel® Xeon® D Processors Power Congatec COM-HPC Edge Servers",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "High Performance and Density with Low Power at the Enterprise Edge",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "Ice Lake D Storage Solution Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Avnet Embedded MSC HSD-ILDL with Intel® Xeon® D-1700 Processor",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Intel® Xeon® D Processor Powers Kontron COM-HPC for the Edge",
        img: "pdf2.png",
        link: "",
    },
]

createpdf('D_pdfmaterial54', pdfmaterial54)

// d_iot-overview-video

const pdfmaterial55 = [
    {
        id: 1,
        title: "Intel® Xeon® D-1700 and D-2700 Processors Infographic",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Intel® oneAPI Collective Communications Library",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Edge AI – Intel",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Intel® Xeon® D-2700 and D-1700 Product Brief",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Intel® Xeon® D-1700 and D-2700 Processors in BGA Packages",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Intel® Xeon® D Processor Is Built for the Edge",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Intel® Xeon® D Processor Is Built for the Edge",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "SECO JULIET COM Express® with the Intel® Xeon® D-1700 Processor",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Intel® Xeon® D Supplies the High-Performance You Need at the Edge",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "High-Efficiency Compute for Mid-Range vRAN Deployments",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Intel® Xeon® D Processors Power Congatec COM-HPC Edge Servers",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "High Performance and Density with Low Power at the Enterprise Edge",
        img: "pdf2.png",
        link: "",
    },
]

createpdf('D_pdfmaterial55', pdfmaterial55)


// With Amazon and Intel Solutions, the aiScout app Connects Prospective...

let D_pdfmaterialamzon = document.getElementById('D_pdfmaterialamzon')

const pdfmaterialamzon = [
    {
        id: 1,
        title: "Amazon Web Services (AWS)",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "How Intel Wins with AWS",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "Run Threading Perspective from GUI",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "株式会社FNexs",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "Intel® Pentium® Silver and Intel® Celeron® Processor Datasheet Volume 2 of 2",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "Intel NAND Flash Memory MD128 - 7112 - MDDS",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "fsycl-targets",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Using Intel® oneMKL BLAS and LAPACK with PETSc",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "Wideband DDC Digital Down Converter",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "fsycl-targets",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "Examples for Linking a Fortran Application",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Examples for Linking a Fortran Application",
        img: "pdf2.png",
        link: "",
    },

]

if (D_pdfmaterialamzon) {
    for (let i = 0; i < pdfmaterialamzon.length; i++) {
        D_pdfmaterialamzon.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_box">
                        <div class="d-flex">
                            <div class="d_img me-1">
                                <img src="/img/darshan_image/${pdfmaterialamzon[i].img}"  alt="">
                            </div>
                            <h4><a href="">${pdfmaterialamzon[i].title}</a></h4>
                        </div>
                    </div>
                </div>`
    }
}

// With Amazon and Intel Solutions, the aiScout app Connects Prospective...

let D_pdfmaterialhuggigstudy = document.getElementById('D_pdfmaterialhuggigstudy')

const pdfmaterialhuggigstudy = [
    {
        id: 1,
        title: "AI In-Store Analytics",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 2,
        title: "Intel and Oracle Cloud Partnership",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 3,
        title: "5G Private Network Featured Partners and Offerings",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 4,
        title: "Microsoft Leverages Intel to Protect $25B in Customer Payments",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 5,
        title: "AI Reimagines Retail",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 6,
        title: "4th Gen Intel® Xeon® Scalable Processors",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 7,
        title: "Share Data While Helping to Protect User Privacy",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 8,
        title: "Trust Your Zero Trust Security Strategy",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 9,
        title: "AI Quick Service Restaurants",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 10,
        title: "AI Self Checkout",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 11,
        title: "AI Virtual Fitting Rooms",
        img: "pdf2.png",
        link: "",
    },
    {
        id: 12,
        title: "Intel and Nutanix Accelerate Infrastructure Modernization",
        img: "pdf2.png",
        link: "",
    },

]

if (D_pdfmaterialhuggigstudy) {
    for (let i = 0; i < pdfmaterialhuggigstudy.length; i++) {
        D_pdfmaterialhuggigstudy.innerHTML += `<div class="col-xs-12 col-ms-6 col-sm-4 col-md-3 col-xl-2">
                    <div class="d_box">
                        <div class="d-flex">
                            <div class="d_img me-1">
                                <img src="/img/darshan_image/${pdfmaterialhuggigstudy[i].img}"  alt="">
                            </div>
                            <h4><a href="">${pdfmaterialhuggigstudy[i].title}</a></h4>
                        </div>
                    </div>
                </div>`
    }
}
