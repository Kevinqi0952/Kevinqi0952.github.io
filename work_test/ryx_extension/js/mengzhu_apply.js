/**
 * Created by yurong on 2016/4/7.
 */

$(function(){
    //判断手机号是否正确
    $("#apply-next-btn").click(function(){
        var isMobile=/^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;//手机号码验证规则
        var dianhua = $("#apply-phone").val();                   //获得用户填写的号码值 赋值给变量dianhua

        //手机号码验证
        if(!isMobile.test(dianhua)){ //如果用户输入的值不满足手机号
            alert("手机号输入错误，请重新输入");
            $("#apply-phone").focus();//获取光标，弹出输入键盘
            return false;
        }
    })
    //点击切换性别
    $('.checked-box').click(function(){

        if($(this).hasClass("checked-sex-active")){

        } else{
            $('.checked-box').removeClass("checked-sex-active");
            $(this).addClass("checked-sex-active");
        }
    })
    //选择是否加盟
    $('.cost-checked').click(function(){

       if($(this).hasClass("cost-checked-active")){
           $(this).removeClass("cost-checked-active");
        } else{
            $(this).addClass("cost-checked-active");
        }
    })
})