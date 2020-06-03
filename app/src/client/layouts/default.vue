<template>
  <v-app>
    <!-- メニューバー -->
    <p-main-menu-bar :menu-items="$myConf.pageItems" />

    <!-- コンテンツ -->
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>

    <!-- フッター -->
    <v-footer fixed app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import MainMenuBar from '~/components/layout/MainMenuBar.vue'

export default {
  components: {
    'p-main-menu-bar': MainMenuBar,
  },
}
</script>
