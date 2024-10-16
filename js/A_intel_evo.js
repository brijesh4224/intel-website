const products = [
    {
      imageSrc: "../img/Akshay image/s3502-1920x1080.jpg.rendition.intel.web.720.405.jpg",
      altText: "Asus Vivobook S15",
      name: "Asus Vivobook S15",
      processor: "Intel Core i5-13500H",
      storage: "512GB SSD",
      memory: "16GB",
      graphics: "Integrated Intel Iris Xe Graphics",
      os: "Windows 11 Home",
      shopNowLink: "#"
    },
    {
        // imageSrc: "../img/Akshay image/s3502-1920x1080.jpg.rendition.intel.web.720.405.jpg",
        imageSrc: "../img/Akshay image/shopblade-samsung-galaxy-book3-pro360.png.rendition.intel.web.720.405.png",
      altText: "Asus Vivobook S15",
      name: "Samsung Galaxy Book 3 Pro - NP940XFG-KC5IN",
      processor: "Intel Core i7-1360P",
      storage: "1 TB NVMe SSD",
      memory: "16GB",
      graphics: "Intel® Iris® Xe Graphics",
      os: "Windows 11 Home",
      shopNowLink: "#"
    },
    {
        imageSrc: "../img/Akshay image/asus-zenbook-s13-oled-ux5304-1920x1080.jpg.rendition.intel.web.720.405.jpg",
      altText: "Asus Zenbook S 13",
      name: "Intel Core i5-1335U",
      processor: "Intel Core i5-13500H",
      storage: "512GB SSD",
      memory: "16GB",
      graphics: "Intel Integrated graphics",
      os: "Windows 11 Home",
      shopNowLink: "#"
    },
    {
        imageSrc: "../img/Akshay image/dell-inspiron-13-1080x1080-1.jpg.rendition.intel.web.416.234.jpg",
        altText: "Asus Vivobook S15",
        name: "Dell Inspiron 13 5330",
        processor: "Intel Core i5-1340P",
        storage: "512GB SSD",
        memory: "16GB",
        graphics: "Intel Integrated graphics",
        os: "Windows 11 Home",
        shopNowLink: "#"
    },
    {
        imageSrc: "../img/Akshay image/hp-pavilion-14-1920.jpg.rendition.intel.web.720.405.jpg",
        altText: "Asus Vivobook S15",
        name: "HP Pavilion Plus 14",
        processor: " Intel Core i7-13700H",
        storage: "1 TB SSD",
        memory: "16GB",
        graphics: "Integrated Integrated Intel Iris Xe Graphics",
        os: "Windows 11 Home",
        shopNowLink: "#"
    }
  ];

  function generateProductHTML(product) {
    return `
      <div class="col-md-4">
        <img src="${product.imageSrc}" alt="${product.altText}" class="v_shopnow_img">
        <div class="mb-2" style="line-height: 28px;">
          <a href="#" class="v_acces_intel">${product.name}</a>
          <div><p class="fw-bold d-inline mb-0">Processor: </p><p class="d-inline mb-0">${product.processor}</p></div>
          <div><p class="fw-bold d-inline mb-0">Storage: </p><p class="d-inline mb-0">${product.storage}</p></div>
          <div><p class="fw-bold d-inline mb-0">Memory: </p><p class="d-inline mb-0">${product.memory}</p></div>
          <div><p class="fw-bold d-inline mb-0">Graphics: </p><p class="d-inline mb-0">${product.graphics}</p></div>
          <div class="mb-3"><p class="fw-bold d-inline mb-0">Operating System: </p><p class="d-inline mb-0">${product.os}</p></div>
          <div><a href="${product.shopNowLink}" class="v_shopnow" style="color: white;">Shop now</a></div>
        </div>
      </div>
    `;
  }

  const productContainer = document.getElementById('product-container');
  products.forEach(product => {
    productContainer.innerHTML += generateProductHTML(product);
  });

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//   const productList = [
//     {
//       imageSrc: "../img/Akshay image/notebook-samsung-galaxy-book2-pro-intel-core-i7-1260p-16gb-1tb-ssd-tela-15-6-full-hd-amoled-intel-arc-a350m-1920x1080.png.rendition.intel.web.720.405.png",
//       altText: "Asus Vivobook S15",
//       name: "Samsung Galaxy Book 2 Pro",
//       processor: "Intel Core i7 - 1260P",
//       storage: "512GB SSD",
//       memory: "16GB",
//       graphics: "Integrated Integrated Intel Iris Xe Graphics",
//       os: "Windows 11 Home",
//       shopNowLink: "#"
//     },
//     {
//       name: "Dell XPS 9315",
//       processor: "Intel i7-1250U",
//       storage: "512Gb SSD",
//       memory: "16GB",
//       graphics: "Integrated Graphics",
//       os: "Windows 11 Home",
//       shopNowLink: "#"
//     },
//     {
//         imageSrc: "../img/Akshay image/hp-envy-x360-1080-x-1080.jpg.rendition.intel.web.720.405.jpg",
//       altText: "Asus Zenbook S 13",
//       name: "HP Envy x360 13 bf0059tu",
//       processor: " Intel® Core™ i7-1250U",
//       storage: "512GB SSD",
//       memory: "16GB",
//       graphics: "Integrated Graphics",
//       os: "Windows 11 Home",
//       shopNowLink: "#"
//     },
//     {
//         imageSrc: "../img/Akshay image/acer-swift-3-sf314-512-sf-314-512t-fingerprint-backlit-wallpaper-win11-pure-silver-02-1920x1080px.jpg.rendition.intel.web.720.405 (1).jpg",
//         altText: "Asus Vivobook S15",
//         name: "Acer Swift 3",
//         processor: " Intel Core i5-12500H",
//         storage: "512GB SSD",
//         memory: "16GB",
//         graphics: "Intel Integrated graphics",
//         os: "Windows 11 Home",
//         shopNowLink: "#"
//     },
//     {
//         imageSrc: "../img/Akshay image/lenovo-yogo-7i-1440x1080.jpg.rendition.intel.web.720.405.jpg",
//         altText: "Asus Vivobook S15",
//         name: "Lenovo Yoga 7",
//         processor: "Intel Core i7-1260P ",
//         storage: "512GB SSD",
//         memory: "16GB",
//         graphics: "Integrated Integrated Intel Iris Xe Graphics",
//         os: "Windows 11 Home",
//         shopNowLink: "#"
//     }
// ];

