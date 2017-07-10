<style lang="scss" scoped>
@import '~scss/web/chartjs';
</style>

<template>
	<div class="chartjs-demo">
		<h1>ChartJS 组件</h1>
		<h2>1、折线图</h2>
        <div class="linechart-demo">
            <LineChart :chartData="data" :options="options" :width="600" :height="450"></LineChart>
        </div>
	</div>
</template>

<script>
import LineChart from 'components/chartjs/LineChart.js'
import {generateData} from 'utils/util'

export default {
    name: 'chartjs-demo',
    data () {
      return {
            data: this.fillData(),
            options: {
                layout: {
                    padding: {
                        left: 5,
                        right: 5,
                        top: 5,
                        bottom: 5
                    },
                },
                responsive: false, //to set a fix width and height
            },
      }
    },
    mounted(){
        //this.fillData()
    },
    methods: {
        fillData () {
    	  return {
    	    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    	    datasets: [{
    	        label: '访客量',
    	        backgroundColor: '#f5f5f5',
		  		borderColor: '#4BC0C0',
				cubicInterpolationMode: 'monotone',
		  		lineTension: 1,
				spanGaps: true,
    	        data: generateData(12, 10, 200)
    	    }]
    	  }
    	},
    },
    components: {
      'LineChart': LineChart,
    },
}
</script>
