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
        data:  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    }
  },
  mounted(){
    setInterval(()=>{
        this.data = generateData(25, 10, 100)
    },6000)
  },
  methods: {
  },
  components: {
    'LineChart': LineChart,
  },
}
</script>
