<style lang="scss" scoped>
@import '~scss/web/baidumap'
</style>

<template>
    <div class="bmap-demo">
        <h1>百度地图集成测试</h1>
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
        var map = new BMap.Map("map-container");          // 创建地图实例  
        var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
        map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
		
    },
    components: {
    },
}
</script>
