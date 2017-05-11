<template>
<div class="page-releaselist">
  <v-header :header="header"></v-header>
  <v-orderlist :orderListData="orderListData" :orderListType="orderListType"></v-orderlist>
</div>
</template>

<script type="text/ecmascript-6">
import header from '../../components/header/header.vue';
import orderlist from '../../components/orderlist/orderlist.vue';

// 已发布的拍卖
export default {
  name: 'addaddress',
  data() {
    return {
      header: {
        title: "我的订单", //header题目
        color: "#ffffff", //导航颜色
        left: true, //左边返回是否显示
        rightType: '', //右侧类型 不赋值为不显示，share为显示分享btn，info为显示个人中心btn,release为发布btn
      },
      request: {
        url: '/api/getMyOrderListV1', //请求地址
        params: {
          //请求参数
          action: 'releaselist',
          lastId: 0
        }
      },
      orderListData:{},
      orderListType:"order"
    }
  },
  created(){
    const _this = this;

    //请求即将开始列表数据
    this.$http.get(_this.request.url, _this.request.params, {
      emulateJSON: true,
      headers: {
        Accept: 'application/hst-h5'
      }
    }).then((response) => {
      response = response.body.data.data.localData
      _this.orderListData = response.list
    })
  },
  components: {
    'v-header': header,
    'v-orderlist':orderlist
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/style/mixin.styl';

</style>
