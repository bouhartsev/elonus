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
    <v-dialog v-model="fab" max-width="600px" overlay-opacity="0.9">
      <v-card>
        <NewEvent />
      </v-card>
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