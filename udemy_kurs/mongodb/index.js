const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;
require("dotenv").config();


const uri = process.env.MONGODB


MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, async(error, result)=>{

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


})