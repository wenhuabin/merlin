<style lang="scss" scoped>
@import '~scss/component/menu';
</style>

<template>
    <div class="menu-container">
        <div class="menu-bar-con">
            <button class="menu-bar-btn" @click="isOpenChange" v-bind:class="{'btn-active':isOpen}">
                <span class="icon">+</span>
            </button>
        </div>
        <ul class="menu-item-list" >
        </ul> 
    </div>
</template>

<script>

export default {
  name: 'menu',
  data () {
    return {
    }
  },
  methods: {
  },
}

</script>
