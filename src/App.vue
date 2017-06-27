<style lang="scss">
@import './assets/scss/app';
</style>

<template>
    <div id="app">
        <header class="header">
            <img class="logo" src="./assets/imgs/logo.jpg">
            <div class="brand">Falcon Merlin</div>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

