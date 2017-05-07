<template>
<div class="page-start">
  <v-header :header="header"></v-header>
  <v-nav :nav="nav"></v-nav>
  <v-list :list="listData" :type="listType"></v-list>
</div>
</template>

<script type="text/ecmascript-6">
import header from '../../components/header/header.vue';
import nav from '../../components/nav/nav.vue';
import list from '../../components/list/list.vue'

// 正在拍卖
export default {
  name: 'under-auction',
  data() {
    return {
      header: {
        title: "海上通拍卖", //header题目
        color: "#eeeeee", //导航颜色
        left: false, //左边返回是否显示
        rightType: 'info', //右侧类型 none为不显示，share为显示分享btn，info为显示个人中心btn
      },
      nav: {
        active: "start" //当前页面
      },
      request: {
        url: 'http://oa.bxshare.cn/api/paimai/getListV1',//请求地址
        params: {
          //请求参数
          action: 'bidding',
          lastId: 0
        }
      },
      listType:'bidding',//列表类型
      listData:{}//列表数据

    }
  },
  created() {
    const _this = this;

    //请求正在拍卖列表数据
    this.$http.post(_this.request.url,_this.request.params,
      {
        emulateJSON:true,
        headers:{Accept:'application/hst-h5'},
        credientials:true
      }
    ).then((response) => {
      response = response.body.data.localData
      _this.listData = response.list
    })
  },
  components: {
    'v-header': header,
    'v-nav': nav,
    'v-list':list
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.page-start
  background-color:#ffffff;
</style>
