<template>
  <v-card>
    <v-card-title class="headline">
      ログイン中 [ {{ $auth.$state.user.name }} ]
    </v-card-title>
    <v-card-text>
      メンテナンスメニューより処理してください
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <p-btn @click="logout">
        ログアウト
      </p-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  methods: {
    async logout() {
      return await this.$auth
        .logout()
        .then(() => {
          //console.log('logout success')
          this.$toast.show('ログアウトしました')
        })
        .catch((e) => {
          //console.error(`logout error (${e.message})`)
          this.$toast.show('ログアウトに失敗しました')
          this.formError = 'ログアウトに失敗しました'
        })
    },
  },
}
</script>
