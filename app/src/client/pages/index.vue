<template>
  <v-container fluid>
    <v-row class="mb-6">
      <v-col lg="6">
        <!-- ログイン（非ログイン時） -->
        <p-login v-if="!$auth.$state.loggedIn" />
        <!-- ログアウト（ログイン時） -->
        <p-logout v-else />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Login from '~/components/index/Login.vue'
import Logout from '~/components/index/Logout.vue'

export default {
  components: {
    'p-login': Login,
    'p-logout': Logout,
  },
}
</script>
