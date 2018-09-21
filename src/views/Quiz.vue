<template>
    <v-container justify-center align-center grid-list-xs>
        <v-layout row wrap>
            <v-flex xs12 sm8 offset-sm2>
                <v-card>
                  <v-toolbar card prominent class="elevation-2">
                    <v-toolbar-title class="title"> Question? </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <span> 30s </span>
                  </v-toolbar>
                  <v-card-text>
                      <v-container grid-list-xs>
                          <v-layout column>
                              <v-flex xs12>
                                  <div>
                                      <v-btn outline color="indigo">Outline Button</v-btn>
                                  </div>
                                  <div>
                                      <v-btn outline color="indigo">Outline Button</v-btn>
                                  </div>
                                  <div>
                                      <v-btn outline color="indigo">Outline Button</v-btn>
                                  </div>
                              </v-flex>
                          </v-layout>
                      </v-container>
                  </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style>
</style>
