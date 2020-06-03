<template>
  <v-card>
    <v-card-title>
      <span class="headline">{{ formTitle }}</span>
    </v-card-title>

    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12 sm6 md6>
            <p-text-field
              v-model="editedItem.username"
              label="ユーザー識別"
              :disabled="upd"
            />
          </v-flex>
          <v-flex xs12 sm6 md6>
            <p-text-field v-model="editedItem.name" label="名称" />
          </v-flex>
          <v-flex xs12 sm6 md6>
            <p-text-field
              v-model="editedItem.password"
              label="パスワード"
              :disabled="upd"
              :append-icon="showPass ? 'fa-eye' : 'fa-eye-slash'"
              :type="showPass ? 'text' : 'password'"
              @click:append="showPass = !showPass"
            />
          </v-flex>
          <v-flex xs12 sm6 md6>
            <p-text-field v-model="editedItem.scopelevel" label="権限レベル" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <p-btn @click="saveItem">
        保存
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

  data() {
    return {
      upd: false, // 更新かどうか
      showPass: false, // パスワードを表示するか
      editedItem: {},
      defaultItem: {
        username: '',
        name: '',
        password: '',
        scopelevel: this.$myConst.SCOPE.READER.VALUE,
      },
    }
  },

  computed: {
    formTitle() {
      return this.upd ? '情報変更' : '新規作成'
    },
  },

  watch: {
    username() {
      this.setData()
    },
  },

  created: function () {
    // @todo:初期起動時がwatchで検知できないのでしかたなく処理。他の方法を
    this.setData()
  },

  methods: {
    setData() {
      if (this.username) {
        this.upd = true
        this.getItem().then((data) => {
          this.editedItem = { ...this.editedItem, ...data }
        })
      } else {
        this.upd = false
        this.editedItem = { ...this.defaultItem }
      }
    },

    async getItem() {
      const { data } = await this.$axios.get(`/api/user/${this.username}`)
      return data
    },

    async saveItem() {
      const method = this.upd ? 'put' : 'post'
      await this.$axios[method](`/api/user/${this.editedItem.username}`, {
        data: this.editedItem,
      })
      this.$emit('dialog-close')
    },
  },
}
</script>
