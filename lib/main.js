exports.run = (args) => {
  const argv = args.slice(2)
  const server = require('./server.js')
  if (argv[0] === '--folder' && argv[1]) {
    argv[1] = argv[1].replace(/\\/g, '/')
    argv[1] = argv[1].endsWith('/') ? argv[1] : argv[1] + '/'
    server(argv[1])
  } else {
    server('../server/')
  }
}
