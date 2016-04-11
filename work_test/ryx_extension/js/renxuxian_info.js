/**
 * Created by yurong on 2016/4/11.
 */

$(function(){
    $('.sex-checked').click(function(){
        if($(this).hasClass('sex-checked-active')){

        } else{
            $('.sex-checked').removeClass("sex-checked-active");
            $(this).addClass("sex-checked-active");
        }
    })
})