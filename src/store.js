import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: []
  },
  getters: {
    players (state) {
      return state.players
    }
  },
  mutations: {
    addPlayers (state, payload) {
      state.players = payload
    }
  },
  actions: {
    addPlayers ({ commit }, payload) {
      commit('addPlayers', payload)
    }
  }
})
