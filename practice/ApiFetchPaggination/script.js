let users = [];
let currpage = 1;
let rowsPerPage = 5;


const tbody = document.querySelector('#usertable tbody');
const prevbtn = document.getElementById('prev');
const nextbtn = document.getElementById('next');
const pageinfo = document.getElementById('pageinfo');
const rowsPerPageselect = document.getElementById('rowsperpage');

async function fetchUsers(){
    const res = await fetch('https://dummyjson.com/users?limit=100');
    const data = await res.json();
    users = data.users;
    rendertable();
}

function rendertable(){
    tbody.innerHTML='';
    const start = (currpage-1)*rowsPerPage;
    const end = start+rowsPerPage;

    const pageusers = users.slice(start,end);

    pageusers.forEach(user=>{
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${user.id}</td><td>${user.firstName}</td><td>${user.age}</td>`
        tbody.appendChild(tr);
    });

    const totalPages = Math.ceil(users.length/rowsPerPage);
    pageinfo.textContent=`Page${currpage} of ${totalPages}`;
    prevbtn.disabled = currpage ===1;
    nextbtn.disabled = currpage === totalPages;
}


prevbtn.onclick=()=>{
    if(currpage>1){
        currpage--;
        rendertable();
    }
}

nextbtn.onclick=()=>{
    const totalPages = Math.ceil(users.length/rowsPerPage);
    if(currpage<totalPages){
        currpage++;
        rendertable();
    }
}

rowsPerPageselect.onchange=()=>{
    rowsPerPage = parseInt(rowsPerPageselect.value,10);
    currpage = 1;
    rendertable();
};


fetchUsers();