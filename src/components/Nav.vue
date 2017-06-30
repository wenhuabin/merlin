<style lang="scss" scoped>
@import '../assets/scss/web/nav';
</style>

<template>
	<nav class="nav">
		<ul>
            <li  class="root-nav" v-for="nav in navs" v-bind:key="nav.key">
                <router-link :class="{current: isCurrent === nav.key}" v-if="!nav.child.length" to="nav.url">{{nav.name}}</router-link>
                <div v-if="nav.child.length" class="row" v-bind:key="nav.key">{{nav.name}}</div>
		        <ul v-if="nav.child && nav.child.length">
                    <li class="son-nav" v-for="snav in nav.child" v-bind:key="snav.key">
                        <router-link :class="{current: isCurrent === nav.key}" v-if="!snav.child.length" to="snav.url">{{snav.name}}</router-link>
                        <div v-if="snav.child.length" class="row" v-bind:key="nav.key">{{snav.name}}</div>
		                <ul v-if="snav.child && snav.child.length">
                            <li class="gson-nav" v-for="gnav in snav.child" v-bind:key="gnav.key">
                                <router-link :class="{current: isCurrent === nav.key}" class="row" to="gnav.url" v-bind:key="gnav.key">{{gnav.name}}</router-link>
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
      isCurrent: 0,
      navs: [
        {name: '主页', key: 0,child: []},
        {name: '人员管理', key: 1, child: [{name: '会员列表', key: 10, child: [{name: '会员列表', key: 30}, {name: '教练列表', key: 31}]}, {name: '教练列表', key: 11, child: []}]},
        {name: '课程中心', key: 2, child: []},
        {name: '财务中心', key: 3, child: []},
        {name: '系统设置', key: 4, child: []}
      ],
    }
  }
}

</script>
