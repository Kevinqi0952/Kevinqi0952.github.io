/**
 * Created by wujiaqi 2016/3/31.
 */
//SingIn start...
$(function(){
    var signinHeight = $(window).height();
    var signinNewHeight = signinHeight/20 + "rem";//��ȡ����Ļ���¸߶�

    $('.signin-main').css('height',signinNewHeight);//������Ļ�߶�

    //checkedѡ��
    $('.bottom-checked').click(function(){
        var thisSpan = $('.bottom-checked span')
        var displaySpan = $('.bottom-checked span').css("display")

        if(displaySpan == "none"){
            thisSpan.css("display","block");
        } else{
            thisSpan.css("display","none");
        }
    })
})
//SingIn end...