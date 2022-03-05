const { MongoClient } = require ("mongodb");
require("dotenv").config();

const uri = process.env.MONGODB

//first method
/* MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, async(error, result)=>{

    if (error) {
       return  console.log("Can not be connected with DB" + error);
    }

    console.log("Connected with DB");
    const db = result.db('udemy_mongodb');

   await db.collection('users').insertOne({
        name:'Hakan',
        age:32,
        isEmployee:true
    
    }).then(result =>  console.log(result)
       
    ).catch(error => console.log(error))


}) */
let db;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(async(err, result) => {
    if(err){return console.log("Cannot connected to DB");}
    
    db=await result.db('udemy_mongodb')
    console.log('Connected to DB');
});
console.log(db);

const collection = db.collection("users");

collection.insertOne({
    name:"Mehmet",
    age:38
}).try(result => console.log(result)).catch(error => console.log(error))