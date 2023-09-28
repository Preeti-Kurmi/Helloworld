const http = require('http');
const port=8000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
   

    console.log(req.url);
    if (req.url === '/home') {
        res.end('<h1>Welcome Home</h1>');
    } else if (req.url === '/about') {
        res.end('<h1>Welcome to About us Page</h1>');
    } else if (req.url === '/node') {
        res.end('<h1>Welcome to my Node.js project</h1>');
    } else {
        res.end("<p>The end</p>");
    }
});

server.listen(port,()=>{
    console.log(`server done ${port}`)
})

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
