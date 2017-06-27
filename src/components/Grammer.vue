<template>
  <div class="grammer">
    <h1>{{ msg }}</h1>
    <h2>Hobby</h2>
    <ul>
      <li v-for="hobby in hobbys">{{hobby}}</li>
    </ul>
    <div v-bind:title="time">{{time}}</div>
    <div v-html="html" v-if="true"></div>
    <div v-bind:class="classObject">class 绑定</div>
    <div v-bind:style="styleObject">style 绑定</div>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span>
    <select v-model="selected">
    <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
	<select v-model="selectedm" multiple>
	  <option>A</option>
	  <option>B</option>
	  <option>C</option>
	</select>
	<br>
	<span>Selected: {{ selectedm }}</span>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'grammer',
    data () {
        return {
            checked: false,
            checkedNames: [],
            picked: '',
            selected: '',
            selectedm: '',
            msg: 'Welcome to Merlin',
            time: 'You loaded this page on ' + new Date(),
            html: 'This is a message for <a href="#">John Doe</a>, please update your email address.',
            hobbys: ['看书', '旅行', '煮饭做菜', '看足球', '羽毛球', '写代码'],
            classObject: {active: true, 'text-danger': true},
            styleObject: {color: 'red', fontSize: '16px'},
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
    color: #42b983;
}

a {
    color: #42b983;
    text-decoration: none;
    font-size: 18px;
}
</style>
