<template>
  <v-dialog
    :value="true"
    persistent
    width="300">
    <v-card
      color="teal"
      dark>
      <v-card-text>
        Loading
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'loader'
}
</script>
