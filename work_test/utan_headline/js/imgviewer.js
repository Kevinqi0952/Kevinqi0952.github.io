 /**
 * Created by yurong on 2016/8/16.
 */

 $('.content-text').find('img').click(function(){
     var aImg = new Image();
     var url = $(this).attr('src');

     $('#view-img-box').append('<img/>')
     $('#view-img-box').find('img').attr('src',url);

     $('#view-img-box').css('top',($(window).height() - $('#view-img-box').outerHeight())/2+$(window).scrollTop());
     $(".mask").css("height",$(document).height());
     $(".mask").css("width",$(document).width());
     $(".mask").show();
     $("body,html").css({"overflow":"hidden","height":"100%"});

     // if($('#view-img-box').outerHeight()<$(window).height()){
     //     $('#view-img-box').css('top',($(window).height() - $('#view-img-box').outerHeight())/2+$(window).scrollTop());
     //     $(".mask").css("height",$(document).height());
     //     $(".mask").css("width",$(document).width());
     //     $(".mask").show();
     //     $("body,html").css({"overflow":"hidden","height":"100%"});
     // } else{
     //
     // }
 });
 
 $('.mask').on('click',function(){
     $('.utan-main').attr('style','');
     $(".mask").hide();
     $('#view-img-box').find('img').remove();

     $("body,html").css({"overflow":"visible"});
 })

 $('#view-img-box').on('click',function(){
     $('.utan-main').attr('style','');
     $(".mask").hide();
     $('#view-img-box').find('img').remove();

     $("body,html").css({"overflow":"visible"});
 })