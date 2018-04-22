<style lang="scss">
@import '~scss/dashboard';
</style>

<template>
    <div id="content">
        <header class="header">
            <img class="logo" src="./assets/imgs/logo.jpg">
            <div class="brand">{{token.uname || 'SpaceX'}}</div>
            <div class="logout" @click="logout" v-if="!isLogin">登录</div>
            <div class="logout" @click="logout" v-if="isLogin">退出登录</div>
            <div class="setting-box" @mouseover="optionsShow(1)" @mouseleave="optionsShow(0)">
                <div class="setting">设置</div>
                <ul class="options" v-bind:style="optionsStyle">
                    <li class="option">个人信息</li>
                    <li class="option">修改密码</li>
                </ul>
            </div>
        </header>
        <section id="main">
            <nav-side :navs="navs"></nav-side>
            <div class="welcome" v-if="isRoot">
                <img class="launch" src="./assets/imgs/launch.jpg">
		        <h1>Welcome To Merlin</h1>
		        <p>This Merlin Project is developed by @wenhuabin with Vue Framwork。</p>
		        <footer class="footer">&copy Copyright 2018 by @wenhuabin. All Right Reserved.</footer>
            </div>
            <div id="right">
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>

<script>
import Nav from 'components/component/Nav'
import * as types from 'store/mutation-types'
import {mapState, mapActions} from 'vuex'

export default {
	name: 'dashboard',
	data(){
		return {
            optionsStyle: {display: 'none'},
	        navs: [
                {name: '主页', key: 0, url: '/'},
                {name: 'Demo', key: 1, url: '', child: [{name: '图形', key: 10, url: '/', child: [{name: 'Canvas', key: 110, url: '/canvas'}, {name: 'SVG', key: 111, url: '/svg'}]},{name: 'Echart组件', key: 11, url: '/echart'},{name: 'D3-组件', key: 12, url: '/d3'},{name: 'ChartJS', key: 13, url: '/cjs'}, {name: '通用组件', key: 14, url: '/component'},{name: '高德地图', key: 15, url: '/gmap'},{name: '百度地图', key: 16, url: '/bmap'},{name: '多媒体', key: 17, url: '/media'},{name: '动画', key: 18, url: '/menu'},{name: '游戏', key: 19, url: '/game'},{name: '列表优化', key: 20, url: '/list'}]},
                {name: 'About', key: 3, url: '/about'},
            ]
		}
	},
	computed:{
        ...mapState({
      	    token: state => state.login.token,
      	}),
        isRoot: function(){
            return this.$route.path === '/'
        },
        isLogin: function(){
            return !!this.token.email
        },
	},
    methods: {
		...mapActions([
      	    types.SET_LOGIN_TOKEN,
      	]),
        optionsShow: function(flag){
            this.optionsStyle = flag ? {display: "block"} : {display: "none"}
        },
        logout: function(){
            if(this.isLogin){
				this[types.SET_LOGIN_TOKEN]({type: types.SET_LOGIN_TOKEN, token: {}})
                sessionStorage.clear();
            }else{
			    this.$router.push('/login');
            }
        },
    },
    components: {
      'nav-side': Nav
    }
}
</script>

