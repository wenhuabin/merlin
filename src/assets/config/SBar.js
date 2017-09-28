// 复杂的自定义覆盖物
function ComplexCustomOverlay(point, h1, h2, h3){
  this._point = point;
  this._h1 = h1;
  this._h2 = h2;
  this._h3 = h3;
  this._mh = 0;
}
ComplexCustomOverlay.prototype = new BMap.Overlay();
ComplexCustomOverlay.prototype.initialize = function(map){
  this._map = map;
  var div = this._div = document.createElement("div");
  div.style.position = "absolute";
  div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
  div.style.color = "white";
  div.style.height =  this._mh + 'px';
  div.style.lineHeight =  this._mh + 'px';
  div.style.width = "32px";
  div.style.whiteSpace = "nowrap";
  div.style.MozUserSelect = "none";
  div.style.fontSize = "12px"
  var d1 = this._div1 = document.createElement("div");
  var d2 = this._div2 = document.createElement("div");
  var d3 = this._div3 = document.createElement("div");
  d1.style.display = "inline-block";
  d1.style.position = "absolute";
  d1.style.top = '-' + this._h1 + 'px';
  d1.style.left = "0";
  d1.style.backgroundColor = "#F44336";
  d1.style.height = this._h1 + "px";
  d1.style.lineHeight = this._h1 + "px";
  d1.style.width = "10px";
  d2.style.display = "inline-block";
  d2.style.position = "absolute";
  d2.style.top = '-' + this._h2 + 'px';
  d2.style.left = "11px";
  d2.style.backgroundColor = "#FF9800";
  d2.style.height = this._h2 + "px";
  d2.style.lineHeight = this._h2 + "px";
  d2.style.width = "10px";
  d3.style.display = "inline-block";
  d3.style.position = "absolute";
  d3.style.top = '-' + this._h3 + 'px';
  d3.style.left = "22px";
  d3.style.backgroundColor = "#FFEB3B";
  d3.style.height = this._h3 + "px";
  d3.style.lineHeight = this._h3 + "px";
  d3.style.width = "10px";
  div.appendChild(d1);
  div.appendChild(d2);
  div.appendChild(d3);
 
  div.onmouseover = function(){
    
  }

  div.onmouseout = function(){
    
  }

  this._map.getPanes().labelPane.appendChild(div);
  
  return div;
}

ComplexCustomOverlay.prototype.draw = function(){
  var map = this._map;
  var pixel = map.pointToOverlayPixel(this._point);
  this._div.style.left = pixel.x - 15 + "px";
  this._div.style.top  = pixel.y - 45 + "px";
}

export default ComplexCustomOverlay;
    
