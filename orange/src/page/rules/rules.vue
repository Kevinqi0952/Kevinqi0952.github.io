<template>
  <div class="page-rules">
    <v-header :header="header"></v-header>
  </div>
</template>

<script type="text/ecmascript-6">
import header from '../../components/header/header.vue'

// 正在拍卖
export default {
  name: 'me',
  data() {
    return {
      header: {
        title: "拍卖规则",//header题目
        color: "#2678f2",//导航颜色
        left: true,//左边返回是否显示
        rightType: '',//右侧类型 不赋值为不显示，share为显示分享btn，info为显示个人中心btn
        textColor:'#ffffff',
        whiteIcon:true
      }
    }
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
