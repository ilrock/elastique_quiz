<template>
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
</template>

<script>
export default {
  name: 'leaderboard',
  computed: {
    leaderboard () {
      return this.$store.getters.leaderboard
    }
  }
}
</script>

<style>

</style>
