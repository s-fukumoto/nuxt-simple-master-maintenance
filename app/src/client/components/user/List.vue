<template>
  <v-data-table
    :headers="headers"
    :items="users"
    :page.sync="page"
    :items-per-page="10"
    :loading="tableLoading"
    :footer-props="{
      itemsPerPageText: '表示行:',
      pageText: '',
      prevIcon: 'fa-caret-square-left',
      nextIcon: 'fa-caret-square-right',
      showCurrentPage: true,
    }"
    class="elevation-1"
    @page-count="pageCount = $event"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>ユーザー管理</v-toolbar-title>
        <v-divider class="mx-4" inset vertical />
        <div class="flex-grow-1" />
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <p-btn tile icon color="primary" small class="mb-2" v-on="on">
              <v-icon>fa-plus-square</v-icon>
            </p-btn>
          </template>

          <!-- 削除確認 -->
          <p-dialog-delete
            v-if="del"
            :username="selectedUsername"
            @dialog-close="close"
          />

          <!-- 編集 -->
          <p-dialog-edit
            v-else
            :username="selectedUsername"
            @dialog-close="close"
          />
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon color="primary" small class="mr-2" @click="openEdit(item)">
        fa-edit
      </v-icon>
      <v-icon color="primary" small class="mr-2" @click="confirmDelete(item)">
        fa-trash-alt
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn text block color="primary" small class="mb-2" @click="reload">
        <v-icon>fa-redo-alt</v-icon>
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import DialogDelete from '~/components/user/dialog/Delete.vue'
import DialogEdit from '~/components/user/dialog/Edit.vue'

export default {
  components: {
    'p-dialog-delete': DialogDelete,
    'p-dialog-edit': DialogEdit,
  },
  data() {
    return {
      dialog: false, // ダイアログの閉開制御
      del: false, // 削除かどうか
      tableLoading: false, // Loadingを表示
      page: 1,
      pageCount: 0,
      headers: [
        { text: 'ユーザー識別', value: 'username' },
        { text: '名称', value: 'name' },
        { text: '権限レベル', value: 'scopelevel', align: 'center' },
        { text: '操作', value: 'action', align: 'center', sortable: false },
      ],
      users: [],
      selectedIndex: -1,
    }
  },

  computed: {
    selectedUsername() {
      return this.selectedIndex === -1
        ? ''
        : this.users[this.selectedIndex].username
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
  },

  created: function () {
    this.reload()
  },

  methods: {
    openEdit(item) {
      this.selectedIndex = this.users.indexOf(item)
      this.dialog = true
    },

    confirmDelete(item) {
      this.selectedIndex = this.users.indexOf(item)
      this.del = true
      this.dialog = true
    },

    close() {
      this.dialog = false
      this.del = false
      this.selectedIndex = -1
      this.reload()
    },

    async reload() {
      this.tableLoading = true
      const { data } = await this.$axios.get('/api/userlist')
      this.users = data || []
      this.tableLoading = false
    },
  },
}
</script>
