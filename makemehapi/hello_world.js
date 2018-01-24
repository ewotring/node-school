var Hapi = require('hapi');
var server = new Hapi.Server({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});
server.route({
  path: '/',
  method: 'GET',
  handler: function (request, reply) {
    return 'Hello World!';
  }
});
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});

/*
OFFICIAL SOLUTION:
const Hapi = require('hapi');

    (async () => {
        try {
            const server = Hapi.Server({
                host: 'localhost',
                port: Number(process.argv[2] || 8080)
            });

            server.route({
                path: '/',
                method: 'GET',
                handler: (request, h) => {
                    return 'Hello World!';
                }
            });

            await server.start();

            console.log(`Server running at: ${server.info.uri}`);
        } catch (error) {
            console.log(error);
        }
    })();

    */