// function createProductHTML(product) {
//     return `
//       <div class="col-md-4">
//         <img src="${product.imageSrc}" alt="${product.altText}" class="v_shopnow_img">
//         <div class="mb-2" style="line-height: 28px;">
//           <a href="#" class="v_acces_intel">${product.name}</a>
//           <div><p class="fw-bold d-inline mb-0">Processor: </p><p class="d-inline mb-0">${product.processor}</p></div>
//           <div><p class="fw-bold d-inline mb-0">Storage: </p><p class="d-inline mb-0">${product.storage}</p></div>
//           <div><p class="fw-bold d-inline mb-0">Memory: </p><p class="d-inline mb-0">${product.memory}</p></div>
//           <div><p class="fw-bold d-inline mb-0">Graphics: </p><p class="d-inline mb-0">${product.graphics}</p></div>
//           <div class="mb-3"><p class="fw-bold d-inline mb-0">Operating System: </p><p class="d-inline mb-0">${product.os}</p></div>
//           <div><a href="${product.shopNowLink}" class="v_shopnow" style="color: white;">Shop now</a></div>
//         </div>
//       </div>
//     `;
// }

// const productListContainer = document.getElementById('productlist-container');
// productList.forEach(product => {
//     productListContainer.innerHTML += createProductHTML(product);
// });


