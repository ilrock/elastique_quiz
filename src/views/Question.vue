<template>
    <v-container justify-center align-center grid-list-xs>
        <v-layout row wrap>
            <v-flex xs12 sm10 offset-sm1>
                <v-card class="elevation-4">
                  <v-card-title class="title elevation-1" primary-title>
                    {{ question.text }}
                  </v-card-title>
                  <v-divider></v-divider>
                  <!-- <v-toolbar card prominent class="elevation-2">
                    <v-toolbar-title class="title"> {{ question.text }} </v-toolbar-title>
                    <v-spacer></v-spacer>
                     <span> 30s </span>
                  </v-toolbar> -->
                  <v-card-text>
                      <v-container grid-list-xs>
                          <v-layout column>
                              <v-flex xs12>
                                  <div v-for="(answer, index) in allAnswers" :key="index">
                                      <v-btn block outline color="indigo">{{ answer }}</v-btn>
                                  </div>
                              </v-flex>
                          </v-layout>
                      </v-container>
                  </v-card-text>
                  <v-card-actions>
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
export default {
  name: 'question',
  computed: {
    questions () {
      return this.$store.getters.questions
    },
    currentId () {
      return this.$route.params.id
    },
    question () {
      return this.$store.getters.question(this.currentId)
    },
    allAnswers () {
      return this.question.otherAnswers.concat(this.question.correctAnswer)
    },
    nextUrl () {
      const currentId = parseInt(this.currentId)
      if (parseInt(currentId) == this.questions.length){
        return '/results'
      }
      return `/questions/${currentId + 1}`
    }
  }
}
</script>

<style>
</style>
