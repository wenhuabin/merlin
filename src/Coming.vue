<style lang="scss" scoped>
.not-found{
	position: absolute;
    left: 50%;
	top: 50%;
	transform:translate(-50%, -60%);
	padding: 15px;
	width: 800px;
	height: 480px;
	border-radius: 5px;
    box-sizing: border-box;
    background: #fff;
	overflow: hidden;
    img{
        display: block;
        margin: 40px auto 0;
        width: 150px;
        height: 150px;
        border-radius: 75px;
        opacity: .5;
    }
    .hint{
        margin-top: 45px;
		width: 100%;
		text-align: center;
		font-size: 32px;
    	color: #dcdcdc;
	}
}
</style>

<template>
  	<div class="not-found">
		<img src="./assets/imgs/logo.jpg"/>
	    <h1 class="hint">Oops, The Page You Are Looking For</h1>
	    <h1 class="hint"> Is Not Found, Coming Soon …</h1>
  	</div>
</template>

<script>
import * as types from 'store/mutation-types'

export default {
	name: 'Coming'
}
</script>

