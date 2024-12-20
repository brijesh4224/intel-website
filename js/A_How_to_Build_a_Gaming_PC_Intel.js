
document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.V_sticky_bar')) {
        const nav = document.querySelector('.V_ptag');
        const navLinks = document.querySelectorAll('.V_sticky_bar a');
        const sections = document.querySelectorAll('section[id]');
        console.log(nav)
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

            // Section highlighting
            sections.forEach(section => {
                const sectionTop = section.offsetTop - nav.clientHeight;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop && window.pageYOffset <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('V_ptag_active');
                        if (link.getAttribute('href') === `#${section.id}`) {
                            link.classList.add('V_ptag_active');

                            // Ensure the active link is visible in the nav bar
                            const navBar = document.querySelector('.V_sticky_bar');
                            const activeLink = document.querySelector('.V_sticky_bar a.V_ptag_active');
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













document.querySelectorAll('.V_slider_container').forEach(sliderContainer => {
    const sliderHandle = sliderContainer.querySelector('.slider-handle');
    const overlay = sliderContainer.querySelector('.overlay');

    function slideMove(e) {
        let rect = sliderContainer.getBoundingClientRect();
        let xPos = e.clientX - rect.left;

        if (xPos < 0) xPos = 0;
        if (xPos > rect.width) xPos = rect.width;

        sliderHandle.style.left = xPos + 'px';
        sliderHandle.style.transform = `translateX(-50%)`;

        // Adjust the clip-path to change the visibility of the overlay (before image)
        overlay.style.clipPath = `inset(0 ${100 - (xPos / rect.width * 100)}% 0 0)`;
    }

    sliderHandle.onmousedown = function (event) {
        event.preventDefault();
        document.onmousemove = slideMove;

        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };

    // Touch support for mobile devices
    sliderHandle.addEventListener('touchstart', function (e) {
        e.preventDefault();
        document.addEventListener('touchmove', function (ev) {
            let touch = ev.touches[0];
            let rect = sliderContainer.getBoundingClientRect();
            let xPos = touch.clientX - rect.left;

            if (xPos < 0) xPos = 0;
            if (xPos > rect.width) xPos = rect.width;

            sliderHandle.style.left = xPos + 'px';
            sliderHandle.style.transform = `translateX(-50%)`;

            // Adjust the clip-path to change the visibility of the overlay (before image)
            overlay.style.clipPath = `inset(0 ${100 - (xPos / rect.width * 100)}% 0 0)`;
        });

        document.addEventListener('touchend', function () {
            document.ontouchmove = null;
            document.ontouchend = null;
        });
    });
});
























function showchoose(x) {
    var value = document.getElementsByClassName('hide');
  if (x == 1) {
    for (var j = 0; j < value.length; j++) {
        value[j].classList.remove('d-none');
    }
    var text= document.getElementById('text')
    text.classList.add('d-none');
    var img= document.getElementById('img');
    img.classList.remove('d-none');
    
    var data = document.getElementById('showmore');
    data.classList.add('d-none');
    var data1 = document.getElementById('showless');
    data1.classList.remove('d-none');
  }
  if (x == 2) {
    for (var j = 0; j < value.length; j++) {
        value[j].classList.add('d-none');
    }
    var img= document.getElementById('img')
    img.classList.add('d-none');
   
    var text= document.getElementById('text')
    text.classList.remove('d-none');
    var data = document.getElementById('showmore');
    data.classList.remove('d-none');
    var data1 = document.getElementById('showless');
    data1.classList.add('d-none');
  }
  if (x == 3) {
    for (var j = 0; j < value.length; j++) {
        value[j].classList.remove('d-none');
    }
    var text= document.getElementById('text1')
    text.classList.add('d-none');
    var img= document.getElementById('img1');
    img.classList.remove('d-none');
    
    var data = document.getElementById('showmore1');
    data.classList.add('d-none');
    var data1 = document.getElementById('showless1');
    data1.classList.remove('d-none');
  }
  if (x == 4) {
    for (var j = 0; j < value.length; j++) {
        value[j].classList.add('d-none');
    }
    var img= document.getElementById('img1')
    img.classList.add('d-none');
   
    var text= document.getElementById('text1')
    text.classList.remove('d-none');
    var data = document.getElementById('showmore1');
    data.classList.remove('d-none');
    var data1 = document.getElementById('showless1');
    data1.classList.add('d-none');
  }
  if (x == 5) {
    for (var j = 0; j < value.length; j++) {
        value[j].classList.remove('d-none');
    }
    var text= document.getElementById('text2')
    text.classList.add('d-none');
    var img= document.getElementById('img2');
    img.classList.remove('d-none');
    
    var data = document.getElementById('showmore2');
    data.classList.add('d-none');
    var data1 = document.getElementById('showless2');
    data1.classList.remove('d-none');
  }
  if (x == 6) {
    for (var j = 0; j < value.length; j++) {
        value[j].classList.add('d-none');
    }
    var img= document.getElementById('img2')
    img.classList.add('d-none');
   
    var text= document.getElementById('text2')
    text.classList.remove('d-none');
    var data = document.getElementById('showmore2');
    data.classList.remove('d-none');
    var data1 = document.getElementById('showless2');
    data1.classList.add('d-none');
  }
  if (x == 7) {
    for (var j = 0; j < value.length; j++) {
        value[j].classList.remove('d-none');
    }
    var text= document.getElementById('text3')
    text.classList.add('d-none');
    var img= document.getElementById('img3');
    img.classList.remove('d-none');
    
    var data = document.getElementById('showmore3');
    data.classList.add('d-none');
    var data1 = document.getElementById('showless3');
    data1.classList.remove('d-none');
  }
  if (x == 8) {
    for (var j = 0; j < value.length; j++) {
        value[j].classList.add('d-none');
    }
    var img= document.getElementById('img3')
    img.classList.add('d-none');
   
    var text= document.getElementById('text3')
    text.classList.remove('d-none');
    var data = document.getElementById('showmore3');
    data.classList.remove('d-none');
    var data1 = document.getElementById('showless3');
    data1.classList.add('d-none');
  }
  if (x == 9) {
    for (var j = 0; j < value.length; j++) {
        value[j].classList.remove('d-none');
    }
    var text= document.getElementById('text4')
    text.classList.add('d-none');
    var img= document.getElementById('img4');
    img.classList.remove('d-none');
    
    var data = document.getElementById('showmore4');
    data.classList.add('d-none');
    var data1 = document.getElementById('showless4');
    data1.classList.remove('d-none');
  }
  if (x == 10) {
    for (var j = 0; j < value.length; j++) {
        value[j].classList.add('d-none');
    }
    var img= document.getElementById('img4')
    img.classList.add('d-none');
   
    var text= document.getElementById('text4')
    text.classList.remove('d-none');
    var data = document.getElementById('showmore4');
    data.classList.remove('d-none');
    var data1 = document.getElementById('showless4');
    data1.classList.add('d-none');
  }
  if (x == 11) {
    for (var j = 0; j < value.length; j++) {
        value[j].classList.remove('d-none');
    }
    var text= document.getElementById('text5')
    text.classList.add('d-none');
    var img= document.getElementById('img5');
    img.classList.remove('d-none');
    
    var data = document.getElementById('showmore5');
    data.classList.add('d-none');
    var data1 = document.getElementById('showless5');
    data1.classList.remove('d-none');
  }
  if (x == 12) {
    for (var j = 0; j < value.length; j++) {
        value[j].classList.add('d-none');
    }
    var img= document.getElementById('img5')
    img.classList.add('d-none');
   
    var text= document.getElementById('text5')
    text.classList.remove('d-none');
    var data = document.getElementById('showmore5');
    data.classList.remove('d-none');
    var data1 = document.getElementById('showless5');
    data1.classList.add('d-none');
  }
  if (x == 13) {
    for (var j = 0; j < value.length; j++) {
        value[j].classList.remove('d-none');
    }
    var text= document.getElementById('text6')
    text.classList.add('d-none');
    var img= document.getElementById('img6');
    img.classList.remove('d-none');
    
    var data = document.getElementById('showmore6');
    data.classList.add('d-none');
    var data1 = document.getElementById('showless6');
    data1.classList.remove('d-none');
  }
  if (x == 14) {
    for (var j = 0; j < value.length; j++) {
        value[j].classList.add('d-none');
    }
    var img= document.getElementById('img6')
    img.classList.add('d-none');
   
    var text= document.getElementById('text6')
    text.classList.remove('d-none');
    var data = document.getElementById('showmore6');
    data.classList.remove('d-none');
    var data1 = document.getElementById('showless6');
    data1.classList.add('d-none');
  }
  if (x == 15) {
    for (var j = 0; j < value.length; j++) {
        value[j].classList.remove('d-none');
    }
    var text= document.getElementById('text7')
    text.classList.add('d-none');
    var img= document.getElementById('img7');
    img.classList.remove('d-none');
    
    var data = document.getElementById('showmore7');
    data.classList.add('d-none');
    var data1 = document.getElementById('showless7');
    data1.classList.remove('d-none');
  }
  if (x == 16) {
    for (var j = 0; j < value.length; j++) {
        value[j].classList.add('d-none');
    }
    var img= document.getElementById('img7')
    img.classList.add('d-none');
   
    var text= document.getElementById('text7')
    text.classList.remove('d-none');
    var data = document.getElementById('showmore7');
    data.classList.remove('d-none');
    var data1 = document.getElementById('showless7');
    data1.classList.add('d-none');
  }
  if (x == 17) {
    for (var j = 0; j < value.length; j++) {
        value[j].classList.remove('d-none');
    }
    var text= document.getElementById('text8')
    text.classList.add('d-none');
    var img= document.getElementById('img8');
    img.classList.remove('d-none');
    
    var data = document.getElementById('showmore8');
    data.classList.add('d-none');
    var data1 = document.getElementById('showless8');
    data1.classList.remove('d-none');
  }
  if (x == 18) {
    for (var j = 0; j < value.length; j++) {
        value[j].classList.add('d-none');
    }
    var img= document.getElementById('img8')
    img.classList.add('d-none');
   
    var text= document.getElementById('text8')
    text.classList.remove('d-none');
    var data = document.getElementById('showmore8');
    data.classList.remove('d-none');
    var data1 = document.getElementById('showless8');
    data1.classList.add('d-none');
  }
  if (x == 19) {
    for (var j = 0; j < value.length; j++) {
        value[j].classList.remove('d-none');
    }
    var text= document.getElementById('text9')
    text.classList.add('d-none');
    var img= document.getElementById('img9');
    img.classList.remove('d-none');
    
    var data = document.getElementById('showmore9');
    data.classList.add('d-none');
    var data1 = document.getElementById('showless9');
    data1.classList.remove('d-none');
  }
  if (x == 20) {
    for (var j = 0; j < value.length; j++) {
        value[j].classList.add('d-none');
    }
    var img= document.getElementById('img9')
    img.classList.add('d-none');
   
    var text= document.getElementById('text9')
    text.classList.remove('d-none');
    var data = document.getElementById('showmore9');
    data.classList.remove('d-none');
    var data1 = document.getElementById('showless9');
    data1.classList.add('d-none');
  }
}