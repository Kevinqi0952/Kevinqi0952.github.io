<template>
<div class="page-personal">
  <v-header :header="header"></v-header>
  <div class="personal-content">
    <div class="content-header">
      <div class="avatar">
        <img v-bind:src="userinfo.avatar" alt="头像">
      </div>
      <div class="name">{{ userinfo.name }}</div>
    </div>
    <div class="content-list">
      <ul>
        <li>
          <router-link to="/releaselist">
            <div class="list-details">
              <div class="details-left"><span class="order-btn"></span></div>
              <div class="details-name">已发布的拍卖</div>
              <div class="details-right"><span></span></div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/myorderlist">
            <div class="list-details">
              <div class="details-left"><span class="order-btn"></span></div>
              <div class="details-name">已拍到的订单</div>
              <div class="details-right"><span></span></div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/address">
            <div class="list-details">
              <div class="details-left"><span class="address-btn"></span></div>
              <div class="details-name">收货地址管理</div>
              <div class="details-right"><span></span></div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/rules">
            <div class="list-details">
              <div class="details-left"><span class="rules-btn"></span></div>
              <div class="details-name">拍卖规则</div>
              <div class="details-right"><span></span></div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import header from '../../components/header/header.vue'

// 正在拍卖
export default {
  name: 'me',
  data() {
    return {
      header: {
        title: "我的拍卖", //header题目
        color: "#eeeeee", //导航颜色
        left: true, //左边返回是否显示
        rightType: '', //右侧类型 不赋值为不显示，share为显示分享btn，info为显示个人中心btn
      },
      userinfo: {
        avatar: 'http://img0.imgtn.bdimg.com/it/u=2609553881,3298543509&fm=214&gp=0.jpg',
        name: 'Big Mouth丶'
      }
    }
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/style/mixin.styl';

.personal-content
    width:100%;
    .content-header
      width:100%;
      height:175px;
      background-color:#a4c8fe;
      overflow:hidden;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      .avatar
        width:84px;
        height:84px;
        overflow:hidden;
        border:1px solid #ffffff;
        border-radius:50%;
        & > img
          width:100%;
          height:100%;
      .name
        color:#000000;
        font-size:13px;
        line-height:2;
    .content-list
      background-color:#ffffff;
      & > ul
        padding:0 6px;
        & > li
          height:48px;
          border-bottom:1px solid #dcdcdc;
          &:last-child
            border-bottom:none;
          .list-details
            width:100%;
            height:48px;
            display:flex;
            .details-left
              width:48px;
              height:48px;
              & > span
                width:48px;
                height:48px;
                display:block;
              .order-btn
                background-center('../../image/personal/orderIcon.png',22px,22px);
              .address-btn
                background-center('../../image/personal/addressIcon.png',22px,22px);
              .rules-btn
                background-center('../../image/personal/rulesIcon.png',22px,22px);
            .details-name
              height:48px;
              line-height:48px;
              font-size:17px;
              color:#000000;
              flex:1;
            .details-right
              width:48px;
              height:48px;
              & > span
                width:48px;
                height:48px;
                display:block;
                background-center('../../image/public/nextBtn.png',8px,14px);
</style>
