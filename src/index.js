import Vue from 'vue'
import Router from 'vue-router'
import FastClick from 'fastclick'

// routes
import routes from './routes'
import routerBeforeEach from './routes/routerBeforeEach'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes
})

router.beforeEach(routerBeforeEach)

new Vue({
  router
}).$mount('#app')

FastClick.attach(document.body)
