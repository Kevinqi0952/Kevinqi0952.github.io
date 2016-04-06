/**
 * Created by yurong on 2016/4/6.
 */
    //验证码倒计时
$(function  () {
    var validCode=true;
    $("#code-btn-active").click (function() {
        var time= 60;
        var code=$(this);

        code.addClass("code-btn-active");
        if (validCode) {
            validCode=false;
            var t = setInterval(function() {
                time--;
                code.html(time+ "S");
                code.addClass("code-btn-active");
                if (time==0) {
                    clearInterval(t);
                    code.html("获取验证码");
                    validCode=true;
                    code.addClass("code-btn-active");
                    code.removeClass("code-btn-active");
                }
            },1000)
        }
    })
})
