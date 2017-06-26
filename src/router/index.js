import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Home,
        children: [
            { path: '/home', component: Home},
            { path: '/about', component: Home},
        ]
    }]
})
