<style lang="scss" scoped>
@import '~scss/web/game'
</style>

<template>
    <div class="game-demo">
        <h1>动画优化测试</h1>
        <div class="carousel-container"></div>
        <div class="grid-container">
            <div class="box" :class="{isActive : isActive % 8 == 1}">
                1
            </div>
            <div class="box" :class="{isActive : isActive % 8 == 2}">
                2
            </div>
            <div class="box" :class="{isActive : isActive % 8 == 3}">
                3
            </div>
            <div class="box" :class="{isActive : isActive % 8 == 8}">
                8
            </div>
            <div class="box box-btn" @click="start">
                开始
            </div>
            <div class="box" :class="{isActive : isActive % 8 == 4}">
                4
            </div>
            <div class="box" :class="{isActive : isActive % 8 == 7}">
                7
            </div>
            <div class="box" :class="{isActive : isActive % 8 == 6}">
                6
            </div>
            <div class="box" :class="{isActive : isActive % 8 == 5}">
                5
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
            isActive: 0,
            total: 96,
            interval: 1000,
        }
    },
    mounted(){
    },
    methods: {
        start: function(){
            this.isActive = 0;
            this.interval = 1000;
            setTimeout(()=>this.updateActive(), this.interval);
        },
        updateActive: function(){
            if(this.isActive + 1 <= this.total){
                this.isActive += 1;
                this.interval = this.interval > 100 ? this.interval - 100 : this.interval; 
                setTimeout(()=>this.updateActive(), this.interval);
            }else{
                if(this.pointer){
                    clearInterval(this.pointer);
                }
            }
        },
    },
    components: {
    },
}

</script>
