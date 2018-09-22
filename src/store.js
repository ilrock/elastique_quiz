import Vue from 'vue'
import Vuex from 'vuex'

import { getQuestions } from '@/api/questionService'
import db from './firebase/db'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0,
    leaderboard: [],
    loading: false,
    player: null,
    questions: []
  },
  getters: {
    loading: (state) => state.loading,
    score: (state) => state.score,
    leaderboard: (state) => state.leaderboard.sort((a, b) => a.score < b.score),
    player: (state) => state.player,
    questions: (state) => state.questions,
    question: (state) => (index) => {
      return state.questions.filter((item) => {
        return item.id.toString() === index.toString()
      })[0]
    }
  },
  mutations: {
    toggleLoading (state, payload = false) {
      if (payload) {
        state.loading = payload
      } else {
        state.loading = !state.loading
      }
    },
    addToScore (state, payload) {
      state.score += payload
    },
    setPlayer (state, payload) {
      state.player = payload
    },
    setLeaderboard (state, payload) {
      state.leaderboard = payload
    },
    setQuestions (state, payload) {
      state.questions = payload
    }
  },
  actions: {
    addToScore ({ commit }, payload) {
      commit('addToScore', payload)
    },
    setPlayer ({ commit }, { name }) {
      return new Promise((resolve) => {
        const player = {
          name: name,
          avatar: `https://api.adorable.io/avatars/${name}`
        }
        commit('setPlayer', player)
        resolve()
      })
    },
    fetchQuestions ({ commit }) {
      commit('toggleLoading', true)
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
          setTimeout(() => {
            commit('toggleLoading', false)
          }, 1500)
        })
    },
    fetchLeaderboard ({ commit }) {
      commit('toggleLoading', true)
      db.collection('leaderboard').onSnapshot((querySnapshot) => {
        const leaderboard = querySnapshot.docs.map((doc) => doc.data())
        commit('setLeaderboard', leaderboard)
      })
        .then(() => {
          setTimeout(() => {
            commit('toggleLoading', false)
          }, 1500)
        })
    },
    addToLeaderboard ({ commit, state }) {
      const leaderboardEntry = {
        name: state.player.name,
        score: state.score,
        avatar: state.player.avatar
      }
      return db.collection('leaderboard').doc(state.player.name).set(leaderboardEntry)
    }
  }
})
