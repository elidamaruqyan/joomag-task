$(document).ready(function () {
    //owl carousel options
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 5
            },
            1000: {
                items: 5
            }
        }
    });
    //change mobile logo
    $(window).resize(function () {
        if ($(window).width() <= 768) {
            $("img.page-logo-img").attr("src", "assets/joomag-love-wework-mobile.svg");
        } else {
            $("img.page-logo-img").attr("src", "assets/joomag-love-wework.svg");
        }
        console.log('aa')
    });
});