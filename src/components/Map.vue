<style lang="scss" scoped>
@import '~scss/web/map'
</style>

<template>
    <div class="map-demo">
        <h1>高德地图集成测试</h1>
		<div id="map-container" tabindex="0"></div>
    </div>
</template>

<script>
import {TweenMax} from "gsap";

export default {
    name: 'svg',
    data () {
        return {
			map: null,
        }
    },
    mounted(){
		var map = new AMap.Map('map-container',{
            resizeEnable: true,
            zoom: 10,
            center: [116.480983, 40.0958]
        });
    },
    components: {
    },
}
</script>
