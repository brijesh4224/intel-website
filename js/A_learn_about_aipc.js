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
}