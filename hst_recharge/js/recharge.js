$(function(){
  function screenSizeSetting()
   {
       if($(window).width()<=640){
           $('html').css("font-size",$(window).width()*125/320+"%");
       }else{
           $('html').css("font-size",640*125/320+"%");

       }
   }
   $(function()
   {
       screenSizeSetting();
       $(window).resize(screenSizeSetting);
   });

   //输入长度大于0出现清除按钮
   $('.input-details').bind('input propertychange',function(){
     var inputLength = $(this).val().length;

     if(inputLength > 0){
       $('.close-icon').css('display','inline-block');
     }else{
       $('.close-icon').css('display','none');
     }
   })

   //清除input的value值
   $('.close-icon').on('click',function(){
      $('.input-details').val('');
      $('.close-icon').css('display','none');
   })

   //点击选中套餐
   $('.recharge-list li').on('click',function(){
     var _this = $(this);

     if(!_this.hasClass('active-list')){
       $('.recharge-list li').removeClass('active-list');
       _this.addClass('active-list');
     }
   })

   //button样式
   function addActiveBtnClass(){
     $('.recharge-bottom button').addClass('active-button');
     $('.recharge-bottom button').find('span').text('支付中...');
   }
   function removeActiveBtnClass(){
     $('.recharge-bottom button').removeClass('active-button');
     $('.recharge-bottom button').find('span').text('支付');
   }

   $('.recharge-bottom button').on('click',function(){
     var _this = $(this);
     addActiveBtnClass();
   })
})
