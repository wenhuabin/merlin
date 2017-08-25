import Vue from 'vue'
import Router from 'vue-router'
const About = () => import('@/components/About')
const Test = () => import('@/components/Test')
const D3 = () => import('@/components/D3')
const Echart = () => import('@/components/Echart')
const ChartJs = () => import('@/components/ChartJS')
const Canvas = () => import('@/components/Canvas')
const Svg = () => import('@/components/Svg')
const GaodeMap = () => import('@/components/GaodeMap')
const BaiduMap = () => import('@/components/BaiduMap')
const Media = () => import('@/components/Media')
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
			title: 'Welcome to Merlin',
        },
        //子路由不需要加斜杠 Note that nested paths that start with / will be treated as a root path. This allows you to leverage the component nesting without having to use a nested URL.
        children: [{
            path: 'about',
            name: 'about',
            component: About,
			meta: {
				title: 'About | Welcome to Merlin',
        	},
        },{
            path: 'd3',
            name: 'd3',
            component: D3, 
			meta: {
				title: 'D3 Demo | Welcome to Merlin',
        	},
        },{
            path: 'media',
            name: 'media',
            component: Media,
			meta: {
				title: 'H5 Medio Demo | Welcome to Merlin',
        	},
        },{
            path: 'cjs',
            name: 'cjs',
            component: ChartJs,
			meta: {
				title: 'ChartJS Demo | Welcome to Merlin',
        	},
        },{
            path: 'canvas',
            name: 'canvas',
            component: Canvas, 
			meta: {
				title: 'Canvas Demo | Welcome to Merlin',
        	},
        },{
            path: 'svg',
            name: 'svg',
            component: Svg, 
			meta: {
				title: 'SVG Demo | Welcome to Merlin',
        	},
        },{
            path: 'bmap',
            name: 'bmap',
            component: BaiduMap, 
			meta: {
				title: '百度地图 | Welcome to Merlin',
        	}, 
        },{
            path: 'gmap',
            name: 'gmap',
            component: GaodeMap, 
			meta: {
				title: '高德地图 | Welcome to Merlin',
        	}, 
        },{
            path: 'echart',
            name: 'echart',
            component: Echart, 
			meta: {
				title: 'Map Demo | Welcome to Merlin',
        	}, 
        },{
            path: 'component',
            name: 'component',
            component: Test, 
			meta: {
				title: 'Map Demo | Welcome to Merlin',
        	}, 
        }]
    },{
        path: '/login',
        name: 'login',
        component: Login, 
		meta: {
			title: 'Login Demo | Welcome to Merlin',
        }, 
    },{
        path: '/signup',
        name: 'signup',
        component: Login, 
		meta: {
			title: 'Sign up | Welcome to Merlin',
        }, 
    },{
        path: '/coming',
        name: 'coming',
        component: Coming, 
		meta: {
			title: '404 | Welcome to Merlin',
        }, 
    },{
        path: '*',
        name: '*',
        redirect: '/coming'
    }]
})

router.beforeEach((to, from, next) => {
	next();
	document.title = to.meta.title
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
