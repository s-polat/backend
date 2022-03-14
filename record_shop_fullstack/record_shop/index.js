import 'dotenv/config'
import express from "express"
import recordsRoutes from './routes/records.routes.js';
import usersRouter from './routes/users.routes.js';
import ordersRoutes from './routes/orders.routes.js'
import cors from 'cors'
import { connectMongoose } from "./database-mongoose.js";
import { auth } from './middleware/AuthMiddleware.js';
 /* baslangicta npm init , npm install express lowdb, terminale yazilarak gerekli paketler yüklenir
 
 sonra import kullanabilmek icin package.json a "type": "module", yapistirmamiz lazim*/


 const app = express();
 const PORT = process.env.PORT || 4000;
 const uri =process.env.MONGODB;

connectMongoose(uri);


app.use(cors())
app.use(express.json()); //bu komut olmadan posttan gelen veriyi dataya alamayiz
app.use(auth())

app.use('/records', recordsRoutes);
app.use('/users', usersRouter);
app.use('/orders' ,ordersRoutes);



// Start server
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
    console.log('Server läuft auf Port: ' + PORT);
});