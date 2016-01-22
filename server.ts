declare function require(x: string): any;

var http = require('http');
var server = http.createServer(function(request, response){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write('Hello, morimorihoge');
    response.end();
});

server.listen(8080);
console.log('server started.');
