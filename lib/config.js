const fs = require('fs')

module.exports = (f) => {
  return JSON.parse(fs.readFileSync(f).toString('utf-8'))
}
