<style lang="scss" scoped>
.loader-box{
    position: relative;
    width: 100%;
    height: 100%;
    background: #fff;
}
.loader {
    left: 50%;
    top: 50%;
    position: absolute;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    #spinner {
      box-sizing: border-box;
      stroke: #673AB7;
      stroke-width: 3px;
      -webkit-transform-origin: 50%;
              transform-origin: 50%;
      -webkit-animation: line 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite, rotate 1.6s linear infinite;
              animation: line 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite, rotate 1.6s linear infinite;
    }
}

@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0);
            transform: rotate(0); }
  to {
    -webkit-transform: rotate(450deg);
            transform: rotate(450deg); } }

@keyframes rotate {
  from {
    -webkit-transform: rotate(0);
            transform: rotate(0); }
  to {
    -webkit-transform: rotate(450deg);
            transform: rotate(450deg); } }

@-webkit-keyframes line {
  0% {
    stroke-dasharray: 2, 85.964; //类似于把线（圆）分成了两段，每段的长度。实际的效果是旋转450度后会逐渐变短，然后再逐渐变长
    -webkit-transform: rotate(0);
            transform: rotate(0); }
  50% {
    stroke-dasharray: 65.973, 21.9911;
    stroke-dashoffset: 0; }
  100% {
    stroke-dasharray: 2, 85.964;
    stroke-dashoffset: -65.973;
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg); } }

@keyframes line {
  0% {
    stroke-dasharray: 2, 85.964;
    -webkit-transform: rotate(0);
            transform: rotate(0); }
  50% {
    stroke-dasharray: 65.973, 21.9911;
    stroke-dashoffset: 0; }
  100% {
    stroke-dasharray: 2, 85.964;
    stroke-dashoffset: -65.973;
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
  }
}


</style>

<template>
    <div class="loader-box">
        <div class="loader">
            <svg class="loader-circle" viewBox="0 0 32 32" width="32" height="32">
                <circle id="spinner" cx="16" cy="16" r="14" fill="none"></circle>
            </svg>
        </div>    
    </div>    
</template>

<script>

export default {
  	name: 'svg-loading',
	props:{
        text:{
            type: String,
            default: '正在加载，请稍后...'
        }
    },
  	  
  	data () {
  	  return {
  	  }
  	},
  	methods: {
  	},
  	mounted() {
  	},
  	watch: {
  	},
  	computed: {
  	}
}

</script>


