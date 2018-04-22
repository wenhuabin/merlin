<style lang="scss" scoped>
@import '~scss/web/list'
</style>

<template>
    <div class="list-demo">
        <h1>列表懒加载</h1>
        <div class="lazy-list">
            <div class="lazy-render-list-item" v-for="item in data">{{ item }}</div>
        </div>
        <h1>列表复用</h1>
    </div>
</template>

<script>

export default {
    name: 'list-demo',
    data () {
        return {
            count: 40,
            data: this.renderData(),
        }
    },
    mounted(){
        this.watchScroll();
    },
    methods: {
        //把每个button的背景图片的class插入到html中,方便以后使用。
        renderData(){
            let data = [];
            for (let i = 0; i < 40; i++) {
              data.push(i);
            }
            return data;
        },
        watchScroll(){
            window.onscroll = () => {
                const maxScrollTop = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight;
                const currentScrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

                if (maxScrollTop - currentScrollTop < 20) {
                  const count = this.count;
                  for (let i = count; i < count + 20; i++) {
                    this.data.push(i);
                  }
                  this.count = count + 40;
                }
            };
        },
    },
    components: {
    },
}
</script>
