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
                <!--
                可以通过 .sync 的方式来改变 foo 的值，省去父组件写回调函数（本质上是一样的，只是省了几行代码)
                <comp :foo.sync="bar"></comp> 
                is expanded into: <comp :foo="bar" @update:foo="val => bar = val"></comp>
                this.$emit('update:foo', newValue)
                -->
			</div>
            <div class="animate-test">
                <div class="hint">数据渐变性测试</div>
                    <input class="animate-input" v-model.number="number" type="number" step="10">
                <div class="hint">value: {{animatedNumber}}</div>
            </div>
            <div class="state">
                <div class="hint">State 测试</div>
                <div class="hint">{{token.uname + " / " + token.email + " / " + count}}</div>
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
import TWEEN from '@tweenjs/tween.js'
import * as types from 'store/mutation-types'

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
          data: '',
          ifInput: false,
          number: 0,
      	animatedNumber: 0
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
    },
    computed: {
        token: function(){
            return this.$store.state.login.token
        },
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
        }
    },
    components: {
      'Paging': Paging,
      'Selecting': Select,
      'DatePicker': DatePicker,
    },
}
</script>
