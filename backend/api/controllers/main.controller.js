
var providers=require('../models/providers.models');

//util functions
//check if empty is empty
function isEmptyList(obj){
    return (!obj || 0 === obj.length|| Object.keys(obj).length === 0);
}

//check for existin gprovider
function existsProvider(id){
    return providers.find(provider=>provider.id==id)
}

//generate a unique provier id
function getUniqueId(providers){
    let min=100000;
    let max=999999;
    do{
        var id=Math.floor(Math.random()*(max-min)+min);
    }while(existsProvider(id));
    return id;
}


//CRUD - create(POST) , Read(GET), Update(PUT), Delete(DELETE)

//POST
//uri: /api/providers
module.exports.create=function(req,res){
    //create a random id
    if(isEmptyList(providers)){
        providers=[];
    }
    var id=req.body.id;
    if(existsProvider(id)){
        res.status(400);
        res.send('Duplicate id not allowed'); 
        id=getUniqueId(); //unique id
    }
    var provider=req.body;
    provider.id=id;

    //add new provider to list
    providers.push(provider);
    res.status(201);
    res.send(providers);
}



//GetAll
//uri: /api/providers
module.exports.readAll=function(req,res){
    if(isEmptyList(providers)){
        res.status(404);
        res.send("List is empty");
    }
    res.status(200);
    res.send(providers);
}


//Getone
//uri: /api/providers/123
module.exports.readOne=function(req,res){
    if(isEmptyList(providers)){
        res.status(404);
        res.send("List is empty");
    }
    let id=req.params.id;
    let provider=providers.find(provider=>provider.id==id);
    res.status(200);
    res.send(provider);
}



//Put
//uri: /api/providers/123
module.exports.update=function(req,res){
    if(isEmptyList(providers)){
        res.status(404);
        res.send("List is empty,cannot update");
    }
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
    if(isEmptyList(providers)){
        res.status(404);
        res.send("List is empty,cannot delete");
    }
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
    if(isEmptyList(providers)){
        res.status(404);
        res.send("List is empty,cannot delete");
    }
    providers=[];
    res.status(200);
    res.send("All providers deleted");
}

