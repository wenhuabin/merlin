import { Scatter, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default Scatter.extend({
  mixins: [reactiveProp],
  props: ['chartData', 'options', 'height', 'width'],
  mounted () {
      // this.chartData is created in the mixin
      this.renderChart(this.chartData, this.options)
  },
})
