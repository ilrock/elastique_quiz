<template>
    <v-app>
        <v-toolbar color="primary">
            
        </v-toolbar>
        <v-content>
            <v-container grid-list-xs>
                <transition name="fade">
                    <router-view :key="$route.fullPath"/>
                </transition>
            </v-container>
        </v-content>
    </v-app>
</template>
<script>
export default {
  name: 'app',
  created () {
    this.$store.dispatch('fetchQuestions')
    this.$store.dispatch('fetchLeaderboard')
  }
}
</script>
<style>
  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
  }

  .fade-enter-active {
    transition-delay: .25s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }

  body, .application {
    font-family: 'Questrial', sans-serif !important;
  }

  h1, h2, h3, h4, h5, h6, .title, .display-2 {
    font-family: 'Allerta', sans-serif !important;
    font-weight: bold;
  }
</style>
