<style lang="scss">
@import './assets/scss/app';
</style>

<template>
    <div id="app">
        <header class="header" v-if="showHeader">
            <img class="logo" src="./assets/imgs/logo.jpg">
            <div class="brand">Falcon Merlin</div>
        </header>
        <nav-bar v-if="showNav" :navs='navs'></nav-bar>
        <router-view></router-view>
    </div>
</template>

<script>
import Nav from './components/Nav'
export default {
	name: 'app',
	data(){
		return {
			navs: [
    		    {name: '主页', key: 0, url: '/about'},
    		    {name: '人员管理', key: 1, url: '/', child: [{name: '会员列表', key: 10, url: '/', child: [{name: '会员列表', key: 30, url: '/'}, {name: '教练列表', key: 31, url: '/'}]}, {name: '教练列表', key: 11, url: '/'}]},
    		    {name: '课程中心', key: 2, url: '/about'},
    		    {name: '财务中心', key: 3, url: '/vue'},
    		    {name: '系统设置', key: 4, url: '/vue'}
    		  ]
		}
	},
	computed:{
		showHeader: function(){
			return this.$store.getters.getToken.email
		},
		showNav: function(){
			return this.$route.path === '/' ? true : false 
		},
	},
    components: {
      'nav-bar': Nav
    }
}
</script>

