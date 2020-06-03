export default (context, inject) => {
  inject('myConst', {
    SCOPE: {
      PUBLIC: { VALUE: 1, NAME: '一般者' },
      READER: { VALUE: 2, NAME: '閲覧者' },
      MODIFIER: { VALUE: 5, NAME: '更新者' },
      ADMINISTRATOR: { VALUE: 9, NAME: '管理者' },
    },
  })
}
