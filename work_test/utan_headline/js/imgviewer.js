 /**
 * Created by yurong on 2016/8/16.
 */

 $('.content-text').find('img').click(function(){
     var aImg = new Image();
     var url = $(this).attr('src');

     $('#view-img-box').append('<img/>')
     $('#view-img-box').find('img').attr('src',url);


     if($('#view-img-box').outerHeight()<$(window).height()){
         $('.utan-main').hide();
         $('#view-img-box').css('top',($(window).height() - $('#view-img-box').outerHeight())/2+$(window).scrollTop());
         $(".mask").css("height",$(window).height());
         $(".mask").css("width",$(window).width());
         $(".mask").show();
         $("body,html").css({"overflow":"hidden","height":"100%"});
     } else{
         $('#view-img-box').css('top',0);
         $('.utan-main').height($('#view-img-box').outerHeight());
         $('.utan-main').css({"overflow":"hidden"});
     }
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