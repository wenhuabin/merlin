import { Bar} from 'vue-chartjs'

export default Bar.extend({
    name: 'bar-chart',
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
