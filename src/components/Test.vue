<style lang="scss" scoped>
@import '~scss/web/test';
</style>

<template> <div class="test">
        <div class="welcome">
            <img class="launch" src="../assets/imgs/launch.jpg">
		    <h1>Welcome To Merlin</h1>
            <div class="showPage">翻页导航实例：Page: {{page}} / Pages: {{pages}}</div>
            <div class="select-test">
                <div class="hint">下拉选择框测试</div>
                <Selecting :initial_value='value' :list='list' @onChange='onChange'/>
                <div class="hint">value: {{value}} / key: {{key}}</div>
            </div>
			<div class="date-picker">
				<DatePicker :date="startTime" :option="option" :limit="[]" />
			</div>
            <Paging :page="page" :pages="pages" @onPageChange="onPageChange"/>
        </div>
	</div>
</template>

<script>
import Paging from 'components/component/Paging'
import Select from 'components/component/Select'
import DatePicker from 'components/component/DatePicker'

export default {
  name: 'Test',
  data () {
    return {
        page: 26,
        pages: 26,
        value: '请选择',
        key: -1,
        list: [{value: '测试1', disabled: false},{value: '测试2', disabled: false},{value: '测试3', disabled: true},{value: '测试4', disabled: false},{value: '非常长的非常长的条目条目5', disabled: false}],
		startTime: {
      	  time: '2017-07-06'
      	},
      	endtime: {
      	  time: ''
      	},
		option: {
            type: 'day',
            week: ['MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAR', 'SUN'],
            month: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'],
            format: 'YYYY-MM-DD',
            placeholder: 'when?',
            inputStyle: {
              'display': 'inline-block',
              'padding': '6px',
              'line-height': '22px',
              'font-size': '16px',
              'border': '2px solid #fff',
              'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
              'border-radius': '2px',
              'color': '#5F5F5F'
            },
            color: {
              header: '#ccc',
              headerText: '#f00'
            },
            buttons: {
              ok: 'Ok',
              cancel: 'Cancel'
            },
            overlayOpacity: 0.5, // 0.5 as default
            dismissible: true // as true as default
        },
        timeoption: {
          type: 'min',
          week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
          month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          format: 'YYYY-MM-DD HH:mm'
        },
        multiOption: {
          type: 'multi-day',
          week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
          month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          format:"YYYY-MM-DD HH:mm"
        },
        limit: [{
          type: 'weekday',
          available: [1, 2, 3, 4, 5]
        },{
          type: 'fromto',
          from: '2016-02-01',
          to: '2016-02-20'
        }]
    }
  },
  methods: {
      onPageChange: function(p){
          this.page = p
      },
      onChange: function(value, key){
          this.value = value
          this.key = key
      }
  },
  components: {
    'Paging': Paging,
    'Selecting': Select,
    'DatePicker': DatePicker,
  },
}
</script>
