// let userdata = [
//     {
//         FirstName:"Simran",
//         age:"21"
//     },
//     {
//         FirstName:"Sneha",
//         age:"19"
//     },
//     {
//         FirstName:"Sujal",
//         age:"22"
//     }
// ]

// const ans = userdata.filter((x)=> x.age>20).map(x=>x.FirstName);
// console.log(ans);

// const mypromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("foo");
//     },300);
// });


// const PriyanshuPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("I got placed");
//     },5000)
    
// })

// PriyanshuPromise.then((res)=>{
//     console.log("Priyanshu getting salary 1cr")
//     console.log(res);
// })
// .then(()=>{
//     console.log("party time");
// })
// .then(()=>{
//     console.log("working hard");
// })
// .then(()=>{
//     console.log("layoff");
// })
// .catch((err)=>{
//     console.log(err)
// })


// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Assignment completed by p1");
//     },4000)
    
// })
// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Assignment completed by p2");
//     },8000)
    
// })
// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Assignment completed by p3");
//     },3000)
    
// })
// const p4 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Assignment completed by p4");
//     },1000)
    
// })

//In Promise.all if any of the promise rejected then all other promises will be rejected 
// Promise.all([p1,p2,p3,p4]).then((res)=>console.log(res)).catch((err)=>console.log(err));


//It will show everything whether resolve or rejected
// Promise.allSettled([p1,p2,p3,p4]).then((res)=>console.log(res)).catch((err)=>console.log(err));


// Promise.race([p1,p2,p3,p4]).then((res)=>console.log(res)).catch((err)=>console.log(err));


// Promise.any([p1,p2,p3,p4]).then((res)=>console.log(res)).catch((err)=>console.log(err));


//async await
// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Assignment completed by p1");
//     },2000);
    
// })

// async function checkAssignment(){
//     const data = await p1;
//     console.log("Checking the Assignment",data);
// }

// checkAssignment();


// const ans = fetch("https://dummyjson.com/products").then((res)=>console.log(res));
// script.js

async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const json = await response.json();

    const list = document.getElementById('product-list');

    json.products.forEach(product => {
      const li = document.createElement('li');
      li.textContent = `Name: ${product.title}, Description: ${product.description}, Price: $${product.price}`;
      list.appendChild(li);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
