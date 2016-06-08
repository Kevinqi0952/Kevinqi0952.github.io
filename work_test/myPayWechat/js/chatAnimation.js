/**
 * Created by yurong on 2016/6/8.
 */

window.onload = $(function(){
    var audioEle = $("#audio")[0];
    //$('.chat-details').animate({marginTop:'-1rem'})

    setTimeout(fadeIn01,1000);
    function fadeIn01(){
        $('#chat-info01').css('display','block');
        $('#chat-man01').css('display','block');
        audioEle.play();
        setTimeout(fadeIn02,1500);
    }
    function fadeIn02(){
        $('#chat-woman01').css('display','block');
        audioEle.play();
        setTimeout(fadeOut03,1000)
    }
    function fadeOut03(){
        $('#chat-man01').css('display','none');
        $('#chat-info02').fadeIn();
        setTimeout(fadeIn04,1500)
    }
    function fadeIn04(){
        $('#chat-woman02').css('display','block');
        audioEle.play();
        setTimeout(fadeIn05,1500)
    }
    function fadeIn05(){
        $('#chat-woman03').css('display','block');
        audioEle.play();
        setTimeout(fadeIn06,1500)
    }
    function fadeIn06(){
        $('#chat-man02').css('display','block');
        audioEle.play();
        setTimeout(fadeIn07,1500)
    }
    function fadeIn07(){
        $('#chat-man03').css('display','block');;
        audioEle.play();
        setTimeout(fadeIn08,1500)
    }
    function fadeIn08(){
        $('#chat-man04').css('display','block');
        audioEle.play();
        setTimeout(fadeIn09,1500)
    }
    function fadeIn09(){
        $('#chat-woman04').css('display','block');
        audioEle.play();
        setTimeout(fadeIn10,1500)
    }
    function fadeIn10(){
        $('#chat-man05').css('display','block');
        audioEle.play();
        setTimeout(fadeIn11,1500)
    }
    function fadeIn11(){
        $('#chat-man06').css('display','block');
        audioEle.play();
        setTimeout(fadeIn12,1500)
    }
    function fadeIn12(){
        $('#chat-man07').css('display','block');
        audioEle.play();
        setTimeout(fadeIn13,1500)
    }
    function fadeIn13(){
        $('#chat-woman05').css('display','block');
        audioEle.play();
    }
})