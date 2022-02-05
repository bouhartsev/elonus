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
          @click="title = item.title"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar clipped-left fixed app>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-show="$vuetify.breakpoint.mdAndDown"
      />
      <Logo to="/" @click="title = 'Home'"/>
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
    <v-footer :absolute="true" app>
      <NuxtLink to="//bouhartsev.top">bouhartsev</NuxtLink><span>&copy; 2022</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  head() {
    return {
      title: this.title,
    }
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
      title: "Home",
    };
  },
  mounted() {
    console.log(this.$meta().resume().metaInfo.title);
  }
};
</script>
