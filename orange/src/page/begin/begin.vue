<template>
<div class="page-begin">
  <v-header :header="header"></v-header>
  <v-nav :nav="nav"></v-nav>
  <v-list :list="listData" :type="listType"></v-list>
</div>
</template>

<script type="text/ecmascript-6">
import header from '../../components/header/header.vue';
import nav from '../../components/nav/nav.vue';
import list from '../../components/list/list.vue';
// 即将开始
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
        active: "begin" //当前页面
      },
      request: {
        url: '/api/getListOfUpcommingV1', //请求地址
        params: {
          //请求参数
          action: 'upcoming',
          lastId: 0
        }
      },
      listType: 'upcoming', //列表类型
      listData: {} //列表数据

    }
  },
  created() {
    const _this = this;

    //请求即将开始列表数据
    this.$http.get(_this.request.url, _this.request.params, {
      emulateJSON: true,
      headers: {
        Accept: 'application/hst-h5'
      }
    }).then((response) => {
      response = response.body.data.data.localData
      _this.listData = response.list
    })
  },
  components: {
    'v-header': header,
    'v-nav': nav,
    'v-list': list
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.page-begin
  background-color:#ffffff;

</style>
