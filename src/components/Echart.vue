<style lang="scss" scoped>
@import '~scss/web/echart';
</style>

<template>
	<div class="echart-demo">
		<h1>Echart 图表</h1>
		<h2 v-if="true">0、统计地图</h2>
        <div class="demo" v-if="true">
            <chart id="map" :options="map" ref="map" auto-resize></chart>
        </div>
		<h2 v-if="false">1、分布图</h2>
        <div class="demo" v-if="false">
            <chart ref="map" :options="mapsummary" theme="mint" :mapselected="onMapClick"></chart>
        </div>
		<h2>1、折线图</h2>
        <div class="demo">
            <chart :options="line"></chart>
        </div>
		<h2>5、饼图</h2>
        <div class="demo">
            <chart :options="pie"></chart>
        </div>
		<h2>7、PolarArea</h2>
        <div class="demo">
            <chart :options="polar"></chart>
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
		<h2>6、雷达图</h2>
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
import ECharts from 'vue-echarts/components/ECharts.vue'
import 'echarts/lib/component/polar'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/radar'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/effectScatter'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/geo'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/visualMap'

import 'echarts-liquidfill'
import  {config} from 'echarts'
import map from 'data/map'
import chinaMap from 'data/china.json'
import {mutiOption, cityData} from 'data/mutimap'
import theme from 'data/theme.json'
import 'echarts/theme/dark'
ECharts.registerMap('china', chinaMap)
ECharts.registerTheme('ovilia-green', theme)

