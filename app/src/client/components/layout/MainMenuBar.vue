<template>
  <v-container pa-0>
    <!-- メインメニュー -->
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.path"
          router
          nuxt
          exact
        >
          <v-list-item-icon class="align-center">
            <v-icon v-text="item.icon" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- アプリケーションバー -->
    <v-app-bar clipped-left fixed app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon>
        <v-icon :color="$auth.$state.loggedIn ? 'success' : 'secondary'">
          fa-user-circle
        </v-icon>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<style scoped>
.v-list-item__icon {
  width: 40px;
  display: inline-block;
  text-align: center;
  margin-right: 10px !important;
}
</style>

<script>
export default {
  data() {
    return {
      title: '簡易マスタメンテナンス',
      drawer: null, // 開閉On/Off
    }
  },
  computed: {
    items() {
      return this.$myConf.pageItems.filter(
        (item) =>
          item.scopelevel === this.$myConst.SCOPE.PUBLIC.VALUE ||
          (this.$auth.$state.loggedIn &&
            this.$auth.$state.user.scopelevel >= item.scopelevel)
      )
    },
  },
}
</script>
