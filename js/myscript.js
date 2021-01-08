$(document).ready(function() {
    menu_slick();
    slidetoggle_header();
    fancybox();
    headerTop();
    header_slick();


});


function menu_slick() {
    // -----------------slick----------

    $(".favorites-slides").slick({
        autoplay: false,

        arrows: false,

        dots: true,

        slidesToShow: 4,
        slidesToScroll: 4,

        draggable: false,

        infinite: true,

        pauseOnHover: false,

        swipe: true,

        touchMove: true,

        speed: 800,

        autoplaySpeed: 3000,

        useTransform: true,

        cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",

        adaptiveHeight: true,

        focusOnSelect: true,
        responsive: [{
                breakpoint: 990.5,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 767.5,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                }
            }

        ]
    });
}

function header_slick() {
    // -----------------slick----------
    $(".banner-image-large").slick({
        autoplay: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,

        draggable: false,

        infinite: true,

        pauseOnHover: false,

        swipe: true,

        touchMove: true,

        speed: 800,

        autoplaySpeed: 3000,

        useTransform: true,

        cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",

        adaptiveHeight: true,

        focusOnSelect: true,
        asNavFor: '.banner-image-small-1, .banner-image-small-2'
    });
    $('.banner-image-small-1').slick({
        lazyLoad: 'progressive',
        arrows: false,

        centerPadding: '0px',
        infinite: true,

        speed: 500,
        swipe: false,
        cssEase: 'ease-in-out',
        slidesToShow: 1,
        adaptiveHeight: true,
        asNavFor: '.banner-image-large, .banner-image-small-2'
    });
    $('.banner-image-small-2').slick({
        lazyLoad: 'progressive',
        arrows: false,
        infinite: true,
        slidesToShow: 1,

        adaptiveHeight: true,
        cssEase: 'ease-in-out',
        asNavFor: '.banner-image-large, .banner-image-small-1',
        focusOnSelect: true,
    });
    // -----button slick
    $("#prev-slick").click(function(event) {
        event.preventDefault();
        $(".banner-image-large").slick("slickPrev");
    })
    $("#next-slick").click(function(event) {
        event.preventDefault();
        $(".banner-image-large").slick("slickNext");
    })
}

function slidetoggle_header() {
    jQuery(".button-mobile a").click(function() {

        jQuery(".header-navigation").toggleClass("active");



        jQuery("body").toggleClass("show-scroll");

    });

    jQuery(".header-nav__close").click(function() {

        jQuery(".header-navigation").removeClass("active");

    });

    jQuery(document).mouseup(function(e) {

        if (!jQuery(".button-mobile a, .header-navigation.active").is(e.target) &&

            jQuery(".button-mobile a, .header-navigation.active").has(e.target).length === 0

        ) {

            jQuery(".header__bar-nav").removeClass("active");

            jQuery("body").removeClass("show-scroll");

        }

    });
}

function fancybox() {
    var gallery_row = jQuery(".p__row");

    gallery_row.each(function() {
        jQuery(this)
            .find(".p__collum-photo a")

        .attr("data-fancybox", "images");

        jQuery('[data-fancybox="images"]').fancybox({
            thumbs: {
                showOnStart: true,
            },
        });
    });

    if ($(window).width() > 767.5) {
        var itemclass = "img-overlay";
        $(".p__collum-photo").append('<div class="' + itemclass + '"></div>');
    }
}

function headerTop() {
    var header = $(".header__scroll");
    if (header.length) {
        var offset = header.offset().top;
        header_height = $(".header__top").height();
        containerwidth = $(window).width();
        $(window).scroll(function() {
            if ($(window).scrollTop() > header_height) {
                header.addClass("active");
                $("#header").addClass("hide-top");
            } else {
                header.removeClass("active");
                $("#header").removeClass("hide-top");
            }
        });
    }
}