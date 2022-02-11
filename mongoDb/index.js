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


/* export async function deleteOne(id) {
  try {
      const objId= new ObjectId(id);
      // Verbunden mit EINER INSTANZ
      await client.connect();
      // Wähle eine Datenbank
      const db = client.db('test-2');
      // Wähle Collection
      const collection = db.collection('animals');

      const deletedAnimal = getOne(id)

      await collection.deleteOne(objId)

      return deletedAnimal;
      

  } catch (e) {
      console.error(e);
  } finally {
      client.close();
  }
} */

/* app.delete('/animals/:id', async(req, res)=>{
  const id=req.params
  const result = await deleteOne(id);
  res.send(`${result} wurde gelöscht`)
}); */