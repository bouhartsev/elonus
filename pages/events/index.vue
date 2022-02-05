<template>
  <v-layout row>
    <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
      v-if="!events"
    ></v-progress-circular>
    <v-flex
      xs12
      sm6
      md4
      class="px-2 py-2"
      style="box-sizing: border-box"
      v-for="(item, i) in events"
      :key="i"
    >
      <v-lazy :options="{ threshold: 0.2 }">
        <v-card
          link
          :to="{
            name: 'events-slug',
            params: { slug: item.id },
          }"
        >
          <v-img
            :src="
              'https://demo-api.vsdev.space//storage//elonus//' +
              getEventImg(item.type)
            "
            aspect-ratio="1.5"
          />
          <v-card-title>{{ item.date }}</v-card-title>
          <v-card-subtitle v-if="item.victims"
            >{{ item.victims }} victims</v-card-subtitle
          >
          <v-card-text>
            <p v-if="item.acid_power">Acid power: {{ item.acid_power }}</p>
            <p v-if="item.wind_speed">Wind speed: {{ item.wind_speed }}</p>
            <p v-if="item.earthquake_power">Earthquake power: {{ item.earthquake_power }}</p>
          </v-card-text>
        </v-card>
      </v-lazy>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["events"]),
  },
  created() {
    this.$store.commit("SET_TITLE", "Events");
    this.$store.dispatch("GET_EVENTS", "action GET_EVENTS");
  },
  methods: {
    getEventImg: (type = "acid_rain") => {
      if (type == "acid_rain") return "rain_img.jpg";
      else if (type == "hurricane") return "hurricane_img.jpg";
      else return "earthquake_img.jpg";
    },
  },
};
</script>

<style>
</style>