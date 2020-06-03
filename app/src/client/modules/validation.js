export default {
  /**
   * 必須入力チェック
   *
   * @param val 値
   */
  required: (val) => !!val || '必須入力です',
  /**
   * 最大桁数チェック
   *
   * @param val 値
   */
  max: (val) => (val && val.length <= 10) || `10文字以内で入力してください`,
}
