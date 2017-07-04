<style lang="scss" scoped>
@import '~scss/web/test';
</style>

<template>
	<div class="test">
        <div class="welcome">
            <img class="launch" src="../assets/imgs/launch.jpg">
		    <h1>Welcome To Merlin</h1>
            <div class="showPage">点击翻页导航：Page: {{page}} / Pages: {{pages}}</div>
            <Paging :page="page" :pages="pages" @onPageChange="onPageChange"/>
        </div>
	</div>
</template>

<script>
import Paging from 'components/common/Paging'
export default {
  name: 'about',
  data () {
    return {
        page: 26,
        pages: 26,
    }
  },
  methods: {
      onPageChange: function(p){
          this.page = p
      }
  },
  components: {
    'Paging': Paging 
  }
}
</script>
