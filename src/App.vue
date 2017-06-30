<style lang="scss">
@import './assets/scss/app';
</style>

<template>
    <div id="app">
        <header class="header" v-if="showHeader">
            <img class="logo" src="./assets/imgs/logo.jpg">
            <div class="brand">Falcon Merlin</div>
        </header>
        <nav-bar v-if="showNav"></nav-bar>
        <router-view></router-view>
    </div>
</template>

<script>
import Nav from './components/Nav'
export default {
	name: 'app',
	data(){
		return {
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

