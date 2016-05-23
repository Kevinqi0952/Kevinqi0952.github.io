/**
 * Created by yurong on 2016/5/23.
 */
$(function(){
    //回到顶部
    $(window).scroll(function(){
            if($(window).scrollTop() < 500){
                $('#go-top').fadeOut(500)
            } else{
                $('#go-top').fadeIn(500);
            }
        }
    )
    $('#go-top').click(function(){
        var speed = 500;

        $('html,body').animate({ scrollTop: 0 }, speed);
    })
    //打开关闭弹出层
    $('.chose-info-spec').click(function(){
        $(".mall-commodity").hide();
        $(".mall-commodity-alert").fadeIn(300);
    })
    $(".header-left-btn").click(function(){
        $(".mall-commodity").fadeIn(300);
        $(".mall-commodity-alert").hide();
    })
    //选择信息
    $('.attribute-info').find('li').click(function(){
        if(!$(this).hasClass('info-active')){
            $(this).parents('.attribute-info').find('li').removeClass('info-active');
            $(this).addClass('info-active');

            $('#chose-info').text($(this).text(getTextByJquery()));

            function getTextByJquery() {
                var str = "";

                $('.info-active').each(function () {
                    str += $(this).text()+ " ";
                });
                return str;
            }
        }
    })
    //增加减少数字
    $('.del-purchase-number').click(function(){
        var pNum = parseInt($('#pNum').text());
       $('#pNum').html(pNum - 1);
        if(pNum <= 1){
          $('#pNum').html(1);
        }
    })
    $('.add-purchase-number').click(function(){
        var pNum = parseInt($('#pNum').text());
        $('#pNum').html(pNum + 1);
    })
    //拼接字符串

})
