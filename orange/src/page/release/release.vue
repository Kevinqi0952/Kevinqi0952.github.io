<template>
<div class="page-release">
  <v-header :header="header"></v-header>
  <div class="release-header">
    <table>
      <tr>
        <td>产品标题</td>
        <td><input type="text" name="" placeholder="请输入产品标题"></td>
      </tr>
    </table>
    <textarea name="name" rows="4" placeholder="描述一下发布的产品..."></textarea>
    <div class="add-pic">
        <div class="add-pic-icon">
          <p>+</p>
          <p>添加图片</p>
        </div>
    </div>
  </div>
  <div class="release-input-content">
    <table>
      <tr>
        <td>起拍价</td>
        <td><input type="text" placeholder="请输入起拍价"></td>
      </tr>
      <tr>
        <td>预期价</td>
        <td><input type="text" placeholder="心里预期价格"></td>
      </tr>
      <tr>
        <td>保证金</td>
        <td><input type="text" placeholder="自动默认为预期价的50%"></td>
      </tr>
      <tr>
        <td>开始时间</td>
        <td><input type="date"></td>
      </tr>
      <tr>
        <td>结束时间</td>
        <td><input type="date"></td>
      </tr>
      <tr>
        <td>预计到港时间</td>
        <td><input type="date"></td>
      </tr>
    </table>
  </div>
  <div class="release-bottom-btn">开拍啦</div>
</div>
</template>

<script type="text/ecmascript-6">
import header from '../../components/header/header.vue'

// 发布拍卖
export default {
  name: 'addaddress',
  data() {
    return {
      header: {
        title: "发布拍卖", //header题目
        color: "#d5e6ff", //导航颜色
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

.page-release
  width:100%;
  overflow:hidden;
  padding-bottom:100px;
  .release-header
    padding:10px 16px;
    background-color:#ffffff;
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
    & > table
      width:100%;
      & td
        height:28px;
        line-height:28px;
        font-size:14px;
        border-bottom:1px solid #707070;
        &:nth-child(1)
          width:6em;
        & > input
          width:100%;
    & > textarea
      width:100%;
      font-size:14px;
      margin-top:4px;
      border:none;
    .add-pic
      display:flex;
      .add-pic-icon
        width:54px;
        height:54px;
        background-color:#d5e6ff;
        & > p
          text-align:center;
          color:#a0a0a0;
          font-size:0;
          &:nth-child(1)
            font-size:35px;
          &:nth-child(2)
            font-size:10px;
  .release-input-content
    margin-top:10px;
    padding:10px 16px;
    background-color:#ffffff;
    font-size:14px;
    & table
      width:100%;
      & > tr
        height:34px;
        border-bottom:1px solid #707070;
        &:last-child
          border-bottom:none;
        & > td
          line-height:34px;
          &:nth-child(1)
            width:7em;
          & > input
            width:100%;
  .release-bottom-btn
    width:100%;
    height:46px;
    background-color:#2678f2;
    color:#ffffff;
    text-align:center;
    line-height:46px;
    font-size:16px;
    position:fixed;
    left:0;
    bottom:0;

</style>
