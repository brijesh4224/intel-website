
$(document).ready(function () {

    // solutions : nav scrolling tracker
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 600);
    });

    $(window).on('scroll', function () {
        var scrollDistance = $(window).scrollTop();
        $('.m_page-section').each(function (i) {
            if ($(this).position().top <= scrollDistance + 100) {
                $('.m_navigation a.active').removeClass('active');
                $('.m_navigation a').eq(i).addClass('active');
            }
        });
    }).scroll();

    // solutions : Show more and show less in responsive
    let previousWidth = $(window).width();
    function checkScreenWidth() {
        const currentWidth = $(window).width();
        if ((previousWidth <= 767 && currentWidth > 767) || 
            (previousWidth > 767 && currentWidth <= 767)) {

            if (currentWidth > 767) {
                $(".m_separator1, .m_separator2").css("display", "none");
                $(".m_hidden").css("display", "block");  
            } else {
                $(".m_separator1").css("display", "flex");
                $(".m_hidden").css("display", "none"); 
            }
        }
        previousWidth = currentWidth; 
    }
    checkScreenWidth();
    $(window).resize(function() {
        checkScreenWidth();
    });
    $(".m_showMore").on("click", function () {
        $(this).closest(".row").find(".m_hidden").css("display", "block");
        $(this).closest(".m_separator1").css("display", "none");
        $(this).closest(".row").find(".m_separator2").css("display", "flex");
    });

    $(".m_showLess").on("click", function () {
        $(this).closest(".row").find(".m_hidden").css("display", "none");
        $(this).closest(".m_separator2").css("display", "none");
        $(this).closest(".row").find(".m_separator1").css("display", "flex");
    });


    // solutions : Show more and show less 
    $(".m_separator2_1").css("display", "none");
    $(".m_showMore").on("click", function () {
        $(this).closest(".row").find(".m_hidden2").css("display", "block");
        $(this).closest(".m_separator1_1").css("display", "none");
        $(this).closest(".row").find(".m_separator2_1").css("display", "flex");
    });
    $(".m_showLess").on("click", function () {
        $(this).closest(".row").find(".m_hidden2").css("display", "none");
        $(this).closest(".m_separator2_1").css("display", "none");
        $(this).closest(".row").find(".m_separator1_1").css("display", "flex");
    });


    // solutions : Business Solutions : AI : Hardware : AI Hardware Solutions : Processors
    $('.m_ai_hpCarousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })

});



// solutions : Business Solutions : AI Technology : Deploy AI Technology Confidently with Intel
$(function () {
    var activeIndex = $('.m_active-tab').index(),
        $contentlis = $('.m_tabs-content li'),
        $tabslis = $('.m_tabs li');

    // Show content of active tab on loads
    $contentlis.eq(activeIndex).show();

    $('.m_tabs').on('click', 'li', function (e) {
        var $current = $(e.currentTarget),
            index = $current.index();

        $tabslis.removeClass('m_active-tab');
        $current.addClass('m_active-tab');
        $contentlis.hide().eq(index).show();
    });
});


// solutions : Business Solutions : 5G
document.addEventListener('DOMContentLoaded', () => {
    const m_form1 = document.getElementById('m_form1');
    const m_form2 = document.getElementById('m_form2');
    const m_btn1 = document.getElementById('m_btn1');
    const m_btn2 = document.getElementById('m_btn2');

    m_btn1.addEventListener('click', () => {
        m_form1.classList.remove('m_formVisible');
        m_form1.classList.add('m_formHidden');
        m_form2.classList.remove('m_formHidden');
        m_form2.classList.add('m_formVisible');
    });

    m_btn2.addEventListener('click', () => {
        m_form2.classList.remove('m_formVisible');
        m_form2.classList.add('m_formHidden');
        m_form1.classList.remove('m_formHidden');
        m_form1.classList.add('m_formVisible');
    });
});

// solutions : Business Solutions : Edge Computing
$(function () {
    var activeIndex = $('.m_active-tab2').index(),
        $contentlis = $('.m_tabs2-content li'),
        $tabslis = $('.m_tabs2 li');

    // Show content of active tab on loads
    $contentlis.eq(activeIndex).show();

    $('.m_tabs2').on('click', 'li', function (e) {
        var $current = $(e.currentTarget),
            index = $current.index();

        $tabslis.removeClass('m_active-tab2');
        $current.addClass('m_active-tab2');
        $contentlis.hide().eq(index).show();
    });
});

// solutions : Rsources : Technology Tips & Tricks
$(function () {
    var activeIndex = $('.m_subTab2 .m_tabsT > .m_active-tab').index(), 
        $contentlis = $('.m_subTab2 .m_tabs-content2 .m_rtt_li'),
        $tabslis = $('.m_subTab2 .m_tabsT > li'); 

    // Show content of active tab on load
    $contentlis.eq(activeIndex).show();

    $('.m_subTab2 .m_tabsT').on('click', '> li', function (e) { 
        var $current = $(e.currentTarget),
            index = $current.index();

        $tabslis.removeClass('m_active-tab');
        $current.addClass('m_active-tab');
        $contentlis.hide().eq(index).show();
    });
});

