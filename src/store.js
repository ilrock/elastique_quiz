import Vue from 'vue'
import Vuex from 'vuex'

import { getQuestions } from '@/api/questionService'
import { leaderboard } from './data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0,
    leaderboard: leaderboard,
    player: null,
    questions: []
  },
  getters: {
    score: (state) => state.score,
    leaderboard: (state) => state.leaderboard.sort((a, b) => a.score < b.score),
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
    setPlayer (state, payload) {
      state.player = payload
    },
    setQuestions (state, payload) {
      state.questions = payload
    }
  },
  actions: {
    addToScore ({ commit }, payload) {
      commit('addToScore', payload)
    },
    setPlayer ({ commit }, payload) {
      return new Promise((resolve) => {
        commit('setPlayer', payload)
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