const productList = [
    {
        imageSrc: "../img/Akshay image/notebook-samsung-galaxy-book2-pro-intel-core-i7-1260p-16gb-1tb-ssd-tela-15-6-full-hd-amoled-intel-arc-a350m-1920x1080.png.rendition.intel.web.720.405.png",
        altText: "Asus Vivobook S15",
        name: "Samsung Galaxy Book 2 Pro",
        processor: "Intel Core i7 - 1260P",
        storage: "512GB SSD",
        memory: "16GB",
        graphics: "Integrated Integrated Intel Iris Xe Graphics",
        os: "Windows 11 Home",
        shopNowLink: "#"
    },
    {
        name: "Dell XPS 9315",
        processor: "Intel i7-1250U",
        storage: "512Gb SSD",
        memory: "16GB",
        graphics: "Integrated Graphics",
        os: "Windows 11 Home",
        shopNowLink: "#"
    },
    {
        imageSrc: "../img/Akshay image/hp-envy-x360-1080-x-1080.jpg.rendition.intel.web.720.405.jpg",
        altText: "Asus Zenbook S 13",
        name: "HP Envy x360 13 bf0059tu",
        processor: " Intel® Core™ i7-1250U",
        storage: "512GB SSD",
        memory: "16GB",
        graphics: "Integrated Graphics",
        os: "Windows 11 Home",
        shopNowLink: "#"
    },
    {
        imageSrc: "../img/Akshay image/acer-swift-3-sf314-512-sf-314-512t-fingerprint-backlit-wallpaper-win11-pure-silver-02-1920x1080px.jpg.rendition.intel.web.720.405 (1).jpg",
        altText: "Asus Vivobook S15",
        name: "Acer Swift 3",
        processor: " Intel Core i5-12500H",
        storage: "512GB SSD",
        memory: "16GB",
        graphics: "Intel Integrated graphics",
        os: "Windows 11 Home",
        shopNowLink: "#"
    },
    {
        imageSrc: "../img/Akshay image/lenovo-yogo-7i-1440x1080.jpg.rendition.intel.web.720.405.jpg",
        altText: "Asus Vivobook S15",
        name: "Lenovo Yoga 7",
        processor: "Intel Core i7-1260P ",
        storage: "512GB SSD",
        memory: "16GB",
        graphics: "Integrated Integrated Intel Iris Xe Graphics",
        os: "Windows 11 Home",
        shopNowLink: "#"
    }
];

function createProductHTML(product) {
    return `
        <div class="col-md-4">
            ${product.imageSrc ? `<img src="${product.imageSrc}" alt="${product.altText}" class="v_shopnow_img">` : ''}
            <div class="mb-2" style="line-height: 28px;">
                <a href="#" class="v_acces_intel">${product.name}</a>
                <div><p class="fw-bold d-inline mb-0">Processor: </p><p class="d-inline mb-0">${product.processor}</p></div>
                <div><p class="fw-bold d-inline mb-0">Storage: </p><p class="d-inline mb-0">${product.storage}</p></div>
                <div><p class="fw-bold d-inline mb-0">Memory: </p><p class="d-inline mb-0">${product.memory}</p></div>
                <div><p class="fw-bold d-inline mb-0">Graphics: </p><p class="d-inline mb-0">${product.graphics}</p></div>
                <div class="mb-3"><p class="fw-bold d-inline mb-0">Operating System: </p><p class="d-inline mb-0">${product.os}</p></div>
                <div><a href="${product.shopNowLink}" class="v_shopnow" style="color: white;">Shop now</a></div>
            </div>
        </div>
    `;
}

const productListContainer = document.getElementById('productlist-container');
productList.forEach(product => {
    productListContainer.innerHTML += createProductHTML(product);
});


// function V_show_more(name,id){
//   let ele = document.querySelectorAll(`.${name} .V_hide_col1`)
//   console.log(ele);
//   ele.forEach((el,index)=>{
//       if(index >= id){
//           el.classList.remove('d-none')
//       }
//   })
//   document.querySelector(`.${name} #V_show_btn`).classList.add('d-none')
//   document.querySelector(`.${name} #V_hide_btn`).classList.remove('d-none')
// }

// function V_show_less(name,id){
//   let ele = document.querySelectorAll(`.${name} .V_hide_col1`)
//   console.log(ele);
//   ele.forEach((el,index)=>{
//       if(index >= id){
//           el.classList.add('d-none')
//       }
//   })
//   document.querySelector(`.${name} #V_show_btn`).classList.remove('d-none')
//   document.querySelector(`.${name} #V_hide_btn`).classList.add('d-none')
// }






