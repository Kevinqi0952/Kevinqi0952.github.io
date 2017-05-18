<template>
  <div class="page-details">
    <v-header :header="header"></v-header>
    <div class="details-header">
      <div class="header-info">
        <p>{{detailsData.isStart == 1 ? '距离拍卖结束时间 ':'距离拍卖开始时间'}} {{detailsData.endTime}}</p>
      </div>
      <!--轮播开始-->
      <div class="swiper-content">
        <swipe class="my-swipe">
          <swipe-item class="slide" v-for="(item,index) in imgList" key="index" v-bind:style="{ 'background-image':'url('+item+')' }"></swipe-item>
        </swipe>
      </div>
      <!--轮播结束-->
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
      <div class="record-content" v-show="recordList">
        <p class="record-title">出价记录()</p>
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
        <div class="record-more">
          <router-link :to="{ name: 'Morerecord', params: { id: $route.params.id } }">更多出价</router-link>
        </div>
      </div>
      <div class="bid-content" v-show="offer">
        <div class="bid-title">当前价格¥{{detailsData.price}}</div>
        <div class="bid-details">
          <div class="bid-left">
            <div class="bid-btn-one bid-btn" @click="newPrice += biddingRange.one">+{{biddingRange.one}}</div>
            <div class="bid-btn-two bid-btn" @click="newPrice += biddingRange.two">+{{biddingRange.two}}</div>
          </div>
          <div class="bid-btn-center">¥{{newPrice}}</div>
          <div class="bid-right">
            <div class="bid-btn-one bid-btn" @click="newPrice += biddingRange.three">+{{biddingRange.three}}</div>
            <div class="bid-btn-two bid-btn" @click="newPrice += biddingRange.four">+{{biddingRange.four}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="more-content"></div>
    <div class="bottom-button">
      <div class="button-info">当前:<span>¥{{detailsData.price}}</span></div>
      <div class="button-content">
        <router-link :to="{ name: 'Ketubbah', params: { id: $route.params.id } }">出价</router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import header from '../../components/header/header.vue'
import swipe from '../../components/swipe/swipe'
import swipItem from '../../components/swipe/swipe-item'

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
      recordData: {},
      biddingRange: {
        one: '',
        two: '',
        three: '',
        four: ''
      },
      imgList:{},
      newPrice: {},
      offer: false, //是否显示出价
      recordList: true,//是否显示出价列表
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
        _this.detailsData = response.localData;;
        _this.biddingRange.one = response.localData.biddingRange[0];
        _this.biddingRange.two = response.localData.biddingRange[1];
        _this.biddingRange.three = response.localData.biddingRange[2];
        _this.biddingRange.four = response.localData.biddingRange[3];
        _this.newPrice = response.localData.price;
        _this.imgList = response.localData.imgList;
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
        response = response.body.data.data;
        _this.recordData = response.localData;
      })

      console.log(this.$route.params.offer)
    },
    addPrice() {

    }
  },
  created() {
    const _this = this;
    let offerShow = _this.$route.params.offer
    _this.getDetailsData();
    _this.getRecord();

    if (_this.$route.params.offer) {

      _this.offer = true;
      _this.recordList = false;
    } else {
      _this.offer = false;
      _this.recordList = true;
    }
  },
  components: {
    'v-header': header,
    'swipe': swipe,
    'swipe-item': swipItem
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
    // 轮播图样式
    .swiper-content
      width:100%;
      height:240px;
      overflow:hidden;
      .my-swipe
        width:100%;
        height:240px;
        .slide
          background-size:cover;
          background-position:center;
        .mint-swipe-indicators
          right:0;
          left:auto;
          .mint-swipe-indicator
            width:12px;
            height:12px;
            background-color:#ffffff;
            opacity:1;
          .is-active
            background-color:#3b85f3;
     //  轮播图样式结束
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
    .bid-content
      padding-top:10px;
      padding-bottom:20px;
      .bid-title
        text-align:center;
        font-size:16.5px;
        color:#707070;
      .bid-details
        margin-top:15px;
        display:flex;
        .bid-left
          flex:1;
          .bid-btn
            width:80px;
            height:25px;
            color:#ffffff;
            background-color:#f4523d;
            border-radius:12.5px;
            margin:10px auto 0 auto;
            text-align:center;
            line-height:25px;
            &:nth-child(1)
              margin-bottom:20px;
        .bid-right
          flex:1;
          .bid-btn
            width:80px;
            height:25px;
            color:#ffffff;
            background-color:#f4523d;
            border-radius:12.5px;
            margin:10px auto 0 auto;
            text-align:center;
            line-height:25px;
            &:nth-child(1)
              margin-bottom:20px;
        .bid-btn-center
          flex: 0 0 86px;
          widht:86px;
          height:86px;
          border-radius:50%;
          border:1px solid #f4523d;
          font-size:22px;
          color:#f4523d;
          text-align:center;
          line-height:86px;
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
      -moz-box-sizing:border-box; /* Firefox */
      -webkit-box-sizing:border-box; /* Safari */
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
      & > a
        width:100%;
        height:37px;
        display:block;
        color:#ffffff;
</style>
