<!-- 头部组件
需要传递的数据
1.header
  title：header名称
  color:header背景颜色
  left:左侧返回是否显示
  rightType:右侧btn类型 info || share || release
2.textColor字体颜色 -->


<template>
  <div class="components-header" v-bind:style="{ backgroundColor:header.color }">
    <div class="header-left">
      <span :class="[ header.whiteIcon ? 'left-back-white':'left-back']" v-if="header.left" v-on:click="goBack()"></span>
    </div>
    <div class="header-content">
      <p v-bind:style="{ color:header.textColor }">{{header.title}}</p>
    </div>
    <div class="header-right">
      <span class="right-info" v-if="header.rightType == 'info'"><router-link to="/personal"></router-link></span>
      <span class="right-share" v-if="header.rightType == 'share'"></span>
      <span class="right-release" v-if="header.rightType == 'release'"><router-link to="releaselist/release">发布</router-link></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'header',
  props: {
    header: {
      type: Object
    },
    textColor:{}
  },
  data() {
    return {
      headerTitle: 'header'
    }
  },
  created() {

  },
  methods: {
    goBack(event) {
      window.history.go(-1)
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/style/mixin.styl'

.components-header
  background-color:#ffffff;
  width:100%;
  height:38px;
  display:flex;
  position:fixed;
  left:0;
  top:0;
  z-index:99;
  .header-left
    flex:0 0 55px;
    width:55px;
    height:38px;
    & > span
      display:block;
      width:100%;
      height:38px;
    .left-back
      background-center('./headerLeftBtn.png',12px,18px);
    .left-back-white
        background-center('./headerLeftBtnWhite.png',12px,18px);
  .header-content
    flex:1;
    text-align:center;
    line-height:38px;
    & > p
      font-size:16px;
      color:#000000;
  .header-right
    flex:0 0 70px;
    width:70px;
    height:38px;
    text-align:left;
    & > span
      display:block;
      width:100%;
      height:38px;
      & > a
        display:block;
        width:100%;
        height:38px;
    .right-info
      background-center('./headerInfoBtn.png',25px,25px);
    .right-share
      background-center('./headerShareBtn.png',15px,18px);
    .right-release
      width:50px;
      height:20px;
      font-size:12px;
      text-align:center;
      line-height:20px;
      border:1px solid #000000;
      margin-top:7px;
      & > a
        display:block;
        width:50px;
        height:20px;
        color:#000000;

</style>
