var providers=require('../models/providers.models');

//CRUD - create(POST) , Read(GET), Update(PUT), Delete(DELETE)

//POST
//uri: /api/providers
module.exports.create=function(req,res){
    //create a random id
let min=100000;
let max=999999;
let id=Math.floor(Math.random()*(max-min)+min);
//create new provider object
let provider={  
    id:id,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    position:req.body.position,

    company:{
            
        company_name:req.body.company.company_name,
        address:req.body.company.address,
        address2:req.body.company.address2,
        city:req.body.company.city,
        state:req.body.company.state,
        phone:req.body.company.phone,
        email:req.body.company.email,
        description:req.company.body.description,
        tagline:req.body.company.tagline,
        }
    }
    //add new provider to list
    providers.push(provider);
    res.status(201);
    res.send(providers);
}



//GetAll
//uri: /api/providers
module.exports.readAll=function(req,res){
    res.status(200);
    res.send(providers);
}


//Getone
//uri: /api/providers/123
module.exports.readOne=function(req,res){
    let id=req.params.id;
    let provider=providers.find(provider=>provider.id==id);
    res.status(200);
    res.send(provider);
}



//Put
//uri: /api/providers/123
module.exports.update=function(req,res){
    let id=req.params.id;
    let provider=providers.find(provider=>provider.id==id);
    provider.firstname=req.body.firstname;
    provider.lastname=req.body.lastname;
    provider.position=req.body.position;
    provider.company.company_name=req.body.company.company_name;
    provider.company.address=req.body.company.address;
    provider.company.address2=req.body.company.address2;
    provider.company.city=req.body.company.city;
    provider.company.state=req.body.company.state;
    provider.company.phone=req.body.company.phone;
    provider.company.email=req.body.company.email;
    provider.company.description=req.body.company.description;
    provider.company.tagline=req.body.company.tagline;
    res.status(200);
    res.send(providers);
}



//delete one
//uri: /api/providers
module.exports.deleteOne=function(req,res){
    let id=req.params.id;
    let provider=providers.find(provider=>provider.id==id);
    let idx=providers.indexOf(provider);

    //remove the element at the index of "idx"
    providers.splice(idx,1);
    res.status(200);
    res.send(provider);
}


//delete all
//uri: /api/providers
module.exports.deleteAll=function(req,res){
    providers=[];
    res.status(200);
    res.send("All providers deleted");
}

