<style lang="scss" scoped>
@import '~scss/web/test';
</style>

<template> <div class="test">
        <div class="welcome">
            <img class="launch" src="../assets/imgs/launch.jpg">
		    <h1>Welcome To Merlin</h1>
            <div class="loading-test">
                <!--
                <LoadingProcess :step="lstep" :btext="btext" :ltext="ltext" :atext="atext"/>
                -->
                <SVGLoading/>
            </div>
            <div class="loading-test">
                <!--
                <LoadingProcess :step="lstep" :btext="btext" :ltext="ltext" :atext="atext"/>
                -->
                <LoadingProcess />
            </div>
            <div class="loading-test">
                <Loading />
            </div>
            <div class="select-test">
                <div class="hint-left">下拉选择框测试</div>
                <Selecting :initial_value='value' :list='list' @onChange='onChange' :if_disabled="false"/>
                <div class="hint">value: {{value}} / key: {{key}}</div>
            </div>
			<div class="date-picker">
                <div class="hint-left">日历选择器测试</div>
                <DatePicker :date="date" :ifTime="true" @onPick="onPick"/>
                <div class="hint">Date: {{date}}</div>
                <!--
                可以通过 .sync 的方式来改变 foo 的值，省去父组件写回调函数（本质上是一样的，只是省了几行代码)
                <comp :foo.sync="bar"></comp> 
                is expanded into: <comp :foo="bar" @update:foo="val => bar = val"></comp>
                this.$emit('update:foo', newValue)
                -->
			</div>
			<div class="upload-button">
                <div class="hint-left">上传按钮</div>
                <UploadBtn @processFile="processFile" :width="180" :height="45" :if_disabled="false" text="文件上传"/>
                <div class="hint">{{file}}</div>
			</div>
            <div class="animate-test">
                <div class="hint-left">数据渐变性测试</div>
                    <input class="animate-input" v-model.number="number" type="number" step="10">
                <div class="hint">value: {{animatedNumber}}</div>
            </div>
            <div class="state">
                <div class="hint-left">Vuex Store 测试</div>
                <div class="hint">{{token.uname + " / " + token.email + " / " + count}}</div>
            </div>
            <div class="select-test" v-if="cycleFlag">
                <div class="hint-left">生命周期测试</div>
                <LifeCycle />
            </div>
            <input type="text" v-model="data" :class="{empty: !data && ifInput}" @click="onInputChange" :style="{display: 'none'}"/>
            <div class="showPage">翻页导航实例：Page: {{page}} / Pages: {{pages}}</div>
            <Paging :page="page" :pages="pages" @onPageChange="onPageChange"/>
        </div>
	</div>
</template>

<script>
import { mapState, mapActions} from 'vuex'
import moment from 'moment'
import Paging from 'components/component/Paging'
import Select from 'components/component/Select'
import DatePicker from 'components/component/DatePicker'
import LifeCycle from 'components/component/LifeCycle'
import UploadBtn from 'components/component/UploadBtn'
import Loading from 'components/component/Loading'
import LoadingProcess from 'components/component/LoadingProcess'
import SVGLoading from 'components/component/SVGLoading'
import TWEEN from '@tweenjs/tween.js'
import * as types from 'store/mutation-types'
import {format, compareAsc} from 'date-fns'

export default {
    name: 'Test',
    data () {
      return {
          lstep: 1,
          btext: '请输入参数查询',
          ltext: '正在加载数据，请稍后...',
          atext: '当前参数查询结果为空',
          page: 5,
          pages: 26,
          value: '请选择',
          key: -1,
          list: [{value: '测试1', disabled: false},{value: '测试2', disabled: false},{value: '测试3', disabled: false},{value: '测试4', disabled: false},{value: '非常长的非常长的条目条目5', disabled: false}],
          date: moment().format("YYYY-MM-DD HH:mm"),
          data: '',
          ifInput: false,
          number: 0,
      	  animatedNumber: 0,
      	  cycleFlag: true,
          file: '',
      }
    },
    mounted(){
        //let i = 1
        //setInterval(()=>{
        //    console.log(moment().add(i, 'days').format("YYYY-MM-DD HH:mm:ss"))
        //    this.date = moment().add(i++, 'days').format("YYYY-MM-DD HH:mm:ss")
        //}, 5000)
		//this.$store.dispatch({type: types.SET_COUNT, count: 3})
		this[types.SET_COUNT]({type: types.SET_COUNT, count: 3})
		setTimeout(()=>this.cycleFlag=false, 5000)
		//setTimeout(()=>{
        //    this.lstep = 1;
        //    this.btext = '请输入相关参数进行查询';
        //}, 1000);
		//setTimeout(()=>{
        //    this.lstep = 2;
        //    this.ltext = '查询中，请稍后...';
        //}, 5000)
		//setTimeout(()=>{
        //    this.lstep = 3;
        //    this.atext = '当前查询结果为空';
        //}, 10000)
        this.testDateFns()
    },
    computed: {
        ...mapState({
      	    token: state => state.login.token,
      	    count: state => state.count,
      	})
    },
    watch: {
      number: function(newValue, oldValue) {
        var vm = this
      
        function animate () {
          if (TWEEN.update()) {
            requestAnimationFrame(animate)
          }
        }
        new TWEEN.Tween({ tweeningNumber: oldValue })
          .easing(TWEEN.Easing.Quadratic.Out)
          .to({ tweeningNumber: newValue }, 500)
          .onUpdate(function(){
            	vm.animatedNumber = this._object.tweeningNumber.toFixed(0)
          })
          .start()
        animate()
      }
    },
    methods: {
		...mapActions([
      	    types.SET_COUNT,
      	]),
        processFile: function(file){
            this.file = file.name + ' ' + file.type
        },
        onPageChange: function(p){
            this.page = p
        },
        onChange: function(value, key){
            this.value = value
            this.key = key
        },
        onPick: function(date){
            this.date = date 
        },
        onInputChange: function(e){
        },
        testDateFns: function(){
            console.log(format(new Date(2014, 1, 11), 'MM/DD/YYYY'))
            const dates = [new Date(1995, 6, 2), new Date(1987, 1, 11), new Date(1989, 6, 10)]
            console.log(dates.sort(compareAsc))
        },
    },
    components: {
      'Paging': Paging,
      'Selecting': Select,
      'DatePicker': DatePicker,
      'LifeCycle': LifeCycle,
      'UploadBtn': UploadBtn,
      'Loading': Loading,
      'LoadingProcess': LoadingProcess,
      'SVGLoading': SVGLoading,
    },
}
</script>
