document.addEventListener('DOMContentLoaded', () => {
    const activeMenu = localStorage.getItem('activeMenu');
    const activeSubmenu = localStorage.getItem('activeSubmenu');
    const activePrgmMenu = localStorage.getItem('activePrgmMenu');
    const activePrgmSubmenu = localStorage.getItem('activePrgmSubmenu');
    const lastActiveOption = localStorage.getItem('lastActiveOption');

    if (activeMenu && lastActiveOption === 'db-option-1') {
        document.getElementById(activeMenu).style.display = 'block';
        if (activeSubmenu) {
            document.getElementById(activeSubmenu).style.display = 'block';
        }
    } else if (activePrgmMenu && lastActiveOption === 'db-option-2') {
        document.getElementById(activePrgmMenu).style.display = 'block';
        if (activePrgmSubmenu) {
            document.getElementById(activePrgmSubmenu).style.display = 'block';
        }
    } else if (activePrgmMenu && lastActiveOption === 'db-option-3') {
        document.getElementById(activePrgmMenu).style.display = 'block';
        if (activePrgmSubmenu) {
            document.getElementById(activePrgmSubmenu).style.display = 'block';
        }
    }
});

function activateMenu(li) {
    const parentMenu = li.parentElement;
    const allItems = parentMenu.querySelectorAll('li');
    allItems.forEach(item => item.classList.remove('db_active_menu'));
    li.classList.add('db_active_menu');
}

function setActiveMenu(menuId, submenuId = null) {
    localStorage.setItem('activeMenu', menuId);
    localStorage.setItem('lastActiveOption', 'db-option-1');
    if (submenuId) {
        localStorage.setItem('activeSubmenu', submenuId);
    } else {
        localStorage.removeItem('activeSubmenu');
    }
}

function setActivePrgmMenu(prgmMenuId, prgmSubmenuId = null) {
    localStorage.setItem('activePrgmMenu', prgmMenuId);
    localStorage.setItem('lastActiveOption', 'db-option-2');
    if (prgmSubmenuId) {
        localStorage.setItem('activePrgmSubmenu', prgmSubmenuId);
    } else {
        localStorage.removeItem('activePrgmSubmenu');
    }
}

function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    content.style.display = (content.style.display === 'block') ? 'none' : 'block';
}

document.getElementById('db-option-1').addEventListener('click', function (event) {
    event.preventDefault();
    const menuContainer = document.getElementById('db-nested-menu-container');
    const prgmmenu = document.getElementById('db-nested-prgm-content');
    const prgmmenu1_1 = document.getElementById('db-nested-prgm-content1.1');
    const prgmmenu2_1 = document.getElementById('db-nested-prgm-content2.1');
    const submenuContent1_1_3 = document.getElementById('db-nested-menu1.3-content');
    const prgmmenu3_1 = document.getElementById('db-nested-prgm-content3.1');
    const prgmmenu4_1 = document.getElementById('db-nested-prgm-content4.1');
    const prgmmenu4_1_1 = document.getElementById('db-nested-more-4.1');
    const submenuContent = document.getElementById('db-nested-menu-content');
    const submenuContent2 = document.getElementById('db-db-nested-menu-content2');
    const submenuContent3 = document.getElementById('nested-menu1.1-content');
    const submenuContent4 = document.getElementById('db-nested-menu-content1');

    if (menuContainer.style.display === 'block') {
        menuContainer.style.display = 'none';
        prgmmenu.style.display = 'none';
        prgmmenu.style.display = 'none';
        prgmmenu1_1.style.display = 'none';
        prgmmenu2_1.style.display = 'none';
        prgmmenu3_1.style.display = 'none';
        prgmmenu4_1.style.display = 'none';
        prgmmenu4_1_1.style.display = 'none';
        submenuContent.style.display = 'none';
        submenuContent2.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        setActiveMenu('');
    } else {
        menuContainer.style.display = 'block';
        prgmmenu.style.display = 'none';
        prgmmenu1_1.style.display = 'none';
        prgmmenu2_1.style.display = 'none';
        prgmmenu3_1.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';
        prgmmenu4_1.style.display = 'none';
        prgmmenu4_1_1.style.display = 'none';
        submenuContent.style.display = 'none';
        submenuContent2.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container');
    }
    localStorage.setItem('lastActiveOption', 'db-option-1');
});

