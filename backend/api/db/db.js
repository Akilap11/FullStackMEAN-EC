const mongoose= require('mongoose');
const {Provider}=require('../models/provider');

//connection URI to mongoDB
const uri="mongodb+srv://akilatharinda05:--__--@mean.r22mp1w.mongodb.net/provider_db"

//make db connection(asynchronously)
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(result=>{
        console.log("connected to mongoDB");
})
.catch(error=>console.log(error));

module.exports=Provider;
