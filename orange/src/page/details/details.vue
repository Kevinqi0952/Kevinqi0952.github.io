<template>
<div class="page-details">
  <v-header :header="header"></v-header>
  <div class="details-header">
    <div class="header-info">
      <p>{{detailsData.isStart == 1 ? '距离拍卖结束时间 ':'距离拍卖开始时间'}} {{detailsData.endTime}}</p>
    </div>
    <div class="swiper-content">
      <img src="http://oa.bxshare.cn/asset/img/paimai/detail.png" alt="轮播图片">
    </div>
    <div class="info-content">
      <div class="info-text">
        <p class="title">产品描述:</p>
        <p>{{detailsData.desc}}</p>
      </div>
      <div class="info-text">
        <p class="title">预计到港时间:</p>
        <p>{{detailsData.arrivalTime}}</p>
      </div>
    </div>
  </div>
  <div class="details-content">
    <div class="rules-btn">
      <router-link to="/rules">
        <span class="rules-icon"></span>
        <p>拍卖规则</p>
        <span class="nextBtn"></span>
      </router-link>
    </div>
    <div class="record-content">
      <p class="record-title">出价记录({{recordData.total}})</p>
      <div class="record-list">
        <div class="list-details" v-for="(item,index) in recordData.list">
            <div class="name">
              {{item.userInfo.realname}}
            </div>
            <div class="price" v-if="index == 0">
              <span class="text-icon">领先</span><span class="text-red">¥{{item.price}}</span>
            </div>
            <div class="price" v-else>
               ¥{{item.price}}
            </div>
        </div>
      </div>
      <div class="record-more"><router-link to="/details/:id/morerecord">更多出价</router-link></div>
    </div>
  </div>
  <div class="more-content"></div>
  <div class="bottom-button">
    <div class="button-info">当前:<span>¥{{detailsData.price}}</span></div>
    <div class="button-content">出价</div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import header from '../../components/header/header.vue'

// 详情页
export default {
  name: 'details',
  data() {
    return {
      header: {
        title: "拍卖详情", //header题目
        color: "#eeeeee", //导航颜色
        left: true, //左边返回是否显示
        rightType: 'share', //右侧类型 不赋值为不显示，share为显示分享btn，info为显示个人中心btn
      },
      request: {
        url: '/api/getDetailV1', //请求地址
        params: {
          //请求参数
          id: this.$route.params.id
        },
        recordUrl: '/api/getBidTopListV1', //出价列表请求地址
        recordParams: {
          //出价列表请求参数
          action: 'top',
          id: this.$route.params.id
        }
      },
      detailsData: {},
      recordData: {}
    }
  },
  methods: {
    getDetailsData() {
      const _this = this;

      //创建时请求详情页数据
      this.$http.get(_this.request.url, _this.request.params, {
        emulateJSON: true,
        headers: {
          Accept: 'application/hst-h5'
        }
      }).then((response) => {
        response = response.body.data.data;
        _this.detailsData = response.localData;
      })
    },
    getRecord() {
      const _this = this;

      //出价记录数据
      this.$http.get(_this.request.recordUrl, _this.request.recordParams, {
        emulateJSON: true,
        headers: {
          Accept: 'application/hst-h5'
        }
      }).then((response) => {
        console.log(response)
        response = response.body.data.data;
        _this.recordData = response.localData;
        console.log(response)
      })
    }
  },
  created() {
    const _this = this;
    _this.getDetailsData();
    _this.getRecord();
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/style/mixin.styl';

.page-details
  overflow:hidden;
  .details-header
    background-color:#ffffff;
    .header-info
      width:100%;
      background-color:#3b85f3;
      & > p
        color:#ffffff;
        text-align:center;
        font-size:10px;
        line-height:26px;
    .swiper-content
      width:100%;
      overflow:hidden;
      & > img
        width:100%;
    .info-content
      padding:0 11px;
      .info-text
        display:flex;
        padding:8px 0;
        border-bottom:1px solid #c6c6c6;
        &:last-child
          border-bottom:none;
        & > p
          font-size:13px;
          color:#000000;
          line-height:1.8;
        .title
          white-space:nowrap;
          padding-right:10px;
  .details-content
    background-color:#ffffff;
    padding:0 11px;
    min-height:100px;
    margin-top:5px;
    .rules-btn
      width:100%;
      height:38px;
      border-bottom:1px solid #c6c6c6;
      & > a
        width:100%;
        height:38px;
        display:flex;
        & > p
          font-size:13px;
          color:#2678f2;
          flex:1;
          padding-left:10px;
          line-height:38px;
        .rules-icon
          flex:0 0 23px;
          width:23px;
          height:38px;
          background-center('../../image/details/rulesIcon.png',22.5px,22.5px);
          display:block;
        .nextBtn
          flex:0 0 8px;
          width:8px;
          height:38px;
          background-center('../../image/public/nextBtn.png',8px,14px);
          display:block;
    .record-content
      color:#000000;
      font-size:13px;
      .record-title
        height:32px;
        line-height:32px;
        border-bottom:1px solid #c6c6c6;
      .record-list
        overflow:hidden;
        .list-details
          display:flex;
          height:32px;
          line-height:32px;
          border-bottom:1px solid #c6c6c6;
          .name
            flex:1;
          .price
            text-align:right;
            flex:1;
            .text-icon
              width:34px;
              height:15px
              color:#ffffff;
              line-height:15px;
              text-align:center;
              font-size:10px;
              background-color:#ff0000;
              display:inline-block;
              border-radius:7.5px;
            .text-red
              color:#ff0000;
              display:inline-block;
              padding-left:6px;
      .record-more
        height:30px;
        line-height:30px;
        text-align:center;
        font-size:14px;
        color:#000000;
        & > a
          color:#000000;
  .more-content
    width:100%;
    height:77.5px;
    background-color:#ffffff;
    margin-top:5px;
  .bottom-button
    width:100%;
    height:37px;
    border-top:1px solid #c6c6c6;
    background-color:#ffffff;
    position:fixed;
    left:0;
    bottom:0;
    display:flex;
    .button-info
      box-sizing:border-box;
      padding-left:11px;
      line-height:37px;
      color:#707070;
      font-size:14px;
      flex:1;
      & > span
        font-size:25px;
        color:#ff0000;
    .button-content
      flex:1;
      background-color:#ff0000;
      color:#ffffff;
      font-size:17px;
      text-align:center;
      line-height:37px;


</style>
