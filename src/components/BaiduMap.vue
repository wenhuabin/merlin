<style lang="scss" scoped>
@import '~scss/web/baidumap'
</style>

<template>
    <div class="bmap-demo">
        <h1>百度地图</h1>
		<div id="map-container" tabindex="0"></div>
		<div id="second-container" tabindex="0"></div>
    </div>
</template>

<script>

export default {
    name: 'bmap',
    data () {
        return {
			map: null,
        }
    },
    mounted(){
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
			var map = new BMap.Map("second-container");
			map.centerAndZoom(new BMap.Point(116.404, 39.915), 4);
			map.enableScrollWheelZoom();

			var MAX = 30;
			var markers = [];
			var pt = null;
			var i = 0;
			for (; i < MAX; i++) {
			   pt = new BMap.Point(Math.random() * 40 + 85, Math.random() * 30 + 21);
			   markers.push(new BMap.Marker(pt));
			}
			//最简单的用法，生成一个marker数组，然后调用markerClusterer类即可。
			var markerClusterer = new BMapLib.MarkerClusterer(map, {markers:markers});
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
</script>
