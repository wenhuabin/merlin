<style lang="scss" scoped>
@import '~scss/web/menu'
</style>

<template>
    <div class="animination-demo">
        <h1>Menu</h1>
        <div class="menu-wrapper">
            <Menu />
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
        Menu,
    },
}

</script>
