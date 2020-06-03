<template>
  <v-container fluid>
    <v-row class="mb-6">
      <v-col lg="6">
        <p-upload upload-type="address" title="住所データ" />
      </v-col>
    </v-row>
    <v-row class="mb-6">
      <v-col lg="6">
        <p-upload upload-type="company" title="事業者データ" />
      </v-col>
      <v-col lg="6">
        <p-upload upload-type="line" title="路線データ" />
      </v-col>
    </v-row>
    <v-row class="mb-6">
      <v-col lg="6">
        <p-upload upload-type="station" title="駅データ" />
      </v-col>
      <v-col lg="6">
        <p-upload upload-type="stationjoin" title="接続駅データ" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Upload from '~/components/import/Upload.vue'

export default {
  components: {
    'p-upload': Upload,
  },
}
</script>
