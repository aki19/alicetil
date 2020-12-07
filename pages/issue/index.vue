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
        <v-col class="text-center">
          <v-card>
            <v-card-title class="subtitle-1">検索条件</v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="valid">
                <v-select
                  :items="sprints"
                  item-value="id"
                  item-text="name"
                  v-model="sprint_id"
                  :rules="[required]"
                  label="スプリント"
                  required
                ></v-select>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <div class="my-2">
                <v-btn :disabled="!valid" color="primary" @click="submit">
                  出力
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <v-col>
          <v-card>
            <v-card-title>{{sprint_name}}</v-card-title>
          </v-card>
          <v-data-table
            :headers="headers"
            :items="issues"
            disable-sort
            dense
            class="elevation-1"
          >
            <template v-slot:item.parent_name="{ item }">
              <v-chip
                color="info"
                dark
              >
                {{ item.parent_name }}
              </v-chip>
            </template>
          </v-data-table>
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

      valid: false,
      sprint_id: '',
      sprint_name:'',
      issues: [],

      headers: [
        {text: "対象システム", value: "parent_name"},
        {text: "キー", align: 'center', value: "key"},
        {text: "要約", value: "name"},
        {text: "ステータス", value: "status"},
        {text: "担当者", value: "person"}
      ],

      required: value => !!value || "選択してください。"
    }
  },
  methods: {
    submit() {
      console.log(this.sprint_id.name);
      if (this.$refs.form.validate()) {
        this.$axios.$post(process.env.API + 'jira/get_issue_list', {
          sprint_id: this.sprint_id,
        }).then(res => {
          this.issues = res;
        });
      }
    }
  },
  async asyncData({app}) {
    const res = await app.$axios.$get(process.env.API + 'jira/get_sprint_list');
    return {sprints: res};
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>

<style>

</style>
