const http = require('http');

// Your name
const myName = 'Preeti Kurmi';

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response status and headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Log your name to the console
  console.log(myName);
  
  // Send your name as the response to the browser
  res.end(myName);
});

// Listen on port 4000
const port = 4000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
