import Vue from 'vue'
import Router from 'vue-router'
const About = () => import('@/components/About')
const Test = () => import('@/components/Test')
const D3 = () => import('@/components/D3')
const Echart = () => import('@/components/Echart')
const ChartJs = () => import('@/components/ChartJS')
const Canvas = () => import('@/components/Canvas')
const Svg = () => import('@/components/Svg')
const Map = () => import('@/components/Map')
const Login = () => import('@/Login')
const Coming = () => import('@/Coming')
const Signup = () => import('@/Signup')
const Dashboard = () => import('@/Dashboard')
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
            requireAuth: false,
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
            path: 'svg',
            name: 'svg',
            component: Svg 
        },{
            path: 'map',
            name: 'map',
            component: Map 
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

//导致重复dispatch，需要修复
//router.beforeEach((to, from, next) => {
//    if (to.matched.some(r => r.meta.requireAuth)) {
//        if(!!store.getters.getToken.email){
//            next();
//        }else{
//            let token = JSON.parse(sessionStorage.getItem('token')) 
//            if(token && token.email){
//				store.dispatch(types.SET_LOGIN_TOKEN, token)
//                next();
//            }else{
//                next({
//                    path: '/login',
//                    query: {redirect: to.fullPath}
//                })
//            }
//        }
//    }else{
//        let token = JSON.parse(sessionStorage.getItem('token')) 
//        if(token && token.email){
//			store.dispatch(types.SET_LOGIN_TOKEN, token)
//            next({
//                path: '/',
//                query: {redirect: to.fullPath}
//            })
//        }else{
//            next();
//        }
//    }
//})

export default router
