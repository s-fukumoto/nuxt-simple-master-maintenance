<!--
  Vuetifyの v-btn のラッパーコンポーネント

  ※基本的には以下のプラグインで共通化してコンポーネント登録する
    app\src\client\plugins\common-components.js
-->
<template>
  <v-btn v-bind="$attrs" :color="color" nuxt class="ma-2" v-on="$listeners">
    <!-- @todo:scopeには対応してない -->
    <slot v-for="slot in Object.keys($slots)" :slot="slot" :name="slot" />
  </v-btn>
</template>

<script>
export default {
  inheritAttrs: false,
  data() {
    return {
      color: this.$attrs.color ?? 'primary',
    }
  },
}
</script>