export default {
    name: 'echart-demo',
    data () {
      return {
	  	  polar: {}, 
		  line: {},
		  pie: {},
          map: map,
		  mapsummary: {},
      }
    },
    created(){
		this.fillPolar()
		this.fillLine()
		this.fillPie()
		this.fillSummary()
    },
    mounted(){
		setTimeout(()=>{
			this.pie = {
			    title : {
			        text: '某站点用户访问来源',
					align: 'center',
			        x:'center'
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			        orient: 'horizontal',
			        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
					top: 50,
			    },
			    series : [{
			            name: '访问来源',
			            type: 'pie',
			            radius : '55%',
			            center: ['50%', '60%'],
			            data:[
			                {value:335, name:'直接访问'},
			                {value:310, name:'邮件营销'},
			                {value:234, name:'联盟广告'},
			                {value:135, name:'视频广告'},
			                {value:548, name:'搜索引擎'}
			            ],
			            itemStyle: {
			                emphasis: {
			                    shadowBlur: 10,
			                    shadowOffsetX: 0,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
			            }
			        }
			    ]
			}
		}, 3000)
		//this.addEventForMutiMap()
    },
    methods: {
		onMapClick(params){
			console.log('click')
    		var selected = param.selected;
    		var selectedProvince;
    		var name;
    		for (var i = 0, l = mutiOption.series[0].data.length; i < l; i++) {
    		    name = mutiOption.series[0].data[i].name;
    		    mutiOption.series[0].data[i].selected = selected[name];
    		    if (selected[name]) {
    		        selectedProvince = name;
    		    }
    		}
    		if (typeof selectedProvince == 'undefined') {
    		    mutiOption.series.splice(1);
    		    mutiOption.legend = null;
    		    mutiOption.dataRange = null;
				this.fillSummary()
    		    return;
    		}
    		mutiOption.series[1] = cityData  
			mutiOption.legend = {
    		    x:'right',
    		    data:['随机数据']
    		};
    		mutiOption.dataRange = {
    		    orient: 'horizontal',
    		    x: 'right',
    		    min: 0,
    		    max: 1000,
    		    color:['orange','yellow'],
    		    text:['高','低'],           // 文本，默认为数值文本
    		    splitNumber:0
    		};
			this.fillSummary()

		},
		addEventForMutiMap(){
			let map = this.$refs.map
			map.on('mapselected', function(param){
    			var selected = param.selected;
    			var selectedProvince;
    			var name;
    			for (var i = 0, l = mutiOption.series[0].data.length; i < l; i++) {
    			    name = mutiOption.series[0].data[i].name;
    			    mutiOption.series[0].data[i].selected = selected[name];
    			    if (selected[name]) {
    			        selectedProvince = name;
    			    }
    			}
    			if (typeof selectedProvince == 'undefined') {
    			    mutiOption.series.splice(1);
    			    mutiOption.legend = null;
    			    mutiOption.dataRange = null;
					this.fillSummary()
    			    return;
    			}
    			mutiOption.series[1] = cityData  
				mutiOption.legend = {
    			    x:'right',
    			    data:['随机数据']
    			};
    			mutiOption.dataRange = {
    			    orient: 'horizontal',
    			    x: 'right',
    			    min: 0,
    			    max: 1000,
    			    color:['orange','yellow'],
    			    text:['高','低'],           // 文本，默认为数值文本
    			    splitNumber:0
    			};
			})
			this.fillSummary()
		},
		fillSummary: function(){
			this.mapsummary = mutiOption
		},
		fillPie: function(){
			this.pie = {
			    title : {
			        text: '某站点用户访问来源',
					align: 'center',
			        x:'center'
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			        orient: 'horizontal',
			        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
					top: 50,
			    },
			    series : [{
			            name: '访问来源',
			            type: 'pie',
			            radius : '55%',
			            center: ['50%', '60%'],
			            data:[
			                {value:335, name:'直接访问'},
			                {value:310, name:'邮件营销'},
			                {value:234, name:'联盟广告'},
			                {value:135, name:'视频广告'},
			                {value:1548, name:'搜索引擎'}
			            ],
			            itemStyle: {
			                emphasis: {
			                    shadowBlur: 10,
			                    shadowOffsetX: 0,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
			            }
			        }
			    ]
			}
		},
		fillLine: function(){
			this.line = {
    			title: {
    			    text: '未来一周气温变化',
					top: 0,
					x: 'center',
    			},
    			tooltip: {
    			    trigger: 'axis'
    			},
    			legend: {
    			    data:['最高气温','最低气温'],
					right: 20,
					top: 20,
    			},
    			toolbox: {
    			    show: false,
    			    feature: {
    			        dataZoom: {
    			            yAxisIndex: 'none'
    			        },
    			        dataView: {readOnly: false},
    			        magicType: {type: ['line', 'bar']},
    			        restore: {},
    			        saveAsImage: {}
    			    }
    			},
    			xAxis:  {
    			    type: 'category',
    			    boundaryGap: false,
    			    data: ['周一','周二','周三','周四','周五','周六','周日']
    			},
    			yAxis: {
    			    type: 'value',
    			    axisLabel: {
    			        formatter: '{value} °C'
    			    }
    			},
    			series: [{
    			        name:'最高气温',
    			        type:'line',
    			        data:[11, 11, 15, 13, 12, 13, 10],
    			        markPoint: {
    			            data: [
    			                {type: 'max', name: '最大值'},
    			                {type: 'min', name: '最小值'}
    			            ]
    			        },
    			        markLine: {
    			            data: [
    			                {type: 'average', name: '平均值'}
    			            ]
    			        }
    			    },{
    			        name:'最低气温',
    			        type:'line',
    			        data:[1, -2, 2, 5, 3, 2, 0],
    			        markPoint: {
    			            data: [
    			                {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
    			            ]
    			        },
    			        markLine: {
    			            data: [
    			                {type: 'average', name: '平均值'},
    			                [{
    			                    symbol: 'none',
    			                    x: '90%',
    			                    yAxis: 'max'
    			                }, {
    			                    symbol: 'circle',
    			                    label: {
    			                        normal: {
    			                            position: 'start',
    			                            formatter: '最大值'
    			                        }
    			                    },
    			                    type: 'max',
    			                    name: '最高点'
    			                }]
    			            ]}
    			    }
    			]};
		},
		fillPolar: function(){
	  		let data = []
      		for (let i = 0; i <= 360; i++) {
      		    let t = i / 180 * Math.PI
      		    let r = Math.sin(2 * t) * Math.cos(2 * t)
      		    data.push([r, i])
      		}
			this.polar = {
            	title: {
            	  text: '极坐标双数值轴'
            	},
            	legend: {
            	  data: ['line']
            	},
            	polar: {
            	  center: ['50%', '54%']
            	},
            	tooltip: {
            	  trigger: 'axis',
            	  axisPointer: {
            	    type: 'cross'
            	  }
            	},
            	angleAxis: {
            	  type: 'value',
            	  startAngle: 0
            	},
            	radiusAxis: {
            	  min: 0
            	},
            	series: [
            	  {
            	    coordinateSystem: 'polar',
            	    name: 'line',
            	    type: 'line',
            	    showSymbol: false,
            	    data: data
            	  }
            	],
            	animationDuration: 2000
          	}
		},
    },
    components: {
		'chart': ECharts,
    },
}
</script>
