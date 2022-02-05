<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-container slot="append">
            <v-divider />
            <!-- 0 if home page!!! -->
            Events counter: {{ eventsCounter }}
        </v-container>
    </v-navigation-drawer>
    <v-app-bar clipped-left fixed app>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-show="$vuetify.breakpoint.mdAndDown"
      />
      <!-- make link to home -->
      <Logo/> 
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <!-- <v-btn
        icon
        
      >
        <v-icon>mdi-question</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="true" app class="justify-center">
      <!-- make font-color -->
      <a href="//bouhartsev.top" target="_blank" style="color:inherit; margin-right: 0.5em;">bouhartsev</a><span>&copy; 2022</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DefaultLayout",
  head() {
    return {
      title: this.title,
    }
  },
  computed: {
    ...mapGetters(["title", "eventsCounter"]),
  },
  data() {
    return {
      drawer: this.$vuetify.breakpoint.lgAndUp,
      items: [
        {
          icon: "mdi-calendar-star",
          title: "Events",
          to: "/events",
        },
        {
          icon: "mdi-chart-bubble",
          title: "About",
          to: "/about",
        },
      ],
    };
  },
  beforeCreate() {
    this.$store.dispatch("GET_PAGES_DATA", "action GET_PAGES_DATA");
  },
};
</script>
