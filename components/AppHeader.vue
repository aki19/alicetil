<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      :mini-variant.sync="mini"
      bottom
    >
      <v-list dense>
        <v-list-item v-for="menu in getMenu"
                     :key="menu.title" :to="menu.to" link>
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      color="primary"
    >
      <v-app-bar-nav-icon @click.stop="expand"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ appName }}</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "AppHeader",
  data: () => ({
    drawer: null,
    toggleMini: false,
    appName: process.env.APP_NAME
  }),
  computed: {
    ...mapGetters({
      getMenu: 'menu/getMenu',
    }),
    mini() {
      return this.toggleMini;
    }
  },
  methods: {
    expand() {
      if (this.$vuetify.breakpoint.mobile) {
        this.toggleMini = false;
        this.drawer = !this.drawer;
      } else {
        this.toggleMini = !this.toggleMini;
      }
    }
  }
}
</script>

<style scoped>

</style>
