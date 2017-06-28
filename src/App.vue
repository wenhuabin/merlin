<style lang="scss">
@import './assets/scss/app';
</style>

<template>
    <div id="app">
        <header class="header" v-if="ifNotLogin">
            <img class="logo" src="./assets/imgs/logo.jpg">
            <div class="brand">Falcon Merlin</div>
        </header>
		<div>{{ifLogin}}</div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
	name: 'app',
	data(){
		return {
			ifNotLogin: this.$route.path !== '/login',	
		}
	},
	
}
</script>

