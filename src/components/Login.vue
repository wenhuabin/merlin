<style lang="scss" scoped>
@import '../assets/scss/web/login';
</style>

<template>
  	<div class="login">
		<img src="../assets/imgs/logo.jpg"/>
	    <h1 class="hint">Welcome to  Merlin</h1>
		<div class="input-line">
			<input class="email" id="email" type="text" v-model="email" placeholder="Email"/>
		</div>
		<div class="input-line">
			<input class="pwd" type="password" id="pwd" v-model="password" placeholder="Password"/>
		</div>
		<div class="error"></div>
		<button class="login-in" @click="login">SIGN IN</button>
		<a class="signup" href="/signup">Sign Up</a>
  	</div>
</template>

<script>
export default {
	name: 'login',
	data(){
		return{
			msg: 'Welcome to Merlin',
			email: '',
			password: '',
			err: '',
		}
	},
	methods: {
		login: function(){
			console.log(this.email, ' ', this.password);
		},
	},
}
</script>

