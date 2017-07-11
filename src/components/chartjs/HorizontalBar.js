import {HorizontalBar , mixins} from 'vue-chartjs'
const { reactiveProp } = mixins

export default HorizontalBar.extend({
    name: 'bar-chart',
    mixins: [reactiveProp],
    props: ["chartData", "options"],
    data () {
      return {}
    },
    mounted () {
    	this.renderChart(this.chartData, this.options)
    },
    methods: {
    },
})
