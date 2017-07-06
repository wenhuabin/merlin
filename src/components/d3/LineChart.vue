<style lang="scss" scoped>
@import '~scss/d3/lineChart';
</style> 
<template>
    <div class="line-chart">
	    <svg @mousemove="mouseover">
          <g>
            <path class="area" :d="paths.area" />
            <path class="line" :d="paths.line" />
            <path class="selector" :d="paths.selector" />
          </g>
        </svg>
    </div>
</template>

<script>
import * as d3 from 'd3'
import {generateData} from 'utils/util'
import TWEEN from 'tween.js'

export default {
	name: 'line-chart',
	props: {
  		datas: {
  		  type: Array,
  		  default: ()=>[],
  		},
  		margin: {
  		  type: Object,
  		  default: ()=>({
  		    left: 0,
  		    right: 0,
  		    top: 0,
  		    bottom: 0,
  		  }),
  		},
  		ceil: {
  		  type: Number,
  		  default: 100,
  		}
	},
	data () {
		return {
            data: [],
			width: 800,
    		height: 300,
    		paths: {
    		  area: '',
    		  line: '',
    		  selector: '',
    		},
    		lastHoverPoint: {},
    		scaled: {
    		  x: null,
    		  y: null,
    		},
    		animatedData: [],
    		points: [],
	  	}
	},
    computed: {
  	},
  	mounted() {
	    this.data = generateData(25,10,100);
        this.initialize()
  	  	this.update()
        //setInterval(()=>{
        //    this.data = generateData(25, 10, 100)
        //    this.update
        //},3000)
  	},
  	watch: {
  	  	data: function dataChanged(newData, oldData) {
  	  	  this.tweenData(newData, oldData);
  	  	},
  	},
  	methods: {
  	    createArea: d3.area().x(d => d.x).y0(d => d.max).y1(d => d.y),
  	    createLine: d3.line().x(d => d.x).y(d => d.y),
  	    createValueSelector: d3.area().x(d => d.x).y0(d => d.max).y1(0),
  	    initialize() {
  	        this.scaled.x = d3.scaleLinear().range([0, this.width]);
  	        this.scaled.y = d3.scaleLinear().range([this.height, 0]);
  	        d3.axisLeft().scale(this.scaled.x);
  	        d3.axisBottom().scale(this.scaled.y);
  	    },
  	    tweenData(newData, oldData) {
  	        const vm = this;
  	        function animate(time) {
  	          requestAnimationFrame(animate);
  	          TWEEN.update(time);
  	        }
  	        new TWEEN.Tween(oldData)
  	          .easing(TWEEN.Easing.Quadratic.Out)
  	          .to(newData, 500)
  	          .onUpdate(function() {
  	            vm.animatedData = this;
  	            vm.update();
  	          })
  	          .start();
            requestAnimationFrame(animate);
  	        //animate();
  	    },
  	    update() {
  	        this.scaled.x.domain(d3.extent(this.data, (d, i) => i));
  	        this.scaled.y.domain([0, this.ceil]);
  	        this.points = [];
  	        for (const [i, d] of this.data.entries()) {
  	          this.points.push({
  	            x: this.scaled.x(i),
  	            y: this.scaled.y(d),
  	            max: this.height,
  	          });
  	        }
  	        this.paths.area = this.createArea(this.points);
  	        this.paths.line = this.createLine(this.points);
  	    },
  	    mouseover({ offsetX }) {
  	      if (this.points.length > 0) {
  	        const x = offsetX - this.margin.left;
  	        const closestPoint = this.getClosestPoint(x);
  	        if (this.lastHoverPoint.index !== closestPoint.index) {
  	          const point = this.points[closestPoint.index];
  	          this.paths.selector = this.createValueSelector([point]);
  	          this.$emit('select', this.data[closestPoint.index]);
  	          this.lastHoverPoint = closestPoint;
  	        }
  	      }
  	    },
  	    getClosestPoint(x) {
  	      return this.points
  	        .map((point, index) => ({ x:
  	          point.x,
  	          diff: Math.abs(point.x - x),
  	          index,
  	        }))
  	        .reduce((memo, val) => (memo.diff < val.diff ? memo : val));
  	    },
  	},	
}

</script>
