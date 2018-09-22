<template>
  <div>
      <v-btn
          @click="onClick"
          block
          :outline="selectedAnswer? false : true"
          :color="selectedAnswer? (answer.correct? 'green' : 'red') : 'indigo'">
              {{ answer.text }}
      </v-btn>
  </div>
</template>

<script>
export default {
  name: 'answer',
  data () {
    return {
      selectedAnswer: null
    }
  },
  props: {
    answer: Object
  },
  methods: {
    onClick () {
      this.selectedAnswer = this.answer
      this.$emit('click', this.answer)
    }
  }
}
</script>

<style>

</style>
