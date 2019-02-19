import Vue from 'vue'
import Router from 'vue-router'

import dashboard from '@/components/layout/layout'
import login from './login'
import home from './home'

Vue.use(Router)

const router = new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            meta: {
                requireAuth: true, //验证
            },
            component: dashboard,
            children: [].concat(login.mappings,home.mappings)
        },
    ]
})
router.beforeEach((to,from,next) => {
    //差一步，没有对应路由就跳到登陆
    if(to.meta.flag){
        //panduan
        let token = window.localStorage.getItem('token');
        // console.log(token,'token')
        if(token){
            next();
        }else{
            location.href='/login'
        }
    }else{
        next()
    }
})


export default router
