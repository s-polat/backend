import express from "express"
import { getAllRecords } from "./controller/records.controller.js";
import recordsRoutes from './routes/records.routes.js';
import usersRouter from './routes/users.routes.js';
import cors from 'cors'

 /* baslangicta npm init , npm install express lowdb, terminale yazilarak gerekli paketler yüklenir
 
 sonra import kullanabilmek icin package.json a "type": "module", yapistirmamiz lazim*/


 const PORT = process.env.PORT || 4000;
 const app = express();

app.use(cors())
app.use(express.json()); //bu komut olmadan posttan gelen veriyi dataya alamayiz

app.use('/api', getAllRecords)
app.use(recordsRoutes);
app.use(usersRouter);



// Start server
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});