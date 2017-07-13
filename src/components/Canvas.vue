<style lang="scss" scoped>
@import '~scss/web/canvas';
</style>

<template>
    <div class="canvas-demo">
        <h1>Canvas</h1>
    </div>
</template>

<script>

export default {
  name: 'canvas',
  data () {
    return {
        page: 5,
        pages: 26,
        value: '请选择',
        key: -1,
        list: [{value: '测试1', disabled: false},{value: '测试2', disabled: false},{value: '测试3', disabled: false},{value: '测试4', disabled: false},{value: '非常长的非常长的条目条目5', disabled: false}],
        date: moment().format("YYYY-MM-DD"),
    }
  },
  methods: {
      onPageChange: function(p){
      },
  },
  components: {
  },
}
</script>
