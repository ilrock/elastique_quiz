<template>
    <v-container grid-list-xs>
        <v-layout row wrap>
            <v-flex d-flex justify-center align-center xs12 sm6>
                <v-card class="elevation-4">
                    <v-card-title class="title elevation-2" primary-title>
                      Let's get started
                    </v-card-title>
                    <v-card-text>
                        <v-form ref="form">
                            <v-text-field 
                                v-model="player.name"
                                :rules="rules.notEmpty"
                                label="What's your name, champion?">
                            </v-text-field>   
                        </v-form>
                    </v-card-text>
                    <v-card-actions class="pa-3">
                        <v-spacer></v-spacer>
                        <v-btn @click="onStartQuizClick" color="success"> Start the quiz </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 offset-sm1 sm5>
              <v-list subheader class="elevation-4">
                <v-subheader>All Time Leaderboard</v-subheader>
                <v-list-tile
                  v-for="item in leaderboard"
                  :key="item.name"
                  avatar
                >
                  <v-list-tile-avatar>
                    <img :src="item.avatar">
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.name"></v-list-tile-title>
                  </v-list-tile-content>

                  <v-list-tile-action>
                    <div>
                      {{ item.score }}
                      <v-icon :color="item.active ? 'teal' : 'grey'">chat_bubble</v-icon>
                    </div>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      rules: {
        notEmpty: [
          v => !!v || 'Name is required'
        ]
      },
      player: {
        name: ''
      }
    }
  },
  computed: {
    leaderboard () {
      return this.$store.getters.leaderboard
    }
  },
  methods: {
    onStartQuizClick () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('setPlayer', this.player)
        .then(() => this.$router.push('/questions/1'))
      }      
    }
  }
}
</script>

<style>
</style>
