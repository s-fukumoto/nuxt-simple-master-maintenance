export default function ({ app, route, redirect, error }) {
  // 非ログイン時は強制的にホームへ
  if (!app.$auth.$state.loggedIn) {
    return redirect('/')
  }

  // パスからページ情報を取得
  const pageItem = process.env.pageItems.find(
    (item) => item.path === route.path
  )

  // ログイン時は権限チェック
  // @todo: $auth.hasScope で判定
  if (!pageItem || pageItem.scopelevel > app.$auth.$state.user.scopelevel) {
    error({
      message: 'ページのアクセス権限がありません',
      statusCode: 403,
    })
  }
}
