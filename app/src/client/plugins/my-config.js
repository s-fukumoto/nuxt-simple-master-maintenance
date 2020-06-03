export default ({ app }, inject) => {
  inject('myConf', {
    pageItems: [
      {
        icon: 'fa-home',
        title: 'トップ',
        path: '/',
        scopelevel: app.$myConst.SCOPE.PUBLIC.VALUE,
      },
      {
        icon: 'fa-place-of-worship',
        title: 'エリア・地域 メンテナンス',
        path: '/area',
        scopelevel: app.$myConst.SCOPE.READER.VALUE,
      },
      {
        icon: 'fa-train',
        title: '沿線・駅 メンテナンス',
        path: '/railway_line',
        scopelevel: app.$myConst.SCOPE.READER.VALUE,
      },
      {
        icon: 'fa-cloud-upload-alt',
        title: 'インポート',
        path: '/import',
        scopelevel: app.$myConst.SCOPE.MODIFIER.VALUE,
      },
      {
        icon: 'fa-address-card',
        title: 'ユーザー管理',
        path: '/user',
        scopelevel: app.$myConst.SCOPE.ADMINISTRATOR.VALUE,
      },
    ],
  })
}
