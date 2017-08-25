<style lang="scss" scoped>
@import '~scss/web/baidumap'
</style>

<template>
    <div class="bmap-demo">
        <h1>百度地图</h1>
		<div id="map-container" tabindex="0"></div>
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
        this.init()
    },
    methods: {
        init: function(){
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
            this.map.setCurrentCity("北京") // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
            //this.addMakers()
        },
        addMakers: function(){
            var bounds = this.map.getBounds();    
            var lngSpan = bounds.maxX - bounds.minX;    
            var latSpan = bounds.maxY - bounds.minY;    
            for (var i = 0; i < 10; i ++) {    
                var point = new BMap.Point(bounds.minX + lngSpan * (Math.random() * 0.7 + 0.15),    
                                           bounds.minY + latSpan * (Math.random() * 0.7 + 0.15));    
                this.addMarker(point, i)
            }
        },
        addMarker: function addMarker(point, index){  // 创建图标对象   
            var myIcon = new BMap.Icon("markers.png", new BMap.Size(23, 25), {    
            // 指定定位位置。   
            // 当标注显示在地图上时，其所指向的地理位置距离图标左上    
            // 角各偏移10像素和25像素。您可以看到在本例中该位置即是   
               // 图标中央下端的尖角位置。    
               anchor: new BMap.Size(10, 25),    
               // 设置图片偏移。   
               // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您   
               // 需要指定大图的偏移位置，此做法与css sprites技术类似。    
               imageOffset: new BMap.Size(0, 0 - index * 25)   // 设置图片偏移    
             });      
            // 创建标注对象并添加到地图   
             var marker = new BMap.Marker(point, {icon: myIcon});    
             this.map.addOverlay(marker);    
        },
    },
    components: {
    },
}
</script>
