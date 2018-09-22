export default {
  state: {
    loading: false
  },
  getters: {
    loading: (state) => state.loading
  },
  mutations: {
    toggleLoading (state, payload) {
      state.loading = payload
    }
  }
}
