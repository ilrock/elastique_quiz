import Vue from 'vue'
import Router from 'vue-router'
import Store from './store'

import Home from './views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'calendar',
      component: Home,
    }
  ]
})
