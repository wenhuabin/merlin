<style lang="scss" scoped>
@import '../../assets/scss/web/nav';
</style>

<template>
	<nav class="nav">
		<ul>
            <li v-for="nav in navs">
                <div class="row">{{nav.name}}</div>
                <ul v-if="$nav.child.length">
                    <li v-for="cnav in $nav.child">
                        <div class="crow">{{cnav.name}}</div>
                        <ul v-if="$nav.child.length">
                            <li v-for="cnav in $nav.child">{{cnav.name}}</li>
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
  data () {
    return {
      navs: [
        {name: '主页', key: 0,child: []},
        {name: '人员管理', key: 1, child: [{name: '会员列表'}, {name: '教练管理'}]},
        {name: '课程中心', key: 2, child: []},
        {name: '财务中心', key: 3, child: []},
        {name: '系统设置', key: 4, child: []}
      ],
    }
  }
}

</script>
