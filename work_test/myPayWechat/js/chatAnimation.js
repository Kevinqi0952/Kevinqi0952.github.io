/**
 * Created by yurong on 2016/6/8.
 */

window.onload = $(function(){
    
    var audioEle = $("#audio")[0];

    setTimeout(fadeIn01,1000);

    function fadeIn01(){
        $('#chat-info01').css('display','block');
        $('#chat-man01').css('display','block');
        audioEle.play();
        setTimeout(fadeIn02,1500)
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
    }
})