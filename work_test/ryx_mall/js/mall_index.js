/**
 * Created by yurong on 2016/4/29.
 */
$(function(){
    // //导航栏顶部吸附
    // var navTop = $('.mall-nav-fixed').offset().top;
    // var ua = navigator.userAgent.toLowerCase();

    // if (/iphone|ipad|ipod/.test(ua)) {
    //     console.log("iphone");
    // } else if (/android/.test(ua)) {
    //     $(window).scroll(function(){
    //         if($(window).scrollTop() >= navTop){
    //             $('.mall-nav-fixed').css({
    //                 "position":"fixed",
    //                 "top":"0",
    //             });
    //         } else{
    //             $('.mall-nav-fixed').css({
    //                 "position":"relative"
    //             });
    //         }
    //     })
    // }
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
    //弹出导航栏点击跳转锚点
    $('.chose-alert-list li').click(function () {
        //li点击切换颜色
        if(!$(this).hasClass('alert-nav-active')){
            $('.chose-alert-list li').removeClass('alert-nav-active');
            $(this).addClass('alert-nav-active');
        }
    })
    $('.chose-alert-list li').click(function(){
        //弹出导航栏点击事件
        var hostLi = $(this).index();

        $('.mall-nav-scroll li').removeClass('nav-chose');
        $('.mall-nav-scroll li').eq(hostLi).addClass('nav-chose');
        setTimeout(function () {
            $("html,body").animate({scrollTop:$(".chose-scroll-content").children("li").eq(hostLi).offset().top},500);
            $('.alert-nav').hide();
            $(".mask").hide();
            $("body,html").css({"overflow":"visible"});
        }, 100);
    })
    $('.mall-nav-fixed li').click(function(){
        //横排导航栏点击事件
        var hostLi = $(this).index();
        //弹出导航栏同步
        $('.chose-alert-list li').removeClass('alert-nav-active');
        $('.chose-alert-list li').eq(hostLi).addClass('alert-nav-active');
        //点击添加样式
        if(!$(this).hasClass('nav-chose')){
            $('.mall-nav-fixed li').removeClass('nav-chose');
            $(this).addClass('nav-chose');
        }
        //点击跳转指定位置
        setTimeout(function () {
            $("html,body").animate({scrollTop:$(".chose-scroll-content").children("li").eq(hostLi).offset().top-48},500);
            $("body,html").css({"overflow":"visible"});
        }, 100);
    })
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
})


