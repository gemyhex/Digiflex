var StaticServer = require('static-server'),
    server = new StaticServer({
        rootPath: './server.js',
        port: 8000
    });

server.start(function(){
    console.log('Server Starts at Port >> ' , server.port);
});