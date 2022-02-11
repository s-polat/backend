import express from "express";
import { MongoClient } from "mongodb";
import 'dotenv/config'
import flightRouter from './routes/flights.js'


const uri = `mongodb+srv://spolat:${process.env['DB_PASSWORD']}@cluster0.zvd2f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express()


app.use(express.json())

app.use('/', flightRouter)

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    console.log('Connected to DB');
   console.log(err)
    
});



app.listen(3000, () => {
  console.log('Backend started')
})


export {client}


