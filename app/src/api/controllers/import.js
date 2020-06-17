const config = require('config')
const fileUtil = require('../helpers/fileUtil')
const mysqlUtil = require('../helpers/mysqlUtil')

module.exports = {
  // インポート実行
  execute: async (req, res, next) => {
    try {
      const tableConf = config.import.table[req.params.type]
      tableConf.encoding &&
        (await fileUtil.convertFileUtf8(req.file.path, tableConf.encoding))
      await mysqlUtil.loadFromFile(
        req.file.path,
        tableConf.name,
        { ignoreLines: tableConf.ignoreLines },
        fileUtil.deleteFile
      )
    } catch (e) {
      console.error(e)
      res.status(500).json({ status: 'NG', error: e })
    }
    res.json({ status: 'OK' })
  },
}
