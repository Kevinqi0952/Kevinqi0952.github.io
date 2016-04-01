/**
 * Created by wujiaqi on 2016/4/1.
 */

$(function(){
    //取消手机号码文字
    $('.register_phone span').click(function(){
        $('.register_phone input').val("");
    })
    //checked
    $('.bottom-checked').click(function(){
        var thisSpan = $('.bottom-checked span')
        var displaySpan = $('.bottom-checked span').css("display")

        if(displaySpan == "none"){
            thisSpan.css("display","block");
        } else{
            thisSpan.css("display","none");
        }
    })
    //获取短信验证码点击倒计时
    
})