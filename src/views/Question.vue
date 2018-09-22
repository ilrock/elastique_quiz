<template>
    <v-container justify-center align-center grid-list-xs>
        <v-layout row wrap>
            <v-flex xs12 sm10 offset-sm1>
                <v-card class="elevation-4">
                  <v-card-title class="title elevation-2" primary-title>
                    {{ question.text }}
                  </v-card-title>
                  <v-card-text>
                      <v-container grid-list-xs>
                          <v-layout column>
                              <v-flex xs12>
                                  <div v-for="(answer, index) in shuffledAnswers" :key="index">
                                      <v-btn
                                          :ref="`answer${index}`" 
                                          @click="onAnswerClick(answer)"
                                          block 
                                          :outline="selectedAnswer? false : true"
                                          :color="selectedAnswer? (answer.correct? 'green' : 'red') : 'indigo'">
                                              {{ answer.text }}
                                      </v-btn>
                                  </div>
                              </v-flex>
                          </v-layout>
                      </v-container>
                  </v-card-text>
                  <v-card-actions>
                      <v-progress-circular
                          :rotate="-90"
                          :size="60"
                          :width="10"
                          :value="value"
                          color="teal">
                              <vue-countdown 
                                  mode="seconds" 
                                  :now-time="0" 
                                  :end-time="20" 
                                  @end="onCountdownEnd">
                              </vue-countdown>
                      </v-progress-circular>
                      <v-spacer></v-spacer>
                      <v-btn :to="nextUrl" flat>
                          Next
                      </v-btn>
                  </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import VueCountdown from 'vue-countdown-component'

export default {
  name: 'question',
  components: {
    VueCountdown
  },
  data () {
    return {
      interval: {},
      alphabet: ['a','b','c','d'],
      selectedAnswer: null,
      value: 0,
      countdown: 20,
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  mounted () {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0)
      }
      this.value += 5
    }, 1000)
  },
  computed: {
    score () {
      return this.$store.getters.score
    },
    questions () {
      return this.$store.getters.questions
    },
    currentId () {
      return this.$route.params.id
    },
    question () {
      return this.$store.getters.question(this.currentId)
    },
    shuffledAnswers () {
      return this.shuffle(this.question.answers)
    },
    nextUrl () {
      const currentId = parseInt(this.currentId)
      if (parseInt(currentId) == this.questions.length){
        return '/results'
      }
      return `/questions/${currentId + 1}`
    }
  },
  methods: {
    onCountdownEnd () {
      this.$router.push(this.nextUrl)
    },
    shuffle (array) {
      var j, x, i;
      for (i = array.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = array[i];
          array[i] = array[j];
          array[j] = x;
      }
      return array;
    },
    onAnswerClick (answer) {
      this.selectedAnswer = answer
      if (answer.correct) {
        this.$store.dispatch('addToScore', 2)
      }
      setTimeout(() => {
        this.$router.push(this.nextUrl)
      }, 1500);
    } 
  }
}
</script>

<style>
  @import "../../node_modules/vue-countdown-component/dist/vue-countdown.min.css";
  .count-down-container .counter {
    border: none;
    background-color: transparent;
  }
</style>
