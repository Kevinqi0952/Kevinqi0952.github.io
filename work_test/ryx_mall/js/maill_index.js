/**
 * Created by yurong on 2016/4/29.
 */
$(function(){
    //导航栏顶部吸附
    var navTop = $('.mall-nav-fixed').offset().top;

    $(window).scroll(function(){
        if($(window).scrollTop() >= navTop){
            $('.mall-nav-fixed').css({
                "position":"fixed",
                "top":"0",
            });
        } else{
            $('.mall-nav-fixed').css({
                "position":"relative"
            });
        }
    })
})

//function menuFixed(id){
//    var obj = document.getElementById("mall-nav-fixed");
//    var _getHeight = obj.offsetTop;
//
//    window.onscroll = function(){
//        changePos(id,_getHeight);
//    }
//}
//function changePos(id,height){
//    var obj = document.getElementById("mall-nav-fixed");
//    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//    if(scrollTop < height){
//        obj.style.position = 'relative';
//    }else{
//        obj.style.position = 'fixed';
//        obj.style.top = "0";
//        /*给元素添加`fixed`固定属性
//         也可以添加写好的CSS样式`obj.className = 'fix_css';`*/
//    }
//}
//window.onload = function(){
//        menuFixed('nav');
//    }
