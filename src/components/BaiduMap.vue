<style lang="scss" scoped>
@import '~scss/web/baidumap'
</style>

<template>
    <div class="bmap-demo">
        <h1>百度地图</h1>
		<div id="mapv-container" tabindex="0"></div>
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
            ffmap: null,
        }
    },
    mounted(){
        //this.initTMap()
        //this.initFMap()
        this.initFfMap()
        this.initMap()
        this.initSMap()
        this.initMapV()
    },
    methods: {
        initMapV: function(){
			var map = new BMap.Map("mapv-container", {
        	    enableMapClick: false
        	});    // 创建Map实例
        	map.centerAndZoom(new BMap.Point(106.962497, 38.208726), 5);  // 初始化地图,设置中心点坐标和地图级别
        	map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
			
            map.addControl(new BMap.NavigationControl({
                offset: new BMap.Size(0, 10),
                anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
            }))    
            map.addControl(new BMap.ScaleControl())    
            map.addControl(new BMap.OverviewMapControl())    

        	map.setMapStyle({
        	    styleJson: [
        	        {
        	            "featureType": "all",
        	            "elementType": "all",
        	            "stylers": {
        	                "lightness": 61,
        	                "saturation": -100
        	            }
        	        }
        	    ]
        	});

        	var citys = {
        	    '新疆': Math.random() * 70,
        	    '西藏': Math.random() * 70,
        	    '内蒙古': Math.random() * 70,
        	    '青海': Math.random() * 70,
        	    '四川': Math.random() * 70,
        	    '黑龙江': Math.random() * 70,
        	    '甘肃': Math.random() * 70,
        	    '云南': Math.random() * 70,
        	    '广西': Math.random() * 70,
        	    '湖南': Math.random() * 70,
        	    '陕西': Math.random() * 70,
        	    '广东': Math.random() * 70,
        	    '吉林': Math.random() * 70,
        	    '河北': Math.random() * 70,
        	    '湖北': Math.random() * 70,
        	    '贵州': Math.random() * 70,
        	    '山东': Math.random() * 70,
        	    '江西': Math.random() * 70,
        	    '河南': Math.random() * 70,
        	    '辽宁': Math.random() * 70,
        	    '山西': Math.random() * 70,
        	    '安徽': Math.random() * 70,
        	    '福建': Math.random() * 70,
        	    '浙江': Math.random() * 70,
        	    '江苏': Math.random() * 70,
        	    '重庆': Math.random() * 70,
        	    '宁夏': Math.random() * 70,
        	    '海南': Math.random() * 70,
        	    '台湾': Math.random() * 70,
        	    '北京': Math.random() * 70,
        	    '天津': Math.random() * 70,
        	    '上海': Math.random() * 70,
        	    '香港': Math.random() * 70,
        	    '澳门': Math.random() * 70,
        	}
			//console.log(citys)

        	$.get('https://wenhuabin.com/china.json', function(geojson) {

        	    var dataSet = mapv.geojson.getDataSet(geojson);

        	    var data = dataSet.get({
        	        filter: function (item) {
						//console.log(item)
        	            if (!citys[item.name]) {
        	                return false;
        	            }

        	            item.count = citys[item.name];
        	            return true;
        	        }
        	    });
				//console.log(data)

        	    dataSet = new mapv.DataSet(data);

        	    var options = {
        	        splitList: [
        	            {
        	                start: 0,
        	                end: 10,
        	                value: '#f1eef6'
        	            },{
        	                start: 10,
        	                end: 20,
        	                value: '#d5bad9'
        	            },{
        	                start: 20,
        	                end: 30,
        	                value: '#cc97c7'
        	            },{
        	                start: 30,
        	                end: 40,
        	                value: '#e469af'
        	            },{
        	                start: 40,
        	                end: 50,
        	                value: '#ee3387'
        	            },{
        	                start: 50,
        	                end: 60,
        	                value: '#d61e53'
        	            },{
        	                start: 60,
        	                value: '#960b3d'
        	            }
        	        ],
        	        methods: {
        	            click: function (item) {
        	                console.log(item.count);
        	            },
        	            mousemove: function (item) {
        	                item = item || {};
        	                var data = dataSet.get();
        	                for (var i = 0; i < data.length; i++) {
        	                    if (item.id == data[i].id) {
        	                        data[i].fillStyle = 'yellow';
        	                    } else {
        	                        data[i].fillStyle = null;
        	                    }
        	                }
        	                dataSet.set(data);
        	            }
        	        },
        	        globalAlpha: 0.9,
        	        draw: 'choropleth'
        	    }

        	    var mapvLayer = new mapv.baiduMapLayer(map, dataSet, options);

        	});
			var data = [];

        	for (var key in citys) {
        	    var cityCenter = mapv.utilCityCenter.getCenterByCityName(key);
        	    if (cityCenter) {
        	        data.push({
        	            text: key + ' 33辆',
        	            geometry: {
        	                type: 'Point',
        	                coordinates: [cityCenter.lng, cityCenter.lat]
        	            }
        	        });
        	    }
        	}

        	var dataSet = new mapv.DataSet(data);

        	var options = {
        	    fillStyle: 'rgba(55, 50, 50, 0.8)',
        	    shadowColor: 'rgba(55, 50, 50, 0.5)',
        	    shadowBlur: 0,
        	    size: 4,
        	    zIndex: 10,
        	    draw: 'simple'
        	}

        	var mapvLayer = new mapv.baiduMapLayer(map, dataSet, options);

			//省会的字
        	var options = {
        	    fillStyle: '#000000',
        	    shadowColor: 'rgba(55, 50, 50, 0.5)',
        	    offset: {
        	        x: 0,
        	        y: -15
        	    },
        	    shadowBlur: 0,
        	    size: 8,
        	    zIndex: 10,
        	    draw: 'text'
        	}
        	var mapvLayer = new mapv.baiduMapLayer(map, dataSet, options);

        		
		},
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
        initFfMap: function(){
			this.fmap = new BMap.Map("fourth-container");
			this.fmap.enableScrollWheelZoom();
			this.fmap.centerAndZoom(new BMap.Point(116.404, 39.915), 13);
            this.fmap.addControl(new BMap.NavigationControl({
                offset: new BMap.Size(0, 10),
                anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
            }))    
            this.fmap.addControl(new BMap.ScaleControl())    
            this.fmap.addControl(new BMap.OverviewMapControl())    
            this.fmap.addControl(new BMap.MapTypeControl())    
			var lushu;
			var arrPois =[];
			var bounds = this.fmap.getBounds();
			var sw = bounds.getSouthWest();
			var ne = bounds.getNorthEast();
			var lngSpan = Math.abs(sw.lng - ne.lng);
			var latSpan = Math.abs(ne.lat - sw.lat);
			for (var i = 0; i < 10; i ++) {
				arrPois.push(new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7)));
				
			}
    		this.fmap.addOverlay(new BMap.Polyline(arrPois, {strokeColor: '#444'}));
    		this.fmap.setViewport(arrPois);
    		
    		lushu = new BMapLib.LuShu(this.fmap,arrPois,{
    			defaultContent:"京A77YR3",
    			autoView:true,//是否开启自动视野调整，如果开启那么路书在运动过程中会根据视野自动调整
    			icon  : new BMap.Icon('http://lbsyun.baidu.com/jsdemo/img/car.png', new BMap.Size(52,26),{anchor : new BMap.Size(27, 13)}),
    			speed: 4500,
    			enableRotation:true,//是否设置marker随着道路的走向进行旋转
    			landmarkPois: []
			});
			lushu.start();
			//lushu.pause();
			//lushu.hideInfoWindow();
			//lushu.showInfoWindow(); //会报错，Cannot read property '_div' of undefined
			

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
