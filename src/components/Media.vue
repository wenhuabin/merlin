<style lang="scss" scoped>
@import '~scss/web/media'
</style>

<template>
    <div class="media-demo">
        <h1>HTML 5 多媒体</h1>
        <audio id="audio-element" controls="controls">
              <source src="https://music.163.com/#/song?id=18098592" type="audio/mp3">
              Your browser does not support the audio element.
        </audio>
        <video id="video-element" src="http://v2v.cc/~j/theora_testsuite/320x240.ogg" controls>
          你的浏览器不支持 <code>video</code> 标签.
        </video>
        <div class="controls">
            <button class="btn" @click="stopVideo">暂停</button>
            <button class="btn" @click="startVideo">开始</button>
            <button class="btn" @click="startVideoAtPos">从2S 开始</button>
        </div>
    </div>
</template>

<script>
//<iframe class="ifram-netmusic" frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% height=120 src="http://music.163.com/outchain/player?type=2&id=299757&auto=1&height=66"></iframe>
export default {
    name: 'media',
    data () {
        return {
            audio: null,
            video: null,
        }
    },
    mounted(){
        this.audio = document.getElementById('audio-element')
        this.video = document.getElementById('video-element')
    },
    methods: {
        startVideo: function(){
            this.video.play()
        },
        stopVideo: function(){
            this.video.pause()
        },
        startVideoAtPos: function(){
            this.video.currentTime = 2
        },

    },
    components: {
    },
}
</script>
