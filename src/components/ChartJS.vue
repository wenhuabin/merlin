<style lang="scss" scoped>
@import '~scss/web/chartjs';
</style>

<template>
	<div class="chartjs-demo">
		<h1>ChartJS 组件</h1>
		<h2>1、折线图</h2>
        <div class="demo">
            <LineChart :chartData="lineData" :options="options" :width="500" :height="300"></LineChart>
        </div>
		<h2>2、柱状图</h2>
        <div class="demo">
            <BarChart :chartData="barData" :options="options" :width="500" :height="300"></BarChart>
        </div>
		<h2>4、水平柱状图</h2>
        <div class="demo">
            <HorizontalBar :chartData="doughnutData" :options="options" :width="500" :height="300"></HorizontalBar>
        </div>
		<h2>3、圆环图</h2>
        <div class="demo">
            <Doughnut :chartData="doughnutData" :options="options" :width="500" :height="300"></Doughnut>
        </div>
		<h2>4、饼图</h2>
        <div class="demo">
            <Pie :chartData="doughnutData" :options="options" :width="500" :height="300"></Pie>
        </div>
		<h2>5、雷达图</h2>
        <div class="demo">
            <Radar :chartData="radarData" :options="options" :width="500" :height="300"></Radar>
        </div>
	</div>
</template>

<script>
import LineChart from 'components/chartjs/LineChart.js'
import BarChart from 'components/chartjs/BarChart.js'
import HorizontalBar from 'components/chartjs/HorizontalBar.js'
import Doughnut from 'components/chartjs/Doughnut.js'
import Pie from 'components/chartjs/Pie.js'
import Radar from 'components/chartjs/Radar.js'
import {generateData} from 'utils/util'

export default {
    name: 'chartjs-demo',
    data () {
      return {
            lineData: {},
            barData: {},
            doughnutData: {},
			radarData: {},
            options: {
                responsive: false, //to set a fix width and height
                maintainAspectRatio: false,
            },
      }
    },
    created(){
        this.lineData = this.fillLineData()
        this.barData = this.fillBarData()
        this.doughnutData = this.fillDoughnutData()
        this.radarData = this.fillRadarData()
    },
    mounted(){
        setInterval(()=>this.lineData = this.fillLineData(), 10000)
        setInterval(()=>this.barData = this.fillBarData(), 10000)
        setInterval(()=>this.doughnutData = this.fillDoughnutData(), 10000)
        setInterval(()=>this.radarData = this.fillRadarData(), 10000)
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
        fillDoughnutData () {
    	  return {
    	    labels: ['January', 'February', 'March', 'April', 'May'],
    	    datasets: [{
    	        label: '收入',
      	        backgroundColor: '#f87979',
				backgroundColor: [
          			'#41B883',
          			'#E46651',
          			'#00D8FF',
          			'#DD1B16',
					'#dcdcdc',
          		],
    	        data: generateData(5, 10, 100)
    	    }]
    	  }
    	},
		fillRadarData (){
			return {
				labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      			datasets: [
      			  {
      			    label: 'My First dataset',
      			    backgroundColor: 'rgba(179,181,198,0.2)',
      			    borderColor: 'rgba(179,181,198,1)',
      			    pointBackgroundColor: 'rgba(179,181,198,1)',
      			    pointBorderColor: '#fff',
      			    pointHoverBackgroundColor: '#fff',
      			    pointHoverBorderColor: 'rgba(179,181,198,1)',
      			    data: [65, 59, 90, 81, 56, 55, 40]
      			  },{
      			    label: 'My Second dataset',
      			    backgroundColor: 'rgba(255,99,132,0.2)',
      			    borderColor: 'rgba(255,99,132,1)',
      			    pointBackgroundColor: 'rgba(255,99,132,1)',
      			    pointBorderColor: '#fff',
      			    pointHoverBackgroundColor: '#fff',
      			    pointHoverBorderColor: 'rgba(255,99,132,1)',
      			    data: [28, 48, 40, 19, 96, 27, 100]
      			  }
      			]
			}

		}
    },
    components: {
      'LineChart': LineChart,
      'BarChart': BarChart,
      'HorizontalBar': HorizontalBar,
      'Doughnut': Doughnut,
      'Pie': Pie,
      'Radar': Radar,
    },
}
</script>
