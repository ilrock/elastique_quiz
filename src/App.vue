<template>
    <v-app>
        <v-toolbar color="primary">
            
        </v-toolbar>
        <v-content>
            <v-container grid-list-xs>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>
<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
