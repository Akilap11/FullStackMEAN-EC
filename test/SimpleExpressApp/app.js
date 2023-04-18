const express=require('express');  //express library
const fs=require('fs');      //file system libraries
const dir='./Public/';       //directory for public files
const port=process.env.PORT || 3000; //port number

const app=express();

app.get('/',(req,res)=>{
    render(res,'index.html');
})

app.get('/about',(req,res)=>{
    render(res,'about.html');
})

app.get('/contact',(req,res)=>{
    render(res,'contact.html');
});

app.listen(port,()=>{
    console.log('http://localhost:${port}');
});

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