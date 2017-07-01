<style lang="scss">
@import './assets/scss/dashboard';
</style>

<template>
    <div id="content">
        <header class="header">
            <img class="logo" src="./assets/imgs/logo.jpg">
            <div class="brand">行旅書讀</div>
        </header>
        <section id="main">
            <nav-bar :navs='navs'></nav-bar>
            <div class="welcome" v-if="isRoot">
                <img class="launch" src="./assets/imgs/launch.jpg">
		        <h1>Welcome To Merlin</h1>
		        <p>This Merlin Project is developed by WENHUABIN with Vue Framwork。</p>
		        <footer class="footer">&copy Copyright 2017 by WENHUABIN. All Right Reserved</footer>
            </div>
            <div id="right">
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>

<script>
import Nav from './components/Nav'
export default {
	name: 'dashboard',
	data(){
		return {
	        navs: [
                {name: '主页', key: 0, url: '/'},
                {name: 'Demo', key: 1, url: '', child: [{name: '图形', key: 10, url: '/', child: [{name: 'Canvas', key: 110, url: '/'}, {name: 'SVG', key: 111, url: '/'}]}, {name: '图表', key: 11, url: '/'}]},
                {name: '个人简介', key: 4, url: '', child: [{name: '技术栈', key: 40, url: '/skills'},{name: '工作经历', key: 41, url: '', child: [{name: '小熊快跑', key: 410, url: '/bear'}, {name: '蔚来汽车', key: 411, url: '/nio'}]},{name: '关于我', key: 42, url: '/about'}]},
            ]
		}
	},
	computed:{
        isRoot: function(){
            return this.$route.path === '/'

        }
	},
    components: {
      'nav-bar': Nav
    }
}
</script>

