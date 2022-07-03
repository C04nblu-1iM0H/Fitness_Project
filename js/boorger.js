$(document).ready(function() {
    $('.header__burger').click(function(){
        $('.header__burger, .header__menu, .body, .header__body').toggleClass('active');
        $('body').toggleClass('lock')
    });
});