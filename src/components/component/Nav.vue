<style lang="scss" scoped>
@import '~scss/component/nav';
</style>

<template>
	<nav id="nav">
		<ul class="root-ul">
            <li  class="root-nav" v-for="nav in navs" >
                <router-link :class="{current: isCurrent == nav.key}" v-if="!nav.child" :to="{path:nav.url}" @click.native="setCurrent(nav.key)">{{nav.name}}</router-link>
                <div v-if="nav.child && nav.child.length" class="row" v-bind:key="nav.key" @click="toggleShowChild(nav.key)">{{nav.name}}</div>
		        <ul class="son-nav" :class="{childNavShow : isChildShow.indexOf(nav.key) >= 0}" v-if="nav.child && nav.child.length">
                    <li v-for="snav in nav.child">
                        <router-link :class="{current: isCurrent == snav.key}" v-if="!snav.child" :to="{path:snav.url}" :key="snav.key" @click.native="setCurrent(snav.key)">{{snav.name}}</router-link>
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
  props: ["navs"],
  data () {
    return {
      isCurrent: -1,
      isChildShow: [],
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
}

</script>
