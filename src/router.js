import Vue from 'vue'
import Router from 'vue-router'
import Store from './store'

import Home from './views/Home'
import Quiz from './views/Quiz'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: Quiz
    }
  ]
})
