<style lang="scss" scoped>
@import '~scss/web/media'
</style>

<template>
    <div class="media-demo">
        <h1>HTML 5 多媒体</h1>
		<div id="map-container" tabindex="0"></div>
        <iframe class="ifram-netmusic" frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% height=120 src="http://music.163.com/outchain/player?type=2&id=299757&auto=1&height=66"></iframe>
        <audio controls="controls">
              <source src="https://music.163.com/#/song?id=18098592" type="audio/mp3">
              Your browser does not support the audio element.
        </audio>
    </div>
</template>

<script>
export default {
    name: 'media',
    data () {
        return {
        }
    },
    mounted(){
		
    },
    components: {
    },
}
</script>
