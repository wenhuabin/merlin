<style lang="scss" scoped>
#life-cycle{
	display: inline-block;
	padding-left: 20px;
	height: 45px;
	line-height: 45px;
	width: 210px;
	text-align: left;
	border: 1px solid #dcdcdc;
	background-color: #fff;
}
</style>

<template>
    <div id="life-cycle" ref="cycle">
		{{name}}        
    </div>
</template>

<script>

export default {
  name: 'select',
	data(){
		return {
        	name: "风华正茂"
		}
    },
    //在组件实例创建之前调用，组件属性计算之前，如data属性
    beforeCreate: function () {
        console.log("before created")
		console.log("- data status", this.name)
		console.log("-- dom status", this.$refs.cycle)
    },
    //在实例创建之后调用。初始化了数据绑定（data observer），绑定属性，初始计算属性，方法（init events），watcher/事件回调。
    //但DOM还没生成，$el 属性还不存在,但是实例存在,即this.name存在,可打印出来 。
    created: function () { 
        console.log("created")
		console.log("- data status", this.name)
		console.log("-- dom status", this.$refs.cycle)
    },
    //模板编译/挂载之前
    beforeMount: function () {
        console.log("beforeCompile")
		console.log("- data status", this.name)
		console.log("-- dom status", this.$refs.cycle)
    },
    //模板编译/挂载之后。此时所有的指令已生效，因而数据的变化将触发 DOM 更新。
    //但是不保证 组件（$el） 已插入document。
    mounted: function () { 
        console.log("compiled")
		console.log("- data status", this.name)
		console.log("-- dom status", this.$refs.cycle)
		setTimeout(()=>{this.name = "绝代双骄"}, 3000);
    },
    //组件更新之前
    beforeUpdate: function () {
        console.log("beforeUpdate")
		console.log("- data status", this.name)
		console.log("-- dom status", this.$refs.cycle)
    },
    //组件更新之后
    updated: function () {
        console.log("Updated")
		console.log("- data status", this.name)
		console.log("-- dom status", this.$refs.cycle)
    },
    //组件被激活时调用
    activated: function () {
        console.log("activated")
		console.log("- data status", this.name)
		console.log("-- dom status", this.$refs.cycle)
    },
    //组件被移除时调用
    deactivated: function () {
        console.log("deactivated")
		console.log("- data status", this.name)
		console.log("-- dom status", this.$refs.cycle)
    },
    //在开始销毁实例时调用。此时实例仍然有功能。
    beforeDestroy: function () {  
        console.log("beforeDestroy")
		console.log("- data status", this.name)
		console.log("-- dom status", this.$refs.cycle)
    },
    //在实例被销毁之后调用。此时所有的绑定和实例的指令已经解绑，注意是解绑不是销毁,所有的子实例也已经被销毁。
    destroyed: function () {   
        console.log("destroyed")
		console.log("- data status", this.name)
		console.log("-- dom status", this.$refs.cycle)
    },
    //组件方法
    methods: function () {
    },
    //计算属性
    computed: function () {
    },
    //观察属性变化
    watch: function () {
    },
}

</script>
