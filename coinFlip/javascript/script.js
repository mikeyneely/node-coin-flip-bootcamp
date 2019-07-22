const http = require('http');
const fs = require('fs')
const hostname = '135.84.57.36';
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile('index.html', function(err, data)) {
  res.writeHead(200, {'content-type' : 'text/html'});
  res.write(data);
  res.end();
});

server.listen(3000, '135.84.57.36', () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
