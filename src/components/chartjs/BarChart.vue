<style lang="scss" scoped>
</style>

<template>
    <div class="bar-chart">
    </div>
</template>

<script>
import { Bar} from 'vue-chartjs'

export default Bar.extend({
    name: 'bar-chart',
    props: ["data", "option"],
    data () {
      return {
      	datacollection: {
      	  labels: ['January', 'February'],
      	  datasets: [
      	    {
      	      label: 'Data One',
      	      backgroundColor: '#f87979',
      	      data: [40, 20]
      	    }
      	  ]
      	}
      }
    },
    mounted () {
    	this.renderChart(this.datacollection, {responsive: true, maintainAspectRatio: false})
    },
    methods: {
    },
})

</script>
