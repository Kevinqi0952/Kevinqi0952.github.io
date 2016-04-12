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
        } else{
            location.href = 'mengzhu_gift.html';
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

    $('.apply-input input').focus(function()
    {
        var self = $(this);
        if(self.val() == "请填写")
        {
            self.val("");
        }
    }).blur(function()
    {
        if($(this).val() == ""||$(this).val() == " ")
        {
            $(this).val("请填写");
        }
    });
    //选择城市
    $('#chose-city').click(function(){
        $('.apply-city').fadeIn(300);
        $('#province').show();
        $('.apply-content').hide();
    })
    $('#province li').click(function(){
        $('#province').hide();
        $('#city').fadeIn(300);
        var provinceName = $(this).html();
        $('#city li').click(function(){
            $('#city').hide();
            $('.apply-content').show();
            $('.apply-city').hide();
            $('#this-city').css("display","inline-block");
            $('#this-city em').html(provinceName+" "+$(this).html());
        });
    });

    // 选择生日
    $('#chose-birth').click(function(){
        $('.apply-birth').fadeIn(300);
        $('#year').show();
        $('.apply-content').hide();
    })
    $('#year li').click(function(){
        $('#year').hide();
        $('#month').fadeIn(300);
        var year = $(this).html();
        $('#month li').click(function(){
            $("#month").hide();
            $('#day').fadeIn(300);
            var month = $(this).html();
            $('#day li').click(function(){
                $('#day').hide();
                $('.apply-content').show();
                $('.apply-birth').hide();
                $('#this-birth').css("display","inline-block");
                $('#this-birth em').html(year+"年"+month+"月"+$(this).html()+"日");
            });
            //$('.apply-city').hide();
            //$('#this-city').css("display","inline-block");
            //$('#this-city em').html(provinceName+" "+$(this).html());
        });
    });
    //选择职业
    $('#chose-job').click(function(){
        $('.apply-job').fadeIn(300);
        $('.apply-content').hide();
    })
    $('#job li').click(function(){
        $('.apply-job').hide();
        $('.apply-content').show();
        $('#this-job').css("display","inline-block");
        $('#this-job em').html($(this).html());
    })
    //选择月收入
    $('#chose-income').click(function(){
        $('.apply-income').fadeIn(300);
        $('.apply-content').hide();
    })
    $('#income li').click(function(){
        $('.apply-income').hide();
        $('.apply-content').show();
        $('#this-income').css("display","inline-block");
        $('#this-income em').html($(this).html());
    })
    //选择教育程度
    $('#chose-edu').click(function(){
        $('.apply-edu').fadeIn(300);
        $('.apply-content').hide();
    })
    $('#edu li').click(function(){
        $('.apply-edu').hide();
        $('.apply-content').show();
        $('#this-edu').css("display","inline-block");
        $('#this-edu em').html($(this).html());
    })

})