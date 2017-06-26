<template>
  <div class="grammer">
    <h1>{{ msg }}</h1>
    <h2>Hobby</h2>
    <ul>
      <li>看书</li>
      <li>旅行</li>
      <li>煮饭做菜</li>
      <li>足球</li>
      <li>羽毛球</li>
      <li>写代码</li>
    </ul>
    <div v-bind:title="time">Time</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'grammer',
  data () {
    return {
        msg: 'Welcome to Merlin',
        time: 'You loaded this page on ' + new Date()
    }
  }
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
