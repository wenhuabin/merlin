<style lang="scss" scoped>
@import '~scss/common/select';
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
  data () {
    return {
        optionsStyle: {display: 'none'},
        value: this.initial_value || '请选择'
    }
  },
  methods: {
    onItemSelected: function(value, index){
        this.value = value
        this.$emit('onChange', value, index)
    },
    optionsShow: function(flag){
        this.optionsStyle = flag ? {display: "block"} : {display: "none"}
    },
  },
  computed: {
  }
}

</script>
