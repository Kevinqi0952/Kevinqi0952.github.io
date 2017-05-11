<template>
    <div class="components-order-list">
      <div class="list-details" v-if="orderListType == 'order'" v-for="order in orderListData">
        <div class="details-info">
          <div class="list-img-content">
            <img :src="order.productInfo.imgUrl" alt="产品图片">
          </div>
          <div class="list-info-content">
            <p class="info-name">{{order.productInfo.title}}</p>
            <p class="info-price">¥{{order.productInfo.price}}</p>
            <p class="info-status">
              <span class="accept-icon"></span>
              <span class="info-status-text" v-if="order.userStatus == 0">恭喜获得</span>
              <span class="info-status-text" v-if="order.userStatus == 1">已结束</span>
              <span class="info-status-text" v-if="order.userStatus == 2">拍卖中</span>
            </p>
            <p class="info-end-time">{{order.userStatus == 0 ? '付款时间:' : '结束时间:'}}{{order.productInfo.endTime}}</p>
          </div>
          <div class="list-status-content">
            <span class="bid" v-if="order.userStatus == 0">付款</span>
            <span class="notbuy" v-if="order.userStatus == 1"></span>
            <span class="auction" v-if="order.userStatus == 2"></span>
          </div>
        </div>
        <div class="info-bottom">
          <p><span></span>联系客服</p>
        </div>
      </div>
      <div class="list-details" v-if="orderListType == 'release'" v-for="order in releaseListData">
        <div class="details-info">
          <div class="list-img-content">
            <img :src="order.productInfo.imgUrl" alt="产品图片">
          </div>
          <div class="list-info-content">
            <p class="info-name">{{order.productInfo.title}}</p>
            <p class="info-price">{{order.productInfo.price}}</p>
            <p class="info-status">
              <span class="accept-icon"></span>
              <span class="info-status-text" v-if="order.userStatus == 0">已拍出待付款</span>
              <span class="info-status-text" v-if="order.userStatus == 1">交易成功</span>
              <span class="info-status-text" v-if="order.userStatus == 2">已扣除保证金</span>
            </p>
            <p class="info-end-time">{{order.userStatus == 0 ? '付款时间:' : '结束时间:'}}{{order.productInfo.endTime}}</p>
          </div>
          <div class="list-status-content">
            <span class="pending" v-if="order.userStatus == 0"></span>
            <span class="success" v-if="order.userStatus == 1"></span>
            <span class="deduction" v-if="order.userStatus == 2"></span>
          </div>
        </div>
        <div class="info-bottom">
          <p>订单详情</p>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'order-list',
    props: {
        orderListData:{},
        releaseListData:{},
        orderListType:{}
    },
    created() {
    },
    methods: {
    },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/style/mixin.styl'


.components-order-list
  padding:10px 8px;
  overflow:hidden;
  box-sizing:border-box;
  .list-details
    border:1px solid #707070;
    margin-top:10px;
    box-sizing:border-box;
    background-color:#ffffff;
    .details-info
      padding:10px 8px;
      display:flex;
      align-items:center;
      box-sizing:border-box;
      border-bottom:1px solid #707070;
      color:#000000;
      .list-img-content
        flex:0 0 90px;
        width:90px;
        height:90px;
        & > img
          width:100%;
          height:100%;
      .list-info-content
        flex:1;
        padding:0 15px;
        .info-name
          font-size:14px;
          line-height:14px;
          height:14px;
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        .info-price
          color:#ff0000;
          margin:10px 0;
        .info-status
          font-size:0px;
          text-overflow:ellipsis;
          white-space:nowrap;
          text-overflow:ellipsis;
          .accept-icon
            display:inline-block;
            width:15px;
            height:15px;
            background:url('./acceptBtn.png');
            background-size:100% 100%;
            vertical-align:bottom;
          .info-status-text
            line-height:15px;
            font-size:12.5px;
            vertical-align:bottom;
            margin-left:4px;
        .info-end-time
          padding-top:10px;
          font-size:13.5px;
          word-break:break-all;
          text-overflow:ellipsis;
          white-space:nowrap;
          overflow:hidden;
      .list-status-content
          flex:0 0 110px;
          width:110px;
          text-align:center;
          margin-left:-30px;
          & > span
            width:110px;
            height:125px;
            display:block;
          .bid
            width:68px;
            height:25px;
            border:1px solid #707070
            display:inline-block;
            font-size:14px;
            line-height:25px;
            text-align:center;
          .notbuy
            background-center('./notBuy.png',110px,89px);
          .auction
            background-center('./auction.png',110px,89px);
          .pending
            background-center('./pending.png',110px,89px);
          .success
            background-center('./success.png',110px,89px);
          .deduction
            background-center('./deduction.png',110px,89px);
    .info-bottom
      padding:8px 18px;
      & > p
        line-height:13.5px;
        font-size:13.5px;
        & > span
          width:13.5px;
          height:13.5px;
          display:inline-block;
          margin-right:4px;
          background-center('./phoneBtn.png',10px,12px);
          vertical-align:top;

</style>
