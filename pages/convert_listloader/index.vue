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
            <v-card-text>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  ref="const_name"
                  v-model="const_name"
                  :rules="[v => !!v || 'This field is required']"
                  label="定義名"
                  required
                ></v-text-field>
                <v-textarea
                  ref="input"
                  v-model="input"
                  :rules="[v => !!v || 'This field is required']"
                  label="変換前"
                  required
                ></v-textarea>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <div class="my-2">
                <v-btn :disabled="!valid" color="primary" @click="submit">
                  <v-icon left>mdi-flash</v-icon>
                  変換
                </v-btn>
              </div>
            </v-card-actions>
            <v-card-text>
              <v-textarea
                v-model="output"
                label="変換後"
                filled
                disabled
              ></v-textarea>
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
      title: 'ListLoader定義変換',
      valid: false,
      const_name: '',
      input: '',
      output: ''
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$axios.$post(process.env.API+'convert_listloader', {
          const_name: this.const_name,
          input: this.input
        }).then(res => {
          this.output = res;
        });
      }
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
