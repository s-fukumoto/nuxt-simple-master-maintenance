const models = require('../models')

module.exports = {
  // 取得(トークンからの取得用)
  getByToken: (req, res, next) => res.json({ user: req.user }),

  // 全取得
  getAll: (req, res, next) => {
    models.User.findAll({ attributes: { exclude: ['password'] } })
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err))
  },

  // 取得(usernameから取得)
  getByUsername: (req, res, next) => {
    models.User.findOne({
      where: { username: req.params.username },
      attributes: { exclude: ['password'] },
    })
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err))
  },

  // 登録
  create: (req, res, next) => {
    models.User.create(req.body.data)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err))
  },

  // 更新
  update: (req, res, next) => {
    models.User.update(req.body.data, {
      where: { username: req.params.username },
      fields: ['name', 'scopelevel'],
    })
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err))
  },

  // 削除
  delete: (req, res, next) => {
    models.User.destroy({ where: { username: req.params.username } })
      .then(() => res.json({ username: req.params.username }))
      .catch((err) => res.status(500).json(err))
  },
}
