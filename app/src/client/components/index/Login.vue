<template>
  <v-card>
    <v-form ref="form" v-model="formValid" lazy-validation>
      <v-card-title class="headline">
        ログイン
      </v-card-title>
      <v-card-text>
        <v-alert :value="!!formError" type="error">
          {{ formError }}
        </v-alert>
        ログインしてメンテナンスを開始してください
        <p-text-field
          v-model="formUserName"
          label="ユーザー識別"
          prepend-icon="fa-user"
          :rules="formRulesUserName"
          required
        />
        <p-text-field
          v-model="formPassword"
          label="パスワード"
          type="password"
          prepend-icon="fa-key"
          :rules="formRulesPassword"
          required
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <p-btn @click="submit">
          ログイン
        </p-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import vd from '~/modules/validation.js'

export default {
  data() {
    return {
      formValid: true,
      formError: null,
      formUserName: '',
      formRulesUserName: [vd.required, vd.max],
      formPassword: '',
      formRulesPassword: [vd.required, vd.max],
    }
  },

  methods: {
    submit() {
      this.formError = null
      if (this.$refs.form.validate()) {
        this.login()
      }
    },
    async login() {
      return await this.$auth
        .loginWith('local', {
          data: {
            username: this.formUserName,
            password: this.formPassword,
          },
        })
        .then(() => {
          //console.log('login success')
          this.$toast.show('ログインしました')
        })
        .catch((e) => {
          //console.error(`login error (${e.message})`)
          this.$toast.show('ログインに失敗しました')
          this.formError = 'ログインに失敗しました'
        })
    },
  },
}
</script>
