const dbAccordionBtn = document.querySelector('.db_accordion-btn');
const dbAccordionContent = document.querySelector('.db_accordion-content');

// Event listener to open/close accordion and manage body overflow
dbAccordionBtn.addEventListener('click', function () {
    // Toggle the 'active' class to show/hide the accordion content
    dbAccordionContent.classList.toggle('active');

    // Check if the accordion content is active
    if (dbAccordionContent.classList.contains('active')) {
        document.body.style.overflowY = 'hidden'; // Add overflow hidden to body
    } else {
        document.body.style.overflowY = ''; // Remove overflow hidden from body
    }
});

document.querySelector('#db_developer_header_main').addEventListener('click', function () {
    event.preventDefault();
    document.getElementById('db_developer_header').style.display = 'block';
    document.getElementById('db_developer_header').style.setProperty('display', 'block', 'important');
    document.getElementById('db_community_header').style.setProperty('display', 'none', 'important');
});
document.querySelectorAll('.db_back_header_main').forEach(backButton => {
    backButton.addEventListener('click', function () {
        event.preventDefault();
        document.getElementById('db_developer_header').style.setProperty('display', 'none', 'important');
        document.getElementById('db_gaming_header').style.setProperty('display', 'none', 'important');
        document.getElementById('db_blogs_header').style.setProperty('display', 'none', 'important');
        document.getElementById('db_private_forum_header').style.setProperty('display', 'none', 'important');
        document.getElementById('db_product_header').style.setProperty('display', 'none', 'important');
        // document.getElementById('db_about_header').style.setProperty('display', 'none', 'important');
        document.getElementById('db_community_header').style.setProperty('display', 'block', 'important');
    });
});

document.querySelector('#db_product_header_main').addEventListener('click', function () {
    event.preventDefault();
    document.getElementById('db_product_header').style.setProperty('display', 'block', 'important');
    document.getElementById('db_community_header').style.setProperty('display', 'none', 'important');
});

document.querySelector('#db_gaming_header_main').addEventListener('click', function () {
    event.preventDefault();
    document.getElementById('db_gaming_header').style.setProperty('display', 'block', 'important');
    document.getElementById('db_community_header').style.setProperty('display', 'none', 'important');
});

document.querySelector('#db_blogs_header_main').addEventListener('click', function () {
    event.preventDefault();
    document.getElementById('db_blogs_header').style.setProperty('display', 'block', 'important');
    document.getElementById('db_community_header').style.setProperty('display', 'none', 'important');
});

document.querySelector('#db_private_forum_header_main').addEventListener('click', function () {
    event.preventDefault();
    document.getElementById('db_private_forum_header').style.setProperty('display', 'block', 'important');
    document.getElementById('db_community_header').style.setProperty('display', 'none', 'important');
});

document.querySelector('#db_about_header_main').addEventListener('click', function () {
    event.preventDefault();
    document.getElementById('db_about_header').style.setProperty('display', 'block', 'important');
    document.getElementById('db_community_header').style.setProperty('display', 'none', 'important');
});
document.querySelector('#db_software_header_main').addEventListener('click', function () {
    event.preventDefault();
    document.getElementById('db_software_header').style.setProperty('display', 'block', 'important');
    document.getElementById('db_developer_header').style.setProperty('display', 'none', 'important');
});

document.querySelector('#db_toolkit_header_main').addEventListener('click', function () {
    event.preventDefault();
    document.getElementById('db_toolkit_header').style.setProperty('display', 'block', 'important');
    document.getElementById('db_developer_header').style.setProperty('display', 'none', 'important');
});

document.querySelector('#db_soft_topic_header_main').addEventListener('click', function () {
    event.preventDefault();
    document.getElementById('db_soft_topic_header').style.setProperty('display', 'block', 'important');
    document.getElementById('db_developer_header').style.setProperty('display', 'none', 'important');
});

document.querySelector('#db_soft_technology_header_main').addEventListener('click', function () {
    event.preventDefault();
    document.getElementById('db_soft_technology_header').style.setProperty('display', 'block', 'important');
    document.getElementById('db_developer_header').style.setProperty('display', 'none', 'important');
});

// Back button functionality
document.querySelectorAll('.db_back_software_header_main').forEach(backButton => {
    backButton.addEventListener('click', function () {
        event.preventDefault();
        document.getElementById('db_software_header').style.setProperty('display', 'none', 'important');
        document.getElementById('db_toolkit_header').style.setProperty('display', 'none', 'important');
        document.getElementById('db_soft_technology_header').style.setProperty('display', 'none', 'important');
        document.getElementById('db_soft_topic_header').style.setProperty('display', 'none', 'important');
        document.getElementById('db_developer_header').style.setProperty('display', 'block', 'important');
    });
});
document.querySelector('#db_embedded_header_main').addEventListener('click', function () {
    event.preventDefault();
    document.getElementById('db_embedded_header').style.setProperty('display', 'block', 'important');
    document.getElementById('db_product_header').style.setProperty('display', 'none', 'important');
});

document.querySelector('#db_fgpa_header_main').addEventListener('click', function () {
    event.preventDefault();
    document.getElementById('db_fgpa_header').style.setProperty('display', 'block', 'important');
    document.getElementById('db_product_header').style.setProperty('display', 'none', 'important');
});

document.querySelector('#db_memory_storage_header_main').addEventListener('click', function () {
    event.preventDefault();
    document.getElementById('db_memory_storage_header').style.setProperty('display', 'block', 'important');
    document.getElementById('db_product_header').style.setProperty('display', 'none', 'important');
});

document.querySelector('#db_visual_computing_header_main').addEventListener('click', function () {
    event.preventDefault();
    document.getElementById('db_visual_computing_header').style.setProperty('display', 'block', 'important');
    document.getElementById('db_product_header').style.setProperty('display', 'none', 'important');
});

// Back button functionality
document.querySelectorAll('.db_product_back_header').forEach(backButton => {
    backButton.addEventListener('click', function () {
        event.preventDefault();
        document.getElementById('db_visual_computing_header').style.setProperty('display', 'none', 'important');
        document.getElementById('db_memory_storage_header').style.setProperty('display', 'none', 'important');
        document.getElementById('db_fgpa_header').style.setProperty('display', 'none', 'important');
        document.getElementById('db_embedded_header').style.setProperty('display', 'none', 'important');
        document.getElementById('db_product_header').style.setProperty('display', 'block', 'important');
    });
});
document.querySelectorAll('.db_back_ai_header_main').forEach(backButton => {
    backButton.addEventListener('click', function () {
        event.preventDefault();
        document.getElementById('db_intel_ai_header').style.setProperty('display', 'none', 'important');
        document.getElementById('db_private_forum_header').style.setProperty('display', 'block', 'important');
      
    });
});
document.querySelector('#db_intel_ai_header_main').addEventListener('click', function () {
    event.preventDefault();
    document.getElementById('db_intel_ai_header').style.setProperty('display', 'block', 'important');
    document.getElementById('db_private_forum_header').style.setProperty('display', 'none', 'important');
});
// Back button functionality