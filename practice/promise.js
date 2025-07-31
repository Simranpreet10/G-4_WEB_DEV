let p = new Promise((res,rej)=>{
    let a = 10;
    if(a==9){
         res("Promise resolved")
    }else{
        rej("Rejected");
    }
})

p.then(res=>console.log(res)).catch(err=>console.log(err))