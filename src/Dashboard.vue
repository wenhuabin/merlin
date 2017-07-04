<style lang="scss">
@import '~scss/dashboard';
</style>

<template>
    <div id="content">
        <header class="header">
            <img class="logo" src="./assets/imgs/logo.jpg">
            <div class="brand">SpaceX</div>
            <div class="logout" @click="logout">退出登录</div>
            <div class="setting-box" @mouseover="optionsShow(1)" @mouseleave="optionsShow(0)">
                <div class="setting">设置</div>
                <ul class="options" v-bind:style="optionsStyle">
                    <li class="option">个人信息</li>
                    <li class="option">修改密码</li>
                </ul>
            </div>
        </header>
        <section id="main">
            <nav-bar :navs='navs'></nav-bar>
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
import Nav from 'components/common/Nav'
import * as types from 'store/mutation-types'

export default {
	name: 'dashboard',
	data(){
		return {
            optionsStyle: {display: 'none'},
	        navs: [
                {name: '主页', key: 0, url: '/'},
                {name: 'Demo', key: 1, url: '', child: [{name: '图形', key: 10, url: '/', child: [{name: 'Canvas', key: 110, url: '/'}, {name: 'SVG', key: 111, url: '/'}]}, {name: '图表', key: 11, url: '/'}, {name: 'Test', key: 12, url: '/test'}]},
                {name: 'Profile', key: 4, url: '', child: [{name: 'Skills', key: 40, url: '/skills'},{name: 'Experience', key: 41, url: '', child: [{name: 'Bear', key: 410, url: '/bear'}, {name: 'Nio', key: 411, url: '/nio'}]},{name: 'About', key: 42, url: '/about'}]},
            ]
		}
	},
	computed:{
        isRoot: function(){
            return this.$route.path === '/'

        }
	},
    methods: {
        optionsShow: function(flag){
            this.optionsStyle = flag ? {display: "block"} : {display: "none"}
        },
        logout: function(){
            this.$store.dispatch(types.SET_LOGIN_TOKEN, {})
            sessionStorage.clear();
			this.$router.push('/login');
        },
    },
    components: {
      'nav-bar': Nav
    }
}
</script>

