<template>
  <div class="page-more">
    <v-header :header="header"></v-header>
    <div class="more-content">
      <div class="content-title">
        出价记录
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import header from '../../components/header/header.vue'

// 更多出价
export default {
  name: 'me',
  data() {
    return {
      header: {
        title: "更多出价",//header题目
        color: "#eeeeee",//导航颜色
        left: true,//左边返回是否显示
        rightType: '',//右侧类型 不赋值为不显示，share为显示分享btn，info为显示个人中心btn
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
