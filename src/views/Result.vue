<template>
  <h1> Congrats, you made it! Your score is {{ score }} </h1>
</template>

<script>
import Vue from 'vue'
import VueConfetti from 'vue-confetti'

Vue.use(VueConfetti)

export default {
  name: 'result',
  mounted () {
    this.$confetti.start()
    setTimeout(() => {
      this.$confetti.stop()
    }, 1000);
  },
  computed: {
    score () {
      return this.$store.getters.score
    }
  }
}
</script>

<style>

</style>
