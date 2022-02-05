<template>
  <v-row>
    <v-col class="text-center">
      <h2>Page description</h2>
      <Loader :data="about"/>
      <p v-html="about.text"></p>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'AboutPage',
  created() {
    this.$store.commit("SET_TITLE", "About");
  },
  computed: {
    ...mapGetters(["about"]),
  },
}
</script>
