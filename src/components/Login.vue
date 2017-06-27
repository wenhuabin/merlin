<style lang="scss" scoped>
@import '../assets/scss/web/login';
</style>

<template>
  	<div class="login">
		<img src="../assets/imgs/logo.jpg"/>
	    <div class="hint">Welcome to  Teddy</div>
		<div class="input-line">
			<input class="email" id="email" type="text" placeholder="Email"/>
		</div>
		<div class="input-line">
			<input class="pwd" type="password" id="pwd" placeholder="Password"/>
		</div>
		<div class="error"></div>
		<button class="login-in">SIGN IN</button>
		<a class="signup" href="/signup">SIGN UP</a>
  	</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Merlin'
    }
  }
}
</script>

