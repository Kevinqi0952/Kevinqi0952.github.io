/**
 * Created by yurong on 2016/4/29.
 */
$(function(){
    //导航栏顶部吸附
    var navTop = $('.mall-nav-fixed').offset().top;

    $(window).scroll(function(){
        if($(window).scrollTop() >= navTop){
            $('.mall-nav-fixed').css({
                "position":"fixed",
                "top":"0",
            });
        } else{
            $('.mall-nav-fixed').css({
                "position":"-webkit-sticky",
                "position":"relative"
            });
        }
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
    var doc = document;
    doc.addEventListener("touchstart",  startTouchScroll, false);
    doc.addEventListener("touchmove", moveTouchScroll, false);
    doc.addEventListener("touchend",  endTouchScroll, false);
    var startY, endY, startX, endX;
    function startTouchScroll(event)
    {
        var touch = event.touches[0];
        startX = touch.pageX;
        startY = touch.pageY;
    }
    function moveTouchScroll(event)
    {
        var touch = event.touches[0];
        endX = touch.pageX;
        endY = touch.pageY;
    }
    function endTouchScroll(event)
    {
        //在这里判断也可以
        /*var touch = event.touches[0];
         if(!touch){
         return ;
         }
         endX = touch.pageX;
         endY = touch.pageY;
         */

        //判断移动的点,1为手指向下滑动,-1为手指向上滑动
        var scrollDirection = (endY - startY) > 0 ? 1 : -1;
        //判断移动的点,1为手指向右滑动,-1为手指向左滑动
        var scrollTranslation = (endX - startX) > 0 ? 1 : -1;
        //计算滑动距离
        var scrollDistance = Math.abs(endY - startY);
    }

})


