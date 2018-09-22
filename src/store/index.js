import Vue from 'vue'
import Vuex from 'vuex'

import question from './question'
import player from './player'
import leaderboard from './leaderboard'
import shared from './shared'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    question,
    player,
    leaderboard,
    shared
  }
})
