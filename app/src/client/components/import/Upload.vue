<template>
  <v-card>
    <v-card-title class="headline">
      {{ title }}
    </v-card-title>
    <v-card-actions>
      <v-file-input
        v-model="file"
        accept=".csv,.txt"
        label="アップロードするファイルを選択してください"
        prepend-icon="fa-file-csv"
        clear-icon="fa-times-circle"
      />
      <p-btn :loading="loading" :disabled="loading" @click="upload">
        アップロード
        <v-icon right dark>
          fa-cloud-upload-alt
        </v-icon>
      </p-btn>
    </v-card-actions>
  </v-card>
</template>

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

<script>
export default {
  props: {
    /**
     * アップロード種別名
     */
    uploadType: {
      type: String,
      required: true,
    },
    /**
     * タイトル
     */
    title: {
      type: String,
      default: 'Title',
    },
  },

  data() {
    return {
      file: null,
      loading: false,
    }
  },
  methods: {
    async upload() {
      if (!this.file) return // @todo: バリデーション

      this.loading = true

      const formData = new FormData()
      formData.append('file', this.file)
      await this.$axios
        .post(`/api/import/${this.uploadType}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })

      this.loading = false
    },
  },
}
</script>
