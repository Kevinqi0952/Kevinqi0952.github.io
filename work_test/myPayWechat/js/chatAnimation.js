/**
 * Created by yurong on 2016/6/8.
 */

window.onload = $(function(){
    var audioEle = $("#audio")[0];

    setTimeout(fadeIn01,1500);
    function fadeIn01(){
        $('#chat-info01').css('display','block');
        $('#chat-man01').css('display','block');
        audioEle.play();
        setTimeout(fadeIn02,1500);
    }
    function fadeIn02(){
        $('#chat-woman01').css('display','block');
        audioEle.play();
        setTimeout(fadeOut03,1500)
    }
    function fadeOut03(){
        $('#chat-man01').css('display','none');
        $('#chat-info02').fadeIn();
        setTimeout(fadeIn04,1800)
    }
    function fadeIn04(){
        $('#chat-woman02').css('display','block');
        audioEle.play();
        if(($('#chat-details').height()+$('.content-bottom-fixed').height()) >= $(window).height()){
            $('.chat-details').animate({marginTop:'-'+( $('#chat-details').height() - $(window).height())-$('.content-bottom-fixed').height()})
        }
        setTimeout(fadeIn05,1800)
    }
    function fadeIn05(){
        $('#chat-woman03').css('display','block');
        audioEle.play();
        if(($('#chat-details').height()+$('.content-bottom-fixed').height()) >= $(window).height()){
            $('.chat-details').animate({marginTop:'-'+( $('#chat-details').height() - $(window).height())-$('.content-bottom-fixed').height()})
        }
        setTimeout(fadeIn06,1800)
    }
    function fadeIn06(){
        $('#chat-man02').css('display','block');
        audioEle.play();
        if(($('#chat-details').height()+$('.content-bottom-fixed').height()) >= $(window).height()){
            $('.chat-details').animate({marginTop:'-'+( $('#chat-details').height() - $(window).height())-$('.content-bottom-fixed').height()})
        }
        setTimeout(fadeIn07,1800)
    }
    function fadeIn07(){
        $('#chat-man03').css('display','block');;
        audioEle.play();
        if(($('#chat-details').height()+$('.content-bottom-fixed').height()) >= $(window).height()){
            $('.chat-details').animate({marginTop:'-'+( $('#chat-details').height() - $(window).height())-$('.content-bottom-fixed').height()})
        }
        setTimeout(fadeIn08,1800)
    }
    function fadeIn08(){
        $('#chat-man04').css('display','block');
        audioEle.play();
        if(($('#chat-details').height()+$('.content-bottom-fixed').height()) >= $(window).height()){
            $('.chat-details').animate({marginTop:'-'+( $('#chat-details').height() - $(window).height())-$('.content-bottom-fixed').height()})
        }
        setTimeout(fadeIn09,1800)
    }
    function fadeIn09(){
        $('#chat-woman04').css('display','block');
        audioEle.play();
        if(($('#chat-details').height()+$('.content-bottom-fixed').height()) >= $(window).height()){
            $('.chat-details').animate({marginTop:'-'+( $('#chat-details').height() - $(window).height())-$('.content-bottom-fixed').height()})
        }
        setTimeout(fadeIn10,1800)
    }
    function fadeIn10(){
        $('#chat-man05').css('display','block');
        audioEle.play();
        if(($('#chat-details').height()+$('.content-bottom-fixed').height()) >= $(window).height()){
            $('.chat-details').animate({marginTop:'-'+( $('#chat-details').height() - $(window).height())-$('.content-bottom-fixed').height()})
        }
        setTimeout(fadeIn11,1800)
    }
    function fadeIn11(){
        $('#chat-man06').css('display','block');
        audioEle.play();
        if(($('#chat-details').height()+$('.content-bottom-fixed').height()) >= $(window).height()){
            $('.chat-details').animate({marginTop:'-'+( $('#chat-details').height() - $(window).height())-$('.content-bottom-fixed').height()})
        }
        setTimeout(fadeIn12,1800)
    }
    function fadeIn12(){
        $('#chat-man07').css('display','block');
        audioEle.play();
        if(($('#chat-details').height()+$('.content-bottom-fixed').height()) >= $(window).height()){
            $('.chat-details').animate({marginTop:'-'+( $('#chat-details').height() - $(window).height())-$('.content-bottom-fixed').height()})
        }
        setTimeout(videoPlay,1800)
    }
    function videoPlay(){
        var myVideo =  $("#video")[0];

        var eventTester = function(e){
            myVideo.addEventListener(e,function(){
                if(e = "ended"){
                    fadeIn13();
                    $('#videoImg').css('display','block');
                }
            },false);
        }

        $('#videoImg').click(function(){
            $('#videoImg').css('display','none');
            $('#video').css('display','block');
            myVideo.play();
        })
        eventTester('ended');
    }
    function fadeIn13(){
        $('#chat-woman05').css('display','block');
        audioEle.play();
        if(($('#chat-details').height()+$('.content-bottom-fixed').height()) >= $(window).height()){
            $('.chat-details').animate({marginTop:'-'+( $('#chat-details').height() - $(window).height())-$('.content-bottom-fixed').height()})
        }
        setTimeout(goShow,3000);
    }
    function goShow(){
        location.href="showLife.html";
    }
})