function showchoose(x) {
  var value = document.getElementsByClassName('hide');
if (x == 1) {
  for (var j = 0; j < value.length; j++) {
      value[j].classList.remove('d-none');
  }
  var data = document.getElementById('showmore');
  data.classList.add('d-none');
  var data1 = document.getElementById('showless');
  data1.classList.remove('d-none')
}
if (x == 2) {
  for (var j = 0; j < value.length; j++) {
      value[j].classList.add('d-none');
  }
  var data = document.getElementById('showmore');
  data.classList.remove('d-none');
  var data1 = document.getElementById('showless');
  data1.classList.add('d-none')
}
if (x == 3) {
  for (var j = 0; j < value.length; j++) {
      value[j].classList.remove('d-none');
  }
  var data = document.getElementById('showmore2');
  data.classList.add('d-none');
  var data1 = document.getElementById('showless2');
  data1.classList.remove('d-none')
}
if (x == 4) {
  for (var j = 0; j < value.length; j++) {
      value[j].classList.add('d-none');
  }
  var data = document.getElementById('showmore2');
  data.classList.remove('d-none');
  var data1 = document.getElementById('showless2');
  data1.classList.add('d-none')
}
if (x == 5) {
  for (var j = 0; j < value.length; j++) {
      value[j].classList.remove('d-none');
  }
  var data = document.getElementById('showmore3');
  data.classList.add('d-none');
  var data1 = document.getElementById('showless3');
  data1.classList.remove('d-none')
}
if (x == 6) {
  for (var j = 0; j < value.length; j++) {
      value[j].classList.add('d-none');
  }
  var data = document.getElementById('showmore3');
  data.classList.remove('d-none');
  var data1 = document.getElementById('showless3');
  data1.classList.add('d-none')
}
if (x == 7) {
  for (var j = 0; j < value.length; j++) {
      value[j].classList.remove('d-none');
  }
  var data = document.getElementById('showmore4');
  data.classList.add('d-none');
  var data1 = document.getElementById('showless4');
  data1.classList.remove('d-none')
}
if (x == 8) {
  for (var j = 0; j < value.length; j++) {
      value[j].classList.add('d-none');
  }
  var data = document.getElementById('showmore4');
  data.classList.remove('d-none');
  var data1 = document.getElementById('showless4');
  data1.classList.add('d-none')
}
if (x == 9) {
  for (var j = 0; j < value.length; j++) {
      value[j].classList.remove('d-none');
  }
  var data = document.getElementById('showmore5');
  data.classList.add('d-none');
  var data1 = document.getElementById('showless5');
  data1.classList.remove('d-none')
}
if (x == 10) {
  for (var j = 0; j < value.length; j++) {
      value[j].classList.add('d-none');
  }
  var data = document.getElementById('showmore5');
  data.classList.remove('d-none');
  var data1 = document.getElementById('showless5');
  data1.classList.add('d-none')
}
if (x == 11) {
  for (var j = 0; j < value.length; j++) {
      value[j].classList.remove('d-none');
  }
  var data = document.getElementById('showmore6');
  data.classList.add('d-none');
  var data1 = document.getElementById('showless6');
  data1.classList.remove('d-none')
}
if (x == 12) {
  for (var j = 0; j < value.length; j++) {
      value[j].classList.add('d-none');
  }
  var data = document.getElementById('showmore6');
  data.classList.remove('d-none');
  var data1 = document.getElementById('showless6');
  data1.classList.add('d-none')
}
if (x == 13) {
  for (var j = 0; j < value.length; j++) {
      value[j].classList.remove('d-none');
  }
  var data = document.getElementById('showmore7');
  data.classList.add('d-none');
  var data1 = document.getElementById('showless7');
  data1.classList.remove('d-none')
}
if (x == 14) {
  for (var j = 0; j < value.length; j++) {
      value[j].classList.add('d-none');
  }
  var data = document.getElementById('showmore7');
  data.classList.remove('d-none');
  var data1 = document.getElementById('showless7');
  data1.classList.add('d-none')
}
if (x == 15) {
  for (var j = 0; j < value.length; j++) {
      value[j].classList.remove('d-none');
  }
  var data = document.getElementById('showmore8');
  data.classList.add('d-none');
  var data1 = document.getElementById('showless8');
  data1.classList.remove('d-none')
}
if (x == 16) {
  for (var j = 0; j < value.length; j++) {
      value[j].classList.add('d-none');
  }
  var data = document.getElementById('showmore8');
  data.classList.remove('d-none');
  var data1 = document.getElementById('showless8');
  data1.classList.add('d-none')
}
}