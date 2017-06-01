<template>
    <div class="components-list">
      <div class="list-details" v-for="item in list">
          <router-link :to="{ name: 'Details', params: { id: item.id },query:{test:'123'}}">
            <div class="img-box" v-bind:style="{ 'background-image':'url('+item.imgUrl+')' }"></div>
            <div class="text-box">
              <div class="name-content">{{item.title}}</div>
              <div class="price-content">
                <p class="info-text">
                  <span class="text-title"><p>RMB</p><p class="text-red text-font">{{ type == 'bidding' ? '当前价':'起拍价' }}</p></span>
                  <span class="text-red text-price">{{item.price}}</span>
                </p>
              </div>
              <div class="info-content">
                <div class="content-left">
                  <p class="info-text">{{ type == 'bidding' ? '竞拍数':'围观数' }}<span>{{item.num}}</span></p>
                  <p class="end-time">{{item.endTime}} {{ type == 'bidding' ? '后结束':'开始'}}</p>
                </div>
                <div class="content-right" v-if="type == 'bidding'">
                    <span class="icon-content"></span>
                    <p>立即拍</p>
                </div>
              </div>
            </div>
          </router-link>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'list',
    props: {
        list: {},
        type:{},
        test:'test'
    },
    created() {
    },
    methods: {
    },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/style/mixin.styl'

.components-list
  font-size:0px;
  // padding:10px 0;
  .list-details
    overflow:hidden;
    width:100%;
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
    margin-bottom:6px;
    & > a
      display:flex;
      &:active
        background-color:#cccccc;
    .img-box
      flex: 1;
      overflow:hidden;
      background-size:cover;
      background-position:center;
      &:after
        content: '';
        display: block;
        margin-top: 100%;
    .text-box
      flex:1;
      margin:0 10px;
      padding:10px 0;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      border-bottom:0.5px solid #cccccc;
      .name-content
        flex:0 0 40px;
        height:40px;
        font-size:16px;
        line-height:20px;
        color:#000000;
        overflow:hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      .price-content
        flex:0 0 24px;
        height:24px;
        font-size:14.5px;
        .info-text
          display:flex;
          .text-title
            font-size:12px;
            line-height:12px;
            text-align:center;
            .text-font
              font-size:10px;
          .text-red
            color:#b90606;
          .text-price
            font-size:24px;
            line-height:24px;
            margin-left:10px;
      .info-content
        flex:0 0 58px;
        height:58px;
        display:flex;
        align-items:center;
        .content-left
          font-size:12.5px;
          line-height:1.5;
          flex:1;
          & > p
            text-overflow:ellipsis;
            white-space:nowrap;
            overflow:hidden;
          .info-text
            color:#a0a0a0;
            & > span
              margin-left:4px;
            .text-red
              color:#ff0000;
        .content-right
          flex:0 0 42px;
          width:42px;
          background-color:#2678f2;
          & > p
            color:#fff;
            text-align:center;
            font-size:12px;
            line-height:2;
          .icon-content
            width:42px;
            height:34px;
            display:block;
            background-center('./hammer.png',23px,22px);
</style>
