import { getQuestions } from '@/api/questionService'

export default {
  state: {
    questions: []
  },
  getters: {
    questions: (state) => state.questions,
    question: (state) => (index) => {
      return state.questions.filter((item) => {
        return item.id.toString() === index.toString()
      })[0]
    }
  },
  mutations: {
    setQuestions (state, payload) {
      state.questions = payload
    }
  },
  actions: {
    fetchQuestions ({ commit }) {
      commit('toggleLoading', true)
      getQuestions()
        .then((res) => {
          const questions = res.data.results.map((result, index) => {
            const answers = decodeURIComponent(result.incorrect_answers).split(',').map((answer) => ({ text: answer, correct: false }))
            answers.push({
              text: decodeURIComponent(result.correct_answer),
              correct: true
            })
            return {
              id: ++index,
              text: decodeURIComponent(result.question),
              answers
            }
          })
          commit('setQuestions', questions)
          setTimeout(() => {
            commit('toggleLoading', false)
          }, 1500)
        })
    }
  }
}
