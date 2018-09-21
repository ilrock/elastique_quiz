<template>
    <v-container justify-center align-center grid-list-xs>
        <v-layout row wrap>
            <v-flex xs12>
                <v-form>
                    <v-text-field 
                        v-for="(player, index) in players"
                        v-model="player.name" 
                        :key="index" 
                        :label="`Player ${index} name`" 
                        id="id">
                    </v-text-field>
                </v-form>
                <v-btn color="success"> Start the quiz </v-btn>
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
  }
}
</script>

<style>

</style>
