/**
 * Created by yurong on 2016/4/6.
 */

$(function  () {
    var validCode=true;
    //验证码倒计时
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

    //电话,验证码，密码验证
    $("#register-next-btn").click(function(){
        var isMobile=/^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;//手机号码验证规则
        var dianhua = $("#register-phone").val();                   //获得用户填写的号码值 赋值给变量dianhua
        var plenth = $("#register-password").val().length;//获取密码长度

        //手机号码验证
        if(!isMobile.test(dianhua)){ //如果用户输入的值不满足手机号
            alert("手机号输入错误，请重新输入");
            $("#register-phone").focus();//获取光标
            return false;
        }
        //密码位数验证
        if(plenth < 6){
            alert("您的密码有误，请重试");
            $("#register-password").focus()
            return false;
        } else if(plenth > 20){
            alert("您的密码有误，请重试");
            $("#register-password").focus()
            return false;
        } else{
            location.href = 'mengzhu_apply.html';
        }
    })
})
