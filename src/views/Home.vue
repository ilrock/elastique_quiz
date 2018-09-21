<template>
    <v-container justify-center align-center grid-list-xs>
        <v-layout row wrap>
            <v-flex xs12 sm8 offset-sm2>
                <v-card class="elevation-4">
                    <v-card-title class="title elevation-2" primary-title>
                        Add Players
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field 
                                v-for="(player, index) in players"
                                v-model="player.name" 
                                :key="index" 
                                :label="`Player ${++index} name`" 
                                id="id">
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="onStartQuizClick" color="success"> Start the quiz </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      players: [
        {
          name: ''
        },
        {
          name: ''
        }
      ]
    }
  },
  methods: {
    onStartQuizClick () {
      this.$store.dispatch('addPlayers', this.players)
        .then(() => this.$router.push('/questions/1'))
    }
  }
}
</script>

<style>
</style>
