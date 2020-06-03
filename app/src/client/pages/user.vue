<template>
  <v-container fluid>
    <v-row class="mb-8">
      <v-col lg="8">
        <p-user-list />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserList from '~/components/user/List.vue'

export default {
  components: {
    'p-user-list': UserList,
  },
}
</script>
