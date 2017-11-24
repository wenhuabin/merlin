<style lang="scss" scoped>
@import '~scss/component/item';
</style>

<template>
    <li class="item" ref="item" :style="styleArr" @click="changeShowItem">
      <transition :name="currentIndex === index?'item-selected':'item-not-selected'">
        <div class="item-wrapper" v-show="showItem"  @animationend="animationEnd">
          <button class="item-btn" :class="[icon]"></button>
        </div>
      </transition>
    </li>
</template>

<script>

export default {
  name: 'menu-item',
  data () {
    return {
    }
  },
  methods: {
  },
}

</script>
