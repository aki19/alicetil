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
          <v-alert
            :value="alert"
            border="top"
            colored-border
            type="info"
            elevation="2"
            class="text-left"
            transition="fade-transition"
          >
            定義名には、ListLoaderのキー名にしたい名前を入力してください。<br/>
            変換前には、defineの値側の定義を入力してください。<br/>
            例：<br/>
            define("__DELETE_FLAG_OFF", 0);<br/>
            define("__DELETE_FLAG_ON", 1);<br/>
            ※名前側の定義が「__LABEL_」で始まる必要があります。
          </v-alert>
          <v-card>
            <v-card-text>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  ref="const_name"
                  v-model="const_name"
                  :rules="[required]"
                  label="定義名"
                  required
                ></v-text-field>
                <v-textarea
                  ref="input"
                  v-model="input"
                  :rules="[required]"
                  label="変換前"
                  required
                ></v-textarea>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <div class="my-2">
                <v-btn color="info" @click="alert = !alert">
                  使い方
                </v-btn>
              </div>
              <v-spacer></v-spacer>
              <div class="my-2">
                <v-btn :disabled="!valid" color="primary" @click="submit">
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

      alert: false,

      valid: false,
      const_name: '',
      input: '',
      output: '',

      required: value => !!value || "入力してください。"
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$axios.$post(process.env.API + 'convert_listloader', {
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
