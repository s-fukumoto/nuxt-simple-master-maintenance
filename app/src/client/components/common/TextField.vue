<!--
  Vuetifyの v-text-field のラッパーコンポーネント

  ※基本的には以下のプラグインで共通化してコンポーネント登録する
    app\src\client\plugins\common-components.js
-->
<template>
  <v-text-field v-bind="$attrs" v-on="$listeners">
    <!-- @todo:scopeには対応してない -->
    <slot v-for="slot in Object.keys($slots)" :slot="slot" :name="slot" />
  </v-text-field>
</template>

<script>
export default {
  inheritAttrs: false,
}
</script>
