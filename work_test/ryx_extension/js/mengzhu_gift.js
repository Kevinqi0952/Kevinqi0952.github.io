/**
 * Created by wujiaqi on 2016/4/8.
 */

$(function(){
    $('.chose-gift').click(function(){
        var checked = $(this).children('.chose-checked');

        //商品选择
        if(checked.hasClass('chose-checked-active')){

        } else{
            $('.chose-gift').children('.chose-checked').removeClass('chose-checked-active');
            $(checked).addClass('chose-checked-active');
        }
    })
    //切换商品及详情动画
})