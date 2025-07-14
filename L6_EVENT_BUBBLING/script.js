console.log("SCRIPT START");

const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

//Bubbling

// grandParent.addEventListener("click",()=>{
//   console.log("GRANDPARENT CLICKED!!");
// })

// parent.addEventListener("click",()=>{
//   console.log("PARENT CLICKED!!");
// })

// child.addEventListener("click",()=>{
//   console.log("Child CLICKED!!");
// })


//capturing
// grandParent.addEventListener("click",()=>{
//   console.log("GRANDPARENT CLICKED!!");
// },true)

// parent.addEventListener("click",()=>{
//   console.log("PARENT CLICKED!!");
// },true)

// child.addEventListener("click",()=>{
//   console.log("Child CLICKED!!");
// },true)



// grandParent.addEventListener("click",(e)=>{
//   console.log("GRANDPARENT CLICKED!!");
//   e.stopPropagation();
// },false)

// parent.addEventListener("click",(e)=>{
//   console.log("PARENT CLICKED!!");
//   e.stopPropagation();
// },false)

// child.addEventListener("click",(e)=>{
//   console.log("Child CLICKED!!");
//   e.stopPropagation();
// },false)


//Event Delegation
// const productlist = document.getElementById("productLists");

// productlist.addEventListener("click",(event)=>{
//   if(event.target.tagName==="LI"){
//     console.log("Clicked on : ", event.target.textContent);
//   }
// })


//If i want to add new element
// const newelement = document.createElement("li");
// newelement.textContent = "Bottle"
// productList.appendChild(newelement);


const textBox = document.getElementById("text-box");
textBox.addEventListener("input",(e)=>{
  // console.log("typed: ",e.target.value);
  
})