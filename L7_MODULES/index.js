console.log("SCRIPT JS");

//calculator
// function sumOfTwo(a,b){
//     console.log(a+b);
//     return a+b;
// }

// const {sumOfTwo,xy} = require("./calculate/sumOfTwo.js")
// const mulOfTwo = require("./calculate/mulOfTwo.js");


const {sumOfTwo,mulOfTwo,DivOFTwo} = require("./calculate/index.js");

sumOfTwo(10,20);
mulOfTwo(10,20);
DivOFTwo(40,10);