<template>
<div class="page-add-address">
  <v-header :header="header"></v-header>
  <div class="add-address-content">
    <table>
      <tr>
        <td>收货人姓名:</td>
        <td><input type="text" name="name"></td>
      </tr>
      <tr>
        <td>收货地址:</td>
        <td><input type="text" name="address"></td>
      </tr>
      <tr>
        <td>联系电话:</td>
        <td><input type="tel" name="phone"></td>
      </tr>
      <tr>
        <td>邮政编码:</td>
        <td><input type="tel" name="addressno"></td>
      </tr>
    </table>
  </div>
  <div class="bottom-btn">确定</div>
</div>
</template>

<script type="text/ecmascript-6">
import header from '../../components/header/header.vue'

// 我的地址
export default {
  name: 'addaddress',
  data() {
    return {
      header: {
        title: "新增地址", //header题目
        color: "#ffffff", //导航颜色
        left: true, //左边返回是否显示
        rightType: '', //右侧类型 不赋值为不显示，share为显示分享btn，info为显示个人中心btn
      }
    }
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/style/mixin.styl';

.add-address-content
  box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  padding:15px 20px 0 15px;
  & > table
    width:100%;
    & > tr
      height:36px;
      border-bottom:1px solid #c4c4c4;
      & > td
        color:#000000;
        font-size:13px;
        line-height:36px;
        &:nth-child(1)
          width:80px;
        & > input
          background-color:#eeeeee;
          border:none;
          height:36px;
          line-height:36px;
          width:100%;
.bottom-btn
  width:100%;
  height:48px;
  background-color:#2678f2;
  color:#ffffff;
  font-size:16px;
  text-align:center;
  line-height:48px;
  position:fixed;
  left:0;
  bottom:0;


</style>
