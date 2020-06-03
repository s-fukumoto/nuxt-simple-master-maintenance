'use strict'
/**
 * sequelize-cli の sequelize models:create で生成されたものを変更
 */
const crypto = require('crypto')
const config = require('config')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: DataTypes.STRING,
      name: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        validate: {
          min: 8,
          max: 32,
        },
      },
      scopelevel: DataTypes.INTEGER,
    },
    {
      tableName: 't_user',
      timestamps: false,
      hooks: {
        beforeCreate: hashPasswordHook,
        beforeUpdate: hashPasswordHook,
      },
    }
  )
  // ユーザー識別＆パスワードチェック
  User.prototype.authValid = function (username, password) {
    return (
      username === this.username && hashPassword(password) === this.password
    )
  }
  User.associate = function (models) {
    // associations can be defined here
  }
  return User
}

// パスワードをハッシュ化
const hashPassword = (passward) =>
  crypto.createHmac('sha256', config.crypto.key).update(passward).digest('hex')

// パスワードをハッシュ化(フック用)
const hashPasswordHook = (user) =>
  user.set('password', hashPassword(user.get('password')))
