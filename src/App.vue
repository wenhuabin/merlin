<template>
  <div id="app">
    <img class="logo" src="./assets/logo.jpg">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    .logo{
        display: block;
        margin: 90px auto 45px;
        width: 150px;
        height: 150px;
        border-radius: 75px;
    }
}
</style>
