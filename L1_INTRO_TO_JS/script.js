// console.log("HELLO WORLD");

// var a = 123;
// console.log(a);

// function abc(){
//     console.log("THIS IS FUNCTION ABC");

//     function hgf(){
//         console.log("THIS IS HGF");
//     }
//     hgf();
// }

// def()

// function def(){
//     console.log("THIS IS FUNCTION DEF");
// }

// abc();

// var b = 300;
// console.log(b);

// console.log(xyz);  

// //arrow function
// var xyz=()=>{
//     console.log("XYZ function called");
// }



// {
//     //Compound statement
//     //GrandParent
//     let a = 100;
//     let b = 200;
//     let c = 300;
//     console.log(d);
    

//     {
//         //parent
//         {
//             //child 
//             let d = 200000;
//             console.log(a);
//             console.log(b);
//             console.log(c);
//         }
//     }
// }


// function abc(){
//     let a = 100;
//     let b = 200;
//     let c = 300;
    
//     function def(){
//         let d = 200000;
//         function ijk(){
//             console.log(a);
//             console.log(b);
//             console.log(c);
//             console.log(d);
//         }
//         ijk();
        
//     }
//     def();
// }
// abc();



// for(var i =0;i<=5;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },2000)
// }



//closure
// for(var i =0;i<=5;i++){
//     function closure(i){
//     setTimeout(()=>{
//         console.log(i);
//     },2000)
// }
// closure(i); 
// }



//HOF
// function xyz(cb){
//     console.log("I am xyz fxn");
//     cb();
// }

// function cb(){
//     console.log("I am cb fxn");
// }

// xyz(cb);

function xyz(){
    // console.log("I am xyz fxn");
    return cb();
}

function cb(){
    console.log("I am cb fxn");
}
xyz();

