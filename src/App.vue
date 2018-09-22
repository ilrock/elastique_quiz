<template>
    <v-app>
        <v-content class="yellow lighten-1">
            <v-container class="fill-height" grid-list-xs>
                <transition name="router-fade">
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
  .router-fade-enter-active, .router-fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
  }

  .router-fade-enter-active {
    transition-delay: .25s;
  }

  .router-fade-enter, .router-fade-leave-active {
    opacity: 0
  }

  body, .application {
    font-family: 'Questrial', sans-serif !important;
    color: #333 !important;
  }

  h1, h2, h3, h4, h5, h6, .title, .display-2 {
    font-family: 'Allerta', sans-serif !important;
    font-weight: bold;
    color: #333 !important;
  }
</style>
