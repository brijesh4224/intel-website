const brands = [
    'Acer', 'Acxxel', 'Advice_IT_Infinite', 'Aftershock', 'Alienware', 'Apple',
    'ASUS', 'Averatec', 'BenQ', 'Cisco', 'CISNet', 'Compal', 'Compaq', 'CyberPower',
    'Dell', 'DFI', 'ECS', 'Eluktronics', 'EPIK_Learning', 'Epson', 'FIC', 'Fujitsu',
    'Gigabyte', 'Haier', 'Hewlett_Packard', 'Hi_Grade', 'IBM', 'iBUYPOWER', 'IVIEW',
    'Komplett', 'Leader', 'Lenovo', 'LG', 'Maingear', 'Micro_Center', 'Microsoft',
    'Motion_Computing', 'MSI', 'NEC', 'Olivetti', 'Panasonic', 'Positivo_Informática',
    'Razer', 'Realtek_Semiconductor', 'Samsung', 'Siemens', 'SNS_Network', 'Sony',
    'Southern_Telecom', 'Terra_Wortmann', 'Thirdwave', 'Toshiba', 'VGS', 'Wistron',
    'Wuhan_Ningmei'
];

function toggleContent(brand) {
    const contentId = `db_${brand}_content`;
    const content = document.getElementById(contentId);
    const button = document.getElementById(`db_${brand}`);
    
    if (content.style.display === 'block') {
        content.style.display = 'none';
        button.closest('li').classList.remove('db_system_active_li');
    } else {
        content.style.setProperty('display', 'block', 'important');
        button.closest('li').classList.add('db_system_active_li');
        content.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Hide other content
    brands.forEach(otherBrand => {
        if (otherBrand !== brand) {
            const otherContentId = `db_${otherBrand}_content`;
            const otherContent = document.getElementById(otherContentId);
            const otherButton = document.getElementById(`db_${otherBrand}`);
            if (otherContent && otherContent.style.display === 'block') {
                otherContent.style.display = 'none';
                otherButton.closest('li').classList.remove('db_system_active_li');
            }
        }
    });
}

brands.forEach(brand => {
    document.getElementById(`db_${brand}`).addEventListener('click', function(e) {
        e.preventDefault();
        toggleContent(brand);
    });
});
