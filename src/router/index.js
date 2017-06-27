import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Grammer from '@/components/Grammer'
import Teddy from '@/components/Teddy'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Home,
    },{
        path: '/login',
        component: Login 
    },{
        path: '/vue',
        component: Grammer,
        children: [{
            //子路由不需要加斜杠 Note that nested paths that start with / will be treated as a root path. This allows you to leverage the component nesting without having to use a nested URL.
            path: 'teddy',
            component: Teddy
        }]
    },{
        path: '/about',
        component: About
    }]
})
