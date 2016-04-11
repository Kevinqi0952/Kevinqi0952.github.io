/**
 * Created by yurong on 2016/4/11.
 */

//详情弹出
$('#understanding').click(function(){
    $('.understanding-details').css('left',($(window).width() - $('.understanding-details').outerWidth())/2);
    $('.understanding-details').css('top',($(window).height() - $('.understanding-details').outerHeight())/2+$(window).scrollTop());
    $('.understanding-details').show();
    $(".mask").css("height",$(document).height());
    $(".mask").css("width",$(document).width());
    $(".mask").show();
    $("body,html").css({"overflow":"hidden"});
})

$('.details-close').click(function(){
    $('.understanding-details').css("display","none");
    $(".mask").hide();
    $("body,html").css({"overflow":"visible"});
})
$('.mask').click(function(){
    $('.understanding-details').css("display","none");
    $(".mask").hide();
    $("body,html").css({"overflow":"visible"});
})
//问号弹出
