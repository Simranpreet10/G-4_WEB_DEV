// const http = require("node:http");

// const server = http.createServer((req,res)=>{

// })

// server.listen(8000,()=>console.log("Server running on port 8000....."))


const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'CodingBlocks';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('students');

  const insertResult=await collection.insertMany([
    {
    name: "simran",
    roll_no: 854,
    class: "G-4"
    }
]);
  console.log("inserted documents => ", insertResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());