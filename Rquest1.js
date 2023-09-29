const http = require('http');
const Route=require('./Route')
const port = 8000;
console.log(Route.someText)
const server = http.createServer(Route.handler);

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
