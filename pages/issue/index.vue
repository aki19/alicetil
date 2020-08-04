<template>
  <div>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center">
          <v-card>
            <v-card-title>{{title}}</v-card-title>
            <v-card-text>
              <v-data-table
                :headers="headers"
                :items="lists"
                :items-per-page="10"
                class="elevation-1"
              >
                <template v-slot:item.title="{ item }">
                  <p class="font-weight-medium">{{ item.title }}</p>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'タスク出力',
        headers: [
          {
            text: 'タイトル',
            align: 'left',
            sortable: false,
            value: 'title',
          },
          {text: 'id', value: 'id'},
          {text: '完了フラグ', value: 'completed'},
        ],
      }
    },
    head() {
      return {
        title: this.title
      }
    },
    async asyncData({app}) {
      const baseUrl = 'https://jsonplaceholder.typicode.com/todos/';
      const response = await app.$axios.$get(baseUrl);
      return {lists: response};
    }
  }
</script>

<style>

</style>
