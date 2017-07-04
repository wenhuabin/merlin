<style lang="scss" scoped>
@import '~scss/common/nav';
</style>

<template>
    <div id="paging">
        <span class="prev">上一页</span>
	    <ul id="pages">
            <li></li>
	    </ul>
        <span class="next">下一页</span>
    </div>
</template>

<script>

export default {
  name: 'paging',
  props: ["page", "pages"],
  data () {
    return {
      currentPage: 0,
      isChildShow: [],
    }
  },
  methods: {
    setCurrent: function(key){
      this.isCurrent = key;
    },
    toggleShowChild: function(key){
        var tmp = this.isChildShow;
        tmp.includes(key) ? tmp.splice(tmp.indexOf(key), 1) : tmp.push(key)
        this.isChildShow = tmp
    }
  },
}

</script>
