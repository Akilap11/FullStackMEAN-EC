//creating server

const http=require('http'); //http libraries
const fs=require('fs');      //file system libraries
const dir='./Public/';       //directory for public files
const port=process.env.PORT || 3000; //port number

const server=http.createServer((req,res)=>{

    if(req.url==='/'){
        render(res,'index.html');
    }else if(req.url==='/about'){
        render(res,'about.html');
    }else if(req.url==='/contact'){
        render(res,'contact.html');
    }else{
        res.writeHeader(404,{'Content-Type':'text/html'});
        res.end('<h1>404 file not found</h1>')
    }

}).listen(port, ()=>{
    console.log('http://localhost:${port}');
})

//now server is created.
//then create the route inside createserver

const render=(res,file)=>{
    fs.readFile(dir+file,(err,data)=>{
        if(err){
            res.writeHeader(404,{'Content-Type':'text/html'});
            res.end('<h1>404 file not found</h1>')
        }
        res.writeHeader(200,{'Content-Type':'text/html'});
        return res.end(data);
        
    });
}