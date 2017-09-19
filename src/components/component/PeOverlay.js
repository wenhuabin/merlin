// 复杂的自定义覆盖物
function ComplexCustomOverlay(point, h1, h2, h3){
  this._point = point;
  this._h1 = h1;
  this._h2 = h2;
  this._h3 = h3;
  var tmp = h1;
  if(h2 > tmp){tmp = h2}
  if(h3 > tmp){tmp = h3}
  this._mh = tmp;
}
ComplexCustomOverlay.prototype = new BMap.Overlay();
ComplexCustomOverlay.prototype.initialize = function(map){
  this._map = map;
  var div = this._div = document.createElement("div");
  div.style.position = "absolute";
  div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
  //div.style.backgroundColor = "#fff";
  div.style.color = "white";
  div.style.height =  this._mh + 'px';
  div.style.width = "30px";
  div.style.lineHeight = "60px";
  div.style.whiteSpace = "nowrap";
  div.style.MozUserSelect = "none";
  div.style.fontSize = "12px"
  var d1 = this._div1 = document.createElement("div");
  var d2 = this._div2 = document.createElement("div");
  var d3 = this._div3 = document.createElement("div");
  d1.style.display = "inline-block";
  d1.style.backgroundColor = "red";
  d1.style.height = this._h1 + "px";
  d1.style.width = "10px";
  d2.style.display = "inline-block";
  d2.style.backgroundColor = "green";
  d2.style.height = this._h2 + "px";
  d2.style.width = "10px";
  d3.style.display = "inline-block";
  d3.style.backgroundColor = "yellow";
  d3.style.height = this._h3 + "px";
  d3.style.width = "10px";
  div.appendChild(d1);
  div.appendChild(d2);
  div.appendChild(d3);
  //span.appendChild(document.createTextNode(this._text));      
  var that = this;

  //var arrow = this._arrow = document.createElement("div");
  //arrow.style.background = "url(http://map.baidu.com/fwmap/upload/r/map/fwmap/static/house/images/label.png) no-repeat";
  //arrow.style.position = "absolute";
  //arrow.style.width = "11px";
  //arrow.style.height = "10px";
  //arrow.style.top = "22px";
  //arrow.style.left = "10px";
  //arrow.style.overflow = "hidden";
  //div.appendChild(arrow);
 
  div.onmouseover = function(){
    
  }

  div.onmouseout = function(){
    
  }

  mp.getPanes().labelPane.appendChild(div);
  
  return div;
}
ComplexCustomOverlay.prototype.draw = function(){
  var map = this._map;
  var pixel = map.pointToOverlayPixel(this._point);
  this._div.style.left = pixel.x - 15 + "px";
  this._div.style.top  = pixel.y - 85 + "px";
}

    
var myCompOverlay = new ComplexCustomOverlay(new BMap.Point(116.407845,39.914101), 20, 30, 60);

mp.addOverlay(myCompOverlay);
