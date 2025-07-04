let cart = ["shoes","shirt","wallets"];

function orderDetail(cart,orderSummary){
    setTimeout(()=>{
        let numberOfproducts = cart.length;
        let total = numberOfproducts*1000;

        orderSummary(numberOfproducts,total,paymentGateway);
    },2000)
}
function orderSummary(numberOfproducts,total,paymentGateway){
    setTimeout(()=>{
        let orderId = Math.floor(Math.random() * 1000000);
        paymentGateway(orderId,numberOfproducts,total,successfulOrder);
    },3000)
}
function paymentGateway(orderId,numberOfproducts,total,successfulOrder){
    setTimeout(()=>{
        console.log(`payment is Successful ${orderId}`);
        successfulOrder(orderId,numberOfproducts,total);
    },4000)
}
function successfulOrder(orderId,numberOfproducts,total){
    setTimeout(()=>{
        const ans ={
        orderId,
        numberOfproducts,
        total
    };
    console.log(ans);
    },5000)
    
}

orderDetail(cart,orderSummary)





//Prototype of filter

// let arr = [6,7,8,2,4,9]
// Array.prototype.filterr = function (logic){
//     let output = [];
//     for(let i=0;i<this.length;i++){
//         if(logic(this[i])){
//             output.push(this[i]);
//         }
//     }
//     return output;
// }
// function logic(x){
//     return x%2==0;
// }
// let output = arr.filterr(logic);
// console.log(output);



// prototype of reduce
// let arr = [1,2,3,4,5];
// Array.prototype.reducerr = function(logic,initial){
//     let ans =initial;
//     for(var i=0;i<this.length;i++){
//         ans = logic(ans,this[i]);
//     }
//     return ans;
// }

// function logic(ans,ele){
//     ans = ans+ele;
//     return ans;
// }

// let output = arr.reducerr(logic,2) ;
// console.log(output);


























































