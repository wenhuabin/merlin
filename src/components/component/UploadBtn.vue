<style lang="scss">
@import "~scss/common/_form.scss";
.upload-btn{
	display: inline-block;
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	.upload{
		display: inline-block;
		background-color: #fff !important;
		vertical-align: top;
		font-size: 14px;
	    color: #666;	
		box-sizing: border-box;
	}
	.file{
		display: inline-block;
		position: relative;
		vertical-align: top;
		box-sizing: border-box;
		opacity: 0;
		cursor: pointer;
	}
	

}
</style>

<template>
    <div class="upload-btn" :style="cstyle">
		<button type="button" class="upload" :disabled="if_disabled" :style="bstyle">{{text}}</button>
		<input type="file" class="file" @change="processFile($event)" :disabled="if_disabled" v-if="!clearFileInput" :accept="atype" :style="fstyle"/>
    </div>
</template>

<script>
export default {
    name: 'upload-btn',
    props:{
    	label:{
    	  type: String,
    	  default: '选择文件上传',
    	  required: false 
    	},
    	width:{
    	  type: Number,
    	  default: 210,
    	  required: false 
    	},
    	height:{
    	  type: Number,
    	  default: 35,
    	  required: false 
    	},
		type: {
        	type: String,
            default: '*',
    	    required: false 
        },
		if_disabled: {
        	type: Boolean,
            default: false,
    	    required: false 
        },
    },
    data() {
        return {
            text: this.label,
			atype: this.type,
			cstyle: {
				//width: (this.width + 5) + 'px',
				height: this.height + 'px',
			},
			bstyle: {
				width: this.width + 'px',
				height: this.height + 'px',
				lineHeight: (this.height - 2) + 'px'
			},
			fstyle: {
				marginTop: '-35px',
				marginLeft: '-' + (this.width + 5) + 'px',
				width: this.width + 'px',
				height: (this.height + 35) + 'px'
			},
			clearFileInput: false,
        }
    },
    methods: {
		processFile: function(e){
            this.$emit('processFile', e.target.files[0]);
			this.clearFileInput = true;
			setTimeout(()=>this.clearFileInput = false, 1000);
        }
    }
}
</script>

