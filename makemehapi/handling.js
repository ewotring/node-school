var Hapi = require('hapi');
var Inert = require('inert');
var server = new Hapi.Server({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
})