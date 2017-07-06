<style lang="scss" scoped>
@import '~scss/web/d3';
</style>

<template>
	<div class="d3-demo">
		<h1>D3 组件</h1>
		<h2>1、折线图</h2>
		<LineChart :data="data"/>
	</div>
</template>

<script>
import LineChart from 'components/d3/LineChart'
import {generateData} from 'utils/util'

export default {
  name: 'd3-demo',
  data () {
    return {
        data: [],
        
    }
  },
  mounted(){
	this.data = generateData(25,parseInt(10),parseInt(100));
  },
  methods: {
  },
  components: {
    'LineChart': LineChart,
  },
}
</script>
