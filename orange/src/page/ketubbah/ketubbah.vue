<template>
  <div class="page-ketubbah">
    <v-header :header="header"></v-header>
    <div class="ketubbah-content">
      <div class="header-content">
        <div class="header-img-box">
          <img src="../../image/ketubbah/payIcon.png" alt="保证金">
        </div>
        <div class="header-price-content"><p>保证金</p><p>¥100</p></div>
      </div>
      <div class="text-content">
        <p>首次出价需要您支付相应的保证金</p>
        <p>拍卖不成功将退回。拍卖成功付完款后保证金会退回</p>
      </div>
    </div>
    <div class="bottom-btn"><router-link :to="{ name: 'Details', params: { offer:true } }">提交保证金</router-link></div>
  </div>
</template>

<script type="text/ecmascript-6">
import header from '../../components/header/header.vue'

// 保证金
export default {
  name: 'me',
  data() {
    return {
      header: {
        title: "缴纳保证金",//header题目
        color: "#eeeeee",//导航颜色
        left: true,//左边返回是否显示
        rightType: ''//右侧类型 不赋值为不显示，share为显示分享btn，info为显示个人中心btn
      }
    }
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.ketubbah-content
  padding:20px 0 10px 0;
  background:url('../../image/ketubbah/payBg.jpg');
  background-position:center;
  background-size:cover;
  box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  .header-content
    overflow:hidden;
    .header-img-box
      width:93px;
      margin:0 auto;
      & > img
        width:100%;
    .header-price-content
      text-align:center;
      & > p
        color:#000000;
        font-size:20px;
        margin-top:10px;
  .text-content
    margin-top:10px;
    & > p
      text-align:center;
      margin-top:5px;
      font-size:12px;
.bottom-btn
  width:100%;
  height:47px;
  background-color:#ff0000;
  color:#ffffff;
  font-size:16px;
  text-align:center;
  line-height:47px;
  position:fixed;
  left:0;
  bottom:0;
  &:active
    background-color:#a10202;
  & > a
    color:#ffffff;
    width:100%;
    height:47px;
    display:block;
</style>
