import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Test from '@/components/Test'
import D3 from '@/components/D3'
import Echart from '@/components/Echart'
import ChartJs from '@/components/ChartJS'
import Canvas from '@/components/Canvas'
import Login from '@/Login'
import Coming from '@/Coming'
import Signup from '@/Signup'
import Dashboard from '@/Dashboard'
import store from 'store'
import * as types from 'store/mutation-types'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: '/',
        component: Dashboard,
		meta: {
            requireAuth: true,
        },
        //子路由不需要加斜杠 Note that nested paths that start with / will be treated as a root path. This allows you to leverage the component nesting without having to use a nested URL.
        children: [{
            path: 'about',
            name: 'about',
            component: About 
        },{
            path: 'd3',
            name: 'd3',
            component: D3 
        },{
            path: 'cjs',
            name: 'cjs',
            component: ChartJs
        },{
            path: 'canvas',
            name: 'canvas',
            component: Canvas 
        },{
            path: 'echart',
            name: 'echart',
            component: Echart 
        },{
            path: 'component',
            name: 'component',
            component: Test 
        }]
    },{
        path: '/login',
        name: 'login',
        component: Login 
    },{
        path: '/signup',
        name: 'signup',
        component: Login 
    },{
        path: '/coming',
        name: 'coming',
        component: Coming 
    },{
        path: '*',
        name: '*',
        redirect: '/coming'
    }]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if(!!store.getters.getToken.email){
            next();
        }else{
            let token = JSON.parse(sessionStorage.getItem('token')) 
            if(token && token.email){
				store.dispatch(types.SET_LOGIN_TOKEN, token)
                next();
            }else{
                next({
                    path: '/login',
                    query: {redirect: to.fullPath}
                })
            }
        }
    }else{
        let token = JSON.parse(sessionStorage.getItem('token')) 
        if(token && token.email){
			store.dispatch(types.SET_LOGIN_TOKEN, token)
            next({
                path: '/',
                query: {redirect: to.fullPath}
            })
        }else{
            next();
        }
    }
})

export default router
