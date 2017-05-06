<template>
  <div class="page-details">
    <v-header :header="header"></v-header>
    {{ $route.params.id }}
  </div>
</template>

<script type="text/ecmascript-6">
import header from '../../components/header/header.vue'

// 正在拍卖
export default {
  name: 'details',
  data() {
    return {
      header: {
        title: "拍卖详情",//header题目
        color: "#ffffff",//导航颜色
        left: true,//左边返回是否显示
        rightType: 'share',//右侧类型 不赋值为不显示，share为显示分享btn，info为显示个人中心btn
      }
    }
  },
  components: {
    'v-header':header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/style/mixin.styl';

</style>
