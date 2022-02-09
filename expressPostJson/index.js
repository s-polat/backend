import express from "express";
const port = 4000

const app = express();
app.use(express.json()); // 'Plugin' / Middleware. Dann wird req.body ein JSON object


//Routen
app.get('/test', (req,res) =>{
    res.send('OK')
})

app.post('/text', (req, res)=>{

    const body= req.body;
    const pets= body.pets ?? [];  //<-- Array. Default-Wert, falls keine pets 
    const amount= pets.length;

    res.send(`Hello ${body.name}. Du hast ${amount} Hausttiere.`)

});

//Server start

app.listen(port, ()=>{
    console.log('Server started...');
})