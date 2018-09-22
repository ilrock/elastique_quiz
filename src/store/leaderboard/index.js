import db from '@/firebase/db'
import playerModule from '../player'

export default {
  state: {
    leaderboard: []
  },
  getters: {
    leaderboard: (state) => state.leaderboard.sort((a, b) => a.score < b.score)
  },
  mutations: {
    setLeaderboard (state, payload) {
      state.leaderboard = payload
    }
  },
  actions: {
    fetchLeaderboard ({ commit, dispatch }) {
      commit('toggleLoading', true)
      db.collection('leaderboard').get()
        .then((querySnapshot) => {
          // commit('toggleLoading', false)
          dispatch('listenToLeaderboardChanges')
        })
    },
    listenToLeaderboardChanges ({ commit }) {
      db.collection('leaderboard').onSnapshot((querySnapshot) => {
        const leaderboard = querySnapshot.docs.map((doc) => doc.data())
        commit('setLeaderboard', leaderboard)
      })
    },
    addToLeaderboard () {
      const leaderboardEntry = {
        name: playerModule.state.player.name,
        score: playerModule.state.score,
        avatar: playerModule.state.player.avatar
      }
      return db.collection('leaderboard').doc(playerModule.state.player.name).set(leaderboardEntry)
    }
  }
}
