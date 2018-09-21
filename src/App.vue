<template>
    <v-app>
        <v-toolbar color="primary">
            
        </v-toolbar>
        <v-content>
            <v-container grid-list-xs>
                <transition name="fade">
                    <router-view/>
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
</style>
