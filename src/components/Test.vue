<style lang="scss" scoped>
@import '~scss/web/test';
</style>

<template> <div class="test">
        <div class="welcome">
            <img class="launch" src="../assets/imgs/launch.jpg">
		    <h1>Welcome To Merlin</h1>
            <div class="select-test">
                <div class="hint">下拉选择框测试</div>
                <Selecting :initial_value='value' :list='list' @onChange='onChange'/>
                <div class="hint">value: {{value}} / key: {{key}}</div>
            </div>
			<div class="date-picker">
                <div class="hint">日历选择器测试</div>
				<DatePicker :date="date" :ifTime="true" @onPick="onPick"/>
                <div class="hint">Date: {{date}}</div>
			</div>
            <div class="showPage">翻页导航实例：Page: {{page}} / Pages: {{pages}}</div>
            <Paging :page="page" :pages="pages" @onPageChange="onPageChange"/>
        </div>
	</div>
</template>

<script>
import moment from 'moment'
import Paging from 'components/component/Paging'
import Select from 'components/component/Select'
import DatePicker from 'components/component/DatePicker'

export default {
  name: 'Test',
  data () {
    return {
        page: 5,
        pages: 26,
        value: '请选择',
        key: -1,
        list: [{value: '测试1', disabled: false},{value: '测试2', disabled: false},{value: '测试3', disabled: false},{value: '测试4', disabled: false},{value: '非常长的非常长的条目条目5', disabled: false}],
        date: moment().format("YYYY-MM-DD HH:mm"),
        inputStyle:{
            headerBackgroundColor: '#3f51b5',
            inputBoxSize: {width: 210, height: 30, paddingLeft: 10}
        },
    }
  },
  mounted(){
      //let i = 1
      //setInterval(()=>{
      //    console.log(moment().add(i, 'days').format("YYYY-MM-DD HH:mm:ss"))
      //    this.date = moment().add(i++, 'days').format("YYYY-MM-DD HH:mm:ss")
      //}, 5000)
  },
  methods: {
      onPageChange: function(p){
          this.page = p
      },
      onChange: function(value, key){
          this.value = value
          this.key = key
      },
      onPick: function(date){
          this.date = date 
      }
  },
  components: {
    'Paging': Paging,
    'Selecting': Select,
    'DatePicker': DatePicker,
  },
}
</script>
