import Vue from 'vue'
import Vuex from 'vuex'

import { getQuestions } from '@/api/questionService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [],
    questions: []
  },
  getters: {
    players: (state) => state.players,
    questions: (state) => state.questions,
    question: (state) => (index) => {
      return state.questions.filter((item) => {
        return item.id.toString() === index.toString()
      })[0]
    }
  },
  mutations: {
    addPlayers (state, payload) {
      state.players = payload
    },
    setQuestions (state, payload) {
      state.questions = payload
    }
  },
  actions: {
    addPlayers ({ commit }, payload) {
      return new Promise((resolve) => {
        commit('addPlayers', payload)
        resolve()
      })
    },
    fetchQuestions ({ commit }) {
      getQuestions()
        .then((res) => {
          const questions = res.data.results.map((result, index) => {
            const answers = decodeURIComponent(result.incorrect_answers).split(',').map((answer) => ({ text: answer, correct: false }))
            answers.push({
              text: decodeURIComponent(result.correct_answer),
              correct: true
            })
            return {
              id: ++index,
              text: decodeURIComponent(result.question),
              answers
            }
          })

          commit('setQuestions', questions)
        })
    }
  }
})
