// const fs = require('node:fs');
// const https = require('node:https');

// var a = 20;
// console.log(a);

// fs.readFile('./kuchbhi.txt','utf8',(err,data)=>{
//     console.log("FS: ",data);
// });

// function xyz(){
//     console.log("this is function");
// }



// Promise.resolve("RESOLVE").then(console.log("P3"))

// process.nextTick(()=>{
//     console.log("This is next2");
// }); 



Promise.resolve("RESOLVE").then(()=>console.log("P3"))

process.nextTick(()=>{
    console.log("This is next2");
}); 


   