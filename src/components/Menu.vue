<style lang="scss" scoped>
@import '~scss/web/menu'
</style>

<template>
    <div class="animination-demo">
        <h1>Menu</h1>
        <Menu />
    </div>
</template>

<script>
import Menu from 'components/component/Menu'

export default {
    name: 'animination-demo',
    props: {
        startAngle: {
          default: 0
        },
        radius: {
          default: 160
        },
        itemAnimationDelay: {
          default: 0.04
        },
        animationDuration: {
          default: 0.5
        },
        endAngle: {
          default: 315
        },
        itemNum: {
          default: 8
        },
        iconImgArr: Array
    },
    data () {
        return {
            showItem: true,
            isOpen: false,
            total: this.iconImgArr.length,
            count: 0,
            currentIndex: -1
        }
    },
    mounted(){
        
    },
    computed: {
        angleStep () {
          return (this.endAngle - this.startAngle) / (this.itemNum - 1)
        },
    },
    created(){
        let cssRule = ''
        this.iconImgArr.map((item) => {
            cssRule += this.gennerateIconStyle(item)
        })
        let style = document.createElement('style')
        style.type = 'text/css'
        style.innerHTML = cssRule
        document.head.appendChild(style)
    },
    methods: {
        //把每个button的背景图片的class插入到html中,方便以后使用。
    },
    components: {
        Menu,
    },
}

</script>
