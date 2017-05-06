<template>
    <div class="components-nav">
        <div class="start-btn" v-bind:class="{ 'active-btn' : nav.active == 'start'}">
            <router-link to="/">正在拍卖</router-link>
        </div>
        <div class="begin-btn" v-bind:class="{ 'active-btn' : nav.active == 'begin'}">
            <router-link to="/begin">即将开始</router-link>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'nav',
    props: {
        nav: {
            type: Object
        }
    },
    created() {

    },
    methods: {
    },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.components-nav
  width:100%;
  height:20px;
  display:flex;
  margin:15px 0 10px 0;
  & > div
    font-size:17px;
    flex:1;
    text-align:center;
    & > a
      color:#a9a9a9;
  .active-btn
    & > a
      color:#000000;
      border-bottom:3px solid #2678f2;


</style>
