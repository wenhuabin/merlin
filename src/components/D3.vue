<style lang="scss" scoped>
@import '~scss/web/d3';
</style>

<template>
	<div class="d3-demo">
		<h1>D3 组件 Demo</h1>
		<h2>1、折线图示例</h2>
		<LineChart />
	</div>
</template>

<script>
import LineChart from 'components/d3/LineChart'

export default {
  name: 'd3-demo',
  data () {
    return {
        
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
    'LineChart': LineChart,
  },
}
</script>
