<template>
  <v-card>
    <v-card-title class="headline">
      削除確認
    </v-card-title>
    <v-card-text>データを削除します。よろしいですか？</v-card-text>
    <v-card-actions>
      <v-spacer />
      <p-btn @click="deleteItem">
        実行
      </p-btn>
      <p-btn color="secondary" @click="$emit('dialog-close')">
        キャンセル
      </p-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    /**
     * ユーザ識別
     */
    username: {
      type: String,
      required: true,
    },
  },

  methods: {
    async deleteItem() {
      if (this.username) {
        await this.$axios.delete(`/api/user/${this.username}`)
      }
      this.$emit('dialog-close')
    },
  },
}
</script>
