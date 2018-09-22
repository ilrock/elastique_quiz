<template>
  <v-container class="fill-height" grid-list-xs>
    <v-layout d-flex justify-start align-start row wrap class="text-xs-left">
      <v-flex xs12 sm6>
        <v-container grid-list-xs>
          <v-layout row wrap>
            <v-flex xs12>
              <transition name="headline" :enter-active-class="headline.class">
                <h2 class="display-2" px-2 v-show="headline.show"> Your score is </h2>
              </transition>
            </v-flex>
            <v-flex xs12>
              <transition name="score" :enter-active-class="score.class">
                <h1 class="display-2" v-show="score.show"> {{ playerScore }} </h1>
              </transition>
            </v-flex>
            <v-flex xs12>
              <transition name="name" :enter-active-class="name.class">
                <h1 class="display-2" v-show="name.show">
                  Congrats {{ player.name }}!
                </h1>
              </transition>
            </v-flex>
          </v-layout>
          <v-layout d-flex justify-end align-start row wrap class="text-xs-left">
            <v-flex xs12 class="mt-5">
              <transition name="tryAgain" :enter-active-class="button.class">
                <v-btn @click="resetGame" v-show="button.show" color="success"> Try Again </v-btn>
              </transition>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex xs12 sm6>
        <v-layout row wrap>
          <v-flex xs12>
            <transition name="leaderboard" :enter-active-class="leaderboard.class">
              <leaderboard v-show="leaderboard.show"/>
            </transition>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Vue from 'vue'
import VueConfetti from 'vue-confetti'
import Leaderboard from '../components/Leaderboard'

Vue.use(VueConfetti)

export default {
  name: 'result',
  components: {
    Leaderboard
  },
  data () {
    return {
      headline: {
        show: false,
        class: ''
      },
      score: {
        show: false,
        class: ''
      },
      name: {
        show: false,
        class: ''
      },
      leaderboard: {
        show: false,
        class: ''
      },
      button: {
        show: false,
        class: ''
      }
    }
  },
  beforeDestroy () {
    this.$confetti.stop()
  },
  mounted () {
    this.$store.dispatch('addToLeaderboard')
      .then(() => {
        this.startAnimations()
      })
  },
  computed: {
    player () {
      return this.$store.getters.player
    },
    playerScore () {
      return this.$store.getters.score
    }
  },
  methods: {
    startAnimations () {
      setTimeout(() => {
        this.headline.show = true
        this.headline.class = 'animated slideInLeft'
      }, 500)

      setTimeout(() => {
        this.score.show = true
        this.score.class = 'animated slideInLeft'
      }, 1500)

      setTimeout(() => {
        this.name.show = true
        this.$confetti.start()
        this.name.class = 'animated slideInLeft'
      }, 2500)

      setTimeout(() => {
        this.leaderboard.show = true
        this.button.show = true
        this.leaderboard.class = 'animated slideInRight'
        this.button.class = 'animated slideInLeft'
      }, 4000)
    },
    resetGame () {
      
    }
  }
}
</script>

<style scoped>
  @import url('https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css');
</style>
