'use strict';

const Hapi = require('hapi');
const Vision = require('vision');

(async () => {
  try {
    const server = Hapi.server({
      host: 'localhost',
      port: process.argv[2] || 8080
    });

    await server.register(Vision);

    server.views({
      engines: {
        html: require('handlebars')
      },
      helpersPath: 'helpers'
    })

    server.route({
      method: 'GET',
      path: '/'
    })
  } catch (error) {
    console.log(error);
  }
})();