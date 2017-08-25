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
    name: 'map',
    data () {
        return {
			map: null,
        }
    },
    mounted(){
		var map = new AMap.Map('map-container', {
    	    zoom: 4
    	});
		AMapUI.load(['ui/misc/PointSimplifier', 'lib/$'], function(PointSimplifier, $) {

    	    if (!PointSimplifier.supportCanvas) {
    	        alert('当前环境不支持 Canvas！');
    	        return;
    	    }

    	    var pointSimplifierIns = new PointSimplifier({

    	        zIndex: 300,
    	        map: map,
    	        //maxChildrenOfQuadNode:3,

    	        getPosition: function(item) {

    	            if (!item) {
    	                return null;
    	            }

    	            var parts = item.split(',');

    	            return [parseFloat(parts[0]), parseFloat(parts[1])];
    	        },
    	        compareDataItem: function(a, b, aIndex, bIndex) {

    	            if (aIndex === bIndex) {
    	                return 0;
    	            }

    	            return aIndex > bIndex ? -1 : 1;
    	        },
    	        getHoverTitle: function(dataItem, idx) {
    	            return '序号: ' + idx;
    	        },
    	        renderOptions: {
    	            //点的样式
    	            pointStyle: {
    	                //绘制点占据的矩形区域
    	                //content: function(ctx, x, y, width, height) {

    	                ////    //注意，这里的width和height可能不同于pointStyle里面的width/height， 高清屏幕下会存在比例缩放

    	                ////    //这里绘制一个圆顶锥形
    	                ////    var yPos = 1 / 3;
						////	

    	                ////    var top = [x + width / 2, y],
    	                ////        right = [x + width, y + height * yPos],
    	                ////        bottom = [x + width / 2, y + height],
    	                ////        left = [x, y + height * yPos];

    	                ////    ctx.moveTo(left[0], left[1]);
    	                ////    ctx.arcTo(top[0], top[1], right[0], right[1], width / 3);
    	                ////    ctx.lineTo(right[0], right[1]);
    	                ////    ctx.lineTo(bottom[0], bottom[1]);
    	                ////    ctx.lineTo(left[0], left[1]);
						//	var yPos = 1 / 3,
    	                //		left = [x, y + height * yPos];

						//	ctx.strokeStyle="green";
						//	ctx.moveTo(x,y+height/3);
						//	ctx.stroke();
						//	//ctx.quadraticCurveTo(x+width/4,y+height*yPos*2,x+width/2,y+height);
    	                //    ctx.lineTo(x+width/2, y+height);
						//	//ctx.quadraticCurveTo(x+3*width/4,y+height*yPos*2,x+width,y+height*yPos*2);
    	                //    ctx.lineTo(x+width, y+height*yPos);
						//	ctx.stroke();
						//	ctx.beginPath();
						//	ctx.arc(x+width/2,y+height*yPos,width/2,Math.PI,2*Math.PI);
						//	ctx.stroke();
						//	ctx.strokeRect(x+width/4,y+height*yPos,width/2,height/4);
						//	ctx.fillStyle="#FF0000";
						//	ctx.strokeRect(x+width/4,y+height*yPos,width/3,height/4);

    	                //},
            			content: 'circle',
            			width: 6,
            			height: 6,
            			fillStyle: '#1f77b4',
            			lineWidth: 1,
            			strokeStyle: 'rgba(0,0,0,0)'
    	            },
					pointHardcoreStyle:{
						fillStyle: 'red',
					},
    	            topNAreaStyle: {
    	                content: function(ctx, x, y, width, height) {

    	                    //绘制一个连接矩形四边中点的菱形

    	                    var yPos = 1 / 3;

							ctx.moveTo(x,y+height*yPos);
							//ctx.quadraticCurveTo(x+width/4,y+height*yPos*2,x+width/2,y+height);
    	                    ctx.lineTo(x+width/2, y+height);
							ctx.stroke();
							//ctx.quadraticCurveTo(x+3*width/4,y+height*yPos*2,x+width,y+height*yPos*2);
    	                    ctx.lineTo(x+width, y+height*yPos*2);
							ctx.stroke();
							ctx.beginPath();
							ctx.arc(x+width/2,y+height*yPos*2,width/2,Math.PI,2*Math.PI);
							ctx.stroke();

    	                    //var top = [x + width / 2, y],
    	                    //    right = [x + width, y + height * 1 / 2],
    	                    //    bottom = [x + width / 2, y + height],
    	                    //    left = [x, y + height * 1 / 2];

    	                    //ctx.moveTo(top[0], top[1]);
    	                    //ctx.lineTo(right[0], right[1]);
    	                    //ctx.lineTo(bottom[0], bottom[1]);
    	                    //ctx.lineTo(left[0], left[1]);
    	                    //ctx.lineTo(top[0], top[1]);

    	                },
    	            },
    	            //鼠标hover时，绘制的叠加点的样式
    	            pointHoverStyle: {
    	                width: 10,
    	                height: 10,
    	                content: 'circle'
    	            },
    	            //鼠标hover时显示的title样式
    	            hoverTitleStyle: {
    	                classNames: 'my-hover-title',
    	                offset: [0, -15],
    	                position: 'top'
    	            }
    	        }
    	    });

    	    window.pointSimplifierIns = pointSimplifierIns;

    	    $('<div id="loadingTip">加载数据，请稍候...</div>').appendTo(document.body);
    	    $.get('http://a.amap.com/amap-ui/static/data/10w.txt', function(csv) {

    	        var data = csv.split('\n');

    	        pointSimplifierIns.setData(data);

    	        $('#loadingTip').remove();
    	    });
    	});
		//AMap.plugin(['AMap.ToolBar','AMap.Scale', 'AMap.Geolocation', 'AMap.MapType'],
		//    function(){
        //        map.addControl(new AMap.ToolBar({
        //            position: 'RB',
        //        }));
        //        map.addControl(new AMap.Scale({
        //            defaultType: 0,
        //        }));
		//        map.addControl(new AMap.MapType({
        //        }));
		//        //map.addControl(new AMap.Geolocation());
		//});
		////加载PointSimplifier，loadUI的路径参数为模块名中 'ui/' 之后的部分 
		//AMapUI.loadUI(['misc/PointSimplifier'], function(PointSimplifier) {
		//
		//    if (!PointSimplifier.supportCanvas) {
		//        alert('当前环境不支持 Canvas！');
		//        return;
		//    }
		//
		//    //启动页面
		//    initPage(PointSimplifier);
		//});
		//
		//function initPage(PointSimplifier) {
		//    //创建组件实例
		//    var pointSimplifierIns = new PointSimplifier({
		//        map: map, //关联的map
		//        compareDataItem: function(a, b, aIndex, bIndex) {
		//            //数据源中靠后的元素优先，index大的排到前面去
		//            return aIndex > bIndex ? -1 : 1;
		//        },
		//        getPosition: function(dataItem) {
		//            //返回数据项的经纬度，AMap.LngLat实例或者经纬度数组
		//            return dataItem.position;
		//        },
		//        getHoverTitle: function(dataItem, idx) {
		//            //返回数据项的Title信息，鼠标hover时显示
		//            return '序号: ' + idx;
		//        },
		//        renderOptions: {
		//            //点的样式
		//            pointStyle: {
		//                fillStyle: 'blue' //蓝色填充
		//            }
		//        }
		//    });
		//
		//    //随机创建一批点，仅作示意
		//    var data = createPoints(map.getCenter(), 100000);
		//
		//    //设置数据源，data需要是一个数组
		//    pointSimplifierIns.setData(data);
		//
		//    //监听事件
		//    pointSimplifierIns.on('pointClick pointMouseover pointMouseout', function(e, record) {
		//        console.log(e.type, record);
		//    });
		//}
		//
		////仅作示意
		//function createPoints(center, num) {
		//    var data = [];
		//    for (var i = 0, len = num; i < len; i++) {
		//        data.push({
		//            position: [
		//                center.getLng() + (Math.random() > 0.5 ? 1 : -1) * Math.random(),
		//                center.getLat() + (Math.random() > 0.5 ? 1 : -1) * Math.random()
		//            ]
		//        });
		//    }
		//    return data;
		//}

    	
		
    },
    components: {
    },
}
</script>
