import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/page/start/start'
import Begin from '@/page/begin/begin'
import Personal from '@/page/personal/personal'

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

    ]
})