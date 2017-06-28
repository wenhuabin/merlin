<style lang="scss" scoped>
@import '../assets/scss/web/about';
</style>

<template>
	<div class="about">
		<img class="launch" src="../assets/imgs/launch.jpg">
		<h1>{{ msg }}</h1>
		<h2>Links</h2>
		<ul>
		  <li><a href="https://huabinwen.com" target="_blank">Home Page</a></li>
		  <li><a href="https://github.com/wenhuabin" target="_blank">Github</a></li>
		  <li><a href="https://www.instagram.com/?hl=en" target="_blank">Instagram</a></li>
		  <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
		</ul>
		<h2>Hobby</h2>
		<ul>
		  <li>看书</li>
		  <li>旅行</li>
		  <li>煮饭做菜</li>
		  <li>足球</li>
		  <li>羽毛球</li>
		  <li>写代码</li>
		</ul>
		<div>{{ $route.params.id}}</div> 
	</div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to Merlin'
    }
  }
}
</script>
