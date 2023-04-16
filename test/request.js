const http=require('http')
const data=JSON.stringify({
    title: "MEAN Stack" 
})

const options={
    hostname:'localhost',
    port:3000,
    path:'/',
    method:'GET',
    headers:{
        'content-type':'application/json',
        'content-length':data.length
    }
}

const request=http.request(options,response=>{
    response.on('data',chunk=>{
        //same like console.log
        process.stdout.write(chunk)
    })
})

request.on('eeror',error=>{
    console.error(error)
})

request.end();