/**
 * Created by yurong on 2016/5/5.
 */

$(function(){
    $('.vouchers-nav li').click(function(){
        var aThis = $(this).children("a");
        var liIndex = $(this).index();


        if(!aThis.hasClass('vouchers-active')){
            $('.vouchers-nav li').children("a").removeClass("vouchers-active");
            aThis.addClass("vouchers-active");
            $('.vouchers-details ul').hide();
            $('.vouchers-details ul').eq(liIndex).fadeIn(200);
        }
    })
})
