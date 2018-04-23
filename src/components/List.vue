<style lang="scss" scoped>
@import '~scss/web/list'
</style>

<template>
    <div class="list-demo">
        <h1>列表懒加载</h1>
        <div class="lazy-list" id="lazy-list">
            <div class="lazy-render-list-item" v-for="item in data">{{ item }}</div>
        </div>
        <h1>列表复用</h1>
        <div class="list-view" id="rlist" @scroll="handleScroll($event)">
            <div class="list-view-phantom" :style="{ height: rdata.length * 30 + 'px' }"></div>
            <div class="list-view-content" id="reallist">
                <div class="list-view-item" v-for="item in visibleData">{{item}}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'list-demo',
    data () {
        return {
            count: 40,
            data: this.renderData(40),
            lazyList: null,
            start: 0,
            end: null,
            visibleCount: null,
            visibleData: [],
            scrollTop: 0,
            rdata: this.renderData(1000),
            itemHeight: 30,
            rlist: null,
            reallist: null,
        }
    },
    mounted(){
        this.lazyList = document.getElementById("lazy-list");
        this.rlist = document.getElementById("rlist")
        this.reallist = document.getElementById("reallist")
        this.watchScroll();
        this.initList();
    },
    methods: {
        //把每个button的背景图片的class插入到html中,方便以后使用。
        renderData(count){
            let data = [];
            for (let i = 0; i < count; i++) {
              data.push(i);
            }
            return data;
        },
        watchScroll(){
            this.lazyList.onscroll = () => {
                const maxScrollTop = this.lazyList.scrollHeight - 400;
                const currentScrollTop = this.lazyList.scrollTop;

                if (maxScrollTop - currentScrollTop < 20 && this.count <= 2000) {
                  const count = this.count;
                  for (let i = count; i < count + 20; i++) {
                    this.data.push(i);
                  }
                  this.count = count + 40;
                }
            };
        },
        initList(){
            this.visibleCount = Math.ceil(this.rlist.clientHeight / this.itemHeight);
            console.log(this.visibleCount);
            this.start = 0;
            this.end = this.start + this.visibleCount;
            this.visibleData = this.rdata.slice(this.start, this.end);
        },
        handleScroll(event) {
            const scrollTop = this.rlist.scrollTop;
            const fixedScrollTop = scrollTop - scrollTop % 30;
            this.reallist.style.webkitTransform = `translate3d(0, ${fixedScrollTop}px, 0)`;

            this.start = Math.floor(scrollTop / 30);
            this.end = this.start + this.visibleCount;
            this.visibleData = this.rdata.slice(this.start, this.end);
        }
    },
    components: {
    },
}
</script>
