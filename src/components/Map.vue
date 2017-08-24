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
export default {
    name: 'svg',
    data () {
        return {
			map: null,
        }
    },
    mounted(){
		var map = new AMap.Map('map-container', {
    	    zoom: 4
    	});
		AMap.plugin(['AMap.ToolBar','AMap.Scale'],
		    function(){
		        map.addControl(new AMap.ToolBar());
		        map.addControl(new AMap.Scale());
		});
		//加载PointSimplifier，loadUI的路径参数为模块名中 'ui/' 之后的部分 
		AMapUI.loadUI(['misc/PointSimplifier'], function(PointSimplifier) {
		
		    if (!PointSimplifier.supportCanvas) {
		        alert('当前环境不支持 Canvas！');
		        return;
		    }
		
		    //启动页面
		    initPage(PointSimplifier);
		});
		
		function initPage(PointSimplifier) {
		    //创建组件实例
		    var pointSimplifierIns = new PointSimplifier({
		        map: map, //关联的map
		        compareDataItem: function(a, b, aIndex, bIndex) {
		            //数据源中靠后的元素优先，index大的排到前面去
		            return aIndex > bIndex ? -1 : 1;
		        },
		        getPosition: function(dataItem) {
		            //返回数据项的经纬度，AMap.LngLat实例或者经纬度数组
		            return dataItem.position;
		        },
		        getHoverTitle: function(dataItem, idx) {
		            //返回数据项的Title信息，鼠标hover时显示
		            return '序号: ' + idx;
		        },
		        renderOptions: {
		            //点的样式
		            pointStyle: {
		                fillStyle: 'blue' //蓝色填充
		            }
		        }
		    });
		
		    //随机创建一批点，仅作示意
		    var data = createPoints(map.getCenter(), 100000);
			console.log(map)
		
		    //设置数据源，data需要是一个数组
		    pointSimplifierIns.setData(data);
		
		    //监听事件
		    pointSimplifierIns.on('pointClick pointMouseover pointMouseout', function(e, record) {
		        console.log(e.type, record);
		    });
		}
		
		//仅作示意
		function createPoints(center, num) {
		    var data = [];
		    for (var i = 0, len = num; i < len; i++) {
		        data.push({
		            position: [
		                center.getLng() + (Math.random() > 0.5 ? 1 : -1) * Math.random(),
		                center.getLat() + (Math.random() > 0.5 ? 1 : -1) * Math.random()
		            ]
		        });
		    }
		    return data;
		}

    	
		
    },
    components: {
    },
}
</script>
