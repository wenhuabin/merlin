<style lang="scss" scoped>
@import '~scss/web/menu'
</style>

<template>
    <div class="animination-demo">
        <h1>Menu&nbsp;&nbsp;<a href="https://github.com/MingSeng-W/vue-bloom-menu">参考项目</a></h1>
        <div class="menu-wrapper">
            <Menu-Comp />
        </div>
		<!-- 首先将要过渡的元素用transition包裹，并设置过渡的name，然后添加触发这个元素过渡的按钮（实际项目中不一定是按钮，任何能触发过渡组件的DOM操作的操作都可以） -->
		<div class="transition-box">
            <button class="btn" @click="show=!show">{{show ? '隐藏' : '显示'}}</button>
		  	<transition name="fade">
		  	  	<p v-show="show">hello</p>
		  	</transition>
		</div>
    </div>
</template>

<script>
import Menu from 'components/component/Menu'

export default {
    name: 'animination-demo',
    data () {
        return {
			show: false,
        }
    },
    mounted(){
    },
    methods: {
        //把每个button的背景图片的class插入到html中,方便以后使用。
    },
    components: {
        'Menu-Comp': Menu,
    },
}

</script>
