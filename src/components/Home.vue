<template>
  <div class="home">
      <img class="launch" src="../assets/imgs/launch.jpg">
	  <h1>Welcome To Merlin</h1>
	  <p>This Merlin Project is developed by WENHUABIN with Vue Framwork。</p>
	  <footer class="footer">&copy Copyright 2017 by WENHUABIN. All Right Reserved.</footer>
  </div>
</template>

<script>
import Nav from './Nav'
export default {
  name: 'home',
  data () {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
    color: #42b983;
}

a {
    color: #42b983;
    text-decoration: none;
    font-size: 18px;
}
</style>
