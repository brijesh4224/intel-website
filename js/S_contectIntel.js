// let toggle = document.getElementById("toggle")
function toggle(n) {
    if (n == 1) {
      document.getElementById("ds_hide-show").style.display = "block";
      document.getElementById("ds_btn").style.fontWeight = "bold";
      document.getElementById("ds_li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_item").style.height = "392px";
      document.getElementById("ds_hide-show").scrollIntoView({ behavior: 'smooth', block:'nearest' });
  
      document.getElementById("ds_by-type-btn").style.fontWeight = ""
      document.getElementById("ds_by-type-li").style.backgroundColor = "";
      document.getElementById("ds_by-type").style.display = "none";
  
      document.getElementById("managers").style.display = "none";
      document.getElementById("ds_Anal-main").style.display = "none";
      document.getElementById("ds_bois-main").style.display = "none";
      document.getElementById("ds_bois-hardware-main").style.display = "none";
      document.getElementById("ds_boot-loader-main").style.display = "none";
      document.getElementById("ds-dynamic-main").style.display = "none";
      document.getElementById("ds_firm-main").style.display = "none";
      document.getElementById("ds_cable-main").style.display = "none";
      document.getElementById("ds_apps-main").style.display = "none";
      document.getElementById("ds_code-main").style.display = "none";
      document.getElementById("ds_compile-main").style.display = "none";
      document.getElementById("ds_contain-main").style.display = "none";
      document.getElementById("ds_deep-main").style.display = "none";
      document.getElementById("ds_infer-main").style.display = "none";
      document.getElementById("ds_train-main").style.display = "none";
      document.getElementById("ds_deploy-main").style.display = "none";
      document.getElementById("ds_machine-main").style.display = "none";
      document.getElementById("ds_valid-main").style.display = "none";
      document.getElementById("ds_nature-main").style.display = "none";
      document.getElementById("ds_oneapi-main").style.display = "none";
      document.getElementById("ds_open-main").style.display = "none";
      document.getElementById("ds_media-main").style.display = "none";
      document.getElementById("ds_media2-main").style.display = "none";
      document.getElementById("ds_stack-main").style.display = "none";
      document.getElementById("ds_data-main").style.display = "none";
      document.getElementById("ds_data2-main").style.display = "none";
      document.getElementById("ds_center-main").style.display = "none";
      document.getElementById("ds_debug-main").style.display = "none";
      document.getElementById("ds_service-main").style.display = "none";
      document.getElementById("ds_stream-main").style.display = "none";
      document.getElementById("ds_emul-main").style.display = "none";
      document.getElementById("ds_emulation-main").style.display = "none";
      document.getElementById("ds_emulation2-main").style.display = "none";
      document.getElementById("ds_fgpa-main").style.display = "none";
      document.getElementById("ds_fgpaTools-main").style.display = "none";
      document.getElementById("ds_embedded-main").style.display = "none";
      document.getElementById("ds_fgpaTools2-main").style.display = "none";
      document.getElementById("ds_prime-main").style.display = "none";
      document.getElementById("ds_prime2-main").style.display = "none";
      document.getElementById("ds_fgpaTools3-main").style.display = "none";
      document.getElementById("ds_frame-main").style.display = "none";
      document.getElementById("ds_helm-main").style.display = "none";
      document.getElementById("ds_secure-main").style.display = "none";
      document.getElementById("ds_kits-main").style.display = "none";
      document.getElementById("ds_kitsItem-main").style.display = "none";
      document.getElementById("ds_kitsItem2-main").style.display = "none";
      document.getElementById("ds_kitsItem3-main").style.display = "none";
      document.getElementById("ds_kitsItem4-main").style.display = "none";
      document.getElementById("ds_kitsItem5-main").style.display = "none";
      document.getElementById("ds_kitsItem6-main").style.display = "none";
      document.getElementById("ds_kitsItem7-main").style.display = "none";
      document.getElementById("ds_kitsItem8-main").style.display = "none";
      document.getElementById("ds_kitsItem9-main").style.display = "none";
      document.getElementById("ds_kitsItem10-main").style.display = "none";
      document.getElementById("ds_kitsItem11-main").style.display = "none";
      document.getElementById("ds_kitsItem12-main").style.display = "none";
      document.getElementById("ds_kitsItem13-main").style.display = "none";
      document.getElementById("ds_kuber-main").style.display = "none";
      document.getElementById("ds_legacy-main").style.display = "none";
      document.getElementById("ds_library-main").style.display = "none";
      document.getElementById("ds_libraries-main").style.display = "none";
      document.getElementById("ds_libraries2-main").style.display = "none";
      document.getElementById("ds_libraries3-main").style.display = "none";
      document.getElementById("ds_libraries4-main").style.display = "none";
      document.getElementById("ds_modal-main").style.display = "none";
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals18-main").style.display = "none";
      document.getElementById("ds_plug-main").style.display = "none";
      document.getElementById("ds_power-main").style.display = "none";
      document.getElementById("ds_powers-main").style.display = "none";
      document.getElementById("ds_product-main").style.display = "none";
      document.getElementById("ds_refer-main").style.display = "none";
      document.getElementById("ds_reference-main").style.display = "none";
      document.getElementById("ds_reference2-main").style.display = "none";
      document.getElementById("ds_reference3-main").style.display = "none";
      document.getElementById("ds_reference4-main").style.display = "none";
      document.getElementById("ds_reference5-main").style.display = "none";
      document.getElementById("ds_reference6-main").style.display = "none";
      document.getElementById("ds_reference7-main").style.display = "none";
      document.getElementById("ds_reference8-main").style.display = "none";
      document.getElementById("ds_reference9-main").style.display = "none";
      document.getElementById("ds_reference10-main").style.display = "none";
      document.getElementById("ds_run-main").style.display = "none";
      document.getElementById("ds_validation-main").style.display = "none";
      document.getElementById("ds_validHard-main").style.display = "none";
      document.getElementById("ds_validHard2-main").style.display = "none";
      document.getElementById("ds_validHard3-main").style.display = "none";
      document.getElementById("managers").style.display = "none";
  
      document.getElementById("ds_by-operating-main").style.display = "none";
      document.getElementById("ds_by-operating-li").style.backgroundColor = "";
      document.getElementById("ds_by-operating-btn").style.fontWeight = "";
  
      document.getElementById("ds_operating-main").style.display = "none";
      document.getElementById("ds_operating2-main").style.display = "none";
      document.getElementById("ds_operating3-main").style.display = "none";
      document.getElementById("ds_operating4-main").style.display = "none";
      document.getElementById("ds_operating5-main").style.display = "none";
  
      document.getElementById("ds_by-topic-main").style.display = "none";
      document.getElementById("ds_by-topic-btn").style.fontWeight = "";
      document.getElementById("ds_by-topic-li").style.backgroundColor = "";
  
      document.getElementById("ds_topic-main").style.display = "none";
      document.getElementById("ds_topic2-main").style.display = "none";
      document.getElementById("ds_topic3-main").style.display = "none";
      document.getElementById("ds_topic4-main").style.display = "none";
      document.getElementById("ds_topic5-main").style.display = "none";
    } 
    else if (n == 2) {
      document.getElementById("ds_by-type-btn").style.fontWeight = "bold";
      document.getElementById("ds_by-type-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_item").style.height = "392px";
      document.getElementById("ds_by-type").style.display = "block";
      document.getElementById("ds_by-type").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
      document.getElementById("ds_btn").style.fontWeight = "";
      document.getElementById("ds_li").style.backgroundColor = "";
      document.getElementById("ds_hide-show").style.display = "none";
      document.getElementById("ds_item").style.height = "392px";
  
      document.getElementById("ds_by-operating-main").style.display = "none";
      document.getElementById("ds_by-operating-li").style.backgroundColor = "";
      document.getElementById("ds_by-operating-btn").style.fontWeight = "";
  
      document.getElementById("ds_operating-main").style.display = "none";
      document.getElementById("ds_operating2-main").style.display = "none";
      document.getElementById("ds_operating3-main").style.display = "none";
      document.getElementById("ds_operating4-main").style.display = "none";
      document.getElementById("ds_operating5-main").style.display = "none";
  
      document.getElementById("ds_by-topic-main").style.display = "none";
      document.getElementById("ds_by-topic-btn").style.fontWeight = "";
      document.getElementById("ds_by-topic-li").style.backgroundColor = "";
  
      document.getElementById("ds_topic-main").style.display = "none";
      document.getElementById("ds_topic2-main").style.display = "none";
      document.getElementById("ds_topic3-main").style.display = "none";
      document.getElementById("ds_topic4-main").style.display = "none";
      document.getElementById("ds_topic5-main").style.display = "none";
  
  
    }
    else if (n == 3) {
      document.getElementById("ds_by-operating-btn").style.fontWeight = "bold";
      document.getElementById("ds_by-operating-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_by-operating-height").style.height = "392px";
      document.getElementById("ds_by-operating-main").style.display = "block";
      document.getElementById("ds_by-operating-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
      document.getElementById("ds_btn").style.fontWeight = "";
      document.getElementById("ds_li").style.backgroundColor = "";
      document.getElementById("ds_hide-show").style.display = "none";
      document.getElementById("ds_item").style.height = "392px";
  
      document.getElementById("ds_by-type").style.display = "none";
      document.getElementById("ds_by-type-li").style.backgroundColor = "";
      document.getElementById("ds_by-type-btn").style.fontWeight = "";
  
      document.getElementById("managers").style.display = "none";
      document.getElementById("ds_Anal-main").style.display = "none";
      document.getElementById("ds_bois-main").style.display = "none";
      document.getElementById("ds_bois-hardware-main").style.display = "none";
      document.getElementById("ds_boot-loader-main").style.display = "none";
      document.getElementById("ds-dynamic-main").style.display = "none";
      document.getElementById("ds_firm-main").style.display = "none";
      document.getElementById("ds_cable-main").style.display = "none";
      document.getElementById("ds_apps-main").style.display = "none";
      document.getElementById("ds_code-main").style.display = "none";
      document.getElementById("ds_compile-main").style.display = "none";
      document.getElementById("ds_contain-main").style.display = "none";
      document.getElementById("ds_deep-main").style.display = "none";
      document.getElementById("ds_infer-main").style.display = "none";
      document.getElementById("ds_train-main").style.display = "none";
      document.getElementById("ds_deploy-main").style.display = "none";
      document.getElementById("ds_machine-main").style.display = "none";
      document.getElementById("ds_valid-main").style.display = "none";
      document.getElementById("ds_nature-main").style.display = "none";
      document.getElementById("ds_oneapi-main").style.display = "none";
      document.getElementById("ds_open-main").style.display = "none";
      document.getElementById("ds_media-main").style.display = "none";
      document.getElementById("ds_media2-main").style.display = "none";
      document.getElementById("ds_stack-main").style.display = "none";
      document.getElementById("ds_data-main").style.display = "none";
      document.getElementById("ds_data2-main").style.display = "none";
      document.getElementById("ds_center-main").style.display = "none";
      document.getElementById("ds_debug-main").style.display = "none";
      document.getElementById("ds_service-main").style.display = "none";
      document.getElementById("ds_stream-main").style.display = "none";
      document.getElementById("ds_emul-main").style.display = "none";
      document.getElementById("ds_emulation-main").style.display = "none";
      document.getElementById("ds_emulation2-main").style.display = "none";
      document.getElementById("ds_fgpa-main").style.display = "none";
      document.getElementById("ds_fgpaTools-main").style.display = "none";
      document.getElementById("ds_embedded-main").style.display = "none";
      document.getElementById("ds_fgpaTools2-main").style.display = "none";
      document.getElementById("ds_prime-main").style.display = "none";
      document.getElementById("ds_prime2-main").style.display = "none";
      document.getElementById("ds_fgpaTools3-main").style.display = "none";
      document.getElementById("ds_frame-main").style.display = "none";
      document.getElementById("ds_helm-main").style.display = "none";
      document.getElementById("ds_secure-main").style.display = "none";
      document.getElementById("ds_kits-main").style.display = "none";
      document.getElementById("ds_kitsItem-main").style.display = "none";
      document.getElementById("ds_kitsItem2-main").style.display = "none";
      document.getElementById("ds_kitsItem3-main").style.display = "none";
      document.getElementById("ds_kitsItem4-main").style.display = "none";
      document.getElementById("ds_kitsItem5-main").style.display = "none";
      document.getElementById("ds_kitsItem6-main").style.display = "none";
      document.getElementById("ds_kitsItem7-main").style.display = "none";
      document.getElementById("ds_kitsItem8-main").style.display = "none";
      document.getElementById("ds_kitsItem9-main").style.display = "none";
      document.getElementById("ds_kitsItem10-main").style.display = "none";
      document.getElementById("ds_kitsItem11-main").style.display = "none";
      document.getElementById("ds_kitsItem12-main").style.display = "none";
      document.getElementById("ds_kitsItem13-main").style.display = "none";
      document.getElementById("ds_kuber-main").style.display = "none";
      document.getElementById("ds_legacy-main").style.display = "none";
      document.getElementById("ds_library-main").style.display = "none";
      document.getElementById("ds_libraries-main").style.display = "none";
      document.getElementById("ds_libraries2-main").style.display = "none";
      document.getElementById("ds_libraries3-main").style.display = "none";
      document.getElementById("ds_libraries4-main").style.display = "none";
      document.getElementById("ds_modal-main").style.display = "none";
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals18-main").style.display = "none";
      document.getElementById("ds_plug-main").style.display = "none";
      document.getElementById("ds_power-main").style.display = "none";
      document.getElementById("ds_powers-main").style.display = "none";
      document.getElementById("ds_product-main").style.display = "none";
      document.getElementById("ds_refer-main").style.display = "none";
      document.getElementById("ds_reference-main").style.display = "none";
      document.getElementById("ds_reference2-main").style.display = "none";
      document.getElementById("ds_reference3-main").style.display = "none";
      document.getElementById("ds_reference4-main").style.display = "none";
      document.getElementById("ds_reference5-main").style.display = "none";
      document.getElementById("ds_reference6-main").style.display = "none";
      document.getElementById("ds_reference7-main").style.display = "none";
      document.getElementById("ds_reference8-main").style.display = "none";
      document.getElementById("ds_reference9-main").style.display = "none";
      document.getElementById("ds_reference10-main").style.display = "none";
      document.getElementById("ds_run-main").style.display = "none";
      document.getElementById("ds_validation-main").style.display = "none";
      document.getElementById("ds_validHard-main").style.display = "none";
      document.getElementById("ds_validHard2-main").style.display = "none";
      document.getElementById("ds_validHard3-main").style.display = "none";
      document.getElementById("managers").style.display = "none";
  
      document.getElementById("ds_by-topic-main").style.display = "none";
      document.getElementById("ds_by-topic-btn").style.fontWeight = "";
      document.getElementById("ds_by-topic-li").style.backgroundColor = "";
   
      document.getElementById("ds_topic-main").style.display = "none";
      document.getElementById("ds_topic2-main").style.display = "none";
      document.getElementById("ds_topic3-main").style.display = "none";
      document.getElementById("ds_topic4-main").style.display = "none";
      document.getElementById("ds_topic5-main").style.display = "none";
    }
   
  }
  
  let data = document.getElementById("menuli");

// Example data structure
let arr = [
  {
    section: "Warranty Center",
    items: [
      { name: "Check out our warranty coverage", link: "#" }
    ]
  },
  {
    section: "Suppliers and Distributors",
    items: [
      { name: "Intel Authorized Distributors", link: "#" },
      { name: "Supplier Support", link: "#" }
    ]
  },
  {
    section: "General Questions",
    items: [
      { name: "Website feedback", link: "#" },
      { name: "Company questions", link: "#" }
    ]
  }
];

// Loop through the array to create the structure
for (let i = 0; i < arr.length; i++) {
  // Create section title
  let sectionTitle = document.createElement("li");
  sectionTitle.classList.add("section-title");
  sectionTitle.innerHTML = `<strong>${arr[i].section}</strong>`;
  data.appendChild(sectionTitle);

  // Create list items for each link in the section
  for (let j = 0; j < arr[i].items.length; j++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" href="${arr[i].items[j].link}">${arr[i].items[j].name}</a>`;
    data.appendChild(li);
  }
}

// Filter function (no changes needed)
function filterItems() {
  let input = document.getElementById("searchInput");
  let filter = input.value.toLowerCase();
  let ul = document.getElementById("menuli");
  let li = ul.getElementsByTagName("li");

  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    if (a && a.innerHTML.toLowerCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else if (li[i].classList.contains("section-title")) {
      // Show the section title if any of the links below it are shown
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

  function filterItems2() {
      console.log("hello");
      let input = document.getElementById("searchInput2");
      let filter = input.value.toLowerCase();
      let ul = document.getElementById("ds_operating-ul");
      let li = ul.getElementsByTagName("li");
    
      for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
  }
  
  function filterItems3() {
      let input = document.getElementById("searchInput3");
      let filter = input.value.toLowerCase();
      let ul = document.getElementById("ds_operating2-ul");
      let li = ul.getElementsByTagName("li");
    
      for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
  }  
  
  function filterItems4() {
    let input = document.getElementById("searchInput4");
    let filter = input.value.toLowerCase();
    let ul = document.getElementById("ds_operating3-ul");
    let li = ul.getElementsByTagName("li");
  
    for (let i = 0; i < li.length; i++) {
      let a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }  
  
  function byTopicFilterItems() {
  
    let input = document.getElementById("byTopicInput");
    let filter = input.value.toLowerCase();
    let ul = document.getElementById("ds_topic-ul");
    let li = ul.getElementsByTagName("li");
  
    for (let i = 0; i < li.length; i++) {
      let a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }  
  
  function byTopicFilterItems2() {
  
    let input = document.getElementById("byTopicInput2");
    let filter = input.value.toLowerCase();
    let ul = document.getElementById("ds_topic2-ul");
    let li = ul.getElementsByTagName("li");
  
    for (let i = 0; i < li.length; i++) {
      let a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }  
  
  function byTopicFilterItems3() {
  
    let input = document.getElementById("byTopicInput3");
    let filter = input.value.toLowerCase();
    let ul = document.getElementById("ds_topic3-ul");
    let li = ul.getElementsByTagName("li");
  
    for (let i = 0; i < li.length; i++) {
      let a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }  
  function byTopicFilterItems4() {
  
    let input = document.getElementById("byTopicInput4");
    let filter = input.value.toLowerCase();
    let ul = document.getElementById("ds_topic4-ul");
    let li = ul.getElementsByTagName("li");
  
    for (let i = 0; i < li.length; i++) {
      let a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  } 
  function byTopicFilterItems5() {
  
    let input = document.getElementById("byTopicInput5");
    let filter = input.value.toLowerCase();
    let ul = document.getElementById("ds_topic5-ul");
    let li = ul.getElementsByTagName("li");
  
    for (let i = 0; i < li.length; i++) {
      let a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  } 
  let arr2 = [
    {
      item: "Intel® Hardware Accelerated Execution Manager (Intel® HAXM) - Open Source",
    },
  ];
  
  let creteUl = document.getElementById("item");
  
  for (let i = 0; i < arr2.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${arr2[i].item}</a>`;
    console.log(li);
    creteUl.appendChild(li);
  }
  
  function managers(a) {
    if (a == 1) {
      document.getElementById("managers").style.display = "block";
      document.getElementById("ds_manage-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_manage-btn").style.fontWeight = "bold";
      document.getElementById("ds_manage-height").style.height = "392px";
      document.getElementById("managers").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
      document.getElementById("ds_Anal-main").style.display = "none";
      document.getElementById("ds_anal-btn").style.fontWeight = "";
      document.getElementById("ds_anal-li").style.backgroundColor = "";
  
      document.getElementById("ds_bois-main").style.display = "none";
      document.getElementById("ds_bios-btn").style.fontWeight = "";
      document.getElementById("ds_bios-li").style.backgroundColor = "";
  
      document.getElementById("ds_bois-hardware-main").style.display = "none";
      document.getElementById("ds_boot-loader-main").style.display = "none";
      document.getElementById("ds-dynamic-main").style.display = "none";
      document.getElementById("ds_firm-main").style.display = "none";
  
      document.getElementById("ds_cable-main").style.display = "none";
      document.getElementById("ds_cable-li").style.backgroundColor = "";
      document.getElementById("ds_cable-btn").style.fontWeight = "";
  
      document.getElementById("ds_apps-main").style.display = "none";
  
      document.getElementById("ds_code-main").style.display = "none";
      document.getElementById("ds_code-li").style.backgroundColor = "";
      document.getElementById("ds_code-btn").style.fontWeight = "";
  
      document.getElementById("ds_compile-main").style.display = "none";
      document.getElementById("ds_compile-li").style.backgroundColor = "";
      document.getElementById("ds_compile-btn").style.fontWeight = "";
  
      document.getElementById("ds_contain-main").style.display = "none";
      document.getElementById("ds_contain-li").style.backgroundColor = "";
      document.getElementById("ds_contain-btn").style.fontWeight = "";
  
      document.getElementById("ds_deep-main").style.display = "none";
      document.getElementById("ds_infer-main").style.display = "none";
      document.getElementById("ds_deploy-main").style.display = "none";
      document.getElementById("ds_machine-main").style.display = "none";
      document.getElementById("ds_valid-main").style.display = "none";
      document.getElementById("ds_nature-main").style.display = "none";
      document.getElementById("ds_oneapi-main").style.display = "none";
      document.getElementById("ds_open-main").style.display = "none";
      document.getElementById("ds_media-main").style.display = "none";
      document.getElementById("ds_media2-main").style.display = "none";
      document.getElementById("ds_stack-main").style.display = "none";
      document.getElementById("ds_data-main").style.display = "none";
      document.getElementById("ds_data2-main").style.display = "none";
  
      document.getElementById("ds_center-main").style.display = "none";
      document.getElementById("ds_center-li").style.backgroundColor = "";
      document.getElementById("ds_center-btn").style.fontWeight = "";
  
      document.getElementById("ds_debug-main").style.display = "none";
      document.getElementById("ds_debug-li").style.backgroundColor = "";
      document.getElementById("ds_debug-btn").style.fontWeight = "";
  
      document.getElementById("ds_service-main").style.display = "none";
      document.getElementById("ds_service-li").style.backgroundColor = "";
      document.getElementById("ds_service-btn").style.fontWeight = "";
  
      document.getElementById("ds_stream-main").style.display = "none";
      document.getElementById("ds_stream-li").style.backgroundColor = "";
      document.getElementById("ds_stream-btn").style.fontWeight = "";
  
      document.getElementById("ds_emul-main").style.display = "none";
      document.getElementById("ds_emul-li").style.backgroundColor = "";
      document.getElementById("ds_emul-btn").style.fontWeight = "";
  
      document.getElementById("ds_emulation-main").style.display = "none";
      document.getElementById("ds_emulation2-main").style.display = "none";
  
      document.getElementById("ds_fgpa-main").style.display = "none";
      document.getElementById("ds_fgpa-li").style.backgroundColor = "";
      document.getElementById("ds_fgpa-btn").style.fontWeight = "";
  
      document.getElementById("ds_fgpaTools-main").style.display = "none";
      document.getElementById("ds_embedded-main").style.display = "none";
      document.getElementById("ds_fgpaTools2-main").style.display = "none";
      document.getElementById("ds_prime-main").style.display = "none";
      document.getElementById("ds_prime2-main").style.display = "none";
      document.getElementById("ds_fgpaTools3-main").style.display = "none";
  
      document.getElementById("ds_frame-main").style.display = "none";
      document.getElementById("ds_frame-li").style.backgroundColor = "";
      document.getElementById("ds_frame-btn").style.fontWeight = "";
  
      document.getElementById("ds_helm-main").style.display = "none";
      document.getElementById("ds_helm-li").style.backgroundColor = "";
      document.getElementById("ds_helm-btn").style.fontWeight = "";
  
      document.getElementById("ds_secure-main").style.display = "none";
      document.getElementById("ds_secure-li").style.backgroundColor = "";
      document.getElementById("ds_secure-btn").style.fontWeight = "";
  
      document.getElementById("ds_kits-main").style.display = "none";
      document.getElementById("ds_kits-li").style.backgroundColor = "";
      document.getElementById("ds_kits-btn").style.fontWeight = "";
  
      document.getElementById("ds_kitsItem-main").style.display = "none";
      document.getElementById("ds_kitsItem2-main").style.display = "none";
      document.getElementById("ds_kitsItem3-main").style.display = "none";
      document.getElementById("ds_kitsItem4-main").style.display = "none";
      document.getElementById("ds_kitsItem5-main").style.display = "none";
      document.getElementById("ds_kitsItem6-main").style.display = "none";
      document.getElementById("ds_kitsItem7-main").style.display = "none";
      document.getElementById("ds_kitsItem8-main").style.display = "none";
      document.getElementById("ds_kitsItem9-main").style.display = "none";
      document.getElementById("ds_kitsItem10-main").style.display = "none";
      document.getElementById("ds_kitsItem11-main").style.display = "none";
      document.getElementById("ds_kitsItem12-main").style.display = "none";
      document.getElementById("ds_kitsItem13-main").style.display = "none";
  
      document.getElementById("ds_kuber-main").style.display = "none";
      document.getElementById("ds_kuber-li").style.backgroundColor = "";
      document.getElementById("ds_kuber-btn").style.fontWeight = "";
  
      document.getElementById("ds_legacy-main").style.display = "none";
      document.getElementById("ds_legacy-li").style.backgroundColor = "";
      document.getElementById("ds_legacy-btn").style.fontWeight = "";
  
      document.getElementById("ds_library-main").style.display = "none";
      document.getElementById("ds_library-li").style.backgroundColor = "";
      document.getElementById("ds_library-btn").style.fontWeight = "";
  
      document.getElementById("ds_libraries-main").style.display = "none";
      document.getElementById("ds_libraries2-main").style.display = "none";
      document.getElementById("ds_libraries3-main").style.display = "none";
      document.getElementById("ds_libraries4-main").style.display = "none";
  
      document.getElementById("ds_modal-main").style.display = "none";
      document.getElementById("ds_modal-li").style.backgroundColor = "";
      document.getElementById("ds_modal-btn").style.fontWeight = "";
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals18-main").style.display = "none";
  
      document.getElementById("ds_plug-main").style.display = "none";
      document.getElementById("ds_plug-li").style.backgroundColor = "";
      document.getElementById("ds_plug-btn").style.fontWeight = "";
  
      document.getElementById("ds_power-main").style.display = "none";
      document.getElementById("ds_power-li").style.backgroundColor = "";
      document.getElementById("ds_power-btn").style.fontWeight = "";
  
      document.getElementById("ds_powers-main").style.display = "none";
  
      document.getElementById("ds_product-main").style.display = "none";
      document.getElementById("ds_product-li").style.backgroundColor = "";
      document.getElementById("ds_product-btn").style.fontWeight = "";
  
      document.getElementById("ds_refer-main").style.display = "none";
      document.getElementById("ds_refer-li").style.backgroundColor = "";
      document.getElementById("ds_refer-btn").style.fontWeight = "";
  
      document.getElementById("ds_reference-main").style.display = "none";
      document.getElementById("ds_reference2-main").style.display = "none";
      document.getElementById("ds_reference3-main").style.display = "none";
      document.getElementById("ds_reference4-main").style.display = "none";
      document.getElementById("ds_reference5-main").style.display = "none";
      document.getElementById("ds_reference6-main").style.display = "none";
      document.getElementById("ds_reference7-main").style.display = "none";
      document.getElementById("ds_reference8-main").style.display = "none";
      document.getElementById("ds_reference9-main").style.display = "none";
      document.getElementById("ds_reference10-main").style.display = "none";
  
      document.getElementById("ds_run-main").style.display = "none";
      document.getElementById("ds_run-li").style.backgroundColor = "";
      document.getElementById("ds_run-btn").style.fontWeight = "";
  
      document.getElementById("ds_validation-main").style.display = "none";
      document.getElementById("ds_validation-li").style.backgroundColor = "";
      document.getElementById("ds_validation-btn").style.fontWeight = "";
  
      document.getElementById("ds_validHard-main").style.display = "none";
      document.getElementById("ds_validHard2-main").style.display = "none";
      document.getElementById("ds_validHard3-main").style.display = "none";
    } else if (a == 2) {
      document.getElementById("ds_Anal-main").style.display = "block";
      document.getElementById("ds_anal-btn").style.fontWeight = "bold";
      document.getElementById("ds_anal-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_Anal-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
      document.getElementById("managers").style.display = "none";
      document.getElementById("ds_manage-li").style.backgroundColor = "";
      document.getElementById("ds_manage-btn").style.fontWeight = "";
  
      document.getElementById("ds_bois-main").style.display = "none";
      document.getElementById("ds_bios-btn").style.fontWeight = "";
      document.getElementById("ds_bios-li").style.backgroundColor = "";
  
      document.getElementById("ds_bois-hardware-main").style.display = "none";
      document.getElementById("ds_boot-loader-main").style.display = "none";
      document.getElementById("ds-dynamic-main").style.display = "none";
      document.getElementById("ds_firm-main").style.display = "none";
  
      document.getElementById("ds_cable-main").style.display = "none";
      document.getElementById("ds_cable-li").style.backgroundColor = "";
      document.getElementById("ds_cable-btn").style.fontWeight = "";
  
      document.getElementById("ds_apps-main").style.display = "none";
  
      document.getElementById("ds_code-main").style.display = "none";
      document.getElementById("ds_code-li").style.backgroundColor = "";
      document.getElementById("ds_code-btn").style.fontWeight = "";
  
      document.getElementById("ds_compile-main").style.display = "none";
      document.getElementById("ds_compile-li").style.backgroundColor = "";
      document.getElementById("ds_compile-btn").style.fontWeight = "";
  
      document.getElementById("ds_contain-main").style.display = "none";
      document.getElementById("ds_contain-li").style.backgroundColor = "";
      document.getElementById("ds_contain-btn").style.fontWeight = "";
  
      document.getElementById("ds_deep-main").style.display = "none";
      document.getElementById("ds_infer-main").style.display = "none";
      document.getElementById("ds_deploy-main").style.display = "none";
      document.getElementById("ds_machine-main").style.display = "none";
      document.getElementById("ds_valid-main").style.display = "none";
      document.getElementById("ds_nature-main").style.display = "none";
      document.getElementById("ds_oneapi-main").style.display = "none";
      document.getElementById("ds_open-main").style.display = "none";
      document.getElementById("ds_media-main").style.display = "none";
      document.getElementById("ds_media2-main").style.display = "none";
      document.getElementById("ds_stack-main").style.display = "none";
      document.getElementById("ds_data-main").style.display = "none";
      document.getElementById("ds_data2-main").style.display = "none";
  
      document.getElementById("ds_center-main").style.display = "none";
      document.getElementById("ds_center-li").style.backgroundColor = "";
      document.getElementById("ds_center-btn").style.fontWeight = "";
  
      document.getElementById("ds_debug-main").style.display = "none";
      document.getElementById("ds_debug-li").style.backgroundColor = "";
      document.getElementById("ds_debug-btn").style.fontWeight = "";
  
      document.getElementById("ds_service-main").style.display = "none";
      document.getElementById("ds_service-li").style.backgroundColor = "";
      document.getElementById("ds_service-btn").style.fontWeight = "";
  
      document.getElementById("ds_stream-main").style.display = "none";
      document.getElementById("ds_stream-li").style.backgroundColor = "";
      document.getElementById("ds_stream-btn").style.fontWeight = "";
  
      document.getElementById("ds_emul-main").style.display = "none";
      document.getElementById("ds_emul-li").style.backgroundColor = "";
      document.getElementById("ds_emul-btn").style.fontWeight = "";
  
      document.getElementById("ds_emulation-main").style.display = "none";
      document.getElementById("ds_emulation2-main").style.display = "none";
  
      document.getElementById("ds_fgpa-main").style.display = "none";
      document.getElementById("ds_fgpa-li").style.backgroundColor = "";
      document.getElementById("ds_fgpa-btn").style.fontWeight = "";
  
      document.getElementById("ds_fgpaTools-main").style.display = "none";
      document.getElementById("ds_embedded-main").style.display = "none";
      document.getElementById("ds_fgpaTools2-main").style.display = "none";
      document.getElementById("ds_prime-main").style.display = "none";
      document.getElementById("ds_prime2-main").style.display = "none";
      document.getElementById("ds_fgpaTools3-main").style.display = "none";
  
      document.getElementById("ds_frame-main").style.display = "none";
      document.getElementById("ds_frame-li").style.backgroundColor = "";
      document.getElementById("ds_frame-btn").style.fontWeight = "";
  
      document.getElementById("ds_helm-main").style.display = "none";
      document.getElementById("ds_helm-li").style.backgroundColor = "";
      document.getElementById("ds_helm-btn").style.fontWeight = "";
  
      document.getElementById("ds_secure-main").style.display = "none";
      document.getElementById("ds_secure-li").style.backgroundColor = "";
      document.getElementById("ds_secure-btn").style.fontWeight = "";
  
      document.getElementById("ds_kits-main").style.display = "none";
      document.getElementById("ds_kits-li").style.backgroundColor = "";
      document.getElementById("ds_kits-btn").style.fontWeight = "";
  
      document.getElementById("ds_kitsItem-main").style.display = "none";
      document.getElementById("ds_kitsItem2-main").style.display = "none";
      document.getElementById("ds_kitsItem3-main").style.display = "none";
      document.getElementById("ds_kitsItem4-main").style.display = "none";
      document.getElementById("ds_kitsItem5-main").style.display = "none";
      document.getElementById("ds_kitsItem6-main").style.display = "none";
      document.getElementById("ds_kitsItem7-main").style.display = "none";
      document.getElementById("ds_kitsItem8-main").style.display = "none";
      document.getElementById("ds_kitsItem9-main").style.display = "none";
      document.getElementById("ds_kitsItem10-main").style.display = "none";
      document.getElementById("ds_kitsItem11-main").style.display = "none";
      document.getElementById("ds_kitsItem12-main").style.display = "none";
      document.getElementById("ds_kitsItem13-main").style.display = "none";
  
      document.getElementById("ds_kuber-main").style.display = "none";
      document.getElementById("ds_kuber-li").style.backgroundColor = "";
      document.getElementById("ds_kuber-btn").style.fontWeight = "";
  
      document.getElementById("ds_legacy-main").style.display = "none";
      document.getElementById("ds_legacy-li").style.backgroundColor = "";
      document.getElementById("ds_legacy-btn").style.fontWeight = "";
  
      document.getElementById("ds_library-main").style.display = "none";
      document.getElementById("ds_library-li").style.backgroundColor = "";
      document.getElementById("ds_library-btn").style.fontWeight = "";
  
      document.getElementById("ds_libraries-main").style.display = "none";
      document.getElementById("ds_libraries2-main").style.display = "none";
      document.getElementById("ds_libraries3-main").style.display = "none";
      document.getElementById("ds_libraries4-main").style.display = "none";
  
      document.getElementById("ds_modal-main").style.display = "none";
      document.getElementById("ds_modal-li").style.backgroundColor = "";
      document.getElementById("ds_modal-btn").style.fontWeight = "";
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals18-main").style.display = "none";
  
      document.getElementById("ds_plug-main").style.display = "none";
      document.getElementById("ds_plug-li").style.backgroundColor = "";
      document.getElementById("ds_plug-btn").style.fontWeight = "";
  
      document.getElementById("ds_power-main").style.display = "none";
      document.getElementById("ds_power-li").style.backgroundColor = "";
      document.getElementById("ds_power-btn").style.fontWeight = "";
  
      document.getElementById("ds_powers-main").style.display = "none";
  
      document.getElementById("ds_product-main").style.display = "none";
      document.getElementById("ds_product-li").style.backgroundColor = "";
      document.getElementById("ds_product-btn").style.fontWeight = "";
  
      document.getElementById("ds_refer-main").style.display = "none";
      document.getElementById("ds_refer-li").style.backgroundColor = "";
      document.getElementById("ds_refer-btn").style.fontWeight = "";
  
      document.getElementById("ds_reference-main").style.display = "none";
      document.getElementById("ds_reference2-main").style.display = "none";
      document.getElementById("ds_reference3-main").style.display = "none";
      document.getElementById("ds_reference4-main").style.display = "none";
      document.getElementById("ds_reference5-main").style.display = "none";
      document.getElementById("ds_reference6-main").style.display = "none";
      document.getElementById("ds_reference7-main").style.display = "none";
      document.getElementById("ds_reference8-main").style.display = "none";
      document.getElementById("ds_reference9-main").style.display = "none";
      document.getElementById("ds_reference10-main").style.display = "none";
  
      document.getElementById("ds_run-main").style.display = "none";
      document.getElementById("ds_run-li").style.backgroundColor = "";
      document.getElementById("ds_run-btn").style.fontWeight = "";
  
      document.getElementById("ds_validation-main").style.display = "none";
      document.getElementById("ds_validation-li").style.backgroundColor = "";
      document.getElementById("ds_validation-btn").style.fontWeight = "";
  
      document.getElementById("ds_validHard-main").style.display = "none";
      document.getElementById("ds_validHard2-main").style.display = "none";
      document.getElementById("ds_validHard3-main").style.display = "none";
    } else if (a == 3) {
      document.getElementById("ds_bois-main").style.display = "block";
      document.getElementById("ds_bios-btn").style.fontWeight = "bold";
      document.getElementById("ds_bios-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_bois-height").style.height = "392px";
      document.getElementById("ds_bois-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
      document.getElementById("managers").style.display = "none";
      document.getElementById("ds_manage-li").style.backgroundColor = "";
      document.getElementById("ds_manage-btn").style.fontWeight = "";
  
      document.getElementById("ds_Anal-main").style.display = "none";
      document.getElementById("ds_anal-btn").style.fontWeight = "";
      document.getElementById("ds_anal-li").style.backgroundColor = "";
  
      document.getElementById("ds_cable-main").style.display = "none";
      document.getElementById("ds_cable-li").style.backgroundColor = "";
      document.getElementById("ds_cable-btn").style.fontWeight = "";
  
      document.getElementById("ds_apps-main").style.display = "none";
  
      document.getElementById("ds_code-main").style.display = "none";
      document.getElementById("ds_code-li").style.backgroundColor = "";
      document.getElementById("ds_code-btn").style.fontWeight = "";
  
      document.getElementById("ds_compile-main").style.display = "none";
      document.getElementById("ds_compile-li").style.backgroundColor = "";
      document.getElementById("ds_compile-btn").style.fontWeight = "";
  
      document.getElementById("ds_contain-main").style.display = "none";
      document.getElementById("ds_contain-li").style.backgroundColor = "";
      document.getElementById("ds_contain-btn").style.fontWeight = "";
  
      document.getElementById("ds_deep-main").style.display = "none";
      document.getElementById("ds_infer-main").style.display = "none";
      document.getElementById("ds_deploy-main").style.display = "none";
      document.getElementById("ds_machine-main").style.display = "none";
      document.getElementById("ds_valid-main").style.display = "none";
      document.getElementById("ds_nature-main").style.display = "none";
      document.getElementById("ds_oneapi-main").style.display = "none";
      document.getElementById("ds_open-main").style.display = "none";
      document.getElementById("ds_media-main").style.display = "none";
      document.getElementById("ds_media2-main").style.display = "none";
      document.getElementById("ds_stack-main").style.display = "none";
      document.getElementById("ds_data-main").style.display = "none";
      document.getElementById("ds_data2-main").style.display = "none";
  
      document.getElementById("ds_center-main").style.display = "none";
      document.getElementById("ds_center-li").style.backgroundColor = "";
      document.getElementById("ds_center-btn").style.fontWeight = "";
  
      document.getElementById("ds_debug-main").style.display = "none";
      document.getElementById("ds_debug-li").style.backgroundColor = "";
      document.getElementById("ds_debug-btn").style.fontWeight = "";
  
      document.getElementById("ds_service-main").style.display = "none";
      document.getElementById("ds_service-li").style.backgroundColor = "";
      document.getElementById("ds_service-btn").style.fontWeight = "";
  
      document.getElementById("ds_stream-main").style.display = "none";
      document.getElementById("ds_stream-li").style.backgroundColor = "";
      document.getElementById("ds_stream-btn").style.fontWeight = "";
  
      document.getElementById("ds_emul-main").style.display = "none";
      document.getElementById("ds_emul-li").style.backgroundColor = "";
      document.getElementById("ds_emul-btn").style.fontWeight = "";
  
      document.getElementById("ds_emulation-main").style.display = "none";
      document.getElementById("ds_emulation2-main").style.display = "none";
  
      document.getElementById("ds_fgpa-main").style.display = "none";
      document.getElementById("ds_fgpa-li").style.backgroundColor = "";
      document.getElementById("ds_fgpa-btn").style.fontWeight = "";
  
      document.getElementById("ds_fgpaTools-main").style.display = "none";
      document.getElementById("ds_embedded-main").style.display = "none";
      document.getElementById("ds_fgpaTools2-main").style.display = "none";
      document.getElementById("ds_prime-main").style.display = "none";
      document.getElementById("ds_prime2-main").style.display = "none";
      document.getElementById("ds_fgpaTools3-main").style.display = "none";
  
      document.getElementById("ds_frame-main").style.display = "none";
      document.getElementById("ds_frame-li").style.backgroundColor = "";
      document.getElementById("ds_frame-btn").style.fontWeight = "";
  
      document.getElementById("ds_helm-main").style.display = "none";
      document.getElementById("ds_helm-li").style.backgroundColor = "";
      document.getElementById("ds_helm-btn").style.fontWeight = "";
  
      document.getElementById("ds_secure-main").style.display = "none";
      document.getElementById("ds_secure-li").style.backgroundColor = "";
      document.getElementById("ds_secure-btn").style.fontWeight = "";
  
      document.getElementById("ds_kits-main").style.display = "none";
      document.getElementById("ds_kits-li").style.backgroundColor = "";
      document.getElementById("ds_kits-btn").style.fontWeight = "";
  
      document.getElementById("ds_kitsItem-main").style.display = "none";
      document.getElementById("ds_kitsItem2-main").style.display = "none";
      document.getElementById("ds_kitsItem3-main").style.display = "none";
      document.getElementById("ds_kitsItem4-main").style.display = "none";
      document.getElementById("ds_kitsItem5-main").style.display = "none";
      document.getElementById("ds_kitsItem6-main").style.display = "none";
      document.getElementById("ds_kitsItem7-main").style.display = "none";
      document.getElementById("ds_kitsItem8-main").style.display = "none";
      document.getElementById("ds_kitsItem9-main").style.display = "none";
      document.getElementById("ds_kitsItem10-main").style.display = "none";
      document.getElementById("ds_kitsItem11-main").style.display = "none";
      document.getElementById("ds_kitsItem12-main").style.display = "none";
      document.getElementById("ds_kitsItem13-main").style.display = "none";
  
      document.getElementById("ds_kuber-main").style.display = "none";
      document.getElementById("ds_kuber-li").style.backgroundColor = "";
      document.getElementById("ds_kuber-btn").style.fontWeight = "";
  
      document.getElementById("ds_legacy-main").style.display = "none";
      document.getElementById("ds_legacy-li").style.backgroundColor = "";
      document.getElementById("ds_legacy-btn").style.fontWeight = "";
  
      document.getElementById("ds_library-main").style.display = "none";
      document.getElementById("ds_library-li").style.backgroundColor = "";
      document.getElementById("ds_library-btn").style.fontWeight = "";
  
      document.getElementById("ds_libraries-main").style.display = "none";
      document.getElementById("ds_libraries2-main").style.display = "none";
      document.getElementById("ds_libraries3-main").style.display = "none";
      document.getElementById("ds_libraries4-main").style.display = "none";
  
      document.getElementById("ds_modal-main").style.display = "none";
      document.getElementById("ds_modal-li").style.backgroundColor = "";
      document.getElementById("ds_modal-btn").style.fontWeight = "";
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals18-main").style.display = "none";
  
      document.getElementById("ds_plug-main").style.display = "none";
      document.getElementById("ds_plug-li").style.backgroundColor = "";
      document.getElementById("ds_plug-btn").style.fontWeight = "";
  
      document.getElementById("ds_power-main").style.display = "none";
      document.getElementById("ds_power-li").style.backgroundColor = "";
      document.getElementById("ds_power-btn").style.fontWeight = "";
  
      document.getElementById("ds_powers-main").style.display = "none";
  
      document.getElementById("ds_product-main").style.display = "none";
      document.getElementById("ds_product-li").style.backgroundColor = "";
      document.getElementById("ds_product-btn").style.fontWeight = "";
  
      document.getElementById("ds_refer-main").style.display = "none";
      document.getElementById("ds_refer-li").style.backgroundColor = "";
      document.getElementById("ds_refer-btn").style.fontWeight = "";
  
      document.getElementById("ds_reference-main").style.display = "none";
      document.getElementById("ds_reference2-main").style.display = "none";
      document.getElementById("ds_reference3-main").style.display = "none";
      document.getElementById("ds_reference4-main").style.display = "none";
      document.getElementById("ds_reference5-main").style.display = "none";
      document.getElementById("ds_reference6-main").style.display = "none";
      document.getElementById("ds_reference7-main").style.display = "none";
      document.getElementById("ds_reference8-main").style.display = "none";
      document.getElementById("ds_reference9-main").style.display = "none";
      document.getElementById("ds_reference10-main").style.display = "none";
  
      document.getElementById("ds_run-main").style.display = "none";
      document.getElementById("ds_run-li").style.backgroundColor = "";
      document.getElementById("ds_run-btn").style.fontWeight = "";
  
      document.getElementById("ds_validation-main").style.display = "none";
      document.getElementById("ds_validation-li").style.backgroundColor = "";
      document.getElementById("ds_validation-btn").style.fontWeight = "";
  
      document.getElementById("ds_validHard-main").style.display = "none";
      document.getElementById("ds_validHard2-main").style.display = "none";
      document.getElementById("ds_validHard3-main").style.display = "none";
    } else if (a == 4) {
      document.getElementById("ds_cable-main").style.display = "block";
      document.getElementById("ds_cable-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_cable-btn").style.fontWeight = "bold";
      document.getElementById("ds_cable-hight").style.height = "392px";
      document.getElementById("ds_cable-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
      document.getElementById("managers").style.display = "none";
      document.getElementById("ds_manage-li").style.backgroundColor = "";
      document.getElementById("ds_manage-btn").style.fontWeight = "";
  
      document.getElementById("ds_bois-main").style.display = "none";
      document.getElementById("ds_bios-btn").style.fontWeight = "";
      document.getElementById("ds_bios-li").style.backgroundColor = "";
  
      document.getElementById("ds_bois-hardware-main").style.display = "none";
      document.getElementById("ds_boot-loader-main").style.display = "none";
      document.getElementById("ds-dynamic-main").style.display = "none";
      document.getElementById("ds_firm-main").style.display = "none";
  
      document.getElementById("ds_code-main").style.display = "none";
      document.getElementById("ds_code-li").style.backgroundColor = "";
      document.getElementById("ds_code-btn").style.fontWeight = "";
  
      document.getElementById("ds_compile-main").style.display = "none";
      document.getElementById("ds_compile-li").style.backgroundColor = "";
      document.getElementById("ds_compile-btn").style.fontWeight = "";
  
      document.getElementById("ds_contain-main").style.display = "none";
      document.getElementById("ds_contain-li").style.backgroundColor = "";
      document.getElementById("ds_contain-btn").style.fontWeight = "";
  
      document.getElementById("ds_deep-main").style.display = "none";
      document.getElementById("ds_infer-main").style.display = "none";
      document.getElementById("ds_deploy-main").style.display = "none";
      document.getElementById("ds_machine-main").style.display = "none";
      document.getElementById("ds_valid-main").style.display = "none";
      document.getElementById("ds_nature-main").style.display = "none";
      document.getElementById("ds_oneapi-main").style.display = "none";
      document.getElementById("ds_open-main").style.display = "none";
      document.getElementById("ds_media-main").style.display = "none";
      document.getElementById("ds_media2-main").style.display = "none";
      document.getElementById("ds_stack-main").style.display = "none";
      document.getElementById("ds_data-main").style.display = "none";
      document.getElementById("ds_data2-main").style.display = "none";
  
      document.getElementById("ds_center-main").style.display = "none";
      document.getElementById("ds_center-li").style.backgroundColor = "";
      document.getElementById("ds_center-btn").style.fontWeight = "";
  
      document.getElementById("ds_debug-main").style.display = "none";
      document.getElementById("ds_debug-li").style.backgroundColor = "";
      document.getElementById("ds_debug-btn").style.fontWeight = "";
  
      document.getElementById("ds_service-main").style.display = "none";
      document.getElementById("ds_service-li").style.backgroundColor = "";
      document.getElementById("ds_service-btn").style.fontWeight = "";
  
      document.getElementById("ds_stream-main").style.display = "none";
      document.getElementById("ds_stream-li").style.backgroundColor = "";
      document.getElementById("ds_stream-btn").style.fontWeight = "";
  
      document.getElementById("ds_emul-main").style.display = "none";
      document.getElementById("ds_emul-li").style.backgroundColor = "";
      document.getElementById("ds_emul-btn").style.fontWeight = "";
  
      document.getElementById("ds_emulation-main").style.display = "none";
      document.getElementById("ds_emulation2-main").style.display = "none";
  
      document.getElementById("ds_fgpa-main").style.display = "none";
      document.getElementById("ds_fgpa-li").style.backgroundColor = "";
      document.getElementById("ds_fgpa-btn").style.fontWeight = "";
  
      document.getElementById("ds_fgpaTools-main").style.display = "none";
      document.getElementById("ds_embedded-main").style.display = "none";
      document.getElementById("ds_fgpaTools2-main").style.display = "none";
      document.getElementById("ds_prime-main").style.display = "none";
      document.getElementById("ds_prime2-main").style.display = "none";
      document.getElementById("ds_fgpaTools3-main").style.display = "none";
  
      document.getElementById("ds_frame-main").style.display = "none";
      document.getElementById("ds_frame-li").style.backgroundColor = "";
      document.getElementById("ds_frame-btn").style.fontWeight = "";
  
      document.getElementById("ds_helm-main").style.display = "none";
      document.getElementById("ds_helm-li").style.backgroundColor = "";
      document.getElementById("ds_helm-btn").style.fontWeight = "";
  
      document.getElementById("ds_secure-main").style.display = "none";
      document.getElementById("ds_secure-li").style.backgroundColor = "";
      document.getElementById("ds_secure-btn").style.fontWeight = "";
  
      document.getElementById("ds_kits-main").style.display = "none";
      document.getElementById("ds_kits-li").style.backgroundColor = "";
      document.getElementById("ds_kits-btn").style.fontWeight = "";
  
      document.getElementById("ds_kitsItem-main").style.display = "none";
      document.getElementById("ds_kitsItem2-main").style.display = "none";
      document.getElementById("ds_kitsItem3-main").style.display = "none";
      document.getElementById("ds_kitsItem4-main").style.display = "none";
      document.getElementById("ds_kitsItem5-main").style.display = "none";
      document.getElementById("ds_kitsItem6-main").style.display = "none";
      document.getElementById("ds_kitsItem7-main").style.display = "none";
      document.getElementById("ds_kitsItem8-main").style.display = "none";
      document.getElementById("ds_kitsItem9-main").style.display = "none";
      document.getElementById("ds_kitsItem10-main").style.display = "none";
      document.getElementById("ds_kitsItem11-main").style.display = "none";
      document.getElementById("ds_kitsItem12-main").style.display = "none";
      document.getElementById("ds_kitsItem13-main").style.display = "none";
  
      document.getElementById("ds_kuber-main").style.display = "none";
      document.getElementById("ds_kuber-li").style.backgroundColor = "";
      document.getElementById("ds_kuber-btn").style.fontWeight = "";
  
      document.getElementById("ds_legacy-main").style.display = "none";
      document.getElementById("ds_legacy-li").style.backgroundColor = "";
      document.getElementById("ds_legacy-btn").style.fontWeight = "";
  
      document.getElementById("ds_library-main").style.display = "none";
      document.getElementById("ds_library-li").style.backgroundColor = "";
      document.getElementById("ds_library-btn").style.fontWeight = "";
  
      document.getElementById("ds_libraries-main").style.display = "none";
      document.getElementById("ds_libraries2-main").style.display = "none";
      document.getElementById("ds_libraries3-main").style.display = "none";
      document.getElementById("ds_libraries4-main").style.display = "none";
  
      document.getElementById("ds_modal-main").style.display = "none";
      document.getElementById("ds_modal-li").style.backgroundColor = "";
      document.getElementById("ds_modal-btn").style.fontWeight = "";
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals18-main").style.display = "none";
  
      document.getElementById("ds_plug-main").style.display = "none";
      document.getElementById("ds_plug-li").style.backgroundColor = "";
      document.getElementById("ds_plug-btn").style.fontWeight = "";
  
      document.getElementById("ds_power-main").style.display = "none";
      document.getElementById("ds_power-li").style.backgroundColor = "";
      document.getElementById("ds_power-btn").style.fontWeight = "";
  
      document.getElementById("ds_powers-main").style.display = "none";
  
      document.getElementById("ds_product-main").style.display = "none";
      document.getElementById("ds_product-li").style.backgroundColor = "";
      document.getElementById("ds_product-btn").style.fontWeight = "";
  
      document.getElementById("ds_refer-main").style.display = "none";
      document.getElementById("ds_refer-li").style.backgroundColor = "";
      document.getElementById("ds_refer-btn").style.fontWeight = "";
  
      document.getElementById("ds_reference-main").style.display = "none";
      document.getElementById("ds_reference2-main").style.display = "none";
      document.getElementById("ds_reference3-main").style.display = "none";
      document.getElementById("ds_reference4-main").style.display = "none";
      document.getElementById("ds_reference5-main").style.display = "none";
      document.getElementById("ds_reference6-main").style.display = "none";
      document.getElementById("ds_reference7-main").style.display = "none";
      document.getElementById("ds_reference8-main").style.display = "none";
      document.getElementById("ds_reference9-main").style.display = "none";
      document.getElementById("ds_reference10-main").style.display = "none";
  
      document.getElementById("ds_run-main").style.display = "none";
      document.getElementById("ds_run-li").style.backgroundColor = "";
      document.getElementById("ds_run-btn").style.fontWeight = "";
  
      document.getElementById("ds_validation-main").style.display = "none";
      document.getElementById("ds_validation-li").style.backgroundColor = "";
      document.getElementById("ds_validation-btn").style.fontWeight = "";
  
      document.getElementById("ds_validHard-main").style.display = "none";
      document.getElementById("ds_validHard2-main").style.display = "none";
      document.getElementById("ds_validHard3-main").style.display = "none";
    } else if (a == 5) {
      document.getElementById("ds_code-main").style.display = "block";
      document.getElementById("ds_code-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_code-btn").style.fontWeight = "bold";
      document.getElementById("ds_code-height").style.height = "392px";
      document.getElementById("ds_code-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
      document.getElementById("managers").style.display = "none";
      document.getElementById("ds_manage-li").style.backgroundColor = "";
      document.getElementById("ds_manage-btn").style.fontWeight = "";
  
      document.getElementById("ds_Anal-main").style.display = "none";
      document.getElementById("ds_anal-btn").style.fontWeight = "";
      document.getElementById("ds_anal-li").style.backgroundColor = "";
  
      document.getElementById("ds_bois-main").style.display = "none";
      document.getElementById("ds_bios-btn").style.fontWeight = "";
      document.getElementById("ds_bios-li").style.backgroundColor = "";
  
      document.getElementById("ds_cable-main").style.display = "none";
      document.getElementById("ds_cable-li").style.backgroundColor = "";
      document.getElementById("ds_cable-btn").style.fontWeight = "";
  
      document.getElementById("ds_bois-hardware-main").style.display = "none";
      document.getElementById("ds_boot-loader-main").style.display = "none";
      document.getElementById("ds-dynamic-main").style.display = "none";
      document.getElementById("ds_firm-main").style.display = "none";
      document.getElementById("ds_apps-main").style.display = "none";
  
      document.getElementById("ds_compile-main").style.display = "none";
      document.getElementById("ds_compile-li").style.backgroundColor = "";
      document.getElementById("ds_compile-btn").style.fontWeight = "";
  
      document.getElementById("ds_contain-main").style.display = "none";
      document.getElementById("ds_contain-li").style.backgroundColor = "";
      document.getElementById("ds_contain-btn").style.fontWeight = "";
  
      document.getElementById("ds_deep-main").style.display = "none";
      document.getElementById("ds_infer-main").style.display = "none";
      document.getElementById("ds_deploy-main").style.display = "none";
      document.getElementById("ds_machine-main").style.display = "none";
      document.getElementById("ds_valid-main").style.display = "none";
      document.getElementById("ds_nature-main").style.display = "none";
      document.getElementById("ds_oneapi-main").style.display = "none";
      document.getElementById("ds_open-main").style.display = "none";
      document.getElementById("ds_media-main").style.display = "none";
      document.getElementById("ds_media2-main").style.display = "none";
      document.getElementById("ds_stack-main").style.display = "none";
      document.getElementById("ds_data-main").style.display = "none";
      document.getElementById("ds_data2-main").style.display = "none";
  
      document.getElementById("ds_center-main").style.display = "none";
      document.getElementById("ds_center-li").style.backgroundColor = "";
      document.getElementById("ds_center-btn").style.fontWeight = "";
  
      document.getElementById("ds_debug-main").style.display = "none";
      document.getElementById("ds_debug-li").style.backgroundColor = "";
      document.getElementById("ds_debug-btn").style.fontWeight = "";
  
      document.getElementById("ds_service-main").style.display = "none";
      document.getElementById("ds_service-li").style.backgroundColor = "";
      document.getElementById("ds_service-btn").style.fontWeight = "";
  
      document.getElementById("ds_stream-main").style.display = "none";
      document.getElementById("ds_stream-li").style.backgroundColor = "";
      document.getElementById("ds_stream-btn").style.fontWeight = "";
  
      document.getElementById("ds_emul-main").style.display = "none";
      document.getElementById("ds_emul-li").style.backgroundColor = "";
      document.getElementById("ds_emul-btn").style.fontWeight = "";
  
      document.getElementById("ds_emulation-main").style.display = "none";
      document.getElementById("ds_emulation2-main").style.display = "none";
  
      document.getElementById("ds_fgpa-main").style.display = "none";
      document.getElementById("ds_fgpa-li").style.backgroundColor = "";
      document.getElementById("ds_fgpa-btn").style.fontWeight = "";
  
      document.getElementById("ds_fgpaTools-main").style.display = "none";
      document.getElementById("ds_embedded-main").style.display = "none";
      document.getElementById("ds_fgpaTools2-main").style.display = "none";
      document.getElementById("ds_prime-main").style.display = "none";
      document.getElementById("ds_prime2-main").style.display = "none";
      document.getElementById("ds_fgpaTools3-main").style.display = "none";
  
      document.getElementById("ds_frame-main").style.display = "none";
      document.getElementById("ds_frame-li").style.backgroundColor = "";
      document.getElementById("ds_frame-btn").style.fontWeight = "";
  
      document.getElementById("ds_helm-main").style.display = "none";
      document.getElementById("ds_helm-li").style.backgroundColor = "";
      document.getElementById("ds_helm-btn").style.fontWeight = "";
  
      document.getElementById("ds_secure-main").style.display = "none";
      document.getElementById("ds_secure-li").style.backgroundColor = "";
      document.getElementById("ds_secure-btn").style.fontWeight = "";
  
      document.getElementById("ds_kits-main").style.display = "none";
      document.getElementById("ds_kits-li").style.backgroundColor = "";
      document.getElementById("ds_kits-btn").style.fontWeight = "";
  
      document.getElementById("ds_kitsItem-main").style.display = "none";
      document.getElementById("ds_kitsItem2-main").style.display = "none";
      document.getElementById("ds_kitsItem3-main").style.display = "none";
      document.getElementById("ds_kitsItem4-main").style.display = "none";
      document.getElementById("ds_kitsItem5-main").style.display = "none";
      document.getElementById("ds_kitsItem6-main").style.display = "none";
      document.getElementById("ds_kitsItem7-main").style.display = "none";
      document.getElementById("ds_kitsItem8-main").style.display = "none";
      document.getElementById("ds_kitsItem9-main").style.display = "none";
      document.getElementById("ds_kitsItem10-main").style.display = "none";
      document.getElementById("ds_kitsItem11-main").style.display = "none";
      document.getElementById("ds_kitsItem12-main").style.display = "none";
      document.getElementById("ds_kitsItem13-main").style.display = "none";
  
      document.getElementById("ds_kuber-main").style.display = "none";
      document.getElementById("ds_kuber-li").style.backgroundColor = "";
      document.getElementById("ds_kuber-btn").style.fontWeight = "";
  
      document.getElementById("ds_legacy-main").style.display = "none";
      document.getElementById("ds_legacy-li").style.backgroundColor = "";
      document.getElementById("ds_legacy-btn").style.fontWeight = "";
  
      document.getElementById("ds_library-main").style.display = "none";
      document.getElementById("ds_library-li").style.backgroundColor = "";
      document.getElementById("ds_library-btn").style.fontWeight = "";
  
      document.getElementById("ds_libraries-main").style.display = "none";
      document.getElementById("ds_libraries2-main").style.display = "none";
      document.getElementById("ds_libraries3-main").style.display = "none";
      document.getElementById("ds_libraries4-main").style.display = "none";
  
      document.getElementById("ds_modal-main").style.display = "none";
      document.getElementById("ds_modal-li").style.backgroundColor = "";
      document.getElementById("ds_modal-btn").style.fontWeight = "";
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals18-main").style.display = "none";
  
      document.getElementById("ds_plug-main").style.display = "none";
      document.getElementById("ds_plug-li").style.backgroundColor = "";
      document.getElementById("ds_plug-btn").style.fontWeight = "";
  
      document.getElementById("ds_power-main").style.display = "none";
      document.getElementById("ds_power-li").style.backgroundColor = "";
      document.getElementById("ds_power-btn").style.fontWeight = "";
  
      document.getElementById("ds_powers-main").style.display = "none";
  
      document.getElementById("ds_product-main").style.display = "none";
      document.getElementById("ds_product-li").style.backgroundColor = "";
      document.getElementById("ds_product-btn").style.fontWeight = "";
  
      document.getElementById("ds_refer-main").style.display = "none";
      document.getElementById("ds_refer-li").style.backgroundColor = "";
      document.getElementById("ds_refer-btn").style.fontWeight = "";
  
      document.getElementById("ds_reference-main").style.display = "none";
      document.getElementById("ds_reference2-main").style.display = "none";
      document.getElementById("ds_reference3-main").style.display = "none";
      document.getElementById("ds_reference4-main").style.display = "none";
      document.getElementById("ds_reference5-main").style.display = "none";
      document.getElementById("ds_reference6-main").style.display = "none";
      document.getElementById("ds_reference7-main").style.display = "none";
      document.getElementById("ds_reference8-main").style.display = "none";
      document.getElementById("ds_reference9-main").style.display = "none";
      document.getElementById("ds_reference10-main").style.display = "none";
  
      document.getElementById("ds_run-main").style.display = "none";
      document.getElementById("ds_run-li").style.backgroundColor = "";
      document.getElementById("ds_run-btn").style.fontWeight = "";
  
      document.getElementById("ds_validation-main").style.display = "none";
      document.getElementById("ds_validation-li").style.backgroundColor = "";
      document.getElementById("ds_validation-btn").style.fontWeight = "";
  
      document.getElementById("ds_validHard-main").style.display = "none";
      document.getElementById("ds_validHard2-main").style.display = "none";
      document.getElementById("ds_validHard3-main").style.display = "none";
    } else if (a == 6) {
      document.getElementById("ds_compile-main").style.display = "block";
      document.getElementById("ds_compile-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_compile-btn").style.fontWeight = "bold";
      document.getElementById("ds_compile-height").style.height = "392px";
      document.getElementById("ds_compile-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
      document.getElementById("managers").style.display = "none";
      document.getElementById("ds_manage-li").style.backgroundColor = "";
      document.getElementById("ds_manage-btn").style.fontWeight = "";
  
      document.getElementById("ds_Anal-main").style.display = "none";
      document.getElementById("ds_anal-btn").style.fontWeight = "";
      document.getElementById("ds_anal-li").style.backgroundColor = "";
  
      document.getElementById("ds_bois-main").style.display = "none";
      document.getElementById("ds_bios-btn").style.fontWeight = "";
      document.getElementById("ds_bios-li").style.backgroundColor = "";
  
      document.getElementById("ds_cable-main").style.display = "none";
      document.getElementById("ds_cable-li").style.backgroundColor = "";
      document.getElementById("ds_cable-btn").style.fontWeight = "";
  
      document.getElementById("ds_bois-hardware-main").style.display = "none";
      document.getElementById("ds_boot-loader-main").style.display = "none";
      document.getElementById("ds-dynamic-main").style.display = "none";
      document.getElementById("ds_firm-main").style.display = "none";
      document.getElementById("ds_apps-main").style.display = "none";
  
      document.getElementById("ds_code-main").style.display = "none";
      document.getElementById("ds_code-li").style.backgroundColor = "";
      document.getElementById("ds_code-btn").style.fontWeight = "";
  
      document.getElementById("ds_contain-main").style.display = "none";
      document.getElementById("ds_contain-li").style.backgroundColor = "";
      document.getElementById("ds_contain-btn").style.fontWeight = "";
  
      document.getElementById("ds_deep-main").style.display = "none";
      document.getElementById("ds_infer-main").style.display = "none";
      document.getElementById("ds_deploy-main").style.display = "none";
      document.getElementById("ds_machine-main").style.display = "none";
      document.getElementById("ds_valid-main").style.display = "none";
      document.getElementById("ds_nature-main").style.display = "none";
      document.getElementById("ds_oneapi-main").style.display = "none";
      document.getElementById("ds_open-main").style.display = "none";
      document.getElementById("ds_media-main").style.display = "none";
      document.getElementById("ds_media2-main").style.display = "none";
      document.getElementById("ds_stack-main").style.display = "none";
      document.getElementById("ds_data-main").style.display = "none";
      document.getElementById("ds_data2-main").style.display = "none";
  
      document.getElementById("ds_center-main").style.display = "none";
      document.getElementById("ds_center-li").style.backgroundColor = "";
      document.getElementById("ds_center-btn").style.fontWeight = "";
  
      document.getElementById("ds_debug-main").style.display = "none";
      document.getElementById("ds_debug-li").style.backgroundColor = "";
      document.getElementById("ds_debug-btn").style.fontWeight = "";
  
      document.getElementById("ds_service-main").style.display = "none";
      document.getElementById("ds_service-li").style.backgroundColor = "";
      document.getElementById("ds_service-btn").style.fontWeight = "";
  
      document.getElementById("ds_stream-main").style.display = "none";
      document.getElementById("ds_stream-li").style.backgroundColor = "";
      document.getElementById("ds_stream-btn").style.fontWeight = "";
  
      document.getElementById("ds_emul-main").style.display = "none";
      document.getElementById("ds_emul-li").style.backgroundColor = "";
      document.getElementById("ds_emul-btn").style.fontWeight = "";
  
      document.getElementById("ds_emulation-main").style.display = "none";
      document.getElementById("ds_emulation2-main").style.display = "none";
  
      document.getElementById("ds_fgpa-main").style.display = "none";
      document.getElementById("ds_fgpa-li").style.backgroundColor = "";
      document.getElementById("ds_fgpa-btn").style.fontWeight = "";
  
      document.getElementById("ds_fgpaTools-main").style.display = "none";
      document.getElementById("ds_embedded-main").style.display = "none";
      document.getElementById("ds_fgpaTools2-main").style.display = "none";
      document.getElementById("ds_prime-main").style.display = "none";
      document.getElementById("ds_prime2-main").style.display = "none";
      document.getElementById("ds_fgpaTools3-main").style.display = "none";
  
      document.getElementById("ds_frame-main").style.display = "none";
      document.getElementById("ds_frame-li").style.backgroundColor = "";
      document.getElementById("ds_frame-btn").style.fontWeight = "";
  
      document.getElementById("ds_helm-main").style.display = "none";
      document.getElementById("ds_helm-li").style.backgroundColor = "";
      document.getElementById("ds_helm-btn").style.fontWeight = "";
  
      document.getElementById("ds_secure-main").style.display = "none";
      document.getElementById("ds_secure-li").style.backgroundColor = "";
      document.getElementById("ds_secure-btn").style.fontWeight = "";
  
      document.getElementById("ds_kits-main").style.display = "none";
      document.getElementById("ds_kits-li").style.backgroundColor = "";
      document.getElementById("ds_kits-btn").style.fontWeight = "";
  
      document.getElementById("ds_kitsItem-main").style.display = "none";
      document.getElementById("ds_kitsItem2-main").style.display = "none";
      document.getElementById("ds_kitsItem3-main").style.display = "none";
      document.getElementById("ds_kitsItem4-main").style.display = "none";
      document.getElementById("ds_kitsItem5-main").style.display = "none";
      document.getElementById("ds_kitsItem6-main").style.display = "none";
      document.getElementById("ds_kitsItem7-main").style.display = "none";
      document.getElementById("ds_kitsItem8-main").style.display = "none";
      document.getElementById("ds_kitsItem9-main").style.display = "none";
      document.getElementById("ds_kitsItem10-main").style.display = "none";
      document.getElementById("ds_kitsItem11-main").style.display = "none";
      document.getElementById("ds_kitsItem12-main").style.display = "none";
      document.getElementById("ds_kitsItem13-main").style.display = "none";
  
      document.getElementById("ds_kuber-main").style.display = "none";
      document.getElementById("ds_kuber-li").style.backgroundColor = "";
      document.getElementById("ds_kuber-btn").style.fontWeight = "";
  
      document.getElementById("ds_legacy-main").style.display = "none";
      document.getElementById("ds_legacy-li").style.backgroundColor = "";
      document.getElementById("ds_legacy-btn").style.fontWeight = "";
  
      document.getElementById("ds_library-main").style.display = "none";
      document.getElementById("ds_library-li").style.backgroundColor = "";
      document.getElementById("ds_library-btn").style.fontWeight = "";
  
      document.getElementById("ds_libraries-main").style.display = "none";
      document.getElementById("ds_libraries2-main").style.display = "none";
      document.getElementById("ds_libraries3-main").style.display = "none";
      document.getElementById("ds_libraries4-main").style.display = "none";
  
      document.getElementById("ds_modal-main").style.display = "none";
      document.getElementById("ds_modal-li").style.backgroundColor = "";
      document.getElementById("ds_modal-btn").style.fontWeight = "";
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals18-main").style.display = "none";
  
      document.getElementById("ds_plug-main").style.display = "none";
      document.getElementById("ds_plug-li").style.backgroundColor = "";
      document.getElementById("ds_plug-btn").style.fontWeight = "";
  
      document.getElementById("ds_power-main").style.display = "none";
      document.getElementById("ds_power-li").style.backgroundColor = "";
      document.getElementById("ds_power-btn").style.fontWeight = "";
  
      document.getElementById("ds_powers-main").style.display = "none";
  
      document.getElementById("ds_product-main").style.display = "none";
      document.getElementById("ds_product-li").style.backgroundColor = "";
      document.getElementById("ds_product-btn").style.fontWeight = "";
  
      document.getElementById("ds_refer-main").style.display = "none";
      document.getElementById("ds_refer-li").style.backgroundColor = "";
      document.getElementById("ds_refer-btn").style.fontWeight = "";
  
      document.getElementById("ds_reference-main").style.display = "none";
      document.getElementById("ds_reference2-main").style.display = "none";
      document.getElementById("ds_reference3-main").style.display = "none";
      document.getElementById("ds_reference4-main").style.display = "none";
      document.getElementById("ds_reference5-main").style.display = "none";
      document.getElementById("ds_reference6-main").style.display = "none";
      document.getElementById("ds_reference7-main").style.display = "none";
      document.getElementById("ds_reference8-main").style.display = "none";
      document.getElementById("ds_reference9-main").style.display = "none";
      document.getElementById("ds_reference10-main").style.display = "none";
  
      document.getElementById("ds_run-main").style.display = "none";
      document.getElementById("ds_run-li").style.backgroundColor = "";
      document.getElementById("ds_run-btn").style.fontWeight = "";
  
      document.getElementById("ds_validation-main").style.display = "none";
      document.getElementById("ds_validation-li").style.backgroundColor = "";
      document.getElementById("ds_validation-btn").style.fontWeight = "";
  
      document.getElementById("ds_validHard-main").style.display = "none";
      document.getElementById("ds_validHard2-main").style.display = "none";
      document.getElementById("ds_validHard3-main").style.display = "none";
    } else if (a == 7) {
      document.getElementById("ds_contain-main").style.display = "block";
      document.getElementById("ds_contain-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_contain-btn").style.fontWeight = "bold";
      document.getElementById("ds_contain-height").style.height = "392px";
      document.getElementById("managers").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
      document.getElementById("ds_compile-main").style.display = "none";
      document.getElementById("ds_compile-li").style.backgroundColor = "";
      document.getElementById("ds_compile-btn").style.fontWeight = "";
  
      document.getElementById("managers").style.display = "none";
      document.getElementById("ds_manage-li").style.backgroundColor = "";
      document.getElementById("ds_manage-btn").style.fontWeight = "";
  
      document.getElementById("ds_Anal-main").style.display = "none";
      document.getElementById("ds_anal-btn").style.fontWeight = "";
      document.getElementById("ds_anal-li").style.backgroundColor = "";
  
      document.getElementById("ds_bois-main").style.display = "none";
      document.getElementById("ds_bios-btn").style.fontWeight = "";
      document.getElementById("ds_bios-li").style.backgroundColor = "";
  
      document.getElementById("ds_cable-main").style.display = "none";
      document.getElementById("ds_cable-li").style.backgroundColor = "";
      document.getElementById("ds_cable-btn").style.fontWeight = "";
  
      document.getElementById("ds_bois-hardware-main").style.display = "none";
      document.getElementById("ds_boot-loader-main").style.display = "none";
      document.getElementById("ds-dynamic-main").style.display = "none";
      document.getElementById("ds_firm-main").style.display = "none";
      document.getElementById("ds_apps-main").style.display = "none";
  
      document.getElementById("ds_code-main").style.display = "none";
      document.getElementById("ds_code-li").style.backgroundColor = "";
      document.getElementById("ds_code-btn").style.fontWeight = "";
  
      document.getElementById("ds_center-main").style.display = "none";
      document.getElementById("ds_center-li").style.backgroundColor = "";
      document.getElementById("ds_center-btn").style.fontWeight = "";
  
      document.getElementById("ds_debug-main").style.display = "none";
      document.getElementById("ds_debug-li").style.backgroundColor = "";
      document.getElementById("ds_debug-btn").style.fontWeight = "";
  
      document.getElementById("ds_service-main").style.display = "none";
      document.getElementById("ds_service-li").style.backgroundColor = "";
      document.getElementById("ds_service-btn").style.fontWeight = "";
  
      document.getElementById("ds_stream-main").style.display = "none";
      document.getElementById("ds_stream-li").style.backgroundColor = "";
      document.getElementById("ds_stream-btn").style.fontWeight = "";
  
      document.getElementById("ds_emul-main").style.display = "none";
      document.getElementById("ds_emul-li").style.backgroundColor = "";
      document.getElementById("ds_emul-btn").style.fontWeight = "";
  
      document.getElementById("ds_emulation-main").style.display = "none";
      document.getElementById("ds_emulation2-main").style.display = "none";
  
      document.getElementById("ds_fgpa-main").style.display = "none";
      document.getElementById("ds_fgpa-li").style.backgroundColor = "";
      document.getElementById("ds_fgpa-btn").style.fontWeight = "";
  
      document.getElementById("ds_fgpaTools-main").style.display = "none";
      document.getElementById("ds_embedded-main").style.display = "none";
      document.getElementById("ds_fgpaTools2-main").style.display = "none";
      document.getElementById("ds_prime-main").style.display = "none";
      document.getElementById("ds_prime2-main").style.display = "none";
      document.getElementById("ds_fgpaTools3-main").style.display = "none";
  
      document.getElementById("ds_frame-main").style.display = "none";
      document.getElementById("ds_frame-li").style.backgroundColor = "";
      document.getElementById("ds_frame-btn").style.fontWeight = "";
  
      document.getElementById("ds_helm-main").style.display = "none";
      document.getElementById("ds_helm-li").style.backgroundColor = "";
      document.getElementById("ds_helm-btn").style.fontWeight = "";
  
      document.getElementById("ds_secure-main").style.display = "none";
      document.getElementById("ds_secure-li").style.backgroundColor = "";
      document.getElementById("ds_secure-btn").style.fontWeight = "";
  
      document.getElementById("ds_kits-main").style.display = "none";
      document.getElementById("ds_kits-li").style.backgroundColor = "";
      document.getElementById("ds_kits-btn").style.fontWeight = "";
  
      document.getElementById("ds_kitsItem-main").style.display = "none";
      document.getElementById("ds_kitsItem2-main").style.display = "none";
      document.getElementById("ds_kitsItem3-main").style.display = "none";
      document.getElementById("ds_kitsItem4-main").style.display = "none";
      document.getElementById("ds_kitsItem5-main").style.display = "none";
      document.getElementById("ds_kitsItem6-main").style.display = "none";
      document.getElementById("ds_kitsItem7-main").style.display = "none";
      document.getElementById("ds_kitsItem8-main").style.display = "none";
      document.getElementById("ds_kitsItem9-main").style.display = "none";
      document.getElementById("ds_kitsItem10-main").style.display = "none";
      document.getElementById("ds_kitsItem11-main").style.display = "none";
      document.getElementById("ds_kitsItem12-main").style.display = "none";
      document.getElementById("ds_kitsItem13-main").style.display = "none";
  
      document.getElementById("ds_kuber-main").style.display = "none";
      document.getElementById("ds_kuber-li").style.backgroundColor = "";
      document.getElementById("ds_kuber-btn").style.fontWeight = "";
  
      document.getElementById("ds_legacy-main").style.display = "none";
      document.getElementById("ds_legacy-li").style.backgroundColor = "";
      document.getElementById("ds_legacy-btn").style.fontWeight = "";
  
      document.getElementById("ds_library-main").style.display = "none";
      document.getElementById("ds_library-li").style.backgroundColor = "";
      document.getElementById("ds_library-btn").style.fontWeight = "";
  
      document.getElementById("ds_libraries-main").style.display = "none";
      document.getElementById("ds_libraries2-main").style.display = "none";
      document.getElementById("ds_libraries3-main").style.display = "none";
      document.getElementById("ds_libraries4-main").style.display = "none";
  
      document.getElementById("ds_modal-main").style.display = "none";
      document.getElementById("ds_modal-li").style.backgroundColor = "";
      document.getElementById("ds_modal-btn").style.fontWeight = "";
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals18-main").style.display = "none";
  
      document.getElementById("ds_plug-main").style.display = "none";
      document.getElementById("ds_plug-li").style.backgroundColor = "";
      document.getElementById("ds_plug-btn").style.fontWeight = "";
  
      document.getElementById("ds_power-main").style.display = "none";
      document.getElementById("ds_power-li").style.backgroundColor = "";
      document.getElementById("ds_power-btn").style.fontWeight = "";
  
      document.getElementById("ds_powers-main").style.display = "none";
  
      document.getElementById("ds_product-main").style.display = "none";
      document.getElementById("ds_product-li").style.backgroundColor = "";
      document.getElementById("ds_product-btn").style.fontWeight = "";
  
      document.getElementById("ds_refer-main").style.display = "none";
      document.getElementById("ds_refer-li").style.backgroundColor = "";
      document.getElementById("ds_refer-btn").style.fontWeight = "";
  
      document.getElementById("ds_reference-main").style.display = "none";
      document.getElementById("ds_reference2-main").style.display = "none";
      document.getElementById("ds_reference3-main").style.display = "none";
      document.getElementById("ds_reference4-main").style.display = "none";
      document.getElementById("ds_reference5-main").style.display = "none";
      document.getElementById("ds_reference6-main").style.display = "none";
      document.getElementById("ds_reference7-main").style.display = "none";
      document.getElementById("ds_reference8-main").style.display = "none";
      document.getElementById("ds_reference9-main").style.display = "none";
      document.getElementById("ds_reference10-main").style.display = "none";
  
      document.getElementById("ds_run-main").style.display = "none";
      document.getElementById("ds_run-li").style.backgroundColor = "";
      document.getElementById("ds_run-btn").style.fontWeight = "";
  
      document.getElementById("ds_validation-main").style.display = "none";
      document.getElementById("ds_validation-li").style.backgroundColor = "";
      document.getElementById("ds_validation-btn").style.fontWeight = "";
  
      document.getElementById("ds_validHard-main").style.display = "none";
      document.getElementById("ds_validHard2-main").style.display = "none";
      document.getElementById("ds_validHard3-main").style.display = "none";
    } else if (a == 8) {
      document.getElementById("ds_center-main").style.display = "block";
      document.getElementById("ds_center-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_center-btn").style.fontWeight = "bold";
      document.getElementById("ds_center-height").style.height = "392px";
      document.getElementById("ds_center-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
      document.getElementById("managers").style.display = "none";
      document.getElementById("ds_manage-li").style.backgroundColor = "";
      document.getElementById("ds_manage-btn").style.fontWeight = "";
  
      document.getElementById("ds_Anal-main").style.display = "none";
      document.getElementById("ds_anal-btn").style.fontWeight = "";
      document.getElementById("ds_anal-li").style.backgroundColor = "";
  
      document.getElementById("ds_bois-main").style.display = "none";
      document.getElementById("ds_bios-btn").style.fontWeight = "";
      document.getElementById("ds_bios-li").style.backgroundColor = "";
  
      document.getElementById("ds_cable-main").style.display = "none";
      document.getElementById("ds_cable-li").style.backgroundColor = "";
      document.getElementById("ds_cable-btn").style.fontWeight = "";
  
      document.getElementById("ds_bois-hardware-main").style.display = "none";
      document.getElementById("ds_boot-loader-main").style.display = "none";
      document.getElementById("ds-dynamic-main").style.display = "none";
      document.getElementById("ds_firm-main").style.display = "none";
      document.getElementById("ds_apps-main").style.display = "none";
  
      document.getElementById("ds_code-main").style.display = "none";
      document.getElementById("ds_code-li").style.backgroundColor = "";
      document.getElementById("ds_code-btn").style.fontWeight = "";
  
      document.getElementById("ds_contain-main").style.display = "none";
      document.getElementById("ds_contain-li").style.backgroundColor = "";
      document.getElementById("ds_contain-btn").style.fontWeight = "";
  
      document.getElementById("ds_deep-main").style.display = "none";
      document.getElementById("ds_infer-main").style.display = "none";
      document.getElementById("ds_deploy-main").style.display = "none";
      document.getElementById("ds_machine-main").style.display = "none";
      document.getElementById("ds_valid-main").style.display = "none";
      document.getElementById("ds_nature-main").style.display = "none";
      document.getElementById("ds_oneapi-main").style.display = "none";
      document.getElementById("ds_open-main").style.display = "none";
      document.getElementById("ds_media-main").style.display = "none";
      document.getElementById("ds_media2-main").style.display = "none";
      document.getElementById("ds_stack-main").style.display = "none";
      document.getElementById("ds_data-main").style.display = "none";
      document.getElementById("ds_data2-main").style.display = "none";
  
      document.getElementById("ds_debug-main").style.display = "none";
      document.getElementById("ds_debug-li").style.backgroundColor = "";
      document.getElementById("ds_debug-btn").style.fontWeight = "";
  
      document.getElementById("ds_service-main").style.display = "none";
      document.getElementById("ds_service-li").style.backgroundColor = "";
      document.getElementById("ds_service-btn").style.fontWeight = "";
  
      document.getElementById("ds_stream-main").style.display = "none";
      document.getElementById("ds_stream-li").style.backgroundColor = "";
      document.getElementById("ds_stream-btn").style.fontWeight = "";
  
      document.getElementById("ds_emul-main").style.display = "none";
      document.getElementById("ds_emul-li").style.backgroundColor = "";
      document.getElementById("ds_emul-btn").style.fontWeight = "";
  
      document.getElementById("ds_emulation-main").style.display = "none";
      document.getElementById("ds_emulation2-main").style.display = "none";
  
      document.getElementById("ds_fgpa-main").style.display = "none";
      document.getElementById("ds_fgpa-li").style.backgroundColor = "";
      document.getElementById("ds_fgpa-btn").style.fontWeight = "";
  
      document.getElementById("ds_fgpaTools-main").style.display = "none";
      document.getElementById("ds_embedded-main").style.display = "none";
      document.getElementById("ds_fgpaTools2-main").style.display = "none";
      document.getElementById("ds_prime-main").style.display = "none";
      document.getElementById("ds_prime2-main").style.display = "none";
      document.getElementById("ds_fgpaTools3-main").style.display = "none";
  
      document.getElementById("ds_frame-main").style.display = "none";
      document.getElementById("ds_frame-li").style.backgroundColor = "";
      document.getElementById("ds_frame-btn").style.fontWeight = "";
  
      document.getElementById("ds_helm-main").style.display = "none";
      document.getElementById("ds_helm-li").style.backgroundColor = "";
      document.getElementById("ds_helm-btn").style.fontWeight = "";
  
      document.getElementById("ds_secure-main").style.display = "none";
      document.getElementById("ds_secure-li").style.backgroundColor = "";
      document.getElementById("ds_secure-btn").style.fontWeight = "";
  
      document.getElementById("ds_kits-main").style.display = "none";
      document.getElementById("ds_kits-li").style.backgroundColor = "";
      document.getElementById("ds_kits-btn").style.fontWeight = "";
  
      document.getElementById("ds_kitsItem-main").style.display = "none";
      document.getElementById("ds_kitsItem2-main").style.display = "none";
      document.getElementById("ds_kitsItem3-main").style.display = "none";
      document.getElementById("ds_kitsItem4-main").style.display = "none";
      document.getElementById("ds_kitsItem5-main").style.display = "none";
      document.getElementById("ds_kitsItem6-main").style.display = "none";
      document.getElementById("ds_kitsItem7-main").style.display = "none";
      document.getElementById("ds_kitsItem8-main").style.display = "none";
      document.getElementById("ds_kitsItem9-main").style.display = "none";
      document.getElementById("ds_kitsItem10-main").style.display = "none";
      document.getElementById("ds_kitsItem11-main").style.display = "none";
      document.getElementById("ds_kitsItem12-main").style.display = "none";
      document.getElementById("ds_kitsItem13-main").style.display = "none";
  
      document.getElementById("ds_kuber-main").style.display = "none";
      document.getElementById("ds_kuber-li").style.backgroundColor = "";
      document.getElementById("ds_kuber-btn").style.fontWeight = "";
  
      document.getElementById("ds_legacy-main").style.display = "none";
      document.getElementById("ds_legacy-li").style.backgroundColor = "";
      document.getElementById("ds_legacy-btn").style.fontWeight = "";
  
      document.getElementById("ds_library-main").style.display = "none";
      document.getElementById("ds_library-li").style.backgroundColor = "";
      document.getElementById("ds_library-btn").style.fontWeight = "";
  
      document.getElementById("ds_libraries-main").style.display = "none";
      document.getElementById("ds_libraries2-main").style.display = "none";
      document.getElementById("ds_libraries3-main").style.display = "none";
      document.getElementById("ds_libraries4-main").style.display = "none";
  
      document.getElementById("ds_modal-main").style.display = "none";
      document.getElementById("ds_modal-li").style.backgroundColor = "";
      document.getElementById("ds_modal-btn").style.fontWeight = "";
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals18-main").style.display = "none";
  
      document.getElementById("ds_plug-main").style.display = "none";
      document.getElementById("ds_plug-li").style.backgroundColor = "";
      document.getElementById("ds_plug-btn").style.fontWeight = "";
  
      document.getElementById("ds_power-main").style.display = "none";
      document.getElementById("ds_power-li").style.backgroundColor = "";
      document.getElementById("ds_power-btn").style.fontWeight = "";
  
      document.getElementById("ds_powers-main").style.display = "none";
  
      document.getElementById("ds_product-main").style.display = "none";
      document.getElementById("ds_product-li").style.backgroundColor = "";
      document.getElementById("ds_product-btn").style.fontWeight = "";
  
      document.getElementById("ds_refer-main").style.display = "none";
      document.getElementById("ds_refer-li").style.backgroundColor = "";
      document.getElementById("ds_refer-btn").style.fontWeight = "";
  
      document.getElementById("ds_reference-main").style.display = "none";
      document.getElementById("ds_reference2-main").style.display = "none";
      document.getElementById("ds_reference3-main").style.display = "none";
      document.getElementById("ds_reference4-main").style.display = "none";
      document.getElementById("ds_reference5-main").style.display = "none";
      document.getElementById("ds_reference6-main").style.display = "none";
      document.getElementById("ds_reference7-main").style.display = "none";
      document.getElementById("ds_reference8-main").style.display = "none";
      document.getElementById("ds_reference9-main").style.display = "none";
      document.getElementById("ds_reference10-main").style.display = "none";
  
      document.getElementById("ds_run-main").style.display = "none";
      document.getElementById("ds_run-li").style.backgroundColor = "";
      document.getElementById("ds_run-btn").style.fontWeight = "";
  
      document.getElementById("ds_validation-main").style.display = "none";
      document.getElementById("ds_validation-li").style.backgroundColor = "";
      document.getElementById("ds_validation-btn").style.fontWeight = "";
  
      document.getElementById("ds_validHard-main").style.display = "none";
      document.getElementById("ds_validHard2-main").style.display = "none";
      document.getElementById("ds_validHard3-main").style.display = "none";
    } else if (a == 9) {
      document.getElementById("ds_debug-main").style.display = "block";
      document.getElementById("ds_debug-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_debug-btn").style.fontWeight = "bold";
      document.getElementById("ds_debug-height").style.height = "392px";
      document.getElementById("ds_debug-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
      document.getElementById("ds_center-main").style.display = "none";
      document.getElementById("ds_center-li").style.backgroundColor = "";
      document.getElementById("ds_center-btn").style.fontWeight = "";
  
      document.getElementById("managers").style.display = "none";
      document.getElementById("ds_manage-li").style.backgroundColor = "";
      document.getElementById("ds_manage-btn").style.fontWeight = "";
  
      document.getElementById("ds_Anal-main").style.display = "none";
      document.getElementById("ds_anal-btn").style.fontWeight = "";
      document.getElementById("ds_anal-li").style.backgroundColor = "";
  
      document.getElementById("ds_bois-main").style.display = "none";
      document.getElementById("ds_bios-btn").style.fontWeight = "";
      document.getElementById("ds_bios-li").style.backgroundColor = "";
  
      document.getElementById("ds_cable-main").style.display = "none";
      document.getElementById("ds_cable-li").style.backgroundColor = "";
      document.getElementById("ds_cable-btn").style.fontWeight = "";
  
      document.getElementById("ds_bois-hardware-main").style.display = "none";
      document.getElementById("ds_boot-loader-main").style.display = "none";
      document.getElementById("ds-dynamic-main").style.display = "none";
      document.getElementById("ds_firm-main").style.display = "none";
      document.getElementById("ds_apps-main").style.display = "none";
  
      document.getElementById("ds_code-main").style.display = "none";
      document.getElementById("ds_code-li").style.backgroundColor = "";
      document.getElementById("ds_code-btn").style.fontWeight = "";
  
      document.getElementById("ds_contain-main").style.display = "none";
      document.getElementById("ds_contain-li").style.backgroundColor = "";
      document.getElementById("ds_contain-btn").style.fontWeight = "";
  
      document.getElementById("ds_deep-main").style.display = "none";
      document.getElementById("ds_infer-main").style.display = "none";
      document.getElementById("ds_deploy-main").style.display = "none";
      document.getElementById("ds_machine-main").style.display = "none";
      document.getElementById("ds_valid-main").style.display = "none";
      document.getElementById("ds_nature-main").style.display = "none";
      document.getElementById("ds_oneapi-main").style.display = "none";
      document.getElementById("ds_open-main").style.display = "none";
      document.getElementById("ds_media-main").style.display = "none";
      document.getElementById("ds_media2-main").style.display = "none";
      document.getElementById("ds_stack-main").style.display = "none";
      document.getElementById("ds_data-main").style.display = "none";
      document.getElementById("ds_data2-main").style.display = "none";
  
      document.getElementById("ds_service-main").style.display = "none";
      document.getElementById("ds_service-li").style.backgroundColor = "";
      document.getElementById("ds_service-btn").style.fontWeight = "";
  
      document.getElementById("ds_stream-main").style.display = "none";
      document.getElementById("ds_stream-li").style.backgroundColor = "";
      document.getElementById("ds_stream-btn").style.fontWeight = "";
  
      document.getElementById("ds_emul-main").style.display = "none";
      document.getElementById("ds_emul-li").style.backgroundColor = "";
      document.getElementById("ds_emul-btn").style.fontWeight = "";
  
      document.getElementById("ds_emulation-main").style.display = "none";
      document.getElementById("ds_emulation2-main").style.display = "none";
  
      document.getElementById("ds_fgpa-main").style.display = "none";
      document.getElementById("ds_fgpa-li").style.backgroundColor = "";
      document.getElementById("ds_fgpa-btn").style.fontWeight = "";
  
      document.getElementById("ds_fgpaTools-main").style.display = "none";
      document.getElementById("ds_embedded-main").style.display = "none";
      document.getElementById("ds_fgpaTools2-main").style.display = "none";
      document.getElementById("ds_prime-main").style.display = "none";
      document.getElementById("ds_prime2-main").style.display = "none";
      document.getElementById("ds_fgpaTools3-main").style.display = "none";
  
      document.getElementById("ds_frame-main").style.display = "none";
      document.getElementById("ds_frame-li").style.backgroundColor = "";
      document.getElementById("ds_frame-btn").style.fontWeight = "";
  
      document.getElementById("ds_helm-main").style.display = "none";
      document.getElementById("ds_helm-li").style.backgroundColor = "";
      document.getElementById("ds_helm-btn").style.fontWeight = "";
  
      document.getElementById("ds_secure-main").style.display = "none";
      document.getElementById("ds_secure-li").style.backgroundColor = "";
      document.getElementById("ds_secure-btn").style.fontWeight = "";
  
      document.getElementById("ds_kits-main").style.display = "none";
      document.getElementById("ds_kits-li").style.backgroundColor = "";
      document.getElementById("ds_kits-btn").style.fontWeight = "";
  
      document.getElementById("ds_kitsItem-main").style.display = "none";
      document.getElementById("ds_kitsItem2-main").style.display = "none";
      document.getElementById("ds_kitsItem3-main").style.display = "none";
      document.getElementById("ds_kitsItem4-main").style.display = "none";
      document.getElementById("ds_kitsItem5-main").style.display = "none";
      document.getElementById("ds_kitsItem6-main").style.display = "none";
      document.getElementById("ds_kitsItem7-main").style.display = "none";
      document.getElementById("ds_kitsItem8-main").style.display = "none";
      document.getElementById("ds_kitsItem9-main").style.display = "none";
      document.getElementById("ds_kitsItem10-main").style.display = "none";
      document.getElementById("ds_kitsItem11-main").style.display = "none";
      document.getElementById("ds_kitsItem12-main").style.display = "none";
      document.getElementById("ds_kitsItem13-main").style.display = "none";
  
      document.getElementById("ds_kuber-main").style.display = "none";
      document.getElementById("ds_kuber-li").style.backgroundColor = "";
      document.getElementById("ds_kuber-btn").style.fontWeight = "";
  
      document.getElementById("ds_legacy-main").style.display = "none";
      document.getElementById("ds_legacy-li").style.backgroundColor = "";
      document.getElementById("ds_legacy-btn").style.fontWeight = "";
  
      document.getElementById("ds_library-main").style.display = "none";
      document.getElementById("ds_library-li").style.backgroundColor = "";
      document.getElementById("ds_library-btn").style.fontWeight = "";
  
      document.getElementById("ds_libraries-main").style.display = "none";
      document.getElementById("ds_libraries2-main").style.display = "none";
      document.getElementById("ds_libraries3-main").style.display = "none";
      document.getElementById("ds_libraries4-main").style.display = "none";
  
      document.getElementById("ds_modal-main").style.display = "none";
      document.getElementById("ds_modal-li").style.backgroundColor = "";
      document.getElementById("ds_modal-btn").style.fontWeight = "";
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals18-main").style.display = "none";
  
      document.getElementById("ds_plug-main").style.display = "none";
      document.getElementById("ds_plug-li").style.backgroundColor = "";
      document.getElementById("ds_plug-btn").style.fontWeight = "";
  
      document.getElementById("ds_power-main").style.display = "none";
      document.getElementById("ds_power-li").style.backgroundColor = "";
      document.getElementById("ds_power-btn").style.fontWeight = "";
  
      document.getElementById("ds_powers-main").style.display = "none";
  
      document.getElementById("ds_product-main").style.display = "none";
      document.getElementById("ds_product-li").style.backgroundColor = "";
      document.getElementById("ds_product-btn").style.fontWeight = "";
  
      document.getElementById("ds_refer-main").style.display = "none";
      document.getElementById("ds_refer-li").style.backgroundColor = "";
      document.getElementById("ds_refer-btn").style.fontWeight = "";
  
      document.getElementById("ds_reference-main").style.display = "none";
      document.getElementById("ds_reference2-main").style.display = "none";
      document.getElementById("ds_reference3-main").style.display = "none";
      document.getElementById("ds_reference4-main").style.display = "none";
      document.getElementById("ds_reference5-main").style.display = "none";
      document.getElementById("ds_reference6-main").style.display = "none";
      document.getElementById("ds_reference7-main").style.display = "none";
      document.getElementById("ds_reference8-main").style.display = "none";
      document.getElementById("ds_reference9-main").style.display = "none";
      document.getElementById("ds_reference10-main").style.display = "none";
  
      document.getElementById("ds_run-main").style.display = "none";
      document.getElementById("ds_run-li").style.backgroundColor = "";
      document.getElementById("ds_run-btn").style.fontWeight = "";
  
      document.getElementById("ds_validation-main").style.display = "none";
      document.getElementById("ds_validation-li").style.backgroundColor = "";
      document.getElementById("ds_validation-btn").style.fontWeight = "";
  
      document.getElementById("ds_validHard-main").style.display = "none";
      document.getElementById("ds_validHard2-main").style.display = "none";
      document.getElementById("ds_validHard3-main").style.display = "none";
    } else if (a == 10) {
      document.getElementById("ds_service-main").style.display = "block";
      document.getElementById("ds_service-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_service-btn").style.fontWeight = "bold";
      document.getElementById("ds_service-height").style.height = "392px";
      document.getElementById("ds_service-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
      document.getElementById("ds_debug-main").style.display = "none";
      document.getElementById("ds_debug-li").style.backgroundColor = "";
      document.getElementById("ds_debug-btn").style.fontWeight = "";
  
      document.getElementById("ds_center-main").style.display = "none";
      document.getElementById("ds_center-li").style.backgroundColor = "";
      document.getElementById("ds_center-btn").style.fontWeight = "";
  
      document.getElementById("managers").style.display = "none";
      document.getElementById("ds_manage-li").style.backgroundColor = "";
      document.getElementById("ds_manage-btn").style.fontWeight = "";
  
      document.getElementById("ds_Anal-main").style.display = "none";
      document.getElementById("ds_anal-btn").style.fontWeight = "";
      document.getElementById("ds_anal-li").style.backgroundColor = "";
  
      document.getElementById("ds_bois-main").style.display = "none";
      document.getElementById("ds_bios-btn").style.fontWeight = "";
      document.getElementById("ds_bios-li").style.backgroundColor = "";
  
      document.getElementById("ds_cable-main").style.display = "none";
      document.getElementById("ds_cable-li").style.backgroundColor = "";
      document.getElementById("ds_cable-btn").style.fontWeight = "";
  
      document.getElementById("ds_bois-hardware-main").style.display = "none";
      document.getElementById("ds_boot-loader-main").style.display = "none";
      document.getElementById("ds-dynamic-main").style.display = "none";
      document.getElementById("ds_firm-main").style.display = "none";
      document.getElementById("ds_apps-main").style.display = "none";
  
      document.getElementById("ds_code-main").style.display = "none";
      document.getElementById("ds_code-li").style.backgroundColor = "";
      document.getElementById("ds_code-btn").style.fontWeight = "";
  
      document.getElementById("ds_contain-main").style.display = "none";
      document.getElementById("ds_contain-li").style.backgroundColor = "";
      document.getElementById("ds_contain-btn").style.fontWeight = "";
  
      document.getElementById("ds_deep-main").style.display = "none";
      document.getElementById("ds_infer-main").style.display = "none";
      document.getElementById("ds_deploy-main").style.display = "none";
      document.getElementById("ds_machine-main").style.display = "none";
      document.getElementById("ds_valid-main").style.display = "none";
      document.getElementById("ds_nature-main").style.display = "none";
      document.getElementById("ds_oneapi-main").style.display = "none";
      document.getElementById("ds_open-main").style.display = "none";
      document.getElementById("ds_media-main").style.display = "none";
      document.getElementById("ds_media2-main").style.display = "none";
      document.getElementById("ds_stack-main").style.display = "none";
      document.getElementById("ds_data-main").style.display = "none";
      document.getElementById("ds_data2-main").style.display = "none";
  
      document.getElementById("ds_debug-main").style.display = "none";
      document.getElementById("ds_debug-li").style.backgroundColor = "";
      document.getElementById("ds_debug-btn").style.fontWeight = "";
  
      document.getElementById("ds_stream-main").style.display = "none";
      document.getElementById("ds_stream-li").style.backgroundColor = "";
      document.getElementById("ds_stream-btn").style.fontWeight = "";
  
      document.getElementById("ds_emul-main").style.display = "none";
      document.getElementById("ds_emul-li").style.backgroundColor = "";
      document.getElementById("ds_emul-btn").style.fontWeight = "";
  
      document.getElementById("ds_emulation-main").style.display = "none";
      document.getElementById("ds_emulation2-main").style.display = "none";
  
      document.getElementById("ds_fgpa-main").style.display = "none";
      document.getElementById("ds_fgpa-li").style.backgroundColor = "";
      document.getElementById("ds_fgpa-btn").style.fontWeight = "";
  
      document.getElementById("ds_fgpaTools-main").style.display = "none";
      document.getElementById("ds_embedded-main").style.display = "none";
      document.getElementById("ds_fgpaTools2-main").style.display = "none";
      document.getElementById("ds_prime-main").style.display = "none";
      document.getElementById("ds_prime2-main").style.display = "none";
      document.getElementById("ds_fgpaTools3-main").style.display = "none";
  
      document.getElementById("ds_frame-main").style.display = "none";
      document.getElementById("ds_frame-li").style.backgroundColor = "";
      document.getElementById("ds_frame-btn").style.fontWeight = "";
  
      document.getElementById("ds_helm-main").style.display = "none";
      document.getElementById("ds_helm-li").style.backgroundColor = "";
      document.getElementById("ds_helm-btn").style.fontWeight = "";
  
      document.getElementById("ds_secure-main").style.display = "none";
      document.getElementById("ds_secure-li").style.backgroundColor = "";
      document.getElementById("ds_secure-btn").style.fontWeight = "";
  
      document.getElementById("ds_kits-main").style.display = "none";
      document.getElementById("ds_kits-li").style.backgroundColor = "";
      document.getElementById("ds_kits-btn").style.fontWeight = "";
  
      document.getElementById("ds_kitsItem-main").style.display = "none";
      document.getElementById("ds_kitsItem2-main").style.display = "none";
      document.getElementById("ds_kitsItem3-main").style.display = "none";
      document.getElementById("ds_kitsItem4-main").style.display = "none";
      document.getElementById("ds_kitsItem5-main").style.display = "none";
      document.getElementById("ds_kitsItem6-main").style.display = "none";
      document.getElementById("ds_kitsItem7-main").style.display = "none";
      document.getElementById("ds_kitsItem8-main").style.display = "none";
      document.getElementById("ds_kitsItem9-main").style.display = "none";
      document.getElementById("ds_kitsItem10-main").style.display = "none";
      document.getElementById("ds_kitsItem11-main").style.display = "none";
      document.getElementById("ds_kitsItem12-main").style.display = "none";
      document.getElementById("ds_kitsItem13-main").style.display = "none";
  
      document.getElementById("ds_kuber-main").style.display = "none";
      document.getElementById("ds_kuber-li").style.backgroundColor = "";
      document.getElementById("ds_kuber-btn").style.fontWeight = "";
  
      document.getElementById("ds_legacy-main").style.display = "none";
      document.getElementById("ds_legacy-li").style.backgroundColor = "";
      document.getElementById("ds_legacy-btn").style.fontWeight = "";
  
      document.getElementById("ds_library-main").style.display = "none";
      document.getElementById("ds_library-li").style.backgroundColor = "";
      document.getElementById("ds_library-btn").style.fontWeight = "";
  
      document.getElementById("ds_libraries-main").style.display = "none";
      document.getElementById("ds_libraries2-main").style.display = "none";
      document.getElementById("ds_libraries3-main").style.display = "none";
      document.getElementById("ds_libraries4-main").style.display = "none";
  
      document.getElementById("ds_modal-main").style.display = "none";
      document.getElementById("ds_modal-li").style.backgroundColor = "";
      document.getElementById("ds_modal-btn").style.fontWeight = "";
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals18-main").style.display = "none";
  
      document.getElementById("ds_plug-main").style.display = "none";
      document.getElementById("ds_plug-li").style.backgroundColor = "";
      document.getElementById("ds_plug-btn").style.fontWeight = "";
  
      document.getElementById("ds_power-main").style.display = "none";
      document.getElementById("ds_power-li").style.backgroundColor = "";
      document.getElementById("ds_power-btn").style.fontWeight = "";
  
      document.getElementById("ds_powers-main").style.display = "none";
  
      document.getElementById("ds_product-main").style.display = "none";
      document.getElementById("ds_product-li").style.backgroundColor = "";
      document.getElementById("ds_product-btn").style.fontWeight = "";
  
      document.getElementById("ds_refer-main").style.display = "none";
      document.getElementById("ds_refer-li").style.backgroundColor = "";
      document.getElementById("ds_refer-btn").style.fontWeight = "";
  
      document.getElementById("ds_reference-main").style.display = "none";
      document.getElementById("ds_reference2-main").style.display = "none";
      document.getElementById("ds_reference3-main").style.display = "none";
      document.getElementById("ds_reference4-main").style.display = "none";
      document.getElementById("ds_reference5-main").style.display = "none";
      document.getElementById("ds_reference6-main").style.display = "none";
      document.getElementById("ds_reference7-main").style.display = "none";
      document.getElementById("ds_reference8-main").style.display = "none";
      document.getElementById("ds_reference9-main").style.display = "none";
      document.getElementById("ds_reference10-main").style.display = "none";
  
      document.getElementById("ds_run-main").style.display = "none";
      document.getElementById("ds_run-li").style.backgroundColor = "";
      document.getElementById("ds_run-btn").style.fontWeight = "";
  
      document.getElementById("ds_validation-main").style.display = "none";
      document.getElementById("ds_validation-li").style.backgroundColor = "";
      document.getElementById("ds_validation-btn").style.fontWeight = "";
  
      document.getElementById("ds_validHard-main").style.display = "none";
      document.getElementById("ds_validHard2-main").style.display = "none";
      document.getElementById("ds_validHard3-main").style.display = "none";
    } else if (a == 11) {
      document.getElementById("ds_stream-main").style.display = "block";
      document.getElementById("ds_stream-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_stream-btn").style.fontWeight = "bold";
      document.getElementById("ds_stream-height").style.height = "392px";
      document.getElementById("ds_stream-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
      document.getElementById("ds_center-main").style.display = "none";
      document.getElementById("ds_center-li").style.backgroundColor = "";
      document.getElementById("ds_center-btn").style.fontWeight = "";
  
      document.getElementById("managers").style.display = "none";
      document.getElementById("ds_manage-li").style.backgroundColor = "";
      document.getElementById("ds_manage-btn").style.fontWeight = "";
  
      document.getElementById("ds_Anal-main").style.display = "none";
      document.getElementById("ds_anal-btn").style.fontWeight = "";
      document.getElementById("ds_anal-li").style.backgroundColor = "";
  
      document.getElementById("ds_bois-main").style.display = "none";
      document.getElementById("ds_bios-btn").style.fontWeight = "";
      document.getElementById("ds_bios-li").style.backgroundColor = "";
  
      document.getElementById("ds_cable-main").style.display = "none";
      document.getElementById("ds_cable-li").style.backgroundColor = "";
      document.getElementById("ds_cable-btn").style.fontWeight = "";
  
      document.getElementById("ds_bois-hardware-main").style.display = "none";
      document.getElementById("ds_boot-loader-main").style.display = "none";
      document.getElementById("ds-dynamic-main").style.display = "none";
      document.getElementById("ds_firm-main").style.display = "none";
      document.getElementById("ds_apps-main").style.display = "none";
  
      document.getElementById("ds_code-main").style.display = "none";
      document.getElementById("ds_code-li").style.backgroundColor = "";
      document.getElementById("ds_code-btn").style.fontWeight = "";
  
      document.getElementById("ds_contain-main").style.display = "none";
      document.getElementById("ds_contain-li").style.backgroundColor = "";
      document.getElementById("ds_contain-btn").style.fontWeight = "";
  
      document.getElementById("ds_deep-main").style.display = "none";
      document.getElementById("ds_infer-main").style.display = "none";
      document.getElementById("ds_deploy-main").style.display = "none";
      document.getElementById("ds_machine-main").style.display = "none";
      document.getElementById("ds_valid-main").style.display = "none";
      document.getElementById("ds_nature-main").style.display = "none";
      document.getElementById("ds_oneapi-main").style.display = "none";
      document.getElementById("ds_open-main").style.display = "none";
      document.getElementById("ds_media-main").style.display = "none";
      document.getElementById("ds_media2-main").style.display = "none";
      document.getElementById("ds_stack-main").style.display = "none";
      document.getElementById("ds_data-main").style.display = "none";
      document.getElementById("ds_data2-main").style.display = "none";
  
      document.getElementById("ds_debug-main").style.display = "none";
      document.getElementById("ds_debug-li").style.backgroundColor = "";
      document.getElementById("ds_debug-btn").style.fontWeight = "";
  
      document.getElementById("ds_service-main").style.display = "none";
      document.getElementById("ds_service-li").style.backgroundColor = "";
      document.getElementById("ds_service-btn").style.fontWeight = "";
  
      document.getElementById("ds_emul-main").style.display = "none";
      document.getElementById("ds_emul-li").style.backgroundColor = "";
      document.getElementById("ds_emul-btn").style.fontWeight = "";
  
      document.getElementById("ds_emulation-main").style.display = "none";
      document.getElementById("ds_emulation2-main").style.display = "none";
  
      document.getElementById("ds_fgpa-main").style.display = "none";
      document.getElementById("ds_fgpa-li").style.backgroundColor = "";
      document.getElementById("ds_fgpa-btn").style.fontWeight = "";
  
      document.getElementById("ds_fgpaTools-main").style.display = "none";
      document.getElementById("ds_embedded-main").style.display = "none";
      document.getElementById("ds_fgpaTools2-main").style.display = "none";
      document.getElementById("ds_prime-main").style.display = "none";
      document.getElementById("ds_prime2-main").style.display = "none";
      document.getElementById("ds_fgpaTools3-main").style.display = "none";
  
      document.getElementById("ds_frame-main").style.display = "none";
      document.getElementById("ds_frame-li").style.backgroundColor = "";
      document.getElementById("ds_frame-btn").style.fontWeight = "";
  
      document.getElementById("ds_helm-main").style.display = "none";
      document.getElementById("ds_helm-li").style.backgroundColor = "";
      document.getElementById("ds_helm-btn").style.fontWeight = "";
  
      document.getElementById("ds_secure-main").style.display = "none";
      document.getElementById("ds_secure-li").style.backgroundColor = "";
      document.getElementById("ds_secure-btn").style.fontWeight = "";
  
      document.getElementById("ds_kits-main").style.display = "none";
      document.getElementById("ds_kits-li").style.backgroundColor = "";
      document.getElementById("ds_kits-btn").style.fontWeight = "";
  
      document.getElementById("ds_kitsItem-main").style.display = "none";
      document.getElementById("ds_kitsItem2-main").style.display = "none";
      document.getElementById("ds_kitsItem3-main").style.display = "none";
      document.getElementById("ds_kitsItem4-main").style.display = "none";
      document.getElementById("ds_kitsItem5-main").style.display = "none";
      document.getElementById("ds_kitsItem6-main").style.display = "none";
      document.getElementById("ds_kitsItem7-main").style.display = "none";
      document.getElementById("ds_kitsItem8-main").style.display = "none";
      document.getElementById("ds_kitsItem9-main").style.display = "none";
      document.getElementById("ds_kitsItem10-main").style.display = "none";
      document.getElementById("ds_kitsItem11-main").style.display = "none";
      document.getElementById("ds_kitsItem12-main").style.display = "none";
      document.getElementById("ds_kitsItem13-main").style.display = "none";
  
      document.getElementById("ds_kuber-main").style.display = "none";
      document.getElementById("ds_kuber-li").style.backgroundColor = "";
      document.getElementById("ds_kuber-btn").style.fontWeight = "";
  
      document.getElementById("ds_legacy-main").style.display = "none";
      document.getElementById("ds_legacy-li").style.backgroundColor = "";
      document.getElementById("ds_legacy-btn").style.fontWeight = "";
  
      document.getElementById("ds_library-main").style.display = "none";
      document.getElementById("ds_library-li").style.backgroundColor = "";
      document.getElementById("ds_library-btn").style.fontWeight = "";
  
      document.getElementById("ds_libraries-main").style.display = "none";
      document.getElementById("ds_libraries2-main").style.display = "none";
      document.getElementById("ds_libraries3-main").style.display = "none";
      document.getElementById("ds_libraries4-main").style.display = "none";
  
      document.getElementById("ds_modal-main").style.display = "none";
      document.getElementById("ds_modal-li").style.backgroundColor = "";
      document.getElementById("ds_modal-btn").style.fontWeight = "";
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals18-main").style.display = "none";
  
      document.getElementById("ds_plug-main").style.display = "none";
      document.getElementById("ds_plug-li").style.backgroundColor = "";
      document.getElementById("ds_plug-btn").style.fontWeight = "";
  
      document.getElementById("ds_power-main").style.display = "none";
      document.getElementById("ds_power-li").style.backgroundColor = "";
      document.getElementById("ds_power-btn").style.fontWeight = "";
  
      document.getElementById("ds_powers-main").style.display = "none";
  
      document.getElementById("ds_product-main").style.display = "none";
      document.getElementById("ds_product-li").style.backgroundColor = "";
      document.getElementById("ds_product-btn").style.fontWeight = "";
  
      document.getElementById("ds_refer-main").style.display = "none";
      document.getElementById("ds_refer-li").style.backgroundColor = "";
      document.getElementById("ds_refer-btn").style.fontWeight = "";
  
      document.getElementById("ds_reference-main").style.display = "none";
      document.getElementById("ds_reference2-main").style.display = "none";
      document.getElementById("ds_reference3-main").style.display = "none";
      document.getElementById("ds_reference4-main").style.display = "none";
      document.getElementById("ds_reference5-main").style.display = "none";
      document.getElementById("ds_reference6-main").style.display = "none";
      document.getElementById("ds_reference7-main").style.display = "none";
      document.getElementById("ds_reference8-main").style.display = "none";
      document.getElementById("ds_reference9-main").style.display = "none";
      document.getElementById("ds_reference10-main").style.display = "none";
  
      document.getElementById("ds_run-main").style.display = "none";
      document.getElementById("ds_run-li").style.backgroundColor = "";
      document.getElementById("ds_run-btn").style.fontWeight = "";
  
      document.getElementById("ds_validation-main").style.display = "none";
      document.getElementById("ds_validation-li").style.backgroundColor = "";
      document.getElementById("ds_validation-btn").style.fontWeight = "";
  
      document.getElementById("ds_validHard-main").style.display = "none";
      document.getElementById("ds_validHard2-main").style.display = "none";
      document.getElementById("ds_validHard3-main").style.display = "none";
    } else if (a == 12) {
      document.getElementById("ds_emul-main").style.display = "block";
      document.getElementById("ds_emul-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_emul-btn").style.fontWeight = "bold";
      document.getElementById("ds_emul-height").style.height = "392px";
      document.getElementById("ds_emul-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_center-main").style.display = "none";
      document.getElementById("ds_center-li").style.backgroundColor = "";
      document.getElementById("ds_center-btn").style.fontWeight = "";
  
      document.getElementById("managers").style.display = "none";
      document.getElementById("ds_manage-li").style.backgroundColor = "";
      document.getElementById("ds_manage-btn").style.fontWeight = "";
  
      document.getElementById("ds_Anal-main").style.display = "none";
      document.getElementById("ds_anal-btn").style.fontWeight = "";
      document.getElementById("ds_anal-li").style.backgroundColor = "";
  
      document.getElementById("ds_bois-main").style.display = "none";
      document.getElementById("ds_bios-btn").style.fontWeight = "";
      document.getElementById("ds_bios-li").style.backgroundColor = "";
  
      document.getElementById("ds_cable-main").style.display = "none";
      document.getElementById("ds_cable-li").style.backgroundColor = "";
      document.getElementById("ds_cable-btn").style.fontWeight = "";
  
      document.getElementById("ds_bois-hardware-main").style.display = "none";
      document.getElementById("ds_boot-loader-main").style.display = "none";
      document.getElementById("ds-dynamic-main").style.display = "none";
      document.getElementById("ds_firm-main").style.display = "none";
      document.getElementById("ds_apps-main").style.display = "none";
  
      document.getElementById("ds_code-main").style.display = "none";
      document.getElementById("ds_code-li").style.backgroundColor = "";
      document.getElementById("ds_code-btn").style.fontWeight = "";
  
      document.getElementById("ds_contain-main").style.display = "none";
      document.getElementById("ds_contain-li").style.backgroundColor = "";
      document.getElementById("ds_contain-btn").style.fontWeight = "";
  
      document.getElementById("ds_deep-main").style.display = "none";
      document.getElementById("ds_infer-main").style.display = "none";
      document.getElementById("ds_deploy-main").style.display = "none";
      document.getElementById("ds_machine-main").style.display = "none";
      document.getElementById("ds_valid-main").style.display = "none";
      document.getElementById("ds_nature-main").style.display = "none";
      document.getElementById("ds_oneapi-main").style.display = "none";
      document.getElementById("ds_open-main").style.display = "none";
      document.getElementById("ds_media-main").style.display = "none";
      document.getElementById("ds_media2-main").style.display = "none";
      document.getElementById("ds_stack-main").style.display = "none";
      document.getElementById("ds_data-main").style.display = "none";
      document.getElementById("ds_data2-main").style.display = "none";
  
      document.getElementById("ds_debug-main").style.display = "none";
      document.getElementById("ds_debug-li").style.backgroundColor = "";
      document.getElementById("ds_debug-btn").style.fontWeight = "";
  
      document.getElementById("ds_service-main").style.display = "none";
      document.getElementById("ds_service-li").style.backgroundColor = "";
      document.getElementById("ds_service-btn").style.fontWeight = "";
  
      document.getElementById("ds_stream-main").style.display = "none";
      document.getElementById("ds_stream-li").style.backgroundColor = "";
      document.getElementById("ds_stream-btn").style.fontWeight = "";
  
      document.getElementById("ds_fgpa-main").style.display = "none";
      document.getElementById("ds_fgpa-li").style.backgroundColor = "";
      document.getElementById("ds_fgpa-btn").style.fontWeight = "";
  
      document.getElementById("ds_fgpaTools-main").style.display = "none";
      document.getElementById("ds_embedded-main").style.display = "none";
      document.getElementById("ds_fgpaTools2-main").style.display = "none";
      document.getElementById("ds_prime-main").style.display = "none";
      document.getElementById("ds_prime2-main").style.display = "none";
      document.getElementById("ds_fgpaTools3-main").style.display = "none";
  
      document.getElementById("ds_frame-main").style.display = "none";
      document.getElementById("ds_frame-li").style.backgroundColor = "";
      document.getElementById("ds_frame-btn").style.fontWeight = "";
  
      document.getElementById("ds_helm-main").style.display = "none";
      document.getElementById("ds_helm-li").style.backgroundColor = "";
      document.getElementById("ds_helm-btn").style.fontWeight = "";
  
      document.getElementById("ds_secure-main").style.display = "none";
      document.getElementById("ds_secure-li").style.backgroundColor = "";
      document.getElementById("ds_secure-btn").style.fontWeight = "";
  
      document.getElementById("ds_kits-main").style.display = "none";
      document.getElementById("ds_kits-li").style.backgroundColor = "";
      document.getElementById("ds_kits-btn").style.fontWeight = "";
  
      document.getElementById("ds_kitsItem-main").style.display = "none";
      document.getElementById("ds_kitsItem2-main").style.display = "none";
      document.getElementById("ds_kitsItem3-main").style.display = "none";
      document.getElementById("ds_kitsItem4-main").style.display = "none";
      document.getElementById("ds_kitsItem5-main").style.display = "none";
      document.getElementById("ds_kitsItem6-main").style.display = "none";
      document.getElementById("ds_kitsItem7-main").style.display = "none";
      document.getElementById("ds_kitsItem8-main").style.display = "none";
      document.getElementById("ds_kitsItem9-main").style.display = "none";
      document.getElementById("ds_kitsItem10-main").style.display = "none";
      document.getElementById("ds_kitsItem11-main").style.display = "none";
      document.getElementById("ds_kitsItem12-main").style.display = "none";
      document.getElementById("ds_kitsItem13-main").style.display = "none";
  
      document.getElementById("ds_kuber-main").style.display = "none";
      document.getElementById("ds_kuber-li").style.backgroundColor = "";
      document.getElementById("ds_kuber-btn").style.fontWeight = "";
  
      document.getElementById("ds_legacy-main").style.display = "none";
      document.getElementById("ds_legacy-li").style.backgroundColor = "";
      document.getElementById("ds_legacy-btn").style.fontWeight = "";
  
      document.getElementById("ds_library-main").style.display = "none";
      document.getElementById("ds_library-li").style.backgroundColor = "";
      document.getElementById("ds_library-btn").style.fontWeight = "";
  
      document.getElementById("ds_libraries-main").style.display = "none";
      document.getElementById("ds_libraries2-main").style.display = "none";
      document.getElementById("ds_libraries3-main").style.display = "none";
      document.getElementById("ds_libraries4-main").style.display = "none";
  
      document.getElementById("ds_modal-main").style.display = "none";
      document.getElementById("ds_modal-li").style.backgroundColor = "";
      document.getElementById("ds_modal-btn").style.fontWeight = "";
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals18-main").style.display = "none";
  
      document.getElementById("ds_plug-main").style.display = "none";
      document.getElementById("ds_plug-li").style.backgroundColor = "";
      document.getElementById("ds_plug-btn").style.fontWeight = "";
  
      document.getElementById("ds_power-main").style.display = "none";
      document.getElementById("ds_power-li").style.backgroundColor = "";
      document.getElementById("ds_power-btn").style.fontWeight = "";
  
      document.getElementById("ds_powers-main").style.display = "none";
  
      document.getElementById("ds_product-main").style.display = "none";
      document.getElementById("ds_product-li").style.backgroundColor = "";
      document.getElementById("ds_product-btn").style.fontWeight = "";
  
      document.getElementById("ds_refer-main").style.display = "none";
      document.getElementById("ds_refer-li").style.backgroundColor = "";
      document.getElementById("ds_refer-btn").style.fontWeight = "";
  
      document.getElementById("ds_reference-main").style.display = "none";
      document.getElementById("ds_reference2-main").style.display = "none";
      document.getElementById("ds_reference3-main").style.display = "none";
      document.getElementById("ds_reference4-main").style.display = "none";
      document.getElementById("ds_reference5-main").style.display = "none";
      document.getElementById("ds_reference6-main").style.display = "none";
      document.getElementById("ds_reference7-main").style.display = "none";
      document.getElementById("ds_reference8-main").style.display = "none";
      document.getElementById("ds_reference9-main").style.display = "none";
      document.getElementById("ds_reference10-main").style.display = "none";
  
      document.getElementById("ds_run-main").style.display = "none";
      document.getElementById("ds_run-li").style.backgroundColor = "";
      document.getElementById("ds_run-btn").style.fontWeight = "";
  
      document.getElementById("ds_validation-main").style.display = "none";
      document.getElementById("ds_validation-li").style.backgroundColor = "";
      document.getElementById("ds_validation-btn").style.fontWeight = "";
  
      document.getElementById("ds_validHard-main").style.display = "none";
      document.getElementById("ds_validHard2-main").style.display = "none";
      document.getElementById("ds_validHard3-main").style.display = "none";
    } 
  }
  
  let anal = [
    {
      element: "Intel® Advisor",
    },
    {
      element: "Intel® Architecture Code Analyzer",
    },
    {
      element: "Intel® Cluster Checker",
    },
    {
      element: "Intel® Graphics Performance Analyzers",
    },
    {
      element: "Intel® Inspector",
    },
    {
      element: "Intel® SoC Watch",
    },
    {
      element: "Intel® Trace Analyzer and Collector",
    },
    {
      element: "Intel® VTune™ Profiler (formerly Intel® VTune™ Amplifier)",
    },
  ];
  
  let analUl = document.getElementById("ds_anal-ul");
  
  for (let i = 0; i < anal.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${anal[i].element}</a>`;
    analUl.appendChild(li);
  }
  
  let Hardware = [
    {
      miniData: "TSP-BGA1",
    },
    {
      miniData: "TSP-PCH-2 (LPT-M)",
    },
  ];
  
  let hardware = document.getElementById("ds_hard-ul");
  
  for (let i = 0; i < Hardware.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${Hardware[i].miniData}</a>`;
    hardware.appendChild(li);
  }
  
  function bois(b) {
    if (b == 1) {
      document.getElementById("ds_bois-hardware-main").style.display = "block";
      document.getElementById("ds_bois-hard-btn").style.fontWeight = "bold";
      document.getElementById("ds_bois-hard-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds-bois-hardware-height").style.height = "392px";
      document.getElementById("ds_bois-hardware-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
      //  ds-bois-hardware-height
  
      document.getElementById("ds_boot-loader-main").style.display = "none";
      document.getElementById("ds_boot-btn").style.fontWeight = "";
      document.getElementById("ds_boot-li").style.backgroundColor = "";
  
      document.getElementById("ds-dynamic-main").style.display = "none";
      document.getElementById("ds_dymenic-btn").style.fontWeight = "";
      document.getElementById("ds_dymenic-li").style.backgroundColor = "";
  
      document.getElementById("ds_firm-main").style.display = "none";
      document.getElementById("ds_firm-btn").style.fontWeight = "";
      document.getElementById("ds_firm-li").style.backgroundColor = "";
    } else if (b == 2) {
      document.getElementById("ds_boot-loader-main").style.display = "block";
      document.getElementById("ds_boot-btn").style.fontWeight = "bold";
      document.getElementById("ds_boot-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds-boot-loader-height").style.height = "392px";
      document.getElementById("ds_boot-loader-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_bois-hardware-main").style.display = "none";
      document.getElementById("ds_bois-hard-btn").style.fontWeight = "";
      document.getElementById("ds_bois-hard-li").style.backgroundColor = "";
  
      document.getElementById("ds-dynamic-main").style.display = "none";
      document.getElementById("ds_dymenic-btn").style.fontWeight = "";
      document.getElementById("ds_dymenic-li").style.backgroundColor = "";
  
      document.getElementById("ds_firm-main").style.display = "none";
      document.getElementById("ds_firm-btn").style.fontWeight = "";
      document.getElementById("ds_firm-li").style.backgroundColor = "";
    } else if (b == 3) {
      document.getElementById("ds-dynamic-main").style.display = "block";
      document.getElementById("ds_dymenic-btn").style.fontWeight = "bold";
      document.getElementById("ds_dymenic-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds-dynamic-height").style.height = "392px";
      document.getElementById("ds-dynamic-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_boot-loader-main").style.display = "none";
      document.getElementById("ds_boot-btn").style.fontWeight = "";
      document.getElementById("ds_boot-li").style.backgroundColor = "";
  
      document.getElementById("ds_bois-hardware-main").style.display = "none";
      document.getElementById("ds_bois-hard-btn").style.fontWeight = "";
      document.getElementById("ds_bois-hard-li").style.backgroundColor = "";
  
      document.getElementById("ds_firm-main").style.display = "none";
      document.getElementById("ds_firm-btn").style.fontWeight = "";
      document.getElementById("ds_firm-li").style.backgroundColor = "";
    } else if (b == 4) {
      document.getElementById("ds_firm-main").style.display = "block";
      document.getElementById("ds_firm-btn").style.fontWeight = "bold";
      document.getElementById("ds_firm-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_firm-height").style.height = "392px";
      document.getElementById("ds_firm-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_bois-hardware-main").style.display = "none";
      document.getElementById("ds_bois-hard-btn").style.fontWeight = "";
      document.getElementById("ds_bois-hard-li").style.backgroundColor = "";
  
      document.getElementById("ds_boot-loader-main").style.display = "none";
      document.getElementById("ds_boot-btn").style.fontWeight = "";
      document.getElementById("ds_boot-li").style.backgroundColor = "";
  
      document.getElementById("ds-dynamic-main").style.display = "none";
      document.getElementById("ds_dymenic-btn").style.fontWeight = "";
      document.getElementById("ds_dymenic-li").style.backgroundColor = "";
    }
  }
  
  let boot_loader = [
    {
      boot: "Boot Loader Development Kit",
    },
  ];
  
  let boot_ul = document.getElementById("ds_boot-loader-ul");
  
  for (let i = 0; i < boot_loader.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${boot_loader[i].boot}</a>`;
    boot_ul.appendChild(li);
  }
  
  let dynamic = [
    {
      element: "Intel® Dynamic Application Loader",
    },
    {
      element: "SDK for Intel® Dynamic Application Loader (Intel® DAL)",
    },
  ];
  
  let dynamic_ul = document.getElementById("ds-dynamic-ul");
  
  for (let i = 0; i < dynamic.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${dynamic[i].element}</a>`;
    dynamic_ul.appendChild(li);
  }
  
  let firmware = [
    {
      element: "Intel® Firmware Support Package (Intel® FSP)",
    },
    {
      element: "Intel® Firmware Support Package (Intel® FSP) - Open Source",
    },
    {
      element: "UEFI",
    },
  ];
  
  let firm_ul = document.getElementById("ds_firm-ul");
  
  for (let i = 0; i < firmware.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${firmware[i].element}</a>`;
    firm_ul.appendChild(li);
  }
  
  function apps() {
    // console.log("Ok");
    document.getElementById("ds_apps-main").style.display = "block";
    document.getElementById("ds_apps-btn").style.fontWeight = "bold";
    document.getElementById("ds_apps-li").style.backgroundColor = "#f3f3f3";
    document.getElementById("ds_apps-height").style.height = "392px";
    document.getElementById("ds_apps-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
    
  }
  
  let apps_hard = [
    {
      element: "C02 - Intel SVT DCI DbC3 A-to-C DFP Debug Cable 1 Meter (KMD)",
    },
    {
      element: 'C03 - Intel® SVT CCA 6" USB Cable A-to-C',
    },
    {
      element: "C06 - Intel SVT DCI DbC2/3 A-to-C UFP Debug Cable 1 Meter",
    },
    {
      element: "Intel® SVT Closed Chassis Adapter",
    },
    {
      element: "ITP-XDP 3BR Kit",
    },
  ];
  
  let app_ul = document.getElementById("ds_apps-ul");
  
  for (let i = 0; i < apps_hard.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${apps_hard[i].element}</a>`;
    app_ul.appendChild(li);
  }
  
  let code = [
    {
      element: "Intel® DPC++ Compatibility Tool",
    },
  ];
  
  let code_ul = document.getElementById("ds_code-ul");
  
  for (let i = 0; i < code.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${code[i].element}</a>`;
    code_ul.appendChild(li);
  }
  
  let compiler = [
    {
      element: "Intel® C++ Compiler",
    },
    {
      element:
        "Intel® C++ Compiler Standard Edition for Embedded Systems with Bi-Endian Technology",
    },
    {
      element: "Intel® Fortran Compiler",
    },
    {
      element: "Intel® Implicit SPMD Program Compiler (ISPC) - Open Source",
    },
    {
      element: "Intel® oneAPI DPC++/C++ Compiler",
    },
  ];
  
  let ds_compileUl = document.getElementById("ds_compile-ul");
  
  for (let i = 0; i < compiler.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${compiler[i].element}</a>`;
    ds_compileUl.appendChild(li);
  }
  
  function deeplearn(c) {
    if (c == 1) {
      document.getElementById("ds_deep-main").style.display = "block";
      document.getElementById("ds_deep-btn").style.fontWeight = "bold";
      document.getElementById("ds_deep-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_deep-height").style.height = "392px";
      document.getElementById("ds_deep-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_deploy-main").style.display = "none";
      document.getElementById("ds_deploy-btn").style.fontWeight = "";
      document.getElementById("ds_deploy-li").style.backgroundColor = "";
  
      document.getElementById("ds_machine-main").style.display = "none";
      document.getElementById("ds_machine-btn").style.fontWeight = "";
      document.getElementById("ds_machine-li").style.backgroundColor = "";
  
      document.getElementById("ds_valid-main").style.display = "none";
      document.getElementById("ds_valid-btn").style.fontWeight = "";
      document.getElementById("ds_valid-li").style.backgroundColor = "";
  
      document.getElementById("ds_nature-main").style.display = "none";
      document.getElementById("ds_nature-btn").style.fontWeight = "";
      document.getElementById("ds_nature-li").style.backgroundColor = "";
  
      document.getElementById("ds_oneapi-main").style.display = "none";
      document.getElementById("ds_oneapi-btn").style.fontWeight = "";
      document.getElementById("ds_oneapi-li").style.backgroundColor = "";
  
      document.getElementById("ds_open-main").style.display = "none";
      document.getElementById("ds_open-btn").style.fontWeight = "";
      document.getElementById("ds_open-li").style.backgroundColor = "";
  
      document.getElementById("ds_media-main").style.display = "none";
      document.getElementById("ds_media2-main").style.display = "none";
  
      document.getElementById("ds_stack-main").style.display = "none";
      document.getElementById("ds_stack-btn").style.fontWeight = "";
      document.getElementById("ds_stack-li").style.backgroundColor = "";
  
      document.getElementById("ds_data-main").style.display = "none";
      document.getElementById("ds_data2-main").style.display = "none";
    } else if (c == 2) {
      document.getElementById("ds_deploy-main").style.display = "block";
      document.getElementById("ds_deploy-btn").style.fontWeight = "bold";
      document.getElementById("ds_deploy-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_deploy-height").style.height = "392px";
      document.getElementById("ds_deploy-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_deep-main").style.display = "none";
      document.getElementById("ds_deep-btn").style.fontWeight = "";
      document.getElementById("ds_deep-li").style.backgroundColor = "";
  
      document.getElementById("ds_train-main").style.display = "none";
      document.getElementById("ds_infer-main").style.display = "none";
  
      document.getElementById("ds_machine-main").style.display = "none";
      document.getElementById("ds_machine-btn").style.fontWeight = "";
      document.getElementById("ds_machine-li").style.backgroundColor = "";
  
      document.getElementById("ds_valid-main").style.display = "none";
      document.getElementById("ds_valid-btn").style.fontWeight = "";
      document.getElementById("ds_valid-li").style.backgroundColor = "";
  
      document.getElementById("ds_nature-main").style.display = "none";
      document.getElementById("ds_nature-btn").style.fontWeight = "";
      document.getElementById("ds_nature-li").style.backgroundColor = "";
  
      document.getElementById("ds_oneapi-main").style.display = "none";
      document.getElementById("ds_oneapi-btn").style.fontWeight = "";
      document.getElementById("ds_oneapi-li").style.backgroundColor = "";
  
      document.getElementById("ds_open-main").style.display = "none";
      document.getElementById("ds_open-btn").style.fontWeight = "";
      document.getElementById("ds_open-li").style.backgroundColor = "";
  
      document.getElementById("ds_media-main").style.display = "none";
      document.getElementById("ds_media2-main").style.display = "none";
  
      document.getElementById("ds_stack-main").style.display = "none";
      document.getElementById("ds_stack-btn").style.fontWeight = "";
      document.getElementById("ds_stack-li").style.backgroundColor = "";
  
      document.getElementById("ds_data-main").style.display = "none";
      document.getElementById("ds_data2-main").style.display = "none";
    } else if (c == 3) {
      document.getElementById("ds_machine-main").style.display = "block";
      document.getElementById("ds_machine-btn").style.fontWeight = "bold";
      document.getElementById("ds_machine-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_machine-height").style.height = "392px";
      document.getElementById("ds_machine-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_deep-main").style.display = "none";
      document.getElementById("ds_deep-btn").style.fontWeight = "";
      document.getElementById("ds_deep-li").style.backgroundColor = "";
  
      document.getElementById("ds_deploy-main").style.display = "none";
      document.getElementById("ds_deploy-btn").style.fontWeight = "";
      document.getElementById("ds_deploy-li").style.backgroundColor = "";
  
      document.getElementById("ds_train-main").style.display = "none";
      document.getElementById("ds_infer-main").style.display = "none";
  
      document.getElementById("ds_nature-main").style.display = "none";
      document.getElementById("ds_nature-btn").style.fontWeight = "";
      document.getElementById("ds_nature-li").style.backgroundColor = "";
  
      document.getElementById("ds_oneapi-main").style.display = "none";
      document.getElementById("ds_oneapi-btn").style.fontWeight = "";
      document.getElementById("ds_oneapi-li").style.backgroundColor = "";
  
      document.getElementById("ds_open-main").style.display = "none";
      document.getElementById("ds_open-btn").style.fontWeight = "";
      document.getElementById("ds_open-li").style.backgroundColor = "";
  
      document.getElementById("ds_media-main").style.display = "none";
      document.getElementById("ds_media2-main").style.display = "none";
  
      document.getElementById("ds_stack-main").style.display = "none";
      document.getElementById("ds_stack-btn").style.fontWeight = "";
      document.getElementById("ds_stack-li").style.backgroundColor = "";
  
      document.getElementById("ds_data-main").style.display = "none";
      document.getElementById("ds_data2-main").style.display = "none";
    } else if (c == 4) {
      document.getElementById("ds_nature-main").style.display = "block";
      document.getElementById("ds_nature-btn").style.fontWeight = "bold";
      document.getElementById("ds_nature-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_nature-height").style.height = "392px";
      document.getElementById("ds_nature-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_machine-main").style.display = "none";
      document.getElementById("ds_machine-btn").style.fontWeight = "";
      document.getElementById("ds_machine-li").style.backgroundColor = "";
  
      document.getElementById("ds_deep-main").style.display = "none";
      document.getElementById("ds_deep-btn").style.fontWeight = "";
      document.getElementById("ds_deep-li").style.backgroundColor = "";
  
      document.getElementById("ds_deploy-main").style.display = "none";
      document.getElementById("ds_deploy-btn").style.fontWeight = "";
      document.getElementById("ds_deploy-li").style.backgroundColor = "";
  
      document.getElementById("ds_train-main").style.display = "none";
      document.getElementById("ds_infer-main").style.display = "none";
      document.getElementById("ds_valid-main").style.display = "none";
  
      document.getElementById("ds_oneapi-main").style.display = "none";
      document.getElementById("ds_oneapi-btn").style.fontWeight = "";
      document.getElementById("ds_oneapi-li").style.backgroundColor = "";
  
      document.getElementById("ds_open-main").style.display = "none";
      document.getElementById("ds_open-btn").style.fontWeight = "";
      document.getElementById("ds_open-li").style.backgroundColor = "";
  
      document.getElementById("ds_media-main").style.display = "none";
      document.getElementById("ds_media2-main").style.display = "none";
  
      document.getElementById("ds_stack-main").style.display = "none";
      document.getElementById("ds_stack-btn").style.fontWeight = "";
      document.getElementById("ds_stack-li").style.backgroundColor = "";
  
      document.getElementById("ds_data-main").style.display = "none";
      document.getElementById("ds_data2-main").style.display = "none";
    } else if (c == 5) {
      document.getElementById("ds_oneapi-main").style.display = "block";
      document.getElementById("ds_oneapi-btn").style.fontWeight = "bold";
      document.getElementById("ds_oneapi-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_oneapi-height").style.height = "392px";
      document.getElementById("ds_oneapi-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_nature-main").style.display = "none";
      document.getElementById("ds_nature-btn").style.fontWeight = "";
      document.getElementById("ds_nature-li").style.backgroundColor = "";
  
      document.getElementById("ds_machine-main").style.display = "none";
      document.getElementById("ds_machine-btn").style.fontWeight = "";
      document.getElementById("ds_machine-li").style.backgroundColor = "";
  
      document.getElementById("ds_deep-main").style.display = "none";
      document.getElementById("ds_deep-btn").style.fontWeight = "";
      document.getElementById("ds_deep-li").style.backgroundColor = "";
  
      document.getElementById("ds_deploy-main").style.display = "none";
      document.getElementById("ds_deploy-btn").style.fontWeight = "";
      document.getElementById("ds_deploy-li").style.backgroundColor = "";
  
      document.getElementById("ds_train-main").style.display = "none";
      document.getElementById("ds_infer-main").style.display = "none";
      document.getElementById("ds_valid-main").style.display = "none";
  
      document.getElementById("ds_open-main").style.display = "none";
      document.getElementById("ds_open-btn").style.fontWeight = "";
      document.getElementById("ds_open-li").style.backgroundColor = "";
  
      document.getElementById("ds_media-main").style.display = "none";
      document.getElementById("ds_media2-main").style.display = "none";
  
      document.getElementById("ds_stack-main").style.display = "none";
      document.getElementById("ds_stack-btn").style.fontWeight = "";
      document.getElementById("ds_stack-li").style.backgroundColor = "";
  
      document.getElementById("ds_data-main").style.display = "none";
      document.getElementById("ds_data2-main").style.display = "none";
    } else if (c == 6) {
      document.getElementById("ds_open-main").style.display = "block";
      document.getElementById("ds_open-btn").style.fontWeight = "bold";
      document.getElementById("ds_open-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_open-height").style.height = "392px";
      document.getElementById("ds_open-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_oneapi-main").style.display = "none";
      document.getElementById("ds_oneapi-btn").style.fontWeight = "";
      document.getElementById("ds_oneapi-li").style.backgroundColor = "";
  
      document.getElementById("ds_nature-main").style.display = "none";
      document.getElementById("ds_nature-btn").style.fontWeight = "";
      document.getElementById("ds_nature-li").style.backgroundColor = "";
  
      document.getElementById("ds_machine-main").style.display = "none";
      document.getElementById("ds_machine-btn").style.fontWeight = "";
      document.getElementById("ds_machine-li").style.backgroundColor = "";
  
      document.getElementById("ds_deep-main").style.display = "none";
      document.getElementById("ds_deep-btn").style.fontWeight = "";
      document.getElementById("ds_deep-li").style.backgroundColor = "";
  
      document.getElementById("ds_deploy-main").style.display = "none";
      document.getElementById("ds_deploy-btn").style.fontWeight = "";
      document.getElementById("ds_deploy-li").style.backgroundColor = "";
  
      document.getElementById("ds_train-main").style.display = "none";
      document.getElementById("ds_infer-main").style.display = "none";
      document.getElementById("ds_valid-main").style.display = "none";
  
      document.getElementById("ds_media-main").style.display = "none";
      document.getElementById("ds_media2-main").style.display = "none";
  
      document.getElementById("ds_stack-main").style.display = "none";
      document.getElementById("ds_stack-btn").style.fontWeight = "";
      document.getElementById("ds_stack-li").style.backgroundColor = "";
  
      document.getElementById("ds_data-main").style.display = "none";
      document.getElementById("ds_data2-main").style.display = "none";
    } else if (c == 7) {
      document.getElementById("ds_stack-main").style.display = "block";
      document.getElementById("ds_stack-btn").style.fontWeight = "bold";
      document.getElementById("ds_stack-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_stack-height").style.height = "392px";
      document.getElementById("ds_stack-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_open-main").style.display = "none";
      document.getElementById("ds_open-btn").style.fontWeight = "";
      document.getElementById("ds_open-li").style.backgroundColor = "";
  
      document.getElementById("ds_oneapi-main").style.display = "none";
      document.getElementById("ds_oneapi-btn").style.fontWeight = "";
      document.getElementById("ds_oneapi-li").style.backgroundColor = "";
  
      document.getElementById("ds_nature-main").style.display = "none";
      document.getElementById("ds_nature-btn").style.fontWeight = "";
      document.getElementById("ds_nature-li").style.backgroundColor = "";
  
      document.getElementById("ds_machine-main").style.display = "none";
      document.getElementById("ds_machine-btn").style.fontWeight = "";
      document.getElementById("ds_machine-li").style.backgroundColor = "";
  
      document.getElementById("ds_deep-main").style.display = "none";
      document.getElementById("ds_deep-btn").style.fontWeight = "";
      document.getElementById("ds_deep-li").style.backgroundColor = "";
  
      document.getElementById("ds_deploy-main").style.display = "none";
      document.getElementById("ds_deploy-btn").style.fontWeight = "";
      document.getElementById("ds_deploy-li").style.backgroundColor = "";
  
      document.getElementById("ds_train-main").style.display = "none";
      document.getElementById("ds_infer-main").style.display = "none";
      document.getElementById("ds_valid-main").style.display = "none";
  
      document.getElementById("ds_media-main").style.display = "none";
      document.getElementById("ds_media2-main").style.display = "none";
    }
  }
  
  let ds_deepUl = document.getElementById("ds_deep-ul");
  
  let deep = [
    {
      element: "Optimize an R-FCN Int8 Inference Container with TensorFlow*",
    },
    {
      element:
        "Optimized Analytics Package for Spark* Platform (OAP for Spark* Platform)",
    },
    {
      element: "TensorFlow* Performance Comparison Jupyter* Notebooks",
    },
  ];
  
  for (let i = 0; i < deep.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${deep[i].element}</a>`;
    ds_deepUl.appendChild(li);
  }
  
  function inference() {
    document.getElementById("ds_infer-main").style.display = "block";
    document.getElementById("ds_infer-btn").style.fontWeight = "bold";
    document.getElementById("ds_infer-li").style.backgroundColor = "#f3f3f3";
    document.getElementById("ds_infer-height").style.height = "392px";
    document.getElementById("ds_infer-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
    document.getElementById("ds_train-main").style.display = "none";
    document.getElementById("ds_train-btn").style.fontWeight = "";
    document.getElementById("ds_train-li").style.backgroundColor = "";
  }
  
  let ds_inferUl = document.getElementById("ds_infer-ul");
  
  let inferUl = [
    {
      element: "3D U-Net FP32 Inference for TensorFlow* Container",
    },
    {
      element: "Optimize a Mask R-CNN FP32 Inference Container with TensorFlow*",
    },
    {
      element:
        "Optimize a MobileNet* V1 FP32 Inference Container with TensorFlow*",
    },
    {
      element:
        "Optimize a MobileNet* V1 Int8 Inference Container with TensorFlow*",
    },
    {
      element:
        "Optimize an Inception V3 FP32 Inference Container with TensorFlow*",
    },
    {
      element:
        "Optimize an Inception V3 Int8 Inference Container with TensorFlow*",
    },
    {
      element:
        "Optimize an Inception V4 FP32 Inference Container with TensorFlow*",
    },
    {
      element:
        "Optimize an Inception V4 Int8 Inference Container with TensorFlow*",
    },
    {
      element: "Optimize an NCF Inference Container with TensorFlow*",
    },
    {
      element: "ResNet101 FP32 Inference TensorFlow* Container",
    },
    {
      element: "ResNet101 Int8 Inference TensorFlow* Container",
    },
    {
      element: "ResNet50 BFloat16 Inference PyTorch* Container",
    },
    {
      element: "ResNet50 FP32 Inference PyTorch* Container",
    },
    {
      element: "ResNet50 FP32 Inference Tensorflow* Container",
    },
    {
      element: "ResNet50 Int8 Inference TensorFlow* Container",
    },
    {
      element: "ResNet50v1.5 BFloat16 Inference TensorFlow* Container",
    },
    {
      element: "ResNet50v1.5 FP32 Inference TensorFlow* Container",
    },
    {
      element: "ResNet50v1.5 Int8 Inference Tensorflow* Container",
    },
    {
      element: "RFCN FP32 Inference Tensorflow* Container",
    },
    {
      element: "RFCN FP32 Inference TensorFlow* Kubernetes* Package",
    },
    {
      element: "SSD-MobileNet FP32 Inference Tensorflow* Container",
    },
    {
      element: "SSD-MobileNet Int8 Inference TensorFlow* Container",
    },
    {
      element: "SSD-ResNet34 FP32 Inference Tensorflow* Container",
    },
    {
      element: "SSD-ResNet34 Int8 Inference Tensorflow* Container",
    },
    {
      element: "Transformer-LT MLPerf FP32 Inference Tensorflow* Container",
    },
    {
      element: "Transformer-LT Official FP32 Inference Tensorflow* Container",
    },
    {
      element: "UNet FP32 Inference Tensorflow* Container",
    },
    {
      element: "WaveNet FP32 Inference Tensorflow* Container",
    },
    {
      element: "Wide & Deep Large Dataset FP32 Inference TensorFlow* Container",
    },
    {
      element: "Wide & Deep Large Dataset Int8 Inference TensorFlow* Container",
    },
    {
      element: "Wide Deep FP32 Inference Tensorflow* Container",
    },
  ];
  
  for (let i = 0; i < inferUl.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${inferUl[i].element}</a>`;
    ds_inferUl.appendChild(li);
  }
  
  function training() {
    document.getElementById("ds_train-main").style.display = "block";
    document.getElementById("ds_train-btn").style.fontWeight = "bold";
    document.getElementById("ds_train-li").style.backgroundColor = "#f3f3f3";
    document.getElementById("ds_train-height").style.height = "392px";
    document.getElementById("ds_train-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
    document.getElementById("ds_infer-main").style.display = "none";
    document.getElementById("ds_infer-btn").style.fontWeight = "";
    document.getElementById("ds_infer-li").style.backgroundColor = "";
  }
  
  let ds_trainUl = document.getElementById("ds_train-ul");
  
  let trainArr = [
    {
      element: "ResNet50v1.5 BFloat16 Training TensorFlow* Container",
    },
    {
      element: "ResNet50v1.5 FP32 Training Tensorflow* Container",
    },
    {
      element: "SSD-ResNet34 BFloat16 Training TensorFlow* Container",
    },
    {
      element: "SSD-ResNet34 FP32 Training TensorFlow* Container",
    },
    {
      element: "Transformer-LT MLPerf BFloat16 Training TensorFlow* Container",
    },
    {
      element: "Wide Deep Large Dataset FP32 Training Tensorflow* Container",
    },
  ];
  
  for (let i = 0; i < trainArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${trainArr[i].element}</a>`;
    ds_trainUl.appendChild(li);
  }
  
  let ds_deployUl = document.getElementById("ds_deploy-ul");
  
  let deployArr = [
    {
      element: "Analytics Zoo Cluster Serving",
    },
    {
      element: "oneContainer API",
    },
    {
      element: "oneContainer Cloud Tool",
    },
  ];
  
  for (let i = 0; i < deployArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${deployArr[i].element}</a>`;
    ds_deployUl.appendChild(li);
  }
  
  function validation() {
    document.getElementById("ds_valid-main").style.display = "block";
    document.getElementById("ds_valid-btn").style.fontWeight = "bold";
    document.getElementById("ds_valid-li").style.backgroundColor = "#f3f3f3";
    document.getElementById("ds_valid-height").style.height = "392px";
    document.getElementById("ds_valid-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
    
  }
  
  let ds_validUl = document.getElementById("ds_valid-ul");
  
  let validArr = [
    {
      element: "Analytics Zoo Cluster Serving",
    },
    {
      element: "oneContainer API",
    },
    {
      element: "oneContainer Cloud Tool",
    },
  ];
  
  for (let i = 0; i < validArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${validArr[i].element}</a>`;
    ds_validUl.appendChild(li);
  }
  
  let ds_nature = document.getElementById("ds_nature-ul");
  
  let natureArr = [
    {
      element: "BERT Large BFloat16 Inference Tensorflow* Container",
    },
    {
      element: "BERT Large BFloat16 Training TensorFlow* Container",
    },
    {
      element: "BERT Large FP32 Inference Tensorflow* Container",
    },
    {
      element: "BERT Large FP32 Training Tensorflow* Container",
    },
  ];
  
  for (let i = 0; i < natureArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${natureArr[i].element}</a>`;
    ds_nature.appendChild(li);
  }
  
  let ds_oneapi = document.getElementById("ds_oneapi-ul");
  
  let oneapiArr = [
    {
      element: "Intel® oneAPI AI Analytics Toolkit Container",
    },
    {
      element: "Intel® oneAPI Base Toolkit Container",
    },
    {
      element: "Intel® oneAPI DL Framework Developer Toolkit Container",
    },
    {
      element: "Intel® oneAPI HPC Toolkit Container",
    },
    {
      element: "Intel® oneAPI IoT Toolkit Container",
    },
    {
      element: "Intel® oneAPI Runtime Libraries",
    },
  ];
  
  for (let i = 0; i < oneapiArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${oneapiArr[i].element}</a>`;
    ds_oneapi.appendChild(li);
  }
  
  function media(d) {
    if (d == 1) {
      document.getElementById("ds_media-main").style.display = "block";
      document.getElementById("ds_media-btn").style.fontWeight = "bold";
      document.getElementById("ds_media-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_media-height").style.height = "392px";
      document.getElementById("ds_media-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_media2-main").style.display = "none";
      document.getElementById("ds_media2-btn").style.fontWeight = "";
      document.getElementById("ds_media2-li").style.backgroundColor = "";
    } else if (d == 2) {
      document.getElementById("ds_media2-main").style.display = "block";
      document.getElementById("ds_media2-btn").style.fontWeight = "bold";
      document.getElementById("ds_media2-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_media2-height").style.height = "392px";
      document.getElementById("ds_media2-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_media-main").style.display = "none";
      document.getElementById("ds_media-btn").style.fontWeight = "";
      document.getElementById("ds_media-li").style.backgroundColor = "";
    }
  }
  
  let ds_mediaUl = document.getElementById("ds_media-ul");
  
  let mediaArr = [
    {
      element:
        "Open Visual Cloud Media Analytics - Development Image for Intel® Xeon® Processor on Ubuntu* 18.04",
    },
    {
      element:
        "Open Visual Cloud Media Analytics - Development Image for VCAC-A on Ubuntu* 18.04",
    },
    {
      element:
        "Open Visual Cloud Media Analytics - HDDL Daemon for VCAC-A on Ubuntu* 18.04",
    },
  ];
  
  for (let i = 0; i < mediaArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${mediaArr[i].element}</a>`;
    ds_mediaUl.appendChild(li);
  }
  
  let ds_mediaUl2 = document.getElementById("ds_media2-ul");
  
  let mediaArr2 = [
    {
      element:
        "Demonstration: Use an Intel® GPU and Software Stack for Media Delivery",
    },
    {
      element:
        "Open Visual Cloud Media Delivery - NGINX* for Systems with Intel® QuickAssist Technology and Using CentOS* 7",
    },
    {
      element:
        "Open Visual Cloud Media Delivery - NGINX* for Systems with Intel® QuickAssist Technology and Using Ubuntu* 18.04",
    },
    {
      element:
        "Open Visual Cloud Media Delivery - NGINX* for Systems with Intel® QuickAssist Technology and Using Ubuntu* 20.04",
    },
  ];
  
  for (let i = 0; i < mediaArr2.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${mediaArr2[i].element}</a>`;
    ds_mediaUl2.appendChild(li);
  }
  
  function dataAnal(e) {
    if (e == 1) {
      document.getElementById("ds_data-main").style.display = "block";
      document.getElementById("ds_data-btn").style.fontWeight = "bold";
      document.getElementById("ds_data-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_data-height").style.height = "392px";
      document.getElementById("ds_data-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_data2-main").style.display = "none";
      document.getElementById("ds_data2-btn").style.fontWeight = "";
      document.getElementById("ds_data2-li").style.backgroundColor = "";
    } else if (e == 2) {
      document.getElementById("ds_data2-main").style.display = "block";
      document.getElementById("ds_data2-btn").style.fontWeight = "bold";
      document.getElementById("ds_data2-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_data2-height").style.height = "392px";
      document.getElementById("ds_data2-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_data-main").style.display = "none";
      document.getElementById("ds_data-btn").style.fontWeight = "";
      document.getElementById("ds_data-li").style.backgroundColor = "";
    }
  }
  
  let ds_dataUl = document.getElementById("ds_data-ul");
  
  let dataArr = [
    {
      element:
        "Data Analytics Reference Stack with Intel® Math Kernel Library for Deep Neural Networks (Intel® MKL-DNN)",
    },
    {
      element:
        "Intel® Extension for Scikit-learn* with Intel® oneAPI Data Analytics Library (oneDAL)",
    },
  ];
  
  for (let i = 0; i < dataArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${dataArr[i].element}</a>`;
    ds_dataUl.appendChild(li);
  }
  
  let ds_dataUl2 = document.getElementById("ds_data2-ul");
  
  let dataArr2 = [
    {
      element: "Use Data Services Reference Stack with Redis* on CentOS*",
    },
  ];
  
  for (let i = 0; i < dataArr2.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${dataArr2[i].element}</a>`;
    ds_dataUl2.appendChild(li);
  }
  
  let ds_centerUl = document.getElementById("ds_center-ul");
  
  let centerArr = [
    {
      element: "Intel® Data Center Manager Console",
    },
    {
      element:
        "Open Active Management Technology Cloud Toolkit (Open AMT Cloud Toolkit)",
    },
    {
      element: "Open Data Center Diagnostic Project (Open DCDIAG)",
    },
  ];
  
  for (let i = 0; i < centerArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${centerArr[i].element}</a>`;
    ds_centerUl.appendChild(li);
  }
  
  let ds_debugUl = document.getElementById("ds_debug-ul");
  
  let debugArr = [
    {
      element: "GNU* Debugger (GDB)",
    },
    {
      element: "Intel® Debug Extensions for WinDbg*",
    },
    {
      element: "Intel® Distribution for GDB*",
    },
    {
      element: "Intel® System Debugger (NDA Access)",
    },
    {
      element: "Intel® x86/x64 Debugger - Lauterbach",
    },
  ];
  
  for (let i = 0; i < debugArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${debugArr[i].element}</a>`;
    ds_debugUl.appendChild(li);
  }
  
  let ds_serviceUl = document.getElementById("ds_service-ul");
  
  let serviceArr = [
    {
      element: "Layout Review",
    },
    {
      element: "Layout Review",
    },
    {
      element: "Schematic Review",
    },
    {
      element: "Schematic Review",
    },
  ];
  
  for (let i = 0; i < serviceArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${serviceArr[i].element}</a>`;
    ds_serviceUl.appendChild(li);
  }
  
  let ds_streamUl = document.getElementById("ds_stream-ul");
  
  let streamArr = [
    {
      element: "DL Streamer - Open Source",
    },
  ];
  
  for (let i = 0; i < streamArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${streamArr[i].element}</a>`;
    ds_streamUl.appendChild(li);
  }
  
  function emulator(f) {
    if (f == 1) {
      document.getElementById("ds_emulation-main").style.display = "block";
      document.getElementById("ds_emulation-btn").style.fontWeight = "bold";
      document.getElementById("ds_emulation-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_emulation-height").style.height = "392px";
      document.getElementById("ds_emulation-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_emulation2-main").style.display = "none";
      document.getElementById("ds_emulation2-btn").style.fontWeight = "";
      document.getElementById("ds_emulation2-li").style.backgroundColor = "";
    } else if (f == 2) {
      document.getElementById("ds_emulation2-main").style.display = "block";
      document.getElementById("ds_emulation2-btn").style.fontWeight = "bold";
      document.getElementById("ds_emulation2-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_emulation2-height").style.height = "392px";
      document.getElementById("ds_emulation2-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_emulation-main").style.display = "none";
      document.getElementById("ds_emulation-btn").style.fontWeight = "";
      document.getElementById("ds_emulation-li").style.backgroundColor = "";
    }
  }
  
  let ds_emulationUl = document.getElementById("ds_emulation-ul");
  
  let emulationArr = [
    {
      element: "Fast V-mode PMax Detector Emulation Tool",
    },
    {
      element: "PCIe Gen5 PLEC Test Fixture Kit (Version 2)",
    },
    {
      element: "STP DDR5 DIMM Test Card",
    },
  ];
  
  for (let i = 0; i < emulationArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${emulationArr[i].element}</a>`;
    ds_emulationUl.appendChild(li);
  }
  
  let ds_emulationUl2 = document.getElementById("ds_emulation2-ul");
  
  let emulationArr2 = [
    {
      element: "Dual-Key M.2 Electrical Test Fixture Kit",
    },
    {
      element: "M.2 SSIC Electrical Test Fixture Kit - 2Pcs",
    },
    {
      element: "PCIe Gen5 Base Rx Fixtures Kit (MMPX) REV3",
    },
    {
      element: "PCIe3.0 M.2 CLB/CBB and Variable ISI Fixture Kit",
    },
    {
      element: "PCIe3.0 M.2 Fixture Kit (CBB/CLB)",
    },
    {
      element: "PCIe4.0 Variable ISI Board",
    },
    {
      element: "SFF-8639 (U.2) Compliance Base Board",
    },
    {
      element: "SFF-8639 (U.2) Compliance Base Board + Load Board Kit",
    },
    {
      element: "SFF-8639 (U.2) Compliance Load Board",
    },
  ];
  
  for (let i = 0; i < emulationArr2.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${emulationArr2[i].element}</a>`;
    ds_emulationUl2.appendChild(li);
  }
  
  function fgpaTools(g) {
    if (g == 1) {
      document.getElementById("ds_fgpaTools-main").style.display = "block";
      document.getElementById("ds_fgpaTools-btn").style.fontWeight = "bold";
      document.getElementById("ds_fgpaTools-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_fgpaTools-height").style.height = "392px";
      document.getElementById("ds_fgpaTools-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_fgpaTools2-main").style.display = "none";
      document.getElementById("ds_fgpaTools2-btn").style.fontWeight = "";
      document.getElementById("ds_fgpaTools2-li").style.backgroundColor = "";
  
      document.getElementById("ds_prime-main").style.display = "none";
      document.getElementById("ds_prime2-main").style.display = "none";
  
      document.getElementById("ds_fgpaTools3-main").style.display = "none";
      document.getElementById("ds_fgpaTools3-btn").style.fontWeight = "";
      document.getElementById("ds_fgpaTools3-li").style.backgroundColor = "";
    } else if (g == 2) {
      document.getElementById("ds_fgpaTools2-main").style.display = "block";
      document.getElementById("ds_fgpaTools2-btn").style.fontWeight = "bold";
      document.getElementById("ds_fgpaTools2-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_fgpaTools2-height").style.height = "392px";
      document.getElementById("ds_fgpaTools2-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_fgpaTools-main").style.display = "none";
      document.getElementById("ds_fgpaTools-btn").style.fontWeight = "";
      document.getElementById("ds_fgpaTools-li").style.backgroundColor = "";
  
      document.getElementById("ds_embedded-main").style.display = "none";
  
      document.getElementById("ds_fgpaTools3-main").style.display = "none";
      document.getElementById("ds_fgpaTools3-btn").style.fontWeight = "";
      document.getElementById("ds_fgpaTools3-li").style.backgroundColor = "";
    } else if (g == 3) {
      document.getElementById("ds_fgpaTools3-main").style.display = "block";
      document.getElementById("ds_fgpaTools3-btn").style.fontWeight = "bold";
      document.getElementById("ds_fgpaTools3-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_fgpaTools3-height").style.height = "392px";
      document.getElementById("ds_fgpaTools3-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_fgpaTools-main").style.display = "none";
      document.getElementById("ds_fgpaTools-btn").style.fontWeight = "";
      document.getElementById("ds_fgpaTools-li").style.backgroundColor = "";
  
      document.getElementById("ds_fgpaTools2-main").style.display = "none";
      document.getElementById("ds_fgpaTools2-btn").style.fontWeight = "";
      document.getElementById("ds_fgpaTools2-li").style.backgroundColor = "";
  
      document.getElementById("ds_embedded-main").style.display = "none";
      document.getElementById("ds_prime-main").style.display = "none";
      document.getElementById("ds_prime2-main").style.display = "none";
    }
    window.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  }
  
  function embedded() {
    document.getElementById("ds_embedded-main").style.display = "block";
    document.getElementById("ds_embedded-btn").style.fontWeight = "bold";
    document.getElementById("ds_embedded-li").style.backgroundColor = "#f3f3f3";
    document.getElementById("ds_embedded-height").style.height = "392px";
    document.getElementById("ds_embedded-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
    window.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  }
  
  let ds_embedded = document.getElementById("ds_embedded-ul");
  
  let embeddedArr = [
    {
      element: "Intel® SoC FPGA Embedded Development Suite (SoC EDS)",
    },
  ];
  
  for (let i = 0; i < embeddedArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${embeddedArr[i].element}</a>`;
    ds_embedded.appendChild(li);
  }
  
  function prime(h) {
    if (h == 1) {
      document.getElementById("ds_prime-main").style.display = "block";
      document.getElementById("ds_prime-btn").style.fontWeight = "bold";
      document.getElementById("ds_prime-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_prime-height").style.height = "392px";
      document.getElementById("ds_prime-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_prime2-main").style.display = "none";
      document.getElementById("ds_prime2-btn").style.fontWeight = "";
      document.getElementById("ds_prime2-li").style.backgroundColor = "";
  
      document.getElementById("ds_prime2-main").style.display = "none";
    } else if (h == 2) {
      document.getElementById("ds_prime2-main").style.display = "block";
      document.getElementById("ds_prime2-btn").style.fontWeight = "bold";
      document.getElementById("ds_prime2-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_prime2-height").style.height = "392px";
      document.getElementById("ds_prime2-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_prime-main").style.display = "none";
      document.getElementById("ds_prime-btn").style.fontWeight = "";
      document.getElementById("ds_prime-li").style.backgroundColor = "";
    }
    window.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  }
  
  let ds_primeUl = document.getElementById("ds_prime-ul");
  
  let ds_primeArr = [
    {
      element: "Intel® Quartus® Prime Lite Edition",
    },
    {
      element: "Intel® Quartus® Prime Pro Edition",
    },
    {
      element: "Intel® Quartus® Prime Standard Edition",
    },
  ];
  
  for (let i = 0; i < ds_primeArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${ds_primeArr[i].element}</a>`;
    ds_primeUl.appendChild(li);
  }
  
  let ds_prime2Ul = document.getElementById("ds_prime2-ul");
  
  let ds_prime2Arr = [
    {
      element: "Quartus® II Subscription Edition",
    },
    {
      element: "Quartus® II Web Edition",
    },
  ];
  
  for (let i = 0; i < ds_prime2Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${ds_prime2Arr[i].element}</a>`;
    ds_prime2Ul.appendChild(li);
  }
  
  let ds_fgpaTools3Ul = document.getElementById("ds_fgpaTools3-ul");
  
  let ds_fgpaTools3Arr = [
    {
      element: "Intel® FPGA Add-on for oneAPI Base Toolkit",
    },
    {
      element: "Intel® FPGA SDK for OpenCL™",
    },
  ];
  
  for (let i = 0; i < ds_fgpaTools3Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${ds_fgpaTools3Arr[i].element}</a>`;
    ds_fgpaTools3Ul.appendChild(li);
  }
  
  let ds_frameUl = document.getElementById("ds_frame-ul");
  
  let ds_frameArr = [
    {
      element: "Infrastructure Modelling",
    },
    {
      element: "Intel® Distribution for Python*",
    },
    {
      element: "Intel® Distribution for Python* - Core Package",
    },
    {
      element: "Intel® Distribution for Python* - Full Package",
    },
    {
      element: "Intel® Distribution of Modin*",
    },
    {
      element: "Intel® Distribution of Modin* - Open Source",
    },
    {
      element: "Intel® Extensions for TensorFlow* and Scikit-learn* with oneDAL",
    },
    {
      element: "Model Zoo for Intel® Architecture",
    },
    {
      element: "Model Zoo for Intel® Architecture - Open Source",
    },
    {
      element: "Open Data Center Diagnostic Project (Open DCDIAG)",
    },
    {
      element: "Optimize Tensorflow* & oneDNN for Deep Learning",
    },
    {
      element: "Pin",
    },
  ];
  
  for (let i = 0; i < ds_frameArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${ds_frameArr[i].element}</a>`;
    ds_frameUl.appendChild(li);
  }
  
  let ds_helmUl = document.getElementById("ds_helm-ul");
  
  let ds_helmArr = [
    {
      element: "Install a Helm Chart That Deploys a TensorFlow* Serving",
    },
  ];
  
  for (let i = 0; i < ds_helmArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${ds_helmArr[i].element}</a>`;
    ds_helmUl.appendChild(li);
  }
  let ds_secureUl = document.getElementById("ds_secure-ul");
  
  let ds_secureArr = [
    {
      element: "Intel® Secure Device Onboard",
    },
  ];
  
  for (let i = 0; i < ds_secureArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color" >${ds_secureArr[i].element}</a>`;
    ds_secureUl.appendChild(li);
  }
  
  function kitsItem(i) {
    if (i == 1) {
      document.getElementById("ds_kitsItem-main").style.display = "block";
      document.getElementById("ds_kitsItem-btn").style.fontWeight = "bold";
      document.getElementById("ds_kitsItem-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_kitsItem-height").style.height = "392px";
      document.getElementById("ds_kitsItem-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_kitsItem2-main").style.display = "none";
      document.getElementById("ds_kitsItem2-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem2-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem3-main").style.display = "none";
      document.getElementById("ds_kitsItem3-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem3-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem4-main").style.display = "none";
      document.getElementById("ds_kitsItem4-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem4-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem5-main").style.display = "none";
      document.getElementById("ds_kitsItem5-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem5-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem6-main").style.display = "none";
      document.getElementById("ds_kitsItem6-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem6-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem7-main").style.display = "none";
      document.getElementById("ds_kitsItem7-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem7-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem8-main").style.display = "none";
      document.getElementById("ds_kitsItem8-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem8-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem9-main").style.display = "none";
      document.getElementById("ds_kitsItem9-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem9-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem10-main").style.display = "none";
      document.getElementById("ds_kitsItem10-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem10-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem11-main").style.display = "none";
      document.getElementById("ds_kitsItem11-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem11-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem12-main").style.display = "none";
      document.getElementById("ds_kitsItem12-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem12-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem13-main").style.display = "none";
      document.getElementById("ds_kitsItem13-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem13-li").style.backgroundColor = "";
    } else if (i == 2) {
      document.getElementById("ds_kitsItem2-main").style.display = "block";
      document.getElementById("ds_kitsItem2-btn").style.fontWeight = "bold";
      document.getElementById("ds_kitsItem2-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_kitsItem2-height").style.height = "392px";
      document.getElementById("ds_kitsItem2-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_kitsItem-main").style.display = "none";
      document.getElementById("ds_kitsItem-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem3-main").style.display = "none";
      document.getElementById("ds_kitsItem3-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem3-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem4-main").style.display = "none";
      document.getElementById("ds_kitsItem4-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem4-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem5-main").style.display = "none";
      document.getElementById("ds_kitsItem5-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem5-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem6-main").style.display = "none";
      document.getElementById("ds_kitsItem6-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem6-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem7-main").style.display = "none";
      document.getElementById("ds_kitsItem7-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem7-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem8-main").style.display = "none";
      document.getElementById("ds_kitsItem8-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem8-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem9-main").style.display = "none";
      document.getElementById("ds_kitsItem9-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem9-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem10-main").style.display = "none";
      document.getElementById("ds_kitsItem10-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem10-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem11-main").style.display = "none";
      document.getElementById("ds_kitsItem11-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem11-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem12-main").style.display = "none";
      document.getElementById("ds_kitsItem12-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem12-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem13-main").style.display = "none";
      document.getElementById("ds_kitsItem13-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem13-li").style.backgroundColor = "";
    } else if (i == 3) {
      document.getElementById("ds_kitsItem3-main").style.display = "block";
      document.getElementById("ds_kitsItem3-btn").style.fontWeight = "bold";
      document.getElementById("ds_kitsItem3-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_kitsItem3-height").style.height = "392px";
      document.getElementById("ds_kitsItem3-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_kitsItem-main").style.display = "none";
      document.getElementById("ds_kitsItem-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem2-main").style.display = "none";
      document.getElementById("ds_kitsItem2-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem2-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem4-main").style.display = "none";
      document.getElementById("ds_kitsItem4-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem4-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem5-main").style.display = "none";
      document.getElementById("ds_kitsItem5-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem5-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem6-main").style.display = "none";
      document.getElementById("ds_kitsItem6-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem6-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem7-main").style.display = "none";
      document.getElementById("ds_kitsItem7-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem7-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem8-main").style.display = "none";
      document.getElementById("ds_kitsItem8-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem8-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem9-main").style.display = "none";
      document.getElementById("ds_kitsItem9-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem9-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem10-main").style.display = "none";
      document.getElementById("ds_kitsItem10-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem10-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem11-main").style.display = "none";
      document.getElementById("ds_kitsItem11-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem11-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem12-main").style.display = "none";
      document.getElementById("ds_kitsItem12-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem12-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem13-main").style.display = "none";
      document.getElementById("ds_kitsItem13-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem13-li").style.backgroundColor = "";
    } else if (i == 4) {
      document.getElementById("ds_kitsItem4-main").style.display = "block";
      document.getElementById("ds_kitsItem4-btn").style.fontWeight = "bold";
      document.getElementById("ds_kitsItem4-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_kitsItem4-height").style.height = "392px";
      document.getElementById("ds_kitsItem4-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_kitsItem-main").style.display = "none";
      document.getElementById("ds_kitsItem-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem2-main").style.display = "none";
      document.getElementById("ds_kitsItem2-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem2-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem3-main").style.display = "none";
      document.getElementById("ds_kitsItem3-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem3-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem5-main").style.display = "none";
      document.getElementById("ds_kitsItem5-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem5-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem6-main").style.display = "none";
      document.getElementById("ds_kitsItem6-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem6-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem7-main").style.display = "none";
      document.getElementById("ds_kitsItem7-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem7-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem8-main").style.display = "none";
      document.getElementById("ds_kitsItem8-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem8-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem9-main").style.display = "none";
      document.getElementById("ds_kitsItem9-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem9-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem10-main").style.display = "none";
      document.getElementById("ds_kitsItem10-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem10-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem11-main").style.display = "none";
      document.getElementById("ds_kitsItem11-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem11-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem12-main").style.display = "none";
      document.getElementById("ds_kitsItem12-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem12-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem13-main").style.display = "none";
      document.getElementById("ds_kitsItem13-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem13-li").style.backgroundColor = "";
    } else if (i == 5) {
      document.getElementById("ds_kitsItem5-main").style.display = "block";
      document.getElementById("ds_kitsItem5-btn").style.fontWeight = "bold";
      document.getElementById("ds_kitsItem5-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_kitsItem5-height").style.height = "392px";
      document.getElementById("ds_kitsItem5-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_kitsItem-main").style.display = "none";
      document.getElementById("ds_kitsItem-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem2-main").style.display = "none";
      document.getElementById("ds_kitsItem2-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem2-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem3-main").style.display = "none";
      document.getElementById("ds_kitsItem3-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem3-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem4-main").style.display = "none";
      document.getElementById("ds_kitsItem4-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem4-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem6-main").style.display = "none";
      document.getElementById("ds_kitsItem6-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem6-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem7-main").style.display = "none";
      document.getElementById("ds_kitsItem7-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem7-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem8-main").style.display = "none";
      document.getElementById("ds_kitsItem8-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem8-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem9-main").style.display = "none";
      document.getElementById("ds_kitsItem9-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem9-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem10-main").style.display = "none";
      document.getElementById("ds_kitsItem10-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem10-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem11-main").style.display = "none";
      document.getElementById("ds_kitsItem11-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem11-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem12-main").style.display = "none";
      document.getElementById("ds_kitsItem12-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem12-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem13-main").style.display = "none";
      document.getElementById("ds_kitsItem13-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem13-li").style.backgroundColor = "";
    } else if (i == 6) {
      document.getElementById("ds_kitsItem6-main").style.display = "block";
      document.getElementById("ds_kitsItem6-btn").style.fontWeight = "bold";
      document.getElementById("ds_kitsItem6-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_kitsItem6-height").style.height = "392px";
      document.getElementById("ds_kitsItem6-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_kitsItem-main").style.display = "none";
      document.getElementById("ds_kitsItem-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem2-main").style.display = "none";
      document.getElementById("ds_kitsItem2-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem2-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem3-main").style.display = "none";
      document.getElementById("ds_kitsItem3-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem3-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem4-main").style.display = "none";
      document.getElementById("ds_kitsItem4-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem4-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem5-main").style.display = "none";
      document.getElementById("ds_kitsItem5-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem5-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem7-main").style.display = "none";
      document.getElementById("ds_kitsItem7-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem7-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem8-main").style.display = "none";
      document.getElementById("ds_kitsItem8-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem8-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem9-main").style.display = "none";
      document.getElementById("ds_kitsItem9-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem9-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem10-main").style.display = "none";
      document.getElementById("ds_kitsItem10-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem10-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem11-main").style.display = "none";
      document.getElementById("ds_kitsItem11-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem11-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem12-main").style.display = "none";
      document.getElementById("ds_kitsItem12-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem12-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem13-main").style.display = "none";
      document.getElementById("ds_kitsItem13-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem13-li").style.backgroundColor = "";
    } else if (i == 7) {
      document.getElementById("ds_kitsItem7-main").style.display = "block";
      document.getElementById("ds_kitsItem7-btn").style.fontWeight = "bold";
      document.getElementById("ds_kitsItem7-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_kitsItem7-height").style.height = "392px";
      document.getElementById("ds_kitsItem7-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_kitsItem-main").style.display = "none";
      document.getElementById("ds_kitsItem-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem2-main").style.display = "none";
      document.getElementById("ds_kitsItem2-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem2-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem3-main").style.display = "none";
      document.getElementById("ds_kitsItem3-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem3-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem4-main").style.display = "none";
      document.getElementById("ds_kitsItem4-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem4-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem5-main").style.display = "none";
      document.getElementById("ds_kitsItem5-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem5-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem6-main").style.display = "none";
      document.getElementById("ds_kitsItem6-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem6-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem8-main").style.display = "none";
      document.getElementById("ds_kitsItem8-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem8-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem9-main").style.display = "none";
      document.getElementById("ds_kitsItem9-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem9-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem10-main").style.display = "none";
      document.getElementById("ds_kitsItem10-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem10-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem11-main").style.display = "none";
      document.getElementById("ds_kitsItem11-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem11-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem12-main").style.display = "none";
      document.getElementById("ds_kitsItem12-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem12-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem13-main").style.display = "none";
      document.getElementById("ds_kitsItem13-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem13-li").style.backgroundColor = "";
    } else if (i == 8) {
      document.getElementById("ds_kitsItem8-main").style.display = "block";
      document.getElementById("ds_kitsItem8-btn").style.fontWeight = "bold";
      document.getElementById("ds_kitsItem8-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_kitsItem8-height").style.height = "392px";
      document.getElementById("ds_kitsItem8-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_kitsItem-main").style.display = "none";
      document.getElementById("ds_kitsItem-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem2-main").style.display = "none";
      document.getElementById("ds_kitsItem2-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem2-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem3-main").style.display = "none";
      document.getElementById("ds_kitsItem3-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem3-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem4-main").style.display = "none";
      document.getElementById("ds_kitsItem4-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem4-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem5-main").style.display = "none";
      document.getElementById("ds_kitsItem5-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem5-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem6-main").style.display = "none";
      document.getElementById("ds_kitsItem6-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem6-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem7-main").style.display = "none";
      document.getElementById("ds_kitsItem7-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem7-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem9-main").style.display = "none";
      document.getElementById("ds_kitsItem9-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem9-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem10-main").style.display = "none";
      document.getElementById("ds_kitsItem10-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem10-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem11-main").style.display = "none";
      document.getElementById("ds_kitsItem11-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem11-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem12-main").style.display = "none";
      document.getElementById("ds_kitsItem12-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem12-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem13-main").style.display = "none";
      document.getElementById("ds_kitsItem13-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem13-li").style.backgroundColor = "";
    } else if (i == 9) {
      document.getElementById("ds_kitsItem9-main").style.display = "block";
      document.getElementById("ds_kitsItem9-btn").style.fontWeight = "bold";
      document.getElementById("ds_kitsItem9-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_kitsItem9-height").style.height = "392px";
      document.getElementById("ds_kitsItem9-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_kitsItem-main").style.display = "none";
      document.getElementById("ds_kitsItem-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem2-main").style.display = "none";
      document.getElementById("ds_kitsItem2-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem2-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem3-main").style.display = "none";
      document.getElementById("ds_kitsItem3-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem3-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem4-main").style.display = "none";
      document.getElementById("ds_kitsItem4-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem4-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem5-main").style.display = "none";
      document.getElementById("ds_kitsItem5-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem5-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem6-main").style.display = "none";
      document.getElementById("ds_kitsItem6-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem6-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem7-main").style.display = "none";
      document.getElementById("ds_kitsItem7-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem7-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem8-main").style.display = "none";
      document.getElementById("ds_kitsItem8-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem8-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem10-main").style.display = "none";
      document.getElementById("ds_kitsItem10-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem10-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem11-main").style.display = "none";
      document.getElementById("ds_kitsItem11-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem11-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem12-main").style.display = "none";
      document.getElementById("ds_kitsItem12-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem12-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem13-main").style.display = "none";
      document.getElementById("ds_kitsItem13-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem13-li").style.backgroundColor = "";
    } else if (i == 10) {
      document.getElementById("ds_kitsItem10-main").style.display = "block";
      document.getElementById("ds_kitsItem10-btn").style.fontWeight = "bold";
      document.getElementById("ds_kitsItem10-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_kitsItem10-height").style.height = "392px";
      document.getElementById("ds_kitsItem10-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_kitsItem-main").style.display = "none";
      document.getElementById("ds_kitsItem-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem2-main").style.display = "none";
      document.getElementById("ds_kitsItem2-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem2-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem3-main").style.display = "none";
      document.getElementById("ds_kitsItem3-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem3-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem4-main").style.display = "none";
      document.getElementById("ds_kitsItem4-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem4-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem5-main").style.display = "none";
      document.getElementById("ds_kitsItem5-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem5-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem6-main").style.display = "none";
      document.getElementById("ds_kitsItem6-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem6-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem7-main").style.display = "none";
      document.getElementById("ds_kitsItem7-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem7-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem8-main").style.display = "none";
      document.getElementById("ds_kitsItem8-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem8-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem9-main").style.display = "none";
      document.getElementById("ds_kitsItem9-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem9-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem11-main").style.display = "none";
      document.getElementById("ds_kitsItem11-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem11-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem12-main").style.display = "none";
      document.getElementById("ds_kitsItem12-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem12-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem13-main").style.display = "none";
      document.getElementById("ds_kitsItem13-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem13-li").style.backgroundColor = "";
    } else if (i == 11) {
      document.getElementById("ds_kitsItem11-main").style.display = "block";
      document.getElementById("ds_kitsItem11-btn").style.fontWeight = "bold";
      document.getElementById("ds_kitsItem11-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_kitsItem11-height").style.height = "392px";
      document.getElementById("ds_kitsItem11-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_kitsItem-main").style.display = "none";
      document.getElementById("ds_kitsItem-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem2-main").style.display = "none";
      document.getElementById("ds_kitsItem2-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem2-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem3-main").style.display = "none";
      document.getElementById("ds_kitsItem3-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem3-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem4-main").style.display = "none";
      document.getElementById("ds_kitsItem4-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem4-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem5-main").style.display = "none";
      document.getElementById("ds_kitsItem5-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem5-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem6-main").style.display = "none";
      document.getElementById("ds_kitsItem6-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem6-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem7-main").style.display = "none";
      document.getElementById("ds_kitsItem7-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem7-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem8-main").style.display = "none";
      document.getElementById("ds_kitsItem8-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem8-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem9-main").style.display = "none";
      document.getElementById("ds_kitsItem9-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem9-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem10-main").style.display = "none";
      document.getElementById("ds_kitsItem10-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem10-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem12-main").style.display = "none";
      document.getElementById("ds_kitsItem12-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem12-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem13-main").style.display = "none";
      document.getElementById("ds_kitsItem13-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem13-li").style.backgroundColor = "";
    } else if (i == 12) {
      document.getElementById("ds_kitsItem12-main").style.display = "block";
      document.getElementById("ds_kitsItem12-btn").style.fontWeight = "bold";
      document.getElementById("ds_kitsItem12-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_kitsItem12-height").style.height = "392px";
      document.getElementById("ds_kitsItem12-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_kitsItem-main").style.display = "none";
      document.getElementById("ds_kitsItem-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem2-main").style.display = "none";
      document.getElementById("ds_kitsItem2-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem2-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem3-main").style.display = "none";
      document.getElementById("ds_kitsItem3-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem3-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem4-main").style.display = "none";
      document.getElementById("ds_kitsItem4-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem4-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem5-main").style.display = "none";
      document.getElementById("ds_kitsItem5-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem5-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem6-main").style.display = "none";
      document.getElementById("ds_kitsItem6-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem6-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem7-main").style.display = "none";
      document.getElementById("ds_kitsItem7-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem7-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem8-main").style.display = "none";
      document.getElementById("ds_kitsItem8-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem8-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem9-main").style.display = "none";
      document.getElementById("ds_kitsItem9-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem9-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem10-main").style.display = "none";
      document.getElementById("ds_kitsItem10-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem10-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem11-main").style.display = "none";
      document.getElementById("ds_kitsItem11-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem11-li").style.backgroundColor = "";
  
      document.getElementById("ds_kitsItem13-main").style.display = "none";
      document.getElementById("ds_kitsItem13-btn").style.fontWeight = "";
      document.getElementById("ds_kitsItem13-li").style.backgroundColor = "";
    }
  }
  
  let ds_kitsItemUl = document.getElementById("ds_kitsItem-ul");
  
  let ds_kitsItemArr = [
    {
      element: "Boulder Springs SDK",
    },
  ];
  
  for (let i = 0; i < ds_kitsItemArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_kitsItemArr[i].element}</a>`;
    ds_kitsItemUl.appendChild(li);
  }
  
  let ds_kitsItem2Ul = document.getElementById("ds_kitsItem2-ul");
  
  let ds_kitsItem2Arr = [
    {
      element: "Intel® Distribution of OpenVINO™ Toolkit",
    },
    {
      element: "Intel® RealSense™ SDK",
    },
  ];
  
  for (let i = 0; i < ds_kitsItem2Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_kitsItem2Arr[i].element}</a>`;
    ds_kitsItem2Ul.appendChild(li);
  }
  
  let ds_kitsItem3Ul = document.getElementById("ds_kitsItem3-ul");
  
  let ds_kitsItem3Arr = [
    {
      element: "Intel® Active Management Technology SDK",
    },
  ];
  
  for (let i = 0; i < ds_kitsItem3Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_kitsItem3Arr[i].element}</a>`;
    ds_kitsItem3Ul.appendChild(li);
  }
  
  let ds_kitsItem4Ul = document.getElementById("ds_kitsItem4-ul");
  
  let ds_kitsItem4Arr = [
    {
      element: "Developer Kits Based on 8th Generation Intel® Core™ Processors",
    },
    {
      element: "Developer Kits with 11th Generation Intel® Core™ Processors",
    },
    {
      element: "Developer Kits with 9th Generation Intel® Core™ Processors",
    },
    {
      element: "Developer Kits with Intel® Xeon® D-2100 Processor Product Family",
    },
    {
      element:
        "Developer Kits with Intel® Xeon® W Processors and 10th Generation Intel® Core™ Processors",
    },
    {
      element:
        "IEI* TANK AIoT Developer Kit with an Intel® Core™ or Intel® Xeon® Processor",
    },
    {
      element: "Intel® Neural Compute Stick 2",
    },
    {
      element: "UP Squared* AI Vision X Developer Kit",
    },
  ];
  
  for (let i = 0; i < ds_kitsItem4Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_kitsItem4Arr[i].element}</a>`;
    ds_kitsItem4Ul.appendChild(li);
  }
  
  let ds_kitsItem5Ul = document.getElementById("ds_kitsItem5-ul");
  
  let ds_kitsItem5Arr = [
    {
      element: "Intel® Media Server Studio - Product Retired",
    },
  ];
  
  for (let i = 0; i < ds_kitsItem5Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_kitsItem5Arr[i].element}</a>`;
    ds_kitsItem5Ul.appendChild(li);
  }
  
  let ds_kitsItem6Ul = document.getElementById("ds_kitsItem6-ul");
  
  let ds_kitsItem6Arr = [
    {
      element: "Intel® oneAPI AI Analytics Toolkit ",
    },
    {
      element: "Intel® oneAPI Base & HPC Toolkit ",
    },
    {
      element: "Intel® oneAPI Base & IoT Toolkit",
    },
    {
      element: "Intel® oneAPI Base & Rendering Toolkit ",
    },
    {
      element: "Intel® oneAPI Base Toolkit",
    },
    {
      element: "Intel® oneAPI DL Framework Developer Toolkit",
    },
    {
      element: "Intel® oneAPI HPC Toolkit",
    },
    {
      element: "Intel® oneAPI IoT Toolkit",
    },
    {
      element: "Intel® oneAPI Rendering Toolkit",
    },
    {
      element: "Intel® System Bring-Up Toolkit",
    },
  ];
  
  for (let i = 0; i < ds_kitsItem6Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_kitsItem6Arr[i].element}</a>`;
    ds_kitsItem6Ul.appendChild(li);
  }
  
  let ds_kitsItem7Ul = document.getElementById("ds_kitsItem7-ul");
  
  let ds_kitsItem7Arr = [
    {
      element: "Intel® Parallel Studio XE - Legacy Documentation",
    },
    {
      element: "Intel® Parallel Studio XE - Replacement Product",
    },
  ];
  
  for (let i = 0; i < ds_kitsItem7Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_kitsItem7Arr[i].element}</a>`;
    ds_kitsItem7Ul.appendChild(li);
  }
  
  let ds_kitsItem8Ul = document.getElementById("ds_kitsItem8-ul");
  
  let ds_kitsItem8Arr = [
    {
      element: "Intel® System Studio for FreeBSD* ",
    },
    {
      element: "Intel® System Studio for Microcontrollers",
    },
  ];
  
  for (let i = 0; i < ds_kitsItem8Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_kitsItem8Arr[i].element}</a>`;
    ds_kitsItem8Ul.appendChild(li);
  }
  
  let ds_kitsItem9Ul = document.getElementById("ds_kitsItem9-ul");
  
  let ds_kitsItem9Arr = [
    {
      element: "Data Plane Development Kit (DPDK) ",
    },
    {
      element: "Data Plane Development Kit (DPDK) - Open Source",
    },
  ];
  
  for (let i = 0; i < ds_kitsItem9Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_kitsItem9Arr[i].element}</a>`;
    ds_kitsItem9Ul.appendChild(li);
  }
  
  let ds_kitsItem10Ul = document.getElementById("ds_kitsItem10-ul");
  
  let ds_kitsItem10Arr = [
    {
      element: "Intel® Collaboration Suite for WebRTC ",
    },
    {
      element: "Intel® Time Coordinated Computing Tools",
    },
  ];
  
  for (let i = 0; i < ds_kitsItem10Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_kitsItem10Arr[i].element}</a>`;
    ds_kitsItem10Ul.appendChild(li);
  }
  
  let ds_kitsItem11Ul = document.getElementById("ds_kitsItem11-ul");
  
  let ds_kitsItem11Arr = [
    {
      element: "Intel® Homomorphic Encryption Toolkit (Intel® HE Toolkit)",
    },
    {
      element: "Intel® Software Guard Extensions SDK",
    },
  ];
  
  for (let i = 0; i < ds_kitsItem11Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_kitsItem11Arr[i].element}</a>`;
    ds_kitsItem11Ul.appendChild(li);
  }
  
  let ds_kitsItem12Ul = document.getElementById("ds_kitsItem12-ul");
  
  let ds_kitsItem12Arr = [
    {
      element: "Storage Performance Development Kit (SPDK)",
    },
  ];
  
  for (let i = 0; i < ds_kitsItem12Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_kitsItem12Arr[i].element}</a>`;
    ds_kitsItem12Ul.appendChild(li);
  }
  
  let ds_kitsItem13Ul = document.getElementById("ds_kitsItem13-ul");
  
  let ds_kitsItem13Arr = [
    {
      element: "Intel Movidius Vision Processing Unit (VPU)",
    },
    {
      element: "Intel® Vision Accelerator Design with Intel® Arria® 10 FPGA",
    },
  ];
  
  for (let i = 0; i < ds_kitsItem13Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_kitsItem13Arr[i].element}</a>`;
    ds_kitsItem13Ul.appendChild(li);
  }
  
  let ds_kuberUl = document.getElementById("ds_kuber-ul");
  
  let ds_kuberArr = [
    {
      element: "BERT Large FP32 Training TensorFlow* Kubernetes* Package",
    },
    {
      element:
        "ResNet50* V1.5 FP32 Training Package with TensorFlow* for Kubernetes*",
    },
    {
      element:
        "Wide & Deep Large Data FP32 Training TensorFlow* Kubernetes* Package",
    },
  ];
  
  for (let i = 0; i < ds_kuberArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_kuberArr[i].element}</a>`;
    ds_kuberUl.appendChild(li);
  }
  
  let ds_legacyUl = document.getElementById("ds_legacy-ul");
  
  let ds_legacyArr = [
    {
      element: "Intel® Cilk™ Plus - Open Source",
    },
    {
      element: "Intel® Video Pro Analyzer*",
    },
    {
      element: "Intel® XDK - Open Source",
    },
    {
      element: "Rogue Wave* IMSL* Fortran Numerical Library",
    },
  ];
  
  for (let i = 0; i < ds_legacyArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_legacyArr[i].element}</a>`;
    ds_legacyUl.appendChild(li);
  }
  
  function Libraries(j) {
    if (j == 1) {
      document.getElementById("ds_libraries-main").style.display = "block";
      document.getElementById("ds_libraries-btn").style.fontWeight = "bold";
      document.getElementById("ds_libraries-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_libraries-height").style.height = "392px";
      document.getElementById("ds_libraries-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_libraries2-main").style.display = "none";
      document.getElementById("ds_libraries2-btn").style.fontWeight = "";
      document.getElementById("ds_libraries2-li").style.backgroundColor = "";
  
      document.getElementById("ds_libraries3-main").style.display = "none";
      document.getElementById("ds_libraries3-btn").style.fontWeight = "";
      document.getElementById("ds_libraries3-li").style.backgroundColor = "";
  
      document.getElementById("ds_libraries4-main").style.display = "none";
      document.getElementById("ds_libraries4-btn").style.fontWeight = "";
      document.getElementById("ds_libraries4-li").style.backgroundColor = "";
    } else if (j == 2) {
      document.getElementById("ds_libraries2-main").style.display = "block";
      document.getElementById("ds_libraries2-btn").style.fontWeight = "bold";
      document.getElementById("ds_libraries2-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_libraries2-height").style.height = "392px";
      document.getElementById("ds_libraries2-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_libraries-main").style.display = "none";
      document.getElementById("ds_libraries-btn").style.fontWeight = "";
      document.getElementById("ds_libraries-li").style.backgroundColor = "";
  
      document.getElementById("ds_libraries3-main").style.display = "none";
      document.getElementById("ds_libraries3-btn").style.fontWeight = "";
      document.getElementById("ds_libraries3-li").style.backgroundColor = "";
  
      document.getElementById("ds_libraries4-main").style.display = "none";
      document.getElementById("ds_libraries4-btn").style.fontWeight = "";
      document.getElementById("ds_libraries4-li").style.backgroundColor = "";
    } else if (j == 3) {
      document.getElementById("ds_libraries3-main").style.display = "block";
      document.getElementById("ds_libraries3-btn").style.fontWeight = "bold";
      document.getElementById("ds_libraries3-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_libraries3-height").style.height = "392px";
      document.getElementById("ds_libraries3-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_libraries-main").style.display = "none";
      document.getElementById("ds_libraries-btn").style.fontWeight = "";
      document.getElementById("ds_libraries-li").style.backgroundColor = "";
  
      document.getElementById("ds_libraries2-main").style.display = "none";
      document.getElementById("ds_libraries2-btn").style.fontWeight = "";
      document.getElementById("ds_libraries2-li").style.backgroundColor = "";
  
      document.getElementById("ds_libraries4-main").style.display = "none";
      document.getElementById("ds_libraries4-btn").style.fontWeight = "";
      document.getElementById("ds_libraries4-li").style.backgroundColor = "";
    } else if (j == 4) {
      document.getElementById("ds_libraries4-main").style.display = "block";
      document.getElementById("ds_libraries4-btn").style.fontWeight = "bold";
      document.getElementById("ds_libraries4-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_libraries3-height").style.height = "392px";
      document.getElementById("ds_librarie4-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_libraries-main").style.display = "none";
      document.getElementById("ds_libraries-btn").style.fontWeight = "";
      document.getElementById("ds_libraries-li").style.backgroundColor = "";
  
      document.getElementById("ds_libraries2-main").style.display = "none";
      document.getElementById("ds_libraries2-btn").style.fontWeight = "";
      document.getElementById("ds_libraries2-li").style.backgroundColor = "";
  
      document.getElementById("ds_libraries3-main").style.display = "none";
      document.getElementById("ds_libraries3-btn").style.fontWeight = "";
      document.getElementById("ds_libraries3-li").style.backgroundColor = "";
    }
  }
  
  let ds_librariesUl = document.getElementById("ds_libraries-ul");
  
  let ds_librariesArr = [
    {
      element: "Intel® Data Analytics Acceleration Library (Intel® DAAL)",
    },
    {
      element: "Intel® Extension for Scikit-learn*",
    },
    {
      element: "Intel® oneAPI Collective Communications Library (oneCCL)",
    },
    {
      element:
        "Intel® oneAPI Collective Communications Library (oneCCL) - Open Source",
    },
    {
      element: "Intel® oneAPI Data Analytics Library (oneDAL)",
    },
    {
      element: "Intel® oneAPI Data Analytics Library (oneDAL) - Open Source",
    },
    {
      element: "Intel® oneAPI Deep Neural Network Library (oneDNN)",
    },
    {
      element: "Intel® oneAPI Deep Neural Network Library (oneDNN) - Open Source",
    },
    {
      element: "Intel® Platform Analysis Library",
    },
  ];
  
  for (let i = 0; i < ds_librariesArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_librariesArr[i].element}</a>`;
    ds_librariesUl.appendChild(li);
  }
  
  let ds_libraries2Ul = document.getElementById("ds_libraries2-ul");
  
  let ds_libraries2Arr = [
    {
      element: "Intel® Decimal Floating-Point Math Library",
    },
    {
      element: "Intel® oneAPI Math Kernel Library (oneMKL)",
    },
    {
      element: "Intel® oneAPI Math Kernel Library (oneMKL) - Open Source",
    },
    {
      element: "International Mathematics and Statistics Library",
    },
  ];
  
  for (let i = 0; i < ds_libraries2Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_libraries2Arr[i].element}</a>`;
    ds_libraries2Ul.appendChild(li);
  }
  
  let ds_libraries3Ul = document.getElementById("ds_libraries3-ul");
  
  let ds_libraries3Arr = [
    {
      element: "Intel® Integrated Performance Primitives",
    },
    {
      element: "Intel® MPI Library",
    },
    {
      element: "Intel® oneAPI DPC++ Library (oneDPL)",
    },
    {
      element: "Intel® oneAPI DPC++ Library (oneDPL) - Open Source",
    },
    {
      element: "Intel® oneAPI Integrated Performance Primitives Cryptography",
    },
    {
      element: "Intel® oneAPI Threading Building Blocks (oneTBB)",
    },
    {
      element: "Intel® oneAPI Threading Building Blocks (oneTBB) - Open Source",
    },
    {
      element: "Intel® Performance Libraries  (All Performance Libraries)",
    },
  ];
  
  for (let i = 0; i < ds_libraries3Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_libraries3Arr[i].element}</a>`;
    ds_libraries3Ul.appendChild(li);
  }
  
  let ds_libraries4Ul = document.getElementById("ds_libraries4-ul");
  
  let ds_libraries4Arr = [
    {
      element: "Intel® Embree",
    },
    {
      element: "Intel® Embree - Open Source",
    },
    {
      element: "Intel® oneAPI Video Processing Library (oneVPL)",
    },
    {
      element: "Intel® oneAPI Video Processing Library (oneVPL) - Open Source",
    },
    {
      element: "Intel® Open Image Denoise",
    },
    {
      element: "Intel® Open Image Denoise - Open Source",
    },
    {
      element: "Intel® Open Volume Kernel Library (Intel® Open VKL)",
    },
    {
      element:
        "Intel® Open Volume Kernel Library (Intel® Open VKL) - Open Source",
    },
    {
      element: "Intel® OpenSWR - Open Source",
    },
    {
      element: "Intel® OSPRay",
    },
    {
      element: "Intel® OSPRay - Open Source",
    },
    {
      element: "Intel® OSPRay for Hydra",
    },
    {
      element: "Intel® OSPRay Studio",
    },
    {
      element: "Intel® OSPRay Studio - Open Source",
    },
  ];
  
  for (let i = 0; i < ds_libraries4Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_libraries4Arr[i].element}</a>`;
    ds_libraries4Ul.appendChild(li);
  }
  
  function modals(k) {
    if (k == 1) {
      document.getElementById("ds_modals-main").style.display = "block";
      document.getElementById("ds_modals-btn").style.fontWeight = "bold";
      document.getElementById("ds_modals-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_modals-height").style.height = "392px";
      document.getElementById("ds_modals-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals2-btn").style.fontWeight = "";
      document.getElementById("ds_modals2-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals3-btn").style.fontWeight = "";
      document.getElementById("ds_modals3-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals4-btn").style.fontWeight = "";
      document.getElementById("ds_modals4-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals5-btn").style.fontWeight = "";
      document.getElementById("ds_modals5-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals6-btn").style.fontWeight = "";
      document.getElementById("ds_modals6-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals7-btn").style.fontWeight = "";
      document.getElementById("ds_modals7-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals8-btn").style.fontWeight = "";
      document.getElementById("ds_modals8-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals9-btn").style.fontWeight = "";
      document.getElementById("ds_modals9-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals10-btn").style.fontWeight = "";
      document.getElementById("ds_modals10-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals11-btn").style.fontWeight = "";
      document.getElementById("ds_modals11-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals12-btn").style.fontWeight = "";
      document.getElementById("ds_modals12-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals13-btn").style.fontWeight = "";
      document.getElementById("ds_modals13-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals14-btn").style.fontWeight = "";
      document.getElementById("ds_modals14-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals15-btn").style.fontWeight = "";
      document.getElementById("ds_modals15-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals16-btn").style.fontWeight = "";
      document.getElementById("ds_modals16-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals17-btn").style.fontWeight = "";
      document.getElementById("ds_modals17-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals18-main").style.display = "none";
      document.getElementById("ds_modals18-btn").style.fontWeight = "";
      document.getElementById("ds_modals18-li").style.backgroundColor = "";
    } else if (k == 2) {
      document.getElementById("ds_modals2-main").style.display = "block";
      document.getElementById("ds_modals2-btn").style.fontWeight = "bold";
      document.getElementById("ds_modals2-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_modals2-height").style.height = "392px";
      document.getElementById("ds_modals2-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals-btn").style.fontWeight = "";
      document.getElementById("ds_modals-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals3-btn").style.fontWeight = "";
      document.getElementById("ds_modals3-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals4-btn").style.fontWeight = "";
      document.getElementById("ds_modals4-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals5-btn").style.fontWeight = "";
      document.getElementById("ds_modals5-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals6-btn").style.fontWeight = "";
      document.getElementById("ds_modals6-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals7-btn").style.fontWeight = "";
      document.getElementById("ds_modals7-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals8-btn").style.fontWeight = "";
      document.getElementById("ds_modals8-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals9-btn").style.fontWeight = "";
      document.getElementById("ds_modals9-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals10-btn").style.fontWeight = "";
      document.getElementById("ds_modals10-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals11-btn").style.fontWeight = "";
      document.getElementById("ds_modals11-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals12-btn").style.fontWeight = "";
      document.getElementById("ds_modals12-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals13-btn").style.fontWeight = "";
      document.getElementById("ds_modals13-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals14-btn").style.fontWeight = "";
      document.getElementById("ds_modals14-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals15-btn").style.fontWeight = "";
      document.getElementById("ds_modals15-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals16-btn").style.fontWeight = "";
      document.getElementById("ds_modals16-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals17-btn").style.fontWeight = "";
      document.getElementById("ds_modals17-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals18-main").style.display = "none";
      document.getElementById("ds_modals18-btn").style.fontWeight = "";
      document.getElementById("ds_modals18-li").style.backgroundColor = "";
    } else if (k == 3) {
      document.getElementById("ds_modals3-main").style.display = "block";
      document.getElementById("ds_modals3-btn").style.fontWeight = "bold";
      document.getElementById("ds_modals3-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_modals3-height").style.height = "392px";
      document.getElementById("ds_modals3-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals-btn").style.fontWeight = "";
      document.getElementById("ds_modals-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals2-btn").style.fontWeight = "";
      document.getElementById("ds_modals2-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals4-btn").style.fontWeight = "";
      document.getElementById("ds_modals4-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals5-btn").style.fontWeight = "";
      document.getElementById("ds_modals5-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals6-btn").style.fontWeight = "";
      document.getElementById("ds_modals6-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals7-btn").style.fontWeight = "";
      document.getElementById("ds_modals7-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals8-btn").style.fontWeight = "";
      document.getElementById("ds_modals8-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals9-btn").style.fontWeight = "";
      document.getElementById("ds_modals9-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals10-btn").style.fontWeight = "";
      document.getElementById("ds_modals10-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals11-btn").style.fontWeight = "";
      document.getElementById("ds_modals11-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals12-btn").style.fontWeight = "";
      document.getElementById("ds_modals12-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals13-btn").style.fontWeight = "";
      document.getElementById("ds_modals13-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals14-btn").style.fontWeight = "";
      document.getElementById("ds_modals14-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals15-btn").style.fontWeight = "";
      document.getElementById("ds_modals15-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals16-btn").style.fontWeight = "";
      document.getElementById("ds_modals16-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals17-btn").style.fontWeight = "";
      document.getElementById("ds_modals17-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals18-main").style.display = "none";
      document.getElementById("ds_modals18-btn").style.fontWeight = "";
      document.getElementById("ds_modals18-li").style.backgroundColor = "";
    } else if (k == 4) {
      document.getElementById("ds_modals4-main").style.display = "block";
      document.getElementById("ds_modals4-btn").style.fontWeight = "bold";
      document.getElementById("ds_modals4-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_modals4-height").style.height = "392px";
      document.getElementById("ds_modals4-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals-btn").style.fontWeight = "";
      document.getElementById("ds_modals-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals2-btn").style.fontWeight = "";
      document.getElementById("ds_modals2-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals3-btn").style.fontWeight = "";
      document.getElementById("ds_modals3-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals5-btn").style.fontWeight = "";
      document.getElementById("ds_modals5-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals6-btn").style.fontWeight = "";
      document.getElementById("ds_modals6-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals7-btn").style.fontWeight = "";
      document.getElementById("ds_modals7-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals8-btn").style.fontWeight = "";
      document.getElementById("ds_modals8-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals9-btn").style.fontWeight = "";
      document.getElementById("ds_modals9-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals10-btn").style.fontWeight = "";
      document.getElementById("ds_modals10-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals11-btn").style.fontWeight = "";
      document.getElementById("ds_modals11-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals12-btn").style.fontWeight = "";
      document.getElementById("ds_modals12-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals13-btn").style.fontWeight = "";
      document.getElementById("ds_modals13-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals14-btn").style.fontWeight = "";
      document.getElementById("ds_modals14-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals15-btn").style.fontWeight = "";
      document.getElementById("ds_modals15-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals16-btn").style.fontWeight = "";
      document.getElementById("ds_modals16-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals17-btn").style.fontWeight = "";
      document.getElementById("ds_modals17-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals18-main").style.display = "none";
      document.getElementById("ds_modals18-btn").style.fontWeight = "";
      document.getElementById("ds_modals18-li").style.backgroundColor = "";
    } else if (k == 5) {
      document.getElementById("ds_modals5-main").style.display = "block";
      document.getElementById("ds_modals5-btn").style.fontWeight = "bold";
      document.getElementById("ds_modals5-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_modals5-height").style.height = "392px";
      document.getElementById("ds_modals5-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals-btn").style.fontWeight = "";
      document.getElementById("ds_modals-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals2-btn").style.fontWeight = "";
      document.getElementById("ds_modals2-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals3-btn").style.fontWeight = "";
      document.getElementById("ds_modals3-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals4-btn").style.fontWeight = "";
      document.getElementById("ds_modals4-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals6-btn").style.fontWeight = "";
      document.getElementById("ds_modals6-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals7-btn").style.fontWeight = "";
      document.getElementById("ds_modals7-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals8-btn").style.fontWeight = "";
      document.getElementById("ds_modals8-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals9-btn").style.fontWeight = "";
      document.getElementById("ds_modals9-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals10-btn").style.fontWeight = "";
      document.getElementById("ds_modals10-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals11-btn").style.fontWeight = "";
      document.getElementById("ds_modals11-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals12-btn").style.fontWeight = "";
      document.getElementById("ds_modals12-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals13-btn").style.fontWeight = "";
      document.getElementById("ds_modals13-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals14-btn").style.fontWeight = "";
      document.getElementById("ds_modals14-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals15-btn").style.fontWeight = "";
      document.getElementById("ds_modals15-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals16-btn").style.fontWeight = "";
      document.getElementById("ds_modals16-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals17-btn").style.fontWeight = "";
      document.getElementById("ds_modals17-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals18-main").style.display = "none";
      document.getElementById("ds_modals18-btn").style.fontWeight = "";
      document.getElementById("ds_modals18-li").style.backgroundColor = "";
    } else if (k == 6) {
      document.getElementById("ds_modals6-main").style.display = "block";
      document.getElementById("ds_modals6-btn").style.fontWeight = "bold";
      document.getElementById("ds_modals6-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_modals6-height").style.height = "392px";
      document.getElementById("ds_modals6-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals-btn").style.fontWeight = "";
      document.getElementById("ds_modals-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals2-btn").style.fontWeight = "";
      document.getElementById("ds_modals2-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals3-btn").style.fontWeight = "";
      document.getElementById("ds_modals3-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals4-btn").style.fontWeight = "";
      document.getElementById("ds_modals4-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals5-btn").style.fontWeight = "";
      document.getElementById("ds_modals5-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals7-btn").style.fontWeight = "";
      document.getElementById("ds_modals7-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals8-btn").style.fontWeight = "";
      document.getElementById("ds_modals8-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals9-btn").style.fontWeight = "";
      document.getElementById("ds_modals9-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals10-btn").style.fontWeight = "";
      document.getElementById("ds_modals10-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals11-btn").style.fontWeight = "";
      document.getElementById("ds_modals11-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals12-btn").style.fontWeight = "";
      document.getElementById("ds_modals12-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals13-btn").style.fontWeight = "";
      document.getElementById("ds_modals13-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals14-btn").style.fontWeight = "";
      document.getElementById("ds_modals14-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals15-btn").style.fontWeight = "";
      document.getElementById("ds_modals15-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals16-btn").style.fontWeight = "";
      document.getElementById("ds_modals16-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals17-btn").style.fontWeight = "";
      document.getElementById("ds_modals17-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals18-main").style.display = "none";
      document.getElementById("ds_modals18-btn").style.fontWeight = "";
      document.getElementById("ds_modals18-li").style.backgroundColor = "";
    } else if (k == 7) {
      document.getElementById("ds_modals7-main").style.display = "block";
      document.getElementById("ds_modals7-btn").style.fontWeight = "bold";
      document.getElementById("ds_modals7-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_modals7-height").style.height = "392px";
      document.getElementById("ds_modals7-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals-btn").style.fontWeight = "";
      document.getElementById("ds_modals-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals2-btn").style.fontWeight = "";
      document.getElementById("ds_modals2-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals3-btn").style.fontWeight = "";
      document.getElementById("ds_modals3-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals4-btn").style.fontWeight = "";
      document.getElementById("ds_modals4-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals5-btn").style.fontWeight = "";
      document.getElementById("ds_modals5-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals6-btn").style.fontWeight = "";
      document.getElementById("ds_modals6-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals8-btn").style.fontWeight = "";
      document.getElementById("ds_modals8-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals9-btn").style.fontWeight = "";
      document.getElementById("ds_modals9-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals10-btn").style.fontWeight = "";
      document.getElementById("ds_modals10-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals11-btn").style.fontWeight = "";
      document.getElementById("ds_modals11-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals12-btn").style.fontWeight = "";
      document.getElementById("ds_modals12-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals13-btn").style.fontWeight = "";
      document.getElementById("ds_modals13-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals14-btn").style.fontWeight = "";
      document.getElementById("ds_modals14-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals15-btn").style.fontWeight = "";
      document.getElementById("ds_modals15-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals16-btn").style.fontWeight = "";
      document.getElementById("ds_modals16-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals17-btn").style.fontWeight = "";
      document.getElementById("ds_modals17-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals18-main").style.display = "none";
      document.getElementById("ds_modals18-btn").style.fontWeight = "";
      document.getElementById("ds_modals18-li").style.backgroundColor = "";
    } else if (k == 8) {
      document.getElementById("ds_modals8-main").style.display = "block";
      document.getElementById("ds_modals8-btn").style.fontWeight = "bold";
      document.getElementById("ds_modals8-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_modals8-height").style.height = "392px";
      document.getElementById("ds_modals8-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals-btn").style.fontWeight = "";
      document.getElementById("ds_modals-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals2-btn").style.fontWeight = "";
      document.getElementById("ds_modals2-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals3-btn").style.fontWeight = "";
      document.getElementById("ds_modals3-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals4-btn").style.fontWeight = "";
      document.getElementById("ds_modals4-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals5-btn").style.fontWeight = "";
      document.getElementById("ds_modals5-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals6-btn").style.fontWeight = "";
      document.getElementById("ds_modals6-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals7-btn").style.fontWeight = "";
      document.getElementById("ds_modals7-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals9-btn").style.fontWeight = "";
      document.getElementById("ds_modals9-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals10-btn").style.fontWeight = "";
      document.getElementById("ds_modals10-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals11-btn").style.fontWeight = "";
      document.getElementById("ds_modals11-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals12-btn").style.fontWeight = "";
      document.getElementById("ds_modals12-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals13-btn").style.fontWeight = "";
      document.getElementById("ds_modals13-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals14-btn").style.fontWeight = "";
      document.getElementById("ds_modals14-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals15-btn").style.fontWeight = "";
      document.getElementById("ds_modals15-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals16-btn").style.fontWeight = "";
      document.getElementById("ds_modals16-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals17-btn").style.fontWeight = "";
      document.getElementById("ds_modals17-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals18-main").style.display = "none";
      document.getElementById("ds_modals18-btn").style.fontWeight = "";
      document.getElementById("ds_modals18-li").style.backgroundColor = "";
    } else if (k == 9) {
      document.getElementById("ds_modals9-main").style.display = "block";
      document.getElementById("ds_modals9-btn").style.fontWeight = "bold";
      document.getElementById("ds_modals9-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_modals9-height").style.height = "392px";
      document.getElementById("ds_modals9-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals-btn").style.fontWeight = "";
      document.getElementById("ds_modals-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals2-btn").style.fontWeight = "";
      document.getElementById("ds_modals2-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals3-btn").style.fontWeight = "";
      document.getElementById("ds_modals3-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals4-btn").style.fontWeight = "";
      document.getElementById("ds_modals4-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals5-btn").style.fontWeight = "";
      document.getElementById("ds_modals5-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals6-btn").style.fontWeight = "";
      document.getElementById("ds_modals6-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals7-btn").style.fontWeight = "";
      document.getElementById("ds_modals7-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals8-btn").style.fontWeight = "";
      document.getElementById("ds_modals8-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals10-btn").style.fontWeight = "";
      document.getElementById("ds_modals10-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals11-btn").style.fontWeight = "";
      document.getElementById("ds_modals11-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals12-btn").style.fontWeight = "";
      document.getElementById("ds_modals12-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals13-btn").style.fontWeight = "";
      document.getElementById("ds_modals13-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals14-btn").style.fontWeight = "";
      document.getElementById("ds_modals14-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals15-btn").style.fontWeight = "";
      document.getElementById("ds_modals15-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals16-btn").style.fontWeight = "";
      document.getElementById("ds_modals16-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals17-btn").style.fontWeight = "";
      document.getElementById("ds_modals17-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals18-main").style.display = "none";
      document.getElementById("ds_modals18-btn").style.fontWeight = "";
      document.getElementById("ds_modals18-li").style.backgroundColor = "";
    } else if (k == 10) {
      document.getElementById("ds_modals10-main").style.display = "block";
      document.getElementById("ds_modals10-btn").style.fontWeight = "bold";
      document.getElementById("ds_modals10-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_modals10-height").style.height = "392px";
      document.getElementById("ds_modals10-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals-btn").style.fontWeight = "";
      document.getElementById("ds_modals-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals2-btn").style.fontWeight = "";
      document.getElementById("ds_modals2-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals3-btn").style.fontWeight = "";
      document.getElementById("ds_modals3-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals4-btn").style.fontWeight = "";
      document.getElementById("ds_modals4-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals5-btn").style.fontWeight = "";
      document.getElementById("ds_modals5-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals6-btn").style.fontWeight = "";
      document.getElementById("ds_modals6-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals7-btn").style.fontWeight = "";
      document.getElementById("ds_modals7-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals8-btn").style.fontWeight = "";
      document.getElementById("ds_modals8-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals9-btn").style.fontWeight = "";
      document.getElementById("ds_modals9-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals11-btn").style.fontWeight = "";
      document.getElementById("ds_modals11-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals12-btn").style.fontWeight = "";
      document.getElementById("ds_modals12-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals13-btn").style.fontWeight = "";
      document.getElementById("ds_modals13-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals14-btn").style.fontWeight = "";
      document.getElementById("ds_modals14-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals15-btn").style.fontWeight = "";
      document.getElementById("ds_modals15-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals16-btn").style.fontWeight = "";
      document.getElementById("ds_modals16-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals17-btn").style.fontWeight = "";
      document.getElementById("ds_modals17-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals18-main").style.display = "none";
      document.getElementById("ds_modals18-btn").style.fontWeight = "";
      document.getElementById("ds_modals18-li").style.backgroundColor = "";
    } else if (k == 11) {
      document.getElementById("ds_modals11-main").style.display = "block";
      document.getElementById("ds_modals11-btn").style.fontWeight = "bold";
      document.getElementById("ds_modals11-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_modals11-height").style.height = "392px";
      document.getElementById("ds_modals11-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals-btn").style.fontWeight = "";
      document.getElementById("ds_modals-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals2-btn").style.fontWeight = "";
      document.getElementById("ds_modals2-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals3-btn").style.fontWeight = "";
      document.getElementById("ds_modals3-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals4-btn").style.fontWeight = "";
      document.getElementById("ds_modals4-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals5-btn").style.fontWeight = "";
      document.getElementById("ds_modals5-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals6-btn").style.fontWeight = "";
      document.getElementById("ds_modals6-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals7-btn").style.fontWeight = "";
      document.getElementById("ds_modals7-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals8-btn").style.fontWeight = "";
      document.getElementById("ds_modals8-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals9-btn").style.fontWeight = "";
      document.getElementById("ds_modals9-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals10-btn").style.fontWeight = "";
      document.getElementById("ds_modals10-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals12-btn").style.fontWeight = "";
      document.getElementById("ds_modals12-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals13-btn").style.fontWeight = "";
      document.getElementById("ds_modals13-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals14-btn").style.fontWeight = "";
      document.getElementById("ds_modals14-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals15-btn").style.fontWeight = "";
      document.getElementById("ds_modals15-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals16-btn").style.fontWeight = "";
      document.getElementById("ds_modals16-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals17-btn").style.fontWeight = "";
      document.getElementById("ds_modals17-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals18-main").style.display = "none";
      document.getElementById("ds_modals18-btn").style.fontWeight = "";
      document.getElementById("ds_modals18-li").style.backgroundColor = "";
    } else if (k == 12) {
      document.getElementById("ds_modals12-main").style.display = "block";
      document.getElementById("ds_modals12-btn").style.fontWeight = "bold";
      document.getElementById("ds_modals12-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_modals12-height").style.height = "392px";
      document.getElementById("ds_modals12-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals-btn").style.fontWeight = "";
      document.getElementById("ds_modals-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals2-btn").style.fontWeight = "";
      document.getElementById("ds_modals2-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals3-btn").style.fontWeight = "";
      document.getElementById("ds_modals3-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals4-btn").style.fontWeight = "";
      document.getElementById("ds_modals4-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals5-btn").style.fontWeight = "";
      document.getElementById("ds_modals5-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals6-btn").style.fontWeight = "";
      document.getElementById("ds_modals6-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals7-btn").style.fontWeight = "";
      document.getElementById("ds_modals7-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals8-btn").style.fontWeight = "";
      document.getElementById("ds_modals8-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals9-btn").style.fontWeight = "";
      document.getElementById("ds_modals9-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals10-btn").style.fontWeight = "";
      document.getElementById("ds_modals10-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals11-btn").style.fontWeight = "";
      document.getElementById("ds_modals11-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals13-btn").style.fontWeight = "";
      document.getElementById("ds_modals13-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals14-btn").style.fontWeight = "";
      document.getElementById("ds_modals14-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals15-btn").style.fontWeight = "";
      document.getElementById("ds_modals15-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals16-btn").style.fontWeight = "";
      document.getElementById("ds_modals16-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals17-btn").style.fontWeight = "";
      document.getElementById("ds_modals17-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals18-main").style.display = "none";
      document.getElementById("ds_modals18-btn").style.fontWeight = "";
      document.getElementById("ds_modals18-li").style.backgroundColor = "";
    } else if (k == 13) {
      document.getElementById("ds_modals13-main").style.display = "block";
      document.getElementById("ds_modals13-btn").style.fontWeight = "bold";
      document.getElementById("ds_modals13-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_modals13-height").style.height = "392px";
      document.getElementById("ds_modals13-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals-btn").style.fontWeight = "";
      document.getElementById("ds_modals-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals2-btn").style.fontWeight = "";
      document.getElementById("ds_modals2-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals3-btn").style.fontWeight = "";
      document.getElementById("ds_modals3-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals4-btn").style.fontWeight = "";
      document.getElementById("ds_modals4-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals5-btn").style.fontWeight = "";
      document.getElementById("ds_modals5-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals6-btn").style.fontWeight = "";
      document.getElementById("ds_modals6-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals7-btn").style.fontWeight = "";
      document.getElementById("ds_modals7-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals8-btn").style.fontWeight = "";
      document.getElementById("ds_modals8-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals9-btn").style.fontWeight = "";
      document.getElementById("ds_modals9-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals10-btn").style.fontWeight = "";
      document.getElementById("ds_modals10-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals11-btn").style.fontWeight = "";
      document.getElementById("ds_modals11-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals12-btn").style.fontWeight = "";
      document.getElementById("ds_modals12-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals14-btn").style.fontWeight = "";
      document.getElementById("ds_modals14-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals15-btn").style.fontWeight = "";
      document.getElementById("ds_modals15-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals16-btn").style.fontWeight = "";
      document.getElementById("ds_modals16-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals17-btn").style.fontWeight = "";
      document.getElementById("ds_modals17-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals18-main").style.display = "none";
      document.getElementById("ds_modals18-btn").style.fontWeight = "";
      document.getElementById("ds_modals18-li").style.backgroundColor = "";
    } else if (k == 14) {
      document.getElementById("ds_modals14-main").style.display = "block";
      document.getElementById("ds_modals14-btn").style.fontWeight = "bold";
      document.getElementById("ds_modals14-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_modals14-height").style.height = "392px";
      document.getElementById("ds_modals14-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals-btn").style.fontWeight = "";
      document.getElementById("ds_modals-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals2-btn").style.fontWeight = "";
      document.getElementById("ds_modals2-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals3-btn").style.fontWeight = "";
      document.getElementById("ds_modals3-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals4-btn").style.fontWeight = "";
      document.getElementById("ds_modals4-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals5-btn").style.fontWeight = "";
      document.getElementById("ds_modals5-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals6-btn").style.fontWeight = "";
      document.getElementById("ds_modals6-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals7-btn").style.fontWeight = "";
      document.getElementById("ds_modals7-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals8-btn").style.fontWeight = "";
      document.getElementById("ds_modals8-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals9-btn").style.fontWeight = "";
      document.getElementById("ds_modals9-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals10-btn").style.fontWeight = "";
      document.getElementById("ds_modals10-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals11-btn").style.fontWeight = "";
      document.getElementById("ds_modals11-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals12-btn").style.fontWeight = "";
      document.getElementById("ds_modals12-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals13-btn").style.fontWeight = "";
      document.getElementById("ds_modals13-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals15-btn").style.fontWeight = "";
      document.getElementById("ds_modals15-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals16-btn").style.fontWeight = "";
      document.getElementById("ds_modals16-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals17-btn").style.fontWeight = "";
      document.getElementById("ds_modals17-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals18-main").style.display = "none";
      document.getElementById("ds_modals18-btn").style.fontWeight = "";
      document.getElementById("ds_modals18-li").style.backgroundColor = "";
    } else if (k == 15) {
      document.getElementById("ds_modals15-main").style.display = "block";
      document.getElementById("ds_modals15-btn").style.fontWeight = "bold";
      document.getElementById("ds_modals15-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_modals15-height").style.height = "392px";
      document.getElementById("ds_modals15-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals-btn").style.fontWeight = "";
      document.getElementById("ds_modals-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals2-btn").style.fontWeight = "";
      document.getElementById("ds_modals2-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals3-btn").style.fontWeight = "";
      document.getElementById("ds_modals3-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals4-btn").style.fontWeight = "";
      document.getElementById("ds_modals4-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals5-btn").style.fontWeight = "";
      document.getElementById("ds_modals5-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals6-btn").style.fontWeight = "";
      document.getElementById("ds_modals6-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals7-btn").style.fontWeight = "";
      document.getElementById("ds_modals7-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals8-btn").style.fontWeight = "";
      document.getElementById("ds_modals8-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals9-btn").style.fontWeight = "";
      document.getElementById("ds_modals9-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals10-btn").style.fontWeight = "";
      document.getElementById("ds_modals10-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals11-btn").style.fontWeight = "";
      document.getElementById("ds_modals11-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals12-btn").style.fontWeight = "";
      document.getElementById("ds_modals12-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals13-btn").style.fontWeight = "";
      document.getElementById("ds_modals13-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals14-btn").style.fontWeight = "";
      document.getElementById("ds_modals14-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals16-btn").style.fontWeight = "";
      document.getElementById("ds_modals16-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals17-btn").style.fontWeight = "";
      document.getElementById("ds_modals17-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals18-main").style.display = "none";
      document.getElementById("ds_modals18-btn").style.fontWeight = "";
      document.getElementById("ds_modals18-li").style.backgroundColor = "";
    } else if (k == 16) {
      document.getElementById("ds_modals16-main").style.display = "block";
      document.getElementById("ds_modals16-btn").style.fontWeight = "bold";
      document.getElementById("ds_modals16-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_modals16-height").style.height = "392px";
      document.getElementById("ds_modals16-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals-btn").style.fontWeight = "";
      document.getElementById("ds_modals-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals2-btn").style.fontWeight = "";
      document.getElementById("ds_modals2-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals3-btn").style.fontWeight = "";
      document.getElementById("ds_modals3-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals4-btn").style.fontWeight = "";
      document.getElementById("ds_modals4-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals5-btn").style.fontWeight = "";
      document.getElementById("ds_modals5-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals6-btn").style.fontWeight = "";
      document.getElementById("ds_modals6-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals7-btn").style.fontWeight = "";
      document.getElementById("ds_modals7-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals8-btn").style.fontWeight = "";
      document.getElementById("ds_modals8-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals9-btn").style.fontWeight = "";
      document.getElementById("ds_modals9-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals10-btn").style.fontWeight = "";
      document.getElementById("ds_modals10-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals11-btn").style.fontWeight = "";
      document.getElementById("ds_modals11-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals12-btn").style.fontWeight = "";
      document.getElementById("ds_modals12-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals13-btn").style.fontWeight = "";
      document.getElementById("ds_modals13-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals14-btn").style.fontWeight = "";
      document.getElementById("ds_modals14-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals15-btn").style.fontWeight = "";
      document.getElementById("ds_modals15-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals17-btn").style.fontWeight = "";
      document.getElementById("ds_modals17-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals18-main").style.display = "none";
      document.getElementById("ds_modals18-btn").style.fontWeight = "";
      document.getElementById("ds_modals18-li").style.backgroundColor = "";
    } else if (k == 17) {
      document.getElementById("ds_modals17-main").style.display = "block";
      document.getElementById("ds_modals17-btn").style.fontWeight = "bold";
      document.getElementById("ds_modals17-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_modals17-height").style.height = "392px";
      document.getElementById("ds_modals17-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals-btn").style.fontWeight = "";
      document.getElementById("ds_modals-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals2-btn").style.fontWeight = "";
      document.getElementById("ds_modals2-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals3-btn").style.fontWeight = "";
      document.getElementById("ds_modals3-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals4-btn").style.fontWeight = "";
      document.getElementById("ds_modals4-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals5-btn").style.fontWeight = "";
      document.getElementById("ds_modals5-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals6-btn").style.fontWeight = "";
      document.getElementById("ds_modals6-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals7-btn").style.fontWeight = "";
      document.getElementById("ds_modals7-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals8-btn").style.fontWeight = "";
      document.getElementById("ds_modals8-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals9-btn").style.fontWeight = "";
      document.getElementById("ds_modals9-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals10-btn").style.fontWeight = "";
      document.getElementById("ds_modals10-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals11-btn").style.fontWeight = "";
      document.getElementById("ds_modals11-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals12-btn").style.fontWeight = "";
      document.getElementById("ds_modals12-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals13-btn").style.fontWeight = "";
      document.getElementById("ds_modals13-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals14-btn").style.fontWeight = "";
      document.getElementById("ds_modals14-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals15-btn").style.fontWeight = "";
      document.getElementById("ds_modals15-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals16-btn").style.fontWeight = "";
      document.getElementById("ds_modals16-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals18-main").style.display = "none";
      document.getElementById("ds_modals18-btn").style.fontWeight = "";
      document.getElementById("ds_modals18-li").style.backgroundColor = "";
    } else if (k == 18) {
      document.getElementById("ds_modals18-main").style.display = "block";
      document.getElementById("ds_modals18-btn").style.fontWeight = "bold";
      document.getElementById("ds_modals18-li").style.backgroundColor = "#f3f3f3";
      document.getElementById("ds_modals18-height").style.height = "392px";
      document.getElementById("ds_modals18-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_modals-main").style.display = "none";
      document.getElementById("ds_modals-btn").style.fontWeight = "";
      document.getElementById("ds_modals-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals2-main").style.display = "none";
      document.getElementById("ds_modals2-btn").style.fontWeight = "";
      document.getElementById("ds_modals2-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals3-main").style.display = "none";
      document.getElementById("ds_modals3-btn").style.fontWeight = "";
      document.getElementById("ds_modals3-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals4-main").style.display = "none";
      document.getElementById("ds_modals4-btn").style.fontWeight = "";
      document.getElementById("ds_modals4-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals5-main").style.display = "none";
      document.getElementById("ds_modals5-btn").style.fontWeight = "";
      document.getElementById("ds_modals5-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals6-main").style.display = "none";
      document.getElementById("ds_modals6-btn").style.fontWeight = "";
      document.getElementById("ds_modals6-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals7-main").style.display = "none";
      document.getElementById("ds_modals7-btn").style.fontWeight = "";
      document.getElementById("ds_modals7-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals8-main").style.display = "none";
      document.getElementById("ds_modals8-btn").style.fontWeight = "";
      document.getElementById("ds_modals8-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals9-main").style.display = "none";
      document.getElementById("ds_modals9-btn").style.fontWeight = "";
      document.getElementById("ds_modals9-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals10-main").style.display = "none";
      document.getElementById("ds_modals10-btn").style.fontWeight = "";
      document.getElementById("ds_modals10-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals11-main").style.display = "none";
      document.getElementById("ds_modals11-btn").style.fontWeight = "";
      document.getElementById("ds_modals11-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals12-main").style.display = "none";
      document.getElementById("ds_modals12-btn").style.fontWeight = "";
      document.getElementById("ds_modals12-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals13-main").style.display = "none";
      document.getElementById("ds_modals13-btn").style.fontWeight = "";
      document.getElementById("ds_modals13-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals14-main").style.display = "none";
      document.getElementById("ds_modals14-btn").style.fontWeight = "";
      document.getElementById("ds_modals14-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals15-main").style.display = "none";
      document.getElementById("ds_modals15-btn").style.fontWeight = "";
      document.getElementById("ds_modals15-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals16-main").style.display = "none";
      document.getElementById("ds_modals16-btn").style.fontWeight = "";
      document.getElementById("ds_modals16-li").style.backgroundColor = "";
  
      document.getElementById("ds_modals17-main").style.display = "none";
      document.getElementById("ds_modals17-btn").style.fontWeight = "";
      document.getElementById("ds_modals17-li").style.backgroundColor = "";
    }
  }
  let ds_modalsUl = document.getElementById("ds_modals-ul");
  
  let ds_modalsArr = [
    {
      element: "BERT Large BFloat16 Inference Tensorflow* Model Package",
    },
    {
      element: "BERT Large BFloat16 Training TensorFlow* Model Package",
    },
    {
      element: "BERT Large FP32 Inference Tensorflow* Model Package",
    },
    {
      element: "BERT Large FP32 Training Tensorflow* Model Package",
    },
  ];
  
  for (let i = 0; i < ds_modalsArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_modalsArr[i].element}</a>`;
    ds_modalsUl.appendChild(li);
  }
  
  let ds_modals2Ul = document.getElementById("ds_modals2-ul");
  
  let ds_modals2Arr = [
    {
      element: "SSD-MobileNet FP32 Inference Tensorflow* Model Package",
    },
    {
      element: "SSD-MobileNet Int8 Inference TensorFlow* Model Package",
    },
  ];
  
  for (let i = 0; i < ds_modals2Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_modals2Arr[i].element}</a>`;
    ds_modals2Ul.appendChild(li);
  }
  
  let ds_modals3Ul = document.getElementById("ds_modals3-ul");
  
  let ds_modals3Arr = [
    {
      element: "DenseNet169 FP32 Inference TensorFlow* Model Package",
    },
  ];
  
  for (let i = 0; i < ds_modals3Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_modals3Arr[i].element}</a>`;
    ds_modals3Ul.appendChild(li);
  }
  let ds_modals4Ul = document.getElementById("ds_modals4-ul");
  
  let ds_modals4Arr = [
    {
      element: "Run a DLRM Bfloat16 Training Using a PyTorch* Model Package",
    },
  ];
  
  for (let i = 0; i < ds_modals4Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_modals4Arr[i].element}</a>`;
    ds_modals4Ul.appendChild(li);
  }
  
  let ds_modals5Ul = document.getElementById("ds_modals5-ul");
  
  let ds_modals5Arr = [
    {
      element: "Run GNMT FP32 Inference with a TensorFlow* Model Package",
    },
  ];
  for (let i = 0; i < ds_modals5Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_modals5Arr[i].element}</a>`;
    ds_modals5Ul.appendChild(li);
  }
  
  let ds_modals6Ul = document.getElementById("ds_modals6-ul");
  
  let ds_modals6Arr = [
    {
      element:
        "Optimize an Inception V3 FP32 Inference Model Package with TensorFlow*",
    },
    {
      element: "Optimize an Inception V4 FP32 Inference Model with TensorFlow*",
    },
    {
      element: "Optimize an Inception V4 Int8 Inference Model with TensorFlow*",
    },
  ];
  for (let i = 0; i < ds_modals6Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_modals6Arr[i].element}</a>`;
    ds_modals6Ul.appendChild(li);
  }
  
  let ds_modals7Ul = document.getElementById("ds_modals7-ul");
  
  let ds_modals7Arr = [
    {
      element: "Optimize a MobileNet* V1 FP32 Inference Model with TensorFlow*",
    },
    {
      element:
        "Optimize a MobileNet* V1 Int8 Inference Model Package with TensorFlow*",
    },
  ];
  for (let i = 0; i < ds_modals7Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_modals7Arr[i].element}</a>`;
    ds_modals7Ul.appendChild(li);
  }
  
  let ds_modals8Ul = document.getElementById("ds_modals8-ul");
  
  let ds_modals8Arr = [
    {
      element: "Optimize an NCF Inference Model with TensorFlow*",
    },
  ];
  for (let i = 0; i < ds_modals8Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_modals8Arr[i].element}</a>`;
    ds_modals8Ul.appendChild(li);
  }
  
  let ds_modals9Ul = document.getElementById("ds_modals9-ul");
  
  let ds_modals9Arr = [
    {
      element: "Optimize a Mask R-CNN FP32 Inference Model with TensorFlow*",
    },
    {
      element:
        "Run the Faster R-CNN FP32 Inference with a TensorFlow* Model Package",
    },
    {
      element:
        "Run the Faster R-CNN Int8 Inference with a TensorFlow* Model Package",
    },
  ];
  for (let i = 0; i < ds_modals9Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_modals9Arr[i].element}</a>`;
    ds_modals9Ul.appendChild(li);
  }
  
  let ds_modals10Ul = document.getElementById("ds_modals10-ul");
  
  let ds_modals10Arr = [
    {
      element: "ResNet101 Int8 Inference TensorFlow* Model Package",
    },
  ];
  for (let i = 0; i < ds_modals10Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_modals10Arr[i].element}</a>`;
    ds_modals10Ul.appendChild(li);
  }
  
  let ds_modals11Ul = document.getElementById("ds_modals11-ul");
  
  let ds_modals11Arr = [
    {
      element: "ResNet101 FP32 Inference TensorFlow* Model Package",
    },
  ];
  for (let i = 0; i < ds_modals11Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_modals11Arr[i].element}</a>`;
    ds_modals11Ul.appendChild(li);
  }
  
  let ds_modals12Ul = document.getElementById("ds_modals12-ul");
  
  let ds_modals12Arr = [
    {
      element: "ResNet50 BFloat16 Inference PyTorch* Model Package",
    },
    {
      element: "ResNet50 FP32 Inference PyTorch* Model Package",
    },
    {
      element: "ResNet50 FP32 Inference Tensorflow* Model Package",
    },
    {
      element: "ResNet50 Int8 Inference TensorFlow* Model Package",
    },
    {
      element: "ResNet50v1.5 BFloat16 Inference TensorFlow* Model Package",
    },
    {
      element: "ResNet50v1.5 BFloat16 Training TensorFlow* Model Package",
    },
    {
      element: "ResNet50v1.5 FP32 Inference TensorFlow* Model Package",
    },
    {
      element: "ResNet50v1.5 FP32 Training Tensorflow* Model Package",
    },
    {
      element: "ResNet50v1.5 Int8 Inference Tensorflow* Model Package",
    },
  ];
  for (let i = 0; i < ds_modals12Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_modals12Arr[i].element}</a>`;
    ds_modals12Ul.appendChild(li);
  }
  
  let ds_modals13Ul = document.getElementById("ds_modals13-ul");
  
  let ds_modals13Arr = [
    {
      element: "Optimize an R-FCN FP32 Inference Model Package with TensorFlow*",
    },
    {
      element: "ResNet50 FP32 Inference PyTorch* Model Package",
    },
    {
      element: "ResNet50 FP32 Inference Tensorflow* Model Package",
    },
    {
      element: "ResNet50 Int8 Inference TensorFlow* Model Package",
    },
    {
      element: "ResNet50v1.5 BFloat16 Inference TensorFlow* Model Package",
    },
    {
      element: "ResNet50v1.5 BFloat16 Training TensorFlow* Model Package",
    },
    {
      element: "ResNet50v1.5 FP32 Inference TensorFlow* Model Package",
    },
    {
      element: "ResNet50v1.5 FP32 Training Tensorflow* Model Package",
    },
    {
      element: "ResNet50v1.5 Int8 Inference Tensorflow* Model Package",
    },
  ];
  for (let i = 0; i < ds_modals13Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_modals13Arr[i].element}</a>`;
    ds_modals13Ul.appendChild(li);
  }
  
  let ds_modals14Ul = document.getElementById("ds_modals14-ul");
  
  let ds_modals14Arr = [
    {
      element: "SSD-ResNet34 BFloat16 Training TensorFlow* Model Package",
    },
    {
      element: "SSD-ResNet34 FP32 Training TensorFlow* Model Package",
    },
    {
      element: "SSD-ResNet34 Int8 Inference Tensorflow* Model",
    },
  ];
  for (let i = 0; i < ds_modals14Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_modals14Arr[i].element}</a>`;
    ds_modals14Ul.appendChild(li);
  }
  
  let ds_modals15Ul = document.getElementById("ds_modals15-ul");
  
  let ds_modals15Arr = [
    {
      element:
        "Transformer-LT MLPerf BFloat16 Training TensorFlow* Model Package",
    },
    {
      element: "Transformer-LT MLPerf FP32 Training Tensorflow* Model Package",
    },
    {
      element: "Transformer-LT Official FP32 Inference Tensorflow* Model Package",
    },
  ];
  for (let i = 0; i < ds_modals15Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_modals15Arr[i].element}</a>`;
    ds_modals15Ul.appendChild(li);
  }
  
  let ds_modals16Ul = document.getElementById("ds_modals16-ul");
  
  let ds_modals16Arr = [
    {
      element: "3D UNet FP32 Inference for TensorFlow* Model Package",
    },
    {
      element: "UNet FP32 Inference Tensorflow* Model Package",
    },
  ];
  for (let i = 0; i < ds_modals16Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_modals16Arr[i].element}</a>`;
    ds_modals16Ul.appendChild(li);
  }
  
  let ds_modals17Ul = document.getElementById("ds_modals17-ul");
  
  let ds_modals17Arr = [
    {
      element: "WaveNet FP32 Inference Tensorflow* Model Package",
    },
  ];
  for (let i = 0; i < ds_modals17Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_modals17Arr[i].element}</a>`;
    ds_modals17Ul.appendChild(li);
  }
  
  let ds_modals18Ul = document.getElementById("ds_modals18-ul");
  
  let ds_modals18Arr = [
    {
      element:
        "Wide & Deep Large Dataset FP32 Inference TensorFlow* Model Package",
    },
    {
      element:
        "Wide & Deep Large Dataset FP32 Training Tensorflow* Model Package",
    },
    {
      element:
        "Wide & Deep Large Dataset Int8 Inference TensorFlow* Model Package",
    },
  ];
  for (let i = 0; i < ds_modals18Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_modals18Arr[i].element}</a>`;
    ds_modals18Ul.appendChild(li);
  }
  
  let ds_plugUl = document.getElementById("ds_plug-ul");
  
  let ds_plugArr = [
    {
      element: "GStreamer* Video Analytics (GVA) Plugin",
    },
    {
      element: "Intel Unite® Plugin SDK",
    },
    {
      element: "Intel® Device Plug-ins for Kubernetes* - GitHub*",
    },
    {
      element: "Intel® Texture Works Plugin for Photoshop*",
    },
  ];
  for (let i = 0; i < ds_plugArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_plugArr[i].element}</a>`;
    ds_plugUl.appendChild(li);
  }
  
  function powers() {
    document.getElementById("ds_powers-main").style.display = "block";
    document.getElementById("ds_powers-btn").style.fontWeight = "bold";
    document.getElementById("ds_powers-li").style.backgroundColor = "#f3f3f3";
    document.getElementById("ds_powers-height").style.height = "392px";
  }
  
  let ds_powersUl = document.getElementById("ds_powers-ul");
  
  let ds_powersArr = [
    {
      element: "DDR5 Memory VR Test Tool Kit",
    },
    {
      element: "DDR5 Memory VR Test Tool Kit",
    },
    {
      element: "Gen5 VR Test Tool Base Kit",
    },
    {
      element: "Gen5 VR Test Tool Base Kit",
    },
    {
      element: "Low Power VR Test Tool Kit",
    },
    {
      element: "Low Power VR Test Tool Kit",
    },
  ];
  for (let i = 0; i < ds_powersArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_powersArr[i].element}</a>`;
    ds_powersUl.appendChild(li);
  }
  
  let ds_productUl = document.getElementById("ds_product-ul");
  
  let ds_productArr = [
    {
      element: "Intel® Edge Software Configurator",
    },
    {
      element: "Intel® License Manager for FLEXlm*",
    },
    {
      element: "Intel® Software Development Products Registration Center",
    },
  ];
  for (let i = 0; i < ds_productArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_productArr[i].element}</a>`;
    ds_productUl.appendChild(li);
  }
  
  function reference(l) {
    if (l == 1) {
      document.getElementById("ds_reference-main").style.display = "block";
      document.getElementById("ds_reference-btn").style.fontWeight = "bold";
      document.getElementById("ds_reference-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_reference-height").style.height = "392px";
      document.getElementById("ds_reference-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_reference2-main").style.display = "none";
      document.getElementById("ds_reference2-btn").style.fontWeight = "";
      document.getElementById("ds_reference2-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference3-main").style.display = "none";
      document.getElementById("ds_reference3-btn").style.fontWeight = "";
      document.getElementById("ds_reference3-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference4-main").style.display = "none";
      document.getElementById("ds_reference4-btn").style.fontWeight = "";
      document.getElementById("ds_reference4-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference5-main").style.display = "none";
      document.getElementById("ds_reference5-btn").style.fontWeight = "";
      document.getElementById("ds_reference5-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference6-main").style.display = "none";
      document.getElementById("ds_reference6-btn").style.fontWeight = "";
      document.getElementById("ds_reference6-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference7-main").style.display = "none";
      document.getElementById("ds_reference7-btn").style.fontWeight = "";
      document.getElementById("ds_reference7-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference8-main").style.display = "none";
      document.getElementById("ds_reference8-btn").style.fontWeight = "";
      document.getElementById("ds_reference8-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference9-main").style.display = "none";
      document.getElementById("ds_reference9-btn").style.fontWeight = "";
      document.getElementById("ds_reference9-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference10-main").style.display = "none";
      document.getElementById("ds_reference10-btn").style.fontWeight = "";
      document.getElementById("ds_reference10-li").style.backgroundColor = "";
    } else if (l == 2) {
      document.getElementById("ds_reference2-main").style.display = "block";
      document.getElementById("ds_reference2-btn").style.fontWeight = "bold";
      document.getElementById("ds_reference2-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_reference2-height").style.height = "392px";
      document.getElementById("ds_reference2-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_reference-main").style.display = "none";
      document.getElementById("ds_reference-btn").style.fontWeight = "";
      document.getElementById("ds_reference-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference3-main").style.display = "none";
      document.getElementById("ds_reference3-btn").style.fontWeight = "";
      document.getElementById("ds_reference3-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference4-main").style.display = "none";
      document.getElementById("ds_reference4-btn").style.fontWeight = "";
      document.getElementById("ds_reference4-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference5-main").style.display = "none";
      document.getElementById("ds_reference5-btn").style.fontWeight = "";
      document.getElementById("ds_reference5-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference6-main").style.display = "none";
      document.getElementById("ds_reference6-btn").style.fontWeight = "";
      document.getElementById("ds_reference6-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference7-main").style.display = "none";
      document.getElementById("ds_reference7-btn").style.fontWeight = "";
      document.getElementById("ds_reference7-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference8-main").style.display = "none";
      document.getElementById("ds_reference8-btn").style.fontWeight = "";
      document.getElementById("ds_reference8-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference9-main").style.display = "none";
      document.getElementById("ds_reference9-btn").style.fontWeight = "";
      document.getElementById("ds_reference9-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference10-main").style.display = "none";
      document.getElementById("ds_reference10-btn").style.fontWeight = "";
      document.getElementById("ds_reference10-li").style.backgroundColor = "";
    } else if (l == 3) {
      document.getElementById("ds_reference3-main").style.display = "block";
      document.getElementById("ds_reference3-btn").style.fontWeight = "bold";
      document.getElementById("ds_reference3-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_reference3-height").style.height = "392px";
      document.getElementById("ds_reference3-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_reference-main").style.display = "none";
      document.getElementById("ds_reference-btn").style.fontWeight = "";
      document.getElementById("ds_reference-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference2-main").style.display = "none";
      document.getElementById("ds_reference2-btn").style.fontWeight = "";
      document.getElementById("ds_reference2-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference4-main").style.display = "none";
      document.getElementById("ds_reference4-btn").style.fontWeight = "";
      document.getElementById("ds_reference4-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference5-main").style.display = "none";
      document.getElementById("ds_reference5-btn").style.fontWeight = "";
      document.getElementById("ds_reference5-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference6-main").style.display = "none";
      document.getElementById("ds_reference6-btn").style.fontWeight = "";
      document.getElementById("ds_reference6-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference7-main").style.display = "none";
      document.getElementById("ds_reference7-btn").style.fontWeight = "";
      document.getElementById("ds_reference7-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference8-main").style.display = "none";
      document.getElementById("ds_reference8-btn").style.fontWeight = "";
      document.getElementById("ds_reference8-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference9-main").style.display = "none";
      document.getElementById("ds_reference9-btn").style.fontWeight = "";
      document.getElementById("ds_reference9-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference10-main").style.display = "none";
      document.getElementById("ds_reference10-btn").style.fontWeight = "";
      document.getElementById("ds_reference10-li").style.backgroundColor = "";
    } else if (l == 4) {
      document.getElementById("ds_reference4-main").style.display = "block";
      document.getElementById("ds_reference4-btn").style.fontWeight = "bold";
      document.getElementById("ds_reference4-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_reference4-height").style.height = "392px";
      document.getElementById("ds_reference4-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_reference-main").style.display = "none";
      document.getElementById("ds_reference-btn").style.fontWeight = "";
      document.getElementById("ds_reference-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference2-main").style.display = "none";
      document.getElementById("ds_reference2-btn").style.fontWeight = "";
      document.getElementById("ds_reference2-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference3-main").style.display = "none";
      document.getElementById("ds_reference3-btn").style.fontWeight = "";
      document.getElementById("ds_reference3-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference5-main").style.display = "none";
      document.getElementById("ds_reference5-btn").style.fontWeight = "";
      document.getElementById("ds_reference5-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference6-main").style.display = "none";
      document.getElementById("ds_reference6-btn").style.fontWeight = "";
      document.getElementById("ds_reference6-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference7-main").style.display = "none";
      document.getElementById("ds_reference7-btn").style.fontWeight = "";
      document.getElementById("ds_reference7-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference8-main").style.display = "none";
      document.getElementById("ds_reference8-btn").style.fontWeight = "";
      document.getElementById("ds_reference8-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference9-main").style.display = "none";
      document.getElementById("ds_reference9-btn").style.fontWeight = "";
      document.getElementById("ds_reference9-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference10-main").style.display = "none";
      document.getElementById("ds_reference10-btn").style.fontWeight = "";
      document.getElementById("ds_reference10-li").style.backgroundColor = "";
    } else if (l == 5) {
      document.getElementById("ds_reference5-main").style.display = "block";
      document.getElementById("ds_reference5-btn").style.fontWeight = "bold";
      document.getElementById("ds_reference5-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_reference5-height").style.height = "392px";
      document.getElementById("ds_reference5-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_reference-main").style.display = "none";
      document.getElementById("ds_reference-btn").style.fontWeight = "";
      document.getElementById("ds_reference-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference2-main").style.display = "none";
      document.getElementById("ds_reference2-btn").style.fontWeight = "";
      document.getElementById("ds_reference2-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference3-main").style.display = "none";
      document.getElementById("ds_reference3-btn").style.fontWeight = "";
      document.getElementById("ds_reference3-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference4-main").style.display = "none";
      document.getElementById("ds_reference4-btn").style.fontWeight = "";
      document.getElementById("ds_reference4-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference6-main").style.display = "none";
      document.getElementById("ds_reference6-btn").style.fontWeight = "";
      document.getElementById("ds_reference6-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference7-main").style.display = "none";
      document.getElementById("ds_reference7-btn").style.fontWeight = "";
      document.getElementById("ds_reference7-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference8-main").style.display = "none";
      document.getElementById("ds_reference8-btn").style.fontWeight = "";
      document.getElementById("ds_reference8-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference9-main").style.display = "none";
      document.getElementById("ds_reference9-btn").style.fontWeight = "";
      document.getElementById("ds_reference9-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference10-main").style.display = "none";
      document.getElementById("ds_reference10-btn").style.fontWeight = "";
      document.getElementById("ds_reference10-li").style.backgroundColor = "";
    } else if (l == 6) {
      document.getElementById("ds_reference6-main").style.display = "block";
      document.getElementById("ds_reference6-btn").style.fontWeight = "bold";
      document.getElementById("ds_reference6-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_reference6-height").style.height = "392px";
      document.getElementById("ds_reference6-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_reference-main").style.display = "none";
      document.getElementById("ds_reference-btn").style.fontWeight = "";
      document.getElementById("ds_reference-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference2-main").style.display = "none";
      document.getElementById("ds_reference2-btn").style.fontWeight = "";
      document.getElementById("ds_reference2-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference3-main").style.display = "none";
      document.getElementById("ds_reference3-btn").style.fontWeight = "";
      document.getElementById("ds_reference3-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference4-main").style.display = "none";
      document.getElementById("ds_reference4-btn").style.fontWeight = "";
      document.getElementById("ds_reference4-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference5-main").style.display = "none";
      document.getElementById("ds_reference5-btn").style.fontWeight = "";
      document.getElementById("ds_reference5-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference7-main").style.display = "none";
      document.getElementById("ds_reference7-btn").style.fontWeight = "";
      document.getElementById("ds_reference7-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference8-main").style.display = "none";
      document.getElementById("ds_reference8-btn").style.fontWeight = "";
      document.getElementById("ds_reference8-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference9-main").style.display = "none";
      document.getElementById("ds_reference9-btn").style.fontWeight = "";
      document.getElementById("ds_reference9-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference10-main").style.display = "none";
      document.getElementById("ds_reference10-btn").style.fontWeight = "";
      document.getElementById("ds_reference10-li").style.backgroundColor = "";
    } else if (l == 7) {
      document.getElementById("ds_reference7-main").style.display = "block";
      document.getElementById("ds_reference7-btn").style.fontWeight = "bold";
      document.getElementById("ds_reference7-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_reference7-height").style.height = "392px";
      document.getElementById("ds_reference7-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_reference-main").style.display = "none";
      document.getElementById("ds_reference-btn").style.fontWeight = "";
      document.getElementById("ds_reference-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference2-main").style.display = "none";
      document.getElementById("ds_reference2-btn").style.fontWeight = "";
      document.getElementById("ds_reference2-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference3-main").style.display = "none";
      document.getElementById("ds_reference3-btn").style.fontWeight = "";
      document.getElementById("ds_reference3-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference4-main").style.display = "none";
      document.getElementById("ds_reference4-btn").style.fontWeight = "";
      document.getElementById("ds_reference4-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference5-main").style.display = "none";
      document.getElementById("ds_reference5-btn").style.fontWeight = "";
      document.getElementById("ds_reference5-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference6-main").style.display = "none";
      document.getElementById("ds_reference6-btn").style.fontWeight = "";
      document.getElementById("ds_reference6-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference8-main").style.display = "none";
      document.getElementById("ds_reference8-btn").style.fontWeight = "";
      document.getElementById("ds_reference8-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference9-main").style.display = "none";
      document.getElementById("ds_reference9-btn").style.fontWeight = "";
      document.getElementById("ds_reference9-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference10-main").style.display = "none";
      document.getElementById("ds_reference10-btn").style.fontWeight = "";
      document.getElementById("ds_reference10-li").style.backgroundColor = "";
    } else if (l == 8) {
      document.getElementById("ds_reference8-main").style.display = "block";
      document.getElementById("ds_reference8-btn").style.fontWeight = "bold";
      document.getElementById("ds_reference8-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_reference8-height").style.height = "392px";
      document.getElementById("ds_reference8-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_reference-main").style.display = "none";
      document.getElementById("ds_reference-btn").style.fontWeight = "";
      document.getElementById("ds_reference-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference2-main").style.display = "none";
      document.getElementById("ds_reference2-btn").style.fontWeight = "";
      document.getElementById("ds_reference2-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference3-main").style.display = "none";
      document.getElementById("ds_reference3-btn").style.fontWeight = "";
      document.getElementById("ds_reference3-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference4-main").style.display = "none";
      document.getElementById("ds_reference4-btn").style.fontWeight = "";
      document.getElementById("ds_reference4-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference5-main").style.display = "none";
      document.getElementById("ds_reference5-btn").style.fontWeight = "";
      document.getElementById("ds_reference5-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference6-main").style.display = "none";
      document.getElementById("ds_reference6-btn").style.fontWeight = "";
      document.getElementById("ds_reference6-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference7-main").style.display = "none";
      document.getElementById("ds_reference7-btn").style.fontWeight = "";
      document.getElementById("ds_reference7-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference9-main").style.display = "none";
      document.getElementById("ds_reference9-btn").style.fontWeight = "";
      document.getElementById("ds_reference9-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference10-main").style.display = "none";
      document.getElementById("ds_reference10-btn").style.fontWeight = "";
      document.getElementById("ds_reference10-li").style.backgroundColor = "";
    } else if (l == 9) {
      document.getElementById("ds_reference9-main").style.display = "block";
      document.getElementById("ds_reference9-btn").style.fontWeight = "bold";
      document.getElementById("ds_reference9-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_reference9-height").style.height = "392px";
      document.getElementById("ds_reference9-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_reference-main").style.display = "none";
      document.getElementById("ds_reference-btn").style.fontWeight = "";
      document.getElementById("ds_reference-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference2-main").style.display = "none";
      document.getElementById("ds_reference2-btn").style.fontWeight = "";
      document.getElementById("ds_reference2-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference3-main").style.display = "none";
      document.getElementById("ds_reference3-btn").style.fontWeight = "";
      document.getElementById("ds_reference3-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference4-main").style.display = "none";
      document.getElementById("ds_reference4-btn").style.fontWeight = "";
      document.getElementById("ds_reference4-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference5-main").style.display = "none";
      document.getElementById("ds_reference5-btn").style.fontWeight = "";
      document.getElementById("ds_reference5-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference6-main").style.display = "none";
      document.getElementById("ds_reference6-btn").style.fontWeight = "";
      document.getElementById("ds_reference6-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference7-main").style.display = "none";
      document.getElementById("ds_reference7-btn").style.fontWeight = "";
      document.getElementById("ds_reference7-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference8-main").style.display = "none";
      document.getElementById("ds_reference8-btn").style.fontWeight = "";
      document.getElementById("ds_reference8-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference10-main").style.display = "none";
      document.getElementById("ds_reference10-btn").style.fontWeight = "";
      document.getElementById("ds_reference10-li").style.backgroundColor = "";
    } else if (l == 10) {
      document.getElementById("ds_reference10-main").style.display = "block";
      document.getElementById("ds_reference10-btn").style.fontWeight = "bold";
      document.getElementById("ds_reference10-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_reference10-height").style.height = "392px";
      document.getElementById("ds_reference10-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_reference-main").style.display = "none";
      document.getElementById("ds_reference-btn").style.fontWeight = "";
      document.getElementById("ds_reference-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference2-main").style.display = "none";
      document.getElementById("ds_reference2-btn").style.fontWeight = "";
      document.getElementById("ds_reference2-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference3-main").style.display = "none";
      document.getElementById("ds_reference3-btn").style.fontWeight = "";
      document.getElementById("ds_reference3-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference4-main").style.display = "none";
      document.getElementById("ds_reference4-btn").style.fontWeight = "";
      document.getElementById("ds_reference4-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference5-main").style.display = "none";
      document.getElementById("ds_reference5-btn").style.fontWeight = "";
      document.getElementById("ds_reference5-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference6-main").style.display = "none";
      document.getElementById("ds_reference6-btn").style.fontWeight = "";
      document.getElementById("ds_reference6-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference7-main").style.display = "none";
      document.getElementById("ds_reference7-btn").style.fontWeight = "";
      document.getElementById("ds_reference7-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference8-main").style.display = "none";
      document.getElementById("ds_reference8-btn").style.fontWeight = "";
      document.getElementById("ds_reference8-li").style.backgroundColor = "";
  
      document.getElementById("ds_reference9-main").style.display = "none";
      document.getElementById("ds_reference9-btn").style.fontWeight = "";
      document.getElementById("ds_reference9-li").style.backgroundColor = "";
    }
  }
  
  let ds_referenceUl = document.getElementById("ds_reference-ul");
  
  let ds_referenceArr = [
    {
      element: "Universal Wellpad Controller",
    },
  ];
  for (let i = 0; i < ds_referenceArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_referenceArr[i].element}</a>`;
    ds_referenceUl.appendChild(li);
  }
  
  let ds_reference2Ul = document.getElementById("ds_reference2-ul");
  
  let ds_reference2Arr = [
    {
      element: "Industrial Text Line Recognition Reference Implementation",
    },
  ];
  for (let i = 0; i < ds_reference2Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_reference2Arr[i].element}</a>`;
    ds_reference2Ul.appendChild(li);
  }
  
  let ds_reference3Ul = document.getElementById("ds_reference3-ul");
  
  let ds_reference3Arr = [
    {
      element: "Industrial Surface Defect Detection Reference Implementation",
    },
    {
      element: "Rotor Bearing Defect Detector Reference Implementation",
    },
    {
      element: "Textile Defect Classifier Reference Implementation",
    },
    {
      element: "Weld Porosity Detection Reference Implementation",
    },
    {
      element:
        "Wireless Network-Ready PCB Defect Detection Reference Implementation",
    },
  ];
  for (let i = 0; i < ds_reference3Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_reference3Arr[i].element}</a>`;
    ds_reference3Ul.appendChild(li);
  }
  
  let ds_reference4Ul = document.getElementById("ds_reference4-ul");
  
  let ds_reference4Arr = [
    {
      element: "Edge Insights for Fleet (EIF)",
    },
    {
      element: "Edge Insights for Industrial",
    },
    {
      element: "Edge Insights for Vision",
    },
    {
      element: "Intel® Edge Controls for Industrial",
    },
  ];
  for (let i = 0; i < ds_reference4Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_reference4Arr[i].element}</a>`;
    ds_reference4Ul.appendChild(li);
  }
  
  let ds_reference5Ul = document.getElementById("ds_reference5-ul");
  
  let ds_reference5Arr = [
    {
      element:
        "Smart Video and Artificial Intelligence (AI) Workload Reference Implementation",
    },
  ];
  for (let i = 0; i < ds_reference5Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_reference5Arr[i].element}</a>`;
    ds_reference5Ul.appendChild(li);
  }
  
  let ds_reference6Ul = document.getElementById("ds_reference6-ul");
  
  let ds_reference6Arr = [
    {
      element:
        "Intel® Connected Logistics Platform (Intel® CLP) Reference Implementation",
    },
    {
      element: "Patient Fall Monitoring and Prevention in Hospitals",
    },
    {
      element: "Social Distancing for Retail Settings Reference Implementation",
    },
    {
      element: "Vehicle Event Recording Reference Implementation",
    },
  ];
  for (let i = 0; i < ds_reference6Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_reference6Arr[i].element}</a>`;
    ds_reference6Ul.appendChild(li);
  }
  
  let ds_reference7Ul = document.getElementById("ds_reference7-ul");
  
  let ds_reference7Arr = [
    {
      element:
        "Network Optimization and AI Inferencing Management for Telepathology Reference Implementation",
    },
  ];
  for (let i = 0; i < ds_reference7Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_reference7Arr[i].element}</a>`;
    ds_reference7Ul.appendChild(li);
  }
  
  let ds_reference8Ul = document.getElementById("ds_reference8-ul");
  
  let ds_reference8Arr = [
    {
      element: "Automated Checkout Reference Implementation",
    },
    {
      element: "Intelligent Traffic Management Reference Implementation",
    },
    {
      element:
        "Real-time Sensor Fusion for Loss Detection Reference Implementation",
    },
    {
      element:
        "Wireless Network-Ready Intelligent Traffic Management Reference Implementation",
    },
  ];
  for (let i = 0; i < ds_reference8Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_reference8Arr[i].element}</a>`;
    ds_reference8Ul.appendChild(li);
  }
  
  let ds_reference9Ul = document.getElementById("ds_reference9-ul");
  
  let ds_reference9Arr = [
    {
      element: "Amazon Web Services (AWS)* Cloud to Edge Pipeline ​",
    },
  ];
  for (let i = 0; i < ds_reference9Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_reference9Arr[i].element}</a>`;
    ds_reference9Ul.appendChild(li);
  }
  
  let ds_reference10Ul = document.getElementById("ds_reference10-ul");
  
  let ds_reference10Arr = [
    {
      element: "Driver Behavior Analytics Reference Implementation​",
    },
  ];
  for (let i = 0; i < ds_reference10Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_reference10Arr[i].element}</a>`;
    ds_reference10Ul.appendChild(li);
  }
  
  let ds_runUl = document.getElementById("ds_run-ul");
  
  let ds_runArr = [
    {
      element: "Intel® Bridge Technology​",
    },
    {
      element: "​Intel® C++ Compiler Classic Runtime",
    },
    {
      element: "Intel® CPU Runtime for OpenCL™ Applications​",
    },
    {
      element: "Intel® CPU Runtime for OpenCL™ Applications for Windows*​",
    },
    {
      element: "Intel® Fortran Compiler Classic Runtime for macOS*​",
    },
    {
      element: "Intel® Fortran Compiler Runtime for Windows*​",
    },
    {
      element: "Intel® oneAPI Data Analytics Library (oneDAL) Runtime​",
    },
    {
      element: "Intel® oneAPI DPC++/C++ Compiler Runtime for Windows*​",
    },
    {
      element: "Intel® oneAPI Math Kernel Library (oneMKL) Runtime​",
    },
    {
      element:
        "Intel® oneAPI Video Processing Library (oneVPL) Runtime for Windows*​",
    },
    {
      element: "Optimize Dynamic Language Runtimes Workloads for WordPress*​",
    },
  ];
  for (let i = 0; i < ds_runArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_runArr[i].element}</a>`;
    ds_runUl.appendChild(li);
  }
  
  function validHard(m) {
    if (m == 1) {
      document.getElementById("ds_validHard-main").style.display = "block";
      document.getElementById("ds_validHard-btn").style.fontWeight = "bold";
      document.getElementById("ds_validHard-li").style.backgroundColor ="#f3f3f3";
      document.getElementById("ds_validHard-height").style.height = "392px";
      document.getElementById("ds_validHard-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
      
      document.getElementById("ds_validHard2-main").style.display = "none";
      document.getElementById("ds_validHard2-btn").style.fontWeight = "";
      document.getElementById("ds_validHard2-li").style.backgroundColor = "";
  
      document.getElementById("ds_validHard3-main").style.display = "none";
      document.getElementById("ds_validHard3-btn").style.fontWeight = "";
      document.getElementById("ds_validHard3-li").style.backgroundColor = "";
    } else if (m == 2) {
      document.getElementById("ds_validHard2-main").style.display = "block";
      document.getElementById("ds_validHard2-btn").style.fontWeight = "bold";
      document.getElementById("ds_validHard2-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_validHard2-height").style.height = "392px";
      document.getElementById("ds_validHard2-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_validHard-main").style.display = "none";
      document.getElementById("ds_validHard-btn").style.fontWeight = "";
      document.getElementById("ds_validHard-li").style.backgroundColor = "";
  
      document.getElementById("ds_validHard3-main").style.display = "none";
      document.getElementById("ds_validHard3-btn").style.fontWeight = "";
      document.getElementById("ds_validHard3-li").style.backgroundColor = "";
    } else if (m == 3) {
      document.getElementById("ds_validHard3-main").style.display = "block";
      document.getElementById("ds_validHard3-btn").style.fontWeight = "bold";
      document.getElementById("ds_validHard3-li").style.backgroundColor =
        "#f3f3f3";
      document.getElementById("ds_validHard3-height").style.height = "392px";
      document.getElementById("ds_validHard3-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  
      document.getElementById("ds_validHard-main").style.display = "none";
      document.getElementById("ds_validHard-btn").style.fontWeight = "";
      document.getElementById("ds_validHard-li").style.backgroundColor = "";
  
      document.getElementById("ds_validHard2-main").style.display = "none";
      document.getElementById("ds_validHard2-btn").style.fontWeight = "";
      document.getElementById("ds_validHard2-li").style.backgroundColor = "";
    }
  }
  
  let ds_validHardUl = document.getElementById("ds_validHard-ul");
  
  let ds_validHardArr = [
    {
      element: "Gen5 VR Test Tool HW Rev 2.0 Upgrade Service",
    },
    {
      element: "Gen5 VR Test Tool Recalibration/Repair Service",
    },
    {
      element: "Intel® Platform Testing Services*​",
    },
  ];
  for (let i = 0; i < ds_validHardArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_validHardArr[i].element}</a>`;
    ds_validHardUl.appendChild(li);
  }
  
  let ds_validHard2Ul = document.getElementById("ds_validHard2-ul");
  
  let ds_validHard2Arr = [
    {
      element:
        '0.300"/0.297" DIMM Pitch Rigid Connector For Narrow DIMM Pitch DDR4 Memory VR Test Tool',
    },
    {
      element:
        '0.310" DIMM Pitch Rigid Connector For Narrow DIMM Pitch DDR4 Memory VR Test Tool',
    },
    {
      element: "195-pin Male-to-Male Header for Low Power VR Test Tool​",
    },
  ];
  for (let i = 0; i < ds_validHard2Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_validHard2Arr[i].element}</a>`;
    ds_validHard2Ul.appendChild(li);
  }
  
  let ds_validHard3Ul = document.getElementById("ds_validHard3-ul");
  
  let ds_validHard3Arr = [
    {
      element:
        "Gen5 VR Test Tool Host Software 1 Year Feature Activation Subscription",
    },
    {
      element:
        "Gen5 VR Test Tool Host Software 1 Year Feature Activation Subscription",
    },
    {
      element: "Gen5 VR Test Tool Host Software Single Feature Activation",
    },
    {
      element: "Intel® System Bring-up Toolkit NDA",
    },
  ];
  for (let i = 0; i < ds_validHard3Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_validHard3Arr[i].element}</a>`;
    ds_validHard3Ul.appendChild(li);
  }
  
  function operating (n) {
     if( n ==  1){
      document.getElementById("ds_operating-main").style.display = "block";
      document.getElementById("ds_operating-btn").style.fontWeight = "bold";
      document.getElementById("ds_operating-li").style.backgroundColor ="#f3f3f3";
      document.getElementById("ds_operating-height").style.height = "392px";
      document.getElementById("ds_operating-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
      document.getElementById("ds_operating2-main").style.display = "none";
      document.getElementById("ds_operating2-btn").style.fontWeight = "";
      document.getElementById("ds_operating2-li").style.backgroundColor ="";
  
      document.getElementById("ds_operating3-main").style.display = "none";
      document.getElementById("ds_operating3-btn").style.fontWeight = "";
      document.getElementById("ds_operating3-li").style.backgroundColor ="";
  
      document.getElementById("ds_operating4-main").style.display = "none";
      document.getElementById("ds_operating4-btn").style.fontWeight = "";
      document.getElementById("ds_operating4-li").style.backgroundColor ="";
  
      document.getElementById("ds_operating5-main").style.display = "none";
      document.getElementById("ds_operating5-btn").style.fontWeight = "";
      document.getElementById("ds_operating5-li").style.backgroundColor ="";
     }
  
     else if( n ==  2){
      document.getElementById("ds_operating2-main").style.display = "block";
      document.getElementById("ds_operating2-btn").style.fontWeight = "bold";
      document.getElementById("ds_operating2-li").style.backgroundColor ="#f3f3f3";
      document.getElementById("ds_operating2-height").style.height = "392px";
      document.getElementById("ds_operating2-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
      document.getElementById("ds_operating-main").style.display = "none";
      document.getElementById("ds_operating-btn").style.fontWeight = "";
      document.getElementById("ds_operating-li").style.backgroundColor ="";
  
      document.getElementById("ds_operating3-main").style.display = "none";
      document.getElementById("ds_operating3-btn").style.fontWeight = "";
      document.getElementById("ds_operating3-li").style.backgroundColor ="";
  
      document.getElementById("ds_operating4-main").style.display = "none";
      document.getElementById("ds_operating4-btn").style.fontWeight = "";
      document.getElementById("ds_operating4-li").style.backgroundColor ="";
  
      document.getElementById("ds_operating5-main").style.display = "none";
      document.getElementById("ds_operating5-btn").style.fontWeight = "";
      document.getElementById("ds_operating5-li").style.backgroundColor ="";
     }
  
     else if( n ==  3){
      document.getElementById("ds_operating3-main").style.display = "block";
      document.getElementById("ds_operating3-btn").style.fontWeight = "bold";
      document.getElementById("ds_operating3-li").style.backgroundColor ="#f3f3f3";
      document.getElementById("ds_operating3-height").style.height = "392px";
      document.getElementById("ds_operating3-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
      document.getElementById("ds_operating-main").style.display = "none";
      document.getElementById("ds_operating-btn").style.fontWeight = "";
      document.getElementById("ds_operating-li").style.backgroundColor ="";
  
      document.getElementById("ds_operating2-main").style.display = "none";
      document.getElementById("ds_operating2-btn").style.fontWeight = "";
      document.getElementById("ds_operating2-li").style.backgroundColor ="";
  
      document.getElementById("ds_operating4-main").style.display = "none";
      document.getElementById("ds_operating4-btn").style.fontWeight = "";
      document.getElementById("ds_operating4-li").style.backgroundColor ="";
  
      document.getElementById("ds_operating5-main").style.display = "none";
      document.getElementById("ds_operating5-btn").style.fontWeight = "";
      document.getElementById("ds_operating5-li").style.backgroundColor ="";
     }
  
     else if( n ==  4){
      document.getElementById("ds_operating4-main").style.display = "block";
      document.getElementById("ds_operating4-btn").style.fontWeight = "bold";
      document.getElementById("ds_operating4-li").style.backgroundColor ="#f3f3f3";
      document.getElementById("ds_operating4-height").style.height = "392px";
      document.getElementById("ds_operating4-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
      document.getElementById("ds_operating-main").style.display = "none";
      document.getElementById("ds_operating-btn").style.fontWeight = "";
      document.getElementById("ds_operating-li").style.backgroundColor ="";
  
      document.getElementById("ds_operating2-main").style.display = "none";
      document.getElementById("ds_operating2-btn").style.fontWeight = "";
      document.getElementById("ds_operating2-li").style.backgroundColor ="";
  
      document.getElementById("ds_operating3-main").style.display = "none";
      document.getElementById("ds_operating3-btn").style.fontWeight = "";
      document.getElementById("ds_operating3-li").style.backgroundColor ="";
  
      document.getElementById("ds_operating5-main").style.display = "none";
      document.getElementById("ds_operating5-btn").style.fontWeight = "";
      document.getElementById("ds_operating5-li").style.backgroundColor ="";
     }
  
     else if( n ==  5){
      document.getElementById("ds_operating5-main").style.display = "block";
      document.getElementById("ds_operating5-btn").style.fontWeight = "bold";
      document.getElementById("ds_operating5-li").style.backgroundColor ="#f3f3f3";
      document.getElementById("ds_operating5-height").style.height = "392px";
      document.getElementById("ds_operating5-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
      document.getElementById("ds_operating-main").style.display = "none";
      document.getElementById("ds_operating-btn").style.fontWeight = "";
      document.getElementById("ds_operating-li").style.backgroundColor ="";
  
      document.getElementById("ds_operating2-main").style.display = "none";
      document.getElementById("ds_operating2-btn").style.fontWeight = "";
      document.getElementById("ds_operating2-li").style.backgroundColor ="";
  
      document.getElementById("ds_operating3-main").style.display = "none";
      document.getElementById("ds_operating3-btn").style.fontWeight = "";
      document.getElementById("ds_operating3-li").style.backgroundColor ="";
  
      document.getElementById("ds_operating4-main").style.display = "none";
      document.getElementById("ds_operating4-btn").style.fontWeight = "";
      document.getElementById("ds_operating4-li").style.backgroundColor ="";
     }
  }
  
  let ds_operatingUl = document.getElementById("ds_operating-ul");
  
  let ds_operatingArr = [
    {
      element:"3D U-Net FP32 Inference for TensorFlow* Container",
    },
    {
      element:'3D UNet FP32 Inference for TensorFlow* Model Package'
    },
    {
      element:'Amazon Web Services (AWS)* Cloud to Edge Pipeline ​'
    },
    {
      element:'Analytics Zoo Cluster Serving'
    },
    {
      element:'Analytics Zoo Hyper Zoo'
    },
    {
      element:'Automated Checkout Reference Implementation'
    },
    {
      element:'BERT Large BFloat16 Inference Tensorflow* Container'
    },
    {
      element:'BERT Large BFloat16 Inference Tensorflow* Model Package'
    },
    {
      element:'BERT Large BFloat16 Training TensorFlow* Container'
    },
    {
      element:'BERT Large BFloat16 Training TensorFlow* Model Package'
    },
    {
      element:'BERT Large FP32 Inference Tensorflow* Container'
    },
    {
      element:'BERT Large FP32 Inference Tensorflow* Model Package'
    },
    {
      element:'BERT Large FP32 Training Tensorflow* Container'
    },
    {
      element:'BERT Large FP32 Training TensorFlow* Kubernetes* Package'
    },
    {
      element:'BERT Large FP32 Training Tensorflow* Model Package'
    },
    {
      element:'Boot Loader Development Kit'
    },
    {
      element:'Boulder Springs SDK'
    },
    {
      element:'COCO Validation Dataset Preprocessing for TensorFlow*'
    },
    {
      element:'Connect Edge Devices to Azure IoT*'
    },
    {
      element:'Data Analytics Reference Stack with Intel® Math Kernel Library for Deep Neural Networks (Intel® MKL-DNN)'
    },
    {
      element:'Data Plane Development Kit (DPDK)'
    },
    {
      element:'Data Plane Development Kit (DPDK) - Open Source'
    },
    {
      element:'Demonstration: Use an Intel® GPU and Software Stack for Media Delivery'
    },
    {
      element:'DenseNet169 FP32 Inference TensorFlow* Model Package'
    },
    {
      element:'Developer Kits Based on 8th Generation Intel® Core™ Processors'
    },
    {
      element:'Developer Kits with 11th Generation Intel® Core™ Processors'
    },
    {
      element:'Developer Kits with 9th Generation Intel® Core™ Processors'
    },
    {
      element:'Developer Kits with Intel® Xeon® D-2100 Processor Product Family'
    },
    {
      element:'Developer Kits with Intel® Xeon® W Processors and 10th Generation Intel® Core™ Processors'
    },
    {
      element:'DL Streamer - Open Source'
    },
    {
      element:'Driver Behavior Analytics Reference Implementation'
    },
    {
      element:'DSP Builder for Intel® FPGAs'
    },
    {
      element:'Edge Insights for Fleet (EIF)'
    },
    {
      element:'Edge Insights for Industrial'
    },
    {
      element:'Edge Insights for Vision'
    },
    {
      element:'Edge Software Configurator Documentation'
    },
    {
      element:'GNU* Debugger (GDB)'
    },
    {
      element:'GStreamer* Video Analytics (GVA) Plugin'
    },
    {
      element:'IEI* TANK AIoT Developer Kit with an Intel® Core™ or Intel® Xeon® Processor'
    },
    {
      element:'Industrial Surface Defect Detection Reference Implementation'
    },
    {
      element:'Industrial Text Line Recognition Reference Implementation'
    },
    {
      element:'Infrastructure Modelling'
    },
    {
      element:'Install a Helm Chart That Deploys a TensorFlow* Serving'
    },
    {
      element:'Intel Crypto Reference Stack'
    },
    {
      element:'Intel Movidius Vision Processing Unit (VPU)'
    },
    {
      element:'Intel® Active Management Technology SDK'
    },
    {
      element:'Intel® Advisor'
    },
    {
      element:'Intel® Architecture Code Analyzer'
    },
    {
      element:'Intel® Bridge Technology'
    },
    {
      element:'Intel® C++ Compiler'
    },
    {
      element:'Intel® C++ Compiler Standard Edition for Embedded Systems with Bi-Endian Technology'
    },
    {
      element:'Intel® Cluster Checker'
    },
    {
      element:'Intel® Collaboration Suite for WebRTC'
    },
    {
      element:'Intel® Connected Logistics Platform (Intel® CLP) Reference Implementation'
    },
    {
      element:'Intel® CPU Runtime for OpenCL™ Applications'
    },
    {
      element:'Intel® Data Analytics Acceleration Library (Intel® DAAL)'
    },
    {
      element:'Intel® Data Center Manager Console'
    },
    {
      element:'Intel® Decimal Floating-Point Math Library'
    },
    {
      element:'Intel® Device Plug-ins for Kubernetes* - GitHub*'
    },
    {
      element:'Intel® Distribution for GDB*'
    },
    {
      element:'Intel® Distribution for Python*'
    },
    {
      element:'Intel® Distribution for Python* - Core Package'
    },
    {
      element:'Intel® Distribution for Python* - Full Package '
    },
    {
      element:'Intel® Distribution of Modin*'
    },
    {
      element:'Intel® Distribution of Modin* - Open Source'
    },
    {
      element:'Intel® Distribution of OpenVINO™ Toolkit'
    },
    {
      element:'Intel® DPC++ Compatibility Tool'
    },
    {
      element:'Intel® Edge Controls for Industrial'
    },
    {
      element:'Intel® Edge Software Configurator'
    },
    {
      element:'Intel® Edge Software Device Qualification (Intel® ESDQ) Overview'
    },
    {
      element:'Intel® Embree'
    },
    {
      element:'Intel® Embree - Open Source'
    },
    {
      element:'Intel® Extension for PyTorch*'
    },
    {
      element:'Intel® Extension for PyTorch*'
    },
    {
      element:'Intel® Extension for Scikit-learn*'
    },
    {
      element:'Intel® Extension for Scikit-learn* with Intel® oneAPI Data Analytics Library (oneDAL)'
    },
    {
      element:'Intel® Extensions for TensorFlow* and Scikit-learn* with oneDAL'
    },
    {
      element:'Intel® Firmware Support Package (Intel® FSP)'
    },
    {
      element:'Intel® Firmware Support Package (Intel® FSP) - Open Source'
    },
    {
      element:'Intel® Fortran Compiler'
    },
    {
      element:'Intel® FPGA Add-on for oneAPI Base Toolkit'
    },
    {
      element:'Intel® FPGA Device Plugin (for Kubernetes*)'
    },
    {
      element:'Intel® FPGA SDK for OpenCL™'
    },
    {
      element:'Intel® Graphics Control Library'
    },
    {
      element:'Intel® Graphics Performance Analyzers'
    },
    {
      element:'Intel® Hardware Accelerated Execution Manager (Intel® HAXM) - Open Source'
    },
    {
      element:'Intel® High Level Synthesis Compiler'
    },
    {
      element:'Intel® Homomorphic Encryption Toolkit (Intel® HE Toolkit)'
    },
    {
      element:'Intel® Implicit SPMD Program Compiler (ISPC) - Open Source'
    },
    {
      element:'Intel® Inspector'
    },
    {
      element:'Intel® Integrated Performance Primitives'
    },
    {
      element:'Intel® Intelligent Storage Acceleration Library (ISA-L)'
    },
    {
      element:'Intel® Media Server Studio - Product Retired'
    },
    {
      element:'Intel® MPI Library'
    },
    {
      element:'Intel® Neural Compute Stick 2'
    },
    {
      element:'Intel® oneAPI AI Analytics Toolkit '
    },
    {
      element:'Intel® oneAPI AI Analytics Toolkit Container'
    },
    {
      element:'Intel® oneAPI Base & HPC Toolkit '
    },
    {
      element:'Intel® oneAPI Base & IoT Toolkit'
    },
    {
      element:'Intel® oneAPI Base & Rendering Toolkit '
    },
    {
      element:'Intel® oneAPI Base Toolkit'
    },
    {
      element:'Intel® oneAPI Base Toolkit Container'
    },
    {
      element:'Intel® oneAPI Collective Communications Library (oneCCL)'
    },
    {
      element:'Intel® oneAPI Collective Communications Library (oneCCL) - Open Source'
    },
    {
      element:'Intel® oneAPI Data Analytics Library (oneDAL)'
    },
    {
      element:'Intel® oneAPI Data Analytics Library (oneDAL) - Open Source'
    },
    {
      element:'Intel® oneAPI Data Analytics Library (oneDAL) Runtime '
    },
    {
      element:'Intel® oneAPI Deep Neural Network Library (oneDNN) '
    },
    {
      element:'Intel® oneAPI Deep Neural Network Library (oneDNN) - Open Source '
    },
    {
      element:'Intel® oneAPI DL Framework Developer Toolkit '
    },
    {
      element:'Intel® oneAPI DL Framework Developer Toolkit Container '
    },
    {
      element:'Intel® oneAPI DPC++ Library (oneDPL) '
    },
    {
      element:'Intel® oneAPI DPC++ Library (oneDPL) - Open Source '
    },
    {
      element:'Intel® oneAPI DPC++/C++ Compiler '
    },
    {
      element:'Intel® oneAPI HPC Toolkit '
    },
    {
      element:'Intel® oneAPI HPC Toolkit Container '
    },
    {
      element:'Intel® oneAPI Integrated Performance Primitives Cryptography '
    },
    {
      element:'Intel® oneAPI IoT Toolkit '
    },
    {
      element:'Intel® oneAPI IoT Toolkit Container '
    },
    {
      element:'Intel® oneAPI Math Kernel Library (oneMKL) '
    },
    {
      element:'Intel® oneAPI Math Kernel Library (oneMKL) - Open Source '
    },
    {
      element:'Intel® oneAPI Math Kernel Library (oneMKL) Runtime'
    },
    {
      element:'Intel® oneAPI Rendering Toolkit '
    },
    {
      element:'Intel® oneAPI Runtime Libraries '
    },
    {
      element:'Intel® oneAPI Threading Building Blocks (oneTBB) '
    },
    {
      element:'Intel® oneAPI Threading Building Blocks (oneTBB) - Open Source '
    },
    {
      element:'Intel® oneAPI Video Processing Library (oneVPL) '
    },
    {
      element:' Intel® oneAPI Video Processing Library (oneVPL) - Open Source'
    },
    {
      element:'Intel® Open Image Denoise '
    },
    {
      element:'Intel® Open Image Denoise - Open Source '
    },
    {
      element:'Intel® Open Volume Kernel Library (Intel® Open VKL) '
    },
    {
      element:'Intel® Open Volume Kernel Library (Intel® Open VKL) - Open Source '
    },
    {
      element:'Intel® OSPRay '
    },
    {
      element:'Intel® OSPRay - Open Source '
    },
    {
      element:'Intel® OSPRay Studio '
    },
    {
      element:'Intel® OSPRay Studio - Open Source '
    },
    {
      element:'Intel® Parallel Studio XE - Legacy Documentation '
    },
    {
      element:'Intel® Parallel Studio XE - Replacement Product '
    },
    {
      element:'Intel® Performance Libraries  (All Performance Libraries) '
    },
    {
      element:'Intel® Platform Analysis Library '
    },
    {
      element:'Intel® Quartus® Prime Lite Edition '
    },
    {
      element:'Intel® Quartus® Prime Pro Edition '
    },
    {
      element:'Intel® Quartus® Prime Standard Edition '
    },
    {
      element:'Intel® RealSense™ SDK '
    },
    {
      element:'Intel® SDK for OpenCL™ Applications '
    },
    {
      element:'Intel® Secure Device Onboard '
    },
    {
      element:'Intel® Smart Edge Open '
    },
    {
      element:'Intel® SoC FPGA Embedded Development Suite (SoC EDS) '
    },
    {
      element:'Intel® SoC Watch '
    },
    {
      element:'Intel® Software Development Emulator '
    },
    {
      element:'Intel® Software Guard Extensions SDK '
    },
    {
      element:'Intel® System Bring-Up Toolkit '
    },
    {
      element:'Intel® System Debugger (NDA Access) '
    },
    {
      element:' Intel® System Studio'
    },
    {
      element:'Intel® System Studio for Microcontrollers '
    },
    {
      element:'Intel® Texture Works Plugin for Photoshop* '
    },
    {
      element:'Intel® Time Coordinated Computing Tools '
    },
    {
      element:'Intel® Trace Analyzer and Collector '
    },
    {
      element:' Intel® Vision Accelerator Design with Intel® Arria® 10 FPGA'
    },
    {
      element:' Intel® VTune™ Profiler (formerly Intel® VTune™ Amplifier)'
    },
    {
      element:'Intel® x86/x64 Debugger - Lauterbach '
    },
    {
      element:'Intelligent Traffic Management Reference Implementation '
    },
    {
      element:'Model Zoo for Intel® Architecture '
    },
    {
      element:'Model Zoo for Intel® Architecture - Open Source '
    },
    {
      element:'Network Optimization and AI Inferencing Management for Telepathology Reference Implementation '
    },
    {
      element:'Nios® II Embedded Design Suite (EDS) '
    },
    {
      element:'oneContainer API '
    },
    {
      element:'oneContainer Cloud Tool '
    },
    {
      element:'Open Active Management Technology Cloud Toolkit (Open AMT Cloud Toolkit) '
    },
    {
      element:'Open Data Center Diagnostic Project (Open DCDIAG) '
    },
    {
      element:'Open Visual Cloud Media Analytics - Development Image for Intel® Xeon® Processor on Ubuntu* 18.04 '
    },
    {
      element:' Open Visual Cloud Media Analytics - Development Image for VCAC-A on Ubuntu* 18.04'
    },
    {
      element:' Open Visual Cloud Media Analytics - HDDL Daemon for VCAC-A on Ubuntu* 18.04'
    },
    {
      element:' Open Visual Cloud Media Delivery - NGINX* for Systems with Intel® QuickAssist Technology and Using CentOS* 7'
    },
    {
      element:'Open Visual Cloud Media Delivery - NGINX* for Systems with Intel® QuickAssist Technology and Using Ubuntu* 18.04 '
    },
    {
      element:'Open Visual Cloud Media Delivery - NGINX* for Systems with Intel® QuickAssist Technology and Using Ubuntu* 20.04 '
    },
    {
      element:' Optimize a Mask R-CNN FP32 Inference Container with TensorFlow*'
    },
    {
      element:'Optimize a Mask R-CNN FP32 Inference Model with TensorFlow* '
    },
    {
      element:'Optimize a MobileNet* V1 FP32 Inference Container with TensorFlow* '
    },
    {
      element:'Optimize a MobileNet* V1 FP32 Inference Model with TensorFlow* '
    },
    {
      element:'Optimize a MobileNet* V1 Int8 Inference Container with TensorFlow* '
    },
    {
      element:'Optimize a MobileNet* V1 Int8 Inference Model Package with TensorFlow* '
    },
    {
      element:'Optimize an Inception V3 FP32 Inference Container with TensorFlow* '
    },
    {
      element:'Optimize an Inception V3 FP32 Inference Model Package with TensorFlow* '
    },
    {
      element:'Optimize an Inception V3 Int8 Inference Container with TensorFlow* '
    },
    {
      element:'Optimize an Inception V4 FP32 Inference Container with TensorFlow* '
    },
    {
      element:'Optimize an Inception V4 FP32 Inference Model with TensorFlow* '
    },
    {
      element:'Optimize an Inception V4 Int8 Inference Container with TensorFlow* '
    },
    {
      element:' Optimize an Inception V4 Int8 Inference Model with TensorFlow*'
    },
    {
      element:'Optimize an NCF Inference Container with TensorFlow* '
    },
    {
      element:'Optimize an NCF Inference Model with TensorFlow* '
    },
    {
      element:'Optimize an R-FCN FP32 Inference Model Package with TensorFlow* '
    },
    {
      element:'Optimize an R-FCN Int8 Inference Container with TensorFlow* '
    },
    {
      element:'Optimize Dynamic Language Runtimes Workloads for WordPress* '
    },
    {
      element:'Optimize Tensorflow* & oneDNN for Deep Learning '
    },
    {
      element:' Optimized Analytics Package for Spark* Platform (OAP for Spark* Platform)'
    },
    {
      element:'Patient Fall Monitoring and Prevention in Hospitals '
    },
    {
      element:'Pin '
    },
    {
      element:'Program Record/Replay Toolkit '
    },
    {
      element:'Quartus® II Subscription Edition '
    },
    {
      element:'Quartus® II Web Edition '
    },
    {
      element:'Real-time Sensor Fusion for Loss Detection Reference Implementation '
    },
    {
      element:' ResNet101 FP32 Inference TensorFlow* Container'
    },
    {
      element:'ResNet101 FP32 Inference TensorFlow* Model Package '
    },
    {
      element:'ResNet101 Int8 Inference TensorFlow* Container '
    },
    {
      element:'ResNet101 Int8 Inference TensorFlow* Model Package '
    },
    {
      element:'ResNet50 BFloat16 Inference PyTorch* Container '
    },
    {
      element:'ResNet50 BFloat16 Inference PyTorch* Model Package '
    },
    {
      element:'ResNet50 FP32 Inference PyTorch* Container '
    },
    {
      element:'ResNet50 FP32 Inference PyTorch* Model Package '
    },
    {
      element:'ResNet50 FP32 Inference Tensorflow* Container '
    },
    {
      element:'ResNet50 FP32 Inference Tensorflow* Model Package '
    },
    {
      element:'ResNet50 Int8 Inference TensorFlow* Container '
    },
    {
      element:'ResNet50 Int8 Inference TensorFlow* Model Package '
    },
    {
      element:' ResNet50* V1.5 FP32 Training Package with TensorFlow* for Kubernetes*'
    },
    {
      element:' ResNet50v1.5 BFloat16 Inference TensorFlow* Container'
    },
    {
      element:'ResNet50v1.5 BFloat16 Inference TensorFlow* Model Package '
    },
    {
      element:'ResNet50v1.5 BFloat16 Training TensorFlow* Container '
    },
    {
      element:'ResNet50v1.5 BFloat16 Training TensorFlow* Model Package '
    },
    {
      element:'ResNet50v1.5 FP32 Inference TensorFlow* Container '
    },
    {
      element:'ResNet50v1.5 FP32 Inference TensorFlow* Model Package '
    },
    {
      element:'ResNet50v1.5 FP32 Training Tensorflow* Container '
    },
    {
      element:'ResNet50v1.5 FP32 Training Tensorflow* Model Package '
    },
    {
      element:'ResNet50v1.5 Int8 Inference Tensorflow* Container '
    },
    {
      element:'ResNet50v1.5 Int8 Inference Tensorflow* Model Package '
    },
    {
      element:'RFCN FP32 Inference Tensorflow* Container '
    },
    {
      element:'RFCN FP32 Inference TensorFlow* Kubernetes* Package '
    },
    {
      element:' RFCN Int8 Inference TensorFlow* Model Package'
    },
    {
      element:'Rotor Bearing Defect Detector Reference Implementation '
    },
    {
      element:'Run a DLRM Bfloat16 Training Using a PyTorch* Model Package '
    },
    {
      element:'Run GNMT FP32 Inference with a TensorFlow* Model Package '
    },
    {
      element:'Run the Faster R-CNN FP32 Inference with a TensorFlow* Model Package '
    },
    {
      element:'Run the Faster R-CNN Int8 Inference with a TensorFlow* Model Package '
    },
    {
      element:'Simics® Simulator '
    },
    {
      element:'Smart Video and Artificial Intelligence (AI) Workload Reference Implementation '
    },
    {
      element:'Social Distancing for Retail Settings Reference Implementation '
    },
    {
      element:'SSD-MobileNet FP32 Inference Tensorflow* Container '
    },
    {
      element:'SSD-MobileNet FP32 Inference Tensorflow* Model Package '
    },
    {
      element:'SSD-MobileNet Int8 Inference TensorFlow* Container '
    },
    {
      element:'SSD-MobileNet Int8 Inference TensorFlow* Model Package '
    },
    {
      element:'SSD-ResNet34 BFloat16 Training TensorFlow* Container '
    },
    {
      element:'SSD-ResNet34 BFloat16 Training TensorFlow* Model Package '
    },
    {
      element:'SSD-ResNet34 FP32 Inference Tensorflow* Container '
    },
    {
      element:'SSD-ResNet34 FP32 Training TensorFlow* Container '
    },
    {
      element:'SSD-ResNet34 FP32 Training TensorFlow* Model Package '
    },
    {
      element:'SSD-ResNet34 Int8 Inference Tensorflow* Container '
    },
    {
      element:'SSD-ResNet34 Int8 Inference Tensorflow* Model '
    },
    {
      element:'Storage Performance Development Kit (SPDK) '
    },
    {
      element:'TensorFlow* Performance Comparison Jupyter* Notebooks '
    },
    {
      element:'Textile Defect Classifier Reference Implementation '
    },
    {
      element:'Transformer-LT MLPerf BFloat16 Training TensorFlow* Container '
    },
    {
      element:'Transformer-LT MLPerf BFloat16 Training TensorFlow* Model Package '
    },
    {
      element:'Transformer-LT MLPerf FP32 Inference Tensorflow* Container '
    },
    {
      element:'Transformer-LT MLPerf FP32 Training Tensorflow* Model Package '
    },
    {
      element:'Transformer-LT Official FP32 Inference Tensorflow* Container '
    },
    {
      element:' Transformer-LT Official FP32 Inference Tensorflow* Model Package'
    },
    {
      element:'UEFI '
    },
    {
      element:'UNet FP32 Inference Tensorflow* Container '
    },
    {
      element:'UNet FP32 Inference Tensorflow* Model Package '
    },
    {
      element:' Universal Wellpad Controller'
    },
    {
      element:'UP Squared* AI Vision X Developer Kit '
    },
    {
      element:'Use Data Services Reference Stack with Redis* on CentOS* '
    },
    {
      element:'Useful Packages & Modules (UPM)/MRAA Library '
    },
    {
      element:' Vehicle Event Recording Reference Implementation'
    },
    {
      element:'WaveNet FP32 Inference Tensorflow* Container '
    },
    {
      element:'Weld Porosity Detection Reference Implementation '
    },
    {
      element:'Wide & Deep Large Data FP32 Training TensorFlow* Kubernetes* Package '
    },
    {
      element:'Wide & Deep Large Dataset FP32 Inference TensorFlow* Container '
    },
    {
      element:' Wide & Deep Large Dataset FP32 Inference TensorFlow* Model Package'
    },
    {
      element:'Wide & Deep Large Dataset FP32 Training Tensorflow* Model Package '
    },
    {
      element:'Wide & Deep Large Dataset Int8 Inference TensorFlow* Container '
    },
    {
      element:' Wide & Deep Large Dataset Int8 Inference TensorFlow* Model Package'
    },
    {
      element:' Wide Deep FP32 Inference Tensorflow* Container'
    },
    {
      element:'Wide Deep Large Dataset FP32 Training Tensorflow* Container '
    },
    {
      element:'WindRiver Simics '
    },
    {
      element:'Wireless Network-Ready Intelligent Traffic Management Reference Implementation '
    },
    {
      element:'Wireless Network-Ready PCB Defect Detection Reference Implementation '
    },
    {
      element:'XGBoost '
    }
  
  ];
  for (let i = 0; i < ds_operatingArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_operatingArr[i].element}</a>`;
    ds_operatingUl.appendChild(li);
  }
  
  let ds_operating2Ul = document.getElementById("ds_operating2-ul");
  
  let ds_operating2Arr = [
    {
      element:'GStreamer* Video Analytics (GVA) Plugin'
    },
    {
      element:'Intel Unite® Plugin SDK'
    },
    {
      element:'Intel® Active Management Technology SDK'
    },
    {
      element:'Intel® Advisor'
    },
    {
      element:'Intel® Architecture Code Analyzer'
    },
    {
      element:'Intel® C++ Compiler'
    },
    {
      element:'Intel® C++ Compiler Classic Runtime'
    },
    {
      element:'Intel® Cluster Checker'
    },
    {
      element:'Intel® Collaboration Suite for WebRTC'
    },
    {
      element:'Intel® Data Analytics Acceleration Library (Intel® DAAL)'
    },
    {
      element:'Intel® Distribution for Python*'
    },
    {
      element:'Intel® Distribution of Modin*'
    },
    {
      element:'Intel® Distribution of Modin* - Open Source'
    },
    {
      element:'Intel® Distribution of OpenVINO™ Toolkit'
    },
    {
      element:'Intel® Embree'
    },
    {
      element:'Intel® Embree - Open Source'
    },
    {
      element:'Intel® Fortran Compiler'
    },
    {
      element:'Intel® Fortran Compiler Classic Runtime for macOS*'
    },
    {
      element:'Intel® Graphics Performance Analyzers'
    },
    {
      element:'Intel® Hardware Accelerated Execution Manager (Intel® HAXM) - Open Source'
    },
    {
      element:'Intel® Implicit SPMD Program Compiler (ISPC) - Open Source'
    },
    {
      element:'Intel® Inspector'
    },
    {
      element:'Intel® Integrated Performance Primitives'
    },
    {
      element:'Intel® Media Server Studio - Product Retired'
    },
    {
      element:'Intel® oneAPI Base & HPC Toolkit '
    },
    {
      element:'Intel® oneAPI Base & IoT Toolkit'
    },
    {
      element:'Intel® oneAPI Base & Rendering Toolkit '
    },
    {
      element:'Intel® oneAPI Base Toolkit'
    },
    {
      element:'Intel® oneAPI Data Analytics Library (oneDAL)'
    },
    {
      element:'Intel® oneAPI Data Analytics Library (oneDAL) - Open Source'
    },
    {
      element:'Intel® oneAPI Deep Neural Network Library (oneDNN)'
    },
    {
      element:'Intel® oneAPI Deep Neural Network Library (oneDNN) - Open Source'
    },
    {
      element:'Intel® oneAPI DPC++ Library (oneDPL)'
    },
    {
      element:'Intel® oneAPI DPC++ Library (oneDPL) - Open Source'
    },
    {
      element:'Intel® oneAPI HPC Toolkit '
    },
    {
      element:'Intel® oneAPI Integrated Performance Primitives Cryptography '
    },
    {
      element:'Intel® oneAPI IoT Toolkit '
    },
    {
      element:'Intel® oneAPI Math Kernel Library (oneMKL) '
    },
    {
      element:'Intel® oneAPI Math Kernel Library (oneMKL) - Open Source '
    },
    {
      element:' Intel® oneAPI Rendering Toolkit'
    },
    {
      element:'Intel® oneAPI Threading Building Blocks (oneTBB) '
    },
    {
      element:'Intel® oneAPI Threading Building Blocks (oneTBB) - Open Source '
    },
    {
      element:' Intel® Open Image Denoise'
    },
    {
      element:' Intel® Open Image Denoise - Open Source'
    },
    {
      element:'Intel® Open Volume Kernel Library (Intel® Open VKL) '
    },
    {
      element:'Intel® Open Volume Kernel Library (Intel® Open VKL) - Open Source '
    },
    {
      element:'Intel® OSPRay '
    },
    {
      element:'Intel® OSPRay Studio '
    },
    {
      element:' Intel® OSPRay Studio - Open Source'
    },
    {
      element:'Intel® Parallel Studio XE - Legacy Documentation '
    },
    {
      element:'Intel® Parallel Studio XE - Replacement Product '
    },
    {
      element:' Intel® Performance Libraries  (All Performance Libraries)'
    },
    {
      element:'Intel® RealSense™ SDK '
    },
    {
      element:' Intel® Software Development Emulator'
    },
    {
      element:' Intel® System Bring-Up Toolkit'
    },
    {
      element:' Intel® System Studio'
    },
    {
      element:'Intel® System Studio for Microcontrollers '
    },
    {
      element:'Intel® VTune™ Profiler (formerly Intel® VTune™ Amplifier) '
    },
    {
      element:'Pin '
    },
  
  
  
  ];
  for (let i = 0; i < ds_operating2Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_operating2Arr[i].element}</a>`;
    ds_operating2Ul.appendChild(li);
  }
  
  let ds_operating3Ul = document.getElementById("ds_operating3-ul");
  
  let ds_operating3Arr = [
    {
      element:'Boot Loader Development Kit '
    },
    {
      element:'Developer Kits Based on 8th Generation Intel® Core™ Processors '
    },
    {
      element:'Developer Kits with 11th Generation Intel® Core™ Processors '
    },
    {
      element:'Developer Kits with 9th Generation Intel® Core™ Processors '
    },
    {
      element:'Developer Kits with Intel® Xeon® D-2100 Processor Product Family '
    },
    {
      element:'Developer Kits with Intel® Xeon® W Processors and 10th Generation Intel® Core™ Processors '
    },
    {
      element:'DSP Builder for Intel® FPGAs '
    },
    {
      element:'GStreamer* Video Analytics (GVA) Plugin '
    },
    {
      element:'IEI* TANK AIoT Developer Kit with an Intel® Core™ or Intel® Xeon® Processor '
    },
    {
      element:'Intel Movidius Vision Processing Unit (VPU) '
    },
    {
      element:'Intel Unite® Plugin SDK '
    },
    {
      element:'Intel® Active Management Technology SDK '
    },
    {
      element:'Intel® Advisor '
    },
    {
      element:'Intel® Architecture Code Analyzer '
    },
    {
      element:'Intel® Bridge Technology '
    },
    {
      element:'Intel® C++ Compiler '
    },
    {
      element:'Intel® Cluster Checker '
    },
    {
      element:'Intel® Collaboration Suite for WebRTC '
    },
    {
      element:'Intel® CPU Runtime for OpenCL™ Applications '
    },
    {
      element:'Intel® CPU Runtime for OpenCL™ Applications for Windows* '
    },
    {
      element:'Intel® Data Analytics Acceleration Library (Intel® DAAL) '
    },
    {
      element:'Intel® Data Center Manager Console '
    },
    {
      element:'Intel® Debug Extensions for WinDbg* '
    },
    {
      element:'Intel® Decimal Floating-Point Math Library '
    },
    {
      element:'Intel® Distribution for GDB* '
    },
    {
      element:'Intel® Distribution for Python* '
    },
    {
      element:'Intel® Distribution of Modin* '
    },
    {
      element:' Intel® Distribution of Modin* - Open Source'
    },
    {
      element:'Intel® Distribution of OpenVINO™ Toolkit '
    },
    {
      element:'Intel® DPC++ Compatibility Tool '
    },
    {
      element:'Intel® Embree '
    },
    {
      element:'Intel® Embree - Open Source '
    },
    {
      element:'Intel® Fortran Compiler '
    },
    {
      element:'Intel® Fortran Compiler Runtime for Windows* '
    },
    {
      element:'Intel® FPGA Add-on for oneAPI Base Toolkit '
    },
    {
      element:'Intel® FPGA SDK for OpenCL™ '
    },
    {
      element:'Intel® Graphics Performance Analyzers '
    },
    {
      element:'Intel® Hardware Accelerated Execution Manager (Intel® HAXM) - Open Source '
    },
    {
      element:'Intel® High Level Synthesis Compiler '
    },
    {
      element:'Intel® Implicit SPMD Program Compiler (ISPC) - Open Source '
    },
    {
      element:'Intel® Inspector '
    },
    {
      element:'Intel® Integrated Performance Primitives '
    },
    {
      element:'Intel® Intelligent Storage Acceleration Library (ISA-L) '
    },
    {
      element:'Intel® Media Server Studio - Product Retired '
    },
    {
      element:'Intel® MPI Library '
    },
    {
      element:'Intel® Neural Compute Stick 2 '
    },
    {
      element:'Intel® oneAPI Base & HPC Toolkit  '
    },
    {
      element:'Intel® oneAPI Base & IoT Toolkit '
    },
    {
      element:'Intel® oneAPI Base & Rendering Toolkit  '
    },
    {
      element:'Intel® oneAPI Base Toolkit '
    },
    {
      element:'Intel® oneAPI Data Analytics Library (oneDAL) '
    },
    {
      element:'Intel® oneAPI Data Analytics Library (oneDAL) - Open Source '
    },
    {
      element:'Intel® oneAPI Deep Neural Network Library (oneDNN) '
    },
    {
      element:'Intel® oneAPI Deep Neural Network Library (oneDNN) - Open Source '
    },
    {
      element:' Intel® oneAPI DPC++ Library (oneDPL)'
    },
    {
      element:'Intel® oneAPI DPC++ Library (oneDPL) - Open Source '
    },
    {
      element:'Intel® oneAPI DPC++/C++ Compiler '
    },
    {
      element:'Intel® oneAPI DPC++/C++ Compiler Runtime for Windows* '
    },
    {
      element:'Intel® oneAPI HPC Toolkit '
    },
    {
      element:' Intel® oneAPI Integrated Performance Primitives Cryptography'
    },
    {
      element:'Intel® oneAPI IoT Toolkit '
    },
    {
      element:'Intel® oneAPI Math Kernel Library (oneMKL) '
    },
    {
      element:'Intel® oneAPI Math Kernel Library (oneMKL) - Open Source'
    },
    {
      element:'Intel® oneAPI Rendering Toolkit '
    },
    {
      element:'Intel® oneAPI Threading Building Blocks (oneTBB) '
    },
    {
      element:'Intel® oneAPI Threading Building Blocks (oneTBB) - Open Source '
    },
    {
      element:'Intel® oneAPI Video Processing Library (oneVPL) '
    },
    {
      element:'Intel® oneAPI Video Processing Library (oneVPL) - Open Source '
    },
    {
      element:'Intel® oneAPI Video Processing Library (oneVPL) Runtime for Windows* '
    },
    {
      element:' Intel® Open Image Denoise'
    },
    {
      element:'Intel® Open Image Denoise - Open Source '
    },
    {
      element:'Intel® Open Volume Kernel Library (Intel® Open VKL) '
    },
    {
      element:' Intel® Open Volume Kernel Library (Intel® Open VKL) - Open Source'
    },
    {
      element:'Intel® OSPRay '
    },
    {
      element:'Intel® OSPRay - Open Source '
    },
    {
      element:'Intel® OSPRay Studio '
    },
    {
      element:'Intel® OSPRay Studio - Open Source '
    },
    {
      element:'Intel® Parallel Studio XE - Legacy Documentation '
    },
    {
      element:'Intel® Parallel Studio XE - Replacement Product '
    },
    {
      element:'Intel® Performance Libraries  (All Performance Libraries) '
    },
    {
      element:' Intel® Quartus® Prime Lite Edition'
    },
    {
      element:'Intel® Quartus® Prime Pro Edition '
    },
    {
      element:'Intel® Quartus® Prime Standard Edition '
    },
    {
      element:'Intel® RealSense™ SDK '
    },
    {
      element:' Intel® SDK for OpenCL™ Applications'
    },
    {
      element:'Intel® SoC FPGA Embedded Development Suite (SoC EDS) '
    },
    {
      element:'Intel® Software Development Emulator '
    },
    {
      element:'Intel® Software Guard Extensions SDK '
    },
    {
      element:'Intel® System Bring-Up Toolkit '
    },
    {
      element:' Intel® System Studio'
    },
    {
      element:'Intel® System Studio for Microcontrollers '
    },
    {
      element:'Intel® Trace Analyzer and Collector '
    },
    {
      element:'Intel® Vision Accelerator Design with Intel® Arria® 10 FPGA '
    },
    {
      element:'Intel® VTune™ Profiler (formerly Intel® VTune™ Amplifier) '
    },
    {
      element:' Intel® x86/x64 Debugger - Lauterbach'
    },
    {
      element:'Nios® II Embedded Design Suite (EDS) '
    },
    {
      element:'Open Active Management Technology Cloud Toolkit (Open AMT Cloud Toolkit) '
    },
    {
      element:'Pin '
    },
    {
      element:'Quartus® II Subscription Edition '
    },
    {
      element:'Quartus® II Web Edition '
    },
    {
      element:'SDK for Intel® Dynamic Application Loader (Intel® DAL) '
    },
    {
      element:' UEFI'
    },
    {
      element:'UP Squared* AI Vision X Developer Kit '
    }
  ];
  for (let i = 0; i < ds_operating3Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_operating3Arr[i].element}</a>`;
    ds_operating3Ul.appendChild(li);
  }
  let ds_operating4Ul = document.getElementById("ds_operating4-ul");
  
  let ds_operating4Arr = [
    {
      element: "Intel® Dynamic Application Loader​",
    },
  ];
  for (let i = 0; i < ds_operating4Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_operating4Arr[i].element}</a>`;
    ds_operating4Ul.appendChild(li);
  }
  
  let ds_operating5Ul = document.getElementById("ds_operating5-ul");
  
  let ds_operating5Arr = [
    {
      element: "On-Chip Debuggers",
    },
  ];
  for (let i = 0; i < ds_operating5Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_operating5Arr[i].element}</a>`;
    ds_operating5Ul.appendChild(li);
  }
  
  function topic (o) {
    if( o == 1){
      document.getElementById("ds_topic-main").style.display = "block";
      document.getElementById("ds_topic-btn").style.fontWeight = "bold";
      document.getElementById("ds_topic-li").style.backgroundColor ="#f3f3f3";
      document.getElementById("ds_topic-height").style.height = "392px";
      document.getElementById("ds_topic-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
      document.getElementById("ds_topic2-main").style.display = "none";
      document.getElementById("ds_topic2-btn").style.fontWeight = "";
      document.getElementById("ds_topic2-li").style.backgroundColor ="";
  
      document.getElementById("ds_topic3-main").style.display = "none";
      document.getElementById("ds_topic3-btn").style.fontWeight = "";
      document.getElementById("ds_topic3-li").style.backgroundColor ="";
  
      document.getElementById("ds_topic4-main").style.display = "none";
      document.getElementById("ds_topic4-btn").style.fontWeight = "";
      document.getElementById("ds_topic4-li").style.backgroundColor ="";
  
      document.getElementById("ds_topic5-main").style.display = "none";
      document.getElementById("ds_topic5-btn").style.fontWeight = "";
      document.getElementById("ds_topic5-li").style.backgroundColor ="";
    }
  
    else if( o == 2){
      document.getElementById("ds_topic2-main").style.display = "block";
      document.getElementById("ds_topic2-btn").style.fontWeight = "bold";
      document.getElementById("ds_topic2-li").style.backgroundColor ="#f3f3f3";
      document.getElementById("ds_topic2-height").style.height = "392px";
      document.getElementById("ds_topic2-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
      document.getElementById("ds_topic-main").style.display = "none";
      document.getElementById("ds_topic-btn").style.fontWeight = "";
      document.getElementById("ds_topic-li").style.backgroundColor ="";
  
      document.getElementById("ds_topic3-main").style.display = "none";
      document.getElementById("ds_topic3-btn").style.fontWeight = "";
      document.getElementById("ds_topic3-li").style.backgroundColor ="";
  
      document.getElementById("ds_topic4-main").style.display = "none";
      document.getElementById("ds_topic4-btn").style.fontWeight = "";
      document.getElementById("ds_topic4-li").style.backgroundColor ="";
  
      document.getElementById("ds_topic5-main").style.display = "none";
      document.getElementById("ds_topic5-btn").style.fontWeight = "";
      document.getElementById("ds_topic5-li").style.backgroundColor ="";
    }
  
    else if( o == 3){
      document.getElementById("ds_topic3-main").style.display = "block";
      document.getElementById("ds_topic3-btn").style.fontWeight = "bold";
      document.getElementById("ds_topic3-li").style.backgroundColor ="#f3f3f3";
      document.getElementById("ds_topic3-height").style.height = "392px";
      document.getElementById("ds_topic3-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
      document.getElementById("ds_topic-main").style.display = "none";
      document.getElementById("ds_topic-btn").style.fontWeight = "";
      document.getElementById("ds_topic-li").style.backgroundColor ="";
  
      document.getElementById("ds_topic2-main").style.display = "none";
      document.getElementById("ds_topic2-btn").style.fontWeight = "";
      document.getElementById("ds_topic2-li").style.backgroundColor ="";
  
      document.getElementById("ds_topic4-main").style.display = "none";
      document.getElementById("ds_topic4-btn").style.fontWeight = "";
      document.getElementById("ds_topic4-li").style.backgroundColor ="";
  
      document.getElementById("ds_topic5-main").style.display = "none";
      document.getElementById("ds_topic5-btn").style.fontWeight = "";
      document.getElementById("ds_topic5-li").style.backgroundColor ="";
    }
  
    else if( o == 4){
      document.getElementById("ds_topic4-main").style.display = "block";
      document.getElementById("ds_topic4-btn").style.fontWeight = "bold";
      document.getElementById("ds_topic4-li").style.backgroundColor ="#f3f3f3";
      document.getElementById("ds_topic4-height").style.height = "392px";
      document.getElementById("ds_topic4-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
      document.getElementById("ds_topic-main").style.display = "none";
      document.getElementById("ds_topic-btn").style.fontWeight = "";
      document.getElementById("ds_topic-li").style.backgroundColor ="";
  
      document.getElementById("ds_topic2-main").style.display = "none";
      document.getElementById("ds_topic2-btn").style.fontWeight = "";
      document.getElementById("ds_topic2-li").style.backgroundColor ="";
  
      document.getElementById("ds_topic3-main").style.display = "none";
      document.getElementById("ds_topic3-btn").style.fontWeight = "";
      document.getElementById("ds_topic3-li").style.backgroundColor ="";
      
      document.getElementById("ds_topic5-main").style.display = "none";
      document.getElementById("ds_topic5-btn").style.fontWeight = "";
      document.getElementById("ds_topic5-li").style.backgroundColor ="";
  
      
    }
  
    else if( o == 5){
      document.getElementById("ds_topic5-main").style.display = "block";
      document.getElementById("ds_topic5-btn").style.fontWeight = "bold";
      document.getElementById("ds_topic5-li").style.backgroundColor ="#f3f3f3";
      document.getElementById("ds_topic5-height").style.height = "392px";
      document.getElementById("ds_topic5-main").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
      document.getElementById("ds_topic-main").style.display = "none";
      document.getElementById("ds_topic-btn").style.fontWeight = "";
      document.getElementById("ds_topic-li").style.backgroundColor ="";
  
      document.getElementById("ds_topic2-main").style.display = "none";
      document.getElementById("ds_topic2-btn").style.fontWeight = "";
      document.getElementById("ds_topic2-li").style.backgroundColor ="";
  
      document.getElementById("ds_topic3-main").style.display = "none";
      document.getElementById("ds_topic3-btn").style.fontWeight = "";
      document.getElementById("ds_topic3-li").style.backgroundColor ="";
  
      document.getElementById("ds_topic4-main").style.display = "none";
      document.getElementById("ds_topic4-btn").style.fontWeight = "";
      document.getElementById("ds_topic4-li").style.backgroundColor ="";
  
      
    }
  }
  
  let ds_topicUl = document.getElementById("ds_topic-ul");
  
  let ds_topicArr = [
    {
      element: "3D U-Net FP32 Inference for TensorFlow* Container",
    },
    {
      element:'3D UNet FP32 Inference for TensorFlow* Model Package '
    },
    {
      element:'Analytics Zoo Cluster Serving '
    },
    {
      element:'Analytics Zoo Hyper Zoo '
    },
    {
      element:'BERT Large BFloat16 Inference Tensorflow* Container '
    },
    {
      element:'BERT Large BFloat16 Inference Tensorflow* Model Package '
    },
    {
      element:'BERT Large BFloat16 Training TensorFlow* Container '
    },
    {
      element:'BERT Large BFloat16 Training TensorFlow* Model Package '
    },
    {
      element:'BERT Large FP32 Inference Tensorflow* Container '
    },
    {
      element:' BERT Large FP32 Inference Tensorflow* Model Package'
    },
    {
      element:'BERT Large FP32 Training Tensorflow* Container '
    },
    {
      element:'BERT Large FP32 Training TensorFlow* Kubernetes* Package '
    },
    {
      element:'BERT Large FP32 Training Tensorflow* Model Package '
    },
    {
      element:'COCO Validation Dataset Preprocessing for TensorFlow* '
    },
    {
      element:'Data Analytics Reference Stack with Intel® Math Kernel Library for Deep Neural Networks (Intel® MKL-DNN) '
    },
    {
      element:' DenseNet169 FP32 Inference TensorFlow* Model Package'
    },
    {
      element:'Developer Kits Based on 8th Generation Intel® Core™ Processors '
    },
    {
      element:'Developer Kits with 11th Generation Intel® Core™ Processors '
    },
    {
      element:'Developer Kits with 9th Generation Intel® Core™ Processors '
    },
    {
      element:'Developer Kits with Intel® Xeon® D-2100 Processor Product Family '
    },
    {
      element:'Developer Kits with Intel® Xeon® W Processors and 10th Generation Intel® Core™ Processors '
    },
    {
      element:'DL Streamer - Open Source '
    },
    {
      element:'DSP Builder for Intel® FPGAs '
    },
    {
      element:'IEI* TANK AIoT Developer Kit with an Intel® Core™ or Intel® Xeon® Processor '
    },
    {
      element:'Install a Helm Chart That Deploys a TensorFlow* Serving '
    },
    {
      element:'Intel Movidius Vision Processing Unit (VPU) '
    },
    {
      element:'Intel® Advisor '
    },
    {
      element:'Intel® C++ Compiler '
    },
    {
      element:'Intel® Data Analytics Acceleration Library (Intel® DAAL) '
    },
    {
      element:'Intel® Decimal Floating-Point Math Library '
    },
    {
      element:'Intel® Distribution for Python* '
    },
    {
      element:'Intel® Distribution for Python* - Core Package '
    },
    {
      element:'Intel® Distribution for Python* - Full Package '
    },
    {
      element:'Intel® Distribution of Modin* '
    },
    {
      element:'Intel® Distribution of Modin* - Open Source '
    },
    {
      element:'Intel® Distribution of OpenVINO™ Toolkit '
    },
    {
      element:'Intel® Dynamic Application Loader'
    },
    {
      element:' Intel® Extension for PyTorch*'
    },
    {
      element:'Intel® Extension for Scikit-learn* '
    },
    {
      element:'Intel® Extension for Scikit-learn* with Intel® oneAPI Data Analytics Library (oneDAL) '
    },
    {
      element:'Intel® Extensions for TensorFlow* and Scikit-learn* with oneDAL '
    },
    {
      element:' Intel® Fortran Compiler'
    },
    {
      element:'Intel® Hardware Accelerated Execution Manager (Intel® HAXM) - Open Source '
    },
    {
      element:'Intel® High Level Synthesis Compiler '
    },
    {
      element:'Intel® Neural Compute Stick 2 '
    },
    {
      element:' Intel® oneAPI AI Analytics Toolkit '
    },
    {
      element:'Intel® oneAPI Collective Communications Library (oneCCL) '
    },
    {
      element:'Intel® oneAPI Collective Communications Library (oneCCL) - Open Source '
    },
    {
      element:'Intel® oneAPI Data Analytics Library (oneDAL) '
    },
    {
      element:'Intel® oneAPI Data Analytics Library (oneDAL) - Open Source '
    },
    {
      element:'Intel® oneAPI Deep Neural Network Library (oneDNN) '
    },
    {
      element:'Intel® oneAPI Deep Neural Network Library (oneDNN) - Open Source '
    },
    {
      element:'Intel® oneAPI DL Framework Developer Toolkit '
    },
    {
      element:'Intel® oneAPI DPC++/C++ Compiler '
    },
    {
      element:'Intel® oneAPI IoT Toolkit '
    },
    {
      element:'Intel® oneAPI Math Kernel Library (oneMKL) '
    },
    {
      element:'Intel® oneAPI Math Kernel Library (oneMKL) - Open Source '
    },
    {
      element:'Intel® oneAPI Threading Building Blocks (oneTBB) '
    },
    {
      element:'Intel® oneAPI Threading Building Blocks (oneTBB) - Open Source '
    },
    {
      element:'Intel® oneAPI Video Processing Library (oneVPL) '
    },
    {
      element:'Intel® oneAPI Video Processing Library (oneVPL) - Open Source '
    },
    {
      element:'Intel® Quartus® Prime Lite Edition '
    },
    {
      element:' Intel® Quartus® Prime Pro Edition'
    },
    {
      element:'Intel® Quartus® Prime Standard Edition '
    },
    {
      element:'Intel® SoC FPGA Embedded Development Suite (SoC EDS) '
    },
    {
      element:'Intel® Vision Accelerator Design with Intel® Arria® 10 FPGA '
    },
    {
      element:' Model Zoo for Intel® Architecture'
    },
    {
      element:'Model Zoo for Intel® Architecture - Open Source '
    },
    {
      element:'Nios® II Embedded Design Suite (EDS) '
    },
    {
      element:'Optimize a Mask R-CNN FP32 Inference Container with TensorFlow* '
    },
    {
      element:'Optimize a Mask R-CNN FP32 Inference Model with TensorFlow* '
    },
    {
      element:'Optimize a MobileNet* V1 FP32 Inference Container with TensorFlow* '
    },
    {
      element:'Optimize a MobileNet* V1 FP32 Inference Model with TensorFlow* '
    },
    {
      element:'Optimize a MobileNet* V1 Int8 Inference Container with TensorFlow* '
    },
    {
      element:'Optimize a MobileNet* V1 Int8 Inference Model Package with TensorFlow* '
    },
    {
      element:'Optimize an Inception V3 FP32 Inference Container with TensorFlow* '
    },
    {
      element:'Optimize an Inception V3 FP32 Inference Model Package with TensorFlow* '
    },
    {
      element:'Optimize an Inception V3 Int8 Inference Container with TensorFlow* '
    },
    {
      element:'Optimize an Inception V4 FP32 Inference Container with TensorFlow* '
    },
    {
      element:'Optimize an Inception V4 FP32 Inference Model with TensorFlow* '
    },
    {
      element:'Optimize an Inception V4 Int8 Inference Container with TensorFlow* '
    },
    {
      element:'Optimize an Inception V4 Int8 Inference Model with TensorFlow* '
    },
    {
      element:'Optimize an NCF Inference Container with TensorFlow* '
    },
    {
      element:'Optimize an NCF Inference Model with TensorFlow* '
    },
    {
      element:'Optimize an R-FCN FP32 Inference Model Package with TensorFlow* '
    },
    {
      element:'Optimize an R-FCN Int8 Inference Container with TensorFlow* '
    },
    {
      element:'Optimize Dynamic Language Runtimes Workloads for WordPress* '
    },
    {
      element:' Optimize Tensorflow* & oneDNN for Deep Learning'
    },
    {
      element:'Optimized Analytics Package for Spark* Platform (OAP for Spark* Platform) '
    },
    {
      element:'ResNet101 FP32 Inference TensorFlow* Container '
    },
    {
      element:'ResNet101 FP32 Inference TensorFlow* Model Package '
    },
    {
      element:'ResNet101 Int8 Inference TensorFlow* Container'
    },
    {
      element:'ResNet101 Int8 Inference TensorFlow* Model Package '
    },
    {
      element:'ResNet50 BFloat16 Inference PyTorch* Container '
    },
    {
      element:'ResNet50 BFloat16 Inference PyTorch* Model Package '
    },
    {
      element:'ResNet50 FP32 Inference PyTorch* Container '
    },
    {
      element:'ResNet50 FP32 Inference PyTorch* Model Package '
    },
    {
      element:'ResNet50 FP32 Inference Tensorflow* Container '
    },
    {
      element:'ResNet50 FP32 Inference Tensorflow* Model Package '
    },
    {
      element:'ResNet50 Int8 Inference TensorFlow* Container '
    },
    {
      element:'ResNet50 Int8 Inference TensorFlow* Model Package '
    },
    {
      element:'ResNet50* V1.5 FP32 Training Package with TensorFlow* for Kubernetes* '
    },
    {
      element:'ResNet50v1.5 BFloat16 Inference TensorFlow* Container '
    },
    {
      element:'ResNet50v1.5 BFloat16 Inference TensorFlow* Model Package '
    },
    {
      element:' ResNet50v1.5 BFloat16 Training TensorFlow* Container'
    },
    {
      element:'ResNet50v1.5 BFloat16 Training TensorFlow* Model Package '
    },
    {
      element:'ResNet50v1.5 FP32 Inference TensorFlow* Container '
    },
    {
      element:'ResNet50v1.5 FP32 Inference TensorFlow* Model Package '
    },
    {
      element:'ResNet50v1.5 FP32 Training Tensorflow* Container '
    },
    {
      element:'ResNet50v1.5 Int8 Inference Tensorflow* Container '
    },
    {
      element:'ResNet50v1.5 Int8 Inference Tensorflow* Model Package '
    },
    {
      element:'RFCN FP32 Inference Tensorflow* Container '
    },
    {
      element:' RFCN FP32 Inference TensorFlow* Kubernetes* Package'
    },
    {
      element:'RFCN Int8 Inference TensorFlow* Model Package '
    },
    {
      element:'Run a DLRM Bfloat16 Training Using a PyTorch* Model Package '
    },
    {
      element:'Run GNMT FP32 Inference with a TensorFlow* Model Package '
    },
    {
      element:'Run the Faster R-CNN FP32 Inference with a TensorFlow* Model Package '
    },
    {
      element:'Run the Faster R-CNN Int8 Inference with a TensorFlow* Model Package'
    },
    {
      element:'SDK for Intel® Dynamic Application Loader (Intel® DAL)'
    },
    {
      element:'Smart Video and Artificial Intelligence (AI) Workload Reference Implementation'
    },
    {
      element:'SSD-MobileNet FP32 Inference Tensorflow* Container'
    },
    {
      element:'SSD-MobileNet FP32 Inference Tensorflow* Model Package'
    },
    {
      element:'SSD-MobileNet Int8 Inference TensorFlow* Container'
    },
    {
      element:'SSD-MobileNet Int8 Inference TensorFlow* Model Package'
    },
    {
      element:'SSD-ResNet34 BFloat16 Training TensorFlow* Container'
    },
    {
      element:'SSD-ResNet34 BFloat16 Training TensorFlow* Model Package'
    },
    {
      element:'SSD-ResNet34 FP32 Inference Tensorflow* Container'
    },
    {
      element:'SSD-ResNet34 FP32 Training TensorFlow* Container'
    },
    {
      element:'SSD-ResNet34 FP32 Training TensorFlow* Model Package'
    },
    {
      element:'SSD-ResNet34 Int8 Inference Tensorflow* Container'
    },
    {
      element:'SSD-ResNet34 Int8 Inference Tensorflow* Model'
    },
    {
      element:'TensorFlow* Performance Comparison Jupyter* Notebooks'
    },
    {
      element:' Transformer-LT MLPerf BFloat16 Training TensorFlow* Container'
    },
    {
      element:'Transformer-LT MLPerf BFloat16 Training TensorFlow* Model Package '
    },
    {
      element:'Transformer-LT MLPerf FP32 Inference Tensorflow* Container '
    },
    {
      element:' Transformer-LT MLPerf FP32 Training Tensorflow* Model Package'
    },
    {
      element:'Transformer-LT Official FP32 Inference Tensorflow* Container '
    },
    {
      element:'Transformer-LT Official FP32 Inference Tensorflow* Model Package '
    },
    {
      element:'UNet FP32 Inference Tensorflow* Container '
    },
    {
      element:' UNet FP32 Inference Tensorflow* Model Package'
    },
    {
      element:' UP Squared* AI Vision X Developer Kit'
    },
    {
      element:'WaveNet FP32 Inference Tensorflow* Container '
    },
    {
      element:'WaveNet FP32 Inference Tensorflow* Model Package '
    },
    {
      element:'Wide & Deep Large Data FP32 Training TensorFlow* Kubernetes* Package '
    },
    {
      element:'Wide & Deep Large Dataset FP32 Inference TensorFlow* Container '
    },
    {
      element:'Wide & Deep Large Dataset FP32 Inference TensorFlow* Model Package '
    },
    {
      element:' Wide & Deep Large Dataset FP32 Training Tensorflow* Model Package'
    },
    {
      element:' Wide & Deep Large Dataset Int8 Inference TensorFlow* Container'
    },
    {
      element:'Wide & Deep Large Dataset Int8 Inference TensorFlow* Model Package '
    },
    {
      element:'Wide Deep FP32 Inference Tensorflow* Container '
    },
    {
      element:'Wide Deep Large Dataset FP32 Training Tensorflow* Container '
    }
  ];
  for (let i = 0; i < ds_topicArr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_topicArr[i].element}</a>`;
    ds_topicUl.appendChild(li);
  }
  
  let ds_topic2Ul = document.getElementById("ds_topic2-ul");
  
  let ds_topic2Arr = [
    {
      element: "Boulder Springs SDK",
    },
    {
      element:'Data Plane Development Kit (DPDK)'
    },
    {
      element:'Data Plane Development Kit (DPDK) - Open Source'
    },
    {
      element:'GStreamer* Video Analytics (GVA) Plugin'
    },
    {
      element:'Infrastructure Modelling'
    },
    {
      element:'Intel Unite® Plugin SDK'
    },
    {
      element:'Intel® Advisor'
    },
    {
      element:'Intel® C++ Compiler'
    },
    {
      element:'Intel® Cluster Checker'
    },
    {
      element:'Intel® Collaboration Suite for WebRTC'
    },
    {
      element:'Intel® Data Analytics Acceleration Library (Intel® DAAL)'
    },
    {
      element:'Intel® Data Center Manager Console'
    },
    {
      element:'Intel® Decimal Floating-Point Math Library'
    },
    {
      element:'Intel® Device Plug-ins for Kubernetes* - GitHub*'
    },
    {
      element:'Intel® Distribution for GDB*'
    },
    {
      element:'Intel® Distribution of OpenVINO™ Toolkit'
    },
    {
      element:'Intel® DPC++ Compatibility Tool'
    },
    {
      element:'Intel® Embree'
    },
    {
      element:'Intel® Embree - Open Source'
    },
    {
      element:'Intel® Fortran Compiler'
    },
    {
      element:'Intel® FPGA Add-on for oneAPI Base Toolkit'
    },
    {
      element:'Intel® FPGA SDK for OpenCL™'
    },
    {
      element:'Intel® Graphics Control Library'
    },
    {
      element:'Intel® Hardware Accelerated Execution Manager (Intel® HAXM) - Open Source'
    },
    {
      element:'Intel® Homomorphic Encryption Toolkit (Intel® HE Toolkit)'
    },
    {
      element:'Intel® Implicit SPMD Program Compiler (ISPC) - Open Source'
    },
    {
      element:'Intel® Inspector'
    },
    {
      element:'Intel® Integrated Performance Primitives'
    },
    {
      element:'Intel® Intelligent Storage Acceleration Library (ISA-L)'
    },
    {
      element:'Intel® License Manager for FLEXlm*'
    },
    {
      element:'Intel® Media Server Studio - Product Retired'
    },
    {
      element:'Intel® MPI Library'
    },
    {
      element:' Intel® oneAPI Base & HPC Toolkit '
    },
    {
      element:'Intel® oneAPI Base & IoT Toolkit'
    },
    {
      element:'Intel® oneAPI Base & Rendering Toolkit '
    },
    {
      element:'Intel® oneAPI Base Toolkit'
    },
    {
      element:'Intel® oneAPI Collective Communications Library (oneCCL)'
    },
    {
      element:'Intel® oneAPI Collective Communications Library (oneCCL) - Open Source'
    },
    {
      element:'Intel® oneAPI Data Analytics Library (oneDAL)'
    },
    {
      element:'Intel® oneAPI Data Analytics Library (oneDAL) - Open Source'
    },
    {
      element:'Intel® oneAPI Deep Neural Network Library (oneDNN)'
    },
    {
      element:'Intel® oneAPI Deep Neural Network Library (oneDNN) - Open Source'
    },
    {
      element:'Intel® oneAPI DPC++ Library (oneDPL)'
    },
    {
      element:'Intel® oneAPI DPC++/C++ Compiler'
    },
    {
      element:'Intel® oneAPI HPC Toolkit'
    },
    {
      element:'Intel® oneAPI Integrated Performance Primitives Cryptography'
    },
    {
      element:'Intel® oneAPI Math Kernel Library (oneMKL)'
    },
    {
      element:'Intel® oneAPI Math Kernel Library (oneMKL) - Open Source'
    },
    {
      element:'Intel® oneAPI Math Kernel Library (oneMKL) - Open Source'
    },
    {
      element:'Intel® oneAPI Threading Building Blocks (oneTBB)'
    },
    {
      element:'Intel® oneAPI Threading Building Blocks (oneTBB) - Open Source'
    },
    {
      element:'Intel® oneAPI Video Processing Library (oneVPL)'
    },
    {
      element:'Intel® oneAPI Video Processing Library (oneVPL) - Open Source'
    },
    {
      element:'Intel® Open Image Denoise'
    },
    {
      element:'Intel® Open Image Denoise - Open Source'
    },
    {
      element:'Intel® Open Volume Kernel Library (Intel® Open VKL)'
    },
    {
      element:'Intel® Open Volume Kernel Library (Intel® Open VKL) - Open Source'
    },
    {
      element:'Intel® OpenSWR - Open Source'
    },
    {
      element:'Intel® OSPRay'
    },
    {
      element:'Intel® OSPRay - Open Source'
    },
    {
      element:'Intel® OSPRay for Hydra'
    },
    {
      element:'Intel® OSPRay Studio'
    },
    {
      element:'Intel® OSPRay Studio - Open Source'
    },
    {
      element:'Intel® Parallel Studio XE - Legacy Documentation'
    },
    {
      element:'Intel® Performance Libraries  (All Performance Libraries)'
    },
    {
      element:'Intel® SDK for OpenCL™ Applications'
    },
    {
      element:'Intel® Secure Device Onboard'
    },
    {
      element:'Intel® SoC Watch'
    },
    {
      element:'Intel® Software Development Emulator'
    },
    {
      element:'Intel® Software Guard Extensions SDK'
    },
    {
      element:'Intel® System Bring-Up Toolkit'
    },
    {
      element:'Intel® System Studio'
    },
    {
      element:'Intel® System Studio for Microcontrollers'
    },
    {
      element:'Intel® Time Coordinated Computing Tools'
    },
    {
      element:'Intel® Trace Analyzer and Collector'
    },
    {
      element:'Intel® VTune™ Profiler (formerly Intel® VTune™ Amplifier)'
    },
    {
      element:'On-Chip Debuggers'
    },
    {
      element:'Open Data Center Diagnostic Project (Open DCDIAG)'
    },
    {
      element:'Pin'
    },
    {
      element:'Platform Resource Access API'
    },
    {
      element:'SDK for Intel® Dynamic Application Loader (Intel® DAL)'
    },
    {
      element:'Storage Performance Development Kit (SPDK)'
    },
    {
      element:'Useful Packages & Modules (UPM)/MRAA Library'
    },
    {
      element:'WindRiver Simics'
    }
    
  ];
  for (let i = 0; i < ds_topic2Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_topic2Arr[i].element}</a>`;
    ds_topic2Ul.appendChild(li);
  }
  
  let ds_topic3Ul = document.getElementById("ds_topic3-ul");
  
  let ds_topic3Arr = [
    {
      element: ' Boulder Springs SDK'
    },
    {
      element:'Developer Kits Based on 8th Generation Intel® Core™ Processors '
    },
    {
      element:'Developer Kits with 11th Generation Intel® Core™ Processors '
    },
    {
      element:'Developer Kits with 9th Generation Intel® Core™ Processors '
    },
    {
      element:'Developer Kits with Intel® Xeon® D-2100 Processor Product Family '
    },
    {
      element:'Developer Kits with Intel® Xeon® W Processors and 10th Generation Intel® Core™ Processors '
    },
    {
      element:'DL Streamer - Open Source '
    },
    {
      element:'DSP Builder for Intel® FPGAs '
    },
    {
      element:'GStreamer* Video Analytics (GVA) Plugin '
    },
    {
      element:'IEI* TANK AIoT Developer Kit with an Intel® Core™ or Intel® Xeon® Processor '
    },
    {
      element:' Infrastructure Modelling'
    },
    {
      element:'Intel Movidius Vision Processing Unit (VPU) '
    },
    {
      element:'Intel® Advisor '
    },
    {
      element:' Intel® C++ Compiler'
    },
    {
      element:'Intel® Cluster Checker '
    },
    {
      element:' Intel® Collaboration Suite for WebRTC'
    },
    {
      element:' Intel® Data Analytics Acceleration Library (Intel® DAAL)'
    },
    {
      element:'Intel® Data Center Manager Console '
    },
    {
      element:'Intel® Device Plug-ins for Kubernetes* - GitHub* '
    },
    {
      element:' Intel® Distribution for GDB*'
    },
    {
      element:'Intel® Distribution of OpenVINO™ Toolkit '
    },
    {
      element:'Intel® DPC++ Compatibility Tool '
    },
    {
      element:'Intel® Dynamic Application Loader '
    },
    {
      element:'Intel® Embree '
    },
    {
      element:'Intel® Embree - Open Source '
    },
    {
      element:'Intel® Fortran Compiler '
    },
    {
      element:'Intel® FPGA Add-on for oneAPI Base Toolkit '
    },
    {
      element:'Intel® FPGA Device Plugin (for Kubernetes*) '
    },
    {
      element:' Intel® FPGA SDK for OpenCL™'
    },
    {
      element:'Intel® Hardware Accelerated Execution Manager (Intel® HAXM) - Open Source '
    },
    {
      element:'Intel® High Level Synthesis Compiler '
    },
    {
      element:'Intel® Homomorphic Encryption Toolkit (Intel® HE Toolkit) '
    },
    {
      element:'Intel® Inspector '
    },
    {
      element:' Intel® Integrated Performance Primitives'
    },
    {
      element:'Intel® Intelligent Storage Acceleration Library (ISA-L) '
    },
    {
      element:'Intel® MPI Library '
    },
    {
      element:'Intel® Neural Compute Stick 2 '
    },
    {
      element:'Intel® oneAPI AI Analytics Toolkit '
    },
    {
      element:'Intel® oneAPI Base & HPC Toolkit'
    },
    {
      element:'Intel® oneAPI Base & IoT Toolkit '
    },
    {
      element:'Intel® oneAPI Base & Rendering Toolkit '
    },
    {
      element:' Intel® oneAPI Base Toolkit'
    },
    {
      element:'Intel® oneAPI Collective Communications Library (oneCCL) '
    },
    {
      element:'Intel® oneAPI Collective Communications Library (oneCCL) - Open Source '
    },
    {
      element:'Intel® oneAPI Data Analytics Library (oneDAL) '
    },
    {
      element:'Intel® oneAPI Data Analytics Library (oneDAL) - Open Source '
    },
    {
      element:'Intel® oneAPI Deep Neural Network Library (oneDNN) '
    },
    {
      element:'Intel® oneAPI Deep Neural Network Library (oneDNN) - Open Source '
    },
    {
      element:'Intel® oneAPI DPC++ Library (oneDPL) '
    },
    {
      element:' Intel® oneAPI DPC++ Library (oneDPL) - Open Source'
    },
    {
      element:'Intel® oneAPI DPC++/C++ Compiler '
    },
    {
      element:'Intel® oneAPI HPC Toolkit '
    },
    {
      element:'Intel® oneAPI Integrated Performance Primitives Cryptography '
    },
    {
      element:'Intel® oneAPI Rendering Toolkit '
    },
    {
      element:'Intel® oneAPI Threading Building Blocks (oneTBB) '
    },
    {
      element:'Intel® oneAPI Threading Building Blocks (oneTBB) - Open Source '
    },
    {
      element:'Intel® oneAPI Video Processing Library (oneVPL) '
    },
    {
      element:'Intel® oneAPI Video Processing Library (oneVPL) - Open Source '
    },
    {
      element:'Intel® Open Image Denoise '
    },
    {
      element:'Intel® Open Image Denoise - Open Source '
    },
    {
      element:'Intel® Open Volume Kernel Library (Intel® Open VKL) '
    },
    {
      element:'Intel® Open Volume Kernel Library (Intel® Open VKL) - Open Source '
    },
    {
      element:'Intel® OpenSWR - Open Source '
    },
    {
      element:'Intel® OSPRay '
    },
    {
      element:'Intel® OSPRay - Open Source'
    },
    {
      element:' Intel® OSPRay for Hydra'
    },
    {
      element:'Intel® OSPRay Studio'
    },
    {
      element:'Intel® OSPRay Studio - Open Source '
    },
    {
      element:'Intel® Parallel Studio XE - Legacy Documentation '
    },
    {
      element:'Intel® Parallel Studio XE - Replacement Product '
    },
    {
      element:'Intel® Performance Libraries (All Performance Libraries) '
    },
    {
      element:' Intel® Quartus® Prime Lite Edition'
    },
    {
      element:' Intel® Quartus® Prime Pro Edition'
    },
    {
      element:'Intel® Quartus® Prime Standard Edition '
    },
    {
      element:'Intel® SDK for OpenCL™ Applications '
    },
    {
      element:'Intel® Secure Device Onboard '
    },
    {
      element:'Intel® SoC FPGA Embedded Development Suite (SoC EDS) '
    },
    {
      element:'Intel® Software Guard Extensions SDK '
    },
    {
      element:'Intel® System Studio '
    },
    {
      element:'Intel® System Studio for Microcontrollers '
    },
    {
      element:'Intel® Time Coordinated Computing Tools '
    },
    {
      element:'Intel® Trace Analyzer and Collector '
    },
    {
      element:'Intel® Vision Accelerator Design with Intel® Arria® 10 FPGA '
    },
    {
      element:'Intel® VTune™ Profiler (formerly Intel® VTune™ Amplifier) '
    } ,
    {
      element:' Nios® II Embedded Design Suite (EDS)'
    } ,
    {
      element:'On-Chip Debuggers '
    } ,
    {
      element:' Open Active Management Technology Cloud Toolkit (Open AMT Cloud Toolkit)'
    } ,
    {
      element:'Open Visual Cloud Media Analytics - Development Image for Intel® Xeon® Processor on Ubuntu* 18.04 '
    } ,
    {
      element:'Open Visual Cloud Media Analytics - Development Image for VCAC-A on Ubuntu* 18.04 '
    } ,
    {
      element:'Open Visual Cloud Media Analytics - HDDL Daemon for VCAC-A on Ubuntu* 18.04 '
    } ,
    {
      element:'Open Visual Cloud Media Delivery - NGINX* for Systems with Intel® QuickAssist Technology and Using CentOS* 7 '
    } ,
    {
      element:'Open Visual Cloud Media Delivery - NGINX* for Systems with Intel® QuickAssist Technology and Using Ubuntu* 18.04 '
    },
    {
      element:'Open Visual Cloud Media Delivery - NGINX* for Systems with Intel® QuickAssist Technology and Using Ubuntu* 20.04 '
    },
    {
      element:'Platform Resource Access API '
    } ,
    {
      element:'SDK for Intel® Dynamic Application Loader (Intel® DAL) '
    } ,
    {
      element:'Storage Performance Development Kit (SPDK) '
    } ,
    {
      element:'UP Squared* AI Vision X Developer Kit '
    } ,
    {
      element:'WindRiver Simics '
    }  
  ];
  for (let i = 0; i < ds_topic3Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_topic3Arr[i].element}</a>`;
    ds_topic3Ul.appendChild(li);
  }
  
  let ds_topic4Ul = document.getElementById("ds_topic4-ul");
  
  let ds_topic4Arr = [
    {
      element: "Amazon Web Services (AWS)* Cloud to Edge Pipeline ​",
    },
    {
      element:'Automated Checkout Reference Implementation '
    },
    {
      element:'Boulder Springs SDK '
    },
    {
      element:'Connect Edge Devices to Azure IoT* '
    },
    {
      element:'Developer Kits Based on 8th Generation Intel® Core™ Processors '
    },
    {
      element:' Developer Kits with 11th Generation Intel® Core™ Processors'
    },
    {
      element:' Developer Kits with 9th Generation Intel® Core™ Processors'
    },
    {
      element:'Developer Kits with Intel® Xeon® D-2100 Processor Product Family '
    },
    {
      element:' Developer Kits with Intel® Xeon® W Processors and 10th Generation Intel® Core™ Processors'
    },
    {
      element:' Driver Behavior Analytics Reference Implementation'
    },
    {
      element:'DSP Builder for Intel® FPGAs '
    },
    {
      element:' Edge Insights for Fleet (EIF)'
    },
    {
      element:'Edge Insights for Industrial '
    },
    {
      element:'Edge Insights for Vision '
    },
    {
      element:'IEI* TANK AIoT Developer Kit with an Intel® Core™ or Intel® Xeon® Processor '
    },
    {
      element:'Industrial Surface Defect Detection Reference Implementation '
    },
    {
      element:'Industrial Text Line Recognition Reference Implementation '
    },
    {
      element:'Infrastructure Modelling '
    },
    {
      element:'Intel Movidius Vision Processing Unit (VPU) '
    },
    {
      element:'Intel® C++ Compiler '
    },
    {
      element:'Intel® Connected Logistics Platform (Intel® CLP) Reference Implementation '
    },
    {
      element:'Intel® Data Analytics Acceleration Library (Intel® DAAL) '
    },
    {
      element:'Intel® Decimal Floating-Point Math Library '
    },
    {
      element:'Intel® Distribution for Python* '
    },
    {
      element:'Intel® Distribution of Modin* '
    },
    {
      element:'Intel® Distribution of Modin* - Open Source '
    },
    {
      element:'Intel® Distribution of OpenVINO™ Toolkit '
    },
    {
      element:'Intel® DPC++ Compatibility Tool '
    },
    {
      element:'Intel® Dynamic Application Loader '
    },
    {
      element:'Intel® Edge Controls for Industrial '
    },
    {
      element:'Intel® FPGA Add-on for oneAPI Base Toolkit '
    },
    {
      element:' Intel® FPGA Device Plugin (for Kubernetes*)'
    },
    {
      element:'Intel® FPGA SDK for OpenCL™ '
    },
    {
      element:'Intel® Hardware Accelerated Execution Manager (Intel® HAXM) - Open Source '
    },
    {
      element:'Intel® High Level Synthesis Compiler '
    },
    {
      element:'Intel® Integrated Performance Primitives '
    },
    {
      element:'Intel® Neural Compute Stick 2 '
    },
    {
      element:'Intel® oneAPI AI Analytics Toolkit '
    },
    {
      element:'Intel® oneAPI Base & IoT Toolkit '
    },
    {
      element:' Intel® oneAPI Base Toolkit'
    },
    {
      element:'Intel® oneAPI Collective Communications Library (oneCCL) '
    },
    {
      element:'Intel® oneAPI Collective Communications Library (oneCCL) - Open Source '
    },
    {
      element:'Intel® oneAPI Data Analytics Library (oneDAL) '
    },
    {
      element:'Intel® oneAPI Data Analytics Library (oneDAL) - Open Source '
    },
    {
      element:' Intel® oneAPI Deep Neural Network Library (oneDNN)'
    },
    {
      element:'Intel® oneAPI Deep Neural Network Library (oneDNN) - Open Source '
    },
    {
      element:' Intel® oneAPI DPC++ Library (oneDPL)'
    },
    {
      element:'Intel® oneAPI DPC++ Library (oneDPL) - Open Source '
    },
    {
      element:'Intel® oneAPI DPC++/C++ Compiler '
    },
    {
      element:'Intel® oneAPI HPC Toolkit '
    },
    {
      element:'Intel® oneAPI Integrated Performance Primitives Cryptography '
    },
    {
      element:'Intel® oneAPI Rendering Toolkit '
    },
    {
      element:'Intel® oneAPI Threading Building Blocks (oneTBB) '
    },
    {
      element:' Intel® oneAPI Threading Building Blocks (oneTBB) - Open Source'
    },
    {
      element:'Intel® oneAPI Video Processing Library (oneVPL) '
    },
    {
      element:'Intel® oneAPI Video Processing Library (oneVPL) - Open Source '
    },
    {
      element:' Intel® Quartus® Prime Lite Edition'
    },
    {
      element:'Intel® Quartus® Prime Pro Edition '
    },
    {
      element:'Intel® Quartus® Prime Standard Edition '
    },
    {
      element:' Intel® RealSense™ SDK'
    },
    {
      element:'Intel® Secure Device Onboard '
    },
    {
      element:'Intel® Smart Edge Open '
    },
    {
      element:'Intel® SoC FPGA Embedded Development Suite (SoC EDS) '
    },
    {
      element:'Intel® Software Guard Extensions SDK '
    },
    {
      element:' Intel® System Studio'
    },
    {
      element:' Intel® System Studio for Microcontrollers'
    },
    {
      element:'Intel® Time Coordinated Computing Tools '
    },
    {
      element:'Intel® Vision Accelerator Design with Intel® Arria® 10 FPGA '
    },
    {
      element:'Intel® VTune™ Profiler (formerly Intel® VTune™ Amplifier) '
    },
    {
      element:'Intelligent Traffic Management Reference Implementation '
    },
    {
      element:'Model Zoo for Intel® Architecture   '
    },
    {
      element:'Model Zoo for Intel® Architecture - Open Source '
    },
    {
      element:'Network Optimization and AI Inferencing Management for Telepathology Reference Implementation '
    },
    {
      element:'Nios® II Embedded Design Suite (EDS) '
    },
    {
      element:'On-Chip Debuggers '
    },
    {
      element:'Open Active Management Technology Cloud Toolkit (Open AMT Cloud Toolkit) '
    },
    {
      element:'Patient Fall Monitoring and Prevention in Hospitals '
    },
    {
      element:'Real-time Sensor Fusion for Loss Detection Reference Implementation '
    },
    {
      element:'Rotor Bearing Defect Detector Reference Implementation '
    },
    {
      element:'SDK for Intel® Dynamic Application Loader (Intel® DAL) '
    },
    {
      element:'Social Distancing for Retail Settings Reference Implementation '
    },
    {
      element:'Storage Performance Development Kit (SPDK) '
    },
    {
      element:'Textile Defect Classifier Reference Implementation '
    },
    {
      element:'Universal Wellpad Controller '
    },
    {
      element:' UP Squared* AI Vision X Developer Kit'
    },
    {
      element:'Useful Packages & Modules (UPM)/MRAA Library '
    },
    {
      element:' Vehicle Event Recording Reference Implementation'
    },
    {
      element:'Weld Porosity Detection Reference Implementation '
    },
    {
      element:'WindRiver Simics '
    },
    {
      element:'Wireless Network-Ready Intelligent Traffic Management Reference Implementation '
    },
    {
      element:' Wireless Network-Ready PCB Defect Detection Reference Implementation'
    },
  ]
  for (let i = 0; i < ds_topic4Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_topic4Arr[i].element}</a>`;
    ds_topic4Ul.appendChild(li);
  }
  
  let ds_topic5Ul = document.getElementById("ds_topic5-ul");
  
  let ds_topic5Arr = [
    {
      element: "Intel® Distribution of OpenVINO™ Toolkit",
    },
    {
      element:'Intel® Embree'
    },
    {
      element:'Intel® Embree - Open Source'
    },
    {
      element:'Intel® Graphics Control Library'
    },
    {
      element:'Intel® Graphics Performance Analyzers'
    },
    {
      element:'Intel® Implicit SPMD Program Compiler (ISPC) - Open Source'
    },
    {
      element:'Intel® oneAPI Rendering Toolkit'
    },
    {
      element:'Intel® oneAPI Threading Building Blocks (oneTBB)'
    },
    {
      element:'Intel® oneAPI Threading Building Blocks (oneTBB) - Open Source'
    },
    {
      element:'Intel® oneAPI Video Processing Library (oneVPL)'
    },
    {
      element:'Intel® oneAPI Video Processing Library (oneVPL) - Open Source'
    },
    {
      element:'Intel® Texture Works Plugin for Photoshop*'
    },
    {
      element:'Intel® VTune™ Profiler (formerly Intel® VTune™ Amplifier)'
    }
  ]
  for (let i = 0; i < ds_topic5Arr.length; i++) {
    let li = document.createElement("li");
    li.classList.add("px-3", "mt-3");
    li.innerHTML = `<a class="ds_Main-Color">${ds_topic5Arr[i].element}</a>`;
    ds_topic5Ul.appendChild(li);
  }