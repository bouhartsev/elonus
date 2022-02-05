<template>
  <div>
    <nuxt-child />
    <v-btn
      @click="fab = !fab"
      color="blue darken-2"
      dark
      fab
      fixed
      bottom
      right
    >
      <v-icon v-if="fab"> mdi-close </v-icon>
      <v-icon v-else> mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="fab" max-width="600px" overlay-opacity="0.95">
      <v-container>
        <NewEvent />
        <v-btn @click="fab = !fab">Close</v-btn>
      </v-container>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fab: false,
    };
  },
};
</script>

<style>
</style>