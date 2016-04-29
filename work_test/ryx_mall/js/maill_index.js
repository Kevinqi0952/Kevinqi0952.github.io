/**
 * Created by yurong on 2016/4/29.
 */
$(function(){
    //导航栏顶部吸附
    var navTop = $('.mall-nav-fixed').offset().top;

    $(window).scroll(function(){
        console.log(fixeHigh);
        if($(window).scrollTop() >= navTop){
            $('.mall-nav-fixed').css({
                "position":"fixed",
                "top":"0"
            });
        } else{
            $('.mall-nav-fixed').css({
                "position":"relative"
            });
        }
    })
})
