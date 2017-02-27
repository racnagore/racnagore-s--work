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
});