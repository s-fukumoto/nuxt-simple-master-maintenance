const fs = require('fs')
const iconv = require('iconv-lite')

module.exports = {
  // UTF8変換
  convertFileUtf8: (filePath, encoding) => {
    const data = fs.readFileSync(filePath)
    // const str = iconv.decode(data, encoding).replace(/\r\n/gm, "\n")
    const str = iconv.decode(data, encoding)
    fs.writeFileSync(filePath, str)
    console.log('file convert completed !!')
  },

  // delete
  deleteFile: (filePath) => {
    console.log('file delete start !!')
    fs.unlink(filePath, (err) => {
      console.log('file delete completed !!')
    })
  },

  detectNewline: (filePath) => {
    const newlines = fs.readFileSync(filePath, 'utf8').match(/(?:\r?\n)/g) || []
    const crlf = newlines.filter((nl) => {
      return nl === '\r\n'
    }).length
    const lf = newlines.length - crlf
    return crlf > lf ? '\r\n' : '\n'
  },
}
