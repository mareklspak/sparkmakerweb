var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome to SparkMaker! We will be online on the 28th of July 22:00 CET\n');
}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');
