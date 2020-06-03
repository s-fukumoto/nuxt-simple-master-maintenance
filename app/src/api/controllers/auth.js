const jsonwebtoken = require('jsonwebtoken')
const config = require('config')
const models = require('../models')

module.exports = {
  // ログイン
  login: (req, res, next) => {
    const { username, password } = req.body

    // 認証
    models.User.findOne({ where: { username } })
      .then((user) => {
        if (!user.authValid(username, password)) {
          return res
            .status(401)
            .json({ status: 'NG', error: 'Invalid username or password' })
        }

        // ログイン情報をjwt形式でauth-moduleへ引き渡す
        const accessToken = jsonwebtoken.sign(
          {
            username: user.get('username'),
            name: user.get('name'),
            scopelevel: user.get('scopelevel'),
          },
          config.jwt.secret
        )
        res.json({ token: { accessToken } })
      })
      .catch((err) => res.status(500).json(err))
  },

  // ログアウト
  logout: (req, res, next) => {
    res.json({ status: 'OK' })
  },
}
