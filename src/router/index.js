import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Grammer from '@/components/Grammer'
import Teddy from '@/components/Teddy'
import Login from '@/components/Login'
import store from '../store'
import * as types from '../store/mutation-types'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: '/',
        component: Home,
		meta: {
            requireAuth: true,
        },
    },{
        path: '/login',
        name: '/login',
        component: Login 
    },{
        path: '/signup',
        name: '/signup',
        component: Login 
    },{
        path: '/vue',
        name: '/vue',
        component: Grammer,
        children: [{
            //子路由不需要加斜杠 Note that nested paths that start with / will be treated as a root path. This allows you to leverage the component nesting without having to use a nested URL.
            path: 'teddy',
            name: 'teddy',
            component: Teddy
        }]
    },{
        path: '/about',
        name: '/about',
        component: About
    }]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if(store.getters.getLoginToken){
            next();
        }else{
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        }
    }
    else {
        next();
    }
})

export default router
