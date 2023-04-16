const http=require('http')
const server=http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/html'});

    //to check the request method
    if(request.url=='/get'){
        response.write('Get page');
        if(request.method==='GET'){
            response.end('GET');
        }

    }else if(request.url=='/post'){
        response.write('post page');
        if(request.method==='POST'){
            response.end('POST');
        }

    }else if(request.url=='/put'){
        response.write('put page');
        if(request.method==='PUT'){
            response.end('PUT');
        }
    
    }else if(request.url=='/delete'){
        response.write('delete page');
        if(request.method==='DELETE'){
            response.end('DELETE');
        }
    
    }else{
        response.end('None found')
    }

    
});

server.listen(3000,()=>
    console.log('http://localhost:3000')
);


