<template>
  <div class="page-begin">
    <v-header :header="header"></v-header>
    <v-nav :nav="nav"></v-nav>
    <p>即将开始</p>
  </div>
</template>

<script type="text/ecmascript-6">
import header from '../../components/header/header.vue';
import nav from '../../components/nav/nav.vue';

// 正在拍卖
export default {
  name: 'under-auction',
  data() {
    return {
      header: {
        title: "test",//header题目
        color: "#eeeeee",//导航颜色
        left: false,//左边返回是否显示
        rightType: 'info',//右侧类型 none为不显示，share为显示分享btn，info为显示个人中心btn
      },
      nav:{
        active:"begin"//当前页面
      }
    }
  },
  components: {
    'v-header': header,
    'v-nav': nav
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.page-begin
  background-color:#ffffff;

</style>
