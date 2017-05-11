<template>
<div class="page-address">
  <v-header :header="header"></v-header>
  <div class="address-wraper">
    <div class="address-content" v-for="item in adinfos">
      <div class="content-header">
        <div class="info-content">
          <p>姓名:{{item.name}}</p>
          <p>电话:{{item.phone}}</p>
          <p>地址:{{item.address}}</p>
          <p>邮编:{{item.adnum}}</p>
        </div>
        <div class="chose-content">

        </div>
      </div>
      <div class="content-bottom">
        <span>编辑</span>
      </div>
    </div>
    <div class="add-address-btn">
      <router-link to="/address/addaddress">
        <p class="btn-icon">+</p>
        <p class="btn-text">添加地址</p>
      </router-link>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import header from '../../components/header/header.vue'

// 我的地址
export default {
  name: 'address',
  data() {
    return {
      header: {
        title: "收货地址", //header题目
        color: "#ffffff", //导航颜色
        left: true, //左边返回是否显示
        rightType: '', //右侧类型 不赋值为不显示，share为显示分享btn，info为显示个人中心btn
      },
      adinfos: [{
        name: '张三',
        phone: '13322445533',
        address: "上海市长宁区中山西路999号",
        adnum: "200010"
      }, {
        name: '张三',
        phone: '13322445533',
        address: "上海市长宁区中山西路999号",
        adnum: "200010"
      }]
    }
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/style/mixin.styl';

.address-wraper
  padding:0 8px;
  box-sizing:border-box;
  .address-content
    width:100%;
    box-sizing:border-box;
    border:1px solid #c0c0c0;
    background-color:#ffffff;
    margin-top:14px;
    .content-header
      padding:16px
      display:flex;
      align-items:center;
      border-bottom:1px solid #707070;
      .info-content
        flex:1;
        & > p
          font-size:14px;
          line-height:1.6;
      .chose-content
        flex:0 0 60px;
        width:60px;
        height:32px;
        background-center('../../image/address/choseBtn.png',32px,32px);
    .content-bottom
      height:44px;
      line-height:44px;
      text-align:right;
      padding-right:16px;
      & > span
        width:68px;
        height:27px;
        display:inline-block;
        text-align:center;
        line-height:27px;
        border:1px solid #707070;
        font-size:14px;
  .add-address-btn
    width:55px;
    height:55px;
    background-color:#ffffff;
    margin:50px auto;
    & > p
      color:#a0a0a0;
    .btn-icon
      font-size:40px;
      text-align:center;
    .btn-text
      font-size:10px;
      text-align:center;



</style>
