//////////////////////////// navbar //////////////////////////////////////
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
});
//////////////////////////// navbar //////////////////////////////////////
//////////////////////////// show more show less //////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    const hiddenItems = document.querySelectorAll('.hidden-mobile');
    let isExpanded = false;
  
    toggleBtn.addEventListener('click', function() {
      isExpanded = !isExpanded;
      
      hiddenItems.forEach(item => {
        item.style.display = isExpanded ? 'block' : 'none';
      });
  
      toggleBtn.textContent = isExpanded ? 'Show Less' : 'Show More';
    });
  });
// document.addEventListener('DOMContentLoaded', function() {
//     const toggleBtn = document.getElementById('toggleBtn');
//     const hiddenItems = document.querySelectorAll('.hidden-forthimg');
//     let isExpanded = false;
  
//     toggleBtn.addEventListener('click', function() {
//       isExpanded = !isExpanded;
      
//       hiddenItems.forEach(item => {
//         item.style.display = isExpanded ? 'block' : 'none';
//       });
  
//       toggleBtn.textContent = isExpanded ? 'Show Less' : 'Show More';
//     });
//   });
//////////////////////////// show more show less //////////////////////////////////////