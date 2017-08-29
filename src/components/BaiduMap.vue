<style lang="scss" scoped>
@import '~scss/web/baidumap'
</style>

<template>
    <div class="bmap-demo">
        <h1>百度地图</h1>
		<div id="second-container" tabindex="0"></div>
		<div id="map-container" tabindex="0"></div>
    </div>
</template>

<script>
//<div id="third-container" tabindex="0"></div>
import ComplexCustomOverlay from 'utils/pernalizeOverlay'

export default {
    name: 'bmap',
    data () {
        return {
			map: null,
			smap: null,
			tmap: null,
        }
    },
    mounted(){
        //this.initTMap()
        this.initFMap()
        this.initSMap()
    },
    methods: {
        initFMap: function(){
            this.map = new BMap.Map("map-container")          // 创建地图实例  
            var point = new BMap.Point(116.404, 39.915)  // 创建点坐标  
            this.map.centerAndZoom(point, 15)                 // 初始化地图，设置中心点坐标和地图级别
            this.map.addControl(new BMap.NavigationControl({
                offset: new BMap.Size(0, 10),
                anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
            }))    
            this.map.addControl(new BMap.ScaleControl())    
            this.map.addControl(new BMap.OverviewMapControl())    
            this.map.addControl(new BMap.MapTypeControl())    
            //this.map.setCurrentCity("北京") // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
            this.addMakers()
        },
        initSMap: function(){
			this.smap = new BMap.Map("second-container");
			var point = new BMap.Point(116.404, 39.915);
			this.smap.centerAndZoom(point, 15);
            this.smap.addControl(new BMap.NavigationControl({
                offset: new BMap.Size(0, 10),
                anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
            }))    
            this.smap.addControl(new BMap.ScaleControl())    
            this.smap.addControl(new BMap.OverviewMapControl())    
            this.smap.addControl(new BMap.MapTypeControl())    

			this.smap.addEventListener("zoomend", function(){    
			    console.log("地图缩放至：" + this.getZoom() + "级");    
			});

			var markers = [];
			var pt = null;
			// 随机向地图添加25个标注
			var bounds = this.smap.getBounds();
			var sw = bounds.getSouthWest();
			var ne = bounds.getNorthEast();
			var lngSpan = Math.abs(sw.lng - ne.lng);
			var latSpan = Math.abs(ne.lat - sw.lat);
			for (var i = 0; i < 100; i ++) {
				pt = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
			   	markers.push(new BMap.Marker(pt));
			}
			//最简单的用法，生成一个marker数组，然后调用markerClusterer类即可。
			var opt = {
				gridSize: 60,
				maxZoom: 16,
				minClusterSiz: 4
			};
			//var markerClusterer = new BMapLib.MarkerClusterer(this.smap,{markers:markers},opt);
			var markerClusterer = new BMapLib.MarkerClusterer(this.smap,opt);
			markerClusterer.addMarkers(markers);
		},
        initTMap: function(){
			var mp = new BMap.Map("third-container");
			mp.centerAndZoom(new BMap.Point(116.3964,39.9093), 15);
			mp.enableScrollWheelZoom();
			
    		var txt = "银湖海岸城", mouseoverTxt = txt + " " + parseInt(Math.random() * 1000,10) + "套" ;
    		    
    		var myCompOverlay = new ComplexCustomOverlay(new BMap.Point(116.407845,39.914101), "银湖海岸城",mouseoverTxt);

    		mp.addOverlay(myCompOverlay);
			
		},
        addMakers: function(){
			var bounds = this.map.getBounds();
			var sw = bounds.getSouthWest();
			var ne = bounds.getNorthEast();
			var lngSpan = Math.abs(sw.lng - ne.lng);
			var latSpan = Math.abs(ne.lat - sw.lat);
			for (var i = 0; i < 25; i ++) {
				var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
				this.addMarker(point);
			}
        },
        addMarker: function(point){  // 创建图标对象   
            var marker = new BMap.Marker(point);
            this.map.addOverlay(marker);    
        },
    },
    components: {
    },
}
//BMapLib.MarkerClusterer(map, options)
//MarkerClusterer
//参数:
//{Map} map
//地图的一个实例。
//{Json Object} options
//可选参数，可选项包括：
//markers {Array} 要聚合的标记数组
//girdSize {Number} 聚合计算时网格的像素大小，默认60
//maxZoom {Number} 最大的聚合级别，大于该级别就不进行相应的聚合
//minClusterSize {Number} 最小的聚合数量，小于该数量的不能成为一个聚合，默认为2
//isAverangeCenter {Boolean} 聚合点的落脚位置是否是所有聚合在内点的平均值，默认为否，落脚在聚合内的第一个点
//styles {Array} 自定义聚合后的图标风格，请参考TextIconOverlay类
</script>