document.getElementById('db-nested-menu1').addEventListener('click', function (event) {
    event.preventDefault();
    const submenuContent = document.getElementById('db-nested-menu-content');
    const submenuContent2 = document.getElementById('db-db-nested-menu-content2');
    const submenuContent3 = document.getElementById('nested-menu1.1-content');
    const submenuContent1_1_3 = document.getElementById('db-nested-menu1.3-content');
    const submenuContent4 = document.getElementById('db-nested-menu-content1');
    const submenuContent5 = document.getElementById('db-nested-menu1.2.1-content');

    if (submenuContent.style.display === 'block') {
        submenuContent.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';
        setActiveMenu('db-nested-menu-container');
    } else {
        submenuContent.style.display = 'block';
        submenuContent2.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';

        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container', 'db-nested-menu-content');
    }
});

document.getElementById('nested-menu2').addEventListener('click', function (event) {
    event.preventDefault();
    const submenuContent = document.getElementById('db-nested-menu-content');
    const submenuContent1 = document.getElementById('db-nested-menu-content1');
    const submenuContent1_1 = document.getElementById('nested-menu1.1-content');
    const submenuContent2 = document.getElementById('db-db-nested-menu-content2');
    const submenuContent1_1_3 = document.getElementById('db-nested-menu1.3-content');

    if (submenuContent2.style.display === 'block') {
        submenuContent2.style.display = 'none';
        submenuContent1.style.display = 'none';
        submenuContent1_1.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';
        setActiveMenu('db-nested-menu-container');
    } else {
        submenuContent2.style.display = 'block';
         submenuContent1.style.display = 'none';
        submenuContent.style.display = 'none';
        submenuContent1_1.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';

        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container', 'db-db-nested-menu-content2');
    }
});

