/**
 * Created by yurong on 2016/4/29.
 */
$(function(){
    //导航栏顶部吸附
    var navTop = $('.mall-nav-fixed').offset().top;
    var fixeHigh = $('.mall-nav-fixed').height();

    $(window).scroll(function(){
        console.log(fixeHigh);
        if($(window).scrollTop() >= navTop){
            $('.mall-nav-fixed').css({
                "position":"fixed",
                "top":"0"
            });
            $(".content-hot").css("margin-top",fixeHigh + "px")
        } else{
            $('.mall-nav-fixed').css({
                "position":"relative"
            });
            $(".content-hot").css("margin-top","0")
        }
    })
})
