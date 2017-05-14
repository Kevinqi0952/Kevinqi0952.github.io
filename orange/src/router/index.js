import Vue from 'vue'
import Router from 'vue-router'

const Login = r => require.ensure([], () => r(require('@/page/login/login')), 'login')
const Start = r => require.ensure([], () => r(require('@/page/start/start')), 'start')
const Begin = r => require.ensure([], () => r(require('@/page/begin/begin')), 'begin')
const Personal = r => require.ensure([], () => r(require('@/page/personal/personal')), 'personal')
const Details = r => require.ensure([], () => r(require('@/page/details/details')), 'details')
const Rules = r => require.ensure([], () => r(require('@/page/rules/rules')), 'start')
const Address = r => require.ensure([], () => r(require('@/page/address/address')), 'address')
const Addaddress = r => require.ensure([], () => r(require('@/page/addaddress/addaddress')), 'addaddress')
const Releaselist = r => require.ensure([], () => r(require('@/page/releaselist/releaselist')), 'releaselist')
const Release = r => require.ensure([], () => r(require('@/page/release/release')), 'release')
const Myorderlist = r => require.ensure([], () => r(require('@/page/myorderlist/myorderlist')), 'myorderlist')
const Morerecord= r => require.ensure([], () => r(require('@/page/morerecord/morerecord')), 'morerecord')


Vue.use(Router)

export default new Router({
  routes: [
    // 登陆
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // 正在拍卖
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    // 即将开始
    {
      path: '/begin',
      name: 'Begin',
      component: Begin
    },
    // 我的拍卖
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    //详情页
    {
      path: '/details/:id',
      name: 'Details',
      component: Details
    },
    //更多出价
    {
      path: '/details/:id/morerecord',
      name: 'Morerecord',
      component: Morerecord
    },
    //规则页
    {
      path: '/rules',
      name: 'Rules',
      component: Rules
    },
    // 我的地址
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    //新增地址
    {
      path: '/address/addaddress',
      name: 'Addaddress',
      component: Addaddress
    },
    //已发布的拍卖
    {
      path: '/releaselist',
      name: 'Releaselist',
      component: Releaselist
    },
    //发布拍卖
    {
      path: '/releaselist/release',
      name: 'Release',
      component: Release
    },
    //我的订单
    {
      path: '/myorderlist',
      name: 'Myorderlist',
      component: Myorderlist
    }
  ]
})
