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
	$('.slider .container').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var $elSlide = $(slick.$slides[currentSlide]);
        var sliderObj = $elSlide.closest('.slick-slider');
        if (sliderObj.hasClass('slide')) {
    return;
        }
    });
     $('.slider .container').slick({//слайдер текст 
        arrows:true,
        prevArrow:$('.slider .slider-left'), 
        nextArrow:$('.slider .slider-right'),
        slidesToShow:1, 
        slidesToScroll: 1, 
        focusOnSelect:true,
        swipe: false,
	  });
		$('.slider .container .slide').each(function(i,val){
		//в каждом сладе находим сладеры
		var bigSlider=$(val).find('.gallery-top');
		var listImg=$(val).find('.gallery-thumbs');
		bigSlider.slick({
			slidesToShow:1,
			slidesToScroll:1, 
			fade:true, 
			focusOnSelect:true,
			arrows:false, 
			asNavFor:listImg //опция использовать указанный сладер как навигацию для этого
		});
		listImg.slick({
			slidesToShow:5, 
			slidesToScroll: 1, 
			focusOnSelect:true, 
			arrows:false,
			asNavFor:bigSlider //опция использовать указанный сладер как навигацию для этого
		});
	});
});
//    var galleryTop = new Swiper('.gallery-top', {
//        spaceBetween: 10,
//        loop:true,
//        loopedSlides: 6, //looped slides should be the same  
//        grabCursor: true,
//    });
//    var galleryThumbs = new Swiper('.gallery-thumbs', {
//        spaceBetween: 1,
//        slidesPerView: 5,
//        touchRatio: 0.2,
//        loop:true,
//        loopedSlides: 6, //looped slides should be the same
//        slideToClickedSlide: true,
//        grabCursor: true,
//        slideToClickedSlide: true,
//        breakpoints: {
//            768: {
//                slidesPerView: 4,
//            },
//            400: {
//                slidesPerView: 3,
//            }
//        }
//    });
//    galleryTop.params.control = galleryThumbs;
//    galleryThumbs.params.control = galleryTop;
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