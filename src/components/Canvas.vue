<style lang="scss" scoped>
@import '~scss/web/canvas'
</style>

<template>
    <div class="canvas-demo">
        <h1>Canvas</h1>
		<h2>1、直线</h2>
        <div class="demo">
            <canvas id="canvas-line" width="400" height="250">您的浏览器不支持 HTML5 canvas 标签。</canvas>
        </div>
		<h2>2、圆形</h2>
        <div class="demo">
            <canvas id="canvas-circle" width="400" height="250">您的浏览器不支持 HTML5 canvas 标签。</canvas>
        </div>
		<h2>3、文字</h2>
        <div class="demo">
            <canvas id="canvas-text" width="400" height="250">您的浏览器不支持 HTML5 canvas 标签。</canvas>
        </div>
		<h2>4、渐变</h2>
        <div class="demo">
            <canvas id="canvas-gran" width="400" height="250">您的浏览器不支持 HTML5 canvas 标签。</canvas>
        </div>
    </div>
</template>

<script>

export default {
    name: 'canvas',
    data () {
      return {
      }
    },
    mounted(){
        this.drawLine()
        this.drawCircle()
        this.drawText()
        this.drawGran()
    },
    methods: {
        drawLine: function(){
            var c=document.getElementById("canvas-line")
            var ctx=c.getContext("2d")
            ctx.moveTo(0,0)
            ctx.lineTo(200,100)
            ctx.stroke()
        },
        drawCircle: function(){
            var c=document.getElementById("canvas-circle")
            var ctx=c.getContext("2d")
            //ctx.beginPath()
            //ctx.arc(200,125,80,0,2*Math.PI)
            //ctx.stroke()
            //ctx.beginPath()
            //ctx.arc(100,125,80,0,2*Math.PI)
            //ctx.stroke()
            //ctx.beginPath()
            //ctx.arc(300,125,80,0,2*Math.PI)
            //ctx.stroke()
            ctx.beginPath();
            ctx.arc(75,75,50,0,Math.PI*2,true);  // Outer circle
            
            ctx.moveTo(110,75);
            ctx.arc(75,75,35,0,Math.PI,false);   // Mouth
            
            ctx.moveTo(65,65);
            ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
            
            ctx.moveTo(95,65);
            ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
            
            ctx.stroke();
        },
        drawText: function(){
            var c=document.getElementById("canvas-text")
            var ctx=c.getContext("2d")
            ctx.font="30px Arial"
            ctx.fillText("Hello World",100,100)
        },
        drawGran: function(){
            var c=document.getElementById("canvas-gran")
            var ctx=c.getContext("2d")
            var grd=ctx.createLinearGradient(0,0,400,0)
            //var grd=ctx.createRadialGradient(75,50,5,90,60,100)
            grd.addColorStop(0,"red")
            grd.addColorStop(1,"white")
            ctx.fillStyle=grd
            ctx.fillRect(0,0,400,250)
        },
    },
    components: {
    },
}
</script>
