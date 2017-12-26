<style lang="scss" scoped>
@import '~scss/component/calert.scss'
</style>

<template>
    <div id="alert-cover" v-if="ifShowAlert">
        <div class="alert-box">
            <h2 class="title">{{title}}</h2>
            <div class="msg">{{msg}}</div>
            <div class="button-box">
                <button type="button" class="cancel-btn" @click="clearAlert">取&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;消</button>
                <button type="button" class="ok-btn" @click="confirmExecution">确&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;定</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'confirm-alert',
  props: {
    title: {
      type: String,
      default: '确认操作',
      required: false
    },
    msg: {
      type: String,
      default: '确认要执行此删除操作？',
      required: false
    },
    showAlert: {
      type: Boolean,
      default: true,
      required: false
    },
    showErrMsg: {
      type: Boolean,
      default: false,
      required: false
    },
  },
  data () {
    return {
        ifShowAlert: this.showAlert,
    };
  },
  methods: {
    clearAlert: function(){
        this.ifShowAlert = false
    },
    confirmExecution: function(){
        this.ifShowAlert = false
        this.$emit('confirm')
    },
  },
  mounted() {
  },
}

</script>

