$(function () {
    $('.header__btn').on('click', function(){
        $('.rside-menu').removeClass('rside-menu--none');
        $('body').addClass('scroll-block');
    })

    $('.rside-menu__close').on('click', function(){
        $('.rside-menu').addClass('rside-menu--none');
        $('body').removeClass('scroll-block');
    })

    $('.header__btn-menu').on('click', function(){
        $('.mobile-menu').removeClass('mobile-menu--none');
        $('body').addClass('scroll-block');
    })

    $('.mobile-menu__close').on('click', function(){
        $('.mobile-menu').addClass('mobile-menu--none');
        $('body').removeClass('scroll-block');
    })

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        speed:1200,
    });

    $('.contact-slider__inner').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 1700,
              settings: {
                slidesToShow: 8,
                slidesToScroll: 8,
              }
            },
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
          ]
    });

    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-prev"><img src="./images/icons/arrow-prev-s.svg" alt=""> </button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-next"><img src="./images/icons/arrow-next-s.svg" alt=""> </button>'
    });

    

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.bedroom'
        }
        
    });

})