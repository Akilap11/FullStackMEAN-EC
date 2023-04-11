//astnchronous
//IOCycle
let fs=require('fs')

let total=0
fs.readFile('./index.js',()=>{
    setTimeout(print1,0)  //call the function outside loop after 0ms
    //print()  
    //above print() cant print this. n hasnt initialized yet(synchronously)
    //so we use setTimeOut function
    setImmediate(print2)
})



let n=1


function print1(){
    total=n*10;
    console.log("Total 1 is: "+total)
    n++;
}
function print2(){
    total=n*10;
    console.log("Total 2 is: "+total)
}