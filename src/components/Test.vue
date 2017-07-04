<style lang="scss" scoped>
@import '~scss/web/test';
</style>

<template>
	<div class="test">
        <div class="welcome">
            <img class="launch" src="../assets/imgs/launch.jpg">
		    <h1>Welcome To Merlin</h1>
            <Paging :page="page" :pages="pages"/>
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
  components: {
    'Paging': Paging 
  }
}
</script>
