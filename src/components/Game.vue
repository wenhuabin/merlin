<style lang="scss" scoped>
@import '~scss/web/game'
</style>

<template>
    <div class="game-demo">
        <h1>动画优化测试</h1>
        <div class="carousel-container">
        </div>
        <div class="grid-container">
            <div class="box">
                1
            </div>
            <div class="box">
                2
            </div>
            <div class="box">
                3
            </div>
            <div class="box">
                4
            </div>
            <div class="box">
                开始
            </div>
            <div class="box">
                5
            </div>
            <div class="box">
                6
            </div>
            <div class="box">
                7
            </div>
            <div class="box">
                8
            </div>
        </div>
    </div>
</template>

<script>
import Menu from 'components/component/Menu'

export default {
    name: 'game-demo',
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
    },
}

</script>
