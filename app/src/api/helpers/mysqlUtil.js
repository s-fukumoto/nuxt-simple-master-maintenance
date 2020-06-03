const fs = require('fs')
const assert = require('assert')
const mysql = require('mysql2/promise')
const config = require('config')
const fileUtil = require('./fileUtil')

const dbConfig = {
  host: config.db.host,
  port: config.db.port,
  user: config.db.username,
  password: config.db.password,
  database: config.db.database,
  flags: ['+LOCAL_FILES'],
}

module.exports = {
  loadFromFile: async (filePath, tableName, options, callback) => {
    console.log('load file start !!')

    let connection
    try {
      connection = await mysql.createConnection(dbConfig)

      await connection.beginTransaction()

      await connection.query('TRUNCATE TABLE ??', [tableName])

      const sql =
        'LOAD DATA LOCAL INFILE ? ' +
        'INTO TABLE ?? ' +
        'CHARACTER SET utf8 ' +
        'FIELDS TERMINATED BY ? ENCLOSED BY ? ' +
        'LINES TERMINATED BY ? ' +
        'IGNORE ? LINES'
      const values = [
        filePath,
        tableName,
        ',',
        '"',
        fileUtil.detectNewline(filePath),
        parseInt(options.ignoreLines) || 0,
      ]
      await connection.query({
        sql,
        values,
        infileStreamFactory: () => fs.createReadStream(filePath),
      })

      await connection.commit()
    } catch (err) {
      connection.rollback()
      assert.ifError(err)
    } finally {
      callback(filePath)
    }

    console.log('load file comleated !!')
  },
}