document.getElementById('db-nested-menu-1.1').addEventListener('click', function (event) {
    event.preventDefault();
    const submenuContent1 = document.getElementById('db-nested-menu-content1');
    const submenuContent2 = document.getElementById('nested-menu1.1-content');
    const submenuContent3 = document.getElementById('db-nested-menu1.3-content');
    const submenuContent1_2_1 = document.getElementById('db-nested-menu1.2.1-content');
    toggleContent('nested-menu1.1-content');
    submenuContent1.style.display = 'none';
    submenuContent3.style.display = 'none';
    submenuContent1_2_1.style.display = 'none';
    activateMenu(this.parentElement);
    setActiveMenu('db-nested-menu-container', 'db-nested-menu-content', 'nested-menu1.1-content');
    document.getElementById("nested-menu1.1-content").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

document.getElementById('db-nested-menu-1.2').addEventListener('click', function (event) {
    event.preventDefault();
    const submenuContent1 = document.getElementById('db-nested-menu-content1');
    const submenuContent2 = document.getElementById('nested-menu1.1-content');
    const nestedMenu1_2_1 = document.getElementById('db-nested-menu-1.2.1');
    const nestedMenu1_2_1_content = document.getElementById('db-nested-menu1.2.1-content');
    const submenuContent3 = document.getElementById('db-nested-menu1.3-content');

    if (submenuContent1.style.display === 'block') {
        submenuContent1.style.display = 'none';
        submenuContent2.style.display = 'none';
        submenuContent3.style.display = 'none';
        nestedMenu1_2_1.style.display = 'none';
        nestedMenu1_2_1_content.style.display = 'none';

        setActiveMenu('db-nested-menu-container');
    } else {
        document.getElementById("db-nested-menu-content1").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        submenuContent1.style.display = 'block';
        submenuContent2.style.display = 'none';
        nestedMenu1_2_1.style.display = 'none';
        submenuContent3.style.display = 'none';
        nestedMenu1_2_1_content.style.display = 'none';
        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container', 'db-nested-menu-content', 'db-nested-menu-content1');
    }



});

document.getElementById('db-nested-menu-1.2.1').addEventListener('click', function (event) {
    event.preventDefault();
    const submenuContent1 = document.getElementById('db-nested-menu-content1');
    const nestedMenu1_2_1_content = document.getElementById('db-nested-menu1.2.1-content');

    if (nestedMenu1_2_1_content.style.display === 'block') {
        nestedMenu1_2_1_content.style.display = 'none';
    } else {
        nestedMenu1_2_1_content.style.display = 'block';
        document.getElementById("db-nested-menu1.2.1-content").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    activateMenu(this.parentElement);
    setActiveMenu('db-nested-menu-container', 'db-nested-menu-content', 'db-nested-menu1.2.1-content');
});

document.getElementById('db-nested-menu-1.3').addEventListener('click', function (event) {
    event.preventDefault();
    const submenuContent1 = document.getElementById('db-nested-menu-content1');
    const submenuContent2 = document.getElementById('db-nested-menu1.2.1-content');
    const submenuContent3 = document.getElementById('db-nested-menu1.3-content');
    const submenuContent1_1_1 = document.getElementById('nested-menu1.1-content');

    if (submenuContent3.style.display === 'block') {
        submenuContent1.style.display = 'none';
        submenuContent2.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent1_1_1.style.display = 'none';

        
    } else {
        submenuContent1.style.display = 'none';
        submenuContent2.style.display = 'none';
        submenuContent3.style.display = 'block';
        submenuContent1_1_1.style.display = 'none';
        document.getElementById("db-nested-menu1.3-content").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
       
        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container', 'db-nested-menu-content', 'db-nested-menu1.3-content');
    }

   


    // activateMenu(this.parentElement);
    
});

document.getElementById('db-option-2').addEventListener('click', function (event) {
    event.preventDefault();
    const prgmmenu = document.getElementById('db-nested-prgm-content');
    const prgmmenu1_1 = document.getElementById('db-nested-prgm-content1.1');
    const menuContainer = document.getElementById('db-nested-menu-container');
    const submenuContent = document.getElementById('db-nested-menu-content');
    const submenuContent2 = document.getElementById('db-db-nested-menu-content2');
    const submenuContent3 = document.getElementById('nested-menu1.1-content');
    const submenuContent4 = document.getElementById('db-nested-menu-content1');
    const prgmmenu4_1_1 = document.getElementById('db-nested-more-4.1');
    const submenuContent5 = document.getElementById('db-nested-menu1.3-content');
    const prgmmenu2_1 = document.getElementById('db-nested-prgm-content2.1');
    const prgmmenu3_1 = document.getElementById('db-nested-prgm-content3.1');
    const prgmmenu4_1 = document.getElementById('db-nested-prgm-content4.1');

    if (prgmmenu.style.display === 'block') {
        prgmmenu.style.display = 'none';
        prgmmenu1_1.style.display = 'none';
        prgmmenu2_1.style.display = 'none';
        prgmmenu3_1.style.display = 'none';
        prgmmenu4_1.style.display = 'none';
        prgmmenu4_1_1.style.display = 'none';
        menuContainer.style.display = 'none';
        submenuContent.style.display = 'none';
        submenuContent2.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';
        setActivePrgmMenu('');
    } else {
        prgmmenu.style.display = 'block';
        prgmmenu1_1.style.display = 'none';
        prgmmenu2_1.style.display = 'none';
        prgmmenu3_1.style.display = 'none';
        prgmmenu4_1.style.display = 'none';
        prgmmenu4_1_1.style.display = 'none';
        menuContainer.style.display = 'none';
        submenuContent.style.display = 'none';
        submenuContent2.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';
        activateMenu(this.parentElement);
        setActivePrgmMenu('db-nested-prgm-content');
    }
    localStorage.setItem('lastActiveOption', 'db-option-2');
});

document.getElementById('db-nested-prgm-content1').addEventListener('click', function (event) {
    event.preventDefault();
    const prgmmenu = document.getElementById('db-nested-prgm-content1.1');
    const prgmmenu2_1 = document.getElementById('db-nested-prgm-content2.1');
    const prgmmenu3_1 = document.getElementById('db-nested-prgm-content3.1');
    const prgmmenu4_1 = document.getElementById('db-nested-prgm-content4.1');

    if (prgmmenu.style.display === 'block') {
        prgmmenu.style.display = 'none';
        setActivePrgmMenu('db-nested-prgm-content');
    } else {
        prgmmenu.style.display = 'block';
        prgmmenu2_1.style.display = 'none';
        prgmmenu3_1.style.display = 'none';
        prgmmenu4_1.style.display = 'none';
        activateMenu(this.parentElement);
        setActivePrgmMenu('db-nested-prgm-content', 'db-nested-prgm-content1.1');
    }
});

document.getElementById('db-nested-prgm-content2').addEventListener('click', function (event) {
    event.preventDefault();
    const prgmmenu1_1 = document.getElementById('db-nested-prgm-content1.1');
    const prgmmenu = document.getElementById('db-nested-prgm-content2.1');
    const prgmmenu3_1 = document.getElementById('db-nested-prgm-content3.1');
    const prgmmenu4_1 = document.getElementById('db-nested-prgm-content4.1');

    if (prgmmenu.style.display === 'block') {
        prgmmenu.style.display = 'none';
        setActivePrgmMenu('db-nested-prgm-content');
    } else {
        prgmmenu.style.display = 'block';
        prgmmenu1_1.style.display = 'none';
        prgmmenu3_1.style.display = 'none';
        prgmmenu4_1.style.display = 'none';
        activateMenu(this.parentElement);
        setActivePrgmMenu('db-nested-prgm-content', 'db-nested-prgm-content2.1');
    }
});

document.getElementById('db-nested-prgm-content3').addEventListener('click', function (event) {
    event.preventDefault();
    const prgmmenu1_1 = document.getElementById('db-nested-prgm-content1.1');
    const prgmmenu2_1 = document.getElementById('db-nested-prgm-content2.1');
    const prgmmenu = document.getElementById('db-nested-prgm-content3.1');
    const prgmmenu4_1 = document.getElementById('db-nested-prgm-content4.1');

    if (prgmmenu.style.display === 'block') {
        prgmmenu.style.display = 'none';
        setActivePrgmMenu('db-nested-prgm-content');
    } else {
        prgmmenu.style.display = 'block';
        prgmmenu1_1.style.display = 'none';
        prgmmenu2_1.style.display = 'none';
        prgmmenu4_1.style.display = 'none';
        activateMenu(this.parentElement);
        setActivePrgmMenu('db-nested-prgm-content', 'db-nested-prgm-content3.1');
    }
});

document.getElementById('db-nested-prgm-content4').addEventListener('click', function (event) {
    event.preventDefault();
    const prgmmenu1_1 = document.getElementById('db-nested-prgm-content1.1');
    const prgmmenu2_1 = document.getElementById('db-nested-prgm-content2.1');
    const prgmmenu3_1 = document.getElementById('db-nested-prgm-content3.1');

    const prgmmenu = document.getElementById('db-nested-prgm-content4.1');

    if (prgmmenu.style.display === 'block') {
        prgmmenu.style.display = 'none';
        setActivePrgmMenu('db-nested-prgm-content');
    } else {
        prgmmenu.style.display = 'block';
        prgmmenu1_1.style.display = 'none';
        prgmmenu2_1.style.display = 'none';
        prgmmenu3_1.style.display = 'none';
        activateMenu(this.parentElement);
        setActivePrgmMenu('db-nested-prgm-content', 'db-nested-prgm-content4.1');
    }
});

document.getElementById('option-3').addEventListener('click', function (event) {
    event.preventDefault();
    const prgmmenu = document.getElementById('db-nested-prgm-content');
    const prgmmenu1_1 = document.getElementById('db-nested-prgm-content1.1');
    const prgmmenu2_1 = document.getElementById('db-nested-prgm-content2.1');
    const prgmmenu3_1 = document.getElementById('db-nested-prgm-content3.1');
    const prgmmenu4_1 = document.getElementById('db-nested-prgm-content4.1');
    const prgmmenu4_1_1 = document.getElementById('db-nested-more-4.1');
    const menuContainer = document.getElementById('db-nested-menu-container');
    const submenuContent = document.getElementById('db-nested-menu-content');
    const submenuContent2 = document.getElementById('db-db-nested-menu-content2');
    const submenuContent3 = document.getElementById('nested-menu1.1-content');
    const submenuContent4 = document.getElementById('db-nested-menu-content1');
    const submenuContent5 = document.getElementById('db-nested-menu1.3-content');

    // Hide other sections and show db-nested-more-4.1
    if (prgmmenu4_1_1.style.display === 'block') {
        prgmmenu4_1_1.style.display = 'none';
        prgmmenu.style.display = 'none';
        prgmmenu1_1.style.display = 'none';
        prgmmenu2_1.style.display = 'none';
        prgmmenu3_1.style.display = 'none';
        prgmmenu4_1.style.display = 'none';
        menuContainer.style.display = 'none';
        submenuContent.style.display = 'none';
        submenuContent2.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';
        setActivePrgmMenu('');
    } else {
        prgmmenu4_1_1.style.display = 'block';
        prgmmenu.style.display = 'none';
        prgmmenu1_1.style.display = 'none';
        prgmmenu2_1.style.display = 'none';
        prgmmenu3_1.style.display = 'none';
        prgmmenu4_1.style.display = 'none';
        menuContainer.style.display = 'none';
        submenuContent.style.display = 'none';
        submenuContent2.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';
        activateMenu(this.parentElement);
        setActivePrgmMenu('db-nested-prgm-content', 'db-nested-more-4.1');
    }
    localStorage.setItem('lastActiveOption', 'db-option-3');
});


// Add jQuery code
$(document).ready(function () {
    $(".one").click(function () {
        $(this).addClass("db_active").siblings().removeClass("db_active");
    });
});


