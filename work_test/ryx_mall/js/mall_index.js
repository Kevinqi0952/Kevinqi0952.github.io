/**
 * Created by yurong on 2016/4/29.
 */
$(function(){
    //导航栏顶部吸附
    var navTop = $('.mall-nav-fixed').offset().top;
    var ua = navigator.userAgent.toLowerCase();

    if (/iphone|ipad|ipod/.test(ua)) {
        alert("iphone");
    } else if (/android/.test(ua)) {
        $(window).scroll(function(){
            if($(window).scrollTop() >= navTop){
                $('.mall-nav-fixed').css({
                    "position":"fixed",
                    "top":"0",
                });
            } else{
                $('.mall-nav-fixed').css({
                    "position":"relative"
                });
            }
        })
    }

    //返回顶部
    $(window).scroll(function(){
            var top = $('.mall-go-top img').offset().top;

            if(top < 700){
                $('.mall-go-top').fadeOut(500)
            } else{
                $('.mall-go-top').fadeIn(500);
            }
        })

    $('.mall-go-top').click(function(){
        var speed = 500;
        //var scrollTop = $(window).scrollTop;

        $('html,body').animate({ scrollTop: 0 }, speed);
    })

    //出现弹层+遮罩
    $('#show-alert-nav').click(function(){
        $('.alert-nav').show();
        $(".mask").css("height",$(document).height());
        $(".mask").css("width",$(document).width());
        $(".mask").show();
        $("body,html").css({"overflow":"hidden"});
    })
    //关闭弹层+遮罩
    $('#close-alert-nav').click(function () {
        $('.alert-nav').hide();
        $(".mask").hide();
        $("body,html").css({"overflow":"visible"});
    })
    //出现弹层禁止滚动
    $('.mask').click(function () {
        $('.alert-nav').hide();
        $(".mask").hide();
        $("body,html").css({"overflow":"visible"});
    })

    //跳转锚点
    $('.chose-alert-list li').click(function () {
        //li点击切换颜色
        if(!$(this).hasClass('alert-nav-active')){
            $('.chose-alert-list li').removeClass('alert-nav-active');
            $(this).addClass('alert-nav-active');
        }
    })
    $('#chose-hot').click(function(){
        //跳转到hot品
        setTimeout(function () {
            $("html,body").animate({scrollTop:$("#content-hot").offset().top},500);
            $('.alert-nav').hide();
            $(".mask").hide();
            $("body,html").css({"overflow":"visible"});
        }, 100);
    })
    $('#chose-recommend').click(function(){
        //跳转到recommend品
        setTimeout(function () {
            $("html,body").animate({scrollTop:$("#recommend-commodity").offset().top},500);
            $('.alert-nav').hide();
            $(".mask").hide();
            $("body,html").css({"overflow":"visible"});
        }, 100);
    })

    //导航栏滑动
    $('.mall-nav-fixed li').click(function(){
        
        if(!$(this).hasClass('nav-chose')){
            $('.mall-nav-fixed li').removeClass('nav-chose');
            $(this).addClass('nav-chose');
        }
    })
})


