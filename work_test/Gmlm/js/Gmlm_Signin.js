/**
 * Created by wujiaqi 2016/3/31.
 */
//SingIn start...
$(function(){
    var signinHeight = $(window).height();
    var signinNewHeight = signinHeight/20 + "rem";//获取到屏幕的新高度

    $('.signin-main').css('height',signinNewHeight);//设置屏幕高度

    //checked选择
    $('.bottom-checked').click(function(){
        var thisSpan = $('.bottom-checked span')
        var displaySpan = $('.bottom-checked span').css("display")

        if(displaySpan == "none"){
            thisSpan.css("display","block");
        } else{
            thisSpan.css("display","none");
        }
    })
})
//SingIn end...