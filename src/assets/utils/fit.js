/*
 *通过JS动态适配屏幕
 */
(function(win, doc) {
	var dpr, rem, scale;
	var docEl = document.documentElement;
	var fontEl = document.createElement('style');
    var metaEl = metaEl = doc.createElement('meta');
    metaEl.name = 'viewport';
	
	dpr = window.devicePixelRatio || 1;
	//rem = docEl.clientWidth * dpr / 10; //clientWidth 获取的是网页的布局视口，如果没有定义的话会出现偏差
	//innerWidth 可以直接获取屏幕横向设备像素数量，然后设置宽度 width=device-width
	rem = win.innerWidth / 10;

	scale = 1 / dpr;
	
	
	// 设置viewport，进行缩放，达到高清效果
    metaEl.content = 'width=device-width' + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no';
    docEl.firstElementChild.appendChild(metaEl);
	
	// 设置data-dpr属性，留作的css hack之用
	docEl.setAttribute('data-dpr', dpr);
	
	// 动态写入样式
	docEl.firstElementChild.appendChild(fontEl);
	fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';
})(window, document);
