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
	watch:{
		isOpen: function () {
      	    if (this.isOpen) {
      	      	try {
      	      	  this.styleArr.pop()
      	      	} catch (e) {
      	      	  console.log(e)
      	      	}
      	      	this.styleArr.push(this.itemExpandAnimationStyle)
      	    } else {
      	      	this.styleArr.pop()
      	      	this.styleArr.push(this.itemContractAnimationStyle)
      	    }

      	},
	},
  	methods: {
		x () {
      	    return this.radius * Math.cos(this.toRadians(this.angleCur))
      	},
        y () {
            return this.radius * Math.sin(this.toRadians(this.angleCur))
        },
        x0 () {
           return 0
        },
        y0 () {
            return 0
        },
        x2 () {
            return Number((this.x).toFixed(2))
        },
        y2 () {
            return Number((this.y).toFixed(2))
        },
        x1 () {
            return this.x2 * 1.2
        },
        y1 () {
            return this.y2 * 1.2
        },
        animation () {
            if (this.isOpen) {

            } else {
                return this.generateAminate()
            }
        }
  	},
	
}

</script>
