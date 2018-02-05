// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
  	           .register('./merlin-sw.js')
  	           .then(function() { console.log('Service Worker Registered'); });
  	}
