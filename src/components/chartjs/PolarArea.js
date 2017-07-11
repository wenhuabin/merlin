import { PolarArea, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default PolarArea.extend({
  mixins: [reactiveProp],
  props: ['chartData', 'options', 'height', 'width'],
  mounted () {
      // this.chartData is created in the mixin
      this.renderChart(this.chartData, this.options)
  },
})
