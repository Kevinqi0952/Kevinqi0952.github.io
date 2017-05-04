<template>
<div class="components-header" v-bind:style="{ backgroundColor:header.color }">
  <div class="header-left">
    <span class="left-back" v-if="header.left"></span>
  </div>
  <div class="header-content">
    <p>{{header.title}}</p>
  </div>
  <div class="header-right">
    <span class="right-info"></span>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'header',
  props: {
    header: {
      type: Object
    }
  },
  data() {
    return {
      headerTitle: 'Welcome'
    }
  },
  method(){},
  created() {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.components-header
  background-color:#ffffff;
  width:100%;
  height:38px;
  display:flex;
  .header-left
    width:55px;
    height:38px;
    & > span
      display:block;
      width:100%;
      height:38px;
    .left-back
      background-image:url('./headerLeftBtn.png');
      background-repeat:no-repeat;
      background-size: 12px 18px;
      background-position:center;
  .header-content
    flex:1;
    text-align:center;
    line-height:38px;
    & > p
      font-size:16px;
      color:#000000;
  .header-right
    width:55px;
    height:38px;
    & > span
      display:block;
      width:100%;
      height:38px;
    .right-info
      background-image:url('./headerInfoBtn.png');
      background-repeat:no-repeat;
      background-size: 25px 25px;
      background-position:center;

</style>
