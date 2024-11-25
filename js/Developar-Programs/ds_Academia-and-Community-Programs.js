function handleToggle() {
    const btn = document.getElementById("ds_mem-btn");
    const data = document.getElementById("ds_high-main");

    if (data.style.display === 'none') {
        data.style.display = 'block';
        btn.innerHTML = " Show Less";
    } else {
        data.style.display = 'none';
        btn.innerHTML = " Show More";
    }

    
}

window.onload = function () {
    handleToggle()
}