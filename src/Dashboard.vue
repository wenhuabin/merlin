<style lang="scss">
@import '~scss/dashboard';
</style>

<template>
    <div id="content">
        <header class="header">
            <img class="logo" src="./assets/imgs/logo.jpg">
            <div class="brand">{{uname}}</div>
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
		        <p>This Merlin Project is developed by @WENHUABIN with Vue Framwork。</p>
		        <footer class="footer">&copy Copyright 2017 by @WENHUABIN. All Right Reserved.</footer>
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

export default {
	name: 'dashboard',
	data(){
		return {
            optionsStyle: {display: 'none'},
	        navs: [
                {name: '主页', key: 0, url: '/'},
                {name: 'Demo', key: 1, url: '', child: [{name: '图形', key: 10, url: '/', child: [{name: 'Canvas', key: 110, url: '/canvas'}, {name: 'SVG', key: 111, url: '/svg'}]},{name: 'Echart组件', key: 11, url: '/echart'},{name: 'D3-组件', key: 12, url: '/d3'},{name: 'ChartJS', key: 13, url: '/cjs'}, {name: '通用组件', key: 14, url: '/component'}]},
                {name: 'About', key: 3, url: '/about'},
            ]
		}
	},
	computed:{
        isRoot: function(){
            return this.$route.path === '/'
        },
        uname: function(){
            return this.$store.getters.getToken.uname ? this.$store.getters.getToken.uname : 'SpaceX' 
        },
        isLogin: function(){
            return !!this.$store.getters.getToken.email
        },
	},
    methods: {
        optionsShow: function(flag){
            this.optionsStyle = flag ? {display: "block"} : {display: "none"}
        },
        logout: function(){
            if(this.isLogin){
                this.$store.dispatch(types.SET_LOGIN_TOKEN, {})
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

