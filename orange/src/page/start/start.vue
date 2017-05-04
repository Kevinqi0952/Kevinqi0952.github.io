<template>
  <div class="page-start">
    <v-header :header="header"></v-header>
    <div class="nav-content">
      <div class="start-btn active-btn"><router-link to="/">正在拍卖</router-link></div>
      <div class="begin-btn"><router-link to="/begin">即将开始</router-link></div>
    </div>
    <p>正在拍卖</p>
  </div>
</template>

<script type="text/ecmascript-6">
import header from '../../components/header/header.vue'

// 正在拍卖
export default {
  name: 'under-auction',
  data() {
    return {
      header:{
        title:"海上通拍卖",//header题目
        left:true,//左边返回是否显示
        right:true,//右侧btn是否显示
        color:"#eeeeee",//导航颜色
      }
    }
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/style/listcommon.styl'
</style>
