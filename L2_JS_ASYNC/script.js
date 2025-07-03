// console.log("SCRIPT START");

// setTimeout(()=>{
//     console.log("I AM GOING TO RESTAURANT")
// },4000);

// setTimeout(()=>{
//     console.log("I AM CHECKING THE MENU FOR ORDERING")
// },3000);



//callback
// function walkInRestaurant(cb){
//     console.log("I am walking inside the restaurant");
//     setTimeout(cb,3000);
// }

// function menuCheck(cb){
//     console.log("I am checking the menu");
//     setTimeout(cb,4000);
// }

// function foodOrder(cb){
//     console.log("I am ordering the food");
//     setTimeout(cb,6000);
// }

// function havingLunch(cb){
//     console.log("I am having the food ");
//     setTimeout(cb,8000);
// }

// function paybill(cb){
//     console.log("I am payi9ng the bill");
//     setTimeout(cb,3000);
// }

// function walkAwayFromRes(){
//     console.log("BYE BYE GOING HOME");
// }

// walkInRestaurant(()=>{
//     menuCheck(()=>{
//         foodOrder(()=>{
//             havingLunch(()=>{
//                 paybill(()=>{
//                     walkAwayFromRes();
//                 })
//             })
//         })
//     })
// })

// console.log("SCRIPT END");



//Array Operations
let arr3 = [2,3,4,6,8,5]

// function doubleArrayVal(arr){
//     let arr2=[];
//     for(let i=0;i<arr.length;i++){
//         arr2.push(arr[i]*2);
//     }
//     return arr2;
// }

// const output = doubleArrayVal(arr);
// console.log(output);


Array.prototype.calculate = function (logic){
    let arr2=[];
    for(let i=0;i<this.length;i++){
        arr2.push(logic(this[i]));
    }
    return arr2;
}

let output = arr3.calculate(triple);
function triple(x){
    return x*x*x;
}

console.log(output);

