const http = require('http');
const fs = require('fs');
const port = 8000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if (req.url == "/") {
        res.write('<html>');
        res.write('<head><title>My document</title></head>');
        res.write('<body> <form action="/message" method="POST">');
        res.write('<input type="text" name="message" id="message">');
        res.write('<button type="submit">send</button>');
        res.write('</form>');

        // Check if there's a message to display
        if (req.method === 'POST') {
            const body = [];
            req.on('data', (chunk) => {
                body.push(chunk);
            });
            req.on('end', () => {
                const parsebody = Buffer.concat(body).toString();
                const message = parsebody.split("=")[1];
                fs.writeFile('message.txt', message, (err) => {
                    if (err) {
                        console.error(err);
                        res.statusCode = 500;
                        res.end('Internal Server Error');
                    } else {
                        // Display the message on the same page
                        res.write(`<p>Message: ${message}</p>`);
                        res.statusCode = 200;
                        // Include the input field in the form with the previous message
                        res.write('</form></body></html>');
                        return res.end();
                    }
                });
            });
        } else {
            // No message to display initially
            res.write('</form></body></html>');
            return res.end();
        }
    } else {
        
        res.end("<p>end</p>");

    }
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
   

//     console.log(req.url);
//     if (req.url === '/home') {
//         res.end('<h1>Welcome Home</h1>');
//     } else if (req.url === '/about') {
//         res.write("<h1>About us page</h1>");
//         res.end('<h1>Welcome to About us Page</h1>');
//     } else if (req.url === '/node') {
//         res.end('<h1>Welcome to my Node.js project</h1>');
//     } else {
//         res.end("<p>The end</p>");
//     }
// });
// const http=require('http');
// const fs=require('fs');
// const port=process.env.port || 3000;
// const server=http.createServer((req,res)=>{
   
//     res.statusCode=200;
//     res.setHeader('Content-Type','text/html')
//     console.log(req.url);
//     if(req.url=='/'){
//         res.end('<h1>this is a cosde</h1>');
//     }
//     else if(req.url=='/about'){
//         res.end('<h2>this is 2nd req</h2>')

//     }
//     else if(req.url=='/hello'){
//         res.statusCode=200;
//         const data=fs.readFileSync('index1.html');
//         res.end(data.toString());
//     }
//     else{
//         res.end('<p>bye</p>')
//     }
//     res.end('<h1>This is preeti page</h1>');

// })
// server.listen(port,()=>{
//     console.log(`server done ${port}`)
// })
