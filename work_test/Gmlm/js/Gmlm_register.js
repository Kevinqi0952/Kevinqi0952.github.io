/**
 * Created by wujiaqi on 2016/4/1.
 */

$(function(){
    //ȡ���ֻ���������
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
    //��ȡ������֤��������ʱ
    $(function  () {
        //��ȡ������֤��
        var validCode=true;
        $("#register_getcode").click (function() {
            var time=10;
            var code=$(this);

            code.removeClass("register_click");
            if (validCode) {
                validCode=false;
                var t = setInterval(function() {
                    time--;
                    code.html(time+ "S ");
                    code.removeClass("register_click");
                    if (time==0) {
                        clearInterval(t);
                        code.html("获取验证码");
                        validCode=true;
                        code.removeClass("register_click");
                        code.addClass("register_click");
                    }
                },1000)
            }
        })
    })
})