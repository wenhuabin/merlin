<style lang="scss" scoped>
@import './assets/scss/web/login';
</style>

<template>
  	<div class="login">
		<img src="./assets/imgs/logo.jpg"/>
	    <h1 class="hint">Welcome to  Merlin</h1>
		<div class="input-line">
			<input class="email" id="email" type="text" v-model="email" placeholder="Email"/>
		</div>
		<div class="input-line">
			<input class="pwd" type="password" id="pwd" v-model="password" placeholder="Password"/>
		</div>
		<div class="error">{{err}}</div>
		<button class="login-in" @click="login">SIGN IN</button>
		<a class="signup" href="/signup">Sign Up</a>
  	</div>
</template>

<script>
import * as types from './store/mutation-types'

export default {
	name: 'login',
	data(){
		return{
			email: '',
			password: '',
			err: '',
		}
	},
	methods: {
		login: function(){
			var formData = new FormData();
			formData.append("email", this.email);
			formData.append("password", this.password);
			
			fetch('https://huabinwen.com/login', {
        	    method: 'POST',
        	    credentials: 'include',
        	    body: formData
			}).then(response => response.json())
        	.then(data => {
				if(data && data.status === 0){
					this.$store.dispatch(types.SET_LOGIN_TOKEN, data.data)
					this.err = '登录成功'
					this.$router.push(this.$route.query.redirect ? this.$route.query.redirect : '/about');
				}else{
					this.err = '登录失败'
				}
			});
		},
	},
}
</script>

