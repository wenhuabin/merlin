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
// 图片的icon
import house from 'icons/house.svg'
import datas from 'icons/data.svg'
import info from 'icons/info.svg'
import money from 'icons/money.svg'
import phone from 'icons/phone.svg'
import user from 'icons/user.svg'
import card from 'icons/card.svg'
import liuyangtiao from 'icons/liuyangtiao.svg'


export default {
    name: 'menu-component',
    data() {
        return {
            showItem: true,
            isOpen: false,
            count: 0,
            currentIndex: -1,
            iconImgArr: this.getIconImgArr(), 
        };
    },
    computed: {
        angleStep: function(){
          return (this.endAngle - this.startAngle) / (this.itemNum - 1)
        },
        total: function(){
            return this.iconImgArr.length;
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
        getIconImgArr: function() {
            let tmp = []
            // 分别指定图标,名称， 以及background-size属性
            tmp.push(this.genarateIconObj(house, 'house', '50'))
            tmp.push(this.genarateIconObj(datas, 'datas', '50'))
            tmp.push(this.genarateIconObj(info, 'info', '50'))
            tmp.push(this.genarateIconObj(money, 'money', '50'))
            tmp.push(this.genarateIconObj(phone, 'phone', '50'))
            tmp.push(this.genarateIconObj(user, 'user', '50'))
            tmp.push(this.genarateIconObj(card, 'card', '50'))
            tmp.push(this.genarateIconObj(liuyangtiao, 'liuyangtiao', '50'))
            return tmp
        },
        // 分别指定图标的url ,名称， 以及background-size属性
        genarateIconObj: function(url, name, size) {
            let tmp = {}
            tmp.iconUrl = url
            tmp.iconName = name
            tmp.iconSize = size
            return tmp
        },
        // 产生icon的类
        gennerateIconStyle (icon) {
            let cssRule = '.icon-' + icon.iconName + '{' +
              'background-image: url(' + icon.iconUrl + ');' +
              'background-size: ' + icon.iconSize + '%; ' +
            '}\n'
            return cssRule
        },
        animationCountIncrease () {
            this.count++
            if (this.count === this.total) {
              this.isOpenChange()
              this.count = 0
            }
        },
        showItemChange (index) {
            this.showItem = false
            this.currentIndex = index
        },
        isOpenChange () {
            if (!this.isOpen && !this.showItem) {
              this.showItem = true
            }
            this.isOpen = !this.isOpen
        },
        setAmination () {
            let angleCur = this.startAngle
        },
    },
}

</script>
