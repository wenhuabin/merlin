<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <h2>Personal Links</h2>
    <ul>
      <li><a href="https://huabinwen.com" target="_blank">Personal Page</a></li>
      <li><a href="https://github.com/wenhuabin" target="_blank">Github</a></li>
      <li><a href="https://www.instagram.com/?hl=en" target="_blank">Instagram</a></li>
      <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
    </ul>
    <h2>Personal Hobby</h2>
    <ul>
      <li>看书</li>
      <li>旅行</li>
      <li>煮饭做菜</li>
      <li>足球</li>
      <li>羽毛球</li>
      <li>写代码</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Merlin Demo'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
}
</style>
