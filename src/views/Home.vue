<template>
    <v-container grid-list-xs>
        <v-layout row wrap>
            <v-flex d-flex justify-center align-center xs12 sm6>
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
            <v-flex xs12 offset-sm1 sm5>
              <v-list subheader class="elevation-4">
                <v-subheader>All Time Leaderboard</v-subheader>
                <v-list-tile
                  v-for="item in items"
                  :key="item.title"
                  avatar
                >
                  <v-list-tile-avatar>
                    <img :src="item.avatar">
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  </v-list-tile-content>

                  <v-list-tile-action>
                    <v-icon :color="item.active ? 'teal' : 'grey'">chat_bubble</v-icon>
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
      items: [
        { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
        { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
        { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
      ],
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
