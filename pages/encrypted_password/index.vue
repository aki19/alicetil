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
            <v-card-title class="subtitle-1">暗号化パスワード情報</v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  ref="admin_id"
                  v-model="admin_id"
                  :rules="[v => !!v || 'This field is required']"
                  label="管理者ID"
                  type="number"
                  required
                ></v-text-field>
                <v-text-field
                  ref="password"
                  v-model="password"
                  :rules="[v => !!v || 'This field is required']"
                  label="パスワード"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <div class="my-2">
                <v-btn :disabled="!valid" color="primary" @click="submit">
                  <v-icon left>mdi-onepassword</v-icon>
                  暗号化
                </v-btn>
              </div>
            </v-card-actions>
            <v-card-text>
              <v-text-field
                v-model="encrypted_password"
                label="暗号化パスワード"
                filled
                disabled
              ></v-text-field>
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
      title: '暗号化パスワード確認',
      valid: false,
      admin_id: '',
      password: '',
      encrypted_password: ''
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$axios.$post(process.env.API+'encryption', {
          id: this.admin_id,
          password: this.password
        }).then(res => {
          this.encrypted_password = res.encrypted_password;
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
