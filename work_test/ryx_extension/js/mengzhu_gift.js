/**
 * Created by wujiaqi on 2016/4/8.
 */

$(function(){
    $('#gift-next').click(function(){
        location.href = 'mengzhu_giftA.html';
    })
    $('.chose-gift').click(function(){
        var checked = $(this).children('.chose-checked');
        var activeDiv = $(this).index();
        //选择样式
        if($('.chose-gift').hasClass('chose-chose')){
            $('.chose-gift').children('.chose-checked').removeClass('chose-checked-active');
            $(checked).addClass('chose-checked-active');
        }
        //判断选择页面
        if(activeDiv == 0){
            $('.chose-gift').eq(0).removeClass('chose-not-chose');
            $('.gift-giftB').hide()
            $('.chose-gift').eq(0).addClass('chose-chose');
            $('.chose-gift').eq(1).addClass('chose-not-chose');
            $('.gift-giftA').show()
            $('#gift-next').click(function(){
                location.href = 'mengzhu_giftA.html';
            })
        } else{
            $('.gift-giftA').hide()
            $('.chose-gift').eq(1).removeClass('chose-not-chose');
            $('.chose-gift').eq(1).addClass('chose-chose');
            $('.chose-gift').eq(0).addClass('chose-not-chose');
            $('.gift-giftB').show()
            $('#gift-next').click(function(){
                location.href = 'mengzhu_giftB.html';
            })
        }
    })
})