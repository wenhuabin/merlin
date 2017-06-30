<style lang="scss" scoped>
@import '../assets/scss/web/nav';
</style>

<template>
	<nav class="nav">
		<ul class="root-ul">
            <li  class="root-nav" v-for="nav in navs" >
                <router-link :class="{current: isCurrent == nav.key}" v-if="!nav.child" :to="{path:nav.url}" @click.native="setCurrent(nav.key)">{{nav.name}}</router-link>
                <div v-if="nav.child && nav.child.length" class="row" v-bind:key="nav.key" @click="toggleShowChild(nav.key)">{{nav.name}}</div>
		        <ul class="son-nav" :class="{childNavShow : isChildShow.indexOf(nav.key) >= 0}" v-if="nav.child && nav.child.length">
                    <li v-for="snav in nav.child">
                        <router-link :class="{current: isCurrent == snav.key}" v-if="!snav.child" :to="{path:snav.url}" :key="snav.key" @click.native="setCurrent(nav.key)">{{snav.name}}</router-link>
                        <div v-if="snav.child && snav.child.length" class="row" v-bind:key="snav.key" @click="toggleShowChild(snav.key)">{{snav.name}}</div>
		                <ul class="gson-nav" :class="{childNavShow : isChildShow.indexOf(snav.key) >= 0}" v-if="snav.child && snav.child.length">
                            <li v-for="gnav in snav.child" v-bind:key="gnav.key">
                                <router-link :class="{current: isCurrent == gnav.key}" class="row" :to="{path:gnav.url}" :key="gnav.key" @click.native="setCurrent(gnav.key)">{{gnav.name}}</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            </ul>
		</ul>
	</nav>
</template>

<script>

export default {
  name: 'nav-bar',
  data () {
    return {
      isCurrent: -1,
      isChildShow: [],
      navs: [
        {name: '主页', key: 0, url: '/about'},
        {name: '人员管理', key: 1, url: '/', child: [{name: '会员列表', key: 10, url: '/', child: [{name: '会员列表', key: 30, url: '/'}, {name: '教练列表', key: 31, url: '/'}]}, {name: '教练列表', key: 11, url: '/'}]},
        {name: '课程中心', key: 2, url: '/about'},
        {name: '财务中心', key: 3, url: '/vue'},
        {name: '系统设置', key: 4, url: '/vue'}
      ],
    }
  },
  methods: {
    setCurrent: function(key){
      this.isCurrent = key;
    },
    toggleShowChild: function(key){
        var tmp = this.isChildShow;
        tmp.includes(key) ? tmp.splice(tmp.indexOf(key), 1) : tmp.push(key)
        this.isChildShow = tmp
    }
  },
  computed:{
  },
}

</script>
