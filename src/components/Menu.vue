<style lang="scss" scoped>
@import '~scss/web/menu'
</style>

<template>
    <div class="animination-demo">
        <h1>Menu&nbsp;&nbsp;<a href="https://github.com/MingSeng-W/vue-bloom-menu">参考项目</a></h1>
        <div class="menu-wrapper">
            <Menu-Comp />
        </div>
    </div>
</template>

<script>
import Menu from 'components/component/Menu'

export default {
    name: 'animination-demo',
    data () {
        return {
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
