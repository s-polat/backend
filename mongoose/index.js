import express from "express";
import mongoose from "mongoose"
import 'dotenv/config'
import flightRouter from './routes/flights.js'


const uri = `mongodb+srv://spolat:${process.env['DB_PASSWORD']}@cluster0.zvd2f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express()


app.use(express.json())

app.use('/', flightRouter)

// Mit Dartenbank verbinden
mongoose.connect(uri, err => {
  console.log('Connected to DB')
});




app.listen(3000, () => {
  console.log('Backend started')
})


