<style lang="scss" scoped>
@import '../assets/scss/web/nav';
</style>

<template>
	<nav class="nav">
		<ul>
		  <li v-for="nav in navs" key="{{nav.key}}">{{nav.name}}</li>
		</ul>
	</nav>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
      navs: [{name: '看书', key: 0,child: []},{name: '旅行', key: 0, child: []}],
    }
  }
}
</script>
