<template>
  <v-container>
    <v-card color="deep-orange darken-1" max-width="400">
      <v-card-title class="headline">
        エラーが発生しました
      </v-card-title>
      <v-card-text>
        <p>
          {{ error.message }}
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn text>
          <nuxt-link to="/">
            ホーム
          </nuxt-link>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  layout: 'default',
}
</script>
