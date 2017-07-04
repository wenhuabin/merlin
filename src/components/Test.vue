<style lang="scss" scoped>
@import '~scss/web/test';
</style>

<template>
	<div class="test">
        <div class="welcome">
            <img class="launch" src="../assets/imgs/launch.jpg">
		    <h1>Welcome To Merlin</h1>
            <Paging />
        </div>
	</div>
</template>

<script>
import Paging from 'components/common/Paging'
export default {
  name: 'about',
  data () {
    return {
    }
  },
  components: {
    'Paging': Paging 
  }
}
</script>
