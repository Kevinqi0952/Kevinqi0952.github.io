/**
 * Created by yurong on 2016/4/15.
 */


$(function(){
    $(window).scroll(function(){
            var top = $('.common-go-top').offset().top;

            if(top < 1000){
                //alert(top);
                $('.common-go-top').fadeOut(500)
            } else{
                $('.common-go-top').fadeIn(500);
            }

        }
    )
    $('.common-go-top').click(function(){
        var speed = 500;
        //var scrollTop = $(window).scrollTop;

        $('html,body').animate({ scrollTop: 0 }, speed);
    })
})