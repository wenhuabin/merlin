<template>
  <div class="grammer">
    <h1>{{ msg }}</h1>
    <h2>Hobby</h2>
    <ul>
      <li v-for="hobby in hobbys">{{hobby}}</li>
    </ul>
    <div v-bind:title="time">{{time}}</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'grammer',
  data () {
    return {
        msg: 'Welcome to Merlin',
        time: 'You loaded this page on ' + new Date(),
        hobbys: ['看书', '旅行', '煮饭做菜', '看足球', '羽毛球', '写代码']
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
