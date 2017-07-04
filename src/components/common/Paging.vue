<style lang="scss" scoped>
@import '~scss/common/paging';
</style>

<template>
    <div id="paging">
        <div class="page-box">
            <span class="prev" :class="{overLeft: page == 1}">上一页</span>
            <span class="next" :class="{overRight: page == pages}">下一页</span>
	        <ul id="pages">
                <li v-for="p in getPages" :class="{current : p == page}">{{p}}</li>
	        </ul>
        </div>
    </div>
</template>

<script>

export default {
  name: 'paging',
  props: ["page", "pages"],
  data () {
    return {
      left: 13,
      right: -1,
      tpages: [],
      currentPage: 0,
      isChildShow: [],
    }
  },
  methods: {
    setCurrent: function(key){
      this.isCurrent = key
    },
    toggleShowChild: function(key){
        var tmp = this.isChildShow;
        tmp.includes(key) ? tmp.splice(tmp.indexOf(key), 1) : tmp.push(key)
        this.isChildShow = tmp
    }
  },
  computed: {
      getPages: function(){
          if(this.pages >= 1 && this.pages <= 12){
              this.left = 0
              this.right = this.pages;
              console.log(this.left, this.right, '1')
          }else if(this.page <= 6){
              this.left =  0
              this.right = 11 
              console.log(this.left, this.right, '2')
          }else if(this.pages - this.page < 6){
              this.left = this.pages - 12 
              this.right = this.pages - 1
              console.log(this.left, this.right, '3')
          }
          for(let i = this.left; i <= this.right; i++){
              this.tpages.push(i+1)
          }
          console.log(this.pages)
          console.log(this.page)
          console.log(this.pages)
          console.log(this.tpages)
          return this.tpages
      },
  }
}

</script>
