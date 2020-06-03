/**
 * Vuetifyラッパーコンポーネントの登録プラグイン
 */
import Vue from 'vue'

import Button from '~/components/common/Button.vue'
import TextField from '~/components/common/TextField.vue'

Vue.component('p-btn', Button)
Vue.component('p-text-field', TextField)
