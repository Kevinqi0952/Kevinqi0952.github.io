/**
 * Created by wujiaqi on 2016/5/15.
 */

//ÂÖ²¥
function imgReload()
{
    var imgHeight = 0;
    var wtmp = $("body").width();

    $("#b06 ul li").each(function(){
        $(this).css({width:wtmp + "px"});
    });
    $(".sliderimg").each(function(){
        $(this).css({width:wtmp + "px"});
        $(this).css({height:0.1875*wtmp + "px"});
    });
}

$(window).resize(function(){imgReload();});

$(document).ready(function(e) {
    imgReload();
    var unslider06 = $('#b06').unslider({
            dots: true,
            fluid: true
        }),
        data06 = unslider06.data('unslider');

    $('.unslider-arrow06').click(function() {
        var fn = this.className.split(' ')[1];
        data06[fn]();
    });
});
//·µ»Ø¶¥²¿
$(function(){
    $(window).scroll(function(){
            var top = $('.go-top').offset().top;

            if(top < 1000){
                //alert(top);
                $('.go-top').fadeOut(500)
            } else{
                $('.go-top').fadeIn(500);
            }

        }
    )
    $('.go-top').click(function(){
        var speed = 500;
        //var scrollTop = $(window).scrollTop;

        $('html,body').animate({ scrollTop: 0 }, speed);
    })
})
//ÁôÑÔ
$('.link-me').click(function(){
    if($('.give-message').is(":hidden")){
        $('.give-message').show(200);
    } else{
        $('.give-message').hide(100);
    }
})
$('.east-nav li').click(function(){
	if (!$(this).hasClass('nav-chose')) {
		
	}
})