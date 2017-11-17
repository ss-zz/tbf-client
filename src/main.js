// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import '@/assets/css/bootstrap.min.css'

import '@/assets/js/jquery.min.js'
import '@/assets/js/bootstrap.min.js'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:9201/api'

/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  next()
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
