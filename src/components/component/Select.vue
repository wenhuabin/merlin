<style lang="scss" scoped>
@import '~scss/component/select';
</style>

<template>
    <div id="select" @mouseover="optionsShow(1)" @mouseleave="optionsShow(0)">
        <span class="select-vaue">{{value}}</span>
	    <ul id="options" :style="optionsStyle">
            <li v-for="(o, index) in list" :class="{unavailable: o.disabled}" @click="(!o.disabled ? onItemSelected(o.value, index) : null)" :key="o.value">{{o.value}}</li>
	    </ul>
    </div>
</template>

<script>

export default {
  name: 'select',
  props: ["initial_value", "list"],
  props: {
    initial_value:{
      type: String,
      default: '',
      required: true 
    },
    list:{
      type: Array,
      default: [],
      required: true 
    },
    width:{
      type: Number,
      default: 210,
      required: false 
    },
    height:{
      type: Number,
      default: 45,
      required: false 
    },
    if_disabled: {
      type: Boolean,
      default: false,
      required: false 
    }},

  data () {
    return {
		optionsStyle: {
            display: 'none',
            width: this.width ? this.width + 'px' : '210px'
        },
        selectStyle: {
            width: this.width ? this.width + 'px': '210px',
            height: this.height ? this.height + 'px': '35px',
            lineHeight: this.height ? this.height + 'px': '35px',
            opacity: this.if_disabled ? '0.7' : '1',
        },
        value: this.initial_value || '请选择'
    }
  },
  watch: {
      if_disabled: function(newValue){
        if(newValue){
            this.selectStyle = {
              width: this.width ? this.width + 'px': '210px',
              height: this.height ? this.height + 'px': '35px',
              lineHeight: this.height ? this.height + 'px': '35px',
              opacity: '0.7',
            }
            this.optionsStyle = {display: "none"} //避免disable之前展开状态，disable 后还是展开
        }else{
            this.selectStyle = {
              width: this.width ? this.width + 'px': '210px',
              height: this.height ? this.height + 'px': '35px',
              lineHeight: this.height ? this.height + 'px': '35px',
              opacity: '1',
            }
            //this.optionsStyle = flag ? {display: "block", width: this.width ? this.width + 'px' : '210px' } : {display: "none"}
        }
      },
      initial_value: function(newValue){
        if(newValue){
            this.value = newValue;
        }
      },
  },
  methods: {
    onItemSelected: function(value, index){
        this.value = value
        this.$emit('onChange', value, index)
        this.optionsStyle = {display: "none"}
    },
    optionsShow: function(flag){
		if(!this.if_disabled){
            this.optionsStyle = flag ? {display: "block", width: this.width ? this.width + 'px' : '210px' } : {display: "none"}
        }
    },
  },
  computed: {
  }
}

</script>
