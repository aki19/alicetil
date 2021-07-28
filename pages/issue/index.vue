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
                <v-text-field
                  ref="parent_key"
                  v-model="parent_key"
                  :rules="[required]"
                  label="親タスク番号"
                  required
                ></v-text-field>
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
          <v-data-table
            :headers="headers"
            :items="issues"
            disable-pagination
            disable-sort
            hide-default-footer
            dense
            class="elevation-1"
          >
          </v-data-table>
          <br/>
          <v-btn :disabled="issues.length == 0" color="info" @click="copy">
            コピー
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '子タスク出力',

      valid: false,
      parent_key:'',
      issues: [],

      headers: [
        {text: "キー", align: 'center', value: "key"},
        {text: "要約", value: "name"},
      ],

      required: value => !!value || "選択してください。"
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$axios.$post(process.env.API + 'jira/get_child_issue_list', {
          parent_key: this.parent_key,
        }).then(res => {
          this.issues = res;
        });
      }
    },
    copy() {
        var range = document.createRange();
        let containerNode = document.querySelector("tbody"); //// this part
        range.selectNode(containerNode); //// this part
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        alert("data copied");
    }
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
