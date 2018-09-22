export default {
  state: {
    score: 0,
    player: null
  },
  getters: {
    score: (state) => state.score,
    player: (state) => state.player
  },
  mutations: {
    addToScore (state, payload) {
      state.score += payload
    },
    setPlayer (state, payload) {
      state.player = payload
    },
    resetScore (state) {
      state.score = 0
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
    resetScore ({ commit }) {
      commit('resetScore')
    }
  }
}
