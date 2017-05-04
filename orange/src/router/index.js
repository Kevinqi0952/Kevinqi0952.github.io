import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/page/start/start'
import Begin from '@/page/begin/begin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/begin',
      name: 'Begin',
      component: Begin
    }
  ]
})
