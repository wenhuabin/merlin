<style lang="scss" scoped>
@import '~scss/common/select';
</style>

<template>
    <div id="select" @mouseover="optionsShow(1)" @mouseleave="optionsShow(0)">
        <span class="select-vaue">测试</span>
	    <ul id="options" :style="optionsStyle">
            <!--
            <li v-for="o in lists" :class="{available: o.disabled}" @click="(o.disabled ? onSelect(o.value) : null)":key="o.value">{{o.value}}</li>
            -->
            <li>条目1</li>
            <li>条目2</li>
            <li class="unavailable">条目3</li>
            <li>条目4</li>
            <li>非常长的非常长的条目条目5</li>
	    </ul>
    </div>
</template>

<script>

export default {
  name: 'select',
  props: ["default", "list"],
  data () {
    return {
        value: this.default,
        optionsStyle: {display: 'none'},
    }
  },
  methods: {
    onPageChange: function(p){
    },
    optionsShow: function(flag){
        this.optionsStyle = flag ? {display: "block"} : {display: "none"}
    },
  },
  computed: {
  }
}

</script>
