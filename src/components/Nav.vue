<style lang="scss" scoped>
@import '../assets/scss/web/nav';
</style>

<template>
	<nav class="nav">
		<ul class="root-nav">
            <li v-for="nav in navs">
                <div class="row">{{nav.name}}</div>
		        <ul class="son-nav" v-if="nav.child && nav.child.length">
                    <li v-for="snav in nav.child">
                        <div class="row">{{snav.name}}</div>
		                <ul class="gson-nav" v-if="snav.child && snav.child.length">
                            <li v-for="gnav in snav.child">
                                <div class="row">{{gnav.name}}</div>
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
      navs: [
        {name: '主页', key: 0,child: []},
        {name: '人员管理', key: 1, child: [{name: '会员列表', child: [{name: '会员列表'}, {name: '教练列表'}]}, {name: '教练列表'}]},
        {name: '课程中心', key: 2, child: []},
        {name: '财务中心', key: 3, child: []},
        {name: '系统设置', key: 4, child: []}
      ],
    }
  }
}

</script>
