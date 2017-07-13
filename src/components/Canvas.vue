<style lang="scss" scoped>
@import '~scss/web/canvas'
</style>

<template>
    <div class="canvas-demo">
        <h1>Canvas</h1>
		<h2>6、Clip</h2>
        <div class="demo">
            <canvas id="canvas-clip" width="400" height="250">您的浏览器不支持 HTML5 canvas 标签。</canvas>
        </div>
		<h2>5、贝塞尔曲线</h2>
        <div class="demo">
            <canvas id="canvas-bezier" width="400" height="250">您的浏览器不支持 HTML5 canvas 标签。</canvas>
        </div>
		<h2>4、渐变</h2>
        <div class="demo">
            <canvas id="canvas-gran" width="400" height="250">您的浏览器不支持 HTML5 canvas 标签。</canvas>
        </div>
		<h2>3、文字</h2>
        <div class="demo">
            <canvas id="canvas-text" width="400" height="250">您的浏览器不支持 HTML5 canvas 标签。</canvas>
        </div>
		<h2>2、圆形</h2>
        <div class="demo">
            <canvas id="canvas-circle" width="400" height="250">您的浏览器不支持 HTML5 canvas 标签。</canvas>
        </div>
		<h2>1、直线</h2>
        <div class="demo">
            <canvas id="canvas-line" width="400" height="250">您的浏览器不支持 HTML5 canvas 标签。</canvas>
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
        this.drawBezier()
        this.drawClip()
    },
    methods: {
        drawLine: function(){
            var c=document.getElementById("canvas-line")
            var ctx=c.getContext("2d")
            ctx.strokeStyle="green"
            ctx.lineCap="square"
            ctx.lineWidth=5
            ctx.moveTo(0,0)
            ctx.lineTo(200,30)
            ctx.stroke()
            ctx.lineJoin="miter"
            ctx.lineWidth=10 
            ctx.miterLimit=0
            ctx.moveTo(200,90)
            ctx.lineTo(280,140)
            ctx.lineTo(200,190)
            ctx.stroke()
            // Draw shapes
            ctx.fillRect(25,25,100,100) //fillRect 填充 Rect 边框
            ctx.clearRect(45,45,60,60) //清除区域内容
            ctx.strokeRect(50,50,50,50) //strokeRect 触发画长方形（不填充）stroke 画线条
        },
        drawCircle: function(){
            var c=document.getElementById("canvas-circle")
            var ctx=c.getContext("2d")
            ctx.beginPath()
            ctx.arc(75,75,50,0,Math.PI*2,true)  // Outer circle
            
            ctx.moveTo(110,75)
            ctx.arc(75,75,35,0,Math.PI,false)   // Mouth
            
            ctx.moveTo(65,65)
            ctx.arc(60,65,5,0,Math.PI*2,true)  // Left eye
            
            ctx.moveTo(95,65)
            ctx.arc(90,65,5,0,Math.PI*2,true)  // Right eye
            
            ctx.stroke()
            ctx.beginPath(); 
            ctx.moveTo(200,20);           // Create a starting point
            ctx.lineTo(280,20);          // Create a horizontal line
            ctx.arcTo(330,20,330,70,50); // Create an arc
            ctx.lineTo(330,120);         // Continue with vertical line
            ctx.stroke();                // Draw it

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
            grd.addColorStop(0,"black")
            grd.addColorStop(0.5,"red")
            grd.addColorStop(1,"white")
            ctx.fillStyle=grd
            ctx.fillRect(0,0,400,250)
        },
        drawBezier: function(){
            var c=document.getElementById("canvas-bezier")
            var ctx=c.getContext("2d")
            ctx.beginPath()
            ctx.moveTo(75,40)
            
            ctx.bezierCurveTo(75,37,70,25,50,25)
            ctx.bezierCurveTo(20,25,20,62.5,20,62.5)
            
            ctx.bezierCurveTo(20,80,40,102,75,120)
            ctx.bezierCurveTo(110,102,130,80,130,62.5)
            
            ctx.bezierCurveTo(130,62.5,130,25,100,25)
            ctx.bezierCurveTo(85,25,75,37,75,40)
            ctx.fillStyle="red"
            //阴影
            ctx.shadowBlur=20
            ctx.shadowColor="black"
            ctx.shadowOffsetX=15
            ctx.shadowOffsetY=-8
            ctx.fill() //填充
        },
        drawClip: function(){
            var c=document.getElementById("canvas-clip")
            var ctx=c.getContext("2d")
            ctx.rect(50, 20, 100, 90)
            ctx.stroke()
            // Draw red rectangle
            ctx.fillStyle = "red"
            ctx.fillRect(0, 0, 100, 80)

            ctx.rect(250, 20, 100, 90)
            ctx.stroke()
            ctx.save()
            ctx.clip()
            ctx.restore()
            // Draw red rectangle after clip()
            ctx.fillStyle = "red"
            ctx.fillRect(200, 0, 100, 80)

            ctx.beginPath();
            ctx.moveTo(200, 150);
            ctx.quadraticCurveTo(200, 230, 380, 150);
            ctx.stroke();

            ctx.rect(50, 170, 100, 60)
            ctx.stroke()
            //ctx.save()
            ctx.clip()
            //ctx.restore()
            // Draw red rectangle after clip()
            ctx.fillStyle = "red"
            ctx.fillRect(0, 150, 100, 60)

        },
    },
    components: {
    },
}
</script>
