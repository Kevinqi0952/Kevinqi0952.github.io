$(function(){
  window.deviceGetWay = "";

  //控制显示隐藏
  var contentInfo = {
      show: function(element, mask) {
          element.css('left', ($(window).width() - element.outerWidth()) / 2);
          element.css('top', '15%');
          element.fadeIn();
          mask.css("height", $(document).height());
          mask.css("width", $(document).width());
          mask.show();
          $("body,html").css({"overflow": "hidden"});
      },
      hide: function(element, mask) {
          element.fadeOut();
          mask.hide();
          $("body,html").css({"overflow":"visible"});
      }
  }

  function loginEvent(){
    //登录
    var loginGetWay = $('#input-getway').val();
    var account = $('#input-phone').val();//用户名
    var password = md5($('#input-password').val());//密码
    var url = "http://" + loginGetWay + "/portal.php?op=0&acc=" + account + "&pass-md5=" + password;

    $('#login-submit').text("正在进行上网认证中...");

    $.get(url, function(data){
      var status = data.status;
      var response = data.backend-response;

      if(status == 401){
        alert("账号验证失败，请检查账号密码是否正确");
        $('#login-submit').text("登录");
      }else if (status == 406){
        alert("上网系统操作有误，请联系客服处理");
        $('#login-submit').text("登录");
      }else if (status == 500){
        if((response.indexOf("list:null") != -1) && (response.indexOf("E00") != -1)){
          alert("该账号尚未注册，请联系客服处理");
          $('#login-submit').text("登录");
        }else{
          alert("上网设备异常，请联系客服处理");
          $('#login-submit').text("登录");
        }
      }else if (status == 501){
        alert("服务器故障，请联系客服处理");
        $('#login-submit').text("登录");
      }else if (status == 502){
        alert("卫星网络故障，请联系客服处理");
        $('#login-submit').text("登录");
      }else if (status == 503){
        alert("上网服务暂时无法使用，请联系客服处理");
        $('#login-submit').text("登录");
      }else{
        if(status == 402){
          if(response.indexOf("code=09") != -1){
            alert("流量已不足，暂时无法上网，请先完成充值");
            $('#login-submit').text("登录");
          }else{
            alert("您的账号已被冻结，无法登录，请联系客服处理");
            $('#login-submit').text("登录");
          }
        } else if(status == 200){
          alert("登录成功!");
          $('#login-submit').text("登录");
          contentInfo.hide($('.login-alert-wrapper'),$('.mask'));
        }
      }
    },'json');
  }

  // function logoutEvent(){
  //   //登出
  //   var url = "http://10.20.0.250:61671/go&uid=xxxx&spd=sinosat&sip=ip地址";//退出城市热点url
  //   var url2 = "http://网关IP/portal.php?op="//退出城市热点url
  // }

  //点击显示登录弹层
  $('#login-text').on('click',function(){

    $('#input-phone').val('');
    $('#input-password').val('');
    contentInfo.show($('.login-alert-wrapper'),$('.mask'));
  })
  //点击关闭
  $('.close-icon').on('click',function(){
    contentInfo.hide($('.login-alert-wrapper'),$('.mask'));
  })
  //点击登录
  $('#login-submit').on('click',function(){
    var inputPhone = $('#input-phone').val();
    var inputPassWord = $('#input-password').val();

    if(inputPhone && inputPassWord){
      loginEvent();
    }else{
      alert('您还没有输入登录信息！')
    }
  });

  //点击显示getway
  $("#show-getway").on('click',function(){
    $("#show-getway").hide();
    $("#hide-getway").show();
    $('.getway-input-content').show();
  })
  $("#hide-getway").on('click',function(){
    $("#show-getway").show();
    $("#hide-getway").hide();
    $('.getway-input-content').hide();
  })
})
