<template>
  <v-container pa-0>
    <!-- メインメニュー -->
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <v-list>
        <v-list-item-group>
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
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- アプリケーションバー -->
    <v-app-bar clipped-left fixed app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn v-if="$auth.$state.loggedIn" icon>
        <v-icon>fa-user-circle</v-icon>
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
  props: {
    /**
     * メニューリスト
     */
    menuItems: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      title: '簡易マスタメンテナンス',
      drawer: null, // 開閉On/Off
    }
  },

  computed: {
    items() {
      return this.filterItems(this.$auth.$state.loggedIn)
    },
  },

  methods: {
    filterItems() {
      return this.menuItems.filter((item) =>
        this.isWithinScope(item.scopelevel)
      )
    },
    isWithinScope(scopelevel) {
      return (
        scopelevel === this.$myConst.SCOPE.PUBLIC.VALUE ||
        (this.$auth.$state.loggedIn &&
          this.$auth.$state.user.scopelevel >= scopelevel)
      )
    },
  },
}
</script>
