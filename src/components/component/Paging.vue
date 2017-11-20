<style lang="scss" scoped>
@import '~scss/component/paging';
</style>

<template>
    <div id="paging">
        <div class="page-box">
            <span class="first" :class="{overLeft: page == 1}" @click="(page != 1 ? onPageChange(1) : null)">首页</span>
            <span class="prev" :class="{overLeft: page == 1}" @click="(page != 1 ? onPageChange(page > 0 ? page -1 : 1) : null)">上一页</span>
            <span class="next" :class="{overRight: page == pages}" @click="(page != pages ? onPageChange(pages) : null)">尾页</span>
            <span class="last" :class="{overRight: page == pages}" @click="(page != pages ? onPageChange(page < pages ? page + 1 : pages) : null)">下一页</span>
	        <ul id="pages">
                <li v-for="p in getPages" :class="{current : p == page}" @click="(p != page ? onPageChange(p) : null)":key="p">{{p}}</li>
	        </ul>
        </div>
    </div>
</template>

<script>

export default {
  name: 'paging',
  props: {
    page: {
      type: Number,
      default: 1
    },
    pages: {
      type: Number,
      default: 0
    },
    showNums: {
      type: Number,
      default: 12
    },
  }, 
  data () {
    return {
      left: this.showNums + 1,
      right: -1,
      all_pages: [],
      isChildShow: [],
    }
  },
  methods: {
    onPageChange: function(p){
      this.$emit('onPageChange', p)
    },
  },
  computed: {
      getPages: function(){
          if(this.pages >= 1 && this.pages <= this.showNums){
              this.left = 0
              this.right = this.pages-1;
          }else if(this.page <= this.showNums / 2){
              this.left =  0
              this.right = this.showNums - 1 
          }else if(this.pages - this.page < this.showNums / 2){
              this.left = this.pages - this.showNums 
              this.right = this.pages - 1
          }else{
              this.left = this.page - this.showNums / 2
              this.right = this.page + this.showNums / 2 - 1 
          }
          this.all_pages = []
          for(let i = this.left; i <= this.right; i++){
              this.all_pages.push(i+1)
          }
          return this.all_pages
      },
  }
}

</script>
