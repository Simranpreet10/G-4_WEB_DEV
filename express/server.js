const app = require("express")
const isloggin = function(req,res,next){
    console.log("Logged in");
    next();
}

app.use(isloggin);

app.get("/",(req,res)=>{
    res.send("This is home");
})
app.get("/dashboard",(req,res)=>{
    res.send("This is dashboard");
})
app.get("/cart",(req,res)=>{
    res.send("This is cart page");
})
app.get("/payment",(req,res)=>{
    res.send("This is payment");
})

app.listen(3000);