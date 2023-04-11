//require, exports, module, __dirname,__filename

console.log(__dirname);  //directory
console.log(__filename);

let names=['a','b','c']
let scores=[100,90,89]

exports.name=names
module.exports.score=scores
exports.data=[1,2,3,4]
//all are same. TO EXPORT; )

//we can print here. or export from another file(model2.js)
//console.log(module);