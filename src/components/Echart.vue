<style lang="scss" scoped>
@import '~scss/web/echart';
</style>

<template>
	<div class="echart-demo">
		<h1>Echart 图表</h1>
		<h2>1、折线图</h2>
        <div class="demo">
        </div>
		<h2>2、柱状图</h2>
        <div class="demo">
        </div>
		<h2>3、水平柱状图</h2>
        <div class="demo">
        </div>
		<h2>4、圆环图</h2>
        <div class="demo">
        </div>
		<h2>5、饼图</h2>
        <div class="demo">
        </div>
		<h2>6、雷达图</h2>
        <div class="demo">
        </div>
		<h2>7、PolarArea</h2>
        <div class="demo">
        </div>
		<h2>8、Bubble</h2>
        <div class="demo">
        </div>
		<h2>9、Scatter</h2>
        <div class="demo">
        </div>
	</div>
</template>

<script>
//import LineChart from 'components/chartjs/LineChart.js'
//import BarChart from 'components/chartjs/BarChart.js'
//import HorizontalBar from 'components/chartjs/HorizontalBar.js'
//import Doughnut from 'components/chartjs/Doughnut.js'
//import Pie from 'components/chartjs/Pie.js'
//import Radar from 'components/chartjs/Radar.js'
//import PolarArea from 'components/chartjs/PolarArea.js'
//import Bubble from 'components/chartjs/Bubble.js'
//import Scatter from 'components/chartjs/Scatter.js'
//import {generateData} from 'utils/util'

export default {
    name: 'echart-demo',
    data () {
      return {
            lineData: {},
            barData: {},
            doughnutData: {},
			radarData: {},
			polarAreaData: {},
			bubbleData: {},
			scatterData: [],
            options: {
                responsive: false, //to set a fix width and height
                maintainAspectRatio: false,
				scaleShowGridLines : true, 
				legend: {
        		    display: true,
					position: 'top',
        		    labels: {
        		        fontColor: '#444'
        		    }
        		},
				title: {
	            	display: true,
            		text: '测试组件',
					fontSize: 18,
					fontFamily: "sans-serif",
        		},
				tooltips: {
					width: 1000,
					backgroundColor: "#fff",
					titleFontColor: "#444",
					titleFontSize: 16,
					bodyFontColor: "#444",
					titleMarginBottom: 15,
					bodySpacing: 30,
					footerMarginTop: 20,
					xPadding: 10,
					yPadding: 10,
        		},
            },
      }
    },
    created(){
        //this.lineData = this.fillLineData()
        //this.barData = this.fillBarData()
        //this.doughnutData = this.fillDoughnutData()
        //this.radarData = this.fillRadarData()
        //this.polarAreaData = this.fillPolarAreaData()
        //this.bubbleData = this.fillBubbleData()
        //this.scatterData = this.fillScatterData()
    },
    mounted(){
        //setInterval(()=>this.lineData = this.fillLineData(), 10000)
        //setInterval(()=>this.barData = this.fillBarData(), 10000)
        //setInterval(()=>this.doughnutData = this.fillDoughnutData(), 10000)
        //setInterval(()=>this.radarData = this.fillRadarData(), 10000)
        //setInterval(()=>this.polarAreaData = this.fillPolarAreaData(), 10000)
    },
    methods: {
        fillLineData () {
    	  return {
    	    
    	  }
    	},
        fillBarData () {
    	  return {
    	    
    	  }
    	},
        fillDoughnutData () {
    	  return {
    	    
    	  }
    	},
		fillRadarData (){
			return {
				
			}
		},
		fillPolarAreaData(){
			return {
				
			}
		},
		fillBubbleData(){
			return {
				
			}
		},
		fillScatterData(){
			return {
				
			}
		},
    },
    //components: {
    //  'LineChart': LineChart,
    //  'BarChart': BarChart,
    //  'HorizontalBar': HorizontalBar,
    //  'Doughnut': Doughnut,
    //  'Pie': Pie,
    //  'Radar': Radar,
    //  'PolarArea': PolarArea,
	//  'Scatter': Scatter,
    //  'Bubble': Bubble,
    //},
}
</script>
