const https = require('https')
const fs = require('fs')
const ssl = require('./ssl.js')

const config = require('./config.js')

module.exports = (folder) => {
  const conf = config(folder + 'config.json')
  const port = conf.port || 6555

  https.createServer(ssl.getHttpsCerts(folder, conf), (req, res) => {

  }).listen(port)
}
