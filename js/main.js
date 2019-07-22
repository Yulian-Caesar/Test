
var openMenu = function () {
    $(".header-menu").addClass("active");
};
$(document).on("click", ".menu-toggle", openMenu);

var closeMenu = function () {
    $(".header-menu").removeClass("active");
};
$(document).on("click", ".header-menu__close", closeMenu);

$(".results-slider").slick({
    slidesToShow: 6,
    prevArrow: '<button class="prev"><svg class="icon icon-arrow-bottom"><use xlink:href="#icon-arrow-bottom"></use></svg></button>',
    nextArrow: '<button class="next"><svg class="icon icon-arrow-bottom"><use xlink:href="#icon-arrow-bottom"></use></svg></button>',
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 4,
                arrows: false
            }
        }
    ]
});

$(".news-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    swipe: false,
    prevArrow: '<button class="prev"><svg class="icon icon-arrow-bottom"><use xlink:href="#icon-arrow-bottom"></use></svg></button>',
    nextArrow: '<button class="next"><svg class="icon icon-arrow-bottom"><use xlink:href="#icon-arrow-bottom"></use></svg></button>',
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false
            }
        }
    ]
});

