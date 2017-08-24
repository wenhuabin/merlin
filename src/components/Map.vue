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
		var map = new AMap.Map('map-container',{
            resizeEnable: true,
            zoom: 10
        });

		AMapUI.load(['ui/misc/PointSimplifier', 'lib/$', 'lib/utils'], function(PointSimplifier, $, utils) {

        	if (!PointSimplifier.supportCanvas) {
        	    alert('当前环境不支持 Canvas！');
        	    return;
        	}

        	var defaultRenderOptions = {
        	    drawQuadTree: false,
        	    drawPositionPoint: false,
        	    drawShadowPoint: false,
        	    //点
        	    pointStyle: {
        	        content: 'circle',
        	        width: 6,
        	        height: 6,
        	        fillStyle: '#1f77b4',
        	        lineWidth: 1,
        	        strokeStyle: 'rgba(0,0,0,0)'
        	    },
        	    //TopN区域
        	    topNAreaStyle: {
        	        autoGlobalAlphaAlpha: true,
        	        content: 'rect',
        	        fillStyle: '#e25c5d',
        	        lineWidth: 1,
        	        strokeStyle: 'rgba(0,0,0,0)'
        	    },
        	    //点的硬核部分
        	    pointHardcoreStyle: {
        	        content: 'none',
        	        width: 5,
        	        height: 5,
        	        lineWidth: 1,
        	        fillStyle: 'rgba(0,0,0,0)',
        	        strokeStyle: 'rgba(0,0,0,0)'
        	    },
        	    //定位点
        	    pointPositionStyle: {
        	        content: 'circle',
        	        width: 2,
        	        height: 2,
        	        lineWidth: 1,
        	        //offset: ['-50%', '-50%'],
        	        strokeStyle: 'rgba(0,0,0,0)',
        	        fillStyle: '#cc0000'
        	    },
        	    //鼠标hover时的覆盖点
        	    pointHoverStyle: {
        	        width: 10,
        	        height: 10,
        	        content: 'circle',
        	        fillStyle: 'rgba(0,0,0,0)',
        	        lineWidth: 2,
        	        strokeStyle: '#ffa500'
        	    },
        	    //空间被占用的点
        	    shadowPointStyle: {
        	        fillStyle: 'rgba(0,0,0,0.2)',
        	        content: 'circle',
        	        width: 6,
        	        height: 6,
        	        lineWidth: 1,
        	        strokeStyle: 'rgba(0,0,0,0)'
        	    }
        	};
        	var pointSimplifierIns = new PointSimplifier({

        	    zIndex: 100,

        	    map: map,

        	    getPosition: function(item) {

        	        if (!item) {
        	            return null;
        	        }

        	        var parts = item.split(',');

        	        return [parseFloat(parts[0]), parseFloat(parts[1])];
        	    },
        	    compareDataItem: function(a, b, aIndex, bIndex) {

        	        //数据源尾部的优先
        	        return aIndex > bIndex ? -1 : 1;
        	    },
        	    getHoverTitle: function(dataItem, idx) {
        	        return idx + ': ' + dataItem;
        	    },
        	    renderOptions: defaultRenderOptions
        	});

        	window.pointSimplifierIns = pointSimplifierIns;

        	$.get('http://a.amap.com/amap-ui/static/data/10w.txt', function(csv) {

        	    var data = csv.split('\n');

        	    pointSimplifierIns.setData(data);

        	    $('#loadingTip').remove();
        	});

        	var customContainer = document.getElementById('my-gui-container');

        	function createRenderEngGui() {

        	    function RenderEngOptions() {
        	        this.drawQuadTree = false;
        	        this.drawPositionPoint = false;
        	        this.drawShadowPoint = false;
        	        this.disableHardcoreWhenPointsNumBelow = 0;
        	    }

        	    var renderEngParams = new RenderEngOptions();

        	    var renderEngGui = new dat.GUI({
        	        width: 260,
        	        autoPlace: false,
        	    });

        	    renderEngGui.add(renderEngParams, 'drawQuadTree').onChange(render);

        	    renderEngGui.add(renderEngParams, 'drawShadowPoint').onChange(render);

        	    renderEngGui.add(renderEngParams, 'drawPositionPoint').onChange(render);

        	    //renderEngGui.add(renderEngParams, 'disableHardcoreWhenPointsNumBelow', 0, 10000).step(1000).onChange(render);

        	    addGuiPanel('', '', renderEngGui);

        	    return renderEngParams;
        	}

        	var customContentMap = {
        	    'custom_path': function setCustom1Content(params) {

        	        return utils.extend(params, {
        	            content: function(ctx, x, y, width, height) {

        	                //注意，这里的width和height可能不同于pointStyle里面的width/height， 高清屏幕下会存在比例缩放

        	                //这里绘制一个菱形路径
        	                var yPos = 1 / 3;

        	                var top = [x + width / 2, y],
        	                    right = [x + width, y + height * yPos],
        	                    bottom = [x + width / 2, y + height],
        	                    left = [x, y + height * yPos];

        	                ctx.moveTo(top[0], top[1]);
        	                ctx.lineTo(right[0], right[1]);
        	                ctx.lineTo(bottom[0], bottom[1]);
        	                ctx.lineTo(left[0], left[1]);
        	                ctx.lineTo(top[0], top[1]);

        	            },
        	            //定位点为底部中心
        	            offset: ['-50%', '-100%']
        	        });
        	    },
        	    'custom_icon': function setCustom3Content(params) {

        	        return utils.extend(params, {
        	            //使用图片
        	            content: PointSimplifier.Render.Canvas.getImageContent(
        	                'http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
        	                function onload() {
        	                    pointSimplifierIns.renderLater();
        	                },
        	                function onerror(e) {
        	                    alert('图片加载失败！');
        	                }),
        	            //定位点为底部中心
        	            offset: ['-50%', '-100%']
        	        });
        	    }
        	};

        	function createPointStyleGui(target) {

        	    var pointStyleGui = new dat.GUI({
        	        width: 260,
        	        autoPlace: false,
        	    });

        	    var pointStyleParams = utils.extend({}, defaultRenderOptions[target]);

        	    //pointStyleGui.add(pointStyleParams, 'optionName');

        	    //形状类型
        	    pointStyleGui.add(pointStyleParams, 'content', ['rect', 'circle', 'none', 'custom_path', 'custom_icon']).onChange(render);

        	    if (target !== 'topNAreaStyle') {

        	        //宽度
        	        pointStyleGui.add(pointStyleParams, 'width', 0, 50).step(1).onChange(render);

        	        //高度
        	        pointStyleGui.add(pointStyleParams, 'height', 0, 50).step(1).onChange(render);

        	    } else {
        	        pointStyleGui.add(pointStyleParams, 'autoGlobalAlphaAlpha').onChange(render);
        	    }

        	    pointStyleGui.addColor(pointStyleParams, 'fillStyle').onChange(render);

        	    pointStyleGui.addColor(pointStyleParams, 'strokeStyle').onChange(render);

        	    pointStyleGui.add(pointStyleParams, 'lineWidth', 1, 10).step(1).onChange(render);

        	    addGuiPanel(target, target, pointStyleGui);

        	    return pointStyleParams;
        	}

        	function addGuiPanel(id, title, gui) {

        	    var container = document.createElement('div');

        	    container.id = id;

        	    if (title) {
        	        var tEle = document.createElement('h3');
        	        tEle.innerHTML = title;
        	        container.appendChild(tEle);
        	    }

        	    container.appendChild(gui.domElement);

        	    customContainer.appendChild(container);
        	}

        	var styleOptions = ['pointStyle', 'topNAreaStyle', 'pointHardcoreStyle', 'pointPositionStyle', 'pointHoverStyle', 'shadowPointStyle'];

        	var renderEngParams = createRenderEngGui(),
        	    styleParamsMap = {};

        	for (var i = 0, len = styleOptions.length; i < len; i++) {
        	    styleParamsMap[styleOptions[i]] = createPointStyleGui(styleOptions[i]);
        	}

        	function render() {

        	    $('#shadowPointStyle').toggleClass('hide', !renderEngParams.drawShadowPoint);

        	    $('#pointPositionStyle').toggleClass('hide', !renderEngParams.drawPositionPoint);

        	    pointSimplifierIns.renderEngine.setOptions(renderEngParams);

        	    for (var k in styleParamsMap) {

        	        var params = utils.extend({}, styleParamsMap[k]);

        	        if (customContentMap[params['content']]) {
        	            params = customContentMap[params['content']](params);
        	        }

        	        pointSimplifierIns.renderEngine.setOption(k, params);
        	    }

        	    pointSimplifierIns.renderLater(200);

        	    refreshConfigPanel();
        	}

        	var colorFlds = ['fillStyle', 'strokeStyle', 'borderStyle'],
        	    rgbAlphaRegx = /([\d\.]+)\s*\)/i;

        	function isEmptyColor(color) {

        	    if (color.indexOf('rgba') !== 0) {
        	        return false;
        	    }

        	    var match = color.match(rgbAlphaRegx);

        	    if (match && parseFloat(match[1]) < 0.01) {
        	        return true;
        	    }

        	    return false;
        	}

        	function fixColors(opts) {

        	    if (utils.isObject(opts)) {

        	        for (var i = 0, len = colorFlds.length; i < len; i++) {

        	            if (opts[colorFlds[i]] && isEmptyColor(opts[colorFlds[i]])) {
        	                opts[colorFlds[i]] = null;
        	            }
        	        }
        	    }

        	    return opts;
        	}


        	function exportRenderOptions() {

        	    var options = utils.extend({}, renderEngParams);

        	    for (var k in defaultRenderOptions) {

        	        var opts = styleParamsMap[k];

        	        if (opts) {
        	            options[k] = fixColors(opts);
        	        }
        	    }
        	    return options;
        	}

        	function refreshConfigPanel() {

        	    var options = exportRenderOptions();

        	    var configStr = 'renderOptions: ' + JSON.stringify(options, null, 2);

        	}
        	render();
    	});
    },
    components: {
    },
}
</script>
