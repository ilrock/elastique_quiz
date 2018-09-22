<template>
    <v-container grid-list-xs>
        <transition name="loader" enter-active-class="animated fadeIn" leave-active-class="animated fadeOutDown">
          <v-layout v-if="loading" row wrap>
            <v-flex d-flex align-center justify-center xs12 class="text-xs-center">
              <loader />
            </v-flex>
          </v-layout>
        </transition>
        <transition name="getStarted" enter-active-class="animated fadeIn" leave-active-class="animated fadeOutDown">
          <v-layout v-show="!loading" row wrap>
            <v-flex d-flex justify-center align-start xs12 sm6>
              <v-card class="elevation-4 mb-4">
                  <v-card-title class="title elevation-2" primary-title>
                    Let's get started
                  </v-card-title>
                  <v-card-text>
                      <v-form ref="form">
                          <v-text-field
                              v-model="player.name"
                              :rules="rules.notEmpty"
                              label="What's your name, champion?">
                          </v-text-field>
                      </v-form>
                  </v-card-text>
                  <v-card-actions class="pa-3">
                      <v-spacer></v-spacer>
                      <v-btn dark @click="onStartQuizClick" color="teal"> Start the quiz </v-btn>
                  </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex xs12 offset-sm1 sm5>
              <leaderboard />
            </v-flex>
          </v-layout>
        </transition>
    </v-container>
</template>

<script>
import Leaderboard from '../components/Leaderboard'
import Loader from '../components/Loader'
export default {
  components: {
    Leaderboard,
    Loader
  },
  data () {
    return {
      rules: {
        notEmpty: [v => !!v || 'Name is required']
      },
      player: {
        name: ''
      }
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onStartQuizClick () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('setPlayer', this.player)
          .then(() => this.$router.push('/questions/1'))
      }
    }
  }
}
</script>

<style>
</style>
