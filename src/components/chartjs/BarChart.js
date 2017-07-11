import {Bar, mixins} from 'vue-chartjs'
const { reactiveProp } = mixins

export default Bar.extend({
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
