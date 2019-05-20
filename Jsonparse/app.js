const http = require('http');



http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text-plain'});
    response.write('Hello, World');
});
server.listen(8000);