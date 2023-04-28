const mongoose=require('mongoose');

const {providerSchema}=require('../schemas/provider.schemas');

//create provider model
const provider=mongoose.model('Provider',providerSchema);

module.exports={provider};

