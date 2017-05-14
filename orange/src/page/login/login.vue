<template>
  <div class="page-login">
    <div class="login-header">
      <div class="header-logo">
        <img src="../../image/login/logoImg.png" alt="海上通">
      </div>
      <div class="header-name">生鲜拍卖平台</div>
    </div>
    <div class="login-content">
      <div class="login-username">
        <span></span>
        <input type="text" name="username" placeholder="输入海上通账户">
      </div>
      <div class="login-password">
        <span></span>
        <input type="password" name="password" placeholder="请输入密码">
      </div>
    </div>
    <div class="login-button">登陆</div>
  </div>
</template>

<script type="text/ecmascript-6">
import header from '../../components/header/header.vue'

// 登陆
export default {
  name: 'login',
  data() {
    return {
    }
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/style/mixin.styl';

.page-login
  display:flex;
  position:absolute;
  width:100%;
  height:100%;
  flex-direction:column;
  justify-content:top;
  align-items:center;
  background-image:url('../../image/login/loginBg.jpg');
  background-size:auto 100%;
  background-repeat:repeat-x;
  padding:0 20px;
  box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  .login-header
    margin-bottom:10%;
    .header-logo
      width:80px;
      height:75px;
      margin: 30% auto 27px auto;
      & > img
        width:100%;
    .header-name
      color:#ffffff;
      font-size:22px;
  .login-content
    width:100%;
    padding:6px 15px;
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
    background-color:rgba(255,255,255,0.2);
    border-radius:6px;
    border:0.1px solid rgba(255,255,255,0.3);
    margin-bottom:40px;
    .login-username
      display:flex;
      border-bottom:1px solid rgba(255,255,255,0.6);
      padding:16px;
      & > span
        flex:0 0 40px;
        width:40px;
        height:20px;
        display:block;
        background-center('../../image/login/phoneBtn.png',15.5px,16.5px);
      & > input
        flex:1;
        height:20px;
        line-height:20px;
        background-color:initial;
        font-size:16px;
        color:#ffffff;
        padding:0 15px;
        border-left:1px solid rgba(255,255,255,0.6);
        &::-webkit-input-placeholder
          color: #ffffff;
          opacity:1;
    .login-password
        display:flex;
        padding:16px;
        & > span
          flex:0 0 40px;
          width:40px;
          height:20px;
          display:block;
          background-center('../../image/login/passwordBtn.png',15.5px,16.5px);
        & > input
          flex:1;
          height:20px;
          line-height:20px;
          background-color:initial;
          font-size:16px;
          color:#ffffff;
          padding:0 15px;
          border-left:1px solid rgba(255,255,255,0.8);
          &::-webkit-input-placeholder
            color: #ffffff;
            opacity:1;
  .login-button
    width:100%;
    height:42px;
    color:#ffffff;
    font-size:16px;
    text-align:center;
    line-height:42px;
    border-radius:6px;
    background-color:#357de6;
</style>
