<template>
    <div class="components-list">
      <div class="list-details" v-for="item in list">
          <router-link :to="{ name: 'Details', params: { id: item.id }}">
            <div class="img-box" v-bind:style="{ 'background-image':'url('+item.imgUrl+')' }"></div>
            <div class="text-box">
              <div class="name-content">{{item.title}}</div>
              <div class="info-content">
                <div class="content-left">
                  <p class="info-text">{{ type == 'bidding' ? '当前':'起拍价' }}<span class="text-red">¥{{item.price}}</span></p>
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
        type:{}
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
    width:50%;
    display:inline-block;
    padding:0 7px;
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
    .img-box
      width:100%;
      overflow:hidden;
      background-size:cover;
      background-position:center;
      &:after
        content: '';
        display: block;
        margin-top: 100%;
    .text-box
      padding:7px 10px;
      .name-content
        font-size:14.5px;
        color:#000000;
        text-overflow:ellipsis;
        white-space:nowrap;
        overflow:hidden;
      .info-content
        display:flex;
        margin-top:6px
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
