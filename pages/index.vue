<template>
  <v-row justify="center" align="center">
    <Loader :data="home"/>
    <v-col cols="12" sm="8" md="6" v-if="home">
      <v-img :src="home.image" alt="elonus index" />
      <p v-html="home.text" />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "IndexPage",
  computed: {
    ...mapGetters(["home"]),
  },
  created() {
    this.$store.commit("SET_TITLE", "Home");
  },
};
</script>
