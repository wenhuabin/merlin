<style lang="scss" scoped>
@import '~scss/web/baidumap'
</style>

<template>
    <div class="bmap-demo">
        <h1>百度地图</h1>
		<div id="fourth-container" tabindex="0"></div>
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
			fmap: null,
        }
    },
    mounted(){
        //this.initTMap()
        this.initFMap()
        this.initMap()
        this.initSMap()
    },
    methods: {
        initMap: function(){
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
			var marker = null;
			var myIcon = new BMap.Icon("https://api.map.baidu.com/img/markers.png", new BMap.Size(23, 25), {  
                        	offset: new BMap.Size(10, 25), // 指定定位位置  
                        	imageOffset: new BMap.Size(0, 0 - 10 * 25) // 设置图片偏移
						});
			// 随机向地图添加25个标注
			var bounds = this.smap.getBounds();
			var sw = bounds.getSouthWest();
			var ne = bounds.getNorthEast();
			var lngSpan = Math.abs(sw.lng - ne.lng);
			var latSpan = Math.abs(ne.lat - sw.lat);
			for (var i = 0; i < 100; i ++) {
				pt = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
			   	marker = new BMap.Marker(pt,{icon:myIcon});
				//label = new BMap.Label('1');
				//marker.setLabel(label);
			   	markers.push(marker);
			}
			//最简单的用法，生成一个marker数组，然后调用markerClusterer类即可。
			var opt = {
				gridSize: 60,
				maxZoom: 16,
				minClusterSiz: 4
			};
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
        initFMap: function(){
			this.fmap = new BMap.Map("fourth-container");
			this.fmap.centerAndZoom(new BMap.Point(116.404, 39.915), 15);
			var myP1 = new BMap.Point(116.380967,39.913285);    //起点
			var myP2 = new BMap.Point(116.424374,39.914668);    //终点
			var myIcon = new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/Mario.png", new BMap.Size(32, 70), {    //小车图片
				//offset: new BMap.Size(0, -5),    //相当于CSS精灵
				imageOffset: new BMap.Size(0, 0)    //图片的偏移量。为了是图片底部中心对准坐标点。
			  });
			var driving2 = new BMap.DrivingRoute(this.fmap, {renderOptions:{map: this.fmap, autoViewport: true}});    //驾车实例
			driving2.search(myP1, myP2);    //显示一条公交线路
			setTimeout(function(){
				this.run(myP1, myP2, myIcon, this.fmap);
			}.bind(this),1500);
        },
		run: function(myP1, myP2, myIcon, map){
			var driving = new BMap.DrivingRoute(map);    //驾车实例
			driving.search(myP1, myP2);
			driving.setSearchCompleteCallback(function(){
				var pts = driving.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组
				var paths = pts.length;    //获得有几个点

				var carMk = new BMap.Marker(pts[0],{icon:myIcon});
				map.addOverlay(carMk);
				var i=0;
				function resetMkPoint(i){
					carMk.setPosition(pts[i]);
					if(i < paths){
						setTimeout(function(){
							i++;
							resetMkPoint(i);
						},100);
					}
				}
				setTimeout(function(){
					resetMkPoint(5);
				},100)

			});
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
