const http=require('http')
const server=http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write('<h1>Welcome to Node.js!</h1>');
    response.end();
});

server.listen(3000,()=>
    console.log('http://localhost:3000')
);