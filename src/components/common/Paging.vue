<style lang="scss" scoped>
@import '~scss/common/paging';
</style>

<template>
    <div id="paging">
        <div class="page-box">
            <span class="prev">上一页</span>
            <span class="next">下一页</span>
	        <ul id="pages">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li class="current">4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
                <li>12</li>
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
