export default function ({ app, route, redirect, error }) {
  // パスからページ情報を取得
  const pageItem = app.$myConf.pageItems.find(
    (item) => item.path === route.path
  )

  // 非ログイン時は強制的にホームへ
  if (!app.$auth.$state.loggedIn) {
    return redirect('/')
  }

  // ログイン時は権限チェック
  if (!pageItem || pageItem.scopelevel > app.$auth.$state.user.scopelevel) {
    error({
      message: 'ページのアクセス権限がありません',
      statusCode: 403,
    })
  }
}
