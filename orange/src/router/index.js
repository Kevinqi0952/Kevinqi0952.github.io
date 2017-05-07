import Vue from 'vue'
import Router from 'vue-router'

const Start = r => require.ensure([], () => r(require('@/page/start/start')), 'start')
const Begin = r => require.ensure([], () => r(require('@/page/begin/begin')), 'begin')
const Personal = r => require.ensure([], () => r(require('@/page/personal/personal')), 'personal')
const Details = r => require.ensure([], () => r(require('@/page/details/details')), 'details')
const Rules = r => require.ensure([], () => r(require('@/page/rules/rules')), 'start')

Vue.use(Router)

export default new Router({
  routes: [
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
    //规则页
    {
      path: '/rules',
      name: 'Rules',
      component: Rules
    }
  ]
})
