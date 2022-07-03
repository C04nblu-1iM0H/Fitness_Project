$(document).ready(function(){
    let flag = false;
    $('.content_toggle_view, .content_toggle_hide').click(function(){
        if(!flag){
            $('.content_toggle_view').hide(600);
            $('.content_toggle_hide').show(600);
            $('.header__To__list').fadeIn(600);
        }else{
            $('.content_toggle_view').show(600);
            $('.content_toggle_hide').hide(600);
            $('.header__To__list').fadeOut(600);
        }
        flag = !flag;
    });
});