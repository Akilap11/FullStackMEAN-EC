const mongoose = require('mongoose');

//define a schema
const Schema=mongoose.Schema;

//create company schema(child or sub-document)
const companySchema=new Schema({
            "company_name": {type:String,required:true},
            "address": {type:String,required:true},
            "address2": String,
            "city": {type:String,required:true},
            "state": {type:String,required:true,min:2,max:2},
            "postal_code": {type:String,required:true,min:5},
            "phone": {type:String,required:true},
            "email": {type:String,required:true, unique:true},
            "description": String,
            "tagline": String

})

//create provider schema(top-level document)
const providerSchema=new Schema({
        "firstname": {type:String,required:true},
        "lastname": {type:String,required:true},
        "position": String,
        "company": companySchema
})//there are 2 documents. 1 nested inside another

module.exports={providerSchema,companySchema}
