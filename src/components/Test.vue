<style lang="scss" scoped>
@import '~scss/web/test';
</style>

<template>
	<div class="test">
        <div class="welcome">
            <img class="launch" src="../assets/imgs/launch.jpg">
		    <h1>Welcome To Merlin</h1>
            <div class="showPage">翻页导航实例：Page: {{page}} / Pages: {{pages}}</div>
            <div class="select-test">
                <div class="hint">下拉选择框测试</div>
                <Selecting initial_value='value' :list='list' @onChange='onChange'/>
                <div class="hint">value: {{value}} / key: {{key}}</div>
            </div>
            <Paging :page="page" :pages="pages" @onPageChange="onPageChange"/>
        </div>
	</div>
</template>

<script>
import Paging from 'components/common/Paging'
import Select from 'components/common/Select'
export default {
  name: 'about',
  data () {
    return {
        page: 26,
        pages: 26,
        value: '请选择',
        key: -1,
        list: [{value: '测试1', disabled: false},{value: '测试2', disabled: false},{value: '测试3', disabled: true},{value: '测试4', disabled: false},{value: '非常长的非常长的条目条目5', disabled: false}],
    }
  },
  methods: {
      onPageChange: function(p){
          this.page = p
      },
      onChange: function(value, key){
          this.value = value
          this.key = key
      }
  },
  components: {
    'Paging': Paging,
    'Selecting': Select,
  }
}
</script>
