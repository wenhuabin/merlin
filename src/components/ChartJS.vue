<style lang="scss" scoped>
@import '~scss/web/chartjs';
</style>

<template>
	<div class="chartjs-demo">
		<h1>ChartJS 组件</h1>
		<h2>1、折线图</h2>
        <div class="linechart-demo">
            <LineChart :chartData="lineData" :options="lineOptions" :width="500" :height="300"></LineChart>
        </div>
		<h2>2、柱状图</h2>
        <div class="barchart-demo">
            <BarChart :chartData="barData" :options="barOptions" :width="500" :height="300"></BarChart>
        </div>
	</div>
</template>

<script>
import LineChart from 'components/chartjs/LineChart.js'
import BarChart from 'components/chartjs/BarChart.js'
import {generateData} from 'utils/util'

export default {
    name: 'chartjs-demo',
    data () {
      return {
            lineData: {},
            lineOptions: {
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
            barData: {},
            barOptions: {
                responsive: false, //to set a fix width and height
                maintainAspectRatio: false,
            },
      }
    },
    created(){
        this.lineData = this.fillLineData()
        this.barData = this.fillBarData()
    },
    mounted(){
        setInterval(()=>this.lineData = this.fillLineData(), 10000)
        setInterval(()=>this.barData = this.fillBarData(), 2000)
    },
    methods: {
        fillLineData () {
    	  return {
    	    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    	    datasets: [{
    	        label: '访客量',
    	        backgroundColor: '#f5f5f5',
		  		borderColor: '#4BC0C0',
    	        data: generateData(12, 10, 200)
    	    }]
    	  }
    	},
        fillBarData () {
    	  return {
    	    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    	    datasets: [{
    	        label: '收入',
      	        backgroundColor: '#f87979',
    	        data: generateData(12, 10, 100)
    	    }]
    	  }
    	},
    },
    components: {
      'LineChart': LineChart,
      'BarChart': BarChart,
    },
}
</script>
