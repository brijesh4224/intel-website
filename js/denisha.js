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
    const db_fgpa_menu = document.getElementById('db-fpga-menu');
    const db_graphics_menu = document.getElementById('db-graphics-menu');
    const db_intel_nuc_menu = document.getElementById('db-intel-nuc-menu');
    const db_Server_Products_menu = document.getElementById('db-Server-Products-menu');
    const db_memory_storage_menu = document.getElementById('db-memory-storage-menu');
    const db_service_menu = document.getElementById('db-service-menu');
    const db_processor_menu = document.getElementById('db-processor-menu');
    const db_software_menu = document.getElementById('db-software-menu');
    const db_Technologies_menu = document.getElementById('db-Technologies-menu');
    const db_Wireless_menu = document.getElementById('db-Wireless-menu');
    const submenuContent4 = document.getElementById('db-nested-menu-content1');
    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_data_center_submenu = document.getElementById('db-data-center-submenu');

    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');




    if (menuContainer.style.display === 'block') {
        menuContainer.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        prgmmenu.style.display = 'none';
        prgmmenu.style.display = 'none';
        prgmmenu1_1.style.display = 'none';
        prgmmenu2_1.style.display = 'none';
        prgmmenu3_1.style.display = 'none';
        db_intel_nuc_menu.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_processor_menu.style.display = 'none';
        db_graphics_menu.style.display = 'none';
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
        db_intel_killer.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        prgmmenu.style.display = 'none';
        prgmmenu1_1.style.display = 'none';
        prgmmenu2_1.style.display = 'none';
        prgmmenu3_1.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_processor_menu.style.display = 'none';
        db_graphics_menu.style.display = 'none';
        prgmmenu4_1.style.display = 'none';
        prgmmenu4_1_1.style.display = 'none';
        submenuContent.style.display = 'none';
        db_intel_nuc_menu.style.display = 'none';
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
    const db_fgpa_menu = document.getElementById('db-fpga-menu');
    const db_graphics_menu = document.getElementById('db-graphics-menu');
    const db_intel_nuc_menu = document.getElementById('db-intel-nuc-menu');
    const db_Server_Products_menu = document.getElementById('db-Server-Products-menu');
    const db_memory_storage_menu = document.getElementById('db-memory-storage-menu');
    const db_service_menu = document.getElementById('db-service-menu');
    const db_processor_menu = document.getElementById('db-processor-menu');
    const db_software_menu = document.getElementById('db-software-menu');
    const db_Technologies_menu = document.getElementById('db-Technologies-menu');
    const db_Wireless_menu = document.getElementById('db-Wireless-menu');
    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_data_center_submenu = document.getElementById('db-data-center-submenu');

    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');



    if (submenuContent.style.display === 'block') {
        submenuContent.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_processor_menu.style.display = 'none';
        db_graphics_menu.style.display = 'none';
        submenuContent3.style.display = 'none';
        db_intel_nuc_menu.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        setActiveMenu('db-nested-menu-container');
    } else {
        submenuContent.style.display = 'block';
        db_intel_nuc_menu.style.display = 'none';
        submenuContent2.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_processor_menu.style.display = 'none';
        submenuContent3.style.display = 'none';
        db_graphics_menu.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
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
    const db_fgpa_menu = document.getElementById('db-fpga-menu');
    const db_graphics_menu = document.getElementById('db-graphics-menu');
    const db_intel_nuc_menu = document.getElementById('db-intel-nuc-menu');
    const db_Server_Products_menu = document.getElementById('db-Server-Products-menu');
    const db_memory_storage_menu = document.getElementById('db-memory-storage-menu');
    const db_service_menu = document.getElementById('db-service-menu');
    const db_processor_menu = document.getElementById('db-processor-menu');
    const db_software_menu = document.getElementById('db-software-menu');
    const db_Technologies_menu = document.getElementById('db-Technologies-menu');
    const db_Wireless_menu = document.getElementById('db-Wireless-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_data_center_submenu = document.getElementById('db-data-center-submenu');
    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');

    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');

    if (submenuContent2.style.display === 'block') {
        submenuContent2.style.display = 'none';
        submenuContent1.style.display = 'none';
        db_graphics_menu.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_processor_menu.style.display = 'none';
        submenuContent1_1.style.display = 'none';
        db_intel_nuc_menu.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';

        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        setActiveMenu('db-nested-menu-container');
    } else {
        submenuContent2.style.display = 'block';
        submenuContent1.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_processor_menu.style.display = 'none';
        db_intel_nuc_menu.style.display = 'none';
        db_graphics_menu.style.display = 'none';
        submenuContent.style.display = 'none';
        submenuContent1_1.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';

        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';

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
    const db_fgpa_menu = document.getElementById('db-fpga-menu');
    const db_graphics_menu = document.getElementById('db-graphics-menu');
    const db_intel_nuc_menu = document.getElementById('db-intel-nuc-menu');
    const db_Server_Products_menu = document.getElementById('db-Server-Products-menu');
    const db_memory_storage_menu = document.getElementById('db-memory-storage-menu');
    const db_service_menu = document.getElementById('db-service-menu');
    const db_processor_menu = document.getElementById('db-processor-menu');
    const db_software_menu = document.getElementById('db-software-menu');
    const db_Technologies_menu = document.getElementById('db-Technologies-menu');
    const db_Wireless_menu = document.getElementById('db-Wireless-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_data_center_submenu = document.getElementById('db-data-center-submenu');
    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');

    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');


    if (prgmmenu.style.display === 'block') {
        prgmmenu.style.display = 'none';
        prgmmenu1_1.style.display = 'none';
        prgmmenu2_1.style.display = 'none';
        prgmmenu3_1.style.display = 'none';
        prgmmenu4_1.style.display = 'none';
        db_intel_nuc_menu.style.display = 'none';
        prgmmenu4_1_1.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_processor_menu.style.display = 'none';
        db_graphics_menu.style.display = 'none';
        menuContainer.style.display = 'none';
        submenuContent.style.display = 'none';
        submenuContent2.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';

        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        setActivePrgmMenu('');
    } else {
        prgmmenu.style.display = 'block';
        prgmmenu1_1.style.display = 'none';
        prgmmenu2_1.style.display = 'none';
        prgmmenu3_1.style.display = 'none';
        prgmmenu4_1.style.display = 'none';
        prgmmenu4_1_1.style.display = 'none';
        menuContainer.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_processor_menu.style.display = 'none';
        db_graphics_menu.style.display = 'none';
        submenuContent.style.display = 'none';
        submenuContent2.style.display = 'none';
        submenuContent3.style.display = 'none';
        db_intel_nuc_menu.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';

        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
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
    const db_fgpa_menu = document.getElementById('db-fpga-menu');
    const db_graphics_menu = document.getElementById('db-graphics-menu');
    const db_intel_nuc_menu = document.getElementById('db-intel-nuc-menu');
    const db_Server_Products_menu = document.getElementById('db-Server-Products-menu');
    const db_memory_storage_menu = document.getElementById('db-memory-storage-menu');
    const db_service_menu = document.getElementById('db-service-menu');
    const db_processor_menu = document.getElementById('db-processor-menu');
    const db_software_menu = document.getElementById('db-software-menu');
    const db_Technologies_menu = document.getElementById('db-Technologies-menu');
    const db_Wireless_menu = document.getElementById('db-Wireless-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_data_center_submenu = document.getElementById('db-data-center-submenu');
    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');

    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');

    // Hide other sections and show db-nested-more-4.1
    if (prgmmenu4_1_1.style.display === 'block') {
        prgmmenu4_1_1.style.display = 'none';
        prgmmenu.style.display = 'none';
        prgmmenu1_1.style.display = 'none';
        prgmmenu2_1.style.display = 'none';
        db_intel_nuc_menu.style.display = 'none';
        prgmmenu3_1.style.display = 'none';
        prgmmenu4_1.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_processor_menu.style.display = 'none';
        db_graphics_menu.style.display = 'none';
        menuContainer.style.display = 'none';
        submenuContent.style.display = 'none';
        submenuContent2.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';

        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        setActivePrgmMenu('');
    } else {
        prgmmenu4_1_1.style.display = 'block';
        prgmmenu.style.display = 'none';
        prgmmenu1_1.style.display = 'none';
        prgmmenu2_1.style.display = 'none';
        prgmmenu3_1.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_processor_menu.style.display = 'none';
        db_graphics_menu.style.display = 'none';
        db_intel_nuc_menu.style.display = 'none';
        prgmmenu4_1.style.display = 'none';
        menuContainer.style.display = 'none';
        submenuContent.style.display = 'none';
        submenuContent2.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';

        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        activateMenu(this.parentElement);
        setActivePrgmMenu('db-nested-prgm-content');
    }
    localStorage.setItem('lastActiveOption', 'db-option-3');
});


// FPGA and Programmable Devices 
document.getElementById('db-fgpa-mainmenu').addEventListener('click', function (event) {
    event.preventDefault();
    const submenuContent = document.getElementById('db-nested-menu-content');
    const submenuContent1 = document.getElementById('db-nested-menu-content1');
    const submenuContent1_1 = document.getElementById('nested-menu1.1-content');
    const submenuContent2 = document.getElementById('db-db-nested-menu-content2');
    const submenuContent1_1_3 = document.getElementById('db-nested-menu1.3-content');
    const db_fgpa_menu = document.getElementById('db-fpga-menu');
    const db_graphics_menu = document.getElementById('db-graphics-menu');
    const db_intel_nuc_menu = document.getElementById('db-intel-nuc-menu');
    const db_Server_Products_menu = document.getElementById('db-Server-Products-menu');
    const db_memory_storage_menu = document.getElementById('db-memory-storage-menu');
    const db_service_menu = document.getElementById('db-service-menu');
    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_data_center_submenu = document.getElementById('db-data-center-submenu');

    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');

    const db_processor_menu = document.getElementById('db-processor-menu');
    const db_software_menu = document.getElementById('db-software-menu');
    const db_Technologies_menu = document.getElementById('db-Technologies-menu');
    const db_Wireless_menu = document.getElementById('db-Wireless-menu');


    if (db_fgpa_menu.style.display === 'block') {
        db_fgpa_menu.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_processor_menu.style.display = 'none';
        db_graphics_menu.style.display = 'none';
        submenuContent2.style.display = 'none';
        db_intel_nuc_menu.style.display = 'none';
        submenuContent.style.display = 'none';
        submenuContent1.style.display = 'none';
        submenuContent1_1.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';
        setActiveMenu('db-nested-menu-container');
    } else {
        db_fgpa_menu.style.display = 'block';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        submenuContent2.style.display = 'none';
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_processor_menu.style.display = 'none';
        db_intel_nuc_menu.style.display = 'none';
        db_graphics_menu.style.display = 'none';
        submenuContent1.style.display = 'none';
        submenuContent.style.display = 'none';
        submenuContent1_1.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';

        document.getElementById("db-fpga-menu").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container', 'db-fgpa-mainmenu');
    }
});

// graphics 
document.getElementById('db-graphics-mainmenu').addEventListener('click', function (event) {
    event.preventDefault();
    const submenuContent = document.getElementById('db-nested-menu-content');
    const submenuContent2 = document.getElementById('db-db-nested-menu-content2');
    const submenuContent3 = document.getElementById('nested-menu1.1-content');
    const submenuContent1_1_3 = document.getElementById('db-nested-menu1.3-content');
    const submenuContent4 = document.getElementById('db-nested-menu-content1');
    const submenuContent5 = document.getElementById('db-nested-menu1.2.1-content');
    const db_fgpa_menu = document.getElementById('db-fpga-menu');
    const db_graphics_menu = document.getElementById('db-graphics-menu');
    const db_intel_nuc_menu = document.getElementById('db-intel-nuc-menu');
    const db_Server_Products_menu = document.getElementById('db-Server-Products-menu');
    const db_memory_storage_menu = document.getElementById('db-memory-storage-menu');
    const db_service_menu = document.getElementById('db-service-menu');
    const db_processor_menu = document.getElementById('db-processor-menu');
    const db_software_menu = document.getElementById('db-software-menu');
    const db_Technologies_menu = document.getElementById('db-Technologies-menu');
    const db_Wireless_menu = document.getElementById('db-Wireless-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_data_center_submenu = document.getElementById('db-data-center-submenu');
    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');

    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');


    if (db_graphics_menu.style.display === 'block') {
        db_graphics_menu.style.display = 'none';
        submenuContent.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_processor_menu.style.display = 'none';
        db_intel_nuc_menu.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';

        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';

        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        setActiveMenu('db-nested-menu-container');
    } else {
        submenuContent.style.display = 'none';
        db_graphics_menu.style.display = 'block'
        db_intel_nuc_menu.style.display = 'none';
        submenuContent2.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_processor_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';

        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';

        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container', 'db-nested-menu-content');
    }
});



// Intel® NUC 
document.getElementById('db-intel-nuc-mainmenu').addEventListener('click', function (event) {
    event.preventDefault();
    const submenuContent = document.getElementById('db-nested-menu-content');
    const submenuContent2 = document.getElementById('db-db-nested-menu-content2');
    const submenuContent3 = document.getElementById('nested-menu1.1-content');
    const submenuContent1_1_3 = document.getElementById('db-nested-menu1.3-content');
    const submenuContent4 = document.getElementById('db-nested-menu-content1');
    const submenuContent5 = document.getElementById('db-nested-menu1.2.1-content');
    const db_fgpa_menu = document.getElementById('db-fpga-menu');
    const db_graphics_menu = document.getElementById('db-graphics-menu');
    const db_intel_nuc_menu = document.getElementById('db-intel-nuc-menu');
    const db_Server_Products_menu = document.getElementById('db-Server-Products-menu');
    const db_memory_storage_menu = document.getElementById('db-memory-storage-menu');
    const db_service_menu = document.getElementById('db-service-menu');
    const db_processor_menu = document.getElementById('db-processor-menu');
    const db_software_menu = document.getElementById('db-software-menu');
    const db_Technologies_menu = document.getElementById('db-Technologies-menu');
    const db_Wireless_menu = document.getElementById('db-Wireless-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_data_center_submenu = document.getElementById('db-data-center-submenu');
    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');

    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');



    if (db_intel_nuc_menu.style.display === 'block') {
        db_intel_nuc_menu.style.display = 'none';
        db_graphics_menu.style.display = 'none';
        submenuContent.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_processor_menu.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        submenuContent5.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';

        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        setActiveMenu('db-nested-menu-container');
    } else {
        submenuContent.style.display = 'none';
        db_intel_nuc_menu.style.display = 'block';
        db_graphics_menu.style.display = 'none'
        submenuContent2.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        db_Server_Products_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_processor_menu.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';

        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';

        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container');
    }
});


// Memory and Storage 
document.getElementById('db-memory-storage-mainmenu').addEventListener('click', function (event) {
    event.preventDefault();
    const submenuContent = document.getElementById('db-nested-menu-content');
    const submenuContent2 = document.getElementById('db-db-nested-menu-content2');
    const submenuContent3 = document.getElementById('nested-menu1.1-content');
    const submenuContent1_1_3 = document.getElementById('db-nested-menu1.3-content');
    const submenuContent4 = document.getElementById('db-nested-menu-content1');
    const submenuContent5 = document.getElementById('db-nested-menu1.2.1-content');
    const db_fgpa_menu = document.getElementById('db-fpga-menu');
    const db_graphics_menu = document.getElementById('db-graphics-menu');
    const db_intel_nuc_menu = document.getElementById('db-intel-nuc-menu');
    const db_Server_Products_menu = document.getElementById('db-Server-Products-menu');
    const db_memory_storage_menu = document.getElementById('db-memory-storage-menu');
    const db_service_menu = document.getElementById('db-service-menu');
    const db_processor_menu = document.getElementById('db-processor-menu');
    const db_software_menu = document.getElementById('db-software-menu');
    const db_Technologies_menu = document.getElementById('db-Technologies-menu');
    const db_Wireless_menu = document.getElementById('db-Wireless-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_data_center_submenu = document.getElementById('db-data-center-submenu');
    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');

    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');

    if (db_memory_storage_menu.display === 'block') {
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_processor_menu.style.display = 'none';
        db_intel_nuc_menu.style.display = 'none';
        db_graphics_menu.style.display = 'none';
        submenuContent.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';

        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        setActiveMenu('db-nested-menu-container');
    } else {
        submenuContent.style.display = 'none';
        db_intel_nuc_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'block';
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_processor_menu.style.display = 'none';
        db_graphics_menu.style.display = 'none'
        submenuContent2.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';

        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';

        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container');
    }
});


// Processors 


document.getElementById('db-processor-mainmenu').addEventListener('click', function (event) {
    event.preventDefault();
    const submenuContent = document.getElementById('db-nested-menu-content');
    const submenuContent2 = document.getElementById('db-db-nested-menu-content2');
    const submenuContent3 = document.getElementById('nested-menu1.1-content');
    const submenuContent1_1_3 = document.getElementById('db-nested-menu1.3-content');
    const submenuContent4 = document.getElementById('db-nested-menu-content1');
    const submenuContent5 = document.getElementById('db-nested-menu1.2.1-content');
    const db_fgpa_menu = document.getElementById('db-fpga-menu');
    const db_graphics_menu = document.getElementById('db-graphics-menu');
    const db_intel_nuc_menu = document.getElementById('db-intel-nuc-menu');
    const db_Server_Products_menu = document.getElementById('db-Server-Products-menu');
    const db_memory_storage_menu = document.getElementById('db-memory-storage-menu');
    const db_service_menu = document.getElementById('db-service-menu');
    const db_processor_menu = document.getElementById('db-processor-menu');
    const db_software_menu = document.getElementById('db-software-menu');
    const db_Technologies_menu = document.getElementById('db-Technologies-menu');
    const db_Wireless_menu = document.getElementById('db-Wireless-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_data_center_submenu = document.getElementById('db-data-center-submenu');
    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');

    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');

    if (db_processor_menu.display === 'block') {
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_processor_menu.style.display = 'none';
        db_intel_nuc_menu.style.display = 'none';
        db_graphics_menu.style.display = 'none';
        submenuContent.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        submenuContent5.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';

        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';

        setActiveMenu('db-nested-menu-container');
    } else {
        submenuContent.style.display = 'none';
        db_processor_menu.style.display = 'block';
        db_intel_nuc_menu.style.display = 'none';
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_graphics_menu.style.display = 'none'
        submenuContent2.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';

        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';

        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container');
    }
});

// Server Products 
document.getElementById('db-Server-Products-mainmenu').addEventListener('click', function (event) {
    event.preventDefault();
    const submenuContent = document.getElementById('db-nested-menu-content');
    const submenuContent2 = document.getElementById('db-db-nested-menu-content2');
    const submenuContent3 = document.getElementById('nested-menu1.1-content');
    const submenuContent1_1_3 = document.getElementById('db-nested-menu1.3-content');
    const submenuContent4 = document.getElementById('db-nested-menu-content1');
    const submenuContent5 = document.getElementById('db-nested-menu1.2.1-content');
    const db_fgpa_menu = document.getElementById('db-fpga-menu');
    const db_graphics_menu = document.getElementById('db-graphics-menu');
    const db_intel_nuc_menu = document.getElementById('db-intel-nuc-menu');
    const db_Server_Products_menu = document.getElementById('db-Server-Products-menu');
    const db_memory_storage_menu = document.getElementById('db-memory-storage-menu');
    const db_service_menu = document.getElementById('db-service-menu');
    const db_processor_menu = document.getElementById('db-processor-menu');
    const db_software_menu = document.getElementById('db-software-menu');
    const db_Technologies_menu = document.getElementById('db-Technologies-menu');
    const db_Wireless_menu = document.getElementById('db-Wireless-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_data_center_submenu = document.getElementById('db-data-center-submenu');
    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');

    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');

    if (db_Server_Products_menu.style.display === 'block') {
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_processor_menu.style.display = 'none';
        db_intel_nuc_menu.style.display = 'none';
        db_graphics_menu.style.display = 'none';
        submenuContent.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        setActiveMenu('db-nested-menu-container');
    } else {
        submenuContent.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_Server_Products_menu.style.display = 'block';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_processor_menu.style.display = 'none';
        db_intel_nuc_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_graphics_menu.style.display = 'none'
        submenuContent2.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';

        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container');
    }
});

// service 
document.getElementById('db-service-mainmenu').addEventListener('click', function (event) {
    event.preventDefault();
    const submenuContent = document.getElementById('db-nested-menu-content');
    const submenuContent2 = document.getElementById('db-db-nested-menu-content2');
    const submenuContent3 = document.getElementById('nested-menu1.1-content');
    const submenuContent1_1_3 = document.getElementById('db-nested-menu1.3-content');
    const submenuContent4 = document.getElementById('db-nested-menu-content1');
    const submenuContent5 = document.getElementById('db-nested-menu1.2.1-content');
    const db_fgpa_menu = document.getElementById('db-fpga-menu');
    const db_graphics_menu = document.getElementById('db-graphics-menu');
    const db_intel_nuc_menu = document.getElementById('db-intel-nuc-menu');
    const db_Server_Products_menu = document.getElementById('db-Server-Products-menu');
    const db_memory_storage_menu = document.getElementById('db-memory-storage-menu');
    const db_service_menu = document.getElementById('db-service-menu');
    const db_processor_menu = document.getElementById('db-processor-menu');
    const db_software_menu = document.getElementById('db-software-menu');
    const db_Technologies_menu = document.getElementById('db-Technologies-menu');
    const db_Wireless_menu = document.getElementById('db-Wireless-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_data_center_submenu = document.getElementById('db-data-center-submenu');
    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');

    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');

    if (db_service_menu.style.display === 'block') {
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_processor_menu.style.display = 'none';
        db_intel_nuc_menu.style.display = 'none';
        db_graphics_menu.style.display = 'none';
        submenuContent.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        setActiveMenu('db-nested-menu-container');
    } else {
        submenuContent.style.display = 'none';
        db_service_menu.style.display = 'block';
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_processor_menu.style.display = 'none';
        db_intel_nuc_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_graphics_menu.style.display = 'none'
        submenuContent2.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';

        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container');
    }
});

// Software
document.getElementById('db-software-mainmenu').addEventListener('click', function (event) {
    event.preventDefault();
    const submenuContent = document.getElementById('db-nested-menu-content');
    const submenuContent2 = document.getElementById('db-db-nested-menu-content2');
    const submenuContent3 = document.getElementById('nested-menu1.1-content');
    const submenuContent1_1_3 = document.getElementById('db-nested-menu1.3-content');
    const submenuContent4 = document.getElementById('db-nested-menu-content1');
    const submenuContent5 = document.getElementById('db-nested-menu1.2.1-content');
    const db_fgpa_menu = document.getElementById('db-fpga-menu');
    const db_graphics_menu = document.getElementById('db-graphics-menu');
    const db_intel_nuc_menu = document.getElementById('db-intel-nuc-menu');
    const db_Server_Products_menu = document.getElementById('db-Server-Products-menu');
    const db_memory_storage_menu = document.getElementById('db-memory-storage-menu');
    const db_service_menu = document.getElementById('db-service-menu');
    const db_processor_menu = document.getElementById('db-processor-menu');
    const db_software_menu = document.getElementById('db-software-menu');
    const db_Technologies_menu = document.getElementById('db-Technologies-menu');
    const db_Wireless_menu = document.getElementById('db-Wireless-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_data_center_submenu = document.getElementById('db-data-center-submenu');
    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');

    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');

    if (db_software_menu.style.display === 'block') {
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_processor_menu.style.display = 'none';
        db_intel_nuc_menu.style.display = 'none';
        db_graphics_menu.style.display = 'none';
        submenuContent.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        setActiveMenu('db-nested-menu-container');
    } else {
        submenuContent.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'block';

        db_processor_menu.style.display = 'none';
        db_intel_nuc_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_graphics_menu.style.display = 'none'
        submenuContent2.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container');
    }
});


// Technologies
document.getElementById('db-Technologies-mainmenu').addEventListener('click', function (event) {
    event.preventDefault();
    const submenuContent = document.getElementById('db-nested-menu-content');
    const submenuContent2 = document.getElementById('db-db-nested-menu-content2');
    const submenuContent3 = document.getElementById('nested-menu1.1-content');
    const submenuContent1_1_3 = document.getElementById('db-nested-menu1.3-content');
    const submenuContent4 = document.getElementById('db-nested-menu-content1');
    const submenuContent5 = document.getElementById('db-nested-menu1.2.1-content');
    const db_fgpa_menu = document.getElementById('db-fpga-menu');
    const db_graphics_menu = document.getElementById('db-graphics-menu');
    const db_intel_nuc_menu = document.getElementById('db-intel-nuc-menu');
    const db_Server_Products_menu = document.getElementById('db-Server-Products-menu');
    const db_memory_storage_menu = document.getElementById('db-memory-storage-menu');
    const db_service_menu = document.getElementById('db-service-menu');
    const db_processor_menu = document.getElementById('db-processor-menu');
    const db_software_menu = document.getElementById('db-software-menu');
    const db_Technologies_menu = document.getElementById('db-Technologies-menu');
    const db_Wireless_menu = document.getElementById('db-Wireless-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_data_center_submenu = document.getElementById('db-data-center-submenu');
    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');

    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');

    if (db_Technologies_menu.style.display === 'block') {
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_processor_menu.style.display = 'none';
        db_intel_nuc_menu.style.display = 'none';
        db_graphics_menu.style.display = 'none';
        submenuContent.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        setActiveMenu('db-nested-menu-container');
    } else {
        submenuContent.style.display = 'none';
        db_Technologies_menu.style.display = 'block';
        db_service_menu.style.display = 'none';
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_processor_menu.style.display = 'none';
        db_intel_nuc_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_graphics_menu.style.display = 'none'
        submenuContent2.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';

        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container');
    }
});

// Wireless
document.getElementById('db-Wireless-mainmenu').addEventListener('click', function (event) {
    event.preventDefault();
    const submenuContent = document.getElementById('db-nested-menu-content');
    const submenuContent2 = document.getElementById('db-db-nested-menu-content2');
    const submenuContent3 = document.getElementById('nested-menu1.1-content');
    const submenuContent1_1_3 = document.getElementById('db-nested-menu1.3-content');
    const submenuContent4 = document.getElementById('db-nested-menu-content1');
    const submenuContent5 = document.getElementById('db-nested-menu1.2.1-content');
    const db_fgpa_menu = document.getElementById('db-fpga-menu');
    const db_graphics_menu = document.getElementById('db-graphics-menu');
    const db_intel_nuc_menu = document.getElementById('db-intel-nuc-menu');
    const db_Server_Products_menu = document.getElementById('db-Server-Products-menu');
    const db_memory_storage_menu = document.getElementById('db-memory-storage-menu');
    const db_service_menu = document.getElementById('db-service-menu');
    const db_processor_menu = document.getElementById('db-processor-menu');
    const db_software_menu = document.getElementById('db-software-menu');
    const db_Technologies_menu = document.getElementById('db-Technologies-menu');
    const db_Wireless_menu = document.getElementById('db-Wireless-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_data_center_submenu = document.getElementById('db-data-center-submenu');
    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');

    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');

    if (db_Wireless_menu.style.display === 'block') {
        db_Server_Products_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_service_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_processor_menu.style.display = 'none';
        db_intel_nuc_menu.style.display = 'none';
        db_graphics_menu.style.display = 'none';
        submenuContent.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        setActiveMenu('db-nested-menu-container');
    } else {
        submenuContent.style.display = 'none';
        db_Technologies_menu.style.display = 'none';
        db_Wireless_menu.style.display = 'block';
        db_service_menu.style.display = 'none';
        db_Server_Products_menu.style.display = 'none';
        db_software_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_processor_menu.style.display = 'none';
        db_intel_nuc_menu.style.display = 'none';
        db_memory_storage_menu.style.display = 'none';
        db_graphics_menu.style.display = 'none'
        submenuContent2.style.display = 'none';
        db_fgpa_menu.style.display = 'none';
        submenuContent3.style.display = 'none';
        submenuContent4.style.display = 'none';
        submenuContent5.style.display = 'none';
        submenuContent1_1_3.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';

        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container');
    }
});

// ethernet product 
document.getElementById('db-ethernetproducts').addEventListener('click', function (event) {
    event.preventDefault();
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_data_center_submenu = document.getElementById('db-data-center-submenu');

    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');
    const db_intel_killer = document.getElementById('db-intel-killer');

    if (db_ethernet_submenu.style.display === 'block') {
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        setActiveMenu('db-nested-menu-container', 'db-db-nested-menu-content2', 'db-ethernet-submenu');
    } else {
        db_ethernet_submenu.style.display = 'block';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';

        document.getElementById("db-ethernet-submenu").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container', 'db-db-nested-menu-content2', 'db-ethernet-submenu');
    }
});

//  Intel® Killer™ Ethernet Products 

document.getElementById('db-killer-main').addEventListener('click', function (event) {
    event.preventDefault();
    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_data_center_submenu = document.getElementById('db-data-center-submenu');

    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');


    if (db_intel_killer.style.display === 'block') {
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        setActiveMenu('db-nested-menu-container', 'db-db-nested-menu-content2', 'db_intel_killer');
    } else {
        db_intel_killer.style.display = 'block';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        document.getElementById("db-intel-killer").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container', 'db-db-nested-menu-content2', 'db-intel-killer');
    }
});


// Intel® Ethernet Software 
document.getElementById('db-ethernet-software-main').addEventListener('click', function (event) {
    event.preventDefault();
    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_data_center_submenu = document.getElementById('db-data-center-submenu');

    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');


    if (db_ethernet_software_menu.style.display === 'block') {
        db_ethernet_software_menu.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';

        setActiveMenu('db-nested-menu-container', 'db-db-nested-menu-content2', 'db-ethernet-software-menu');
    } else {
        db_ethernet_software_menu.style.display = 'block';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        document.getElementById("db-ethernet-software-menu").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container', 'db-db-nested-menu-content2', 'db-ethernet-software-menu', 'nested-menu2');
    }
});

// Intel® Ethernet Fabric Suite (Intel® EFS) 
document.getElementById('db-ethernet-fabric-content').addEventListener('click', function (event) {
    event.preventDefault();
    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_data_center_submenu = document.getElementById('db-data-center-submenu');

    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');


    if (db_ethernet_farbic_content_col.style.display === 'block') {
        db_ethernet_farbic_content_col.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        setActiveMenu('db-nested-menu-container', 'db-db-nested-menu-content2', 'db-ethernet-software-menu', 'db-ethernet-farbic-content-col', 'nested-menu2');
    } else {
        db_ethernet_farbic_content_col.style.display = 'block';
        db_data_center_main_content.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        document.getElementById("db-ethernet-farbic-content-col").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container', 'db-db-nested-menu-content2', 'db-ethernet-software-menu', 'db-ethernet-farbic-content-col', 'nested-menu2');
    }
});


// graphics menu 
document.getElementById('db-graphics-menu-click').addEventListener('click', function (event) {
    event.preventDefault();
    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_data_center_submenu = document.getElementById('db-data-center-submenu');

    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');


    if (db_graphics_menu_content.style.display === 'block') {
        db_ethernet_farbic_content_col.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        setActiveMenu('db-nested-menu-container', 'db-graphics-menu', 'db-graphics-menu-content', 'nested-menu2');
    } else {
        db_ethernet_farbic_content_col.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_graphics_menu_content.style.display = 'block';
        db_intel_killer.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        document.getElementById("db-graphics-menu-content").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container', 'db-graphics-menuu', 'db-graphics-menu-content', 'nested-menu2');
    }
});


// db-data-center-main
document.getElementById('db-data-center-main').addEventListener('click', function (event) {
    event.preventDefault();
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_data_center_submenu = document.getElementById('db-data-center-submenu');
    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');

    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');


    if (db_data_center_main_content.style.display === 'block') {
        db_data_center_main_content.style.display = 'none';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        setActiveMenu('db-nested-menu-container', 'db-graphics-menu', 'nested-menu2', 'db-data-center-main-content');
    } else {
        db_ethernet_farbic_content_col.style.display = 'none';
        db_data_center_main_content.style.display = 'block';
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        document.getElementById("db-data-center-main-content").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container', 'db-graphics-menuu', 'db-data-center-main-content', 'nested-menu2');
    }
});

// db-data-center-menu
document.getElementById('db-data-center-menu').addEventListener('click', function (event) {
    event.preventDefault();
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_data_center_submenu = document.getElementById('db-data-center-submenu');
    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');

    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');

    if (db_data_center_submenu.style.display === 'block') {
        db_data_center_submenu.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        setActiveMenu('db-nested-menu-container', 'db-graphics-menu', 'nested-menu2', 'db-data-center-main-content');
    } else {
        db_data_center_submenu.style.display = 'block';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        document.getElementById("db-data-center-submenu").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container', 'db-graphics-menuu', 'db-data-center-main-content', 'nested-menu2', 'db-data-center-menu');
    }
});

// db-data-center-menu140
document.getElementById('db-data-center-submenu140').addEventListener('click', function (event) {
    event.preventDefault();

    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');

    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');


    if (db_data_center_submenu_content140.style.display === 'block') {
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        setActiveMenu('db-nested-menu-container', 'db-graphics-menu', 'nested-menu2', 'db-data-center-main-content');
    } else {
        db_data_center_submenu_content140.style.display = 'block';
        db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        document.getElementById("db-data-center-submenu-content140").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container', 'db-graphics-menuu', 'db-data-center-main-content', 'nested-menu2', 'db-data-center-menu', 'db-data-center-submenu-content140');
    }
});

// db-data-center-menu170
document.getElementById('db-data-center-submenu170').addEventListener('click', function (event) {
    event.preventDefault();

    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');

    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');





    if (db_data_center_submenu_content170.style.display === 'block') {
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        setActiveMenu('db-nested-menu-container', 'db-graphics-menu', 'nested-menu2', 'db-data-center-main-content');
    } else {
        db_data_center_submenu_content170.style.display = 'block';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        document.getElementById("db-data-center-submenu-content170").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container', 'db-graphics-menuu', 'db-data-center-main-content', 'nested-menu2', 'db-data-center-menu', 'db-data-center-submenu-content170');
    }
});

//Intel® Arc™ Dedicated Graphics Family
document.getElementById('db-arc-dedicated-graphics-menu').addEventListener('click', function (event) {
    event.preventDefault();

    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');

    if (db_arc_dedicated_graphics.style.display === 'block') {
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        setActiveMenu('db-nested-menu-container', 'db-graphics-menu', 'nested-menu2', 'db-data-center-main-content');
    } else {
        db_data_center_submenu_content170.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';

        db_arc_dedicated_graphics.style.display = 'block';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        document.getElementById("db-arc-dedicated-graphics").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container', 'db-graphics-menuu', 'db-data-center-main-content', 'nested-menu2', 'db-arc-dedicated-graphics');
    }
});

//  Processor graphics
document.getElementById('db-processor-graphics-main').addEventListener('click', function (event) {
    event.preventDefault();


    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');

    if (db_processor_graphics_menu.style.display === 'block') {
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        setActiveMenu('db-nested-menu-container', 'db-graphics-menu', 'nested-menu2', 'db-data-center-main-content');
    } else {
        db_data_center_submenu_content170.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'block';
        db_data_center_main_content.style.display = 'none';

        db_arc_dedicated_graphics.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        document.getElementById("db-processor-graphics-menu").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container', 'db-graphics-menuu', 'db-data-center-main-content', 'nested-menu2', 'db-processor-graphics-menu');
    }
});

//  Processor graphics menu
document.getElementById('db-processor-graphics-menu-click').addEventListener('click', function (event) {
    event.preventDefault();


    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');

    if (db_processor_graphics_menu_content.style.display === 'block') {
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        setActiveMenu('db-nested-menu-container', 'db-graphics-menu', 'nested-menu2', 'db-data-center-main-content');
    } else {
        db_data_center_submenu_content170.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'block';
        // db_processor_graphics_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';

        db_arc_dedicated_graphics.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        document.getElementById("db-processor-graphics-menu-content").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container', 'db-graphics-menuu', 'db-data-center-main-content', 'nested-menu2', 'db-processor-graphics-menu', 'db_processor_graphics_menu_content');
    }
});


// Intel® Arc™ graphics 
document.getElementById('db-arc-graphics-main').addEventListener('click', function (event) {
    event.preventDefault();


    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');

    if (db_arc_graphics_menu.style.display === 'block') {
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        setActiveMenu('db-nested-menu-container', 'db-graphics-menu', 'nested-menu2', 'db-data-center-main-content');
    } else {
        db_data_center_submenu_content170.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'block';
        db_processor_graphics_menu_content.style.display = 'none';
        // db_processor_graphics_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';

        db_arc_dedicated_graphics.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        document.getElementById("db-arc-graphics-menu").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container', 'db-graphics-menuu', 'db-data-center-main-content', 'nested-menu2', 'db-processor-graphics-menu', 'db_processor_graphics_menu_content', 'db-arc-graphics-main');
    }
});


// db-arc-graphics-content
document.getElementById('db-arc-dedicated-graphics-menu(series1)-click').addEventListener('click', function (event) {
    event.preventDefault();
    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');

    if (db_arc_graphics_content_series_1.style.display === 'block') {
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        // db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        setActiveMenu('db-nested-menu-container', 'db-graphics-menu', 'nested-menu2', 'db-data-center-main-content');
    } else {
        db_data_center_submenu_content170.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'block';
        db_arc_graphics_content.style.display = 'none';
        // db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        // db_processor_graphics_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';

        db_arc_dedicated_graphics.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        document.getElementById("db-arc-graphics-content(series-1)").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container', 'db-graphics-menuu', 'db-data-center-main-content', 'nested-menu2', 'db-processor-graphics-menu', 'db_processor_graphics_menu_content', 'db-arc-graphics-main', 'db-arc-graphics-content(series-1)');
    }
});

// db-arc-graphics-content(series-1)
document.getElementById('db-arc-dedicated-graphics-menu-click').addEventListener('click', function (event) {
    event.preventDefault();
    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');

    if (db_arc_graphics_content.style.display === 'block') {
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        // db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        setActiveMenu('db-nested-menu-container', 'db-graphics-menu', 'nested-menu2', 'db-data-center-main-content');
    } else {
        db_data_center_submenu_content170.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'block';
        // db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        // db_processor_graphics_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';

        db_arc_dedicated_graphics.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        document.getElementById("db-arc-graphics-content").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container', 'db-graphics-menuu', 'db-data-center-main-content', 'nested-menu2', 'db-processor-graphics-menu', 'db_processor_graphics_menu_content', 'db-arc-graphics-main', 'db-arc-graphics-content');
    }
});

//Intel® Graphics
document.getElementById('db-intel-graphics-main').addEventListener('click', function (event) {
    event.preventDefault();
    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');

    if (db_intel_graphics_menu.style.display === 'block') {
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        setActiveMenu('db-nested-menu-container', 'db-graphics-menu', 'nested-menu2', 'db-data-center-main-content');
    } else {
        db_data_center_submenu_content170.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'block';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        // db_processor_graphics_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';

        db_arc_dedicated_graphics.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        document.getElementById("db-intel-graphics-menu").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container', 'db-graphics-menuu', 'db-data-center-main-content', 'nested-menu2', 'db-processor-graphics-menu', 'db_processor_graphics_menu_content', 'db-intel-graphics-menu');
    }
});


//Intel® Graphics content
document.getElementById('db-intel-graphics-menu-click').addEventListener('click', function (event) {
    event.preventDefault();
    const db_intel_killer = document.getElementById('db-intel-killer');
    const db_ethernet_submenu = document.getElementById('db-ethernet-submenu');
    const db_data_center_submenu_content170 = document.getElementById('db-data-center-submenu-content170');
    const db_data_center_submenu_content140 = document.getElementById('db-data-center-submenu-content140');
const db_intel_graphics_menu = document.getElementById('db-intel-graphics-menu');
    const db_arc_graphics_content_series_1 = document.getElementById('db-arc-graphics-content(series-1)');
    const db_arc_graphics_content = document.getElementById('db-arc-graphics-content');
    const db_arc_graphics_menu = document.getElementById('db-arc-graphics-menu');
    const db_processor_graphics_menu = document.getElementById('db-processor-graphics-menu');
    const db_arc_dedicated_graphics = document.getElementById('db-arc-dedicated-graphics');
    const db_processor_graphics_menu_content = document.getElementById('db-processor-graphics-menu-content');

    const db_ethernet_software_menu = document.getElementById('db-ethernet-software-menu');
    const db_data_center_main_content = document.getElementById('db-data-center-main-content');
    const db_ethernet_farbic_content_col = document.getElementById('db-ethernet-farbic-content-col');
    const db_graphics_menu_content = document.getElementById('db-graphics-menu-content');

    if (db_intel_graphics_menu.style.display === 'block') {
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'none';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        db_processor_graphics_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';
        db_arc_dedicated_graphics.style.display = 'none';
        db_data_center_submenu_content170.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        db_ethernet_software_menu.style.display = 'none';
        setActiveMenu('db-nested-menu-container', 'db-graphics-menu', 'nested-menu2', 'db-data-center-main-content');
    } else {
        db_data_center_submenu_content170.style.display = 'none';
        db_data_center_submenu_content140.style.display = 'none';
db_intel_graphics_menu.style.display = 'block';
        db_arc_graphics_content_series_1.style.display = 'none';
        db_arc_graphics_content.style.display = 'none';
        db_arc_graphics_menu.style.display = 'none';
        db_processor_graphics_menu_content.style.display = 'none';
        // db_processor_graphics_menu.style.display = 'none';
        db_data_center_main_content.style.display = 'none';

        db_arc_dedicated_graphics.style.display = 'none';
        db_ethernet_farbic_content_col.style.display = 'none';
        db_graphics_menu_content.style.display = 'none';
        db_intel_killer.style.display = 'none';
        db_ethernet_submenu.style.display = 'none';
        document.getElementById("db-intel-graphics-menu").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        activateMenu(this.parentElement);
        setActiveMenu('db-nested-menu-container', 'db-graphics-menuu', 'db-data-center-main-content', 'nested-menu2', 'db-processor-graphics-menu', 'db_processor_graphics_menu_content', 'db-intel-graphics-menu');
    }
});



// Add jQuery code
$(document).ready(function () {
    $(".one").click(function () {
        $(this).addClass("db_active").siblings().removeClass("db_active");
    });
});


