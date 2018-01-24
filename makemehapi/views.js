'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const Path = require('path');
const Vision = require('vision');

(async () => {
  try {
    const server = Hapi.Server({
      host: 'localhost',
      port: process.argv[2] || 8080
    });

    await server.register(Inert);

    await server.register(Vision);

    server.views({
      engines: {
        html: require('handlebars')
      },
      path: Path.join(__dirname, 'templates')
    })

    server.route({
      method: 'GET',
      path: '/',
      handler: {
        view: 'index'
      }
    })

    await server.start();
    console.log(`Server running at ${server.info.uri}`);
  } catch (error) {
    console.log(error);
  }
})();

/*
official solution:

    const Path = require('path');
    const Hapi = require('hapi');
    const Vision = require('vision');
    const Handlebars = require('handlebars');

    (async () => {
        try {
            const serverPort = process.argv[2] || 8080;
            const server = Hapi.Server({
                host: 'localhost',
                port: process.argv[2] || 8080
            });

            await server.register(Vision);

            server.views({
                engines: {
                    html: Handlebars
                },
                path: Path.join(__dirname, 'templates')
            });

            server.route({
                path: '/',
                method: 'GET',
                handler: {
                    view: 'index.html'
                }
            });

            await server.start();

            console.log(`Server running at: ${server.info.uri}`);
        } catch (error) {
            console.log(error);
        }
    })();

    */