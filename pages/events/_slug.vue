<template>
  <v-row justify="center" align="center">
    <Loader :data="item"/>
    <v-col cols="12" sm="8" md="6">
    <v-card v-if="item">
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
        <p v-if="item.earthquake_power">
          Earthquake power: {{ item.earthquake_power }}
        </p>
      </v-card-text>
    </v-card>
  </v-col>
  </v-row>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("GET_EVENTS", "action GET_EVENTS");
  },
  computed: {
    item() {
      let result = this.$store.getters.eventById(
        Number(this.$nuxt.context.params.slug)
      );
      this.$store.commit("SET_TITLE", result?.type);
      return result;
    },
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