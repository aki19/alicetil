<template>
  <div>
    <v-container
      class="fill-height"
      fluid
    >
      <v-toolbar>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </v-toolbar>
      <v-row
        align="center"
        justify="center"
      >
        <v-col>
          <v-card>
            <v-card-title>便利くんを集めたサイト。</v-card-title>
            <v-card-text>
              <v-list two-line>
                <v-list-item v-for="menu in getFunctionMenu"
                             :key="menu.title">
                  <v-list-item-content>
                    <v-list-item-title>{{ menu.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{ menu.info }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      title: 'ダッシュボード',
    }
  },
  computed: {
    ...mapGetters({
      getFunctionMenu: 'menu/getFunctionMenu',
    }),
  },
  head() {
    return {
      titleTemplate: ''
    }
  }
}
</script>

<style>

</style>
