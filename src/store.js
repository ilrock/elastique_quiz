import Vue from 'vue'
import Vuex from 'vuex'

import { getQuestions } from '@/api/questionService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0,
    players: [],
    questions: []
  },
  getters: {
    score: (state) => state.score,
    players: (state) => state.players,
    questions: (state) => state.questions,
    question: (state) => (index) => {
      return state.questions.filter((item) => {
        return item.id.toString() === index.toString()
      })[0]
    }
  },
  mutations: {
    addToScore (state, payload) {
      state.score += payload
    },
    addPlayers (state, payload) {
      state.players = payload
    },
    setQuestions (state, payload) {
      state.questions = payload
    }
  },
  actions: {
    addToScore ({ commit }, payload) {
      commit('addToScore', payload)
    },
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
