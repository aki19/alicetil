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
          <v-alert
            border="top"
            colored-border
            type="info"
            elevation="2"
          >
            Vestibulum ullamcorper mauris at ligula. Nam pretium turpis et arcu. Ut varius tincidunt libero.
            Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Morbi nec metus.
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'ダッシュボード',
    }
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
