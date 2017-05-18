<template>
  <div class="page-more">
    <v-header :header="header"></v-header>
    <div class="more-content">
      <div class="content-title">出价记录({{historyListData.length}})</div>
      <div class="content-details">
        <ul>
          <li v-for="(item,index) in historyListData" class="details-li-content">
            <p class="info-name">{{item.userInfo.realname}}</p>
            <p class="info-price"><span>{{index == 0? '领先':'出局'}}</span>￥{{item.price}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="more-btn">确定</div>
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
        color: "#ffffff",//导航颜色
        left: true,//左边返回是否显示
        rightType: '',//右侧类型 不赋值为不显示，share为显示分享btn，info为显示个人中心btn
      },
      request: {
        url: '/api/getBidHistoryListV1', //请求地址
        params: {
          //请求参数
          lastId: 0,
          productId: this.$route.params.id
        }
      },
      historyListData:{}
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
      _this.historyListData = response.list
      
    })
    
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.more-content
  border-top:10px solid #eeeeee;
  background-color:#ffffff;
  padding:30px 10px 57px 10px;
  box-sizing:border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  &:before
    content: ' ';
    position: fixed;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
  .content-title
    padding:10px 0;
    border-bottom:1px solid #b9b9b9;
    font-size:14px;
    color:#000000;
  .content-details
    .details-li-content
      display:flex;
      padding:10px 0;
      border-bottom:1px solid #b9b9b9;
      font-size:14px;
      color:#000000;
      .info-name
        flex:1;
      .info-price
        font-size:13px;
        color:#a0a0a0;
        & > span
          padding:2px 4px;
          display:inline-block;
          background-color:#a0a0a0;
          color:#ffffff;
          font-size:11px;
          border-radius:5px;
      &:nth-child(1)
        .info-price
          color:#ff0000;
          &>span
            background-color:#ff0000;
.more-btn
  width:100%;
  height:47px;
  background:#2678f2;
  color:#ffffff;
  font-size:16px;
  text-align:center;
  line-height:47px;
  position:fixed;
  left:0;
  bottom:0;
</style>
