$(document).ready(function(){
$('.open-menu-button').click(function(){
            $('.menu-with-button').addClass('open');
            $('.close-menu-button').addClass('show');
            $('.overlay').fadeIn(300);
        });
        $('.close-menu-button, .overlay').click(function(){
            $('.menu-with-button').removeClass('open');
            $('.close-menu-button').removeClass('show');
            $('.overlay').fadeOut(300);
        });
    $('.slide-slider').slick({//слайдер картинки 
        slidesToShow:1,
        slidesToScroll:1, 
        fade:true, 
        asNavFor: '.slide-line-slider', 
        focusOnSelect:true,
        arrows:false
      }); 
    $('.slide-line-slider').slick({//слайдер текст 
        slidesToShow:5, 
        slidesToScroll: 1, 
        focusOnSelect:true, 
        asNavFor: '.slide-slider', 
        arrows:false 
    });
     $('.slider .container').slick({//слайдер текст 
        arrows:true,
        prevArrow:$('.slider .slider-left'), 
        nextArrow:$('.slider .slider-right'),
        slidesToShow:1, 
        slidesToScroll: 1, 
        focusOnSelect:true,
        swipe: false
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        loop:true,
        loopedSlides: 4, //looped slides should be the same  
        grabCursor: true,
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        touchRatio: 0.2,
        loop:true,
        loopedSlides: 4, //looped slides should be the same
        slideToClickedSlide: true,
        grabCursor: true,
        slideToClickedSlide: true,
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            400: {
                slidesPerView: 2,
            }
        }
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;
//    $('.line-slider .container').slick({
//    infinte: true,
//    speed: 300,
//    slidesToShow: 4,
//    slidesToScroll: 1,
//    asNavFor: '.line-slider .container',
//    arrows: true,
//    responsive: [
//        {
//            breakpoint: 979,
//            settings: {
//                slidesToShow: 3,
//                infinte: true,
//                
//            }
//        },
//        {
//            breakpoint: 767,
//            settings: {
//                slidesToShow: 2,
//                infinte: true
//            }
//        },
//        {
//            breakpoint: 535,
//            settings: {
//                slidesToShow: 1,
//                infinte: true
//            }
//        }
//    ]
//});                     
});