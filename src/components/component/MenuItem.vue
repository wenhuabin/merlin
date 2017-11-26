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
  	props: {
        radius: Number,
        angleCur: Number,
        index: Number,
        animationDuration: Number,
        itemAnimationDelay: Number,
        icon: String,
        showItem: Boolean,
        isOpen: Boolean,
        total: Number,
        currentIndex: Number,
    },
  	data () {
  	    return {
	        styleArr: [],
            itemExpandAnimationStyle: {
                animationName: 'expand-item-' + this.index,
                animationFillMode: 'forwards',
                animationDuration: +this.animationDuration + 's',
                animationDelay: this.itemAnimationDelay + 's',
                animationTimingFunction: 'ease-in'
            },
            animationEndCount: 0,
            itemContractAnimationStyle: {
                animationName: 'contract-item-' + this.index,
                animationFillMode: 'backwards',
                animationDuration: +this.animationDuration + 's',
                animationDelay: this.itemAnimationDelay + 's',
                animationTimingFunction: 'ease-out'
            }
  	    }
  	},
  	methods: {
  	},
}

</script>
