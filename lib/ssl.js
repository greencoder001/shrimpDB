const fs = require('fs');

exports.getHttpsCerts = (f, c) => {
  return {
    key: fs.readFileSync(c.ssl.key),
    cert: fs.readFileSync(c.ssl.cert)
  }
}
