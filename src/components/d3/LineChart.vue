<style lang="scss" scoped>
@import '~scss/d3/lineChart';
</style>

<template>
	<svg class="line-chart">
	   <g>
	     <path :d="line" />
	   </g>
	</svg>
</template>

<script>
import * as d3 from 'd3'

export default {
	name: 'line-chart',
	props: ["initial_value", "list"],
	data () {
	  return {
	  	data: [99, 71, 78, 25, 36, 92],
	    line: '',
	  }
	},
	mounted() {
	  this.calculatePath();
	},
	methods: {
	  getScales() {
	    const x = d3.scaleTime().range([0, 430]);
	    const y = d3.scaleLinear().range([210, 0]);
	    d3.axisLeft().scale(x);
	    d3.axisBottom().scale(y);
	    x.domain(d3.extent(this.data, (d, i) => i));
	    y.domain([0, d3.max(this.data, d => d)]);
	    return { x, y };
	  },
	  calculatePath() {
	    const scale = this.getScales();
	    const path = d3.line()
	      .x((d, i) => scale.x(i))
	      .y(d => scale.y(d));
	    this.line = path(this.data);
	  },
	},
	computed: {
	},
}

</script>