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
    flex:0 0 55px;
    width:55px;
    height:38px;
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

</style>
