import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Home from './views/Home'
import Question from './views/Question'
import Result from './views/Result'

Vue.use(Router)

const ifNoQuestionsLoaded = (to, from, next) => {
  const questions = store.getters.questions
  if (questions.length > 0) {
    next()
  } else next('/')
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      // beforeEnter: ifNoQuestionsLoaded,
      component: Home
    },
    {
      path: '/questions/:id',
      name: 'question',
      beforeEnter: ifNoQuestionsLoaded,
      component: Question
    },
    {
      path: '/result',
      name: 'result',
      beforeEnter: ifNoQuestionsLoaded,
      component: Result
    }
  ]
})
