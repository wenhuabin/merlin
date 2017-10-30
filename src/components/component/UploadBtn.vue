<template>
    <div id="upload-btn">
		<button type="button" class="upload" :disabled="if_disabled">{{text}}</button>
		<input type="file" class="file" @change="processFile($event)" :disabled="if_disabled" v-if="!clearFileInput" :accept="type"/>
    </div>
</template>

<script>
export default {
    props:{
    	label:{
    	  type: String,
    	  default: '选择文件上传',
    	  required: true 
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
            default: '*'
    	    required: false 
        },
		if_disabled: {
        	type: Boolean,
            default: false
    	    required: false 
        },
    },
    data() {
        return {
            text: this.label,
        }
    },
    methods: {
		processFile: function(e){
            this.$emit('processFile', e.target.files[0], e.target.files[0].name);
        }
    }
}
</script>

<style lang="scss">
</style>
