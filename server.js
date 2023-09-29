const http = require('http');
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Preeti!');
  console.log('Preeti');
});

server.on('error', (error) => {
  console.error('Server error:', error);
});

server.listen(3000, () => {
  console.log('Server is listening on port 4000');
});
